"use client";

import { openDB, type IDBPDatabase } from "idb";
import type { CardState } from "./srs";

const DB_NAME = "hsk-app";
const DB_VERSION = 1;

export interface UserCard {
  id: string;
  front: string;
  back: string;
  pinyin?: string;
  deck: string;
  created: number;
}

export interface TestResult {
  id: string;
  date: number;
  level?: 1 | 2;
  score: number;
  total: number;
  passed: boolean;
  answers: { questionId: number; correct: boolean }[];
}

export interface ProgressData {
  wordsLearned: string[];
  grammarCompleted: number[];
  charactersPracticed: string[];
  streak: number;
  lastStudyDate: string;
  xp: number;
  mode: "gamified" | "clean";
}

let dbPromise: Promise<IDBPDatabase> | null = null;

let _onWrite: (() => void) | null = null;
export function setOnWrite(fn: (() => void) | null) { _onWrite = fn; }
function notifyWrite() { _onWrite?.(); }

function getDB() {
  if (!dbPromise) {
    dbPromise = openDB(DB_NAME, DB_VERSION, {
      upgrade(db) {
        if (!db.objectStoreNames.contains("srs")) db.createObjectStore("srs", { keyPath: "cardId" });
        if (!db.objectStoreNames.contains("userCards")) db.createObjectStore("userCards", { keyPath: "id" });
        if (!db.objectStoreNames.contains("tests")) db.createObjectStore("tests", { keyPath: "id" });
        if (!db.objectStoreNames.contains("progress")) db.createObjectStore("progress");
      },
    });
  }
  return dbPromise;
}

// SRS
export async function getSRSState(cardId: string): Promise<CardState | undefined> {
  return (await getDB()).get("srs", cardId);
}
export async function saveSRSState(state: CardState): Promise<void> {
  await (await getDB()).put("srs", state);
  notifyWrite();
}
export async function getAllSRSStates(): Promise<CardState[]> {
  return (await getDB()).getAll("srs");
}

// User cards
export async function saveUserCard(card: UserCard): Promise<void> {
  await (await getDB()).put("userCards", card);
  notifyWrite();
}
export async function getUserCards(): Promise<UserCard[]> {
  return (await getDB()).getAll("userCards");
}
export async function deleteUserCard(id: string): Promise<void> {
  await (await getDB()).delete("userCards", id);
  notifyWrite();
}

// Test results
export async function saveTestResult(result: TestResult): Promise<void> {
  await (await getDB()).put("tests", result);
  notifyWrite();
}
export async function getTestResults(): Promise<TestResult[]> {
  return (await getDB()).getAll("tests");
}

// Progress
const DEFAULT_PROGRESS: ProgressData = {
  wordsLearned: [],
  grammarCompleted: [],
  charactersPracticed: [],
  streak: 0,
  lastStudyDate: "",
  xp: 0,
  mode: "gamified",
};

export async function getProgress(): Promise<ProgressData> {
  const db = await getDB();
  const data = await db.get("progress", "current");
  return data ?? { ...DEFAULT_PROGRESS };
}

export async function saveProgress(data: Partial<ProgressData>): Promise<void> {
  const idb = await getDB();
  const current = (await idb.get("progress", "current")) ?? { ...DEFAULT_PROGRESS };
  await idb.put("progress", { ...current, ...data }, "current");
  notifyWrite();
}

export async function updateStreak(): Promise<number> {
  const progress = await getProgress();
  const today = new Date().toISOString().slice(0, 10);
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);

  if (progress.lastStudyDate === today) return progress.streak;

  const newStreak = progress.lastStudyDate === yesterday ? progress.streak + 1 : 1;
  await saveProgress({ streak: newStreak, lastStudyDate: today });
  return newStreak;
}

export async function addXP(amount: number): Promise<number> {
  const progress = await getProgress();
  const newXP = progress.xp + amount;
  await saveProgress({ xp: newXP });
  return newXP;
}

export async function exportAllData(): Promise<string> {
  const db = await getDB();
  const [srs, userCards, tests, progress] = await Promise.all([
    db.getAll("srs"),
    db.getAll("userCards"),
    db.getAll("tests"),
    db.get("progress", "current"),
  ]);
  return JSON.stringify({ version: 1, exportDate: new Date().toISOString(), srs, userCards, tests, progress });
}

export async function importAllData(json: string): Promise<void> {
  const data = JSON.parse(json);
  if (!data || typeof data !== "object") throw new Error("Invalid backup file");
  const db = await getDB();
  const tx = db.transaction(["srs", "userCards", "tests", "progress"], "readwrite");
  for (const s of data.srs ?? []) tx.objectStore("srs").put(s);
  for (const c of data.userCards ?? []) tx.objectStore("userCards").put(c);
  for (const t of data.tests ?? []) tx.objectStore("tests").put(t);
  if (data.progress) tx.objectStore("progress").put(data.progress, "current");
  await tx.done;
}
