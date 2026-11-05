# Convert CC-CEDICT (CC BY-SA 4.0, https://www.mdbg.net/chinese/dictionary?page=cc-cedict) to a compact tab-separated file.
# Usage: python3 -I scripts/build-cedict.py cedict_ts.u8 public/data/cedict.txt
import re, sys
src, out = sys.argv[1], sys.argv[2]
TONES = {"a": "āáǎà", "e": "ēéěè", "i": "īíǐì", "o": "ōóǒò", "u": "ūúǔù", "ü": "ǖǘǚǜ"}
def syl(s):
    m = re.fullmatch(r"([A-Za-z:]+?)([1-5])", s)
    if not m: return s
    p, t = m.group(1).replace("u:", "ü").replace("U:", "Ü"), int(m.group(2))
    if t == 5: return p
    low = p.lower()
    for v in ("a", "e"):
        if v in low:
            i = low.index(v); return p[:i] + TONES[v][t-1] + p[i+1:]
    if "ou" in low:
        i = low.index("ou"); return p[:i] + TONES["o"][t-1] + p[i+1:]
    for i in range(len(low)-1, -1, -1):
        if low[i] in TONES:
            return p[:i] + (TONES[low[i]][t-1]) + p[i+1:]
    return p
def pin(s): return " ".join(syl(x) for x in s.split())
merged = {}
for line in open(src, encoding="utf8"):
    if line.startswith("#"): continue
    m = re.match(r"^(\S+) (\S+) \[([^\]]+)\] /(.+)/\s*$", line)
    if not m: continue
    simp, py, defs = m.group(2), pin(m.group(3)), m.group(4).split("/")
    defs = [re.sub(r"\[([A-Za-z0-9: ]+)\]", lambda x: "[" + pin(x.group(1)) + "]", d) for d in defs]
    defs = [re.sub(r"([一-鿿]+)\|([一-鿿]+)", r"\2", d) for d in defs]
    defs = [d for d in defs if not d.startswith("CL:")]
    if not defs: continue
    merged.setdefault((simp, py), []).extend(defs)
n = 0
with open(out, "w", encoding="utf8") as f:
    for (simp, py), defs in merged.items():
        text = "; ".join(defs[:4])[:160]
        f.write(f"{simp}\t{py}\t{text}\n"); n += 1
print(n, "entries")
