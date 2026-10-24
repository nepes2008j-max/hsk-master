export interface GrammarPoint {
  id: number;
  title: string;
  pattern: string;
  explanation: string;
  examples: { hanzi: string; pinyin: string; english: string }[];
  category: string;
}

export interface MCQExercise {
  type: "mcq";
  prompt: string;
  options: string[];
  answer: number;
}

export interface FillExercise {
  type: "fill";
  sentence: string;
  answer: string;
  distractors: string[];
}

export interface ReorderExercise {
  type: "reorder";
  english: string;
  words: string[];
  answer: string[];
}

export interface TranslateExercise {
  type: "translate";
  english: string;
  answer: string;
  accept?: string[];
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
  },
];
