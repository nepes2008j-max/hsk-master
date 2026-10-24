import type { Exercise } from "./grammar";

export const grammarExercises: Record<number, Exercise[]> = {
  // 1: Basic SVO word order
  1: [
    { type: "mcq", prompt: "Which sentence follows correct SVO order?", options: ["我吃饭。", "吃饭我。", "饭我吃。", "饭吃我。"], answer: 0 },
    { type: "reorder", english: "She reads books.", words: ["书", "她", "看"], answer: ["她", "看", "书"] },
    { type: "fill", sentence: "他___水。", answer: "喝", distractors: ["是", "的", "了"] },
    { type: "translate", english: "I eat rice.", answer: "我吃饭。", accept: ["我吃饭"] },
  ],
  // 2: Linking nouns with 是
  2: [
    { type: "fill", sentence: "我___学生。", answer: "是", distractors: ["有", "在", "很"] },
    { type: "mcq", prompt: "Which correctly uses 是?", options: ["她是老师。", "她是漂亮。", "她是在家。", "她是喝水。"], answer: 0 },
    { type: "translate", english: "He is a doctor.", answer: "他是医生。", accept: ["他是医生"] },
    { type: "reorder", english: "I am Chinese.", words: ["人", "我", "中国", "是"], answer: ["我", "是", "中国", "人"] },
  ],
  // 3: Negation with 不
  3: [
    { type: "fill", sentence: "我___是学生。", answer: "不", distractors: ["没", "很", "也"] },
    { type: "mcq", prompt: "How do you say 'I don't eat meat'?", options: ["我不吃肉。", "我没吃肉。", "我不了吃肉。", "我吃不肉。"], answer: 0 },
    { type: "reorder", english: "She is not a teacher.", words: ["老师", "不", "她", "是"], answer: ["她", "不", "是", "老师"] },
    { type: "translate", english: "He doesn't drink coffee.", answer: "他不喝咖啡。", accept: ["他不喝咖啡"] },
  ],
  // 4: Possession with 的
  4: [
    { type: "fill", sentence: "这是我___书。", answer: "的", distractors: ["了", "是", "在"] },
    { type: "mcq", prompt: "Which shows possession correctly?", options: ["妈妈的手机", "妈妈了手机", "妈妈是手机", "妈妈在手机"], answer: 0 },
    { type: "translate", english: "This is my cat.", answer: "这是我的猫。", accept: ["这是我的猫"] },
    { type: "reorder", english: "Teacher's book", words: ["的", "书", "老师"], answer: ["老师", "的", "书"] },
  ],
  // 5: Questions with 吗
  5: [
    { type: "fill", sentence: "你是学生___？", answer: "吗", distractors: ["呢", "了", "的"] },
    { type: "mcq", prompt: "Which is a correct yes/no question?", options: ["你喜欢中国吗？", "你喜欢中国呢？", "吗你喜欢中国？", "你喜欢吗中国？"], answer: 0 },
    { type: "translate", english: "Is he a doctor?", answer: "他是医生吗？", accept: ["他是医生吗"] },
    { type: "reorder", english: "Do you like coffee?", words: ["吗", "咖啡", "你", "喜欢"], answer: ["你", "喜欢", "咖啡", "吗"] },
  ],
  // 6: Demonstratives 这/那
  6: [
    { type: "mcq", prompt: "这 means:", options: ["this", "that", "which", "what"], answer: 0 },
    { type: "fill", sentence: "___是什么？", answer: "那", distractors: ["的", "了", "吗"] },
    { type: "translate", english: "This is my book.", answer: "这是我的书。", accept: ["这是我的书"] },
    { type: "reorder", english: "That is his cat.", words: ["猫", "那", "他的", "是"], answer: ["那", "是", "他的", "猫"] },
  ],
  // 7: Location with 在
  7: [
    { type: "fill", sentence: "他___家。", answer: "在", distractors: ["是", "有", "去"] },
    { type: "mcq", prompt: "Which correctly expresses location?", options: ["我在学校。", "我是学校。", "我有学校。", "我的学校。"], answer: 0 },
    { type: "translate", english: "She is at the hospital.", answer: "她在医院。", accept: ["她在医院"] },
    { type: "reorder", english: "The cat is at home.", words: ["在", "猫", "家"], answer: ["猫", "在", "家"] },
  ],
  // 8: Existence with 有
  8: [
    { type: "fill", sentence: "我___一个哥哥。", answer: "有", distractors: ["是", "在", "很"] },
    { type: "mcq", prompt: "Which correctly uses 有?", options: ["桌子上有一本书。", "桌子上是一本书。", "桌子上在一本书。", "桌子上很一本书。"], answer: 0 },
    { type: "translate", english: "I have two cats.", answer: "我有两只猫。", accept: ["我有两只猫", "我有两个猫"] },
    { type: "reorder", english: "There is a person here.", words: ["人", "有", "这里", "一个"], answer: ["这里", "有", "一个", "人"] },
  ],
  // 9: Adjectives with 很
  9: [
    { type: "fill", sentence: "她___漂亮。", answer: "很", distractors: ["是", "有", "不"] },
    { type: "mcq", prompt: "Which correctly describes someone as tall?", options: ["他很高。", "他是高。", "他有高。", "他在高。"], answer: 0 },
    { type: "translate", english: "Chinese food is very delicious.", answer: "中国菜很好吃。", accept: ["中国菜很好吃"] },
    { type: "reorder", english: "This book is very good.", words: ["很", "好", "这本书"], answer: ["这本书", "很", "好"] },
  ],
  // 10: Negation with 没有
  10: [
    { type: "fill", sentence: "我___钱。", answer: "没有", distractors: ["不有", "没是", "不是"] },
    { type: "mcq", prompt: "How do you negate 有?", options: ["没有", "不有", "没是", "不了"], answer: 0 },
    { type: "translate", english: "He doesn't have a phone.", answer: "他没有手机。", accept: ["他没有手机"] },
    { type: "reorder", english: "I don't have money.", words: ["钱", "我", "没有"], answer: ["我", "没有", "钱"] },
  ],
  // 11: Questions with 什么
  11: [
    { type: "fill", sentence: "你叫___名字？", answer: "什么", distractors: ["哪个", "谁", "多少"] },
    { type: "mcq", prompt: "什么 is used to ask about:", options: ["things/what", "people/who", "places/where", "time/when"], answer: 0 },
    { type: "translate", english: "What is this?", answer: "这是什么？", accept: ["这是什么"] },
    { type: "reorder", english: "What do you want to eat?", words: ["什么", "想", "你", "吃"], answer: ["你", "想", "吃", "什么"] },
  ],
  // 12: Questions with 谁
  12: [
    { type: "fill", sentence: "___是你的老师？", answer: "谁", distractors: ["什么", "哪", "几"] },
    { type: "mcq", prompt: "Which correctly asks 'who'?", options: ["他是谁？", "他是什么？", "他是哪？", "他是几？"], answer: 0 },
    { type: "translate", english: "Who is she?", answer: "她是谁？", accept: ["她是谁"] },
  ],
  // 13: Questions with 哪
  13: [
    { type: "fill", sentence: "你是___国人？", answer: "哪", distractors: ["什么", "谁", "几"] },
    { type: "mcq", prompt: "哪 is used to ask about:", options: ["which/where", "what", "who", "how many"], answer: 0 },
    { type: "translate", english: "Which one is yours?", answer: "哪个是你的？", accept: ["哪个是你的"] },
  ],
  // 14: Questions with 几/多少
  14: [
    { type: "fill", sentence: "你有___个孩子？", answer: "几", distractors: ["多少", "什么", "哪"] },
    { type: "mcq", prompt: "几 is typically used for numbers:", options: ["under 10", "over 100", "any number", "only 1"], answer: 0 },
    { type: "translate", english: "How many students are there?", answer: "有多少学生？", accept: ["有多少学生", "多少学生"] },
    { type: "reorder", english: "How old are you?", words: ["岁", "几", "你", "了"], answer: ["你", "几", "岁", "了"] },
  ],
  // 15: Affirmative-negative questions
  15: [
    { type: "fill", sentence: "你是___是学生？", answer: "不", distractors: ["没", "很", "也"] },
    { type: "mcq", prompt: "Which is a correct A-not-A question?", options: ["你喜欢不喜欢？", "你喜欢没喜欢？", "你不喜欢喜欢？", "你喜欢吗不？"], answer: 0 },
    { type: "translate", english: "Is it good or not?", answer: "好不好？", accept: ["好不好"] },
    { type: "reorder", english: "Do you want to go or not?", words: ["去", "你", "不", "想", "想"], answer: ["你", "想", "不", "想", "去"] },
  ],
  // 16: Tag questions with 好吗
  16: [
    { type: "fill", sentence: "我们去吃饭，___？", answer: "好吗", distractors: ["吗", "呢", "吧"] },
    { type: "mcq", prompt: "好吗 at the end of a sentence is used to:", options: ["suggest and ask for agreement", "ask a yes/no question", "express surprise", "show emphasis"], answer: 0 },
    { type: "translate", english: "Let's go, okay?", answer: "我们走吧，好吗？", accept: ["我们走，好吗？", "我们走吧，好吗"] },
  ],
  // 17: Questions with 呢
  17: [
    { type: "fill", sentence: "我很好，你___？", answer: "呢", distractors: ["吗", "吧", "了"] },
    { type: "mcq", prompt: "呢 is used to:", options: ["return a question back", "negate a statement", "show past tense", "express surprise"], answer: 0 },
    { type: "translate", english: "I'm a student. And you?", answer: "我是学生。你呢？", accept: ["我是学生，你呢？", "我是学生。你呢"] },
  ],
  // 18: Also with 也
  18: [
    { type: "fill", sentence: "我喜欢猫，我___喜欢狗。", answer: "也", distractors: ["都", "还", "很"] },
    { type: "mcq", prompt: "Where does 也 go?", options: ["before the verb", "after the verb", "at the end", "at the beginning"], answer: 0 },
    { type: "translate", english: "She is also a teacher.", answer: "她也是老师。", accept: ["她也是老师"] },
    { type: "reorder", english: "I also like coffee.", words: ["也", "咖啡", "喜欢", "我"], answer: ["我", "也", "喜欢", "咖啡"] },
  ],
  // 19: All with 都
  19: [
    { type: "fill", sentence: "我们___喜欢中国菜。", answer: "都", distractors: ["也", "很", "不"] },
    { type: "mcq", prompt: "都 means:", options: ["all/both", "also", "very", "not"], answer: 0 },
    { type: "translate", english: "They all are students.", answer: "他们都是学生。", accept: ["他们都是学生"] },
    { type: "reorder", english: "We all like it.", words: ["喜欢", "我们", "都"], answer: ["我们", "都", "喜欢"] },
  ],
  // 20: Adverbs 太...了
  20: [
    { type: "fill", sentence: "这个___贵了！", answer: "太", distractors: ["很", "真", "好"] },
    { type: "mcq", prompt: "太...了 expresses:", options: ["excessively/too much", "a little", "very (neutral)", "not at all"], answer: 0 },
    { type: "translate", english: "It's too expensive!", answer: "太贵了！", accept: ["太贵了"] },
    { type: "reorder", english: "Too delicious!", words: ["了", "好吃", "太"], answer: ["太", "好吃", "了"] },
  ],
  // 21: Really with 真
  21: [
    { type: "fill", sentence: "今天___冷！", answer: "真", distractors: ["太", "很", "好"] },
    { type: "mcq", prompt: "真 before an adjective means:", options: ["really/truly", "too much", "a little", "not"], answer: 0 },
    { type: "translate", english: "You are really smart!", answer: "你真聪明！", accept: ["你真聪明"] },
  ],
  // 22: A little with 一点儿
  22: [
    { type: "fill", sentence: "我会说___中文。", answer: "一点儿", distractors: ["很多", "太", "真"] },
    { type: "mcq", prompt: "一点儿 means:", options: ["a little", "very", "too much", "really"], answer: 0 },
    { type: "translate", english: "I'm a little tired.", answer: "我有一点儿累。", accept: ["我有一点儿累", "我有点儿累", "我有点累"] },
  ],
  // 23: Not very with 不太
  23: [
    { type: "fill", sentence: "这个菜___好吃。", answer: "不太", distractors: ["不很", "没太", "太不"] },
    { type: "mcq", prompt: "不太 means:", options: ["not very", "not at all", "too much", "really"], answer: 0 },
    { type: "translate", english: "I'm not very busy.", answer: "我不太忙。", accept: ["我不太忙"] },
  ],
  // 24: Still with 还
  24: [
    { type: "fill", sentence: "你___想吃什么？", answer: "还", distractors: ["也", "都", "又"] },
    { type: "mcq", prompt: "还 can mean:", options: ["still/also/in addition", "very", "not", "already"], answer: 0 },
    { type: "translate", english: "I still want to go.", answer: "我还想去。", accept: ["我还想去"] },
  ],
  // 25: Want to with 想
  25: [
    { type: "fill", sentence: "我___去中国。", answer: "想", distractors: ["要", "会", "能"] },
    { type: "mcq", prompt: "想 + verb means:", options: ["want to", "can", "should", "must"], answer: 0 },
    { type: "translate", english: "I want to eat Chinese food.", answer: "我想吃中国菜。", accept: ["我想吃中国菜"] },
    { type: "reorder", english: "She wants to go home.", words: ["回家", "想", "她"], answer: ["她", "想", "回家"] },
  ],
  // 26: Need/must with 要
  26: [
    { type: "fill", sentence: "明天我___上班。", answer: "要", distractors: ["想", "会", "能"] },
    { type: "mcq", prompt: "要 expresses:", options: ["need to / will", "can", "a little", "already"], answer: 0 },
    { type: "translate", english: "I need to study.", answer: "我要学习。", accept: ["我要学习"] },
  ],
  // 27: Can (learned) with 会
  27: [
    { type: "fill", sentence: "她___说中文。", answer: "会", distractors: ["能", "可以", "想"] },
    { type: "mcq", prompt: "会 indicates ability that is:", options: ["learned/acquired", "physical", "permitted", "wanted"], answer: 0 },
    { type: "translate", english: "I can speak Chinese.", answer: "我会说中文。", accept: ["我会说中文", "我会说汉语"] },
    { type: "reorder", english: "Can you cook?", words: ["做饭", "你", "会", "吗"], answer: ["你", "会", "做饭", "吗"] },
  ],
  // 28: Can (physical/circumstantial) with 能
  28: [
    { type: "fill", sentence: "我今天不___来。", answer: "能", distractors: ["会", "可以", "想"] },
    { type: "mcq", prompt: "能 indicates:", options: ["physical/circumstantial ability", "learned skill", "permission", "desire"], answer: 0 },
    { type: "translate", english: "I can't eat spicy food.", answer: "我不能吃辣的。", accept: ["我不能吃辣的", "我不能吃辣"] },
  ],
  // 29: May/permission with 可以
  29: [
    { type: "fill", sentence: "我___进来吗？", answer: "可以", distractors: ["会", "能", "想"] },
    { type: "mcq", prompt: "可以 is used for:", options: ["permission", "learned ability", "physical ability", "desire"], answer: 0 },
    { type: "translate", english: "May I sit here?", answer: "我可以坐这里吗？", accept: ["我可以坐这里吗", "可以坐这里吗"] },
  ],
  // 30: Should with 应该
  30: [
    { type: "fill", sentence: "你___多喝水。", answer: "应该", distractors: ["可以", "想", "要"] },
    { type: "mcq", prompt: "应该 means:", options: ["should", "can", "must", "want to"], answer: 0 },
    { type: "translate", english: "You should rest.", answer: "你应该休息。", accept: ["你应该休息"] },
  ],
  // 31: Like to with 喜欢
  31: [
    { type: "fill", sentence: "我___看电影。", answer: "喜欢", distractors: ["想", "要", "会"] },
    { type: "mcq", prompt: "喜欢 can be followed by:", options: ["a noun or a verb", "only a noun", "only a verb", "an adjective"], answer: 0 },
    { type: "translate", english: "I like reading.", answer: "我喜欢看书。", accept: ["我喜欢看书", "我喜欢读书"] },
    { type: "reorder", english: "She likes drinking tea.", words: ["喝", "她", "茶", "喜欢"], answer: ["她", "喜欢", "喝", "茶"] },
  ],
  // 32: Go/come to do with 去/来
  32: [
    { type: "fill", sentence: "我___商店买东西。", answer: "去", distractors: ["来", "在", "到"] },
    { type: "mcq", prompt: "去 + place + verb means:", options: ["go somewhere to do something", "come to do something", "be at a place", "want to do something"], answer: 0 },
    { type: "translate", english: "I'm going to school to study.", answer: "我去学校学习。", accept: ["我去学校学习", "我去学校上课"] },
  ],
  // 33: Return with 回
  33: [
    { type: "fill", sentence: "我想___家。", answer: "回", distractors: ["去", "来", "到"] },
    { type: "mcq", prompt: "回家 means:", options: ["go home / return home", "leave home", "arrive home", "at home"], answer: 0 },
    { type: "translate", english: "He went back to China.", answer: "他回中国了。", accept: ["他回中国了"] },
  ],
  // 34: Completed action with 了
  34: [
    { type: "fill", sentence: "我吃___三个苹果。", answer: "了", distractors: ["过", "着", "的"] },
    { type: "mcq", prompt: "了 after a verb indicates:", options: ["completed action", "ongoing action", "future action", "habitual action"], answer: 0 },
    { type: "translate", english: "I bought a book.", answer: "我买了一本书。", accept: ["我买了一本书"] },
    { type: "reorder", english: "She ate.", words: ["了", "吃", "饭", "她"], answer: ["她", "吃", "了", "饭"] },
  ],
  // 35: Experience with 过
  35: [
    { type: "fill", sentence: "我去___中国。", answer: "过", distractors: ["了", "着", "的"] },
    { type: "mcq", prompt: "过 after a verb indicates:", options: ["past experience", "completed action just now", "ongoing action", "future action"], answer: 0 },
    { type: "translate", english: "Have you been to Beijing?", answer: "你去过北京吗？", accept: ["你去过北京吗", "你去过北京没有"] },
  ],
  // 36: Progressive with 在
  36: [
    { type: "fill", sentence: "他___看书。", answer: "在", distractors: ["了", "过", "的"] },
    { type: "mcq", prompt: "在 before a verb means:", options: ["currently doing", "already done", "used to do", "will do"], answer: 0 },
    { type: "translate", english: "I am eating.", answer: "我在吃饭。", accept: ["我在吃饭"] },
    { type: "reorder", english: "She is studying.", words: ["学习", "在", "她"], answer: ["她", "在", "学习"] },
  ],
  // 37: Sentence-final 了 for change of state
  37: [
    { type: "fill", sentence: "天冷___。", answer: "了", distractors: ["的", "过", "着"] },
    { type: "mcq", prompt: "了 at the end of a sentence indicates:", options: ["change of state / new situation", "completed action", "past experience", "ongoing action"], answer: 0 },
    { type: "translate", english: "I'm hungry now.", answer: "我饿了。", accept: ["我饿了"] },
  ],
  // 38: Sentence-final 吧 for suggestions
  38: [
    { type: "fill", sentence: "我们走___。", answer: "吧", distractors: ["了", "吗", "呢"] },
    { type: "mcq", prompt: "吧 at the end of a sentence suggests:", options: ["a suggestion or assumption", "a question", "a completed action", "negation"], answer: 0 },
    { type: "translate", english: "Let's eat!", answer: "我们吃饭吧！", accept: ["我们吃饭吧", "吃饭吧"] },
  ],
  // 39: Expressing surprise/emphasis with 啊
  39: [
    { type: "fill", sentence: "好漂亮___！", answer: "啊", distractors: ["吗", "呢", "吧"] },
    { type: "mcq", prompt: "啊 expresses:", options: ["surprise or emphasis", "a question", "negation", "completion"], answer: 0 },
    { type: "translate", english: "So beautiful!", answer: "好漂亮啊！", accept: ["好漂亮啊", "真漂亮啊"] },
  ],
  // 40: Telling time
  40: [
    { type: "fill", sentence: "现在三___半。", answer: "点", distractors: ["个", "时", "分"] },
    { type: "mcq", prompt: "How do you say 2:15?", options: ["两点十五分", "二点十五分", "两时十五分", "二个十五分"], answer: 0 },
    { type: "translate", english: "It's 8 o'clock now.", answer: "现在八点。", accept: ["现在八点", "现在八点了"] },
  ],
  // 41: Dates and days
  41: [
    { type: "fill", sentence: "今天是星期___。", answer: "一", distractors: ["月", "号", "年"] },
    { type: "mcq", prompt: "The correct order for dates in Chinese is:", options: ["year-month-day", "day-month-year", "month-day-year", "day-year-month"], answer: 0 },
    { type: "translate", english: "Today is October 1st.", answer: "今天是十月一号。", accept: ["今天是十月一号", "今天十月一号", "今天是十月一日"] },
  ],
  // 42: Duration of time
  42: [
    { type: "fill", sentence: "我学了两___中文。", answer: "年", distractors: ["个", "次", "些"] },
    { type: "mcq", prompt: "Where does the duration go?", options: ["after the verb", "before the verb", "before the subject", "at the end after 了"], answer: 0 },
    { type: "translate", english: "I studied for three hours.", answer: "我学了三个小时。", accept: ["我学了三个小时", "我学习了三个小时"] },
    { type: "reorder", english: "He slept for two hours.", words: ["两个小时", "了", "他", "睡"], answer: ["他", "睡", "了", "两个小时"] },
  ],
  // 43: Time words (before/after)
  43: [
    { type: "fill", sentence: "吃饭___我去学校。", answer: "以后", distractors: ["以前", "的时候", "一边"] },
    { type: "mcq", prompt: "以前 means:", options: ["before", "after", "during", "always"], answer: 0 },
    { type: "translate", english: "Before class, I eat.", answer: "上课以前，我吃饭。", accept: ["上课以前我吃饭", "上课以前，我吃饭"] },
  ],
  // 44: When with 的时候
  44: [
    { type: "fill", sentence: "我小___，很喜欢画画。", answer: "的时候", distractors: ["以前", "以后", "了"] },
    { type: "mcq", prompt: "的时候 means:", options: ["when / at the time of", "before", "after", "because"], answer: 0 },
    { type: "translate", english: "When I eat, I watch TV.", answer: "我吃饭的时候看电视。", accept: ["吃饭的时候我看电视", "我吃饭的时候看电视"] },
  ],
  // 45: Measure words (个, 本, 只, etc.)
  45: [
    { type: "fill", sentence: "三___人", answer: "个", distractors: ["本", "只", "杯"] },
    { type: "mcq", prompt: "Which measure word is for books?", options: ["本", "个", "只", "杯"], answer: 0 },
    { type: "translate", english: "two cups of tea", answer: "两杯茶", accept: ["两杯茶"] },
    { type: "reorder", english: "one cat", words: ["猫", "一", "只"], answer: ["一", "只", "猫"] },
  ],
  // 46: Ordinal numbers with 第
  46: [
    { type: "fill", sentence: "这是我___一次来中国。", answer: "第", distractors: ["个", "了", "的"] },
    { type: "mcq", prompt: "第三 means:", options: ["third", "three", "three times", "the three"], answer: 0 },
    { type: "translate", english: "He is the first.", answer: "他是第一。", accept: ["他是第一", "他是第一个"] },
  ],
  // 47: Approximate numbers with 几 and 多
  47: [
    { type: "fill", sentence: "他二十___岁。", answer: "多", distractors: ["几", "个", "些"] },
    { type: "mcq", prompt: "十几 means:", options: ["teens (10-19)", "exactly 10", "a few", "over 100"], answer: 0 },
    { type: "translate", english: "There are about thirty people.", answer: "有三十多个人。", accept: ["有三十多个人", "大约有三十个人"] },
  ],
  // 48: Money and prices
  48: [
    { type: "fill", sentence: "这个多少___？", answer: "钱", distractors: ["个", "元", "了"] },
    { type: "mcq", prompt: "块 is the spoken form of:", options: ["元 (yuan)", "角 (jiao)", "分 (fen)", "毛 (mao)"], answer: 0 },
    { type: "translate", english: "This is 5 yuan.", answer: "这个五块钱。", accept: ["这个五块钱", "这是五块钱", "这个五元"] },
  ],
  // 49: 二 vs 两
  49: [
    { type: "fill", sentence: "我有___个孩子。", answer: "两", distractors: ["二", "几", "些"] },
    { type: "mcq", prompt: "When do you use 两 instead of 二?", options: ["before measure words", "in phone numbers", "in math", "after 十"], answer: 0 },
    { type: "translate", english: "two books", answer: "两本书", accept: ["两本书"] },
  ],
  // 50: Asking about actions with 怎么
  50: [
    { type: "fill", sentence: "这个字___写？", answer: "怎么", distractors: ["什么", "哪里", "为什么"] },
    { type: "mcq", prompt: "怎么 is used to ask:", options: ["how", "what", "where", "why"], answer: 0 },
    { type: "translate", english: "How do you go to school?", answer: "你怎么去学校？", accept: ["你怎么去学校"] },
    { type: "reorder", english: "How do you say this?", words: ["说", "怎么", "这个"], answer: ["这个", "怎么", "说"] },
  ],
  // 51: Asking opinions with 怎么样
  51: [
    { type: "fill", sentence: "这个电影___？", answer: "怎么样", distractors: ["怎么", "什么", "好吗"] },
    { type: "mcq", prompt: "怎么样 is used to:", options: ["ask for an opinion", "ask how to do something", "ask where", "ask who"], answer: 0 },
    { type: "translate", english: "How's the weather today?", answer: "今天天气怎么样？", accept: ["今天天气怎么样", "今天的天气怎么样"] },
  ],
  // 52: Asking reason with 为什么
  52: [
    { type: "fill", sentence: "你___不高兴？", answer: "为什么", distractors: ["怎么", "什么", "哪里"] },
    { type: "mcq", prompt: "为什么 means:", options: ["why", "how", "what", "where"], answer: 0 },
    { type: "translate", english: "Why are you learning Chinese?", answer: "你为什么学中文？", accept: ["你为什么学中文", "你为什么学汉语"] },
  ],
  // 53: Preposition 从 (from)
  53: [
    { type: "fill", sentence: "我___北京来。", answer: "从", distractors: ["在", "到", "去"] },
    { type: "mcq", prompt: "从 indicates:", options: ["starting point (from)", "destination (to)", "location (at)", "direction (toward)"], answer: 0 },
    { type: "translate", english: "I come from China.", answer: "我从中国来。", accept: ["我从中国来", "我是从中国来的"] },
    { type: "reorder", english: "From home to school.", words: ["学校", "到", "从", "家"], answer: ["从", "家", "到", "学校"] },
  ],
  // 54: Preposition 到 (to/until)
  54: [
    { type: "fill", sentence: "我___学校了。", answer: "到", distractors: ["从", "在", "去"] },
    { type: "mcq", prompt: "到 indicates:", options: ["arrival/destination", "departure", "location", "origin"], answer: 0 },
    { type: "translate", english: "I arrived at the airport.", answer: "我到机场了。", accept: ["我到机场了", "我到了机场"] },
  ],
  // 55: Preposition 给 (to/for someone)
  55: [
    { type: "fill", sentence: "请___我一杯水。", answer: "给", distractors: ["到", "从", "在"] },
    { type: "mcq", prompt: "给 is used to:", options: ["indicate a recipient", "indicate a location", "indicate time", "indicate origin"], answer: 0 },
    { type: "translate", english: "Give me the book.", answer: "给我那本书。", accept: ["把书给我", "给我那本书", "给我书"] },
    { type: "reorder", english: "I'll call you.", words: ["打电话", "你", "我", "给"], answer: ["我", "给", "你", "打电话"] },
  ],
  // 56: Conjunction 和 (and)
  56: [
    { type: "fill", sentence: "我___他是朋友。", answer: "和", distractors: ["也", "都", "很"] },
    { type: "mcq", prompt: "和 connects:", options: ["nouns/pronouns", "verbs", "sentences", "adjectives"], answer: 0 },
    { type: "translate", english: "Dad and Mom", answer: "爸爸和妈妈", accept: ["爸爸和妈妈"] },
  ],
  // 57: Because...so with 因为...所以
  57: [
    { type: "fill", sentence: "___下雨了，所以我没去。", answer: "因为", distractors: ["所以", "但是", "可是"] },
    { type: "mcq", prompt: "因为...所以 means:", options: ["because...therefore", "although...but", "if...then", "not only...but also"], answer: 0 },
    { type: "translate", english: "Because I'm sick, I'm not going.", answer: "因为我生病了，所以我不去。", accept: ["因为我生病了，所以不去", "因为生病了，所以我不去"] },
    { type: "reorder", english: "Because it's raining, I take an umbrella.", words: ["所以", "因为", "下雨", "带伞", "我"], answer: ["因为", "下雨", "所以", "我", "带伞"] },
  ],
  // 58: Although with 虽然...但是
  58: [
    { type: "fill", sentence: "___他很忙，但是他很开心。", answer: "虽然", distractors: ["因为", "如果", "所以"] },
    { type: "mcq", prompt: "虽然...但是 means:", options: ["although...but", "because...therefore", "if...then", "not only...but also"], answer: 0 },
    { type: "translate", english: "Although it's cold, I want to go out.", answer: "虽然很冷，但是我想出去。", accept: ["虽然很冷，但是我想出去", "虽然冷，但是我想出去"] },
  ],
  // 59: If with 如果...就
  59: [
    { type: "fill", sentence: "___你有时间，就来我家吧。", answer: "如果", distractors: ["因为", "虽然", "所以"] },
    { type: "mcq", prompt: "如果...就 means:", options: ["if...then", "although...but", "because...so", "not only...also"], answer: 0 },
    { type: "translate", english: "If it rains, I won't go.", answer: "如果下雨，我就不去。", accept: ["如果下雨我就不去", "如果下雨，就不去了"] },
    { type: "reorder", english: "If you're tired, rest.", words: ["就", "如果", "休息", "累", "你"], answer: ["如果", "你", "累", "就", "休息"] },
  ],
};
