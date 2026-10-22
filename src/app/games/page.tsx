"use client";

import { useState, useMemo, useCallback } from "react";
import AppShell from "@/components/AppShell";
import { vocabulary } from "@/data/vocabulary";
import { vocabulary2 } from "@/data/vocabulary2";

const allVocab = [...vocabulary, ...vocabulary2];
import { speak } from "@/lib/tts";
import { useLang } from "@/lib/i18n";
import { IconVolume } from "@/components/Icons";

type Tab = "pinyin" | "tone" | "reading" | "twister";

function normalize(s: string) {
  return s.toLowerCase().replace(/\s+/g, "").replace(/[̀-ͯ]/g, "");
}

function stripTones(pinyin: string) {
  const map: Record<string, string> = {
    ā: "a", á: "a", ǎ: "a", à: "a",
    ē: "e", é: "e", ě: "e", è: "e",
    ī: "i", í: "i", ǐ: "i", ì: "i",
    ō: "o", ó: "o", ǒ: "o", ò: "o",
    ū: "u", ú: "u", ǔ: "u", ù: "u",
    ǖ: "ü", ǘ: "ü", ǚ: "ü", ǜ: "ü",
  };
  return pinyin.replace(/[āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ]/g, (c) => map[c] || c);
}

function getTone(char: string): number {
  if ("āēīōūǖ".includes(char)) return 1;
  if ("áéíóúǘ".includes(char)) return 2;
  if ("ǎěǐǒǔǚ".includes(char)) return 3;
  if ("àèìòùǜ".includes(char)) return 4;
  return 0;
}

function getWordTone(pinyin: string): number {
  for (const c of pinyin) {
    const t = getTone(c);
    if (t > 0) return t;
  }
  return 5;
}

