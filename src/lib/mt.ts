// Free machine translation for words/sentences that have no human translation yet (MyMemory public API, no key,
// CORS-enabled). Results are cached on the device. Only dictionary glosses / sentences the user taps are sent.
const KEY = "hsk-mt-v1";
const mem: Record<string, string> = (() => { try { return JSON.parse(localStorage.getItem(KEY) ?? "{}"); } catch { return {}; } })();
let blockedUntil = 0; // back off for a while after the daily free limit / errors

export async function translate(text: string, from: "en" | "zh-CN", to: "ru" | "tk" | "en"): Promise<string | null> {
  const q = text.trim().slice(0, 480);
  if (!q || from === to) return null;
  const k = `${from}>${to}|${q}`;
  if (mem[k]) return mem[k];
  if (Date.now() < blockedUntil) return null;
  try {
    const r = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(q)}&langpair=${from}|${to}`);
    const j = await r.json();
    const out: string | undefined = j?.responseData?.translatedText;
    if (!r.ok || j?.responseStatus !== 200 || !out || /MYMEMORY WARNING|QUERY LENGTH LIMIT/i.test(out)) { blockedUntil = Date.now() + 10 * 60_000; return null; }
    mem[k] = out;
    try { localStorage.setItem(KEY, JSON.stringify(mem)); } catch { /* full or private mode */ }
    return out;
  } catch { blockedUntil = Date.now() + 2 * 60_000; return null; }
}
