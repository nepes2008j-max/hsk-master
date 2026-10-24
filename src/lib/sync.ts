"use client";

import { doc, getDoc, setDoc } from "firebase/firestore";
import { db, auth } from "./firebase";
import {
  getAllSRSStates, saveSRSState,
  getUserCards, saveUserCard,
  getTestResults, saveTestResult,
  getProgress, saveProgress,
  setOnWrite,
  type UserCard, type TestResult, type ProgressData,
} from "./storage";
import type { CardState } from "./srs";

interface CloudData {
  srs: CardState[];
  userCards: UserCard[];
  tests: TestResult[];
  progress: ProgressData;
  updatedAt: number;
}

let syncTimer: ReturnType<typeof setTimeout> | null = null;
let pushing = false;

async function getLocalSnapshot(): Promise<CloudData> {
  const [srs, userCards, tests, progress] = await Promise.all([
    getAllSRSStates(),
    getUserCards(),
    getTestResults(),
    getProgress(),
  ]);
  return { srs, userCards, tests, progress, updatedAt: Date.now() };
}

export async function pushToCloud(): Promise<void> {
  const user = auth.currentUser;
  if (!user || pushing) return;
  pushing = true;
  try {
    const data = await getLocalSnapshot();
    await setDoc(doc(db, "users", user.uid), data);
    console.log("[sync] pushed to cloud");
  } finally {
    pushing = false;
  }
}

export async function pullAndMerge(): Promise<void> {
  const user = auth.currentUser;
  if (!user) return;
  const snap = await getDoc(doc(db, "users", user.uid));
  if (!snap.exists()) { console.log("[sync] no cloud data, first sync"); return; }
  const cloud = snap.data() as CloudData;
  console.log("[sync] pulled from cloud, merging");

  // Pause write notifications during merge to avoid re-triggering sync
  setOnWrite(null);
  try {
    await mergeCloudToLocal(cloud);
  } finally {
    setOnWrite(schedulePush);
  }
}

async function mergeCloudToLocal(cloud: CloudData): Promise<void> {
  const local = await getLocalSnapshot();

  const srsMap = new Map(local.srs.map((s) => [s.cardId, s]));
  for (const cs of cloud.srs) {
    const ls = srsMap.get(cs.cardId);
    if (!ls || cs.reps > ls.reps || (cs.reps === ls.reps && cs.due > ls.due)) {
      await saveSRSState(cs);
    }
  }

  const localCardIds = new Set(local.userCards.map((c) => c.id));
  for (const card of cloud.userCards) {
    if (!localCardIds.has(card.id)) await saveUserCard(card);
  }

  const localTestIds = new Set(local.tests.map((t) => t.id));
  for (const test of cloud.tests) {
    if (!localTestIds.has(test.id)) await saveTestResult(test);
  }

  await saveProgress({
    wordsLearned: [...new Set([...local.progress.wordsLearned, ...(cloud.progress.wordsLearned ?? [])])],
    grammarCompleted: [...new Set([...local.progress.grammarCompleted, ...(cloud.progress.grammarCompleted ?? [])])],
    charactersPracticed: [...new Set([...local.progress.charactersPracticed, ...(cloud.progress.charactersPracticed ?? [])])],
    xp: Math.max(local.progress.xp, cloud.progress.xp ?? 0),
    streak: Math.max(local.progress.streak, cloud.progress.streak ?? 0),
    lastStudyDate: local.progress.lastStudyDate > (cloud.progress.lastStudyDate ?? "")
      ? local.progress.lastStudyDate
      : cloud.progress.lastStudyDate,
  });
}

function schedulePush(): void {
  if (syncTimer) clearTimeout(syncTimer);
  syncTimer = setTimeout(() => {
    pushToCloud().catch(() => {});
  }, 3000);
}

export function startSync(): void {
  setOnWrite(schedulePush);
}

export function stopSync(): void {
  setOnWrite(null);
  if (syncTimer) {
    clearTimeout(syncTimer);
    syncTimer = null;
  }
}