const toneMarks: Record<number, string> = { 1: "ˉ", 2: "ˊ", 3: "ˇ", 4: "ˋ", 5: "·" };

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const stories = [
  {
    title: "小猫",
    hanzi: "我有一只小猫。它很小，很可爱。它喜欢喝牛奶，也喜欢睡觉。每天早上，它叫我起床。我很爱我的小猫。",
    pinyin: "Wǒ yǒu yì zhī xiǎo māo. Tā hěn xiǎo, hěn kě'ài. Tā xǐhuan hē niúnǎi, yě xǐhuan shuìjiào. Měi tiān zǎoshang, tā jiào wǒ qǐchuáng. Wǒ hěn ài wǒ de xiǎo māo.",
    en: "I have a little cat. It's very small and cute. It likes to drink milk and also likes to sleep. Every morning, it wakes me up. I love my little cat.",
    ru: "У меня есть маленькая кошка. Она очень маленькая и милая. Она любит пить молоко и спать. Каждое утро она будит меня. Я очень люблю свою кошку.",
    tk: "Meniň kiçijik pişigim bar. Ol örän kiçi we owadan. Ol süýt içmegi we ýatmagy gowy görýär. Her gün irden ol meni oýarýar. Men pişigimi gowy görýärin.",
  },
  {
    title: "去超市",
    hanzi: "今天是星期六。妈妈说：\"我们去超市买东西吧。\"我和妈妈一起去了超市。我们买了水果、牛奶和米饭。我很高兴，因为妈妈还给我买了一个蛋糕。",
    pinyin: "Jīntiān shì xīngqī liù. Māma shuō: \"Wǒmen qù chāoshì mǎi dōngxi ba.\" Wǒ hé māma yìqǐ qù le chāoshì. Wǒmen mǎi le shuǐguǒ, niúnǎi hé mǐfàn. Wǒ hěn gāoxìng, yīnwèi māma hái gěi wǒ mǎi le yí ge dàngāo.",
    en: "Today is Saturday. Mom said: \"Let's go to the supermarket to buy things.\" I went to the supermarket with mom. We bought fruit, milk, and rice. I'm very happy because mom also bought me a cake.",
    ru: "Сегодня суббота. Мама сказала: \"Давай пойдём в супермаркет за покупками.\" Мы с мамой вместе пошли в супермаркет. Мы купили фрукты, молоко и рис. Я очень рад, потому что мама ещё купила мне торт.",
    tk: "Bu gün şenbe. Ejem: \"Supermarkete zat almaga gideliň\" diýdi. Men ejemim bilen supermarkete gitdim. Biz miwe, süýt we tüwi aldyk. Men gaty şat, sebäbi ejem maňa tort hem alyp berdi.",
  },
  {
    title: "我的朋友",
    hanzi: "我有一个好朋友，他叫李明。他是中国人。他很聪明，也很好。我们每天一起上学。下课以后，我们一起打球。他教我说中文，我教他说英语。",
    pinyin: "Wǒ yǒu yí ge hǎo péngyou, tā jiào Lǐ Míng. Tā shì Zhōngguó rén. Tā hěn cōngming, yě hěn hǎo. Wǒmen měi tiān yìqǐ shàngxué. Xiàkè yǐhòu, wǒmen yìqǐ dǎ qiú. Tā jiāo wǒ shuō Zhōngwén, wǒ jiāo tā shuō Yīngyǔ.",
    en: "I have a good friend, his name is Li Ming. He is Chinese. He is very smart and very nice. We go to school together every day. After class, we play ball together. He teaches me Chinese, I teach him English.",
    ru: "У меня есть хороший друг, его зовут Ли Мин. Он китаец. Он очень умный и добрый. Мы каждый день вместе ходим в школу. После уроков мы вместе играем в мяч. Он учит меня китайскому, а я учу его английскому.",
    tk: "Meniň gowy dostum bar, onuň ady Li Min. Ol hytaýly. Ol örän akylly we gowy. Biz her gün bile mekdebe gidýäris. Sapakdan soň bile top oýnaýarys. Ol maňa hytaý dilini öwredýär, men oňa iňlis dilini öwredýärin.",
  },
  {
    title: "下雨了",
    hanzi: "今天下雨了。我没有带雨伞。我的同学小红说：\"和我一起用吧！\"我们两个人用一把伞，一起走回家。我很感谢她。明天我要带两把伞。",
    pinyin: "Jīntiān xià yǔ le. Wǒ méiyǒu dài yǔsǎn. Wǒ de tóngxué Xiǎo Hóng shuō: \"Hé wǒ yìqǐ yòng ba!\" Wǒmen liǎng ge rén yòng yì bǎ sǎn, yìqǐ zǒu huí jiā. Wǒ hěn gǎnxiè tā. Míngtiān wǒ yào dài liǎng bǎ sǎn.",
    en: "It rained today. I didn't bring an umbrella. My classmate Xiao Hong said: \"Share mine!\" The two of us used one umbrella and walked home together. I'm very grateful to her. Tomorrow I'll bring two umbrellas.",
    ru: "Сегодня пошёл дождь. Я не взял зонт. Моя одноклассница Сяо Хун сказала: \"Давай вместе!\" Мы вдвоём шли под одним зонтом домой. Я ей очень благодарен. Завтра я возьму два зонта.",
    tk: "Bu gün ýagyş ýagdy. Men saýawan almadym. Synpdaşym Sýao Hun: \"Meňki bilen bile bol!\" diýdi. Ikimiz bir saýawan bilen bile öýe gaýtdyk. Men oňa minnetdar. Ertir iki sany saýawan alaryn.",
  },
];

const twisters = [
  { hanzi: "四是四，十是十，十四是十四，四十是四十。", pinyin: "Sì shì sì, shí shì shí, shísì shì shísì, sìshí shì sìshí.", en: "Four is four, ten is ten, fourteen is fourteen, forty is forty.", ru: "Четыре это четыре, десять это десять, четырнадцать это четырнадцать, сорок это сорок.", tk: "Dört dört, on on, on dört on dört, kyrk kyrk." },
  { hanzi: "吃葡萄不吐葡萄皮，不吃葡萄倒吐葡萄皮。", pinyin: "Chī pútao bù tǔ pútao pí, bù chī pútao dào tǔ pútao pí.", en: "Eating grapes without spitting the skin, not eating grapes but spitting the skin.", ru: "Ешь виноград — не выплёвывай кожуру, не ешь виноград — выплёвывай кожуру.", tk: "Üzüm iý — gabygyny tüýkürme, üzüm iýme — gabygyny tüýkür." },
  { hanzi: "八百标兵奔北坡，北坡八百炮兵并排跑。", pinyin: "Bā bǎi biāobīng bēn běi pō, běi pō bā bǎi pàobīng bìngpái pǎo.", en: "Eight hundred guards run to the north slope, eight hundred artillerymen run side by side on the north slope.", ru: "Восемьсот гвардейцев бегут на северный склон, восемьсот артиллеристов бегут рядом по северному склону.", tk: "Sekiz ýüz garawul demirgazyk gerşe ylgaýar, sekiz ýüz topçy demirgazyk gerişde hatara ylgaýar." },
  { hanzi: "妈妈骑马，马慢妈妈骂马。", pinyin: "Māma qí mǎ, mǎ màn māma mà mǎ.", en: "Mom rides a horse, the horse is slow so mom scolds the horse.", ru: "Мама едет на лошади, лошадь медленная — мама ругает лошадь.", tk: "Eje at münýär, at haýal — eje aty käýeýär." },
  { hanzi: "红凤凰，粉凤凰，红粉凤凰花凤凰。", pinyin: "Hóng fènghuáng, fěn fènghuáng, hóng fěn fènghuáng huā fènghuáng.", en: "Red phoenix, pink phoenix, red-pink phoenix, flower phoenix.", ru: "Красный феникс, розовый феникс, красно-розовый феникс, цветочный феникс.", tk: "Gyzyl feniks, çal-gülgüne feniks, gyzyl-çal feniks, gülli feniks." },
];

