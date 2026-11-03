import type { GrammarPoint } from "./grammar";

export const grammar2: GrammarPoint[] = [
  // === comparisons ===
  {
    id: 60,
    title: "Comparison with 比",
    pattern: "A + 比 + B + Adjective",
    explanation: "比 (bǐ) compares two things. The adjective after 比 cannot use 很.",
    examples: [
      { hanzi: "他比我高。", pinyin: "tā bǐ wǒ gāo.", english: "He is taller than me." },
      { hanzi: "今天比昨天冷。", pinyin: "jīntiān bǐ zuótiān lěng.", english: "Today is colder than yesterday." },
      { hanzi: "中文比英文难。", pinyin: "Zhōngwén bǐ Yīngwén nán.", english: "Chinese is harder than English." },
    ],
    category: "comparisons",
    detailedExplanation: "比 (bǐ) is the standard comparison word. A 比 B + adjective = A is more [adj] than B. IMPORTANT: don't use 很 with 比 — say 他比我高, NOT 他比我很高.\n\nTo express 'by how much', add the amount after the adjective: 他比我高五厘米 (He is 5cm taller than me). 多 and 一点儿 are common: 他比我大两岁 (He is 2 years older).\n\nTo negate: use 没有 instead of 不比. 我没有他高 (I'm not as tall as him). 不比 exists but means 'no more than' — a subtle difference.",
    tips: [
      "NEVER use 很 with 比. Say 比我高, not 比我很高.",
      "Add amount after adj: 比我大三岁 = 3 years older than me.",
      "Negate with 没有: 我没有他高 = I'm not as tall as him.",
    ],
    comparisons: [
      "比 (A is more than B) vs 没有 (A is not as much as B) vs 一样 (A equals B).",
    ],
  },
  {
    id: 61,
    title: "Expressing 'the same as' with 一样",
    pattern: "A + 跟/和 + B + 一样 (+ Adjective)",
    explanation: "一样 (yíyàng) means 'the same'. Use 跟 or 和 to link the two things being compared.",
    examples: [
      { hanzi: "我跟你一样高。", pinyin: "wǒ gēn nǐ yíyàng gāo.", english: "I am as tall as you." },
      { hanzi: "这个和那个一样。", pinyin: "zhège hé nàge yíyàng.", english: "This one is the same as that one." },
      { hanzi: "他的手机跟我的一样。", pinyin: "tā de shǒujī gēn wǒ de yíyàng.", english: "His phone is the same as mine." },
    ],
    category: "comparisons",
    detailedExplanation: "一样 (yíyàng) means 'the same' and is used with 跟 or 和 to compare two things as equal. A 跟 B 一样 = A is the same as B. Add an adjective for specific comparison: A 跟 B 一样高 (A is as tall as B).\n\nTo negate: A 跟 B 不一样 (A and B are different). This is very common in conversation for pointing out differences.\n\n跟 and 和 are interchangeable here. 跟 is slightly more casual; 和 is more neutral/written. Both are correct.",
    tips: [
      "A 跟 B 一样 = same. A 跟 B 不一样 = different.",
      "A 跟 B 一样 + adj = equally: 跟你一样高 = as tall as you.",
      "跟 and 和 are interchangeable in this pattern.",
    ],
    comparisons: [
      "一样 (equal) vs 比 (more than) vs 没有 (not as much as).",
    ],
  },
  {
    id: 62,
    title: "Superlative with 最",
    pattern: "最 + Adjective/Verb",
    explanation: "最 (zuì) means 'most' or '-est'. It goes directly before the adjective or verb.",
    examples: [
      { hanzi: "她是最漂亮的。", pinyin: "tā shì zuì piàoliang de.", english: "She is the most beautiful." },
      { hanzi: "我最喜欢吃中国菜。", pinyin: "wǒ zuì xǐhuān chī Zhōngguó cài.", english: "I like eating Chinese food the most." },
      { hanzi: "这个最便宜。", pinyin: "zhège zuì piányi.", english: "This one is the cheapest." },
    ],
    category: "comparisons",
    detailedExplanation: "最 (zuì) creates superlatives — 'the most' or '-est'. Just put 最 before any adjective or verb: 最大 (biggest), 最喜欢 (like the most), 最好 (best).\n\nUnlike English, there's no irregular forms to memorize. 好 → 最好 (best), 多 → 最多 (most), 快 → 最快 (fastest). Always just 最 + the word.\n\nWith 是...的: 她是最漂亮的 (She is the most beautiful one). The 的 nominalizes the phrase — 'the most beautiful one'.",
    tips: [
      "最 + any adjective/verb = superlative. No irregular forms!",
      "最好 = best. Also used for advice: 你最好... = You'd better...",
      "最 + verb: 我最喜欢 = I like (it) the most.",
    ],
    comparisons: [
      "最 (superlative — the most) vs 更 (comparative — even more) vs 比 (comparison — more than).",
    ],
  },
  {
    id: 63,
    title: "Expressing 'even more' with 更",
    pattern: "更 + Adjective/Verb",
    explanation: "更 (gèng) means 'even more'. It emphasizes a higher degree than expected.",
    examples: [
      { hanzi: "明天会更冷。", pinyin: "míngtiān huì gèng lěng.", english: "Tomorrow will be even colder." },
      { hanzi: "我想找更好的工作。", pinyin: "wǒ xiǎng zhǎo gèng hǎo de gōngzuò.", english: "I want to find an even better job." },
      { hanzi: "他比我更高。", pinyin: "tā bǐ wǒ gèng gāo.", english: "He is even taller than me." },
    ],
    category: "comparisons",
  },
  {
    id: 64,
    title: "Expressing 'a bit more' with 一点儿",
    pattern: "Adjective + 一点儿 / Verb + 一点儿",
    explanation: "一点儿 (yìdiǎnr) after a comparative means 'a little bit more'. Often used with 比 or in requests.",
    examples: [
      { hanzi: "请说慢一点儿。", pinyin: "qǐng shuō màn yìdiǎnr.", english: "Please speak a little slower." },
      { hanzi: "这个比那个大一点儿。", pinyin: "zhège bǐ nàge dà yìdiǎnr.", english: "This one is a bit bigger than that one." },
      { hanzi: "便宜一点儿吧。", pinyin: "piányi yìdiǎnr ba.", english: "A little cheaper, please." },
    ],
    category: "comparisons",
    detailedExplanation: "更 (gèng) means 'even more' and intensifies a comparison. It can be used with or without 比: 明天会更冷 (Tomorrow will be even colder), 他比我更高 (He is even taller than me).\n\nThe nuance: 更 implies a higher degree than already expected. 好 (good) → 更好 (even better) implies it was already good.\n\n一点儿 (yìdiǎnr) after a comparative means 'a little bit more'. 请说慢一点儿 (Please speak a little slower). 便宜一点儿 (A little cheaper) — essential for bargaining!",
    tips: [
      "更 = even more, on top of what's already the case.",
      "更 works alone or with 比: 更好 or 比他更好.",
      "一点儿 after adj = a bit more: 大一点儿, 便宜一点儿.",
    ],
    comparisons: [
      "更 (even more — goes further) vs 比 (comparison) vs 最 (superlative — the absolute most).",
    ],
  },
  {
    id: 64,
    title: "Expressing 'a bit more' with 一点儿",
    pattern: "Adjective + 一点儿 / Verb + 一点儿",
    explanation: "一点儿 (yìdiǎnr) after a comparative means 'a little bit more'. Often used with 比 or in requests.",
    examples: [
      { hanzi: "请说慢一点儿。", pinyin: "qǐng shuō màn yìdiǎnr.", english: "Please speak a little slower." },
      { hanzi: "这个比那个大一点儿。", pinyin: "zhège bǐ nàge dà yìdiǎnr.", english: "This one is a bit bigger than that one." },
      { hanzi: "便宜一点儿吧。", pinyin: "piányi yìdiǎnr ba.", english: "A little cheaper, please." },
    ],
    category: "comparisons",
    detailedExplanation: "一点儿 (yìdiǎnr) goes AFTER the adjective in comparisons to mean 'a little bit more'. This is different from 有点儿 which goes BEFORE and implies dissatisfaction.\n\n请说慢一点儿 (Please speak a little slower) — this is one of the most practical phrases for learners. It politely asks for a small adjustment.\n\nIn bargaining: 便宜一点儿吧 (A little cheaper please). Adding 吧 makes it a friendly suggestion rather than a demand.",
    tips: [
      "Adjective + 一点儿 = a bit more: 快一点儿 = a bit faster.",
      "Essential for politeness: 请说慢一点儿 = Please speak a bit slower.",
      "For bargaining: 便宜一点儿吧 = A little cheaper, please.",
    ],
    comparisons: [
      "一点儿 (a bit more — after adj) vs 有点儿 (a little too — before adj, negative).",
    ],
  },

  // === conjunctions ===
  {
    id: 65,
    title: "Cause and effect with 因为…所以",
    pattern: "因为 + Reason，所以 + Result",
    explanation: "因为 (yīnwèi) means 'because' and 所以 (suǒyǐ) means 'so/therefore'. You can use one or both.",
    examples: [
      { hanzi: "因为下雨了，所以我没去。", pinyin: "yīnwèi xià yǔ le, suǒyǐ wǒ méi qù.", english: "Because it rained, I didn't go." },
      { hanzi: "因为他生病了，所以没来上课。", pinyin: "yīnwèi tā shēngbìng le, suǒyǐ méi lái shàngkè.", english: "Because he was sick, he didn't come to class." },
      { hanzi: "我很累，所以想休息。", pinyin: "wǒ hěn lèi, suǒyǐ xiǎng xiūxi.", english: "I'm tired, so I want to rest." },
    ],
    category: "conjunctions",
    detailedExplanation: "因为...所以... is the standard 'because...therefore...' structure. Unlike English, Chinese often uses BOTH halves together. In English, you'd say 'Because it rained, I didn't go' — but using 'because' AND 'therefore' in one sentence sounds redundant. In Chinese, it's natural.\n\nYou can use either half alone: 因为下雨了，我没去 (Because it rained, I didn't go) or 我很累，所以想休息 (I'm tired, so I want to rest).\n\nWhen answering 为什么 questions, start with 因为: 为什么没来？因为我生病了。",
    tips: [
      "Using both 因为 and 所以 together is natural in Chinese, not redundant.",
      "Either half can stand alone: 因为... or ...所以...",
      "Answer 为什么 with 因为: 为什么？因为太贵了。",
    ],
    comparisons: [
      "因为...所以 (cause-effect) vs 虽然...但是 (concession — although...but).",
    ],
  },
  {
    id: 66,
    title: "Contrast with 虽然…但是",
    pattern: "虽然 + Fact，但是 + Contrast",
    explanation: "虽然 (suīrán) means 'although' and 但是 (dànshì) means 'but'. The contrast comes second.",
    examples: [
      { hanzi: "虽然很贵，但是很好吃。", pinyin: "suīrán hěn guì, dànshì hěn hǎochī.", english: "Although it's expensive, it's delicious." },
      { hanzi: "虽然他很忙，但是他还是来了。", pinyin: "suīrán tā hěn máng, dànshì tā háishi lái le.", english: "Although he's busy, he still came." },
      { hanzi: "虽然很难，但是我想试试。", pinyin: "suīrán hěn nán, dànshì wǒ xiǎng shìshi.", english: "Although it's hard, I want to try." },
    ],
    category: "conjunctions",
    detailedExplanation: "虽然...但是... means 'although...but...' and is one of the key differences from English — Chinese uses BOTH 'although' and 'but' together. In English, 'Although it's expensive, but it's delicious' is wrong. In Chinese, it's the standard pattern.\n\nThe 虽然 clause comes first (the concession), and 但是 introduces the main point. The speaker's real emphasis is on the 但是 part.\n\n可是 (kěshì) can replace 但是 in casual speech. 不过 (búguò) is even softer — 'however'. All three mean 'but' with decreasing formality.",
    tips: [
      "Use BOTH 虽然 and 但是 together — this is correct Chinese, unlike English.",
      "The real point is in the 但是 clause, not the 虽然 clause.",
      "但是 (formal) = 可是 (casual) = 不过 (soft). All mean 'but'.",
    ],
    comparisons: [
      "虽然...但是 (although...but — concession) vs 因为...所以 (because...so — cause).",
    ],
  },
  {
    id: 67,
    title: "Expressing 'besides' with 除了…以外",
    pattern: "除了 + X + 以外，都/也/还 + Predicate",
    explanation: "除了…以外 (chúle…yǐwài) means 'besides' or 'except for'. 都 excludes, 也/还 includes.",
    examples: [
      { hanzi: "除了他以外，我们都去了。", pinyin: "chúle tā yǐwài, wǒmen dōu qù le.", english: "Except for him, we all went." },
      { hanzi: "除了中文以外，她还会说英文。", pinyin: "chúle Zhōngwén yǐwài, tā hái huì shuō Yīngwén.", english: "Besides Chinese, she can also speak English." },
    ],
    category: "conjunctions",
    detailedExplanation: "除了...以外 means 'besides' or 'except for'. The key is what follows: 都 means EXCLUDING (everyone except X), while 也/还 means INCLUDING (in addition to X).\n\nExcluding: 除了他以外，我们都去了 (Except for him, we all went — he didn't go).\nIncluding: 除了中文以外，她还会说英文 (Besides Chinese, she also speaks English — she speaks both).\n\n以外 is often dropped in casual speech: 除了他，我们都去了.",
    tips: [
      "除了 + 都 = except for (excluding). 除了 + 也/还 = besides (including).",
      "以外 is optional in casual speech: 除了他都去了.",
      "This pattern is common in listing: 除了周末以外，我每天都工作.",
    ],
    comparisons: [
      "除了...都 (except — excluding) vs 除了...也/还 (besides — including).",
    ],
  },
  {
    id: 68,
    title: "Expressing 'or' with 还是 and 或者",
    pattern: "A + 还是 + B？ / A + 或者 + B",
    explanation: "还是 (háishi) is used in questions offering a choice. 或者 (huòzhě) is used in statements.",
    examples: [
      { hanzi: "你喝茶还是咖啡？", pinyin: "nǐ hē chá háishi kāfēi?", english: "Do you want tea or coffee?" },
      { hanzi: "明天或者后天都可以。", pinyin: "míngtiān huòzhě hòutiān dōu kěyǐ.", english: "Tomorrow or the day after is fine." },
      { hanzi: "你坐公共汽车还是地铁？", pinyin: "nǐ zuò gōnggòng qìchē háishi dìtiě?", english: "Are you taking the bus or the subway?" },
    ],
    category: "conjunctions",
    detailedExplanation: "还是 and 或者 both mean 'or' but in different contexts. 还是 is for QUESTIONS (offering choices), 或者 is for STATEMENTS (listing alternatives).\n\n还是: 你喝茶还是咖啡？ (Tea or coffee? — pick one). Only used in questions.\n或者: 明天或者后天都可以 (Tomorrow or the day after, either is fine). Used in statements.\n\nMixing them up is a common error. Remember: 还是 = question 'or', 或者 = statement 'or'.",
    tips: [
      "还是 for questions: 你去还是不去？ = Are you going or not?",
      "或者 for statements: 我想去北京或者上海 = I want to go to Beijing or Shanghai.",
      "Never swap them — 还是 in a statement or 或者 in a question sounds wrong.",
    ],
    comparisons: [
      "还是 (or — in questions) vs 或者 (or — in statements).",
    ],
  },
  {
    id: 69,
    title: "Expressing 'not only…but also' with 不但…而且",
    pattern: "不但 + A，而且 + B",
    explanation: "不但 (búdàn) means 'not only' and 而且 (érqiě) means 'but also'. B is the stronger point.",
    examples: [
      { hanzi: "他不但会说中文，而且说得很好。", pinyin: "tā búdàn huì shuō Zhōngwén, érqiě shuō de hěn hǎo.", english: "He can not only speak Chinese, but speaks it very well." },
      { hanzi: "这个地方不但漂亮，而且很安静。", pinyin: "zhège dìfang búdàn piàoliang, érqiě hěn ānjìng.", english: "This place is not only beautiful, but also very quiet." },
    ],
    category: "conjunctions",
    detailedExplanation: "不但...而且... means 'not only...but also...' and is used to add a STRONGER second point. The 而且 clause should be more impressive or important than the 不但 clause.\n\n他不但会说中文，而且说得很好 — the second point (speaks well) is stronger than the first (can speak). This escalation is key.\n\nIn casual speech, 而且 alone (without 不但) is very common: 他很聪明，而且很努力 (He's smart, and moreover hardworking).",
    tips: [
      "而且 clause should be the stronger/more impressive point.",
      "而且 alone is very common: 好吃，而且便宜 = Delicious, and also cheap.",
      "Same-subject: 他不但...而且... Different-subject: 不但他...而且我们都...",
    ],
    comparisons: [
      "不但...而且 (not only...but also — escalation) vs 虽然...但是 (although...but — contrast).",
    ],
  },

  // === adverbs ===
  {
    id: 70,
    title: "Expressing 'already' with 已经…了",
    pattern: "Subject + 已经 + Verb + 了",
    explanation: "已经 (yǐjīng) means 'already'. 了 at the end confirms the change of state.",
    examples: [
      { hanzi: "我已经吃了。", pinyin: "wǒ yǐjīng chī le.", english: "I've already eaten." },
      { hanzi: "他已经走了。", pinyin: "tā yǐjīng zǒu le.", english: "He has already left." },
      { hanzi: "电影已经开始了。", pinyin: "diànyǐng yǐjīng kāishǐ le.", english: "The movie has already started." },
    ],
    category: "adverbs",
    detailedExplanation: "已经...了 marks something that has ALREADY happened or a state that has already been reached. The 了 confirms the change is complete.\n\n已经 goes before the verb, 了 goes at the end: 我已经吃了 (I've already eaten). The combination emphasizes 'it's done, no need to worry about it.'\n\nUseful for politely declining: 我已经吃了 (I've already eaten — when someone offers food). Also for expressing that time has passed: 已经十点了 (It's already 10 o'clock).",
    tips: [
      "已经 + verb + 了 = already done: 已经到了 = already arrived.",
      "已经 + time + 了 = it's already: 已经很晚了 = It's already very late.",
      "Negate with 还没: 还没吃 = haven't eaten yet (not 已经没吃).",
    ],
    comparisons: [
      "已经...了 (already — completed) vs 还没 (not yet — still pending) vs 刚 (just now — recent).",
    ],
  },
  {
    id: 71,
    title: "Expressing 'just now' with 刚 and 刚才",
    pattern: "Subject + 刚 + Verb / 刚才 + Sentence",
    explanation: "刚 (gāng) means 'just' and goes before the verb. 刚才 (gāngcái) means 'just now' and can go before the subject or verb.",
    examples: [
      { hanzi: "我刚到。", pinyin: "wǒ gāng dào.", english: "I just arrived." },
      { hanzi: "他刚才给你打电话了。", pinyin: "tā gāngcái gěi nǐ dǎ diànhuà le.", english: "He just called you." },
      { hanzi: "她刚吃完饭。", pinyin: "tā gāng chī wán fàn.", english: "She just finished eating." },
    ],
    category: "adverbs",
    detailedExplanation: "刚 (gāng) and 刚才 (gāngcái) both mean 'just' but work differently. 刚 is an adverb that goes directly before the verb: 我刚到 (I just arrived). 刚才 is a time word that can go before the subject or verb: 刚才他打电话了.\n\nKey difference: 刚 emphasizes recency and doesn't use 了. 刚才 is a time reference and often pairs with 了.\n\nDon't add 了 after 刚: say 我刚到, not 我刚到了. 刚 already implies 'just happened', so 了 is redundant.",
    tips: [
      "刚 + verb (no 了): 我刚到, 我刚吃完.",
      "刚才 is a time word, can go before subject: 刚才谁来了？",
      "刚 = emphasis on 'just' (seconds ago). 刚才 = 'a moment ago' (minutes).",
    ],
    comparisons: [
      "刚 (just — before verb, no 了) vs 刚才 (just now — time word, with 了).",
    ],
  },
  {
    id: 72,
    title: "Expressing 'finally' with 终于",
    pattern: "Subject + 终于 + Verb + 了",
    explanation: "终于 (zhōngyú) means 'finally' or 'at last'. It implies something was awaited for a long time.",
    examples: [
      { hanzi: "你终于来了！", pinyin: "nǐ zhōngyú lái le!", english: "You finally came!" },
      { hanzi: "我终于找到了。", pinyin: "wǒ zhōngyú zhǎodào le.", english: "I finally found it." },
      { hanzi: "雨终于停了。", pinyin: "yǔ zhōngyú tíng le.", english: "The rain finally stopped." },
    ],
    category: "adverbs",
    detailedExplanation: "终于 (zhōngyú) means 'finally/at last' and always implies a long wait or effort. There's an emotional payoff — relief, satisfaction, or sometimes frustration.\n\n你终于来了！ (You finally came!) expresses relief after waiting. 我终于找到了 (I finally found it) implies a search that took effort.\n\n终于 usually pairs with 了 at the end — the 了 marks the change of state (from waiting to completed). Without emotion or waiting involved, don't use 终于.",
    tips: [
      "终于 implies waiting/effort. Don't use for routine events.",
      "终于 + verb + 了: 终于下课了！ = Class is finally over!",
      "Carries emotion: relief (终于好了), frustration (终于来了！).",
    ],
    comparisons: [
      "终于 (finally — after long wait) vs 已经 (already — neutral completion).",
    ],
  },
  {
    id: 73,
    title: "Expressing 'often' with 常常 and 经常",
    pattern: "Subject + 常常/经常 + Verb",
    explanation: "常常 (chángcháng) and 经常 (jīngcháng) both mean 'often'. They are interchangeable in most cases.",
    examples: [
      { hanzi: "我常常去那家饭店。", pinyin: "wǒ chángcháng qù nà jiā fàndiàn.", english: "I often go to that restaurant." },
      { hanzi: "他经常迟到。", pinyin: "tā jīngcháng chídào.", english: "He is often late." },
      { hanzi: "她常常帮我。", pinyin: "tā chángcháng bāng wǒ.", english: "She often helps me." },
    ],
    category: "adverbs",
    detailedExplanation: "常常 (chángcháng) and 经常 (jīngcháng) both mean 'often' and are largely interchangeable. 常常 is slightly more casual/spoken; 经常 is slightly more formal but still very common in speech.\n\nBoth go before the verb: 我常常去 (I often go). They describe habitual actions — things you regularly do.\n\nNegate with 不常/不经常: 我不常去 (I don't often go). For 'never', use 从来不: 我从来不去 (I never go).",
    tips: [
      "常常 ≈ 经常. Both mean 'often'. Use whichever feels natural.",
      "Position: before the verb. 我常常运动 = I often exercise.",
      "Frequency ladder: 从来不 (never) < 不常 (not often) < 有时候 (sometimes) < 常常 (often) < 总是 (always).",
    ],
    comparisons: [
      "常常/经常 (often) vs 有时候 (sometimes) vs 总是 (always).",
    ],
  },
  {
    id: 74,
    title: "Expressing 'always' with 一直",
    pattern: "Subject + 一直 + Verb",
    explanation: "一直 (yìzhí) means 'always' or 'continuously' — an action that has been going on without stopping.",
    examples: [
      { hanzi: "我一直在等你。", pinyin: "wǒ yìzhí zài děng nǐ.", english: "I've been waiting for you the whole time." },
      { hanzi: "他一直住在北京。", pinyin: "tā yìzhí zhù zài Běijīng.", english: "He has always lived in Beijing." },
      { hanzi: "她一直很努力。", pinyin: "tā yìzhí hěn nǔlì.", english: "She has always been hardworking." },
    ],
    category: "adverbs",
    detailedExplanation: "一直 (yìzhí) means 'always' in the sense of CONTINUOUSLY — an action or state that has been ongoing without interruption. 我一直在等你 (I've been waiting for you the whole time — continuously, without stopping).\n\nThis is different from 总是 (zǒngshì, 'always' as in habitual). 一直 emphasizes continuity/duration; 总是 emphasizes frequency/habit.\n\n一直 can also mean 'straight ahead' in directions: 一直走 (go straight ahead).",
    tips: [
      "一直 = continuously without stopping: 一直在学 = been studying the whole time.",
      "一直 + direction = straight: 一直走 = go straight ahead.",
      "一直 vs 总是: 一直在下雨 (been raining nonstop) vs 总是下雨 (it always rains).",
    ],
    comparisons: [
      "一直 (continuously) vs 总是 (always — habitual) vs 常常 (often).",
    ],
  },
  {
    id: 75,
    title: "Expressing 'suddenly' with 突然",
    pattern: "突然 + Verb Phrase",
    explanation: "突然 (tūrán) means 'suddenly'. It can go before the subject or the verb.",
    examples: [
      { hanzi: "他突然不说话了。", pinyin: "tā tūrán bù shuōhuà le.", english: "He suddenly stopped talking." },
      { hanzi: "突然下雨了。", pinyin: "tūrán xià yǔ le.", english: "It suddenly started raining." },
      { hanzi: "她突然笑了。", pinyin: "tā tūrán xiào le.", english: "She suddenly laughed." },
    ],
    category: "adverbs",
    detailedExplanation: "突然 (tūrán) means 'suddenly' and can be used as an adverb (before the verb) or an adjective (很突然 — very sudden). It emphasizes that something happened without warning.\n\nAs adverb: 突然下雨了 (It suddenly started raining). 他突然不说话了 (He suddenly stopped talking).\n\nThe emphasis is on unexpectedness. Don't use 突然 for things that were planned or expected — it always implies surprise.",
    tips: [
      "突然 before verb = suddenly: 突然停了 = suddenly stopped.",
      "Can go before subject too: 突然，有人敲门 = Suddenly, someone knocked.",
      "Only for unexpected events — never for planned actions.",
    ],
    comparisons: [
      "突然 (suddenly — unexpected) vs 马上 (immediately — about to happen).",
    ],
  },
  {
    id: 76,
    title: "Expressing 'immediately' with 马上",
    pattern: "Subject + 马上 + Verb",
    explanation: "马上 (mǎshàng) means 'immediately' or 'right away'.",
    examples: [
      { hanzi: "我马上来。", pinyin: "wǒ mǎshàng lái.", english: "I'm coming right away." },
      { hanzi: "电影马上开始。", pinyin: "diànyǐng mǎshàng kāishǐ.", english: "The movie is about to start." },
      { hanzi: "他马上就回来。", pinyin: "tā mǎshàng jiù huílái.", english: "He'll be back immediately." },
    ],
    category: "adverbs",
    detailedExplanation: "马上 (mǎshàng) means 'immediately' or 'right away' and is one of the most common urgency words. 我马上来 (I'm coming right away) is what you say when someone's waiting for you.\n\nIt can also mean 'about to' for imminent events: 电影马上开始 (The movie is about to start). The emphasis is on very soon — within seconds or minutes.\n\n马上 often pairs with 就: 马上就来 (coming right now). 就 adds emphasis on immediacy.",
    tips: [
      "马上 + verb = immediately/about to: 马上走 = leaving right now.",
      "马上就 adds emphasis: 马上就好 = Will be ready any second.",
      "我马上来 is one of the most practical daily phrases.",
    ],
    comparisons: [
      "马上 (right away — seconds) vs 快要...了 (about to — soon) vs 一会儿 (in a bit — not urgent).",
    ],
  },

  // === complements ===
  {
    id: 77,
    title: "Result complement 到",
    pattern: "Verb + 到 (+ Object)",
    explanation: "到 (dào) as a result complement means the action successfully reaches its target — 'find', 'reach', or 'until'.",
    examples: [
      { hanzi: "我找到了。", pinyin: "wǒ zhǎodào le.", english: "I found it." },
      { hanzi: "你听到了吗？", pinyin: "nǐ tīngdào le ma?", english: "Did you hear it?" },
      { hanzi: "我看到他了。", pinyin: "wǒ kàndào tā le.", english: "I saw him." },
    ],
    category: "complements",
    detailedExplanation: "到 (dào) after a verb means the action REACHED its target — it was successful. 找到 (searched and found), 看到 (looked and saw), 听到 (listened and heard). Without 到, you just did the action; with 到, you achieved the result.\n\n找 = to look for. 找到 = to find (successfully). This distinction is crucial: 我在找 (I'm looking) vs 我找到了 (I found it).\n\n到 can also mean 'until': 他工作到晚上十点 (He worked until 10 PM).",
    tips: [
      "Verb + 到 = successfully achieved: 找到 (found), 看到 (saw), 听到 (heard).",
      "找 (looking) vs 找到 (found). The 到 marks success.",
      "到 as 'until': 等到明天 = wait until tomorrow.",
    ],
    comparisons: [
      "Verb + 到 (reached/achieved) vs verb + 完 (finished) vs verb + 好 (done properly).",
    ],
  },
  {
    id: 78,
    title: "Result complement 好",
    pattern: "Verb + 好 (+ 了)",
    explanation: "好 (hǎo) as a result complement means the action is done properly or completely — 'done well' or 'ready'.",
    examples: [
      { hanzi: "饭做好了。", pinyin: "fàn zuò hǎo le.", english: "The food is ready." },
      { hanzi: "你准备好了吗？", pinyin: "nǐ zhǔnbèi hǎo le ma?", english: "Are you ready?" },
      { hanzi: "作业写好了。", pinyin: "zuòyè xiě hǎo le.", english: "The homework is done." },
    ],
    category: "complements",
    detailedExplanation: "好 (hǎo) after a verb means 'done properly' or 'ready'. 做好 (done making), 准备好 (prepared/ready), 写好 (finished writing properly).\n\nThe emphasis is on completeness and quality — the task is done satisfactorily. 饭做好了 (The food is ready — it's properly cooked and ready to serve).\n\n准备好了吗？ (Are you ready?) is one of the most common phrases using this pattern. Answer: 准备好了 (Ready!) or 还没准备好 (Not ready yet).",
    tips: [
      "Verb + 好 = done properly/ready: 准备好 = ready, 做好 = done making.",
      "准备好了吗？ = Are you ready? Essential phrase.",
      "好 implies quality; 完 just implies finished (regardless of quality).",
    ],
    comparisons: [
      "Verb + 好 (done properly/ready) vs verb + 完 (finished) vs verb + 到 (achieved).",
    ],
  },
  {
    id: 79,
    title: "Direction complement 来/去",
    pattern: "Verb + 来/去",
    explanation: "来 (lái) indicates motion toward the speaker; 去 (qù) indicates motion away. They follow the main verb.",
    examples: [
      { hanzi: "他跑过来了。", pinyin: "tā pǎo guòlái le.", english: "He ran over (toward me)." },
      { hanzi: "请进来。", pinyin: "qǐng jìnlái.", english: "Please come in." },
      { hanzi: "他走出去了。", pinyin: "tā zǒu chūqù le.", english: "He walked out." },
    ],
    category: "complements",
    detailedExplanation: "来 and 去 after verbs indicate direction of motion: 来 = toward the speaker, 去 = away from the speaker. 进来 (come in — toward me), 进去 (go in — away from me).\n\nThey combine with directional verbs: 上来 (come up), 下去 (go down), 出来 (come out), 回去 (go back). The pattern is: motion + direction.\n\nWith a main verb: 跑过来 (run over here), 走出去 (walk out). The main verb describes HOW, 来/去 describes the direction relative to the speaker.",
    tips: [
      "来 = toward speaker. 去 = away from speaker.",
      "Common pairs: 进来/进去, 出来/出去, 上来/上去, 回来/回去.",
      "请进来 = Please come in (toward me). 请出去 = Please go out (away).",
    ],
    comparisons: [
      "来 (toward speaker) vs 去 (away from speaker). Same verb, opposite direction.",
    ],
  },
  {
    id: 80,
    title: "Potential complement with 得/不",
    pattern: "Verb + 得/不 + Complement",
    explanation: "Verb + 得 + complement means 'can do it'. Verb + 不 + complement means 'cannot do it'.",
    examples: [
      { hanzi: "我看得见。", pinyin: "wǒ kàn de jiàn.", english: "I can see it." },
      { hanzi: "我听不懂。", pinyin: "wǒ tīng bù dǒng.", english: "I can't understand (by listening)." },
      { hanzi: "这么多吃得完吗？", pinyin: "zhème duō chī de wán ma?", english: "Can you finish eating this much?" },
    ],
    category: "complements",
    detailedExplanation: "Potential complements express whether you CAN or CANNOT achieve a result. Verb + 得 + complement = CAN do it. Verb + 不 + complement = CANNOT do it.\n\n看得见 (can see — the seeing reaches the result 'visible'). 看不见 (can't see). 听得懂 (can understand by listening). 听不懂 (can't understand).\n\nThis is one of the most practical patterns for daily life: 听不懂 (I don't understand what you're saying), 吃不完 (I can't finish eating this much), 买不起 (I can't afford it).",
    tips: [
      "Verb + 得 + result = CAN. Verb + 不 + result = CANNOT.",
      "听不懂 = can't understand. One of the most useful learner phrases.",
      "买不起 = can't afford. 吃不完 = can't finish eating.",
    ],
    comparisons: [
      "Potential (看得见/看不见 — can/can't see) vs actual result (看见了 — did see).",
    ],
  },
  {
    id: 81,
    title: "Degree complement with 得",
    pattern: "Verb + 得 + Description",
    explanation: "得 (de) after a verb introduces a description of how the action was done — its manner or result.",
    examples: [
      { hanzi: "他说得很好。", pinyin: "tā shuō de hěn hǎo.", english: "He speaks very well." },
      { hanzi: "她跑得很快。", pinyin: "tā pǎo de hěn kuài.", english: "She runs very fast." },
      { hanzi: "你写得太慢了。", pinyin: "nǐ xiě de tài màn le.", english: "You write too slowly." },
    ],
    category: "complements",
    detailedExplanation: "The degree complement with 得 (de) describes HOW an action is performed. Verb + 得 + description. 说得很好 (speaks very well), 跑得很快 (runs very fast).\n\nIMPORTANT: When there's an object, the verb must be repeated: 他说中文说得很好 (He speaks Chinese speaks very well) — yes, the verb appears twice. Or restructure: 他的中文说得很好.\n\nDon't confuse the three 'de's: 得 (after verbs, describing manner), 的 (after adjectives/nouns, possession), 地 (before verbs, describing how). 说得好 (speaks well) vs 好的书 (good book) vs 快地跑 (run quickly).",
    tips: [
      "Verb + 得 + description: 写得漂亮 = writes beautifully.",
      "With object, repeat the verb: 他说中文说得很好.",
      "Three de's: 得 (manner), 的 (possession), 地 (adverbial).",
    ],
    comparisons: [
      "得 (manner: 说得好) vs 的 (possession: 好的) vs 地 (adverb: 快地走).",
    ],
  },

  // === special-constructions ===
  {
    id: 82,
    title: "把 construction",
    pattern: "Subject + 把 + Object + Verb + Complement",
    explanation: "把 (bǎ) brings the object before the verb to emphasize what happens to it. The verb must have a result or direction.",
    examples: [
      { hanzi: "请把门关上。", pinyin: "qǐng bǎ mén guānshàng.", english: "Please close the door." },
      { hanzi: "他把书放在桌子上了。", pinyin: "tā bǎ shū fàng zài zhuōzi shàng le.", english: "He put the book on the table." },
      { hanzi: "我把作业做完了。", pinyin: "wǒ bǎ zuòyè zuò wán le.", english: "I finished the homework." },
    ],
    category: "special-constructions",
    detailedExplanation: "The 把 construction moves the object BEFORE the verb to emphasize what happens to it. Normal: 我关门了 (I closed the door). 把: 我把门关上了 (I closed the door — emphasis on the door being dealt with).\n\nKey rule: The verb in a 把 sentence CANNOT be bare — it must have a complement (result, direction, 了, etc.). 请把门关 is incomplete; 请把门关上 is correct.\n\n把 is especially useful for instructions: 把书打开 (Open the book), 把灯关了 (Turn off the light), 把这个吃了 (Eat this up).",
    tips: [
      "把 + object + verb + complement. The verb can't be bare.",
      "Use for disposal/handling: 把垃圾扔了 = Throw away the trash.",
      "Common in instructions: 把门关上, 把书打开, 把作业做完.",
    ],
    comparisons: [
      "把 (do something to the object) vs normal word order (neutral statement).",
    ],
  },
  {
    id: 83,
    title: "Passive with 被",
    pattern: "Subject + 被 (+ Agent) + Verb + Complement",
    explanation: "被 (bèi) marks the passive voice. The subject receives the action. Often implies something unwanted.",
    examples: [
      { hanzi: "我的手机被偷了。", pinyin: "wǒ de shǒujī bèi tōu le.", english: "My phone was stolen." },
      { hanzi: "蛋糕被他吃了。", pinyin: "dàngāo bèi tā chī le.", english: "The cake was eaten by him." },
      { hanzi: "那本书被借走了。", pinyin: "nà běn shū bèi jiè zǒu le.", english: "That book was borrowed (by someone)." },
    ],
    category: "special-constructions",
    detailedExplanation: "被 (bèi) marks the PASSIVE voice — the subject receives the action rather than doing it. 我的手机被偷了 (My phone was stolen). The phone is the victim of the stealing.\n\nCultural note: 被 traditionally implies something NEGATIVE or unwelcome happened to the subject. 被偷 (stolen), 被骂 (scolded), 被打 (hit). In modern Chinese, neutral/positive passives are becoming more common (被选为 = elected as), but the negative connotation is still the default.\n\nThe agent (who did it) is optional: 手机被偷了 (phone was stolen — by someone unknown) vs 手机被他偷了 (phone was stolen by him).",
    tips: [
      "被 usually implies something bad: 被骗 (deceived), 被偷 (stolen).",
      "Agent is optional: 被偷了 (stolen) or 被他偷了 (stolen by him).",
      "Modern usage: 被 is used more neutrally now, but negative is still the default.",
    ],
    comparisons: [
      "被 (passive — things done TO you) vs 把 (active — you do things TO objects).",
    ],
  },
  {
    id: 84,
    title: "Expressing 'let/make' with 让",
    pattern: "Subject + 让 + Person + Verb",
    explanation: "让 (ràng) means 'to let' or 'to make someone do something'.",
    examples: [
      { hanzi: "妈妈让我学习。", pinyin: "māma ràng wǒ xuéxí.", english: "Mom makes me study." },
      { hanzi: "让我想想。", pinyin: "ràng wǒ xiǎngxiang.", english: "Let me think about it." },
      { hanzi: "老师不让我们说话。", pinyin: "lǎoshī bú ràng wǒmen shuōhuà.", english: "The teacher doesn't let us talk." },
    ],
    category: "special-constructions",
    detailedExplanation: "让 (ràng) means 'to let' or 'to make someone do something'. Subject + 让 + person + verb. 妈妈让我学习 (Mom makes me study). 让我想想 (Let me think).\n\n让 covers both 'allow' (let) and 'cause' (make), depending on context. 老师不让我们说话 (The teacher doesn't let us talk — prohibition). 这件事让我很开心 (This matter makes me very happy — causation).\n\n让 is softer than 叫 (jiào), which also means 'make someone do' but is more forceful/colloquial.",
    tips: [
      "让 + person + verb: 让我看看 = Let me take a look.",
      "让 = let (permission) or make (causation), depending on context.",
      "让 (neutral/polite) vs 叫 (more forceful/casual). Both mean 'make someone do'.",
    ],
    comparisons: [
      "让 (let/make — neutral) vs 叫 (make — more forceful) vs 请 (please — polite request).",
    ],
  },
  {
    id: 85,
    title: "Expressing 'from…to' with 从…到",
    pattern: "从 + Start + 到 + End",
    explanation: "从 (cóng) means 'from' and 到 (dào) means 'to'. Used for time and place ranges.",
    examples: [
      { hanzi: "从这里到学校很近。", pinyin: "cóng zhèlǐ dào xuéxiào hěn jìn.", english: "It's close from here to the school." },
      { hanzi: "从早上到晚上。", pinyin: "cóng zǎoshang dào wǎnshang.", english: "From morning to evening." },
      { hanzi: "我从北京到上海坐火车。", pinyin: "wǒ cóng Běijīng dào Shànghǎi zuò huǒchē.", english: "I take the train from Beijing to Shanghai." },
    ],
    category: "special-constructions",
    detailedExplanation: "从...到... marks a range — from a starting point TO an ending point. Works for both place and time.\n\nPlace: 从北京到上海 (from Beijing to Shanghai). Time: 从早上到晚上 (from morning to evening). Both: 从三点到五点 (from 3 to 5 o'clock).\n\n从 alone means 'from' as a preposition: 我从中国来 (I come from China). It always indicates the origin or starting point.",
    tips: [
      "从 A 到 B: works for places, times, and abstract ranges.",
      "从 alone = from: 我从北京来 = I come from Beijing.",
      "从...到... can express transformation: 从小到大 = from childhood to adulthood.",
    ],
    comparisons: [
      "从...到 (from...to — range) vs 离 (distance from: 离这儿很近).",
    ],
  },
  {
    id: 86,
    title: "Expressing 'toward' with 向 and 往",
    pattern: "向/往 + Direction/Place + Verb",
    explanation: "向 (xiàng) and 往 (wǎng) both mean 'toward'. 往 is more common for physical direction; 向 also works for abstract targets.",
    examples: [
      { hanzi: "往前走。", pinyin: "wǎng qián zǒu.", english: "Walk forward." },
      { hanzi: "向左转。", pinyin: "xiàng zuǒ zhuǎn.", english: "Turn left." },
      { hanzi: "他向我走过来。", pinyin: "tā xiàng wǒ zǒu guòlái.", english: "He walked toward me." },
    ],
    category: "special-constructions",
    detailedExplanation: "向 (xiàng) and 往 (wǎng) both mean 'toward' a direction. 往 is more concrete/physical (往前走 = walk forward), while 向 also works for abstract targets (向他学习 = learn from him).\n\nFor giving directions, 往 is more common: 往左转 (turn left), 往前走 (go straight ahead), 往右拐 (turn right). These are essential for navigating.\n\nRemember: 向/往 + direction + verb. The direction comes between 向/往 and the verb.",
    tips: [
      "Directions: 往前走 (go straight), 往左转 (turn left), 往右转 (turn right).",
      "往 for physical direction. 向 for physical + abstract targets.",
      "向 for 'toward someone': 向他道歉 = apologize to him.",
    ],
    comparisons: [
      "往 (physical direction only) vs 向 (physical + abstract direction) vs 朝 (facing toward).",
    ],
  },
  {
    id: 87,
    title: "Double 了: ongoing duration",
    pattern: "Verb + 了 + Duration + 了",
    explanation: "Two 了 — one after the verb and one at the end — means the action started in the past and is still going on.",
    examples: [
      { hanzi: "我学了三年中文了。", pinyin: "wǒ xué le sān nián Zhōngwén le.", english: "I've been studying Chinese for three years." },
      { hanzi: "他等了两个小时了。", pinyin: "tā děng le liǎng gè xiǎoshí le.", english: "He has been waiting for two hours." },
      { hanzi: "我们住了五年了。", pinyin: "wǒmen zhù le wǔ nián le.", english: "We've been living here for five years." },
    ],
    category: "special-constructions",
    detailedExplanation: "Double 了 — one after the verb and one at the sentence end — means an action started in the past and is STILL ONGOING. 我学了三年中文了 (I've been studying Chinese for three years — and I'm still studying).\n\nWithout the second 了: 我学了三年中文 (I studied Chinese for three years — it might be over now). The second 了 is what marks continuation to the present.\n\nThis pattern is essential for expressing duration of ongoing activities. It answers 'how long have you been...?': 你学了多长时间了？ (How long have you been studying?).",
    tips: [
      "Double 了 = started in past, still going: 等了两个小时了 = been waiting 2 hours.",
      "Single 了 = past duration (may be over). Double 了 = still ongoing.",
      "Common question: 你学了多长时间了？ = How long have you been studying?",
    ],
    comparisons: [
      "学了三年 (studied 3 years — maybe done) vs 学了三年了 (been studying 3 years — still going).",
    ],
  },

  // === other ===
  {
    id: 88,
    title: "Expressing duration",
    pattern: "Verb + Duration (+ 的 + Object)",
    explanation: "Duration goes after the verb. If there is an object, either repeat the verb or add 的 before the object.",
    examples: [
      { hanzi: "我每天学两个小时。", pinyin: "wǒ měi tiān xué liǎng gè xiǎoshí.", english: "I study for two hours every day." },
      { hanzi: "他睡了八个小时。", pinyin: "tā shuì le bā gè xiǎoshí.", english: "He slept for eight hours." },
      { hanzi: "我看了一个小时的书。", pinyin: "wǒ kàn le yí gè xiǎoshí de shū.", english: "I read for an hour." },
    ],
    category: "other",
    detailedExplanation: "Duration in Chinese goes AFTER the verb, which is different from English. 我学了两个小时 (I studied for two hours) — the duration follows the verb.\n\nWith an object, it gets tricky. Three options: (1) Repeat the verb: 我看书看了一个小时. (2) Add 的: 我看了一个小时的书. (3) If the object is short/understood, just append: 他睡了八个小时.\n\nDuration expressions use measure words: 小时 (hour), 天 (day), 个星期 (week), 个月 (month), 年 (year). 两个小时 (2 hours), 三天 (3 days).",
    tips: [
      "Duration goes AFTER the verb: 学了三年 = studied for 3 years.",
      "With object, repeat verb or add 的: 看了一个小时的书.",
      "Duration words: 小时 (hour), 天 (day), 个星期 (week), 个月 (month), 年 (year).",
    ],
    comparisons: [
      "Duration after verb (学了三年) vs time phrase before verb (三点学 = study at 3).",
    ],
  },
  {
    id: 89,
    title: "Expressing frequency with 每",
    pattern: "每 + Time Word + 都 + Verb",
    explanation: "每 (měi) means 'every'. 都 often follows to emphasize 'all/every time'.",
    examples: [
      { hanzi: "我每天都运动。", pinyin: "wǒ měi tiān dōu yùndòng.", english: "I exercise every day." },
      { hanzi: "他每个星期都去。", pinyin: "tā měi gè xīngqī dōu qù.", english: "He goes every week." },
      { hanzi: "每个人都来了。", pinyin: "měi gè rén dōu lái le.", english: "Everyone came." },
    ],
    category: "other",
    detailedExplanation: "每 (měi) means 'every' and is used for routines and habits. 每 + time word + 都 + verb is the standard pattern: 我每天都运动 (I exercise every day).\n\n都 after the time word emphasizes 'without exception'. You can omit 都, but it sounds less emphatic: 我每天运动 (I exercise every day — slightly less emphasis).\n\n每 requires a measure word before nouns: 每个人 (every person), 每本书 (every book). But not before time words: 每天, 每年, 每周.",
    tips: [
      "每 + time + 都 + verb: 每天都学习 = study every day.",
      "每 + measure word + noun: 每个人 (everyone), 每本书 (every book).",
      "都 adds 'without exception': 每次都迟到 = late every single time.",
    ],
    comparisons: [
      "每 (every — routine) vs 所有 (all — totality) vs 都 (all — summarizing).",
    ],
  },
  {
    id: 90,
    title: "Expressing 'while doing' with 一边…一边",
    pattern: "一边 + Verb₁ + 一边 + Verb₂",
    explanation: "一边…一边 (yìbiān…yìbiān) means doing two actions at the same time.",
    examples: [
      { hanzi: "他一边吃饭一边看电视。", pinyin: "tā yìbiān chīfàn yìbiān kàn diànshì.", english: "He eats while watching TV." },
      { hanzi: "她一边走一边打电话。", pinyin: "tā yìbiān zǒu yìbiān dǎ diànhuà.", english: "She walks while talking on the phone." },
      { hanzi: "我一边听音乐一边学习。", pinyin: "wǒ yìbiān tīng yīnyuè yìbiān xuéxí.", english: "I listen to music while studying." },
    ],
    category: "other",
    detailedExplanation: "一边...一边... describes two actions happening SIMULTANEOUSLY. 一边吃饭一边看电视 (eating while watching TV). Both actions are ongoing at the same time.\n\nThe two actions should be physically possible to do together. You can 一边走一边说话 (walk while talking) but not 一边睡觉一边跑步 (sleep while running).\n\nIn casual speech, sometimes just 一边 is used for the first action: 他吃饭，一边看手机 — but the full pattern is clearer.",
    tips: [
      "一边 A 一边 B = do A while doing B simultaneously.",
      "Both actions must be physically compatible.",
      "Common: 一边听音乐一边学习, 一边走一边聊天.",
    ],
    comparisons: [
      "一边...一边 (simultaneous actions) vs 先...然后 (sequential — first...then).",
    ],
  },
  {
    id: 91,
    title: "Expressing purpose with 为了",
    pattern: "为了 + Purpose，Subject + Verb",
    explanation: "为了 (wèile) means 'in order to'. It states the purpose or reason for an action.",
    examples: [
      { hanzi: "为了学中文，我来了中国。", pinyin: "wèile xué Zhōngwén, wǒ lái le Zhōngguó.", english: "In order to learn Chinese, I came to China." },
      { hanzi: "他为了考试在学习。", pinyin: "tā wèile kǎoshì zài xuéxí.", english: "He is studying for the exam." },
      { hanzi: "为了健康，你应该多运动。", pinyin: "wèile jiànkāng, nǐ yīnggāi duō yùndòng.", english: "For your health, you should exercise more." },
    ],
    category: "other",
    detailedExplanation: "为了 (wèile) states the PURPOSE of an action — 'in order to'. It usually goes at the beginning: 为了学中文，我来了中国 (In order to learn Chinese, I came to China).\n\nThe purpose clause with 为了 comes BEFORE the main action. This follows Chinese logic: reason/purpose first, then action.\n\nDon't confuse 为了 (in order to — purpose) with 因为 (because — reason). 为了 looks forward (goal), 因为 looks backward (cause).",
    tips: [
      "为了 + purpose, + action: 为了健康，多运动 = For health, exercise more.",
      "为了 states the goal. 因为 states the cause. Different directions.",
      "为了 goes before the main clause, setting the purpose first.",
    ],
    comparisons: [
      "为了 (in order to — forward goal) vs 因为 (because — backward cause).",
    ],
  },
  {
    id: 92,
    title: "Expressing 'it depends' with 看",
    pattern: "看 + Question Clause",
    explanation: "看 (kàn) can mean 'it depends on'. The clause after 看 is what the outcome depends on.",
    examples: [
      { hanzi: "看天气吧。", pinyin: "kàn tiānqì ba.", english: "It depends on the weather." },
      { hanzi: "看你想去哪儿。", pinyin: "kàn nǐ xiǎng qù nǎr.", english: "It depends on where you want to go." },
      { hanzi: "去不去看情况。", pinyin: "qù bú qù kàn qíngkuàng.", english: "Whether I go depends on the situation." },
    ],
    category: "other",
    detailedExplanation: "看 (kàn) followed by a question clause means 'it depends on' or 'let's see'. 看天气吧 (It depends on the weather). 看情况 (It depends on the situation).\n\nThis is an incredibly natural way to express uncertainty or flexibility. Instead of committing to a decision, you defer to circumstances. Very common in daily Chinese.\n\n看 here isn't 'to look' literally — it's 'to see/consider'. 我们看看吧 (Let's see) is a useful phrase for deferring decisions politely.",
    tips: [
      "看 + factor = it depends on: 看你的时间 = depends on your schedule.",
      "看情况 and 看看吧 are the go-to phrases for 'it depends' / 'let's see'.",
      "This 看 means 'consider', not literally 'look at'.",
    ],
    comparisons: [
      "看 (depends on — considering) vs 要看 (need to see — slightly more formal).",
    ],
  },
  {
    id: 93,
    title: "Using 着 for ongoing state",
    pattern: "Verb + 着",
    explanation: "着 (zhe) indicates a state resulting from an action — the action happened and the state continues.",
    examples: [
      { hanzi: "门开着。", pinyin: "mén kāi zhe.", english: "The door is open." },
      { hanzi: "他站着。", pinyin: "tā zhàn zhe.", english: "He is standing." },
      { hanzi: "墙上挂着一幅画。", pinyin: "qiáng shàng guà zhe yì fú huà.", english: "A painting hangs on the wall." },
    ],
    category: "other",
    detailedExplanation: "着 (zhe) after a verb indicates an ONGOING STATE — the action happened and the resulting state continues. 门开着 (The door is open — someone opened it and it remains open). 他站着 (He is standing — he stood up and remains standing).\n\nThis is different from 在 + verb (action in progress). 在 emphasizes the action happening: 他在站 (He is standing up — the act of standing). 着 emphasizes the resulting state: 他站着 (He is in a standing position).\n\n着 is essential for describing scenes: 墙上挂着画 (A painting hangs on the wall), 桌子上放着书 (Books are placed on the table).",
    tips: [
      "Verb + 着 = resulting state continues: 开着 (is open), 关着 (is closed).",
      "For scene descriptions: 墙上挂着..., 桌子上放着...",
      "着 (ongoing state) vs 在 + verb (action in progress).",
    ],
    comparisons: [
      "着 (state continues: 坐着 = is seated) vs 在 (in progress: 在坐 = sitting down now).",
    ],
  },
];
