export interface GrammarPoint {
  id: number;
  title: string;
  pattern: string;
  explanation: string;
  examples: { hanzi: string; pinyin: string; english: string }[];
  category: string;
  detailedExplanation?: string;
  tips?: string[];
  comparisons?: string[];
}

export interface MCQExercise {
  type: "mcq";
  prompt: string;
  options: string[];
  answer: number;
  difficulty?: 1 | 2 | 3;
}

export interface FillExercise {
  type: "fill";
  sentence: string;
  answer: string;
  distractors: string[];
  difficulty?: 1 | 2 | 3;
}

export interface ReorderExercise {
  type: "reorder";
  english: string;
  words: string[];
  answer: string[];
  difficulty?: 1 | 2 | 3;
}

export interface TranslateExercise {
  type: "translate";
  english: string;
  answer: string;
  accept?: string[];
  difficulty?: 1 | 2 | 3;
}

export type Exercise = MCQExercise | FillExercise | ReorderExercise | TranslateExercise;

export const grammar: GrammarPoint[] = [
  // === sentence-structure ===
  {
    id: 1,
    title: "Basic SVO word order",
    pattern: "Subject + Verb + Object",
    explanation: "Chinese follows Subject-Verb-Object order, similar to English.",
    examples: [
      { hanzi: "我吃饭。", pinyin: "wǒ chī fàn.", english: "I eat." },
      { hanzi: "他喝水。", pinyin: "tā hē shuǐ.", english: "He drinks water." },
      { hanzi: "她看书。", pinyin: "tā kàn shū.", english: "She reads." },
    ],
    category: "sentence-structure",
    detailedExplanation: "Chinese uses Subject-Verb-Object (SVO) order, just like English. The subject (who is doing the action) comes first, followed by the verb (the action itself), and finally the object (what is being acted upon). For example, in '我吃苹果' (I eat an apple), '我' is the subject, '吃' is the verb, and '苹果' is the object.\n\nThis structure is straightforward for beginners, but Chinese often omits the subject when it's clear from context, unlike English where the subject is usually required. A common mistake is adding extra particles or changing the order, which can make sentences sound unnatural.\n\nPractice with simple, concrete examples to build confidence. Start with common verbs and gradually add more complex objects.",
    tips: [
      "Think of Chinese SVO as the same order you use in English: I + eat + rice.",
      "Chinese often drops the subject when context makes it obvious — this is normal, not an error.",
      "Keep objects simple at first: single nouns before noun phrases.",
    ],
    comparisons: [
      "Unlike Japanese or Korean (SOV order), Chinese puts the verb before the object, just like English.",
    ],
  },
  {
    id: 2,
    title: "Linking nouns with 是",
    pattern: "Noun 1 + 是 + Noun 2",
    explanation: "是 (shì) links two nouns, like 'is' in English. It equates A with B.",
    examples: [
      { hanzi: "我是学生。", pinyin: "wǒ shì xuéshēng.", english: "I am a student." },
      { hanzi: "他是老师。", pinyin: "tā shì lǎoshī.", english: "He is a teacher." },
      { hanzi: "这是我的书。", pinyin: "zhè shì wǒ de shū.", english: "This is my book." },
    ],
    category: "sentence-structure",
    detailedExplanation: "The word 是 (shì) links two nouns, similar to 'is' in English. It equates Noun 1 with Noun 2, showing identity or classification. For example, '这是书' (This is a book) uses 是 to connect '这' (this) with '书' (book).\n\nUnlike English, 是 is always required in these sentences and cannot be omitted. However, 是 is ONLY used between nouns — never use 是 before adjectives. Saying '我是高' (I am tall) is wrong; the correct form is '我很高' using 很 instead.\n\nA common mistake is using 是 where 很 should go. Remember: 是 = noun equals noun. For adjective descriptions, use a different pattern.",
    tips: [
      "是 only links NOUNS. Never put 是 before an adjective.",
      "To negate, add 不 before 是: 我不是学生 (I am not a student).",
      "是 can be dropped in casual speech when answering yes/no questions, but keep it when learning.",
    ],
    comparisons: [
      "是 links nouns (我是学生), while 很 links nouns to adjectives (我很高). Don't mix them up.",
    ],
  },
  {
    id: 3,
    title: "Adjective predicates with 很",
    pattern: "Noun + 很 + Adjective",
    explanation: "In Chinese, adjectives act as predicates directly. 很 is often added before the adjective, even when you don't mean 'very'.",
    examples: [
      { hanzi: "我很好。", pinyin: "wǒ hěn hǎo.", english: "I'm fine." },
      { hanzi: "今天很冷。", pinyin: "jīntiān hěn lěng.", english: "Today is cold." },
      { hanzi: "中国菜很好吃。", pinyin: "Zhōngguó cài hěn hǎochī.", english: "Chinese food is delicious." },
    ],
    category: "sentence-structure",
    detailedExplanation: "In Chinese, adjectives can serve as the predicate of a sentence without a linking verb like 'is.' You don't say '我是高' (I is tall) — instead you say '我很高' (I tall). The word 很 is placed before the adjective, but in many cases it has lost its literal meaning of 'very' and simply serves as a grammatical filler.\n\nWhen you truly want to emphasize 'very,' you can stress 很 in speech or use stronger adverbs like 非常 or 特别. Without 很 or another adverb, an adjective predicate often implies a comparison: '他高' suggests 'he is tall (compared to someone else).'\n\nThis is one of the most common patterns in daily Chinese. Mastering it early means you can describe people, weather, food, and feelings naturally.",
    tips: [
      "Don't use 是 before adjectives — say 我很好, not 我是好.",
      "很 often doesn't mean 'very' — it's just required grammar glue in neutral statements.",
      "Without 很, the adjective implies comparison: 他高 = he's taller (than someone).",
    ],
    comparisons: [
      "是 links nouns (我是学生), 很 links nouns to adjectives (我很忙). Never swap them.",
      "To say 'very' with emphasis, use 非常 or 特别 instead of stressing 很.",
    ],
  },
  {
    id: 4,
    title: "Possession with 有",
    pattern: "Subject + 有 + Object",
    explanation: "有 (yǒu) expresses possession, like 'have' in English.",
    examples: [
      { hanzi: "我有一个朋友。", pinyin: "wǒ yǒu yí gè péngyǒu.", english: "I have a friend." },
      { hanzi: "他有两个孩子。", pinyin: "tā yǒu liǎng gè háizi.", english: "He has two children." },
      { hanzi: "你有钱吗？", pinyin: "nǐ yǒu qián ma?", english: "Do you have money?" },
    ],
    category: "sentence-structure",
    detailedExplanation: "有 (yǒu) expresses possession — 'to have.' The structure is simple: Subject + 有 + Object. Unlike English, there is no change for singular/plural or tense — 有 stays the same regardless.\n\nThe negative form uses 没 instead of 不: '我没有钱' (I don't have money). This is important because most other verbs use 不 for negation, but 有 always pairs with 没. Saying '不有' is always wrong.\n\nQuantifiers often appear between 有 and the object: '我有三个苹果' (I have three apples). This is also where you practice measure words like 个, 本, 只.",
    tips: [
      "Negate 有 with 没, never 不. 我没有 is correct, 我不有 is always wrong.",
      "有 doesn't change for tense — 我有 works for past, present, and future.",
      "Add a number + measure word between 有 and the object: 我有两本书.",
    ],
    comparisons: [
      "有 (possession: I have X) vs 是 (identity: I am X) — different verbs for different meanings.",
      "有 uses 没 for negation; most other verbs use 不.",
    ],
  },
  {
    id: 5,
    title: "Existence with 有",
    pattern: "Place + 有 + Object",
    explanation: "有 can also express existence — 'there is/are' something at a place.",
    examples: [
      { hanzi: "桌子上有一本书。", pinyin: "zhuōzi shàng yǒu yì běn shū.", english: "There is a book on the table." },
      { hanzi: "学校里有很多学生。", pinyin: "xuéxiào lǐ yǒu hěn duō xuéshēng.", english: "There are many students in the school." },
    ],
    category: "sentence-structure",
    detailedExplanation: "有 has a second meaning beyond possession: existence. When the subject is a place rather than a person, 有 means 'there is/there are.' The structure is Place + 有 + Thing. For example, '桌子上有书' means 'There are books on the table.'\n\nThe place expression usually includes a location word like 上 (on), 里 (in), or 下 (under). These come after the noun: 桌子上 (on the table), 教室里 (in the classroom).\n\nJust like possession 有, the negative is 没有: '教室里没有人' (There's nobody in the classroom). The pattern is essential for describing scenes, rooms, and locations.",
    tips: [
      "If the subject is a person, 有 = 'to have.' If it's a place, 有 = 'there is/are.'",
      "Location words (上/里/下/旁边) go AFTER the noun: 桌子上, not 上桌子.",
      "Same negation rule: 没有, never 不有.",
    ],
    comparisons: [
      "Place + 有 + thing (existence) vs Person + 有 + thing (possession) — same word, different meaning based on subject.",
    ],
  },
  {
    id: 6,
    title: "Emphasizing details with 是…的",
    pattern: "Subject + 是 + Detail + Verb + 的",
    explanation: "Used to emphasize when, where, how, or who did a known/completed action.",
    examples: [
      { hanzi: "你是什么时候来的？", pinyin: "nǐ shì shénme shíhòu lái de?", english: "When did you come?" },
      { hanzi: "我是坐飞机来的。", pinyin: "wǒ shì zuò fēijī lái de.", english: "I came by plane." },
      { hanzi: "他是在北京学的中文。", pinyin: "tā shì zài Běijīng xué de Zhōngwén.", english: "He learned Chinese in Beijing." },
    ],
    category: "sentence-structure",
    detailedExplanation: "The 是…的 construction is used to emphasize a specific detail about a past action that both speaker and listener already know happened. It highlights the when, where, how, or who — not whether the action occurred.\n\nFor example, if someone already knows you visited China, you might say '我是去年去的中国' to emphasize WHEN (last year). The action (going to China) is assumed known; the new information is the timing. 是 goes before the emphasized detail, and 的 goes at or near the end.\n\nA common mistake is using this pattern for actions that haven't happened yet or that the listener doesn't know about. The 是…的 pattern is only for emphasizing details of known past events.",
    tips: [
      "Only use 是…的 for past actions both speakers know about — it highlights HOW/WHEN/WHERE, not IF.",
      "是 goes right before the detail you want to emphasize.",
      "的 usually goes at the end, but can go before the object: 我是在北京买的书 or 我是在北京买书的.",
    ],
    comparisons: [
      "是…的 emphasizes details of a past action, while 了 simply reports that an action was completed.",
    ],
  },
  {
    id: 7,
    title: "Connecting nouns with 和",
    pattern: "Noun 1 + 和 + Noun 2",
    explanation: "和 (hé) connects two nouns, like 'and'. It is not used to connect clauses or verbs.",
    examples: [
      { hanzi: "我和你", pinyin: "wǒ hé nǐ", english: "me and you" },
      { hanzi: "爸爸和妈妈都是老师。", pinyin: "bàba hé māma dōu shì lǎoshī.", english: "Dad and Mom are both teachers." },
      { hanzi: "苹果和水都在桌子上。", pinyin: "píngguǒ hé shuǐ dōu zài zhuōzi shàng.", english: "The apples and water are both on the table." },
    ],
    category: "sentence-structure",
    detailedExplanation: "和 (hé) connects two nouns, similar to 'and' in English. However, unlike English 'and,' 和 can ONLY connect nouns or noun phrases — never verbs, adjectives, or clauses. To say 'I sing and dance,' you cannot use 和 between the verbs.\n\nWhen connecting two subjects with 和, the verb that follows often includes 都 (both/all) to show the predicate applies to all items: '我和他都喜欢中国菜' (He and I both like Chinese food).\n\nFor connecting verbs or clauses, use other conjunctions like 也 (also), 还 (also/still), or simply list the actions in sequence.",
    tips: [
      "和 is for NOUNS only. Don't use it to connect verbs or sentences.",
      "After 和, add 都 if the predicate applies to both: 我和他都去 (he and I both go).",
      "For listing 3+ items, 和 goes before the last one: A, B 和 C.",
    ],
    comparisons: [
      "和 connects nouns only. To connect actions, use 也 (also) or list them: 我唱歌跳舞 (I sing and dance).",
    ],
  },
  {
    id: 8,
    title: "Modifying nouns with 的",
    pattern: "Modifier + 的 + Noun",
    explanation: "的 (de) marks possession or modifies a noun with an adjective, phrase, or clause.",
    examples: [
      { hanzi: "我的书", pinyin: "wǒ de shū", english: "my book" },
      { hanzi: "漂亮的女孩", pinyin: "piàoliang de nǚhái", english: "a beautiful girl" },
      { hanzi: "他写的字很好看。", pinyin: "tā xiě de zì hěn hǎokàn.", english: "The characters he writes look great." },
    ],
    category: "sentence-structure",
    detailedExplanation: "的 (de) is one of the most frequently used particles in Chinese. It connects a modifier to a noun, covering possession ('my book'), adjective descriptions ('beautiful girl'), and even clause-based descriptions ('the book he wrote').\n\nFor possession, the structure is Pronoun + 的 + Noun: 我的老师 (my teacher). For adjectives, it's Adjective + 的 + Noun: 好吃的菜 (delicious food). For clauses, the entire clause goes before 的: 他买的书 (the book he bought).\n\nWith close relationships (family, close friends) and single-syllable adjectives, 的 is often dropped: 我妈妈 (my mom), 好人 (good person). This is natural and common — don't force 的 into every modifier.",
    tips: [
      "的 can be dropped with close relationships: 我妈妈 (my mom), not 我的妈妈.",
      "Single-syllable adjectives often skip 的: 好人, 大城市. Two-syllable ones keep it: 漂亮的女孩.",
      "Think of 的 as an ownership/description marker that sits between the describer and the thing described.",
    ],
    comparisons: [
      "的 (possession/description marker) vs 地 (adverb marker before verbs) vs 得 (degree complement after verbs). All pronounced 'de' but used differently.",
    ],
  },

  // === negation ===
  {
    id: 9,
    title: "Negation with 不",
    pattern: "Subject + 不 + Verb/Adjective",
    explanation: "不 (bù) negates verbs and adjectives in the present or future. It does not negate past actions.",
    examples: [
      { hanzi: "我不喝咖啡。", pinyin: "wǒ bù hē kāfēi.", english: "I don't drink coffee." },
      { hanzi: "她不高兴。", pinyin: "tā bù gāoxìng.", english: "She is not happy." },
      { hanzi: "我不是中国人。", pinyin: "wǒ bú shì Zhōngguó rén.", english: "I am not Chinese." },
    ],
    category: "negation",
    detailedExplanation: "不 (bù) is the standard negation word for verbs and adjectives in the present, future, or habitual sense. Place 不 directly before the verb or adjective: 我不喝咖啡 (I don't drink coffee), 她不高兴 (She's not happy).\n\nImportant tone rule: 不 is normally 4th tone (bù), but changes to 2nd tone (bú) when followed by another 4th-tone syllable. For example: 不是 is pronounced 'bú shì' because 是 is 4th tone.\n\nDo NOT use 不 for past actions — use 没 instead. '我不去了' means 'I won't go anymore' (future decision), while '我没去' means 'I didn't go' (past event).",
    tips: [
      "不 is for present/future/habitual negation. For past events, use 没.",
      "Tone sandhi: 不 becomes bú before 4th-tone words (不是 = bú shì).",
      "不 goes directly before the verb: 我不知道, not 我知道不.",
    ],
    comparisons: [
      "不 negates present/future/habitual actions. 没 negates past completed actions.",
    ],
  },
  {
    id: 10,
    title: "Negating 有 with 没",
    pattern: "没 + 有 (+ Object)",
    explanation: "有 is always negated with 没, never with 不. 没有 means 'don't have' or 'there isn't'.",
    examples: [
      { hanzi: "我没有钱。", pinyin: "wǒ méiyǒu qián.", english: "I don't have money." },
      { hanzi: "这里没有人。", pinyin: "zhèlǐ méiyǒu rén.", english: "There's nobody here." },
    ],
    category: "negation",
    detailedExplanation: "有 (yǒu) is a special verb that is ALWAYS negated with 没, never with 不. Saying '不有' is always grammatically wrong in standard Chinese. The negative form is 没有 (méiyǒu) or just 没 (méi).\n\nThis applies to both meanings of 有: possession ('I don't have...') and existence ('There isn't...'). 我没有车 (I don't have a car), 这里没有水 (There's no water here).\n\nIn casual speech, 有 is often dropped after 没: 我没钱 = 我没有钱. Both are natural and correct.",
    tips: [
      "NEVER say 不有 — it's always 没有. This is the #1 rule for 有.",
      "没有 can be shortened to 没 in casual speech: 我没钱 = I don't have money.",
      "没有 also means 'not as... as' in comparisons: 我没有他高 = I'm not as tall as him.",
    ],
    comparisons: [
      "有 → 没有 (never 不有). All other verbs → 不 or 没 depending on tense.",
    ],
  },
  {
    id: 11,
    title: "Negating past actions with 没有",
    pattern: "Subject + 没(有) + Verb",
    explanation: "没(有) negates completed actions — something didn't happen in the past.",
    examples: [
      { hanzi: "我没有去。", pinyin: "wǒ méiyǒu qù.", english: "I didn't go." },
      { hanzi: "他没吃早饭。", pinyin: "tā méi chī zǎofàn.", english: "He didn't eat breakfast." },
      { hanzi: "她没来上课。", pinyin: "tā méi lái shàngkè.", english: "She didn't come to class." },
    ],
    category: "negation",
    detailedExplanation: "To say something DIDN'T happen in the past, use 没(有) before the verb. This is different from 不, which negates present/future actions. 我没去 means 'I didn't go' (past), while 我不去 means 'I won't go' (future).\n\nWhen using 没 for past negation, do NOT add 了 after the verb. Since 没 already indicates the action didn't complete, 了 (which marks completion) would be contradictory. Say 我没吃, not 我没吃了.\n\nThe 有 after 没 is optional in speech: 我没去 and 我没有去 mean the same thing.",
    tips: [
      "Past negation: 没 + verb (no 了). 我没吃 = I didn't eat.",
      "Never combine 没 and 了 on the same verb — they contradict each other.",
      "没有 can be shortened to 没: 我没去 = 我没有去.",
    ],
    comparisons: [
      "没 + verb = didn't happen (past). 不 + verb = won't / don't (present/future).",
    ],
  },
  {
    id: 12,
    title: "'Not very' with 不太",
    pattern: "Subject + 不太 + Adjective",
    explanation: "不太 softens the negation — 'not very' or 'not really'.",
    examples: [
      { hanzi: "我不太喜欢。", pinyin: "wǒ bú tài xǐhuān.", english: "I don't really like it." },
      { hanzi: "他不太高兴。", pinyin: "tā bú tài gāoxìng.", english: "He's not very happy." },
    ],
    category: "negation",
    detailedExplanation: "不太 is a polite, softened way to negate. Instead of the blunt 不好 (not good), 不太好 (not very good) sounds gentler and more diplomatic. Chinese culture values indirectness, and 不太 is one of the key tools for that.\n\n不太 works with both adjectives (不太高兴 — not very happy) and verbs (不太喜欢 — don't really like). It's extremely common in everyday conversation, especially when giving opinions or declining offers.\n\nIt's also useful when you want to express mild dissatisfaction without being rude — 不太好吃 (not very tasty) is much softer than 不好吃 (not tasty).",
    tips: [
      "Use 不太 to be polite. 不太好 sounds much softer than 不好.",
      "Works with adjectives AND verbs: 不太想去 = don't really want to go.",
      "Common in opinions and declining: 我不太方便 = It's not very convenient for me.",
    ],
    comparisons: [
      "不太 (not very — soft) vs 不 (not — direct) vs 一点儿也不 (not at all — strong).",
    ],
  },
  {
    id: 13,
    title: "'Not anymore' with 不…了",
    pattern: "不 + Verb/Adj + 了",
    explanation: "Expresses a change of state — something is no longer the case or will no longer happen.",
    examples: [
      { hanzi: "我不吃了。", pinyin: "wǒ bù chī le.", english: "I'm not eating anymore." },
      { hanzi: "他不喝酒了。", pinyin: "tā bù hē jiǔ le.", english: "He doesn't drink anymore." },
    ],
    category: "negation",
    detailedExplanation: "The pattern 不…了 expresses a CHANGE — something that was true before is no longer true, or a decision has been made to stop. 我不吃了 means 'I'm not eating anymore' (I was eating, but I've decided to stop or I'm full).\n\nThe 了 here signals the change of state, not completion. Without 了, 我不吃 simply means 'I don't eat' as a general statement. With 了, it means 'I'm stopping now' or 'I won't anymore.'\n\nThis pattern is essential for expressing decisions, changes of mind, and situations that have shifted.",
    tips: [
      "不…了 = change from before. 我不吃了 = I was eating but now I'm stopping.",
      "Without 了, it's just a general negation: 我不吃 = I don't eat (in general).",
      "Use it for decisions: 我不去了 = I've decided not to go (changed my mind).",
    ],
    comparisons: [
      "不吃 (don't eat — general) vs 不吃了 (not eating anymore — change of state).",
    ],
  },

  // === questions ===
  {
    id: 14,
    title: "Yes/no questions with 吗",
    pattern: "Statement + 吗？",
    explanation: "Add 吗 (ma) to the end of any statement to turn it into a yes/no question.",
    examples: [
      { hanzi: "你是老师吗？", pinyin: "nǐ shì lǎoshī ma?", english: "Are you a teacher?" },
      { hanzi: "你喜欢中国菜吗？", pinyin: "nǐ xǐhuān Zhōngguó cài ma?", english: "Do you like Chinese food?" },
      { hanzi: "他来了吗？", pinyin: "tā lái le ma?", english: "Has he come?" },
    ],
    category: "questions",
    detailedExplanation: "The simplest way to form a yes/no question in Chinese is to add 吗 (ma) to the end of a statement. The word order stays exactly the same — you don't rearrange anything like you do in English ('You are a teacher' → 'Are you a teacher?').\n\nThis is one of the biggest simplifications for learners: take any sentence, add 吗, and it's now a question. 他来了 (He came) → 他来了吗？ (Has he come?). The neutral tone on 吗 is important — it's always light and unstressed.\n\nTo answer, repeat the verb for yes (是 / 有 / 去) or negate it for no (不是 / 没有 / 不去). Don't say 是 as a universal 'yes' — match the verb from the question.",
    tips: [
      "Just add 吗 to the end of any statement — no word order change needed.",
      "Answer by repeating the verb (yes) or negating it (no), not with a universal 'yes/no' word.",
      "Don't use 吗 with A-not-A questions (你去不去?) — they already ask yes/no.",
    ],
    comparisons: [
      "吗 questions (neutral) vs A-not-A questions (你去不去? — slightly more direct).",
    ],
  },
  {
    id: 15,
    title: "Asking 'what' with 什么",
    pattern: "Subject + Verb + 什么 (+ Noun)?",
    explanation: "什么 (shénme) means 'what'. It goes in the same position as the answer would.",
    examples: [
      { hanzi: "你叫什么名字？", pinyin: "nǐ jiào shénme míngzì?", english: "What is your name?" },
      { hanzi: "你想吃什么？", pinyin: "nǐ xiǎng chī shénme?", english: "What do you want to eat?" },
      { hanzi: "这是什么？", pinyin: "zhè shì shénme?", english: "What is this?" },
    ],
    category: "questions",
    detailedExplanation: "什么 (shénme) is the most common question word in Chinese. The key difference from English: the question word stays IN PLACE — it sits where the answer would go. In English, 'what' moves to the front ('What did you eat?'), but in Chinese the structure is 你吃什么？ (You eat what?).\n\nThis 'in-place' rule applies to ALL Chinese question words (谁, 哪儿, 几, etc.). Master it with 什么 and the rest follow the same pattern.\n\n什么 can also modify nouns: 什么书 (what book), 什么颜色 (what color), 什么时候 (what time = when).",
    tips: [
      "什么 stays in the position where the answer would go — don't move it to the front.",
      "什么 + noun = 'what kind of': 什么书 = what book, 什么颜色 = what color.",
      "什么 can express surprise: 什么？！ = What?! (rhetorical disbelief).",
    ],
    comparisons: [
      "什么 (what — general) vs 哪个 (which — choosing from a specific set).",
    ],
  },
  {
    id: 16,
    title: "Asking 'who' with 谁",
    pattern: "Subject + 是 + 谁？ / 谁 + Verb?",
    explanation: "谁 (shéi) means 'who'. It replaces the person in the sentence.",
    examples: [
      { hanzi: "他是谁？", pinyin: "tā shì shéi?", english: "Who is he?" },
      { hanzi: "谁来了？", pinyin: "shéi lái le?", english: "Who came?" },
    ],
    category: "questions",
    detailedExplanation: "谁 (shéi) means 'who' and follows the same in-place rule as 什么. It sits exactly where the person's name would go in the answer. 他是谁？ (He is who?) → 他是我的老师 (He is my teacher).\n\n谁 can be either the subject or object of a sentence. As subject: 谁来了？ (Who came?). As object: 你找谁？ (Who are you looking for?). No word order change needed in either case.\n\nNote: 谁 is sometimes pronounced 'shuí' in more formal contexts, but 'shéi' is the standard spoken pronunciation.",
    tips: [
      "谁 replaces the person — put it where the name would go in the answer.",
      "Works as subject (谁来了?) or object (你找谁?) with no word order change.",
      "谁的 = whose: 这是谁的书？ = Whose book is this?",
    ],
    comparisons: [
      "谁 (who — asks about identity) vs 哪个人 (which person — choosing from a group).",
    ],
  },
  {
    id: 17,
    title: "Asking 'where' with 哪儿/哪里",
    pattern: "Subject + 在 + 哪儿/哪里？",
    explanation: "哪儿 (nǎr) or 哪里 (nǎlǐ) means 'where'.",
    examples: [
      { hanzi: "你住在哪儿？", pinyin: "nǐ zhù zài nǎr?", english: "Where do you live?" },
      { hanzi: "医院在哪里？", pinyin: "yīyuàn zài nǎlǐ?", english: "Where is the hospital?" },
    ],
    category: "questions",
    detailedExplanation: "哪儿 (nǎr) and 哪里 (nǎlǐ) both mean 'where'. 哪儿 is more common in northern China (especially Beijing), while 哪里 is preferred in the south. Both are correct and interchangeable in most contexts.\n\nThe usual pattern is 在哪儿/哪里 (at where). Like other question words, it stays in place: 你在哪儿？ (You are at where?) rather than moving to the front.\n\n哪里 also has a polite usage: when someone compliments you, responding with 哪里哪里 is a humble way to deflect the praise. This is a cultural idiom, not a literal 'where where'.",
    tips: [
      "哪儿 (northern) = 哪里 (southern). Both correct, use whichever you prefer.",
      "Pattern: Subject + 在 + 哪儿: 你住在哪儿？ = Where do you live?",
      "哪里哪里 = polite deflection of compliments (a cultural formula).",
    ],
    comparisons: [
      "哪儿/哪里 (where — asking location) vs 哪个 (which one — asking selection).",
    ],
  },
  {
    id: 18,
    title: "Asking 'when' with 什么时候",
    pattern: "Subject + 什么时候 + Verb?",
    explanation: "什么时候 (shénme shíhòu) means 'when'.",
    examples: [
      { hanzi: "你什么时候来？", pinyin: "nǐ shénme shíhòu lái?", english: "When are you coming?" },
      { hanzi: "我们什么时候吃饭？", pinyin: "wǒmen shénme shíhòu chīfàn?", english: "When do we eat?" },
    ],
    category: "questions",
    detailedExplanation: "什么时候 (shénme shíhòu) literally means 'what time' and is used to ask 'when'. It usually goes BEFORE the verb in Chinese, unlike English where 'when' starts the sentence.\n\nThe word order is: Subject + 什么时候 + Verb. 你什么时候来？ = You when come? (When are you coming?). This position — between subject and verb — is where time expressions naturally sit in Chinese.\n\nFor more specific time questions, use 几点 (what time/hour) or 几月几号 (what month and date). 什么时候 is the broadest 'when' and works for any timeframe.",
    tips: [
      "什么时候 goes BEFORE the verb: 你什么时候走？ = When are you leaving?",
      "It works for any timeframe — past, present, or future.",
      "For specific times: 几点 (clock time), 几号 (date), 星期几 (day of week).",
    ],
    comparisons: [
      "什么时候 (when — broad) vs 几点 (what time — specific hour/minute).",
    ],
  },
  {
    id: 19,
    title: "Asking 'how' with 怎么",
    pattern: "Subject + 怎么 + Verb (+ Object)?",
    explanation: "怎么 (zěnme) means 'how' or asks about the method of doing something.",
    examples: [
      { hanzi: "这个字怎么写？", pinyin: "zhège zì zěnme xiě?", english: "How do you write this character?" },
      { hanzi: "怎么去火车站？", pinyin: "zěnme qù huǒchēzhàn?", english: "How do you get to the train station?" },
    ],
    category: "questions",
    detailedExplanation: "怎么 (zěnme) has two main uses: asking HOW (method) and expressing surprise/disbelief.\n\nAsking method: 怎么去？ (How do you go there?), 这个字怎么写？ (How do you write this character?). It goes before the verb.\n\nExpressing surprise: 你怎么来了？ (How come you're here? / Why are you here?). In this usage, 怎么 is closer to 'how come' — it carries surprise or mild complaint, unlike 为什么 which is a neutral 'why'.",
    tips: [
      "怎么 + verb = how (method): 怎么做 = how to do it.",
      "怎么 can also mean 'how come' (surprise): 你怎么知道？ = How did you know?!",
      "For 'how is it' (opinions), use 怎么样 instead: 这个怎么样？ = How is this?",
    ],
    comparisons: [
      "怎么 (how — method/surprise) vs 怎么样 (how — quality/opinion) vs 为什么 (why — neutral reason).",
    ],
  },
  {
    id: 20,
    title: "Asking 'why' with 为什么",
    pattern: "Subject + 为什么 + Predicate?",
    explanation: "为什么 (wèishénme) means 'why'.",
    examples: [
      { hanzi: "你为什么不高兴？", pinyin: "nǐ wèishénme bù gāoxìng?", english: "Why are you unhappy?" },
      { hanzi: "他为什么没来？", pinyin: "tā wèishénme méi lái?", english: "Why didn't he come?" },
    ],
    category: "questions",
    detailedExplanation: "为什么 (wèishénme) asks 'why' and is one of the few question words that can go either before or after the subject. 你为什么不来？ and 为什么你不来？ are both grammatically correct.\n\nTo answer a 为什么 question, use 因为 (yīnwèi, 'because'). The full pattern is 因为...所以... (because...therefore...), though in casual speech you often just use 因为.\n\n为什么 is a neutral, genuine question about reasons. For surprised 'why/how come', 怎么 is more natural.",
    tips: [
      "为什么 can go before or after the subject: 为什么你走？ = 你为什么走？",
      "Answer with 因为: 因为我累了 = Because I'm tired.",
      "For surprised/annoyed 'why', use 怎么 instead: 你怎么又迟到了？",
    ],
    comparisons: [
      "为什么 (why — neutral) vs 怎么 (how come — surprised/emotional).",
    ],
  },
  {
    id: 21,
    title: "Asking 'which' with 哪个",
    pattern: "Subject + Verb + 哪个 (+ Noun)?",
    explanation: "哪个 (nǎ ge) means 'which one'.",
    examples: [
      { hanzi: "你喜欢哪个？", pinyin: "nǐ xǐhuān nǎ ge?", english: "Which one do you like?" },
      { hanzi: "哪个是你的？", pinyin: "nǎ ge shì nǐ de?", english: "Which one is yours?" },
    ],
    category: "questions",
    detailedExplanation: "哪个 (nǎ ge) means 'which' or 'which one' and is used when choosing from a specific set. Unlike 什么 (what — open-ended), 哪个 implies there are defined options.\n\nThe measure word 个 can be replaced with the appropriate one for the noun: 哪本书 (which book), 哪个人 (which person), 哪件衣服 (which piece of clothing).\n\n哪 alone (without a measure word) combines with other words too: 哪里 (where), 哪些 (which ones — plural), 哪天 (which day).",
    tips: [
      "哪个 = which one (from a set). 什么 = what (open-ended).",
      "Replace 个 with the right measure word: 哪本书, 哪件事, 哪位老师.",
      "哪些 is the plural: 你喜欢哪些？ = Which ones do you like?",
    ],
    comparisons: [
      "哪个 (which — selecting from options) vs 什么 (what — open-ended question).",
    ],
  },
  {
    id: 22,
    title: "Asking 'how many' with 几",
    pattern: "Subject + Verb + 几 + Measure Word + Noun?",
    explanation: "几 (jǐ) asks 'how many' when you expect a small number (under 10).",
    examples: [
      { hanzi: "你有几个孩子？", pinyin: "nǐ yǒu jǐ gè háizi?", english: "How many children do you have?" },
      { hanzi: "现在几点？", pinyin: "xiànzài jǐ diǎn?", english: "What time is it now?" },
    ],
    category: "questions",
    detailedExplanation: "几 (jǐ) asks 'how many' when you expect a SMALL number (usually under 10). It always requires a measure word after it: 几个人 (how many people), 几本书 (how many books).\n\n几 is also essential for asking time: 几点 (what time), 几月 (what month), 几号 (what date), 星期几 (what day of the week). These are among the most commonly used question patterns in daily Chinese.\n\nImportant rule: 几 MUST have a measure word. 多少 does not require one (though it can take one).",
    tips: [
      "几 = small number expected (under 10). Always needs a measure word.",
      "Time patterns: 几点 (time), 几月 (month), 几号 (date), 星期几 (day).",
      "你家有几口人？ is a classic way to ask about family size.",
    ],
    comparisons: [
      "几 (how many — small, needs measure word) vs 多少 (how many/much — any amount, measure word optional).",
    ],
  },
  {
    id: 23,
    title: "Asking 'how many/much' with 多少",
    pattern: "Subject + Verb + 多少 + (Measure Word) + Noun?",
    explanation: "多少 (duōshǎo) asks 'how many/much' with no upper limit implied.",
    examples: [
      { hanzi: "这个多少钱？", pinyin: "zhège duōshǎo qián?", english: "How much is this?" },
      { hanzi: "你的电话号码是多少？", pinyin: "nǐ de diànhuà hàomǎ shì duōshǎo?", english: "What is your phone number?" },
    ],
    category: "questions",
    detailedExplanation: "多少 (duōshǎo) asks 'how many' or 'how much' with no limit on the expected number. Use it for large or unknown quantities. The measure word is optional — 多少人 and 多少个人 are both fine.\n\nThe most common use is asking prices: 多少钱？ (How much money?). This is one of the first phrases every Chinese learner should know.\n\n多少 can also be used for phone numbers, room numbers, and other numeric identifiers: 你的电话号码是多少？ (What's your phone number?).",
    tips: [
      "多少 for large/unknown quantities, 几 for small ones (under 10).",
      "多少钱？ = How much? (the essential shopping phrase).",
      "Measure word is optional with 多少 but required with 几.",
    ],
    comparisons: [
      "多少 (any quantity, measure word optional) vs 几 (small quantity, measure word required).",
    ],
  },
  {
    id: 24,
    title: "Asking 'how' about quality with 怎么样",
    pattern: "Subject + 怎么样？",
    explanation: "怎么样 (zěnmeyàng) asks 'how is it?' — for opinions, conditions, or suggestions.",
    examples: [
      { hanzi: "天气怎么样？", pinyin: "tiānqì zěnmeyàng?", english: "How's the weather?" },
      { hanzi: "这本书怎么样？", pinyin: "zhè běn shū zěnmeyàng?", english: "How is this book?" },
    ],
    category: "questions",
    detailedExplanation: "怎么样 (zěnmeyàng) asks for opinions, evaluations, or conditions — 'how is it?' or 'what do you think?'. It typically comes at the end of a phrase or sentence.\n\nThree main uses: asking opinions (这个怎么样？ — How about this?), asking about conditions (你身体怎么样？ — How's your health?), and making suggestions (我们去吃饭怎么样？ — How about we go eat?).\n\nDon't confuse with 怎么 (how — method/surprise). 怎么样 asks about quality or opinions; 怎么 asks about method.",
    tips: [
      "怎么样 asks for opinions: 这部电影怎么样？ = How was the movie?",
      "Use it for suggestions: 明天怎么样？ = How about tomorrow?",
      "Position: usually at the end of the sentence or after the topic.",
    ],
    comparisons: [
      "怎么样 (how is it — opinion/quality) vs 怎么 (how — method) vs 什么样 (what kind — description).",
    ],
  },
  {
    id: 25,
    title: "Asking about degree with 多",
    pattern: "Subject + 多 + Adjective?",
    explanation: "多 (duō) before an adjective asks about degree — how big, how old, etc.",
    examples: [
      { hanzi: "你多大？", pinyin: "nǐ duō dà?", english: "How old are you?" },
      { hanzi: "那个多远？", pinyin: "nàge duō yuǎn?", english: "How far is that?" },
    ],
    category: "questions",
    detailedExplanation: "多 (duō) before an adjective asks about measurable degree — how big, how far, how old, how tall, etc. This pattern is specifically for adjectives that describe measurable quantities.\n\nCommon combinations: 多大 (how old / how big), 多远 (how far), 多长 (how long), 多高 (how tall), 多重 (how heavy). These are essential for everyday conversations.\n\nNote: 多大 has two meanings depending on context — it can ask about age (你多大？ = How old are you?) or size (这个房间多大？ = How big is this room?).",
    tips: [
      "多 + adjective = asking about degree: 多高 (how tall), 多远 (how far).",
      "多大 can mean 'how old' OR 'how big' — context decides.",
      "Only works with measurable adjectives, not opinions (don't say 多好看).",
    ],
    comparisons: [
      "多 + adjective (measurable degree: 多高) vs 怎么样 (opinion/quality: 怎么样?).",
    ],
  },
  {
    id: 26,
    title: "Questions with 了吗",
    pattern: "Subject + Verb + Object + 了吗？",
    explanation: "了吗 asks whether an expected action has been completed yet.",
    examples: [
      { hanzi: "你吃饭了吗？", pinyin: "nǐ chīfàn le ma?", english: "Have you eaten?" },
      { hanzi: "他走了吗？", pinyin: "tā zǒu le ma?", english: "Has he left?" },
    ],
    category: "questions",
    detailedExplanation: "了吗 combines the completion marker 了 with the question particle 吗 to ask whether something has happened yet. It's like asking 'Have you...?' or 'Did you...?' in English.\n\n你吃饭了吗？ is one of the most common greetings in Chinese culture — literally 'Have you eaten?' but functionally similar to 'How are you?'. Don't be surprised if people ask you this!\n\nThe nuance: 了吗 implies you expect or hope the action has happened. It's not a neutral question — it carries an expectation.",
    tips: [
      "了吗 asks about completed actions: 你做完了吗？ = Have you finished?",
      "你吃饭了吗？ is a common greeting, not just about food.",
      "To answer: 吃了 (yes, I ate) or 还没吃 (not yet).",
    ],
    comparisons: [
      "Verb + 了吗 (has it happened?) vs Verb + 了没有 (same meaning, slightly more casual).",
    ],
  },

  // === adverbs ===
  {
    id: 27,
    title: "'Also' with 也",
    pattern: "Subject + 也 + Verb/Adjective",
    explanation: "也 (yě) means 'also' or 'too'. It goes before the verb, never at the end.",
    examples: [
      { hanzi: "我也是学生。", pinyin: "wǒ yě shì xuéshēng.", english: "I am also a student." },
      { hanzi: "他也喜欢看电影。", pinyin: "tā yě xǐhuān kàn diànyǐng.", english: "He also likes watching movies." },
    ],
    category: "adverbs",
    detailedExplanation: "也 (yě) means 'also' or 'too' and MUST go before the verb — never at the end of the sentence like English 'too'. Word order: Subject + 也 + Verb. 我也去 (I also go), never 我去也.\n\nWhen used with 都, 也 comes first: 他们也都来了 (They also all came). The order is always 也 before 都.\n\n也 can also be used in negative sentences for emphasis: 我也不知道 (I also don't know / I don't know either).",
    tips: [
      "也 ALWAYS goes before the verb: 我也喜欢, never 我喜欢也.",
      "With 都: 也 comes first: 我们也都去了 (We also all went).",
      "Negative: 我也不去 = I'm not going either.",
    ],
    comparisons: [
      "也 (also — before verb) vs English 'too' (end of sentence). Position is key.",
    ],
  },
  {
    id: 28,
    title: "'All' with 都",
    pattern: "Subject + 都 + Verb Phrase",
    explanation: "都 (dōu) means 'all' or 'both'. It goes before the verb and refers back to the subject.",
    examples: [
      { hanzi: "我们都是中国人。", pinyin: "wǒmen dōu shì Zhōngguó rén.", english: "We are all Chinese." },
      { hanzi: "他们都来了。", pinyin: "tāmen dōu lái le.", english: "They all came." },
      { hanzi: "这些我都喜欢。", pinyin: "zhèxiē wǒ dōu xǐhuān.", english: "I like all of these." },
    ],
    category: "adverbs",
    detailedExplanation: "都 (dōu) means 'all' or 'both' and goes before the verb, referring back to the plural subject. 我们都去 (We all go). The crucial rule: 都 summarizes what comes BEFORE it, not after.\n\nThis means the plural element must come before 都: 这些我都喜欢 (These, I all like = I like all of these). If you said 我都喜欢这些, it would sound wrong because 都 has nothing before it to summarize.\n\n都 can also mean 'even' or 'already' in certain patterns: 都八点了 (It's already 8 o'clock!), 连他都知道 (Even he knows).",
    tips: [
      "都 summarizes what comes BEFORE it, not after. The plural goes first.",
      "With 也: order is 也都 (我们也都去了 = We also all went).",
      "都 + time = 'already': 都十点了！ = It's already 10!",
    ],
    comparisons: [
      "都 (all — summarizes what's before it) vs 每 (every — goes before the noun: 每个人).",
    ],
  },
  {
    id: 29,
    title: "'Excessively' with 太…了",
    pattern: "太 + Adjective + 了",
    explanation: "太…了 (tài…le) means 'too' or 'so' — can express excess or strong emotion.",
    examples: [
      { hanzi: "太好了！", pinyin: "tài hǎo le!", english: "That's great!" },
      { hanzi: "这个太贵了。", pinyin: "zhège tài guì le.", english: "This is too expensive." },
      { hanzi: "今天太热了。", pinyin: "jīntiān tài rè le.", english: "Today is too hot." },
    ],
    category: "adverbs",
    detailedExplanation: "太…了 (tài…le) has two uses depending on context: 'too much' (negative excess) and 'so / really' (positive emphasis).\n\nNegative: 太贵了 (too expensive), 太难了 (too hard). The 了 emphasizes the excess.\n\nPositive: 太好了！ (That's great!), 太棒了！ (Awesome!). Here 太…了 is used as enthusiastic emphasis, not complaint. Context and tone make the difference.\n\nWithout 了, 太 alone means 'too': 不太好 (not too good). The 了 adds the emotional punch.",
    tips: [
      "太 + adj + 了 = emotional emphasis. Context decides if it's complaint or praise.",
      "太好了！ = Great! (positive). 太贵了！ = Too expensive! (negative).",
      "Without 了: 不太 = not very (softer, see point 12).",
    ],
    comparisons: [
      "太…了 (strong — too/so) vs 很 (moderate — very) vs 有点儿 (mild negative — a little).",
    ],
  },
  {
    id: 30,
    title: "'A little too' with 有点儿",
    pattern: "Subject + 有(一)点(儿) + Adjective",
    explanation: "有点儿 (yǒudiǎnr) means 'a little' and usually implies something undesirable.",
    examples: [
      { hanzi: "我有点儿累。", pinyin: "wǒ yǒudiǎnr lèi.", english: "I'm a little tired." },
      { hanzi: "今天有点儿冷。", pinyin: "jīntiān yǒudiǎnr lěng.", english: "Today is a little cold." },
    ],
    category: "adverbs",
    detailedExplanation: "有点儿 (yǒudiǎnr) means 'a little' and almost always describes something NEGATIVE or undesirable. 我有点儿累 (I'm a little tired), 有点儿贵 (a little expensive). It implies mild dissatisfaction.\n\nDon't confuse with 一点儿 (yìdiǎnr), which is a different pattern. 有点儿 goes BEFORE the adjective (有点儿冷 — a little cold). 一点儿 goes AFTER for comparison (好一点儿 — a little better).\n\nIn northern Chinese, the 儿 (er) sound is added. In southern Chinese, people say 有点 without the 儿. Both are correct.",
    tips: [
      "有点儿 usually describes something negative: 有点儿难, 有点儿贵, 有点儿累.",
      "有点儿 goes BEFORE adjective. 一点儿 goes AFTER for comparisons.",
      "Northern: 有点儿. Southern: 有点. Same meaning.",
    ],
    comparisons: [
      "有点儿 (a little — negative, before adj) vs 一点儿 (a bit — comparison, after adj).",
    ],
  },
  {
    id: 31,
    title: "'Again' in the future with 再",
    pattern: "Subject + 再 + Verb Phrase",
    explanation: "再 (zài) means 'again' for future or hypothetical actions.",
    examples: [
      { hanzi: "再见！", pinyin: "zàijiàn!", english: "Goodbye! (See you again)" },
      { hanzi: "请再说一次。", pinyin: "qǐng zài shuō yí cì.", english: "Please say it again." },
    ],
    category: "adverbs",
    detailedExplanation: "再 (zài) means 'again' but only for FUTURE or HYPOTHETICAL actions — things that haven't happened yet. 请再说一次 (Please say it again — in the future). 再见 literally means 'again meet' — see you again.\n\nThis is different from 又 (yòu), which means 'again' for things that ALREADY happened. 他又迟到了 (He was late again — it already happened).\n\nThis 再/又 distinction doesn't exist in English and is a common source of errors for learners. Think: 再 = will do again, 又 = did again.",
    tips: [
      "再 = again (future). 又 = again (past). This is the key distinction.",
      "再见 = see you again (future). A perfect example of 再 usage.",
      "请再说一次 = Please say it again — one of the most useful classroom phrases.",
    ],
    comparisons: [
      "再 (again — future/not yet) vs 又 (again — already happened).",
    ],
  },
  {
    id: 32,
    title: "'Still' / continuing with 还",
    pattern: "Subject + 还 + Verb Phrase",
    explanation: "还 (hái) means 'still', indicating an action is continuing or something additional.",
    examples: [
      { hanzi: "他还在睡觉。", pinyin: "tā hái zài shuìjiào.", english: "He is still sleeping." },
      { hanzi: "你还要什么？", pinyin: "nǐ hái yào shénme?", english: "What else do you want?" },
    ],
    category: "adverbs",
    detailedExplanation: "还 (hái) has two main meanings: 'still' (continuing action) and 'also/in addition'.\n\nStill: 他还在睡觉 (He's still sleeping). The action hasn't stopped yet.\n\nAlso/in addition: 你还要什么？ (What else do you want?). Here 还 adds more items to a list.\n\n还 can also mean 'even more' in comparisons: 他比我还高 (He's even taller than me). And 还没 means 'not yet': 我还没吃 (I haven't eaten yet).",
    tips: [
      "还在 + verb = still doing: 还在工作 = still working.",
      "还没 = not yet: 还没来 = hasn't come yet.",
      "还要 = also want / still want: 你还要什么？ = What else?",
    ],
    comparisons: [
      "还 (still/also) vs 再 (again — future) vs 又 (again — past).",
    ],
  },
  {
    id: 33,
    title: "Moderating with 还 + positive adjective",
    pattern: "Subject + 还 + 好/可以/不错",
    explanation: "还 before a positive adjective means 'passable' or 'not bad' — a lukewarm positive.",
    examples: [
      { hanzi: "味道还不错。", pinyin: "wèidào hái búcuò.", english: "The taste is pretty good." },
      { hanzi: "还可以吧。", pinyin: "hái kěyǐ ba.", english: "It's okay, I guess." },
    ],
    category: "adverbs",
    detailedExplanation: "还 before a positive adjective like 好, 可以, or 不错 creates a lukewarm positive — 'it's okay' or 'not bad'. It's less enthusiastic than a direct compliment.\n\n还不错 (not bad), 还可以 (it's alright), 还好 (it's okay). These are very common in daily speech for when something is passable but not impressive.\n\nCultural note: Chinese communication often uses understatement. 还不错 from a Chinese speaker might actually mean 'quite good' — they're being modest. Context and tone matter.",
    tips: [
      "还不错 = not bad (lukewarm positive). Very common in casual speech.",
      "还好 can mean 'fortunately' too: 还好你来了 = Luckily you came.",
      "还可以 = it's okay / passable — often used to avoid sounding too negative.",
    ],
    comparisons: [
      "还不错 (not bad — moderate) vs 很好 (very good — enthusiastic) vs 不太好 (not great — negative).",
    ],
  },

  // === verbs ===
  {
    id: 34,
    title: "Location with 在 (to be at)",
    pattern: "Subject + 在 + Place",
    explanation: "在 (zài) as a verb means 'to be at/in a place'.",
    examples: [
      { hanzi: "他在家。", pinyin: "tā zài jiā.", english: "He is at home." },
      { hanzi: "我的手机在桌子上。", pinyin: "wǒ de shǒujī zài zhuōzi shàng.", english: "My phone is on the table." },
    ],
    category: "verbs",
    detailedExplanation: "在 (zài) as a main verb means 'to be at/in a place'. Unlike English, no extra verb is needed — 在 alone expresses location. 他在家 (He is at home) — no 'is' needed.\n\n在 is also used with position words like 上 (on), 下 (under), 里 (inside), 旁边 (beside): 书在桌子上 (The book is on the table). These position words come AFTER the noun in Chinese, opposite to English.\n\nDon't confuse 在 as a verb (to be at) with 在 as a preposition (at/in, used before another verb — see next point).",
    tips: [
      "在 alone = to be at a place. No extra 'is' needed: 他在家 = He's at home.",
      "Position words go AFTER the noun: 桌子上 (on the table), not 上桌子.",
      "Common position words: 上 (on), 下 (under), 里 (in), 旁边 (beside), 前面 (in front).",
    ],
    comparisons: [
      "在 as verb (他在家 = He is at home) vs 在 as preposition (他在家吃饭 = He eats at home).",
    ],
  },
  {
    id: 35,
    title: "Action at a location with 在",
    pattern: "Subject + 在 + Place + Verb + Object",
    explanation: "在 before a place word indicates where the action happens.",
    examples: [
      { hanzi: "我在学校学习。", pinyin: "wǒ zài xuéxiào xuéxí.", english: "I study at school." },
      { hanzi: "他们在饭店吃饭。", pinyin: "tāmen zài fàndiàn chīfàn.", english: "They eat at the restaurant." },
    ],
    category: "verbs",
    detailedExplanation: "When 在 is used as a preposition (not the main verb), it indicates WHERE an action takes place. The structure is: Subject + 在 + Place + Verb. The location comes BEFORE the verb, unlike English.\n\n我在学校学习 (I study at school) — '在学校' tells WHERE the studying happens. Compare with English where 'at school' comes after the verb.\n\nThis is a fundamental word order difference. In Chinese, location (where), time (when), and manner (how) all go BEFORE the verb. Think of it as setting the scene before describing the action.",
    tips: [
      "Location goes BEFORE the verb: 在学校学习, not 学习在学校.",
      "This applies to all location phrases: 在家做饭 = cook at home.",
      "Chinese word order: Time + Location + Verb. Scene first, action second.",
    ],
    comparisons: [
      "在 + place + verb (action at location) vs 在 + place (being at location, point 34).",
    ],
  },
  {
    id: 36,
    title: "'Want to' with 想",
    pattern: "Subject + 想 + Verb (+ Object)",
    explanation: "想 (xiǎng) means 'would like to' or 'want to'.",
    examples: [
      { hanzi: "我想喝茶。", pinyin: "wǒ xiǎng hē chá.", english: "I want to drink tea." },
      { hanzi: "你想去哪儿？", pinyin: "nǐ xiǎng qù nǎr?", english: "Where do you want to go?" },
      { hanzi: "我不想工作。", pinyin: "wǒ bù xiǎng gōngzuò.", english: "I don't want to work." },
    ],
    category: "verbs",
    detailedExplanation: "想 (xiǎng) means 'want to' or 'would like to' and is one of the most useful auxiliary verbs. It goes before the main verb: 我想吃 (I want to eat).\n\n想 is also used to mean 'to think' or 'to miss': 我想你 (I miss you), 我想一想 (Let me think about it). The meaning depends on what follows.\n\nTo negate: 不想 = don't want to. 我不想去 (I don't want to go). It's a polite, direct way to decline.",
    tips: [
      "想 + verb = want to. 想 + person = miss. 想 + 一想 = think about.",
      "Negate with 不想: 我不想吃 = I don't want to eat.",
      "想 is softer than 要 (which is more insistent/demanding).",
    ],
    comparisons: [
      "想 (would like to — softer) vs 要 (want/must — more insistent) vs 需要 (need — necessity).",
    ],
  },
  {
    id: 37,
    title: "Ability with 能",
    pattern: "Subject + 能 + Verb + Object",
    explanation: "能 (néng) expresses ability or possibility — 'can' due to circumstances.",
    examples: [
      { hanzi: "你能来吗？", pinyin: "nǐ néng lái ma?", english: "Can you come?" },
      { hanzi: "我今天不能去。", pinyin: "wǒ jīntiān bù néng qù.", english: "I can't go today." },
    ],
    category: "verbs",
    detailedExplanation: "能 (néng) means 'can' based on CIRCUMSTANCES or CONDITIONS — you have the ability or permission due to the situation. 你能来吗？ (Can you come? — are you available/able to?).\n\n能 is about external factors: health, permission, time, physical capability. 我今天不能去 (I can't go today — I'm busy). 他病了，不能工作 (He's sick, he can't work).\n\nIn questions, 能 is often used for polite requests: 你能帮我吗？ (Can you help me?). It's slightly more formal than 可以.",
    tips: [
      "能 = can (circumstances allow it). Not about learned skills — that's 会.",
      "能不能 is a common A-not-A question form: 你能不能来？ = Can you come?",
      "Used for polite requests: 你能帮我吗？ = Could you help me?",
    ],
    comparisons: [
      "能 (can — circumstances) vs 会 (can — learned skill) vs 可以 (can — permission).",
    ],
  },
  {
    id: 38,
    title: "Learned skill with 会",
    pattern: "Subject + 会 + Verb + Object",
    explanation: "会 (huì) expresses 'can' as a learned ability — something you know how to do.",
    examples: [
      { hanzi: "你会说中文吗？", pinyin: "nǐ huì shuō Zhōngwén ma?", english: "Can you speak Chinese?" },
      { hanzi: "他会做饭。", pinyin: "tā huì zuòfàn.", english: "He can cook." },
      { hanzi: "我不会开车。", pinyin: "wǒ bú huì kāichē.", english: "I can't drive." },
    ],
    category: "verbs",
    detailedExplanation: "会 (huì) means 'can' as a LEARNED SKILL — something you studied or practiced to be able to do. 你会说中文吗？ (Can you speak Chinese? — have you learned it?).\n\nThe distinction between 会 and 能 is crucial: 会开车 (know how to drive — learned skill) vs 能开车 (can drive — circumstances allow, e.g., not drunk). A person can 会开车 but 不能开车 if their license is suspended.\n\n会 also means 'will' for predictions: 明天会下雨 (It will rain tomorrow). Context makes the meaning clear.",
    tips: [
      "会 = learned ability. Ask 你会...吗？ about skills: swimming, cooking, languages.",
      "会 also means 'will' (prediction): 他会来的 = He will come.",
      "不会 can mean 'can't' (no skill) or 'won't' (prediction): context decides.",
    ],
    comparisons: [
      "会 (can — learned) vs 能 (can — circumstances) vs 可以 (can — permission/allowed).",
    ],
  },
  {
    id: 39,
    title: "Using 对 with verbs",
    pattern: "Subject + 对 + Person + Verb",
    explanation: "对 (duì) means 'toward' or 'to' someone — indicates the target of an action.",
    examples: [
      { hanzi: "他对我很好。", pinyin: "tā duì wǒ hěn hǎo.", english: "He is very good to me." },
      { hanzi: "老师对学生说。", pinyin: "lǎoshī duì xuéshēng shuō.", english: "The teacher says to the students." },
    ],
    category: "verbs",
    detailedExplanation: "对 (duì) means 'toward' or 'to' and indicates the target or direction of an action or attitude. 他对我很好 (He is very good TO me) — 对 marks 'me' as the recipient of the goodness.\n\nCommon patterns: 对...好 (good to), 对...说 (say to), 对...有兴趣 (interested in), 对...不好 (bad to). The person or thing after 对 is always the target.\n\n对 also means 'correct/right' as an adjective: 对！ (Correct!), 你说得对 (What you said is right).",
    tips: [
      "对 + person = toward/to that person. Marks the target of the action.",
      "对 as adjective = correct: 对！= Right! 不对 = Wrong.",
      "对...感兴趣 = interested in: 我对中国文化感兴趣.",
    ],
    comparisons: [
      "对 (toward/to — target) vs 给 (to/for — recipient of giving) vs 跟 (with — companion).",
    ],
  },
  {
    id: 40,
    title: "Trying briefly with 一下",
    pattern: "Subject + Verb + 一下 + Object",
    explanation: "一下 (yíxià) softens a verb — 'a little bit' or 'briefly'.",
    examples: [
      { hanzi: "请等一下。", pinyin: "qǐng děng yíxià.", english: "Please wait a moment." },
      { hanzi: "我看一下。", pinyin: "wǒ kàn yíxià.", english: "Let me take a look." },
      { hanzi: "你试一下。", pinyin: "nǐ shì yíxià.", english: "Give it a try." },
    ],
    category: "verbs",
    detailedExplanation: "一下 (yíxià) after a verb makes the action sound brief, casual, or less demanding. 看一下 (take a quick look), 等一下 (wait a moment). It's like adding 'just' or 'a bit' in English.\n\nThis is a crucial softening tool in Chinese. Compare: 你看 (Look! — blunt command) vs 你看一下 (Take a look — casual, polite). Adding 一下 makes requests much more natural and friendly.\n\n一下 literally means 'one time' but in practice it just softens. Don't translate it literally — it's about tone, not counting.",
    tips: [
      "Verb + 一下 = do it briefly/casually. Essential for polite requests.",
      "请等一下 and 我看一下 are among the most useful daily phrases.",
      "It softens commands: 说一下 (say it briefly) is gentler than 说！(Say it!).",
    ],
    comparisons: [
      "Verb + 一下 (brief/casual) vs verb + 一点儿 (a little — degree/amount).",
    ],
  },
  {
    id: 41,
    title: "Completing with result complement 完",
    pattern: "Subject + Verb + 完 (+ Object) (+ 了)",
    explanation: "完 (wán) as a result complement means 'finish doing'.",
    examples: [
      { hanzi: "我吃完了。", pinyin: "wǒ chī wán le.", english: "I'm done eating." },
      { hanzi: "你看完这本书了吗？", pinyin: "nǐ kàn wán zhè běn shū le ma?", english: "Have you finished reading this book?" },
    ],
    category: "verbs",
    detailedExplanation: "完 (wán) after a verb creates a result complement meaning 'finish doing'. 吃完 (finish eating), 看完 (finish reading/watching), 做完 (finish doing). The action has been completed to its end.\n\nUsually paired with 了: 我吃完了 (I've finished eating). The 了 confirms the completion actually happened. Without 了, it can be used in plans: 吃完饭去散步 (After finishing eating, go for a walk).\n\nTo ask if someone has finished: Verb + 完 + 了吗？ 你看完了吗？ (Have you finished reading?). To say not yet: 还没看完 (Haven't finished yet).",
    tips: [
      "Verb + 完 = finish that action: 吃完, 看完, 做完, 写完.",
      "完了 = finished. 还没完 = not finished yet.",
      "Used to chain actions: 吃完饭以后去散步 = After eating, go for a walk.",
    ],
    comparisons: [
      "Verb + 完 (finish doing) vs verb + 好 (done properly/ready) vs verb + 到 (achieve/reach).",
    ],
  },
  {
    id: 42,
    title: "'Together' with 一起",
    pattern: "Subject + 一起 + Verb + Object",
    explanation: "一起 (yìqǐ) means 'together'.",
    examples: [
      { hanzi: "我们一起吃饭吧。", pinyin: "wǒmen yìqǐ chīfàn ba.", english: "Let's eat together." },
      { hanzi: "你想一起去吗？", pinyin: "nǐ xiǎng yìqǐ qù ma?", english: "Do you want to go together?" },
    ],
    category: "verbs",
    detailedExplanation: "一起 (yìqǐ) means 'together' and goes before the verb. 我们一起吃饭 (We eat together). It's one of the most natural ways to invite someone to do something.\n\nThe classic invitation formula: 我们一起 + verb + 吧。我们一起去吧 (Let's go together). Adding 吧 makes it a suggestion rather than a command.\n\n一起 always goes BEFORE the verb, between the subject and action. Don't put it after the verb like English 'together'.",
    tips: [
      "一起 goes BEFORE the verb: 一起去, 一起吃, 一起学习.",
      "Classic invitation: 我们一起...吧 = Let's... together.",
      "跟 + person + 一起 = together with someone: 跟我一起去 = Go with me.",
    ],
    comparisons: [
      "一起 (together — action) vs 一块儿 (together — same meaning, more colloquial/northern).",
    ],
  },

  // === aspect (tense markers) ===
  {
    id: 43,
    title: "Completed action with 了",
    pattern: "Subject + Verb + 了",
    explanation: "了 (le) after a verb marks that the action is completed.",
    examples: [
      { hanzi: "我买了一本书。", pinyin: "wǒ mǎi le yì běn shū.", english: "I bought a book." },
      { hanzi: "他走了。", pinyin: "tā zǒu le.", english: "He left." },
      { hanzi: "你吃了吗？", pinyin: "nǐ chī le ma?", english: "Have you eaten?" },
    ],
    category: "aspect",
    detailedExplanation: "了 (le) after a verb marks COMPLETED ACTION — something that has been done. 我买了一本书 (I bought a book — the buying is complete). This is NOT the same as past tense — 了 marks completion, not time.\n\nYou can use 了 for future completions too: 你吃了饭再走 (Eat first, then leave — after you've finished eating). It's about the action being done, not when.\n\nImportant: 了 goes right after the verb, before the object. With a specific quantity: 我买了三本书 (I bought three books). Without 了, you'd just be describing the action in general.",
    tips: [
      "了 = completed action, NOT past tense. Can describe future completion too.",
      "Position: verb + 了 + (quantity) + object: 买了两个苹果.",
      "没 replaces 了 for negation: 我没买 (I didn't buy), not 我没买了.",
    ],
    comparisons: [
      "Verb + 了 (completed action) vs sentence-final 了 (change of state — point 44).",
    ],
  },
  {
    id: 44,
    title: "New situation with 了",
    pattern: "New situation + 了",
    explanation: "了 at the end of a sentence signals a change of state — something is now different.",
    examples: [
      { hanzi: "下雨了。", pinyin: "xià yǔ le.", english: "It started raining." },
      { hanzi: "我饿了。", pinyin: "wǒ è le.", english: "I'm hungry (now)." },
      { hanzi: "春天来了。", pinyin: "chūntiān lái le.", english: "Spring has come." },
    ],
    category: "aspect",
    detailedExplanation: "Sentence-final 了 signals a CHANGE OF STATE — something is different now from before. 下雨了 (It started raining — it wasn't raining before). 我饿了 (I'm hungry now — I wasn't before).\n\nThis is different from verb-了 (completed action). Sentence-final 了 is about the present moment being different. 春天来了 (Spring has come — the season changed). 他长大了 (He's grown up — he was a child before).\n\nThese two 了 can appear together: 他吃了饭了 (He has eaten — action completed + current state). Learners often confuse them, but thinking 'completion vs. change' helps.",
    tips: [
      "Sentence-final 了 = things are different now. 下雨了 = It's raining (it wasn't before).",
      "Verb-了 = action done. Sentence-了 = state changed. They can coexist.",
      "我饿了 = I'm hungry NOW (change). 我吃了 = I ate (completion).",
    ],
    comparisons: [
      "Verb + 了 (action completed — point 43) vs sentence-final 了 (new situation/change of state).",
    ],
  },
  {
    id: 45,
    title: "Action in progress with 在",
    pattern: "Subject + (正)在 + Verb + Object",
    explanation: "在 or 正在 before a verb means the action is happening right now.",
    examples: [
      { hanzi: "他在看电视。", pinyin: "tā zài kàn diànshì.", english: "He is watching TV." },
      { hanzi: "我正在学中文。", pinyin: "wǒ zhèngzài xué Zhōngwén.", english: "I am studying Chinese (right now)." },
      { hanzi: "妈妈在做饭。", pinyin: "māma zài zuòfàn.", english: "Mom is cooking." },
    ],
    category: "aspect",
    detailedExplanation: "在 or 正在 before a verb marks an action IN PROGRESS right now — like English '-ing'. 他在看电视 (He is watching TV). 正在 is slightly more emphatic — 'right at this moment'.\n\nYou can also add 呢 at the end for extra emphasis: 他在看电视呢 (He's watching TV, you know). The full formal pattern is 正在...呢, but in daily speech 在...alone is the most common.\n\nTo negate: 没在 + verb. 他没在看电视 (He's not watching TV). Note: use 没, not 不, for negating ongoing actions.",
    tips: [
      "在 + verb = doing it now. 正在 = right now (emphatic). Both mean '-ing'.",
      "Add 呢 at the end for casual emphasis: 我在吃饭呢 = I'm eating!",
      "Negate with 没在: 没在睡觉 = not sleeping (right now).",
    ],
    comparisons: [
      "在 + verb (in progress now) vs verb + 着 (ongoing state — sitting, standing, wearing).",
    ],
  },

  // === particles ===
  {
    id: 46,
    title: "Softening with 吧",
    pattern: "Statement/Suggestion + 吧",
    explanation: "吧 (ba) softens a statement or makes a suggestion — 'let's' or 'I suppose'.",
    examples: [
      { hanzi: "我们走吧。", pinyin: "wǒmen zǒu ba.", english: "Let's go." },
      { hanzi: "好吧。", pinyin: "hǎo ba.", english: "Okay then." },
      { hanzi: "你是老师吧？", pinyin: "nǐ shì lǎoshī ba?", english: "You're a teacher, right?" },
    ],
    category: "particles",
    detailedExplanation: "吧 (ba) is a versatile sentence-final particle with three main uses: making suggestions (let's), softening statements, and seeking confirmation.\n\nSuggestions: 我们走吧 (Let's go), 吃饭吧 (Let's eat). This is the most common way to say 'let's' in Chinese.\n\nSoftening/reluctant agreement: 好吧 (Okay then — with some reluctance). The 吧 adds a sense of yielding or resignation.\n\nSeeking confirmation: 你是中国人吧？ (You're Chinese, right?). This is like a tag question — you're fairly sure and want confirmation.",
    tips: [
      "Verb + 吧 = let's: 走吧 (let's go), 吃吧 (let's eat).",
      "好吧 = okay then (reluctant agreement). Very common in conversation.",
      "Statement + 吧 = seeking confirmation: 你知道吧？ = You know, right?",
    ],
    comparisons: [
      "吧 (soft suggestion/confirmation) vs 吗 (genuine question) vs 呢 (what about/continued state).",
    ],
  },
  {
    id: 47,
    title: "'When' with 的时候",
    pattern: "Time/Verb + 的时候",
    explanation: "的时候 (de shíhòu) means 'when' or 'at the time of'.",
    examples: [
      { hanzi: "吃饭的时候不要说话。", pinyin: "chīfàn de shíhòu bú yào shuōhuà.", english: "Don't talk while eating." },
      { hanzi: "下雨的时候我在家。", pinyin: "xià yǔ de shíhòu wǒ zài jiā.", english: "When it rains, I stay home." },
    ],
    category: "particles",
    detailedExplanation: "的时候 (de shíhòu) means 'when' or 'while' and is placed AFTER the time reference or action clause. 吃饭的时候 (when eating / while eating). This is opposite to English where 'when' comes first.\n\nIt works with both specific times (小的时候 — when I was young) and actions (下雨的时候 — when it rains). The clause before 的时候 sets the time frame for the main clause.\n\nFor single-word time references (yesterday, tomorrow), you don't need 的时候 — just use the word directly. 的时候 is for longer time descriptions.",
    tips: [
      "Action/time + 的时候 = when: 吃饭的时候 = when eating.",
      "Goes AFTER the time clause, opposite to English 'when'.",
      "小的时候 = when (I was) young. One of the most nostalgic phrases.",
    ],
    comparisons: [
      "的时候 (when — time clause) vs 以后 (after) vs 以前 (before).",
    ],
  },
  {
    id: 48,
    title: "'Everything' with 什么…都/也",
    pattern: "Subject + 什么 + 都/也 + Verb",
    explanation: "什么都 or 什么也 means 'everything' or 'anything' (depending on context).",
    examples: [
      { hanzi: "他什么都吃。", pinyin: "tā shénme dōu chī.", english: "He eats everything." },
      { hanzi: "我什么也不想做。", pinyin: "wǒ shénme yě bù xiǎng zuò.", english: "I don't want to do anything." },
    ],
    category: "particles",
    detailedExplanation: "什么都 and 什么也 both create 'everything/anything' patterns. The difference is subtle: 都 emphasizes inclusiveness (everything without exception), while 也 is slightly more emphatic in negative sentences.\n\nPositive: 他什么都吃 (He eats everything — nothing excluded). Negative: 我什么也不想做 (I don't want to do anything at all — 也 adds emphasis to the negation).\n\nThis pattern works with other question words too: 谁都知道 (Everyone knows), 哪儿都去过 (Been everywhere), 几个都不要 (Don't want any of them).",
    tips: [
      "什么都 + verb = everything: 什么都知道 = knows everything.",
      "什么也/都 + 不 = nothing: 什么都不要 = don't want anything.",
      "Same pattern with 谁 (everyone), 哪儿 (everywhere): 谁都可以来.",
    ],
    comparisons: [
      "什么都 (everything — inclusive) vs 什么也 (anything — emphatic in negation).",
    ],
  },

  // === time ===
  {
    id: 49,
    title: "Time word placement",
    pattern: "Subject + Time + Verb / Time + Subject + Verb",
    explanation: "Time words can go before or after the subject — both are correct.",
    examples: [
      { hanzi: "我明天去。", pinyin: "wǒ míngtiān qù.", english: "I'll go tomorrow." },
      { hanzi: "昨天我没来。", pinyin: "zuótiān wǒ méi lái.", english: "Yesterday I didn't come." },
    ],
    category: "time",
    detailedExplanation: "Time words in Chinese are flexible — they can go before OR after the subject, and both are correct. 我明天去 = 明天我去 (I'll go tomorrow / Tomorrow I'll go).\n\nThe key rule is that time ALWAYS goes before the verb, never after. This is the opposite of English, where you might say 'I go tomorrow.' In Chinese, time sets the scene before the action.\n\nMultiple time words go from big to small: 明天下午三点 (tomorrow afternoon at 3). Year → month → day → time of day → hour.",
    tips: [
      "Time can go before or after the subject, but ALWAYS before the verb.",
      "Big to small: 明天下午三点 = tomorrow afternoon at 3.",
      "Common time words: 今天 (today), 明天 (tomorrow), 昨天 (yesterday), 现在 (now).",
    ],
    comparisons: [
      "Chinese: Time before verb (我明天去). English: Time after verb (I go tomorrow).",
    ],
  },
  {
    id: 50,
    title: "'After' with 以后",
    pattern: "Time/Verb + 以后，…",
    explanation: "以后 (yǐhòu) means 'after' a time or event.",
    examples: [
      { hanzi: "吃饭以后我们去散步。", pinyin: "chīfàn yǐhòu wǒmen qù sànbù.", english: "After eating, let's go for a walk." },
      { hanzi: "三点以后我有空。", pinyin: "sān diǎn yǐhòu wǒ yǒu kòng.", english: "I'm free after 3 o'clock." },
    ],
    category: "time",
    detailedExplanation: "以后 (yǐhòu) means 'after' and goes AFTER the event or time it refers to. 吃饭以后 (after eating) — notice the time clause comes first, then 以后. This is opposite to English 'after eating'.\n\nUsed alone, 以后 means 'in the future' or 'from now on': 以后不要这样做 (Don't do this in the future).\n\nCommon pattern for sequencing actions: Action1 + 以后 + Action2. 吃饭以后去散步 (After eating, go for a walk).",
    tips: [
      "Event + 以后 = after: 下课以后 = after class.",
      "以后 alone = in the future: 以后我要学中文 = I want to learn Chinese in the future.",
      "Time + 以后: 三天以后 = after three days / in three days.",
    ],
    comparisons: [
      "以后 (after) vs 以前 (before) vs 的时候 (when/during).",
    ],
  },
  {
    id: 51,
    title: "'Before' with 以前",
    pattern: "Time/Verb + 以前，…",
    explanation: "以前 (yǐqián) means 'before' a time or event.",
    examples: [
      { hanzi: "来中国以前，我不会说中文。", pinyin: "lái Zhōngguó yǐqián, wǒ bú huì shuō Zhōngwén.", english: "Before coming to China, I couldn't speak Chinese." },
      { hanzi: "睡觉以前要刷牙。", pinyin: "shuìjiào yǐqián yào shuāyá.", english: "You should brush your teeth before sleeping." },
    ],
    category: "time",
    detailedExplanation: "以前 (yǐqián) means 'before' and mirrors 以后's structure: Event + 以前. 来中国以前 (before coming to China). The referenced event comes first.\n\nUsed alone, 以前 means 'in the past' or 'before (now)': 以前我不会说中文 (Before, I couldn't speak Chinese / In the past, I couldn't speak Chinese).\n\nBoth 以前 and 以后 follow the same pattern: they go AFTER the time/event they modify. This consistency makes them easy to learn as a pair.",
    tips: [
      "Event + 以前 = before: 睡觉以前 = before sleeping.",
      "以前 alone = in the past: 以前我住在北京 = I used to live in Beijing.",
      "Learn 以前 and 以后 as a pair — same structure, opposite meanings.",
    ],
    comparisons: [
      "以前 (before — past-facing) vs 以后 (after — future-facing).",
    ],
  },
  {
    id: 52,
    title: "Date structure",
    pattern: "X年 + Y月 + Z日/号",
    explanation: "Dates go from largest to smallest: year, month, day.",
    examples: [
      { hanzi: "二零二五年一月一号", pinyin: "èr líng èr wǔ nián yī yuè yī hào", english: "January 1st, 2025" },
      { hanzi: "你的生日是几月几号？", pinyin: "nǐ de shēngrì shì jǐ yuè jǐ hào?", english: "What date is your birthday?" },
    ],
    category: "time",
    detailedExplanation: "Chinese dates go from LARGEST to SMALLEST: year → month → day. This is the opposite of American format (month/day/year) but consistent with Chinese logic — big before small.\n\n年 (nián) = year, 月 (yuè) = month, 日 (rì) or 号 (hào) = day. 日 is formal/written, 号 is casual/spoken. For everyday use, say 号.\n\nMonths are simply numbered: 一月 (January = month 1), 二月 (February = month 2), etc. No need to memorize separate month names like in English.",
    tips: [
      "Big → small: 2025年1月1号. Year first, then month, then day.",
      "Months = numbers: 一月 through 十二月. Simple!",
      "号 (casual/spoken) vs 日 (formal/written) for the day.",
    ],
    comparisons: [
      "Chinese: year-month-day (大到小). American: month/day/year. European: day.month.year.",
    ],
  },
  {
    id: 53,
    title: "Time structure (clock)",
    pattern: "X点 + Y分",
    explanation: "Tell time with 点 (diǎn) for hours and 分 (fēn) for minutes.",
    examples: [
      { hanzi: "现在三点半。", pinyin: "xiànzài sān diǎn bàn.", english: "It's 3:30 now." },
      { hanzi: "我八点上课。", pinyin: "wǒ bā diǎn shàngkè.", english: "My class starts at 8 o'clock." },
    ],
    category: "time",
    detailedExplanation: "Chinese uses 点 (diǎn) for hours and 分 (fēn) for minutes. 三点半 = 3:30 (半 means half). 两点十五分 = 2:15.\n\nSpecial cases: 半 (bàn) = half past, 刻 (kè) = quarter. 三点半 (3:30), 三点一刻 (3:15), 差一刻四点 (quarter to 4 = 3:45).\n\nUse 两 (liǎng) not 二 (èr) for 2 o'clock: 两点, not 二点. This is because 两 is used before measure words, and 点 functions as one.",
    tips: [
      "X点Y分: 三点二十分 = 3:20. Drop 分 for round numbers.",
      "半 = :30, 一刻 = :15. 三点半 = 3:30.",
      "Use 两点 (not 二点) for 2 o'clock.",
    ],
    comparisons: [
      "点 (hours) + 分 (minutes) vs 半 (half) vs 刻 (quarter).",
    ],
  },

  // === numbers ===
  {
    id: 54,
    title: "Measure word 个",
    pattern: "Number + 个 + Noun",
    explanation: "个 (gè) is the most common measure word. Use it when you don't know the specific measure word for a noun.",
    examples: [
      { hanzi: "一个人", pinyin: "yí gè rén", english: "one person" },
      { hanzi: "三个苹果", pinyin: "sān gè píngguǒ", english: "three apples" },
      { hanzi: "几个学生", pinyin: "jǐ gè xuéshēng", english: "how many students" },
    ],
    category: "numbers",
    detailedExplanation: "个 (gè) is the default, all-purpose measure word. Chinese requires a measure word between a number and a noun — you can't say 三苹果 (three apples), you need 三个苹果.\n\nEvery noun has a 'correct' measure word (本 for books, 只 for animals, 件 for clothing), but 个 works as a universal fallback. Native speakers use specific measure words, but using 个 when you're unsure is perfectly understandable.\n\nAt HSK1 level, focus on learning 个 well. As you advance, pick up specific measure words gradually. Even native speakers sometimes use 个 as a casual shortcut.",
    tips: [
      "Always use a measure word between number and noun. 个 is the safe default.",
      "一个人 (a person), 两个苹果 (two apples), 三个问题 (three questions).",
      "When in doubt, use 个. It's better than no measure word at all.",
    ],
    comparisons: [
      "个 (general) vs 本 (books) vs 只 (animals) vs 件 (clothing/matters) vs 杯 (cups).",
    ],
  },
  {
    id: 55,
    title: "Age with 岁",
    pattern: "Subject + Number + 岁",
    explanation: "岁 (suì) is the measure word for age — no verb needed.",
    examples: [
      { hanzi: "我二十岁。", pinyin: "wǒ èrshí suì.", english: "I am 20 years old." },
      { hanzi: "他的女儿五岁了。", pinyin: "tā de nǚ'ér wǔ suì le.", english: "His daughter is 5 years old." },
    ],
    category: "numbers",
    detailedExplanation: "To state age in Chinese, just say the number + 岁 — no verb 'to be' is needed. 我二十岁 (I'm 20 years old). This is simpler than English.\n\nAdding 了 implies the age was recently reached or is notable: 他五岁了 (He's turned 5 / He's already 5). Without 了, it's a neutral statement of age.\n\nDifferent ways to ask age: 你多大？ (casual, for peers), 你几岁？ (for children under 10), 您多大年纪？ (respectful, for elderly).",
    tips: [
      "Number + 岁 = age. No 是 needed: 我二十岁, not 我是二十岁.",
      "你多大？ (peers) vs 你几岁？ (children) vs 您多大年纪？ (elderly).",
      "Adding 了: 他十八岁了 = He's turned 18 (milestone emphasis).",
    ],
    comparisons: [
      "岁 (age) vs 年 (years of duration): 我学了三年 (studied 3 years) vs 我三十岁 (I'm 30).",
    ],
  },
  {
    id: 56,
    title: "Counting money",
    pattern: "Number + 块 (+ Number + 毛)",
    explanation: "块 (kuài) is the spoken word for yuan (dollars), 毛 (máo) for jiǎo (dimes).",
    examples: [
      { hanzi: "十块钱", pinyin: "shí kuài qián", english: "10 yuan" },
      { hanzi: "三块五毛", pinyin: "sān kuài wǔ máo", english: "3.5 yuan" },
    ],
    category: "numbers",
    detailedExplanation: "Chinese currency uses three units: 元/块 (yuán/kuài), 角/毛 (jiǎo/máo), 分 (fēn). 块 and 毛 are casual/spoken forms; 元 and 角 are formal/written.\n\n块 = yuan (like dollars), 毛 = 1/10 yuan (like dimes), 分 = 1/100 yuan (like cents, rarely used now). 三块五 means 3.50 yuan — you can drop 毛 when the meaning is clear.\n\n钱 (qián) means 'money' and is often added at the end: 十块钱 (10 yuan). The essential shopping phrase: 多少钱？ (How much?).",
    tips: [
      "块 (spoken) = 元 (written). Both mean yuan, China's currency unit.",
      "三块五 = 3.50 yuan. Drop 毛 when obvious from context.",
      "多少钱？ and 太贵了！ are the two essential shopping phrases.",
    ],
    comparisons: [
      "块/元 (yuan — dollars) vs 毛/角 (dimes) vs 分 (cents — rarely used).",
    ],
  },
  {
    id: 57,
    title: "Ordinal numbers with 第",
    pattern: "第 + Number (+ Measure Word + Noun)",
    explanation: "第 (dì) turns a number into an ordinal — first, second, third, etc.",
    examples: [
      { hanzi: "第一", pinyin: "dì yī", english: "first" },
      { hanzi: "第三个人", pinyin: "dì sān gè rén", english: "the third person" },
      { hanzi: "这是我第一次来中国。", pinyin: "zhè shì wǒ dì yī cì lái Zhōngguó.", english: "This is my first time coming to China." },
    ],
    category: "numbers",
    detailedExplanation: "第 (dì) turns any number into an ordinal: 第一 (first), 第二 (second), 第三 (third). Just prefix 第 to the number — it's that simple.\n\nWith a noun, add the appropriate measure word: 第三个人 (the third person), 第一本书 (the first book), 第二次 (the second time).\n\n次 (cì, 'time/occasion') is especially common with 第: 第一次 (the first time). 这是我第一次来中国 is one of the most useful sentences for travelers.",
    tips: [
      "第 + number = ordinal: 第一 (1st), 第二 (2nd), 第三 (3rd).",
      "第 + number + measure word + noun: 第三个人 = the third person.",
      "第一次 = the first time. Essential phrase for new experiences.",
    ],
    comparisons: [
      "第 + number (ordinal: 第三 = third) vs bare number (cardinal: 三 = three).",
    ],
  },
  {
    id: 58,
    title: "'Some' with 一些",
    pattern: "一些 + Noun",
    explanation: "一些 (yìxiē) means 'some' or 'a few'.",
    examples: [
      { hanzi: "我有一些问题。", pinyin: "wǒ yǒu yìxiē wèntí.", english: "I have some questions." },
      { hanzi: "给我一些水。", pinyin: "gěi wǒ yìxiē shuǐ.", english: "Give me some water." },
    ],
    category: "numbers",
    detailedExplanation: "一些 (yìxiē) means 'some' or 'a few' and doesn't require a measure word — it goes directly before the noun. 一些人 (some people), 一些问题 (some questions).\n\nIn casual speech, 一 is often dropped: 有些人 (some people) = 有一些人. 些 alone doesn't work — it needs 一 or 有 before it.\n\n一些 is for countable and uncountable nouns: 一些水 (some water), 一些朋友 (some friends). It's less specific than a number and implies 'a moderate amount'.",
    tips: [
      "一些 + noun directly, no measure word needed: 一些书, 一些时间.",
      "有些 = 有一些 (some). Casual shortening in speech.",
      "Works for countable and uncountable: 一些人, 一些水.",
    ],
    comparisons: [
      "一些 (some — moderate) vs 几个 (a few — small number) vs 很多 (many/much).",
    ],
  },
  {
    id: 59,
    title: "Permission with 可以",
    pattern: "可以 + Verb",
    explanation: "可以 (kěyǐ) expresses permission ('may') or possibility ('can'). Negate with 不可以 for prohibition.",
    examples: [
      { hanzi: "我可以进来吗？", pinyin: "Wǒ kěyǐ jìnlái ma?", english: "May I come in?" },
      { hanzi: "这里不可以抽烟。", pinyin: "Zhèlǐ bù kěyǐ chōuyān.", english: "Smoking is not allowed here." },
    ],
    category: "verbs",
    detailedExplanation: "可以 (kěyǐ) means 'may' or 'can' in the sense of PERMISSION or ALLOWABILITY. 我可以进来吗？ (May I come in?). It's about being allowed to do something, not about skill or circumstance.\n\nNegate with 不可以 for prohibition: 这里不可以抽烟 (No smoking here — it's not allowed). This is stronger than 不能 in expressing rules.\n\n可以 can also mean 'passable/okay' as an adjective: 还可以 (it's okay), 味道可以 (the taste is alright).",
    tips: [
      "可以 = may/allowed. Use for permission questions: 可以吗？ = Is it okay?",
      "不可以 = not allowed (prohibition). Stronger than 不能 for rules.",
      "可以 as adjective: 还可以 = it's okay / passable.",
    ],
    comparisons: [
      "可以 (can — permission) vs 能 (can — circumstances) vs 会 (can — learned skill).",
    ],
  },
];
