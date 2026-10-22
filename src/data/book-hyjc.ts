export interface BookWord {
  hanzi: string;
  pinyin: string;
  english: string;
}

export interface BookGrammar {
  pattern: string;
  explanation: string;
  examples: { zh: string; en: string }[];
}

export interface BookLesson {
  id: number;
  title: string;
  titleEn: string;
  words: BookWord[];
  grammar: BookGrammar[];
}

export const bookTitle = "汉语教程";
export const bookTitleEn = "Chinese Course — Basic";

export const lessons: BookLesson[] = [
  {
    id: 1,
    title: "你好",
    titleEn: "Hello",
    words: [
      { hanzi: "你", pinyin: "nǐ", english: "you" },
      { hanzi: "好", pinyin: "hǎo", english: "good; well" },
      { hanzi: "你好", pinyin: "nǐ hǎo", english: "hello" },
      { hanzi: "我", pinyin: "wǒ", english: "I; me" },
      { hanzi: "是", pinyin: "shì", english: "to be" },
      { hanzi: "老师", pinyin: "lǎoshī", english: "teacher" },
      { hanzi: "学生", pinyin: "xuéshēng", english: "student" },
      { hanzi: "谢谢", pinyin: "xièxie", english: "thank you" },
      { hanzi: "不", pinyin: "bù", english: "not; no" },
      { hanzi: "客气", pinyin: "kèqi", english: "polite; courteous" },
      { hanzi: "再见", pinyin: "zàijiàn", english: "goodbye" },
      { hanzi: "请", pinyin: "qǐng", english: "please" },
      { hanzi: "您", pinyin: "nín", english: "you (formal)" },
      { hanzi: "问", pinyin: "wèn", english: "to ask" },
    ],
    grammar: [
      {
        pattern: "你好",
        explanation: "Basic greeting used when meeting someone.",
        examples: [
          { zh: "你好，老师！", en: "Hello, teacher!" },
          { zh: "你好，我是学生。", en: "Hello, I am a student." },
        ],
      },
      {
        pattern: "我是 + N",
        explanation: "Use 是 (shì) to identify yourself or someone. 'I am [noun].'",
        examples: [
          { zh: "我是老师。", en: "I am a teacher." },
          { zh: "我是学生。", en: "I am a student." },
        ],
      },
      {
        pattern: "不客气",
        explanation: "Response to 谢谢 (thank you). Means 'you're welcome.'",
        examples: [
          { zh: "谢谢！——不客气。", en: "Thank you! — You're welcome." },
          { zh: "谢谢老师！——不客气。", en: "Thank you, teacher! — You're welcome." },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "你忙吗",
    titleEn: "Are You Busy?",
    words: [
      { hanzi: "忙", pinyin: "máng", english: "busy" },
      { hanzi: "吗", pinyin: "ma", english: "question particle" },
      { hanzi: "很", pinyin: "hěn", english: "very" },
      { hanzi: "也", pinyin: "yě", english: "also; too" },
      { hanzi: "他", pinyin: "tā", english: "he; him" },
      { hanzi: "她", pinyin: "tā", english: "she; her" },
      { hanzi: "我们", pinyin: "wǒmen", english: "we; us" },
      { hanzi: "呢", pinyin: "ne", english: "and you? (particle)" },
      { hanzi: "都", pinyin: "dōu", english: "all; both" },
      { hanzi: "累", pinyin: "lèi", english: "tired" },
      { hanzi: "高兴", pinyin: "gāoxìng", english: "happy; glad" },
      { hanzi: "你们", pinyin: "nǐmen", english: "you (plural)" },
      { hanzi: "他们", pinyin: "tāmen", english: "they; them" },
    ],
    grammar: [
      {
        pattern: "S + Adj + 吗？",
        explanation: "Add 吗 at the end of a statement to turn it into a yes/no question.",
        examples: [
          { zh: "你忙吗？", en: "Are you busy?" },
          { zh: "你好吗？", en: "How are you?" },
        ],
      },
      {
        pattern: "也 (also)",
        explanation: "也 goes before the verb or adjective. It means 'also/too.'",
        examples: [
          { zh: "我很忙，他也很忙。", en: "I'm busy, he is also busy." },
          { zh: "我是学生，她也是学生。", en: "I'm a student, she is also a student." },
        ],
      },
      {
        pattern: "S + 呢？",
        explanation: "Use 呢 to ask 'and what about [someone]?' after a statement.",
        examples: [
          { zh: "我很好，你呢？", en: "I'm fine, and you?" },
          { zh: "他很忙，你呢？", en: "He's busy, and you?" },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "你是哪国人",
    titleEn: "What's Your Nationality?",
    words: [
      { hanzi: "哪", pinyin: "nǎ", english: "which; what" },
      { hanzi: "国", pinyin: "guó", english: "country" },
      { hanzi: "人", pinyin: "rén", english: "person; people" },
      { hanzi: "中国", pinyin: "Zhōngguó", english: "China" },
      { hanzi: "美国", pinyin: "Měiguó", english: "USA" },
      { hanzi: "英国", pinyin: "Yīngguó", english: "UK" },
      { hanzi: "日本", pinyin: "Rìběn", english: "Japan" },
      { hanzi: "韩国", pinyin: "Hánguó", english: "South Korea" },
      { hanzi: "法国", pinyin: "Fǎguó", english: "France" },
      { hanzi: "德国", pinyin: "Déguó", english: "Germany" },
      { hanzi: "俄罗斯", pinyin: "Éluósī", english: "Russia" },
      { hanzi: "哪儿", pinyin: "nǎr", english: "where" },
      { hanzi: "学习", pinyin: "xuéxí", english: "to study" },
      { hanzi: "汉语", pinyin: "Hànyǔ", english: "Chinese language" },
    ],
    grammar: [
      {
        pattern: "A 是 B",
        explanation: "Use 是 to equate A and B: 'A is B.' Negate with 不是.",
        examples: [
          { zh: "我是中国人。", en: "I am Chinese." },
          { zh: "她不是美国人。", en: "She is not American." },
        ],
      },
      {
        pattern: "哪国人？",
        explanation: "Ask someone's nationality: 你是哪国人？",
        examples: [
          { zh: "你是哪国人？——我是俄罗斯人。", en: "What's your nationality? — I'm Russian." },
          { zh: "他是哪国人？——他是法国人。", en: "What's his nationality? — He's French." },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "认识你很高兴",
    titleEn: "Nice to Meet You",
    words: [
      { hanzi: "认识", pinyin: "rènshi", english: "to know; to meet" },
      { hanzi: "名字", pinyin: "míngzi", english: "name" },
      { hanzi: "叫", pinyin: "jiào", english: "to be called" },
      { hanzi: "什么", pinyin: "shénme", english: "what" },
      { hanzi: "贵姓", pinyin: "guìxìng", english: "what's your surname (polite)" },
      { hanzi: "介绍", pinyin: "jièshào", english: "to introduce" },
      { hanzi: "一下", pinyin: "yíxià", english: "a bit (softener)" },
      { hanzi: "朋友", pinyin: "péngyou", english: "friend" },
      { hanzi: "先生", pinyin: "xiānsheng", english: "Mr.; sir" },
      { hanzi: "女士", pinyin: "nǚshì", english: "Ms.; lady" },
      { hanzi: "这", pinyin: "zhè", english: "this" },
      { hanzi: "那", pinyin: "nà", english: "that" },
      { hanzi: "同学", pinyin: "tóngxué", english: "classmate" },
      { hanzi: "姓", pinyin: "xìng", english: "surname; to be surnamed" },
    ],
    grammar: [
      {
        pattern: "S + 叫 + Name",
        explanation: "Use 叫 to say someone's name: 'to be called.'",
        examples: [
          { zh: "我叫李明。", en: "My name is Li Ming." },
          { zh: "你叫什么名字？", en: "What is your name?" },
        ],
      },
      {
        pattern: "V + 一下",
        explanation: "Add 一下 after a verb to soften it: 'do it a bit / briefly.'",
        examples: [
          { zh: "我来介绍一下。", en: "Let me introduce (briefly)." },
          { zh: "请等一下。", en: "Please wait a moment." },
        ],
      },
      {
        pattern: "这是 / 那是",
        explanation: "Use 这是 (this is) and 那是 (that is) to point out things or people.",
        examples: [
          { zh: "这是我的朋友。", en: "This is my friend." },
          { zh: "那是我们的老师。", en: "That is our teacher." },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "食堂在哪儿",
    titleEn: "Where Is the Cafeteria?",
    words: [
      { hanzi: "食堂", pinyin: "shítáng", english: "cafeteria; canteen" },
      { hanzi: "在", pinyin: "zài", english: "at; in; to be located" },
      { hanzi: "这儿", pinyin: "zhèr", english: "here" },
      { hanzi: "那儿", pinyin: "nàr", english: "there" },
      { hanzi: "图书馆", pinyin: "túshūguǎn", english: "library" },
      { hanzi: "教室", pinyin: "jiàoshì", english: "classroom" },
      { hanzi: "宿舍", pinyin: "sùshè", english: "dormitory" },
      { hanzi: "银行", pinyin: "yínháng", english: "bank" },
      { hanzi: "商店", pinyin: "shāngdiàn", english: "shop; store" },
      { hanzi: "医院", pinyin: "yīyuàn", english: "hospital" },
      { hanzi: "前面", pinyin: "qiánmiàn", english: "in front of" },
      { hanzi: "后面", pinyin: "hòumiàn", english: "behind" },
      { hanzi: "旁边", pinyin: "pángbiān", english: "beside; next to" },
      { hanzi: "对面", pinyin: "duìmiàn", english: "opposite; across from" },
      { hanzi: "里面", pinyin: "lǐmiàn", english: "inside" },
    ],
    grammar: [
      {
        pattern: "A 在 B",
        explanation: "Use 在 to express location: 'A is at/in B.'",
        examples: [
          { zh: "食堂在图书馆旁边。", en: "The cafeteria is next to the library." },
          { zh: "银行在商店对面。", en: "The bank is across from the store." },
        ],
      },
      {
        pattern: "Position words: 前面/后面/旁边/对面/里面",
        explanation: "Place position words after a noun to indicate relative location.",
        examples: [
          { zh: "教室在宿舍前面。", en: "The classroom is in front of the dormitory." },
          { zh: "老师在教室里面。", en: "The teacher is inside the classroom." },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "你家有几口人",
    titleEn: "How Many People in Your Family?",
    words: [
      { hanzi: "家", pinyin: "jiā", english: "home; family" },
      { hanzi: "有", pinyin: "yǒu", english: "to have" },
      { hanzi: "几", pinyin: "jǐ", english: "how many" },
      { hanzi: "口", pinyin: "kǒu", english: "measure word for people (family)" },
      { hanzi: "爸爸", pinyin: "bàba", english: "father; dad" },
      { hanzi: "妈妈", pinyin: "māma", english: "mother; mom" },
      { hanzi: "哥哥", pinyin: "gēge", english: "older brother" },
      { hanzi: "姐姐", pinyin: "jiějie", english: "older sister" },
      { hanzi: "弟弟", pinyin: "dìdi", english: "younger brother" },
      { hanzi: "妹妹", pinyin: "mèimei", english: "younger sister" },
      { hanzi: "和", pinyin: "hé", english: "and" },
      { hanzi: "个", pinyin: "gè", english: "general measure word" },
      { hanzi: "两", pinyin: "liǎng", english: "two (with measure word)" },
      { hanzi: "没有", pinyin: "méi yǒu", english: "don't have; there isn't" },
      { hanzi: "孩子", pinyin: "háizi", english: "child; children" },
    ],
    grammar: [
      {
        pattern: "S + 有 + O",
        explanation: "有 means 'to have.' Negate with 没有 (not 不有).",
        examples: [
          { zh: "我有一个哥哥。", en: "I have an older brother." },
          { zh: "他没有弟弟。", en: "He doesn't have a younger brother." },
        ],
      },
      {
        pattern: "几 + MW + N？",
        explanation: "Use 几 to ask 'how many' (expects a small number). Requires a measure word.",
        examples: [
          { zh: "你家有几口人？", en: "How many people are in your family?" },
          { zh: "你有几个朋友？", en: "How many friends do you have?" },
        ],
      },
      {
        pattern: "两 vs 二",
        explanation: "Use 两 (not 二) before measure words when counting things.",
        examples: [
          { zh: "我有两个姐姐。", en: "I have two older sisters." },
          { zh: "他有两个孩子。", en: "He has two children." },
        ],
      },
    ],
  },
  {
    id: 7,
    title: "现在几点",
    titleEn: "What Time Is It?",
    words: [
      { hanzi: "现在", pinyin: "xiànzài", english: "now" },
      { hanzi: "点", pinyin: "diǎn", english: "o'clock" },
      { hanzi: "分", pinyin: "fēn", english: "minute" },
      { hanzi: "半", pinyin: "bàn", english: "half" },
      { hanzi: "刻", pinyin: "kè", english: "quarter (15 min)" },
      { hanzi: "差", pinyin: "chà", english: "lacking; before" },
      { hanzi: "上午", pinyin: "shàngwǔ", english: "morning (AM)" },
      { hanzi: "下午", pinyin: "xiàwǔ", english: "afternoon (PM)" },
      { hanzi: "晚上", pinyin: "wǎnshang", english: "evening" },
      { hanzi: "早上", pinyin: "zǎoshang", english: "early morning" },
      { hanzi: "起床", pinyin: "qǐ chuáng", english: "to get up" },
      { hanzi: "睡觉", pinyin: "shuì jiào", english: "to sleep" },
      { hanzi: "吃饭", pinyin: "chī fàn", english: "to eat (a meal)" },
      { hanzi: "上课", pinyin: "shàng kè", english: "to attend class" },
      { hanzi: "下课", pinyin: "xià kè", english: "class is over" },
    ],
    grammar: [
      {
        pattern: "几点？/ ...点...分",
        explanation: "Time is read as: [hour] 点 [minutes] 分. Ask with 几点.",
        examples: [
          { zh: "现在几点？——现在八点半。", en: "What time is it? — It's 8:30." },
          { zh: "现在下午三点十五分。", en: "It's 3:15 PM now." },
        ],
      },
      {
        pattern: "差 + min + 点",
        explanation: "差 means 'before/to': 差五分八点 = 5 to 8 (7:55).",
        examples: [
          { zh: "差十分九点。", en: "It's ten to nine (8:50)." },
          { zh: "差一刻十点。", en: "It's a quarter to ten (9:45)." },
        ],
      },
      {
        pattern: "Time + V",
        explanation: "Time words come before the verb in Chinese: 'When + do what.'",
        examples: [
          { zh: "我早上七点起床。", en: "I get up at 7 in the morning." },
          { zh: "我们八点上课。", en: "We have class at 8." },
        ],
      },
    ],
  },
  {
    id: 8,
    title: "昨天你做什么了",
    titleEn: "What Did You Do Yesterday?",
    words: [
      { hanzi: "昨天", pinyin: "zuótiān", english: "yesterday" },
      { hanzi: "今天", pinyin: "jīntiān", english: "today" },
      { hanzi: "明天", pinyin: "míngtiān", english: "tomorrow" },
      { hanzi: "做", pinyin: "zuò", english: "to do; to make" },
      { hanzi: "了", pinyin: "le", english: "completion particle" },
      { hanzi: "去", pinyin: "qù", english: "to go" },
      { hanzi: "来", pinyin: "lái", english: "to come" },
      { hanzi: "买", pinyin: "mǎi", english: "to buy" },
      { hanzi: "吃", pinyin: "chī", english: "to eat" },
      { hanzi: "喝", pinyin: "hē", english: "to drink" },
      { hanzi: "看", pinyin: "kàn", english: "to see; to watch; to read" },
      { hanzi: "回", pinyin: "huí", english: "to return" },
      { hanzi: "上班", pinyin: "shàng bān", english: "to go to work" },
      { hanzi: "下班", pinyin: "xià bān", english: "to finish work" },
    ],
    grammar: [
      {
        pattern: "V + 了",
        explanation: "了 after a verb indicates a completed action (past tense).",
        examples: [
          { zh: "我昨天买了一本书。", en: "I bought a book yesterday." },
          { zh: "他吃了早饭。", en: "He ate breakfast." },
        ],
      },
      {
        pattern: "没 + V (negating past)",
        explanation: "Negate completed actions with 没(有), NOT 不. Drop 了.",
        examples: [
          { zh: "我昨天没去上班。", en: "I didn't go to work yesterday." },
          { zh: "她没吃早饭。", en: "She didn't eat breakfast." },
        ],
      },
      {
        pattern: "Time word placement",
        explanation: "Time words (昨天, 今天, 明天) go before the verb or at the start.",
        examples: [
          { zh: "我明天去图书馆。", en: "I'm going to the library tomorrow." },
          { zh: "昨天他来了。", en: "He came yesterday." },
        ],
      },
    ],
  },
  {
    id: 9,
    title: "你想买什么",
    titleEn: "What Do You Want to Buy?",
    words: [
      { hanzi: "想", pinyin: "xiǎng", english: "to want; to think" },
      { hanzi: "要", pinyin: "yào", english: "to want; to need" },
      { hanzi: "多少", pinyin: "duōshao", english: "how many; how much" },
      { hanzi: "钱", pinyin: "qián", english: "money" },
      { hanzi: "块", pinyin: "kuài", english: "yuan (spoken)" },
      { hanzi: "元", pinyin: "yuán", english: "yuan (formal)" },
      { hanzi: "毛", pinyin: "máo", english: "0.1 yuan (spoken)" },
      { hanzi: "贵", pinyin: "guì", english: "expensive" },
      { hanzi: "便宜", pinyin: "piányi", english: "cheap" },
      { hanzi: "可以", pinyin: "kěyǐ", english: "can; may" },
      { hanzi: "给", pinyin: "gěi", english: "to give" },
      { hanzi: "找", pinyin: "zhǎo", english: "to look for; to give change" },
      { hanzi: "苹果", pinyin: "píngguǒ", english: "apple" },
      { hanzi: "水", pinyin: "shuǐ", english: "water" },
      { hanzi: "太", pinyin: "tài", english: "too (excessive)" },
    ],
    grammar: [
      {
        pattern: "想 + V",
        explanation: "想 before a verb means 'want to / would like to.'",
        examples: [
          { zh: "我想买苹果。", en: "I want to buy apples." },
          { zh: "你想喝什么？", en: "What would you like to drink?" },
        ],
      },
      {
        pattern: "多少钱？",
        explanation: "Ask the price: 多少钱 = how much money?",
        examples: [
          { zh: "这个多少钱？", en: "How much is this?" },
          { zh: "苹果多少钱一斤？", en: "How much are the apples per jin?" },
        ],
      },
      {
        pattern: "太 + Adj + 了",
        explanation: "太...了 means 'too [adjective].'",
        examples: [
          { zh: "太贵了！", en: "Too expensive!" },
          { zh: "这个太便宜了。", en: "This is too cheap." },
        ],
      },
    ],
  },
  {
    id: 10,
    title: "你喜欢什么颜色",
    titleEn: "What Color Do You Like?",
    words: [
      { hanzi: "喜欢", pinyin: "xǐhuan", english: "to like" },
      { hanzi: "颜色", pinyin: "yánsè", english: "color" },
      { hanzi: "红", pinyin: "hóng", english: "red" },
      { hanzi: "黄", pinyin: "huáng", english: "yellow" },
      { hanzi: "蓝", pinyin: "lán", english: "blue" },
      { hanzi: "绿", pinyin: "lǜ", english: "green" },
      { hanzi: "白", pinyin: "bái", english: "white" },
      { hanzi: "黑", pinyin: "hēi", english: "black" },
      { hanzi: "大", pinyin: "dà", english: "big; large" },
      { hanzi: "小", pinyin: "xiǎo", english: "small; little" },
      { hanzi: "件", pinyin: "jiàn", english: "MW for clothes (upper)" },
      { hanzi: "条", pinyin: "tiáo", english: "MW for pants, roads, fish" },
      { hanzi: "穿", pinyin: "chuān", english: "to wear" },
      { hanzi: "试", pinyin: "shì", english: "to try" },
      { hanzi: "合适", pinyin: "héshì", english: "suitable; fits" },
    ],
    grammar: [
      {
        pattern: "喜欢 + N / V",
        explanation: "喜欢 can be followed by a noun or verb: 'like something / doing something.'",
        examples: [
          { zh: "我喜欢红颜色。", en: "I like the color red." },
          { zh: "她喜欢看书。", en: "She likes reading." },
        ],
      },
      {
        pattern: "Adj + 的 + N",
        explanation: "Use 的 between an adjective and noun as an attributive: 'big book = 大的书.'",
        examples: [
          { zh: "我要红的。", en: "I want the red one." },
          { zh: "这件大的很合适。", en: "This big one fits well." },
        ],
      },
      {
        pattern: "Measure words: 件/条",
        explanation: "件 for upper-body clothing, 条 for pants/scarves/long things.",
        examples: [
          { zh: "一件衬衫", en: "one shirt" },
          { zh: "两条裤子", en: "two pairs of pants" },
        ],
      },
    ],
  },
  {
    id: 11,
    title: "你怎么去",
    titleEn: "How Do You Get There?",
    words: [
      { hanzi: "怎么", pinyin: "zěnme", english: "how" },
      { hanzi: "坐", pinyin: "zuò", english: "to sit; to take (transport)" },
      { hanzi: "车", pinyin: "chē", english: "vehicle; car" },
      { hanzi: "公共汽车", pinyin: "gōnggòng qìchē", english: "bus" },
      { hanzi: "出租车", pinyin: "chūzūchē", english: "taxi" },
      { hanzi: "地铁", pinyin: "dìtiě", english: "subway" },
      { hanzi: "骑", pinyin: "qí", english: "to ride" },
      { hanzi: "自行车", pinyin: "zìxíngchē", english: "bicycle" },
      { hanzi: "走", pinyin: "zǒu", english: "to walk" },
      { hanzi: "路", pinyin: "lù", english: "road" },
      { hanzi: "到", pinyin: "dào", english: "to arrive; to" },
      { hanzi: "远", pinyin: "yuǎn", english: "far" },
      { hanzi: "近", pinyin: "jìn", english: "near; close" },
      { hanzi: "站", pinyin: "zhàn", english: "station; stop" },
      { hanzi: "从", pinyin: "cóng", english: "from" },
    ],
    grammar: [
      {
        pattern: "怎么 + V？",
        explanation: "怎么 before a verb asks 'how': 你怎么去？= How do you go?",
        examples: [
          { zh: "你怎么去学校？", en: "How do you get to school?" },
          { zh: "这个字怎么读？", en: "How do you read this character?" },
        ],
      },
      {
        pattern: "坐 / 骑 + transport",
        explanation: "坐 for vehicles you sit in, 骑 for vehicles you ride on.",
        examples: [
          { zh: "我坐地铁去上班。", en: "I take the subway to work." },
          { zh: "他骑自行车去学校。", en: "He rides a bike to school." },
        ],
      },
      {
        pattern: "从 A 到 B",
        explanation: "'From A to B' pattern for distance or travel.",
        examples: [
          { zh: "从这儿到银行远吗？", en: "Is it far from here to the bank?" },
          { zh: "从宿舍到教室很近。", en: "It's close from the dorm to the classroom." },
        ],
      },
    ],
  },
  {
    id: 12,
    title: "今天天气怎么样",
    titleEn: "How's the Weather Today?",
    words: [
      { hanzi: "天气", pinyin: "tiānqì", english: "weather" },
      { hanzi: "怎么样", pinyin: "zěnmeyàng", english: "how is it?" },
      { hanzi: "冷", pinyin: "lěng", english: "cold" },
      { hanzi: "热", pinyin: "rè", english: "hot" },
      { hanzi: "下雨", pinyin: "xià yǔ", english: "to rain" },
      { hanzi: "下雪", pinyin: "xià xuě", english: "to snow" },
      { hanzi: "风", pinyin: "fēng", english: "wind" },
      { hanzi: "晴天", pinyin: "qíngtiān", english: "sunny day" },
      { hanzi: "阴天", pinyin: "yīntiān", english: "cloudy day" },
      { hanzi: "度", pinyin: "dù", english: "degree (temperature)" },
      { hanzi: "春天", pinyin: "chūntiān", english: "spring" },
      { hanzi: "夏天", pinyin: "xiàtiān", english: "summer" },
      { hanzi: "秋天", pinyin: "qiūtiān", english: "autumn" },
      { hanzi: "冬天", pinyin: "dōngtiān", english: "winter" },
      { hanzi: "比", pinyin: "bǐ", english: "compared to; than" },
    ],
    grammar: [
      {
        pattern: "...怎么样？",
        explanation: "怎么样 asks 'how is it?' for opinions, weather, situations.",
        examples: [
          { zh: "今天天气怎么样？", en: "How's the weather today?" },
          { zh: "北京的冬天怎么样？", en: "How's winter in Beijing?" },
        ],
      },
      {
        pattern: "A 比 B + Adj",
        explanation: "比 makes comparisons: 'A is more [adj] than B.'",
        examples: [
          { zh: "今天比昨天冷。", en: "Today is colder than yesterday." },
          { zh: "夏天比春天热。", en: "Summer is hotter than spring." },
        ],
      },
    ],
  },
  {
    id: 13,
    title: "我正在学中文",
    titleEn: "I'm Studying Chinese",
    words: [
      { hanzi: "正在", pinyin: "zhèngzài", english: "in the middle of (doing)" },
      { hanzi: "中文", pinyin: "Zhōngwén", english: "Chinese (language)" },
      { hanzi: "英文", pinyin: "Yīngwén", english: "English (language)" },
      { hanzi: "说", pinyin: "shuō", english: "to speak; to say" },
      { hanzi: "读", pinyin: "dú", english: "to read aloud" },
      { hanzi: "写", pinyin: "xiě", english: "to write" },
      { hanzi: "听", pinyin: "tīng", english: "to listen" },
      { hanzi: "懂", pinyin: "dǒng", english: "to understand" },
      { hanzi: "会", pinyin: "huì", english: "can; know how to" },
      { hanzi: "能", pinyin: "néng", english: "can; be able to" },
      { hanzi: "难", pinyin: "nán", english: "difficult" },
      { hanzi: "容易", pinyin: "róngyì", english: "easy" },
      { hanzi: "练习", pinyin: "liànxí", english: "to practice" },
      { hanzi: "复习", pinyin: "fùxí", english: "to review" },
    ],
    grammar: [
      {
        pattern: "正在 / 在 + V",
        explanation: "Indicates an action in progress (like English '-ing').",
        examples: [
          { zh: "我正在学中文。", en: "I'm studying Chinese." },
          { zh: "她在写作业。", en: "She is doing homework." },
        ],
      },
      {
        pattern: "会 / 能 / 可以",
        explanation: "会 = learned ability, 能 = physical/circumstantial ability, 可以 = permission.",
        examples: [
          { zh: "我会说中文。", en: "I can speak Chinese." },
          { zh: "你能听懂吗？", en: "Can you understand (what you hear)?" },
        ],
      },
      {
        pattern: "V + 得/不 + complement",
        explanation: "得 marks possibility: 听得懂 (can understand), 听不懂 (can't understand).",
        examples: [
          { zh: "我听得懂。", en: "I can understand (by listening)." },
          { zh: "这个字我看不懂。", en: "I can't understand this character." },
        ],
      },
    ],
  },
  {
    id: 14,
    title: "你去过中国吗",
    titleEn: "Have You Been to China?",
    words: [
      { hanzi: "过", pinyin: "guò", english: "experiential particle (ever)" },
      { hanzi: "次", pinyin: "cì", english: "time(s) (frequency)" },
      { hanzi: "旅游", pinyin: "lǚyóu", english: "to travel; tourism" },
      { hanzi: "参观", pinyin: "cānguān", english: "to visit (a place)" },
      { hanzi: "照片", pinyin: "zhàopiàn", english: "photograph" },
      { hanzi: "照相", pinyin: "zhào xiàng", english: "to take a photo" },
      { hanzi: "长城", pinyin: "Chángchéng", english: "Great Wall" },
      { hanzi: "故宫", pinyin: "Gùgōng", english: "Forbidden City" },
      { hanzi: "已经", pinyin: "yǐjīng", english: "already" },
      { hanzi: "还没", pinyin: "hái méi", english: "haven't yet" },
      { hanzi: "打算", pinyin: "dǎsuan", english: "to plan; to intend" },
      { hanzi: "计划", pinyin: "jìhuà", english: "plan" },
      { hanzi: "放假", pinyin: "fàng jià", english: "to have a holiday" },
    ],
    grammar: [
      {
        pattern: "V + 过",
        explanation: "过 after a verb marks past experience: 'have ever done.'",
        examples: [
          { zh: "我去过中国。", en: "I've been to China." },
          { zh: "你吃过北京烤鸭吗？", en: "Have you ever eaten Peking duck?" },
        ],
      },
      {
        pattern: "V + 过 + Number + 次",
        explanation: "State how many times with 次: 'have done N times.'",
        examples: [
          { zh: "我去过两次长城。", en: "I've been to the Great Wall twice." },
          { zh: "他来过三次中国。", en: "He's been to China three times." },
        ],
      },
      {
        pattern: "还没 + V + 呢",
        explanation: "Express 'haven't yet done something.'",
        examples: [
          { zh: "我还没去过故宫呢。", en: "I haven't been to the Forbidden City yet." },
          { zh: "她还没吃饭呢。", en: "She hasn't eaten yet." },
        ],
      },
    ],
  },
  {
    id: 15,
    title: "你的爱好是什么",
    titleEn: "What Are Your Hobbies?",
    words: [
      { hanzi: "爱好", pinyin: "àihào", english: "hobby; interest" },
      { hanzi: "运动", pinyin: "yùndòng", english: "sports; exercise" },
      { hanzi: "游泳", pinyin: "yóuyǒng", english: "to swim" },
      { hanzi: "打球", pinyin: "dǎ qiú", english: "to play ball" },
      { hanzi: "跑步", pinyin: "pǎo bù", english: "to run; jogging" },
      { hanzi: "唱歌", pinyin: "chàng gē", english: "to sing" },
      { hanzi: "跳舞", pinyin: "tiào wǔ", english: "to dance" },
      { hanzi: "画画", pinyin: "huà huà", english: "to draw; to paint" },
      { hanzi: "上网", pinyin: "shàng wǎng", english: "to go online" },
      { hanzi: "看书", pinyin: "kàn shū", english: "to read books" },
      { hanzi: "电影", pinyin: "diànyǐng", english: "movie; film" },
      { hanzi: "音乐", pinyin: "yīnyuè", english: "music" },
      { hanzi: "经常", pinyin: "jīngcháng", english: "often" },
      { hanzi: "有时候", pinyin: "yǒu shíhou", english: "sometimes" },
      { hanzi: "觉得", pinyin: "juéde", english: "to feel; to think" },
    ],
    grammar: [
      {
        pattern: "喜欢 + V",
        explanation: "喜欢 + verb means 'like to do something.'",
        examples: [
          { zh: "我喜欢游泳。", en: "I like swimming." },
          { zh: "她喜欢唱歌和跳舞。", en: "She likes singing and dancing." },
        ],
      },
      {
        pattern: "经常 / 有时候 / 从不",
        explanation: "Frequency adverbs go before the verb.",
        examples: [
          { zh: "我经常运动。", en: "I often exercise." },
          { zh: "他有时候看电影。", en: "He sometimes watches movies." },
        ],
      },
      {
        pattern: "觉得 + clause",
        explanation: "觉得 means 'to think/feel that...' for opinions.",
        examples: [
          { zh: "我觉得游泳很好。", en: "I think swimming is great." },
          { zh: "你觉得中文难吗？", en: "Do you think Chinese is hard?" },
        ],
      },
    ],
  },
];
