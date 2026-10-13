"use client";

import { useState, useEffect, useCallback } from "react";
import { getProgress, saveProgress, updateStreak, addXP, type ProgressData } from "@/lib/storage";

export function useProgress() {
  const [progress, setProgress] = useState<ProgressData | null>(null);

  useEffect(() => {
    getProgress().then(setProgress);
  }, []);

  const refresh = useCallback(async () => {
    setProgress(await getProgress());
  }, []);

  const markWordLearned = useCallback(async (hanzi: string) => {
    const p = await getProgress();
    if (!p.wordsLearned.includes(hanzi)) {
      const updated = [...p.wordsLearned, hanzi];
      await saveProgress({ wordsLearned: updated });
      await updateStreak();
      if (p.mode === "gamified") await addXP(10);
      await refresh();
    }
  }, [refresh]);

  const markGrammarCompleted = useCallback(async (id: number) => {
    const p = await getProgress();
    if (!p.grammarCompleted.includes(id)) {
      const updated = [...p.grammarCompleted, id];
      await saveProgress({ grammarCompleted: updated });
      await updateStreak();
      if (p.mode === "gamified") await addXP(15);
      await refresh();
    }
  }, [refresh]);

  const markCharacterPracticed = useCallback(async (hanzi: string) => {
    const p = await getProgress();
    if (!p.charactersPracticed.includes(hanzi)) {
      const updated = [...p.charactersPracticed, hanzi];
      await saveProgress({ charactersPracticed: updated });
      await updateStreak();
      if (p.mode === "gamified") await addXP(20);
      await refresh();
    }
  }, [refresh]);

  const toggleMode = useCallback(async () => {
    const p = await getProgress();
    const newMode = p.mode === "gamified" ? "clean" : "gamified";
    await saveProgress({ mode: newMode });
    await refresh();
  }, [refresh]);

  return { progress, markWordLearned, markGrammarCompleted, markCharacterPracticed, toggleMode, refresh };
}