function PinyinWriter({ t: tr }: { t: ReturnType<typeof useLang>["t"]["gamesPage"] }) {
  const words = useMemo(() => shuffle(allVocab).slice(0, 20), []);
  const [idx, setIdx] = useState(0);
  const [input, setInput] = useState("");
  const [result, setResult] = useState<"correct" | "wrong" | null>(null);
  const [score, setScore] = useState(0);

  const word = words[idx];
  const done = idx >= words.length;

  const check = useCallback(() => {
    if (!input.trim()) return;
    const correct = normalize(word.pinyin) === normalize(input.trim()) || normalize(stripTones(word.pinyin)) === normalize(input.trim());
    setResult(correct ? "correct" : "wrong");
    if (correct) setScore((s) => s + 1);
  }, [input, word]);

  const next = useCallback(() => {
    setIdx((i) => i + 1);
    setInput("");
    setResult(null);
  }, []);

  if (done) {
    return (
      <div className="text-center py-12 space-y-4">
        <div className="text-5xl font-bold text-primary">{score}/{words.length}</div>
        <div className="text-ink-secondary">{tr.score}</div>
        <button onClick={() => { setIdx(0); setScore(0); setResult(null); setInput(""); }} className="bg-primary text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-primary-hover transition-colors">
          {tr.next}
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto space-y-6">
      <div className="flex justify-between text-[13px] text-ink-tertiary">
        <span>{tr.round} {idx + 1}/{words.length}</span>
        <span>{tr.score}: {score}</span>
      </div>

      <div className="text-center py-8">
        <button onClick={() => speak(word.hanzi)} className="text-6xl font-bold text-ink hover:text-primary transition-colors cursor-pointer">
          {word.hanzi}
        </button>
        <div className="mt-2 text-[13px] text-ink-tertiary">{word.english}</div>
      </div>

      {result === null ? (
        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && check()}
            placeholder={tr.typeAnswer}
            className="flex-1 px-4 py-3 rounded-lg border border-border bg-bg text-ink text-center text-lg focus:outline-none focus:border-primary"
            autoFocus
          />
          <button onClick={check} className="bg-primary text-white px-5 py-3 rounded-lg font-semibold hover:bg-primary-hover transition-colors">
            {tr.check}
          </button>
        </div>
      ) : (
        <div className="space-y-3 text-center">
          <div className={`text-lg font-bold ${result === "correct" ? "text-primary" : "text-warning"}`}>
            {result === "correct" ? tr.correct : tr.wrong}
          </div>
          <div className="text-ink-secondary">{tr.correctAnswer}: <span className="font-semibold text-ink">{word.pinyin}</span></div>
          <button onClick={next} className="bg-primary text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-primary-hover transition-colors">
            {tr.next}
          </button>
        </div>
      )}
    </div>
  );
}

