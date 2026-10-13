let cachedVoice: SpeechSynthesisVoice | null = null;

function getChineseVoice(): SpeechSynthesisVoice | null {
  if (cachedVoice) return cachedVoice;
  const voices = speechSynthesis.getVoices();
  cachedVoice =
    voices.find((v) => v.lang === "zh-CN") ??
    voices.find((v) => v.lang.startsWith("zh")) ??
    null;
  return cachedVoice;
}

export function speak(text: string, rate = 0.8): void {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "zh-CN";
  u.rate = rate;
  const voice = getChineseVoice();
  if (voice) u.voice = voice;
  speechSynthesis.speak(u);
}

export function preloadVoices(): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") return resolve();
    if (speechSynthesis.getVoices().length > 0) {
      getChineseVoice();
      return resolve();
    }
    speechSynthesis.onvoiceschanged = () => {
      getChineseVoice();
      resolve();
    };
  });
}