function ToneMaster({ t: tr }: { t: ReturnType<typeof useLang>["t"]["gamesPage"] }) {
  const toneWords = useMemo(() => shuffle(allVocab.filter((w) => getWordTone(w.pinyin) >= 1 && getWordTone(w.pinyin) <= 4)).slice(0, 20), []);
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const word = toneWords[idx];
  const done = idx >= toneWords.length;
  const correctTone = word ? getWordTone(word.pinyin) : 0;

  const pick = useCallback((tone: number) => {
    if (picked !== null) return;
    setPicked(tone);
    if (tone === correctTone) setScore((s) => s + 1);
  }, [picked, correctTone]);

  const next = useCallback(() => {
    setIdx((i) => i + 1);
    setPicked(null);
  }, []);

  if (done) {
    return (
      <div className="text-center py-12 space-y-4">
        <div className="text-5xl font-bold text-primary">{score}/{toneWords.length}</div>
        <div className="text-ink-secondary">{tr.score}</div>
        <button onClick={() => { setIdx(0); setScore(0); setPicked(null); }} className="bg-primary text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-primary-hover transition-colors">
          {tr.next}
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto space-y-6">
      <div className="flex justify-between text-[13px] text-ink-tertiary">
        <span>{tr.round} {idx + 1}/{toneWords.length}</span>
        <span>{tr.score}: {score}</span>
      </div>

      <div className="text-center py-8">
        <button onClick={() => speak(word.hanzi)} className="text-6xl font-bold text-ink hover:text-primary transition-colors cursor-pointer">
          {word.hanzi}
        </button>
        <div className="mt-3 text-lg text-ink-secondary">{stripTones(word.pinyin)}</div>
        <button onClick={() => speak(word.hanzi)} className="mt-2 inline-flex items-center gap-1.5 text-[13px] text-primary hover:text-primary-hover transition-colors">
          <IconVolume className="w-4 h-4" /> {tr.listen}
        </button>
      </div>

      <div className="text-center text-[14px] text-ink-secondary mb-2">{tr.pickTone}</div>

      <div className="grid grid-cols-4 gap-3">
        {[1, 2, 3, 4].map((tone) => {
          let cls = "border-border bg-bg-raised text-ink hover:border-primary";
          if (picked !== null) {
            if (tone === correctTone) cls = "border-primary bg-primary-light text-primary-text";
            else if (tone === picked) cls = "border-warning bg-warning-light text-warning-text";
            else cls = "border-border bg-bg-raised text-ink-tertiary";
          }
          return (
            <button
              key={tone}
              onClick={() => pick(tone)}
              className={`border-2 rounded-xl py-4 text-center transition-colors ${cls}`}
            >
              <div className="text-2xl font-bold">{toneMarks[tone]}</div>
              <div className="text-[13px] mt-1">Tone {tone}</div>
            </button>
          );
        })}
      </div>

      {picked !== null && (
        <div className="text-center space-y-3">
          <div className={`text-lg font-bold ${picked === correctTone ? "text-primary" : "text-warning"}`}>
            {picked === correctTone ? tr.correct : tr.wrong}
          </div>
          <div className="text-ink-secondary">{tr.correctAnswer}: <span className="font-semibold text-ink">{word.pinyin}</span> (Tone {correctTone})</div>
          <button onClick={next} className="bg-primary text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-primary-hover transition-colors">
            {tr.next}
          </button>
        </div>
      )}
    </div>
  );
}

function ReadingStories({ t: tr, lang }: { t: ReturnType<typeof useLang>["t"]["gamesPage"]; lang: string }) {
  const [storyIdx, setStoryIdx] = useState(0);
  const [showPinyin, setShowPinyin] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);
  const story = stories[storyIdx];

  const translation = lang === "ru" ? story.ru : lang === "tk" ? story.tk : story.en;

  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div className="flex gap-2 overflow-x-auto pb-1">
        {stories.map((s, i) => (
          <button
            key={i}
            onClick={() => { setStoryIdx(i); setShowPinyin(false); setShowTranslation(false); }}
            className={`shrink-0 px-4 py-2 rounded-lg text-[14px] font-medium transition-colors ${
              i === storyIdx ? "bg-primary text-white" : "bg-bg-sunken text-ink-secondary hover:text-ink"
            }`}
          >
            {s.title}
          </button>
        ))}
      </div>

      <div className="rounded-xl border border-border bg-bg-raised p-6 space-y-4">
        <h3 className="text-xl font-bold text-ink">{story.title}</h3>

        <div className="text-xl leading-loose text-ink">
          {story.hanzi}
        </div>

        {showPinyin && (
          <div className="text-[14px] text-ink-secondary leading-relaxed">{story.pinyin}</div>
        )}

        {showTranslation && (
          <div className="text-[14px] text-ink-tertiary leading-relaxed border-t border-border pt-4">{translation}</div>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setShowPinyin(!showPinyin)}
          className="px-4 py-2 rounded-lg text-[14px] font-medium border border-border bg-bg-raised text-ink-secondary hover:text-ink transition-colors"
        >
          {showPinyin ? tr.hidePinyin : tr.showPinyin}
        </button>
        <button
          onClick={() => setShowTranslation(!showTranslation)}
          className="px-4 py-2 rounded-lg text-[14px] font-medium border border-border bg-bg-raised text-ink-secondary hover:text-ink transition-colors"
        >
          {showTranslation ? tr.hideTranslation : tr.showTranslation}
        </button>
        <button
          onClick={() => speak(story.hanzi, 0.6)}
          className="px-4 py-2 rounded-lg text-[14px] font-medium bg-primary text-white hover:bg-primary-hover transition-colors inline-flex items-center gap-1.5"
        >
          <IconVolume className="w-4 h-4" /> {tr.listen}
        </button>
      </div>

      <div className="text-[13px] text-ink-tertiary">{tr.tryReading}</div>
    </div>
  );
}

function TongueTwisters({ t: tr, lang }: { t: ReturnType<typeof useLang>["t"]["gamesPage"]; lang: string }) {
  const [idx, setIdx] = useState(0);
  const [showPinyin, setShowPinyin] = useState(false);
  const tw = twisters[idx];

  const translation = lang === "ru" ? tw.ru : lang === "tk" ? tw.tk : tw.en;

  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div className="flex justify-between text-[13px] text-ink-tertiary">
        <span>{idx + 1}/{twisters.length}</span>
      </div>

      <div className="rounded-xl border border-border bg-bg-raised p-6 space-y-4">
        <div
          className="text-2xl leading-loose text-ink font-medium cursor-pointer"
          onClick={() => speak(tw.hanzi, 0.6)}
        >
          {tw.hanzi}
        </div>

        {showPinyin && (
          <div className="text-[15px] text-ink-secondary leading-relaxed">{tw.pinyin}</div>
        )}

        <div className="text-[14px] text-ink-tertiary border-t border-border pt-3">{translation}</div>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setShowPinyin(!showPinyin)}
          className="px-4 py-2 rounded-lg text-[14px] font-medium border border-border bg-bg-raised text-ink-secondary hover:text-ink transition-colors"
        >
          {showPinyin ? tr.hidePinyin : tr.showPinyin}
        </button>
        <button
          onClick={() => speak(tw.hanzi, 0.6)}
          className="px-4 py-2 rounded-lg text-[14px] font-medium bg-primary text-white hover:bg-primary-hover transition-colors inline-flex items-center gap-1.5"
        >
          <IconVolume className="w-4 h-4" /> {tr.listen}
        </button>
        <button
          onClick={() => speak(tw.hanzi, 1.0)}
          className="px-4 py-2 rounded-lg text-[14px] font-medium border border-primary text-primary hover:bg-primary-light transition-colors"
        >
          x2
        </button>
      </div>

      <div className="flex gap-2 justify-center">
        {twisters.map((_, i) => (
          <button
            key={i}
            onClick={() => { setIdx(i); setShowPinyin(false); }}
            className={`w-8 h-8 rounded-full text-[13px] font-medium transition-colors ${
              i === idx ? "bg-primary text-white" : "bg-bg-sunken text-ink-secondary hover:text-ink"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function GamesPage() {
  const [tab, setTab] = useState<Tab>("pinyin");
  const { t, lang } = useLang();
  const tr = t.gamesPage;

  const tabs: { id: Tab; label: string; desc: string }[] = [
    { id: "pinyin", label: tr.pinyinWriter, desc: tr.pinyinWriterDesc },
    { id: "tone", label: tr.toneMaster, desc: tr.toneMasterDesc },
    { id: "reading", label: tr.reading, desc: tr.readingDesc },
    { id: "twister", label: tr.tongueTwisters, desc: tr.tongueTwistersDesc },
  ];

  return (
    <AppShell>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-ink">{tr.title}</h1>

        <div className="flex gap-2 overflow-x-auto pb-1">
          {tabs.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`shrink-0 px-4 py-2 rounded-lg text-[14px] font-medium transition-colors ${
                tab === id ? "bg-primary text-white" : "bg-bg-sunken text-ink-secondary hover:text-ink"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="pt-2">
          {tab === "pinyin" && <PinyinWriter t={tr} />}
          {tab === "tone" && <ToneMaster t={tr} />}
          {tab === "reading" && <ReadingStories t={tr} lang={lang} />}
          {tab === "twister" && <TongueTwisters t={tr} lang={lang} />}
        </div>
      </div>
    </AppShell>
  );
}
