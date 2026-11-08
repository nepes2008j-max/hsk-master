// Original graded stories (written by the local AI, reviewed by hand). Pinyin per word comes from pinyin-pro at merge time.
export interface StoryToken { w: string; p: string }
export interface StorySentence { zh: string; en: string; ru: string; tokens: StoryToken[] }
export interface Story {
  id: string;
  level: 1 | 2 | 3;
  title: { zh: string; en: string; ru: string };
  sentences: StorySentence[];
  questions: { q: string; options: string[]; answer: number }[];
}

export const stories: Story[] = [
 {
  "id": "1-1",
  "level": 1,
  "title": {
   "zh": "我的家",
   "en": "My family",
   "ru": "Моя семья"
  },
  "sentences": [
   {
    "zh": "小明有家。",
    "en": "Xiaoming has a home.",
    "ru": "У Сяомина есть дом.",
    "tokens": [
     {
      "w": "小明",
      "p": "Xiǎomíng"
     },
     {
      "w": "有",
      "p": "yǒu"
     },
     {
      "w": "家",
      "p": "jiā"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明家在公园旁边。",
    "en": "Xiaoming's home is next to the park.",
    "ru": "Дом Сяомина находится рядом с парком.",
    "tokens": [
     {
      "w": "小明",
      "p": "Xiǎomíng"
     },
     {
      "w": "家",
      "p": "jiā"
     },
     {
      "w": "在",
      "p": "zài"
     },
     {
      "w": "公园",
      "p": "gōngyuán"
     },
     {
      "w": "旁边",
      "p": "pángbiān"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小红是小明的妹妹。",
    "en": "Xiaohong is Xiaoming's sister.",
    "ru": "Сяохун — сестра Сяомина.",
    "tokens": [
     {
      "w": "小",
      "p": "xiǎo"
     },
     {
      "w": "红",
      "p": "hóng"
     },
     {
      "w": "是",
      "p": "shì"
     },
     {
      "w": "小明",
      "p": "Xiǎomíng"
     },
     {
      "w": "的",
      "p": "de"
     },
     {
      "w": "妹妹",
      "p": "mèimei"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克和艾米丽是外国朋友。",
    "en": "Mark and Emily are foreign friends.",
    "ru": "Марк и Эмили — иностранные друзья.",
    "tokens": [
     {
      "w": "马克",
      "p": "Mǎkè"
     },
     {
      "w": "和",
      "p": "hé"
     },
     {
      "w": "艾",
      "p": "ài"
     },
     {
      "w": "米",
      "p": "mǐ"
     },
     {
      "w": "丽",
      "p": "lì"
     },
     {
      "w": "是",
      "p": "shì"
     },
     {
      "w": "外国",
      "p": "wàiguó"
     },
     {
      "w": "朋友",
      "p": "péngyǒu"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "他们有狗。",
    "en": "They have a dog.",
    "ru": "У них есть собака.",
    "tokens": [
     {
      "w": "他们",
      "p": "tāmen"
     },
     {
      "w": "有",
      "p": "yǒu"
     },
     {
      "w": "狗",
      "p": "gǒu"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "狗在客厅。",
    "en": "The dog is in the living room.",
    "ru": "Собака в гостиной.",
    "tokens": [
     {
      "w": "狗",
      "p": "gǒu"
     },
     {
      "w": "在",
      "p": "zài"
     },
     {
      "w": "客厅",
      "p": "kètīng"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小红和马克玩球。",
    "en": "Xiaohong and Mark play ball.",
    "ru": "Сяохун и Марк играют в мяч.",
    "tokens": [
     {
      "w": "小",
      "p": "xiǎo"
     },
     {
      "w": "红",
      "p": "hóng"
     },
     {
      "w": "和",
      "p": "hé"
     },
     {
      "w": "马克",
      "p": "Mǎkè"
     },
     {
      "w": "玩球",
      "p": "wánqiú"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "艾米丽有花。",
    "en": "Emily has flowers.",
    "ru": "У Эмили есть цветы.",
    "tokens": [
     {
      "w": "艾",
      "p": "ài"
     },
     {
      "w": "米",
      "p": "mǐ"
     },
     {
      "w": "丽",
      "p": "lì"
     },
     {
      "w": "有",
      "p": "yǒu"
     },
     {
      "w": "花",
      "p": "huā"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "花很美。",
    "en": "The flowers are beautiful.",
    "ru": "Цветы красивые.",
    "tokens": [
     {
      "w": "花",
      "p": "huā"
     },
     {
      "w": "很美",
      "p": "hěnměi"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "我们是好朋友！",
    "en": "We are good friends!",
    "ru": "Мы хорошие друзья!",
    "tokens": [
     {
      "w": "我们",
      "p": "wǒmen"
     },
     {
      "w": "是",
      "p": "shì"
     },
     {
      "w": "好朋友",
      "p": "hǎopéngyǒu"
     },
     {
      "w": "！",
      "p": ""
     }
    ]
   }
  ],
  "questions": [
   {
    "q": "Where is Xiaoming's home located?",
    "options": [
     "Near the park",
     "In the city center",
     "Next to a school",
     "Far from the park"
    ],
    "answer": 0
   },
   {
    "q": "Who has a dog in the story?",
    "options": [
     "Xiaoming",
     "Xiaohong",
     "Mark and Emily",
     "Emily's sister"
    ],
    "answer": 2
   },
   {
    "q": "What are the flowers described as in the story?",
    "options": [
     "Red and yellow",
     "Beautiful",
     "Smelly",
     "Old and wilted"
    ],
    "answer": 1
   }
  ]
 },
 {
  "id": "1-2",
  "level": 1,
  "title": {
   "zh": "我的一天",
   "en": "My day",
   "ru": "Мой день"
  },
  "sentences": [
   {
    "zh": "早上好，小明。",
    "en": "Good morning, Xiaoming.",
    "ru": "Доброе утро, Сяомин.",
    "tokens": [
     {
      "w": "早上",
      "p": "zǎoshàng"
     },
     {
      "w": "好",
      "p": "hǎo"
     },
     {
      "w": "，",
      "p": ""
     },
     {
      "w": "小明",
      "p": "，xiǎo"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "早上好，小红。",
    "en": "Good morning, Xiaohong.",
    "ru": "Доброе утро, Сяохун.",
    "tokens": [
     {
      "w": "早上",
      "p": "zǎoshàng"
     },
     {
      "w": "好",
      "p": "hǎo"
     },
     {
      "w": "，",
      "p": ""
     },
     {
      "w": "小",
      "p": "，"
     },
     {
      "w": "红",
      "p": "xiǎo"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "我有咖啡。",
    "en": "I have coffee.",
    "ru": "У меня есть кофе.",
    "tokens": [
     {
      "w": "我有",
      "p": "wǒyǒu"
     },
     {
      "w": "咖啡",
      "p": "kāfēi"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明，你有茶吗？",
    "en": "Xiaoming, do you have tea?",
    "ru": "Сяомин, у тебя есть чай?",
    "tokens": [
     {
      "w": "小明",
      "p": "Xiǎomíng"
     },
     {
      "w": "，",
      "p": ""
     },
     {
      "w": "你有",
      "p": "，nǐ"
     },
     {
      "w": "茶",
      "p": "yǒu"
     },
     {
      "w": "吗",
      "p": "chá"
     },
     {
      "w": "？",
      "p": ""
     }
    ]
   },
   {
    "zh": "没有，我有咖啡。",
    "en": "No, I have coffee.",
    "ru": "Нет, у меня кофе.",
    "tokens": [
     {
      "w": "没有",
      "p": "méiyǒu"
     },
     {
      "w": "，",
      "p": ""
     },
     {
      "w": "我有",
      "p": "，wǒ"
     },
     {
      "w": "咖啡",
      "p": "yǒukā"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克在图书馆。",
    "en": "Mark is in the library.",
    "ru": "Марк в библиотеке.",
    "tokens": [
     {
      "w": "马克",
      "p": "Mǎkè"
     },
     {
      "w": "在",
      "p": "zài"
     },
     {
      "w": "图书",
      "p": "túshū"
     },
     {
      "w": "馆",
      "p": "guǎn"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "艾米丽在吃饭。",
    "en": "Emily is eating.",
    "ru": "Эмили ест.",
    "tokens": [
     {
      "w": "艾",
      "p": "ài"
     },
     {
      "w": "米",
      "p": "mǐ"
     },
     {
      "w": "丽",
      "p": "lì"
     },
     {
      "w": "在",
      "p": "zài"
     },
     {
      "w": "吃饭",
      "p": "chīfàn"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "我们去公园玩。",
    "en": "We go to the park to play.",
    "ru": "Мы идем в парк играть.",
    "tokens": [
     {
      "w": "我们",
      "p": "wǒmen"
     },
     {
      "w": "去",
      "p": "qù"
     },
     {
      "w": "公园",
      "p": "gōngyuán"
     },
     {
      "w": "玩",
      "p": "wán"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "公园很美！",
    "en": "The park is beautiful!",
    "ru": "Парк красивый!",
    "tokens": [
     {
      "w": "公园",
      "p": "gōngyuán"
     },
     {
      "w": "很美",
      "p": "hěnměi"
     },
     {
      "w": "！",
      "p": ""
     }
    ]
   },
   {
    "zh": "今天真开心！",
    "en": "What a happy day today!",
    "ru": "Какой радостный день!",
    "tokens": [
     {
      "w": "今天",
      "p": "jīntiān"
     },
     {
      "w": "真",
      "p": "zhēn"
     },
     {
      "w": "开心",
      "p": "kāixīn"
     },
     {
      "w": "！",
      "p": ""
     }
    ]
   }
  ],
  "questions": [
   {
    "q": "What does Xiaoming have?",
    "options": [
     "Coffee",
     "Tea",
     "Water",
     "Juice"
    ],
    "answer": 0
   },
   {
    "q": "Where is Mark?",
    "options": [
     "In the library",
     "In the park",
     "At home",
     "In the classroom"
    ],
    "answer": 0
   },
   {
    "q": "What is the park like?",
    "options": [
     "Beautiful",
     "Dirty",
     "Small",
     "Old"
    ],
    "answer": 0
   }
  ]
 },
 {
  "id": "1-3",
  "level": 1,
  "title": {
   "zh": "在饭馆",
   "en": "At the restaurant",
   "ru": "В ресторане"
  },
  "sentences": [
   {
    "zh": "小明在饭馆吃饭。",
    "en": "Xiaoming is eating at the restaurant.",
    "ru": "Сяомин ест в ресторане.",
    "tokens": [
     {
      "w": "小明",
      "p": "Xiǎomíng"
     },
     {
      "w": "在",
      "p": "zài"
     },
     {
      "w": "饭馆",
      "p": "fànguǎn"
     },
     {
      "w": "吃饭",
      "p": "chīfàn"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小红有水。",
    "en": "Xiaohong has water.",
    "ru": "У Сяохун есть вода.",
    "tokens": [
     {
      "w": "小",
      "p": "xiǎo"
     },
     {
      "w": "红",
      "p": "hóng"
     },
     {
      "w": "有",
      "p": "yǒu"
     },
     {
      "w": "水",
      "p": "shuǐ"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克在吃饭。",
    "en": "Mark is eating.",
    "ru": "Марк ест.",
    "tokens": [
     {
      "w": "马克",
      "p": "Mǎkè"
     },
     {
      "w": "在",
      "p": "zài"
     },
     {
      "w": "吃饭",
      "p": "chīfàn"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "艾米丽有米饭。",
    "en": "Emily has rice.",
    "ru": "У Эмили есть рис.",
    "tokens": [
     {
      "w": "艾",
      "p": "ài"
     },
     {
      "w": "米",
      "p": "mǐ"
     },
     {
      "w": "丽",
      "p": "lì"
     },
     {
      "w": "有",
      "p": "yǒu"
     },
     {
      "w": "米饭",
      "p": "mǐfàn"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "饭馆很干净。",
    "en": "The restaurant is very clean.",
    "ru": "Ресторан очень чистый.",
    "tokens": [
     {
      "w": "饭馆",
      "p": "fànguǎn"
     },
     {
      "w": "很",
      "p": "hěn"
     },
     {
      "w": "干净",
      "p": "gānjìng"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明问：有面条吗？",
    "en": "Xiaoming asks: Do you have noodles?",
    "ru": "Сяомин спрашивает: Есть ли лапша?",
    "tokens": [
     {
      "w": "小明",
      "p": "Xiǎomíng"
     },
     {
      "w": "问",
      "p": "wèn"
     },
     {
      "w": "：",
      "p": ""
     },
     {
      "w": "有",
      "p": "："
     },
     {
      "w": "面条",
      "p": "yǒumiàn"
     },
     {
      "w": "吗",
      "p": "tiáo"
     },
     {
      "w": "？",
      "p": ""
     }
    ]
   },
   {
    "zh": "服务员说：有。",
    "en": "The waiter says: Yes.",
    "ru": "Официант говорит: Да.",
    "tokens": [
     {
      "w": "服务",
      "p": "fúwù"
     },
     {
      "w": "员",
      "p": "yuán"
     },
     {
      "w": "说",
      "p": "shuō"
     },
     {
      "w": "：",
      "p": ""
     },
     {
      "w": "有",
      "p": "："
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明很开心。",
    "en": "Xiaoming is happy.",
    "ru": "Сяомин рад.",
    "tokens": [
     {
      "w": "小明",
      "p": "Xiǎomíng"
     },
     {
      "w": "很",
      "p": "hěn"
     },
     {
      "w": "开心",
      "p": "kāixīn"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "大家吃饭了。",
    "en": "Everyone is eating.",
    "ru": "Все едят.",
    "tokens": [
     {
      "w": "大家",
      "p": "dàjiā"
     },
     {
      "w": "吃饭",
      "p": "chīfàn"
     },
     {
      "w": "了",
      "p": "le"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "饭馆很好！",
    "en": "The restaurant is great!",
    "ru": "Ресторан отличный!",
    "tokens": [
     {
      "w": "饭馆",
      "p": "fànguǎn"
     },
     {
      "w": "很好",
      "p": "hěnhǎo"
     },
     {
      "w": "！",
      "p": ""
     }
    ]
   }
  ],
  "questions": [
   {
    "q": "What does Xiaoming ask the waiter?",
    "options": [
     "Do you have rice?",
     "Do you have water?",
     "Do you have noodles?",
     "Do you have soup?"
    ],
    "answer": 2
   },
   {
    "q": "What does Xiaohong have?",
    "options": [
     "Water",
     "Rice",
     "Noodles",
     "Soup"
    ],
    "answer": 0
   },
   {
    "q": "How is the restaurant?",
    "options": [
     "Very dirty",
     "Very clean",
     "Very noisy",
     "Very expensive"
    ],
    "answer": 1
   }
  ]
 },
 {
  "id": "1-4",
  "level": 1,
  "title": {
   "zh": "我的朋友",
   "en": "My friend",
   "ru": "Мой друг"
  },
  "sentences": [
   {
    "zh": "小明有新朋友。",
    "en": "Xiaoming has a new friend.",
    "ru": "У Сяомина есть новый друг.",
    "tokens": [
     {
      "w": "小明",
      "p": "Xiǎomíng"
     },
     {
      "w": "有",
      "p": "yǒu"
     },
     {
      "w": "新",
      "p": "xīn"
     },
     {
      "w": "朋友",
      "p": "péngyǒu"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "新朋友是马克。",
    "en": "The new friend is Mark.",
    "ru": "Новый друг — Марк.",
    "tokens": [
     {
      "w": "新",
      "p": "xīn"
     },
     {
      "w": "朋友",
      "p": "péngyǒu"
     },
     {
      "w": "是",
      "p": "shì"
     },
     {
      "w": "马克",
      "p": "Mǎkè"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克在教室。",
    "en": "Mark is in the classroom.",
    "ru": "Марк в классе.",
    "tokens": [
     {
      "w": "马克",
      "p": "Mǎkè"
     },
     {
      "w": "在",
      "p": "zài"
     },
     {
      "w": "教室",
      "p": "jiàoshì"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明问马克：你好吗？",
    "en": "Xiaoming asks Mark: How are you?",
    "ru": "Сяомин спрашивает Марка: Как ты?",
    "tokens": [
     {
      "w": "小明",
      "p": "Xiǎomíng"
     },
     {
      "w": "问",
      "p": "wèn"
     },
     {
      "w": "马克",
      "p": "Mǎkè"
     },
     {
      "w": "：",
      "p": ""
     },
     {
      "w": "你好",
      "p": "：nǐ"
     },
     {
      "w": "吗",
      "p": "hǎo"
     },
     {
      "w": "？",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克说：我很好。",
    "en": "Mark says: I'm fine.",
    "ru": "Марк говорит: Я хорошо.",
    "tokens": [
     {
      "w": "马克",
      "p": "Mǎkè"
     },
     {
      "w": "说",
      "p": "shuō"
     },
     {
      "w": "：",
      "p": ""
     },
     {
      "w": "我",
      "p": "："
     },
     {
      "w": "很好",
      "p": "wǒhěn"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小红也来教室。",
    "en": "Xiaohong also comes to the classroom.",
    "ru": "Сяохун тоже приходит в класс.",
    "tokens": [
     {
      "w": "小",
      "p": "xiǎo"
     },
     {
      "w": "红",
      "p": "hóng"
     },
     {
      "w": "也来",
      "p": "yělái"
     },
     {
      "w": "教室",
      "p": "jiàoshì"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小红说：你好，马克！",
    "en": "Xiaohong says: Hello, Mark!",
    "ru": "Сяохун говорит: Привет, Марк!",
    "tokens": [
     {
      "w": "小",
      "p": "xiǎo"
     },
     {
      "w": "红",
      "p": "hóng"
     },
     {
      "w": "说",
      "p": "shuō"
     },
     {
      "w": "：",
      "p": ""
     },
     {
      "w": "你好",
      "p": "：nǐ"
     },
     {
      "w": "，",
      "p": ""
     },
     {
      "w": "马克",
      "p": "Hǎo，"
     },
     {
      "w": "！",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克说：你好，小红！",
    "en": "Mark says: Hello, Xiaohong!",
    "ru": "Марк говорит: Привет, Сяохун!",
    "tokens": [
     {
      "w": "马克",
      "p": "Mǎkè"
     },
     {
      "w": "说",
      "p": "shuō"
     },
     {
      "w": "：",
      "p": ""
     },
     {
      "w": "你好",
      "p": "：nǐ"
     },
     {
      "w": "，",
      "p": ""
     },
     {
      "w": "小",
      "p": "hǎo"
     },
     {
      "w": "红",
      "p": "，"
     },
     {
      "w": "！",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明、小红和马克是朋友。",
    "en": "Xiaoming, Xiaohong, and Mark are friends.",
    "ru": "Сяомин, Сяохун и Марк друзья.",
    "tokens": [
     {
      "w": "小明",
      "p": "Xiǎomíng"
     },
     {
      "w": "、",
      "p": ""
     },
     {
      "w": "小",
      "p": "、"
     },
     {
      "w": "红",
      "p": "xiǎo"
     },
     {
      "w": "和",
      "p": "hóng"
     },
     {
      "w": "马克",
      "p": "Hémǎ"
     },
     {
      "w": "是",
      "p": "kè"
     },
     {
      "w": "朋友",
      "p": "shìpéng"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "他们一起学习。",
    "en": "They study together.",
    "ru": "Они учатся вместе.",
    "tokens": [
     {
      "w": "他们",
      "p": "tāmen"
     },
     {
      "w": "一起",
      "p": "yìqǐ"
     },
     {
      "w": "学习",
      "p": "xuéxí"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   }
  ],
  "questions": [
   {
    "q": "Where is Mark?",
    "options": [
     "In the library",
     "In the classroom",
     "In the park",
     "At home"
    ],
    "answer": 1
   },
   {
    "q": "What does Mark say when Xiaoming asks how he is?",
    "options": [
     "I'm tired",
     "I'm hungry",
     "I'm fine",
     "I'm sad"
    ],
    "answer": 2
   },
   {
    "q": "Who says 'Hello, Mark!'?",
    "options": [
     "Xiaoming",
     "Xiaohong",
     "Mark",
     "Teacher"
    ],
    "answer": 1
   }
  ]
 },
 {
  "id": "1-5",
  "level": 1,
  "title": {
   "zh": "买东西",
   "en": "Shopping",
   "ru": "Покупки"
  },
  "sentences": [
   {
    "zh": "小明去商店买东西。",
    "en": "Xiaoming goes to the store to buy things.",
    "ru": "Сяомин идет в магазин за покупками.",
    "tokens": [
     {
      "w": "小明",
      "p": "Xiǎomíng"
     },
     {
      "w": "去",
      "p": "qù"
     },
     {
      "w": "商店",
      "p": "shāngdiàn"
     },
     {
      "w": "买东西",
      "p": "mǎidōngxī"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "商店有苹果。",
    "en": "The store has apples.",
    "ru": "В магазине есть яблоки.",
    "tokens": [
     {
      "w": "商店",
      "p": "shāngdiàn"
     },
     {
      "w": "有",
      "p": "yǒu"
     },
     {
      "w": "苹果",
      "p": "píngguǒ"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小红问：苹果很便宜吗？",
    "en": "Xiaohong asks: Are apples cheap?",
    "ru": "Сяохун спрашивает: Яблоки дешевые?",
    "tokens": [
     {
      "w": "小",
      "p": "xiǎo"
     },
     {
      "w": "红",
      "p": "hóng"
     },
     {
      "w": "问",
      "p": "wèn"
     },
     {
      "w": "：",
      "p": ""
     },
     {
      "w": "苹果",
      "p": "：píng"
     },
     {
      "w": "很",
      "p": "guǒ"
     },
     {
      "w": "便宜",
      "p": "hěnpián"
     },
     {
      "w": "吗",
      "p": "yi"
     },
     {
      "w": "？",
      "p": ""
     }
    ]
   },
   {
    "zh": "店员说：苹果很便宜。",
    "en": "The clerk says: Apples are cheap.",
    "ru": "Продавец говорит: Яблоки дешевые.",
    "tokens": [
     {
      "w": "店员",
      "p": "diànyuán"
     },
     {
      "w": "说",
      "p": "shuō"
     },
     {
      "w": "：",
      "p": ""
     },
     {
      "w": "苹果",
      "p": "：píng"
     },
     {
      "w": "很",
      "p": "guǒ"
     },
     {
      "w": "便宜",
      "p": "hěnpián"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克想买苹果。",
    "en": "Mark wants to buy apples.",
    "ru": "Марк хочет купить яблоки.",
    "tokens": [
     {
      "w": "马克",
      "p": "Mǎkè"
     },
     {
      "w": "想",
      "p": "xiǎng"
     },
     {
      "w": "买",
      "p": "mǎi"
     },
     {
      "w": "苹果",
      "p": "píngguǒ"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "艾米丽说：我也要苹果。",
    "en": "Emily says: I also want apples.",
    "ru": "Эмили говорит: Я тоже хочу яблоки.",
    "tokens": [
     {
      "w": "艾",
      "p": "ài"
     },
     {
      "w": "米",
      "p": "mǐ"
     },
     {
      "w": "丽",
      "p": "lì"
     },
     {
      "w": "说",
      "p": "shuō"
     },
     {
      "w": "：",
      "p": ""
     },
     {
      "w": "我",
      "p": "："
     },
     {
      "w": "也要",
      "p": "wǒyě"
     },
     {
      "w": "苹果",
      "p": "yàopíng"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明问：苹果多少钱？",
    "en": "Xiaoming asks: How much are apples?",
    "ru": "Сяомин спрашивает: Сколько стоят яблоки?",
    "tokens": [
     {
      "w": "小明",
      "p": "Xiǎomíng"
     },
     {
      "w": "问",
      "p": "wèn"
     },
     {
      "w": "：",
      "p": ""
     },
     {
      "w": "苹果",
      "p": "：píng"
     },
     {
      "w": "多少钱",
      "p": "guǒduōshǎo"
     },
     {
      "w": "？",
      "p": ""
     }
    ]
   },
   {
    "zh": "店员说：两块钱。",
    "en": "The clerk says: Two yuan.",
    "ru": "Продавец говорит: Два юаня.",
    "tokens": [
     {
      "w": "店员",
      "p": "diànyuán"
     },
     {
      "w": "说",
      "p": "shuō"
     },
     {
      "w": "：",
      "p": ""
     },
     {
      "w": "两",
      "p": "："
     },
     {
      "w": "块",
      "p": "liǎng"
     },
     {
      "w": "钱",
      "p": "kuài"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明买了苹果。",
    "en": "Xiaoming buys apples.",
    "ru": "Сяомин покупает яблоки.",
    "tokens": [
     {
      "w": "小明",
      "p": "Xiǎomíng"
     },
     {
      "w": "买",
      "p": "mǎi"
     },
     {
      "w": "了",
      "p": "le"
     },
     {
      "w": "苹果",
      "p": "píngguǒ"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "大家都很开心！",
    "en": "Everyone is very happy!",
    "ru": "Все очень рады!",
    "tokens": [
     {
      "w": "大家",
      "p": "dàjiā"
     },
     {
      "w": "都很",
      "p": "dōuhěn"
     },
     {
      "w": "开心",
      "p": "kāixīn"
     },
     {
      "w": "！",
      "p": ""
     }
    ]
   }
  ],
  "questions": [
   {
    "q": "What does Xiaohong ask about the apples?",
    "options": [
     "Are they expensive?",
     "Are they cheap?",
     "How many are there?",
     "What color are they?"
    ],
    "answer": 1
   },
   {
    "q": "How much does the clerk say apples cost?",
    "options": [
     "One yuan",
     "Two yuan",
     "Three yuan",
     "Four yuan"
    ],
    "answer": 1
   },
   {
    "q": "Who wants to buy apples after Xiaoming?",
    "options": [
     "Xiaohong",
     "Mark",
     "Emily",
     "The clerk"
    ],
    "answer": 2
   }
  ]
 },
 {
  "id": "2-6",
  "level": 2,
  "title": {
   "zh": "周末",
   "en": "The weekend",
   "ru": "Выходные дни"
  },
  "sentences": [
   {
    "zh": "小明和小红在周末去公园。",
    "en": "Xiaoming and Xiaohong go to the park on the weekend.",
    "ru": "Сяомин и Сяохун ходят в парк по выходным.",
    "tokens": [
     {
      "w": "小明",
      "p": "Xiǎomíng"
     },
     {
      "w": "和",
      "p": "hé"
     },
     {
      "w": "小",
      "p": "xiǎo"
     },
     {
      "w": "红",
      "p": "hóng"
     },
     {
      "w": "在",
      "p": "zài"
     },
     {
      "w": "周末",
      "p": "zhōumò"
     },
     {
      "w": "去",
      "p": "qù"
     },
     {
      "w": "公园",
      "p": "gōngyuán"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "公园很大，有很多花。",
    "en": "The park is big, with many flowers.",
    "ru": "Парк большой, там много цветов.",
    "tokens": [
     {
      "w": "公园",
      "p": "gōngyuán"
     },
     {
      "w": "很大",
      "p": "hěndà"
     },
     {
      "w": "，",
      "p": ""
     },
     {
      "w": "有",
      "p": "，"
     },
     {
      "w": "很多",
      "p": "yǒuhěn"
     },
     {
      "w": "花",
      "p": "duō"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克和艾米丽也来公园。",
    "en": "Mark and Emily also come to the park.",
    "ru": "Марк и Эмили тоже приходят в парк.",
    "tokens": [
     {
      "w": "马克",
      "p": "Mǎkè"
     },
     {
      "w": "和",
      "p": "hé"
     },
     {
      "w": "艾",
      "p": "ài"
     },
     {
      "w": "米",
      "p": "mǐ"
     },
     {
      "w": "丽",
      "p": "lì"
     },
     {
      "w": "也来",
      "p": "yělái"
     },
     {
      "w": "公园",
      "p": "gōngyuán"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "他们玩飞盘，很开心。",
    "en": "They play frisbee, and are very happy.",
    "ru": "Они играют в фрисби и очень рады.",
    "tokens": [
     {
      "w": "他们",
      "p": "tāmen"
     },
     {
      "w": "玩",
      "p": "wán"
     },
     {
      "w": "飞盘",
      "p": "fēipán"
     },
     {
      "w": "，",
      "p": ""
     },
     {
      "w": "很",
      "p": "，"
     },
     {
      "w": "开心",
      "p": "hěnkāi"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小红过生日，大家送礼物。",
    "en": "Xiaohong has a birthday, and everyone gives gifts.",
    "ru": "Сяохун празднует день рождения, и все дарят подарки.",
    "tokens": [
     {
      "w": "小",
      "p": "xiǎo"
     },
     {
      "w": "红",
      "p": "hóng"
     },
     {
      "w": "过生日",
      "p": "guòshēngrì"
     },
     {
      "w": "，",
      "p": ""
     },
     {
      "w": "大家",
      "p": "，dà"
     },
     {
      "w": "送",
      "p": "jiā"
     },
     {
      "w": "礼物",
      "p": "sònglǐ"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克送她一本书。",
    "en": "Mark gives her a book.",
    "ru": "Марк дарит ей книгу.",
    "tokens": [
     {
      "w": "马克",
      "p": "Mǎkè"
     },
     {
      "w": "送",
      "p": "sòng"
     },
     {
      "w": "她",
      "p": "tā"
     },
     {
      "w": "一本书",
      "p": "yìběnshū"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "艾米丽送她一束花。",
    "en": "Emily gives her a bouquet of flowers.",
    "ru": "Эмили дарит ей букет цветов.",
    "tokens": [
     {
      "w": "艾",
      "p": "ài"
     },
     {
      "w": "米",
      "p": "mǐ"
     },
     {
      "w": "丽",
      "p": "lì"
     },
     {
      "w": "送",
      "p": "sòng"
     },
     {
      "w": "她",
      "p": "tā"
     },
     {
      "w": "一束花",
      "p": "yíshùhuā"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小红很高兴，说谢谢。",
    "en": "Xiaohong is very happy, and says thank you.",
    "ru": "Сяохун очень рада и говорит спасибо.",
    "tokens": [
     {
      "w": "小",
      "p": "xiǎo"
     },
     {
      "w": "红",
      "p": "hóng"
     },
     {
      "w": "很",
      "p": "hěn"
     },
     {
      "w": "高兴",
      "p": "gāoxìng"
     },
     {
      "w": "，",
      "p": ""
     },
     {
      "w": "说",
      "p": "，"
     },
     {
      "w": "谢谢",
      "p": "shuōxiè"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "因为周末好，大家玩得开心。",
    "en": "Because the weekend is good, everyone plays happily.",
    "ru": "Потому что выходные хорошие, все весело играют.",
    "tokens": [
     {
      "w": "因为",
      "p": "yīnwèi"
     },
     {
      "w": "周末",
      "p": "zhōumò"
     },
     {
      "w": "好",
      "p": "hǎo"
     },
     {
      "w": "，",
      "p": ""
     },
     {
      "w": "大家",
      "p": "，dà"
     },
     {
      "w": "玩得",
      "p": "jiāwán"
     },
     {
      "w": "开心",
      "p": "dékāi"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明说周末过得快。",
    "en": "Xiaoming says the weekend passes quickly.",
    "ru": "Сяомин говорит, что выходные быстро проходят.",
    "tokens": [
     {
      "w": "小明",
      "p": "Xiǎomíng"
     },
     {
      "w": "说",
      "p": "shuō"
     },
     {
      "w": "周末",
      "p": "zhōumò"
     },
     {
      "w": "过得",
      "p": "guòdé"
     },
     {
      "w": "快",
      "p": "kuài"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小红说下次还来公园。",
    "en": "Xiaohong says she will come to the park again next time.",
    "ru": "Сяохун говорит, что придет в парк снова в следующий раз.",
    "tokens": [
     {
      "w": "小",
      "p": "xiǎo"
     },
     {
      "w": "红",
      "p": "hóng"
     },
     {
      "w": "说",
      "p": "shuō"
     },
     {
      "w": "下次",
      "p": "xiàcì"
     },
     {
      "w": "还来",
      "p": "háilái"
     },
     {
      "w": "公园",
      "p": "gōngyuán"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "周末真好！",
    "en": "Weekends are really good!",
    "ru": "Выходные действительно хороши!",
    "tokens": [
     {
      "w": "周末",
      "p": "zhōumò"
     },
     {
      "w": "真好",
      "p": "zhēnhǎo"
     },
     {
      "w": "！",
      "p": ""
     }
    ]
   }
  ],
  "questions": [
   {
    "q": "What do Xiaoming and Xiaohong do on the weekend?",
    "options": [
     "They go to the park.",
     "They play frisbee.",
     "They give gifts.",
     "They buy flowers."
    ],
    "answer": 0
   },
   {
    "q": "Who gives Xiaohong a book for her birthday?",
    "options": [
     "Xiaoming",
     "Mark",
     "Emily",
     "Xiaohong"
    ],
    "answer": 1
   },
   {
    "q": "What does Xiaohong say about the weekend?",
    "options": [
     "It passes quickly.",
     "It is boring.",
     "She will come again next time.",
     "She wants to play frisbee."
    ],
    "answer": 2
   }
  ]
 },
 {
  "id": "2-7",
  "level": 2,
  "title": {
   "zh": "生病了",
   "en": "Getting sick",
   "ru": "Болезнь"
  },
  "sentences": [
   {
    "zh": "小明今天生病了。",
    "en": "Xiaoming is sick today.",
    "ru": "Сяомин сегодня болен.",
    "tokens": [
     {
      "w": "小明",
      "p": "Xiǎomíng"
     },
     {
      "w": "今天",
      "p": "jīntiān"
     },
     {
      "w": "生病",
      "p": "shēngbìng"
     },
     {
      "w": "了",
      "p": "le"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "他觉得很难受。",
    "en": "He feels very unwell.",
    "ru": "Он чувствует себя плохо.",
    "tokens": [
     {
      "w": "他",
      "p": "tā"
     },
     {
      "w": "觉得很",
      "p": "juédehěn"
     },
     {
      "w": "难受",
      "p": "nánshòu"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小红问：你生病了吗？",
    "en": "Xiaohong asks: Are you sick?",
    "ru": "Сяохун спрашивает: Ты заболел?",
    "tokens": [
     {
      "w": "小",
      "p": "xiǎo"
     },
     {
      "w": "红",
      "p": "hóng"
     },
     {
      "w": "问",
      "p": "wèn"
     },
     {
      "w": "：",
      "p": ""
     },
     {
      "w": "你",
      "p": "："
     },
     {
      "w": "生病",
      "p": "nǐshēng"
     },
     {
      "w": "了",
      "p": "bìng"
     },
     {
      "w": "吗",
      "p": "le"
     },
     {
      "w": "？",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明说：是的，我今天很不舒服。",
    "en": "Xiaoming says: Yes, I feel unwell today.",
    "ru": "Сяомин говорит: Да, сегодня я чувствую себя плохо.",
    "tokens": [
     {
      "w": "小明",
      "p": "Xiǎomíng"
     },
     {
      "w": "说",
      "p": "shuō"
     },
     {
      "w": "：",
      "p": ""
     },
     {
      "w": "是",
      "p": "："
     },
     {
      "w": "的",
      "p": "shì"
     },
     {
      "w": "，",
      "p": ""
     },
     {
      "w": "我",
      "p": "de"
     },
     {
      "w": "今天",
      "p": "，wǒ"
     },
     {
      "w": "很不",
      "p": "jīntiān"
     },
     {
      "w": "舒服",
      "p": "hěnbù"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克问：你吃药了吗？",
    "en": "Mark asks: Did you take medicine?",
    "ru": "Марк спрашивает: Ты принял лекарство?",
    "tokens": [
     {
      "w": "马克",
      "p": "Mǎkè"
     },
     {
      "w": "问",
      "p": "wèn"
     },
     {
      "w": "：",
      "p": ""
     },
     {
      "w": "你",
      "p": "："
     },
     {
      "w": "吃",
      "p": "nǐ"
     },
     {
      "w": "药",
      "p": "chī"
     },
     {
      "w": "了",
      "p": "yào"
     },
     {
      "w": "吗",
      "p": "le"
     },
     {
      "w": "？",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明说：没有，我还没有吃药。",
    "en": "Xiaoming says: No, I haven't taken medicine yet.",
    "ru": "Сяомин говорит: Нет, я еще не принял лекарство.",
    "tokens": [
     {
      "w": "小明",
      "p": "Xiǎomíng"
     },
     {
      "w": "说",
      "p": "shuō"
     },
     {
      "w": "：",
      "p": ""
     },
     {
      "w": "没有",
      "p": "：méi"
     },
     {
      "w": "，",
      "p": ""
     },
     {
      "w": "我还",
      "p": "yǒu，"
     },
     {
      "w": "没有",
      "p": "wǒhái"
     },
     {
      "w": "吃",
      "p": "méi"
     },
     {
      "w": "药",
      "p": "yǒu"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "艾米丽说：我有药。",
    "en": "Emily says: I have medicine.",
    "ru": "Эмили говорит: У меня есть лекарство.",
    "tokens": [
     {
      "w": "艾",
      "p": "ài"
     },
     {
      "w": "米",
      "p": "mǐ"
     },
     {
      "w": "丽",
      "p": "lì"
     },
     {
      "w": "说",
      "p": "shuō"
     },
     {
      "w": "：",
      "p": ""
     },
     {
      "w": "我有",
      "p": "：wǒ"
     },
     {
      "w": "药",
      "p": "yǒu"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小红说：我们帮你买药吧。",
    "en": "Xiaohong says: Let's buy medicine for you.",
    "ru": "Сяохун говорит: Давайте купим тебе лекарство.",
    "tokens": [
     {
      "w": "小",
      "p": "xiǎo"
     },
     {
      "w": "红",
      "p": "hóng"
     },
     {
      "w": "说",
      "p": "shuō"
     },
     {
      "w": "：",
      "p": ""
     },
     {
      "w": "我们",
      "p": "：wǒ"
     },
     {
      "w": "帮",
      "p": "men"
     },
     {
      "w": "你",
      "p": "bāng"
     },
     {
      "w": "买",
      "p": "nǐ"
     },
     {
      "w": "药",
      "p": "mǎi"
     },
     {
      "w": "吧",
      "p": "yào"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克说：我开车送你去医院。",
    "en": "Mark says: I will drive you to the hospital.",
    "ru": "Марк говорит: Я отвезу тебя в больницу на машине.",
    "tokens": [
     {
      "w": "马克",
      "p": "Mǎkè"
     },
     {
      "w": "说",
      "p": "shuō"
     },
     {
      "w": "：",
      "p": ""
     },
     {
      "w": "我",
      "p": "："
     },
     {
      "w": "开车",
      "p": "wǒkāi"
     },
     {
      "w": "送",
      "p": "chē"
     },
     {
      "w": "你",
      "p": "sòng"
     },
     {
      "w": "去",
      "p": "nǐ"
     },
     {
      "w": "医院",
      "p": "qùyī"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明说：谢谢你们。",
    "en": "Xiaoming says: Thank you.",
    "ru": "Сяомин говорит: Спасибо вам.",
    "tokens": [
     {
      "w": "小明",
      "p": "Xiǎomíng"
     },
     {
      "w": "说",
      "p": "shuō"
     },
     {
      "w": "：",
      "p": ""
     },
     {
      "w": "谢谢",
      "p": "：xiè"
     },
     {
      "w": "你们",
      "p": "xiènǐ"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小红说：别客气。",
    "en": "Xiaohong says: You're welcome.",
    "ru": "Сяохун говорит: Не за что.",
    "tokens": [
     {
      "w": "小",
      "p": "xiǎo"
     },
     {
      "w": "红",
      "p": "hóng"
     },
     {
      "w": "说",
      "p": "shuō"
     },
     {
      "w": "：",
      "p": ""
     },
     {
      "w": "别",
      "p": "："
     },
     {
      "w": "客气",
      "p": "biékè"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明觉得好多了。",
    "en": "Xiaoming feels much better.",
    "ru": "Сяомин чувствует себя гораздо лучше.",
    "tokens": [
     {
      "w": "小明",
      "p": "Xiǎomíng"
     },
     {
      "w": "觉得",
      "p": "juéde"
     },
     {
      "w": "好多",
      "p": "hǎoduō"
     },
     {
      "w": "了",
      "p": "le"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   }
  ],
  "questions": [
   {
    "q": "Why is Xiaoming unwell?",
    "options": [
     "He ate bad food.",
     "He is sick today.",
     "He didn't sleep well.",
     "He had an accident."
    ],
    "answer": 1
   },
   {
    "q": "What does Xiaohong say they will do for Xiaoming?",
    "options": [
     "Buy medicine for him.",
     "Drive him to the hospital.",
     "Give him some water.",
     "Cook him a meal."
    ],
    "answer": 0
   },
   {
    "q": "Who offers to drive Xiaoming to the hospital?",
    "options": [
     "Xiaohong.",
     "Mark.",
     "Emily.",
     "Xiaoming."
    ],
    "answer": 1
   }
  ]
 },
 {
  "id": "2-8",
  "level": 2,
  "title": {
   "zh": "坐出租车",
   "en": "Taking a taxi",
   "ru": "Поездка на такси"
  },
  "sentences": [
   {
    "zh": "小明和小红在公园玩。",
    "en": "Xiaoming and Xiaohong played in the park.",
    "ru": "Сяомин и Сяохун играли в парке.",
    "tokens": [
     {
      "w": "小明",
      "p": "Xiǎomíng"
     },
     {
      "w": "和",
      "p": "hé"
     },
     {
      "w": "小",
      "p": "xiǎo"
     },
     {
      "w": "红",
      "p": "hóng"
     },
     {
      "w": "在",
      "p": "zài"
     },
     {
      "w": "公园",
      "p": "gōngyuán"
     },
     {
      "w": "玩",
      "p": "wán"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "他们想回家。",
    "en": "They wanted to go home.",
    "ru": "Они хотели вернуться домой.",
    "tokens": [
     {
      "w": "他们",
      "p": "tāmen"
     },
     {
      "w": "想",
      "p": "xiǎng"
     },
     {
      "w": "回家",
      "p": "huíjiā"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明说：我们坐出租车吧。",
    "en": "Xiaoming said: Let's take a taxi.",
    "ru": "Сяомин сказал: Давайте поедем на такси.",
    "tokens": [
     {
      "w": "小明",
      "p": "Xiǎomíng"
     },
     {
      "w": "说",
      "p": "shuō"
     },
     {
      "w": "：",
      "p": ""
     },
     {
      "w": "我们",
      "p": "：wǒ"
     },
     {
      "w": "坐",
      "p": "men"
     },
     {
      "w": "出租",
      "p": "zuòchū"
     },
     {
      "w": "车",
      "p": "zū"
     },
     {
      "w": "吧",
      "p": "chē"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小红同意。",
    "en": "Xiaohong agreed.",
    "ru": "Сяохун согласилась.",
    "tokens": [
     {
      "w": "小",
      "p": "xiǎo"
     },
     {
      "w": "红",
      "p": "hóng"
     },
     {
      "w": "同意",
      "p": "tóngyì"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克和艾米丽也想回家。",
    "en": "Mark and Emily also wanted to go home.",
    "ru": "Марк и Эмили тоже хотели вернуться домой.",
    "tokens": [
     {
      "w": "马克",
      "p": "Mǎkè"
     },
     {
      "w": "和",
      "p": "hé"
     },
     {
      "w": "艾",
      "p": "ài"
     },
     {
      "w": "米",
      "p": "mǐ"
     },
     {
      "w": "丽",
      "p": "lì"
     },
     {
      "w": "也想",
      "p": "yěxiǎng"
     },
     {
      "w": "回家",
      "p": "huíjiā"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "他们一起等出租车。",
    "en": "They waited for a taxi together.",
    "ru": "Они вместе ждали такси.",
    "tokens": [
     {
      "w": "他们",
      "p": "tāmen"
     },
     {
      "w": "一起",
      "p": "yìqǐ"
     },
     {
      "w": "等",
      "p": "děng"
     },
     {
      "w": "出租",
      "p": "chūzū"
     },
     {
      "w": "车",
      "p": "chē"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "出租车来了。",
    "en": "The taxi came.",
    "ru": "Такси приехало.",
    "tokens": [
     {
      "w": "出租",
      "p": "chūzū"
     },
     {
      "w": "车",
      "p": "chē"
     },
     {
      "w": "来",
      "p": "lái"
     },
     {
      "w": "了",
      "p": "le"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "司机说：你们去哪？",
    "en": "The driver said: Where are you going?",
    "ru": "Водитель спросил: Куда вы едете?",
    "tokens": [
     {
      "w": "司机",
      "p": "sījī"
     },
     {
      "w": "说",
      "p": "shuō"
     },
     {
      "w": "：",
      "p": ""
     },
     {
      "w": "你们",
      "p": "：nǐ"
     },
     {
      "w": "去",
      "p": "men"
     },
     {
      "w": "哪",
      "p": "qù"
     },
     {
      "w": "？",
      "p": ""
     }
    ]
   },
   {
    "zh": "小红说：去我家。",
    "en": "Xiaohong said: To my home.",
    "ru": "Сяохун сказала: Ко мне домой.",
    "tokens": [
     {
      "w": "小",
      "p": "xiǎo"
     },
     {
      "w": "红",
      "p": "hóng"
     },
     {
      "w": "说",
      "p": "shuō"
     },
     {
      "w": "：",
      "p": ""
     },
     {
      "w": "去",
      "p": "："
     },
     {
      "w": "我家",
      "p": "qùwǒ"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "司机说：好，走吧。",
    "en": "The driver said: Okay, let's go.",
    "ru": "Водитель сказал: Хорошо, поехали.",
    "tokens": [
     {
      "w": "司机",
      "p": "sījī"
     },
     {
      "w": "说",
      "p": "shuō"
     },
     {
      "w": "：",
      "p": ""
     },
     {
      "w": "好",
      "p": "："
     },
     {
      "w": "，",
      "p": ""
     },
     {
      "w": "走",
      "p": "hǎo"
     },
     {
      "w": "吧",
      "p": "，"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "他们开心地回家了。",
    "en": "They happily went home.",
    "ru": "Они счастливо вернулись домой.",
    "tokens": [
     {
      "w": "他们",
      "p": "tāmen"
     },
     {
      "w": "开心",
      "p": "kāixīn"
     },
     {
      "w": "地",
      "p": "dì"
     },
     {
      "w": "回家",
      "p": "huíjiā"
     },
     {
      "w": "了",
      "p": "le"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "他们谢谢司机。",
    "en": "They thanked the driver.",
    "ru": "Они поблагодарили водителя.",
    "tokens": [
     {
      "w": "他们",
      "p": "tāmen"
     },
     {
      "w": "谢谢",
      "p": "xièxiè"
     },
     {
      "w": "司机",
      "p": "sījī"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   }
  ],
  "questions": [
   {
    "q": "What did Xiaoming and Xiaohong want to do after playing in the park?",
    "options": [
     "Go to school",
     "Go home",
     "Play more games",
     "Buy ice cream"
    ],
    "answer": 1
   },
   {
    "q": "Who else wanted to go home?",
    "options": [
     "Mark and Emily",
     "Xiao Li",
     "The park guard",
     "The bus driver"
    ],
    "answer": 0
   },
   {
    "q": "What did the driver ask the passengers before they started the ride?",
    "options": [
     "How much is the fare?",
     "Where are you going?",
     "Do you have enough money?",
     "Can you drive fast?"
    ],
    "answer": 1
   }
  ]
 },
 {
  "id": "2-9",
  "level": 2,
  "title": {
   "zh": "天气",
   "en": "The weather",
   "ru": "Погода"
  },
  "sentences": [
   {
    "zh": "小明喜欢晴天。",
    "en": "Xiaoming likes sunny days.",
    "ru": "Сяомин любит солнечные дни.",
    "tokens": [
     {
      "w": "小明",
      "p": "Xiǎomíng"
     },
     {
      "w": "喜欢",
      "p": "xǐhuan"
     },
     {
      "w": "晴天",
      "p": "qíngtiān"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小红喜欢雨天。",
    "en": "Xiaohong likes rainy days.",
    "ru": "Сяохун любит дождливые дни.",
    "tokens": [
     {
      "w": "小",
      "p": "xiǎo"
     },
     {
      "w": "红",
      "p": "hóng"
     },
     {
      "w": "喜欢",
      "p": "xǐhuan"
     },
     {
      "w": "雨天",
      "p": "yǔtiān"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克说他喜欢雪天。",
    "en": "Mark says he likes snowy days.",
    "ru": "Марк говорит, что ему нравятся снежные дни.",
    "tokens": [
     {
      "w": "马克",
      "p": "Mǎkè"
     },
     {
      "w": "说",
      "p": "shuō"
     },
     {
      "w": "他",
      "p": "tā"
     },
     {
      "w": "喜欢",
      "p": "xǐhuan"
     },
     {
      "w": "雪天",
      "p": "xuětiān"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "艾米丽说她喜欢阴天。",
    "en": "Emily says she likes cloudy days.",
    "ru": "Эмили говорит, что ей нравятся облачные дни.",
    "tokens": [
     {
      "w": "艾",
      "p": "ài"
     },
     {
      "w": "米",
      "p": "mǐ"
     },
     {
      "w": "丽",
      "p": "lì"
     },
     {
      "w": "说",
      "p": "shuō"
     },
     {
      "w": "她",
      "p": "tā"
     },
     {
      "w": "喜欢",
      "p": "xǐhuan"
     },
     {
      "w": "阴天",
      "p": "yīntiān"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "今天天气很好。",
    "en": "The weather is good today.",
    "ru": "Сегодня погода хорошая.",
    "tokens": [
     {
      "w": "今天",
      "p": "jīntiān"
     },
     {
      "w": "天气",
      "p": "tiānqì"
     },
     {
      "w": "很好",
      "p": "hěnhǎo"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明和小红出去玩。",
    "en": "Xiaoming and Xiaohong go out to play.",
    "ru": "Сяомин и Сяохун выходят гулять.",
    "tokens": [
     {
      "w": "小明",
      "p": "Xiǎomíng"
     },
     {
      "w": "和",
      "p": "hé"
     },
     {
      "w": "小",
      "p": "xiǎo"
     },
     {
      "w": "红",
      "p": "hóng"
     },
     {
      "w": "出去",
      "p": "chūqù"
     },
     {
      "w": "玩",
      "p": "wán"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克和艾米丽在教室学习。",
    "en": "Mark and Emily study in the classroom.",
    "ru": "Марк и Эмили учатся в классе.",
    "tokens": [
     {
      "w": "马克",
      "p": "Mǎkè"
     },
     {
      "w": "和",
      "p": "hé"
     },
     {
      "w": "艾",
      "p": "ài"
     },
     {
      "w": "米",
      "p": "mǐ"
     },
     {
      "w": "丽",
      "p": "lì"
     },
     {
      "w": "在",
      "p": "zài"
     },
     {
      "w": "教室",
      "p": "jiàoshì"
     },
     {
      "w": "学习",
      "p": "xuéxí"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明说：天气真好！",
    "en": "Xiaoming says: The weather is so nice!",
    "ru": "Сяомин говорит: Погода такая хорошая!",
    "tokens": [
     {
      "w": "小明",
      "p": "Xiǎomíng"
     },
     {
      "w": "说",
      "p": "shuō"
     },
     {
      "w": "：",
      "p": ""
     },
     {
      "w": "天气",
      "p": "：tiān"
     },
     {
      "w": "真好",
      "p": "qìzhēn"
     },
     {
      "w": "！",
      "p": ""
     }
    ]
   },
   {
    "zh": "小红说：我爱下雨。",
    "en": "Xiaohong says: I love rain.",
    "ru": "Сяохун говорит: Я люблю дождь.",
    "tokens": [
     {
      "w": "小",
      "p": "xiǎo"
     },
     {
      "w": "红",
      "p": "hóng"
     },
     {
      "w": "说",
      "p": "shuō"
     },
     {
      "w": "：",
      "p": ""
     },
     {
      "w": "我",
      "p": "："
     },
     {
      "w": "爱",
      "p": "wǒ"
     },
     {
      "w": "下雨",
      "p": "àixià"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克说：雪天很冷。",
    "en": "Mark says: Snowy days are cold.",
    "ru": "Марк говорит: Снежные дни холодные.",
    "tokens": [
     {
      "w": "马克",
      "p": "Mǎkè"
     },
     {
      "w": "说",
      "p": "shuō"
     },
     {
      "w": "：",
      "p": ""
     },
     {
      "w": "雪天",
      "p": "：xuě"
     },
     {
      "w": "很",
      "p": "tiān"
     },
     {
      "w": "冷",
      "p": "hěn"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "艾米丽说：阴天舒服。",
    "en": "Emily says: Cloudy days are comfortable.",
    "ru": "Эмили говорит: Облачные дни комфортны.",
    "tokens": [
     {
      "w": "艾",
      "p": "ài"
     },
     {
      "w": "米",
      "p": "mǐ"
     },
     {
      "w": "丽",
      "p": "lì"
     },
     {
      "w": "说",
      "p": "shuō"
     },
     {
      "w": "：",
      "p": ""
     },
     {
      "w": "阴天",
      "p": "：yīn"
     },
     {
      "w": "舒服",
      "p": "tiānshū"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "他们都很开心。",
    "en": "They are all happy.",
    "ru": "Все они счастливы.",
    "tokens": [
     {
      "w": "他们",
      "p": "tāmen"
     },
     {
      "w": "都很",
      "p": "dōuhěn"
     },
     {
      "w": "开心",
      "p": "kāixīn"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   }
  ],
  "questions": [
   {
    "q": "What does Xiaoming like?",
    "options": [
     "Rainy days",
     "Sunny days",
     "Snowy days",
     "Cloudy days"
    ],
    "answer": 1
   },
   {
    "q": "Where do Mark and Emily go today?",
    "options": [
     "Out to play",
     "To the park",
     "To study in the classroom",
     "To watch the weather"
    ],
    "answer": 2
   },
   {
    "q": "What does Emily say about cloudy days?",
    "options": [
     "They are cold.",
     "They are comfortable.",
     "They are nice.",
     "They are rainy."
    ],
    "answer": 1
   }
  ]
 },
 {
  "id": "2-10",
  "level": 2,
  "title": {
   "zh": "学汉语",
   "en": "Studying Chinese",
   "ru": "Изучение китайского языка"
  },
  "sentences": [
   {
    "zh": "小明和小红在教室里学汉语。",
    "en": "Xiaoming and Xiaohong study Chinese in the classroom.",
    "ru": "Сяомин и Сяохун учат китайский язык в классе.",
    "tokens": [
     {
      "w": "小明",
      "p": "Xiǎomíng"
     },
     {
      "w": "和",
      "p": "hé"
     },
     {
      "w": "小",
      "p": "xiǎo"
     },
     {
      "w": "红",
      "p": "hóng"
     },
     {
      "w": "在",
      "p": "zài"
     },
     {
      "w": "教室",
      "p": "jiàoshì"
     },
     {
      "w": "里",
      "p": "lǐ"
     },
     {
      "w": "学",
      "p": "xué"
     },
     {
      "w": "汉语",
      "p": "hànyǔ"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克和艾米丽也来学汉语。",
    "en": "Mark and Emily also come to study Chinese.",
    "ru": "Марк и Эмили также приходят учить китайский язык.",
    "tokens": [
     {
      "w": "马克",
      "p": "Mǎkè"
     },
     {
      "w": "和",
      "p": "hé"
     },
     {
      "w": "艾",
      "p": "ài"
     },
     {
      "w": "米",
      "p": "mǐ"
     },
     {
      "w": "丽",
      "p": "lì"
     },
     {
      "w": "也来",
      "p": "yělái"
     },
     {
      "w": "学",
      "p": "xué"
     },
     {
      "w": "汉语",
      "p": "hànyǔ"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "老师说：汉语很有趣。",
    "en": "The teacher says: Chinese is interesting.",
    "ru": "Учитель говорит: китайский язык очень интересный.",
    "tokens": [
     {
      "w": "老师",
      "p": "lǎoshī"
     },
     {
      "w": "说",
      "p": "shuō"
     },
     {
      "w": "：",
      "p": ""
     },
     {
      "w": "汉语",
      "p": "：hàn"
     },
     {
      "w": "很",
      "p": "yǔ"
     },
     {
      "w": "有趣",
      "p": "hěnyǒu"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明喜欢汉语，因为他想和中国人交朋友。",
    "en": "Xiaoming likes Chinese because he wants to make friends with Chinese people.",
    "ru": "Сяомин любит китайский язык, потому что хочет подружиться с китайцами.",
    "tokens": [
     {
      "w": "小明",
      "p": "Xiǎomíng"
     },
     {
      "w": "喜欢",
      "p": "xǐhuan"
     },
     {
      "w": "汉语",
      "p": "hànyǔ"
     },
     {
      "w": "，",
      "p": ""
     },
     {
      "w": "因为",
      "p": "，yīn"
     },
     {
      "w": "他想",
      "p": "wèitā"
     },
     {
      "w": "和",
      "p": "xiǎng"
     },
     {
      "w": "中国人",
      "p": "hézhōngguó"
     },
     {
      "w": "交",
      "p": "rén"
     },
     {
      "w": "朋友",
      "p": "jiāopéng"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克说：汉语很难，但我喜欢。",
    "en": "Mark says: Chinese is difficult, but I like it.",
    "ru": "Марк говорит: китайский язык сложный, но мне нравится.",
    "tokens": [
     {
      "w": "马克",
      "p": "Mǎkè"
     },
     {
      "w": "说",
      "p": "shuō"
     },
     {
      "w": "：",
      "p": ""
     },
     {
      "w": "汉语",
      "p": "：hàn"
     },
     {
      "w": "很",
      "p": "yǔ"
     },
     {
      "w": "难",
      "p": "hěn"
     },
     {
      "w": "，",
      "p": ""
     },
     {
      "w": "但",
      "p": "nán"
     },
     {
      "w": "我",
      "p": "，"
     },
     {
      "w": "喜欢",
      "p": "dànwǒ"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小红学汉语已经三个月了。",
    "en": "Xiaohong has studied Chinese for three months.",
    "ru": "Сяохун учит китайский язык уже три месяца.",
    "tokens": [
     {
      "w": "小",
      "p": "xiǎo"
     },
     {
      "w": "红学",
      "p": "hóngxué"
     },
     {
      "w": "汉语",
      "p": "hànyǔ"
     },
     {
      "w": "已经",
      "p": "yǐjīng"
     },
     {
      "w": "三个月",
      "p": "sāngèyuè"
     },
     {
      "w": "了",
      "p": "le"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "艾米丽说：我学会了说‘你好’。",
    "en": "Emily says: I learned to say 'hello'.",
    "ru": "Эмили говорит: я научилась говорить 'привет'.",
    "tokens": [
     {
      "w": "艾",
      "p": "ài"
     },
     {
      "w": "米",
      "p": "mǐ"
     },
     {
      "w": "丽",
      "p": "lì"
     },
     {
      "w": "说",
      "p": "shuō"
     },
     {
      "w": "：",
      "p": ""
     },
     {
      "w": "我",
      "p": "："
     },
     {
      "w": "学会",
      "p": "wǒxué"
     },
     {
      "w": "了",
      "p": "huì"
     },
     {
      "w": "说",
      "p": "le"
     },
     {
      "w": "‘",
      "p": ""
     },
     {
      "w": "你好",
      "p": "shuō‘"
     },
     {
      "w": "’",
      "p": ""
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明问：你会说‘谢谢’吗？",
    "en": "Xiaoming asks: Can you say 'thank you'?",
    "ru": "Сяомин спрашивает: ты можешь сказать 'спасибо'?",
    "tokens": [
     {
      "w": "小明",
      "p": "Xiǎomíng"
     },
     {
      "w": "问",
      "p": "wèn"
     },
     {
      "w": "：",
      "p": ""
     },
     {
      "w": "你",
      "p": "："
     },
     {
      "w": "会说",
      "p": "nǐhuì"
     },
     {
      "w": "‘",
      "p": ""
     },
     {
      "w": "谢谢",
      "p": "shuō‘"
     },
     {
      "w": "’",
      "p": ""
     },
     {
      "w": "吗",
      "p": "xiè"
     },
     {
      "w": "？",
      "p": ""
     }
    ]
   },
   {
    "zh": "艾米丽回答：会，谢谢！",
    "en": "Emily answers: Yes, thank you!",
    "ru": "Эмили отвечает: Да, спасибо!",
    "tokens": [
     {
      "w": "艾",
      "p": "ài"
     },
     {
      "w": "米",
      "p": "mǐ"
     },
     {
      "w": "丽",
      "p": "lì"
     },
     {
      "w": "回答",
      "p": "huídá"
     },
     {
      "w": "：",
      "p": ""
     },
     {
      "w": "会",
      "p": "："
     },
     {
      "w": "，",
      "p": ""
     },
     {
      "w": "谢谢",
      "p": "huì，"
     },
     {
      "w": "！",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克和小红笑了。",
    "en": "Mark and Xiaohong laughed.",
    "ru": "Марк и Сяохун засмеялись.",
    "tokens": [
     {
      "w": "马克",
      "p": "Mǎkè"
     },
     {
      "w": "和",
      "p": "hé"
     },
     {
      "w": "小",
      "p": "xiǎo"
     },
     {
      "w": "红",
      "p": "hóng"
     },
     {
      "w": "笑了",
      "p": "xiàole"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "大家觉得学汉语很有趣。",
    "en": "Everyone thinks studying Chinese is fun.",
    "ru": "Все считают, что изучение китайского языка весело.",
    "tokens": [
     {
      "w": "大家",
      "p": "dàjiā"
     },
     {
      "w": "觉得",
      "p": "juéde"
     },
     {
      "w": "学",
      "p": "xué"
     },
     {
      "w": "汉语",
      "p": "hànyǔ"
     },
     {
      "w": "很",
      "p": "hěn"
     },
     {
      "w": "有趣",
      "p": "yǒuqù"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "明天我们继续学汉语。",
    "en": "Tomorrow we will continue to study Chinese.",
    "ru": "Завтра мы продолжим учить китайский язык.",
    "tokens": [
     {
      "w": "明天",
      "p": "míngtiān"
     },
     {
      "w": "我们",
      "p": "wǒmen"
     },
     {
      "w": "继续",
      "p": "jìxù"
     },
     {
      "w": "学",
      "p": "xué"
     },
     {
      "w": "汉语",
      "p": "hànyǔ"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   }
  ],
  "questions": [
   {
    "q": "Why does Xiaoming like Chinese?",
    "options": [
     "He wants to make friends with Chinese people.",
     "He finds it easy.",
     "He has studied it for three months.",
     "He learned to say 'hello'."
    ],
    "answer": 0
   },
   {
    "q": "How long has Xiaohong studied Chinese?",
    "options": [
     "Three months.",
     "One month.",
     "Two months.",
     "Six months."
    ],
    "answer": 0
   },
   {
    "q": "What did Emily say when Xiaoming asked if she could say 'thank you'?",
    "options": [
     "Yes, thank you!",
     "No, I can't.",
     "I learned to say 'hello' only.",
     "Chinese is difficult."
    ],
    "answer": 0
   }
  ]
 },
 {
  "id": "3-11",
  "level": 3,
  "title": {
   "zh": "去北京旅行",
   "en": "A trip to Beijing",
   "ru": "Поездка в Пекин"
  },
  "sentences": [
   {
    "zh": "小明和小红计划去北京旅行。",
    "en": "Xiaoming and Xiaohong planned to travel to Beijing.",
    "ru": "Сяомин и Сяохун планировали поездку в Пекин.",
    "tokens": [
     {
      "w": "小明",
      "p": "Xiǎomíng"
     },
     {
      "w": "和",
      "p": "hé"
     },
     {
      "w": "小",
      "p": "xiǎo"
     },
     {
      "w": "红",
      "p": "hóng"
     },
     {
      "w": "计划",
      "p": "jìhuà"
     },
     {
      "w": "去",
      "p": "qù"
     },
     {
      "w": "北京",
      "p": "Běijīng"
     },
     {
      "w": "旅行",
      "p": "lǚxíng"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克和艾米丽也想一起去。",
    "en": "Mark and Emily also wanted to go together.",
    "ru": "Марк и Эмили тоже хотели поехать вместе.",
    "tokens": [
     {
      "w": "马克",
      "p": "Mǎkè"
     },
     {
      "w": "和",
      "p": "hé"
     },
     {
      "w": "艾",
      "p": "ài"
     },
     {
      "w": "米",
      "p": "mǐ"
     },
     {
      "w": "丽",
      "p": "lì"
     },
     {
      "w": "也想",
      "p": "yěxiǎng"
     },
     {
      "w": "一起去",
      "p": "yìqǐqù"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "他们决定坐火车去北京。",
    "en": "They decided to take a train to Beijing.",
    "ru": "Они решили ехать в Пекин на поезде.",
    "tokens": [
     {
      "w": "他们",
      "p": "tāmen"
     },
     {
      "w": "决定",
      "p": "juédìng"
     },
     {
      "w": "坐",
      "p": "zuò"
     },
     {
      "w": "火车",
      "p": "huǒchē"
     },
     {
      "w": "去",
      "p": "qù"
     },
     {
      "w": "北京",
      "p": "Běijīng"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "火车很舒服，大家一边聊天一边看风景。",
    "en": "The train was comfortable, and they chatted while watching the scenery.",
    "ru": "Поезд был удобным, и они болтали, глядя на пейзаж.",
    "tokens": [
     {
      "w": "火车",
      "p": "huǒchē"
     },
     {
      "w": "很",
      "p": "hěn"
     },
     {
      "w": "舒服",
      "p": "shūfú"
     },
     {
      "w": "，",
      "p": ""
     },
     {
      "w": "大家",
      "p": "，dà"
     },
     {
      "w": "一边",
      "p": "jiāyì"
     },
     {
      "w": "聊天",
      "p": "biānliáo"
     },
     {
      "w": "一边",
      "p": "tiānyì"
     },
     {
      "w": "看",
      "p": "biān"
     },
     {
      "w": "风景",
      "p": "kànfēng"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "到了北京，他们先去酒店。",
    "en": "When they arrived in Beijing, they went to the hotel first.",
    "ru": "Прибыв в Пекин, они сначала пошли в отель.",
    "tokens": [
     {
      "w": "到了",
      "p": "dàole"
     },
     {
      "w": "北京",
      "p": "Běijīng"
     },
     {
      "w": "，",
      "p": ""
     },
     {
      "w": "他们",
      "p": "，tā"
     },
     {
      "w": "先去",
      "p": "menxiān"
     },
     {
      "w": "酒店",
      "p": "qùjiǔ"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小红买了地图，大家用它找路。",
    "en": "Xiaohong bought a map, and they used it to find their way.",
    "ru": "Сяохун купила карту, и они использовали её, чтобы найти дорогу.",
    "tokens": [
     {
      "w": "小",
      "p": "xiǎo"
     },
     {
      "w": "红",
      "p": "hóng"
     },
     {
      "w": "买",
      "p": "mǎi"
     },
     {
      "w": "了",
      "p": "le"
     },
     {
      "w": "地图",
      "p": "dìtú"
     },
     {
      "w": "，",
      "p": ""
     },
     {
      "w": "大家",
      "p": "，dà"
     },
     {
      "w": "用",
      "p": "jiā"
     },
     {
      "w": "它",
      "p": "yòng"
     },
     {
      "w": "找",
      "p": "tā"
     },
     {
      "w": "路",
      "p": "zhǎo"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "他们去了天安门广场。",
    "en": "They went to Tiananmen Square.",
    "ru": "Они пошли на площадь Тяньаньмэнь.",
    "tokens": [
     {
      "w": "他们",
      "p": "tāmen"
     },
     {
      "w": "去了",
      "p": "qùle"
     },
     {
      "w": "天安门",
      "p": "Tiānānmén"
     },
     {
      "w": "广场",
      "p": "guǎngchǎng"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克被长城的美丽吸引住了。",
    "en": "Mark was attracted by the beauty of the Great Wall.",
    "ru": "Марк был очарован красотой Великой Китайской стены.",
    "tokens": [
     {
      "w": "马克",
      "p": "Mǎkè"
     },
     {
      "w": "被",
      "p": "bèi"
     },
     {
      "w": "长城",
      "p": "Chángchéng"
     },
     {
      "w": "的",
      "p": "de"
     },
     {
      "w": "美丽",
      "p": "měilì"
     },
     {
      "w": "吸引住",
      "p": "xīyǐnzhù"
     },
     {
      "w": "了",
      "p": "le"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "艾米丽说如果下雨，他们可以去博物馆。",
    "en": "Emily said if it rained, they could go to the museum.",
    "ru": "Эмили сказала, что если пойдет дождь, они могут пойти в музей.",
    "tokens": [
     {
      "w": "艾",
      "p": "ài"
     },
     {
      "w": "米",
      "p": "mǐ"
     },
     {
      "w": "丽",
      "p": "lì"
     },
     {
      "w": "说",
      "p": "shuō"
     },
     {
      "w": "如果",
      "p": "rúguǒ"
     },
     {
      "w": "下雨",
      "p": "xiàyǔ"
     },
     {
      "w": "，",
      "p": ""
     },
     {
      "w": "他们",
      "p": "，tā"
     },
     {
      "w": "可以",
      "p": "menkě"
     },
     {
      "w": "去",
      "p": "yǐ"
     },
     {
      "w": "博物",
      "p": "qùbó"
     },
     {
      "w": "馆",
      "p": "wù"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "但是，天气很好，他们去了故宫。",
    "en": "But the weather was good, so they went to the Forbidden City.",
    "ru": "Но погода была хорошая, поэтому они пошли в Запретный город (Гугун).",
    "tokens": [
     {
      "w": "但是",
      "p": "dànshì"
     },
     {
      "w": "，",
      "p": ""
     },
     {
      "w": "天气",
      "p": "，tiān"
     },
     {
      "w": "很好",
      "p": "qìhěn"
     },
     {
      "w": "，",
      "p": ""
     },
     {
      "w": "他们",
      "p": "hǎo，"
     },
     {
      "w": "去了",
      "p": "tāmen"
     },
     {
      "w": "故宫",
      "p": "Qùle"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明说北京真棒！",
    "en": "Xiaoming said Beijing was great!",
    "ru": "Сяомин сказал: Пекин замечателен!",
    "tokens": [
     {
      "w": "小明",
      "p": "Xiǎomíng"
     },
     {
      "w": "说",
      "p": "shuō"
     },
     {
      "w": "北京",
      "p": "Běijīng"
     },
     {
      "w": "真",
      "p": "zhēn"
     },
     {
      "w": "棒",
      "p": "bàng"
     },
     {
      "w": "！",
      "p": ""
     }
    ]
   },
   {
    "zh": "他们一起吃北京烤鸭。",
    "en": "They ate Beijing roast duck together.",
    "ru": "Они вместе ели утку по-пекински.",
    "tokens": [
     {
      "w": "他们",
      "p": "tāmen"
     },
     {
      "w": "一起",
      "p": "yìqǐ"
     },
     {
      "w": "吃",
      "p": "chī"
     },
     {
      "w": "北京",
      "p": "Běijīng"
     },
     {
      "w": "烤鸭",
      "p": "kǎoyā"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "旅行很成功，大家都很开心。",
    "en": "The trip was successful, and everyone was happy.",
    "ru": "Поездка удалась, и все были счастливы.",
    "tokens": [
     {
      "w": "旅行",
      "p": "lǚxíng"
     },
     {
      "w": "很",
      "p": "hěn"
     },
     {
      "w": "成功",
      "p": "chénggōng"
     },
     {
      "w": "，",
      "p": ""
     },
     {
      "w": "大家",
      "p": "，dà"
     },
     {
      "w": "都很",
      "p": "jiādōu"
     },
     {
      "w": "开心",
      "p": "hěnkāi"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "下次他们还想再来北京。",
    "en": "Next time, they want to come back to Beijing.",
    "ru": "В следующий раз они хотят вернуться в Пекин.",
    "tokens": [
     {
      "w": "下次",
      "p": "xiàcì"
     },
     {
      "w": "他们",
      "p": "tāmen"
     },
     {
      "w": "还想",
      "p": "háixiǎng"
     },
     {
      "w": "再来",
      "p": "zàilái"
     },
     {
      "w": "北京",
      "p": "Běijīng"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   }
  ],
  "questions": [
   {
    "q": "What did Xiaohong buy when they arrived in Beijing?",
    "options": [
     "A map",
     "A train ticket",
     "A hotel reservation",
     "A camera"
    ],
    "answer": 0
   },
   {
    "q": "Why did they go to the Forbidden City instead of the museum?",
    "options": [
     "It was raining",
     "The weather was good",
     "They wanted to see the Great Wall",
     "They were tired"
    ],
    "answer": 1
   },
   {
    "q": "What did they eat together in Beijing?",
    "options": [
     "Beijing roast duck",
     "Peking duck soup",
     "Beijing noodles",
     "Beijing hotpot"
    ],
    "answer": 0
   }
  ]
 },
 {
  "id": "3-12",
  "level": 3,
  "title": {
   "zh": "找工作",
   "en": "Looking for a job",
   "ru": "Поиск работы"
  },
  "sentences": [
   {
    "zh": "小明在找一份新工作。",
    "en": "Xiaoming is looking for a new job.",
    "ru": "Сяомин ищет новую работу.",
    "tokens": [
     {
      "w": "小明",
      "p": "Xiǎomíng"
     },
     {
      "w": "在",
      "p": "zài"
     },
     {
      "w": "找",
      "p": "zhǎo"
     },
     {
      "w": "一份",
      "p": "yífèn"
     },
     {
      "w": "新",
      "p": "xīn"
     },
     {
      "w": "工作",
      "p": "gōngzuò"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "他每天看招聘信息。",
    "en": "He checks job postings every day.",
    "ru": "Он каждый день смотрит объявления о вакансиях.",
    "tokens": [
     {
      "w": "他",
      "p": "tā"
     },
     {
      "w": "每天",
      "p": "měitiān"
     },
     {
      "w": "看",
      "p": "kàn"
     },
     {
      "w": "招聘",
      "p": "zhāopìn"
     },
     {
      "w": "信息",
      "p": "xìnxī"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小红说找工作很难。",
    "en": "Xiaohong says finding a job is hard.",
    "ru": "Сяохун говорит, что найти работу сложно.",
    "tokens": [
     {
      "w": "小",
      "p": "xiǎo"
     },
     {
      "w": "红",
      "p": "hóng"
     },
     {
      "w": "说",
      "p": "shuō"
     },
     {
      "w": "找工作",
      "p": "zhǎogōngzuò"
     },
     {
      "w": "很",
      "p": "hěn"
     },
     {
      "w": "难",
      "p": "nán"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克问小明需要帮助吗？",
    "en": "Mark asks if Xiaoming needs help?",
    "ru": "Марк спрашивает, нужна ли Сяомину помощь?",
    "tokens": [
     {
      "w": "马克",
      "p": "Mǎkè"
     },
     {
      "w": "问",
      "p": "wèn"
     },
     {
      "w": "小明",
      "p": "Xiǎomíng"
     },
     {
      "w": "需要",
      "p": "xūyào"
     },
     {
      "w": "帮助",
      "p": "bāngzhù"
     },
     {
      "w": "吗",
      "p": "ma"
     },
     {
      "w": "？",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明说谢谢，他正在准备面试。",
    "en": "Xiaoming says thank you, he is preparing for an interview.",
    "ru": "Сяомин говорит спасибо, он готовится к собеседованию.",
    "tokens": [
     {
      "w": "小明",
      "p": "Xiǎomíng"
     },
     {
      "w": "说",
      "p": "shuō"
     },
     {
      "w": "谢谢",
      "p": "xièxiè"
     },
     {
      "w": "，",
      "p": ""
     },
     {
      "w": "他",
      "p": "，"
     },
     {
      "w": "正在",
      "p": "tāzhèng"
     },
     {
      "w": "准备",
      "p": "zàizhǔn"
     },
     {
      "w": "面试",
      "p": "bèimiàn"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "艾米丽说她找到了工作。",
    "en": "Emily says she found a job.",
    "ru": "Эмили говорит, что нашла работу.",
    "tokens": [
     {
      "w": "艾",
      "p": "ài"
     },
     {
      "w": "米",
      "p": "mǐ"
     },
     {
      "w": "丽",
      "p": "lì"
     },
     {
      "w": "说",
      "p": "shuō"
     },
     {
      "w": "她",
      "p": "tā"
     },
     {
      "w": "找到",
      "p": "zhǎodào"
     },
     {
      "w": "了",
      "p": "le"
     },
     {
      "w": "工作",
      "p": "gōngzuò"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小红问艾米丽在哪里工作？",
    "en": "Xiaohong asks where Emily works?",
    "ru": "Сяохун спрашивает, где работает Эмили.",
    "tokens": [
     {
      "w": "小",
      "p": "xiǎo"
     },
     {
      "w": "红",
      "p": "hóng"
     },
     {
      "w": "问",
      "p": "wèn"
     },
     {
      "w": "艾",
      "p": "ài"
     },
     {
      "w": "米",
      "p": "mǐ"
     },
     {
      "w": "丽",
      "p": "lì"
     },
     {
      "w": "在",
      "p": "zài"
     },
     {
      "w": "哪里",
      "p": "nǎlǐ"
     },
     {
      "w": "工作",
      "p": "gōngzuò"
     },
     {
      "w": "？",
      "p": ""
     }
    ]
   },
   {
    "zh": "艾米丽说她在一家公司当翻译。",
    "en": "Emily says she works as a translator in a company.",
    "ru": "Эмили говорит, что работает переводчиком в компании.",
    "tokens": [
     {
      "w": "艾",
      "p": "ài"
     },
     {
      "w": "米",
      "p": "mǐ"
     },
     {
      "w": "丽",
      "p": "lì"
     },
     {
      "w": "说",
      "p": "shuō"
     },
     {
      "w": "她在",
      "p": "tāzài"
     },
     {
      "w": "一家",
      "p": "yìjiā"
     },
     {
      "w": "公司",
      "p": "gōngsī"
     },
     {
      "w": "当",
      "p": "dāng"
     },
     {
      "w": "翻译",
      "p": "fānyì"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克说如果努力，工作会找到的。",
    "en": "Mark says that if you work hard, you will find a job.",
    "ru": "Марк говорит, что если усердствовать, работа найдется.",
    "tokens": [
     {
      "w": "马克",
      "p": "Mǎkè"
     },
     {
      "w": "说",
      "p": "shuō"
     },
     {
      "w": "如果",
      "p": "rúguǒ"
     },
     {
      "w": "努力",
      "p": "nǔlì"
     },
     {
      "w": "，",
      "p": ""
     },
     {
      "w": "工作",
      "p": "，gōng"
     },
     {
      "w": "会",
      "p": "zuò"
     },
     {
      "w": "找到",
      "p": "huìzhǎo"
     },
     {
      "w": "的",
      "p": "dào"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明听了很高兴。",
    "en": "Xiaoming felt happy after hearing that.",
    "ru": "Сяомин почувствовал себя счастливым, услышав это.",
    "tokens": [
     {
      "w": "小明",
      "p": "Xiǎomíng"
     },
     {
      "w": "听",
      "p": "tīng"
     },
     {
      "w": "了",
      "p": "le"
     },
     {
      "w": "很",
      "p": "hěn"
     },
     {
      "w": "高兴",
      "p": "gāoxìng"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "他一边找工作一边学习新技能。",
    "en": "He looks for a job while learning new skills.",
    "ru": "Он ищет работу, одновременно изучая новые навыки.",
    "tokens": [
     {
      "w": "他",
      "p": "tā"
     },
     {
      "w": "一边",
      "p": "yìbiān"
     },
     {
      "w": "找工作",
      "p": "zhǎogōngzuò"
     },
     {
      "w": "一边",
      "p": "yìbiān"
     },
     {
      "w": "学习",
      "p": "xuéxí"
     },
     {
      "w": "新",
      "p": "xīn"
     },
     {
      "w": "技能",
      "p": "jìnéng"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小红说找工作要耐心。",
    "en": "Xiaohong says finding a job requires patience.",
    "ru": "Сяохун говорит, что найти работу требует терпения.",
    "tokens": [
     {
      "w": "小",
      "p": "xiǎo"
     },
     {
      "w": "红",
      "p": "hóng"
     },
     {
      "w": "说",
      "p": "shuō"
     },
     {
      "w": "找工作",
      "p": "zhǎogōngzuò"
     },
     {
      "w": "要",
      "p": "yào"
     },
     {
      "w": "耐心",
      "p": "nàixīn"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明决定继续努力。",
    "en": "Xiaoming decided to keep trying.",
    "ru": "Сяомин решил продолжать стараться.",
    "tokens": [
     {
      "w": "小明",
      "p": "Xiǎomíng"
     },
     {
      "w": "决定",
      "p": "juédìng"
     },
     {
      "w": "继续",
      "p": "jìxù"
     },
     {
      "w": "努力",
      "p": "nǔlì"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "他相信明天会更好。",
    "en": "He believes tomorrow will be better.",
    "ru": "Он верит, что завтра будет лучше.",
    "tokens": [
     {
      "w": "他",
      "p": "tā"
     },
     {
      "w": "相信",
      "p": "xiāngxìn"
     },
     {
      "w": "明天",
      "p": "míngtiān"
     },
     {
      "w": "会",
      "p": "huì"
     },
     {
      "w": "更好",
      "p": "gènghǎo"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   }
  ],
  "questions": [
   {
    "q": "What is Xiaoming doing while looking for a new job?",
    "options": [
     "Checking job postings every day",
     "Preparing for an interview",
     "Learning new skills",
     "Working as a translator"
    ],
    "answer": 2
   },
   {
    "q": "Why does Xiaoming feel happy after hearing Mark's words?",
    "options": [
     "Mark offered to help him find a job",
     "Mark said that working hard will lead to a job",
     "Emily found a job as a translator",
     "Xiaohong said finding a job is hard"
    ],
    "answer": 1
   },
   {
    "q": "What does Xiaohong say about finding a job?",
    "options": [
     "It requires patience",
     "It is easy to find a job",
     "It is impossible to find a job",
     "It requires a lot of money"
    ],
    "answer": 0
   }
  ]
 },
 {
  "id": "3-13",
  "level": 3,
  "title": {
   "zh": "一次误会",
   "en": "A misunderstanding",
   "ru": "Недоразумение"
  },
  "sentences": [
   {
    "zh": "小明和小红是好朋友。",
    "en": "Xiaoming and Xiaohong are good friends.",
    "ru": "Сяомин и Сяохун — хорошие друзья.",
    "tokens": [
     {
      "w": "小明",
      "p": "Xiǎomíng"
     },
     {
      "w": "和",
      "p": "hé"
     },
     {
      "w": "小",
      "p": "xiǎo"
     },
     {
      "w": "红",
      "p": "hóng"
     },
     {
      "w": "是",
      "p": "shì"
     },
     {
      "w": "好朋友",
      "p": "hǎopéngyǒu"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克是新来的学生。",
    "en": "Mark is a new student.",
    "ru": "Марк — новый студент.",
    "tokens": [
     {
      "w": "马克",
      "p": "Mǎkè"
     },
     {
      "w": "是",
      "p": "shì"
     },
     {
      "w": "新来",
      "p": "xīnlái"
     },
     {
      "w": "的",
      "p": "de"
     },
     {
      "w": "学生",
      "p": "xuéshēng"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "艾米丽也喜欢和马克说话。",
    "en": "Emily also likes to talk to Mark.",
    "ru": "Эмили тоже любит говорить с Марком.",
    "tokens": [
     {
      "w": "艾",
      "p": "ài"
     },
     {
      "w": "米",
      "p": "mǐ"
     },
     {
      "w": "丽",
      "p": "lì"
     },
     {
      "w": "也",
      "p": "yě"
     },
     {
      "w": "喜欢",
      "p": "xǐhuan"
     },
     {
      "w": "和",
      "p": "hé"
     },
     {
      "w": "马克",
      "p": "Mǎkè"
     },
     {
      "w": "说话",
      "p": "shuōhuà"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明看到马克和艾米丽说话。",
    "en": "Xiaoming saw Mark talking to Emily.",
    "ru": "Сяомин увидел, как Марк говорит с Эмили.",
    "tokens": [
     {
      "w": "小明",
      "p": "Xiǎomíng"
     },
     {
      "w": "看到",
      "p": "kàndào"
     },
     {
      "w": "马克",
      "p": "Mǎkè"
     },
     {
      "w": "和",
      "p": "hé"
     },
     {
      "w": "艾",
      "p": "ài"
     },
     {
      "w": "米",
      "p": "mǐ"
     },
     {
      "w": "丽",
      "p": "lì"
     },
     {
      "w": "说话",
      "p": "shuōhuà"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明很生气。",
    "en": "Xiaoming was angry.",
    "ru": "Сяомин был зол.",
    "tokens": [
     {
      "w": "小明",
      "p": "Xiǎomíng"
     },
     {
      "w": "很",
      "p": "hěn"
     },
     {
      "w": "生气",
      "p": "shēngqì"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明对小红说：马克和艾米丽在谈恋爱。",
    "en": "Xiaoming told Xiaohong: Mark and Emily are dating.",
    "ru": "Сяомин сказал Сяохун: Марк и Эмили встречаются.",
    "tokens": [
     {
      "w": "小明",
      "p": "Xiǎomíng"
     },
     {
      "w": "对",
      "p": "duì"
     },
     {
      "w": "小",
      "p": "xiǎo"
     },
     {
      "w": "红",
      "p": "hóng"
     },
     {
      "w": "说",
      "p": "shuō"
     },
     {
      "w": "：",
      "p": ""
     },
     {
      "w": "马克",
      "p": "：mǎ"
     },
     {
      "w": "和",
      "p": "kè"
     },
     {
      "w": "艾",
      "p": "hé"
     },
     {
      "w": "米",
      "p": "ài"
     },
     {
      "w": "丽",
      "p": "mǐ"
     },
     {
      "w": "在",
      "p": "lì"
     },
     {
      "w": "谈",
      "p": "zài"
     },
     {
      "w": "恋爱",
      "p": "tánliàn"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小红很惊讶。",
    "en": "Xiaohong was surprised.",
    "ru": "Сяохун удивилась.",
    "tokens": [
     {
      "w": "小",
      "p": "xiǎo"
     },
     {
      "w": "红",
      "p": "hóng"
     },
     {
      "w": "很",
      "p": "hěn"
     },
     {
      "w": "惊讶",
      "p": "jīngyà"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小红问马克：你在和艾米丽说话吗？",
    "en": "Xiaohong asked Mark: Are you talking to Emily?",
    "ru": "Сяохун спросила Марка: Ты говоришь с Эмили?",
    "tokens": [
     {
      "w": "小",
      "p": "xiǎo"
     },
     {
      "w": "红",
      "p": "hóng"
     },
     {
      "w": "问",
      "p": "wèn"
     },
     {
      "w": "马克",
      "p": "Mǎkè"
     },
     {
      "w": "：",
      "p": ""
     },
     {
      "w": "你在",
      "p": "：nǐ"
     },
     {
      "w": "和",
      "p": "zài"
     },
     {
      "w": "艾",
      "p": "hé"
     },
     {
      "w": "米",
      "p": "ài"
     },
     {
      "w": "丽",
      "p": "mǐ"
     },
     {
      "w": "说话",
      "p": "lìshuō"
     },
     {
      "w": "吗",
      "p": "huà"
     },
     {
      "w": "？",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克说：是的，我们在学习中文。",
    "en": "Mark said: Yes, we are studying Chinese.",
    "ru": "Марк сказал: Да, мы изучаем китайский язык.",
    "tokens": [
     {
      "w": "马克",
      "p": "Mǎkè"
     },
     {
      "w": "说",
      "p": "shuō"
     },
     {
      "w": "：",
      "p": ""
     },
     {
      "w": "是",
      "p": "："
     },
     {
      "w": "的",
      "p": "shì"
     },
     {
      "w": "，",
      "p": ""
     },
     {
      "w": "我们",
      "p": "de，"
     },
     {
      "w": "在",
      "p": "wǒ"
     },
     {
      "w": "学习",
      "p": "menzài"
     },
     {
      "w": "中文",
      "p": "xuéxí"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明很不好意思。",
    "en": "Xiaoming felt embarrassed.",
    "ru": "Сяомин почувствовал себя неловко.",
    "tokens": [
     {
      "w": "小明",
      "p": "Xiǎomíng"
     },
     {
      "w": "很",
      "p": "hěn"
     },
     {
      "w": "不好意思",
      "p": "bùhǎoyìsi"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明对马克说：对不起，我误会了。",
    "en": "Xiaoming said to Mark: I'm sorry, I misunderstood.",
    "ru": "Сяомин сказал Марку: Прости, я ошибся.",
    "tokens": [
     {
      "w": "小明",
      "p": "Xiǎomíng"
     },
     {
      "w": "对",
      "p": "duì"
     },
     {
      "w": "马克",
      "p": "Mǎkè"
     },
     {
      "w": "说",
      "p": "shuō"
     },
     {
      "w": "：",
      "p": ""
     },
     {
      "w": "对不起",
      "p": "：duìbù"
     },
     {
      "w": "，",
      "p": ""
     },
     {
      "w": "我",
      "p": "qǐ"
     },
     {
      "w": "误会",
      "p": "，wǒ"
     },
     {
      "w": "了",
      "p": "wù"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克笑了：没关系。",
    "en": "Mark laughed: It's okay.",
    "ru": "Марк засмеялся: Ничего страшного.",
    "tokens": [
     {
      "w": "马克",
      "p": "Mǎkè"
     },
     {
      "w": "笑了",
      "p": "xiàole"
     },
     {
      "w": "：",
      "p": ""
     },
     {
      "w": "没关系",
      "p": "：méiguān"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "他们一起笑了。",
    "en": "They all laughed together.",
    "ru": "Они все вместе засмеялись.",
    "tokens": [
     {
      "w": "他们",
      "p": "tāmen"
     },
     {
      "w": "一起",
      "p": "yìqǐ"
     },
     {
      "w": "笑了",
      "p": "xiàole"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明明白了：不要轻易误会别人。",
    "en": "Xiaoming understood: Don't easily misunderstand others.",
    "ru": "Сяомин понял: не стоит делать поспешные выводы о людях.",
    "tokens": [
     {
      "w": "小明",
      "p": "Xiǎomíng"
     },
     {
      "w": "明白",
      "p": "míngbái"
     },
     {
      "w": "了",
      "p": "le"
     },
     {
      "w": "：",
      "p": ""
     },
     {
      "w": "不要",
      "p": "：bú"
     },
     {
      "w": "轻易",
      "p": "yàoqīng"
     },
     {
      "w": "误会",
      "p": "yìwù"
     },
     {
      "w": "别人",
      "p": "huìbié"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   }
  ],
  "questions": [
   {
    "q": "Why was Xiaoming angry?",
    "options": [
     "He saw Mark and Emily talking.",
     "He thought Mark and Emily were dating.",
     "He was jealous of Emily.",
     "He didn't like Emily."
    ],
    "answer": 1
   },
   {
    "q": "What did Mark and Emily actually do together?",
    "options": [
     "They were dating.",
     "They were studying Chinese.",
     "They were arguing.",
     "They were playing games."
    ],
    "answer": 1
   },
   {
    "q": "What lesson did Xiaoming learn?",
    "options": [
     "Don't talk to new students.",
     "Don't misunderstand others.",
     "Don't be friends with Emily.",
     "Don't laugh at others."
    ],
    "answer": 1
   }
  ]
 },
 {
  "id": "3-14",
  "level": 3,
  "title": {
   "zh": "一封信",
   "en": "A letter",
   "ru": "Письмо"
  },
  "sentences": [
   {
    "zh": "小明给小红写了一封信。",
    "en": "Xiaoming wrote a letter to Xiaohong.",
    "ru": "Сяомин написал письмо Сяохун.",
    "tokens": [
     {
      "w": "小明",
      "p": "Xiǎomíng"
     },
     {
      "w": "给",
      "p": "gěi"
     },
     {
      "w": "小",
      "p": "xiǎo"
     },
     {
      "w": "红",
      "p": "hóng"
     },
     {
      "w": "写",
      "p": "xiě"
     },
     {
      "w": "了",
      "p": "le"
     },
     {
      "w": "一封信",
      "p": "yìfēngxìn"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "信里说他要去北京。",
    "en": "The letter said he was going to Beijing.",
    "ru": "В письме говорилось, что он едет в Пекин.",
    "tokens": [
     {
      "w": "信里",
      "p": "xìnlǐ"
     },
     {
      "w": "说",
      "p": "shuō"
     },
     {
      "w": "他要",
      "p": "tāyào"
     },
     {
      "w": "去",
      "p": "qù"
     },
     {
      "w": "北京",
      "p": "Běijīng"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小红很担心。",
    "en": "Xiaohong was worried.",
    "ru": "Сяохун беспокоилась.",
    "tokens": [
     {
      "w": "小",
      "p": "xiǎo"
     },
     {
      "w": "红",
      "p": "hóng"
     },
     {
      "w": "很",
      "p": "hěn"
     },
     {
      "w": "担心",
      "p": "dānxīn"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "她给小明回了一封信。",
    "en": "She wrote a letter back to Xiaoming.",
    "ru": "Она написала ответное письмо Сяомину.",
    "tokens": [
     {
      "w": "她",
      "p": "tā"
     },
     {
      "w": "给",
      "p": "gěi"
     },
     {
      "w": "小明",
      "p": "Xiǎomíng"
     },
     {
      "w": "回",
      "p": "huí"
     },
     {
      "w": "了",
      "p": "le"
     },
     {
      "w": "一封信",
      "p": "yìfēngxìn"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小红问：你什么时候回来？",
    "en": "Xiaohong asked: When will you come back?",
    "ru": "Сяохун спросила: Когда ты вернёшься?",
    "tokens": [
     {
      "w": "小",
      "p": "xiǎo"
     },
     {
      "w": "红",
      "p": "hóng"
     },
     {
      "w": "问",
      "p": "wèn"
     },
     {
      "w": "：",
      "p": ""
     },
     {
      "w": "你",
      "p": "："
     },
     {
      "w": "什么时候",
      "p": "nǐshénmeshí"
     },
     {
      "w": "回来",
      "p": "hòuhuí"
     },
     {
      "w": "？",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明回信说：我明天就回来。",
    "en": "Xiaoming replied: I will come back tomorrow.",
    "ru": "Сяомин ответил: Я вернусь завтра.",
    "tokens": [
     {
      "w": "小明",
      "p": "Xiǎomíng"
     },
     {
      "w": "回信",
      "p": "huíxìn"
     },
     {
      "w": "说",
      "p": "shuō"
     },
     {
      "w": "：",
      "p": ""
     },
     {
      "w": "我",
      "p": "："
     },
     {
      "w": "明天",
      "p": "wǒmíng"
     },
     {
      "w": "就",
      "p": "tiān"
     },
     {
      "w": "回来",
      "p": "jiùhuí"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克和艾米丽也想写信。",
    "en": "Mark and Emily also wanted to write a letter.",
    "ru": "Марк и Эмили тоже хотели написать письмо.",
    "tokens": [
     {
      "w": "马克",
      "p": "Mǎkè"
     },
     {
      "w": "和",
      "p": "hé"
     },
     {
      "w": "艾",
      "p": "ài"
     },
     {
      "w": "米",
      "p": "mǐ"
     },
     {
      "w": "丽",
      "p": "lì"
     },
     {
      "w": "也想",
      "p": "yěxiǎng"
     },
     {
      "w": "写信",
      "p": "xiěxìn"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "他们用中文写了一封信。",
    "en": "They wrote a letter in Chinese.",
    "ru": "Они написали письмо по-китайски.",
    "tokens": [
     {
      "w": "他们",
      "p": "tāmen"
     },
     {
      "w": "用",
      "p": "yòng"
     },
     {
      "w": "中文",
      "p": "zhōngwén"
     },
     {
      "w": "写",
      "p": "xiě"
     },
     {
      "w": "了",
      "p": "le"
     },
     {
      "w": "一封信",
      "p": "yìfēngxìn"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "信里说他们喜欢北京。",
    "en": "The letter said they liked Beijing.",
    "ru": "В письме говорилось, что им нравится Пекин.",
    "tokens": [
     {
      "w": "信里",
      "p": "xìnlǐ"
     },
     {
      "w": "说",
      "p": "shuō"
     },
     {
      "w": "他们",
      "p": "tāmen"
     },
     {
      "w": "喜欢",
      "p": "xǐhuan"
     },
     {
      "w": "北京",
      "p": "Běijīng"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小红收到信很高兴。",
    "en": "Xiaohong was happy to receive the letter.",
    "ru": "Сяохун была рада получить письмо.",
    "tokens": [
     {
      "w": "小",
      "p": "xiǎo"
     },
     {
      "w": "红",
      "p": "hóng"
     },
     {
      "w": "收到",
      "p": "shōudào"
     },
     {
      "w": "信",
      "p": "xìn"
     },
     {
      "w": "很",
      "p": "hěn"
     },
     {
      "w": "高兴",
      "p": "gāoxìng"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "她给马克和艾米丽回信。",
    "en": "She wrote a letter back to Mark and Emily.",
    "ru": "Она написала ответное письмо Марку и Эмили.",
    "tokens": [
     {
      "w": "她",
      "p": "tā"
     },
     {
      "w": "给",
      "p": "gěi"
     },
     {
      "w": "马克",
      "p": "Mǎkè"
     },
     {
      "w": "和",
      "p": "hé"
     },
     {
      "w": "艾",
      "p": "ài"
     },
     {
      "w": "米",
      "p": "mǐ"
     },
     {
      "w": "丽",
      "p": "lì"
     },
     {
      "w": "回信",
      "p": "huíxìn"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小红说：谢谢你们的信。",
    "en": "Xiaohong said: Thank you for your letter.",
    "ru": "Сяохун сказала: Спасибо за ваше письмо.",
    "tokens": [
     {
      "w": "小",
      "p": "xiǎo"
     },
     {
      "w": "红",
      "p": "hóng"
     },
     {
      "w": "说",
      "p": "shuō"
     },
     {
      "w": "：",
      "p": ""
     },
     {
      "w": "谢谢",
      "p": "：xiè"
     },
     {
      "w": "你们",
      "p": "xiènǐ"
     },
     {
      "w": "的",
      "p": "men"
     },
     {
      "w": "信",
      "p": "de"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克和艾米丽笑了。",
    "en": "Mark and Emily smiled.",
    "ru": "Марк и Эмили улыбнулись.",
    "tokens": [
     {
      "w": "马克",
      "p": "Mǎkè"
     },
     {
      "w": "和",
      "p": "hé"
     },
     {
      "w": "艾",
      "p": "ài"
     },
     {
      "w": "米",
      "p": "mǐ"
     },
     {
      "w": "丽",
      "p": "lì"
     },
     {
      "w": "笑了",
      "p": "xiàole"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明、小红、马克和艾米丽都很快乐。",
    "en": "Xiaoming, Xiaohong, Mark, and Emily were all very happy.",
    "ru": "Сяомин, Сяохун, Марк и Эмили были очень счастливы.",
    "tokens": [
     {
      "w": "小明",
      "p": "Xiǎomíng"
     },
     {
      "w": "、",
      "p": ""
     },
     {
      "w": "小",
      "p": "、"
     },
     {
      "w": "红",
      "p": "xiǎo"
     },
     {
      "w": "、",
      "p": ""
     },
     {
      "w": "马克",
      "p": "Hóng、"
     },
     {
      "w": "和",
      "p": "mǎ"
     },
     {
      "w": "艾",
      "p": "kè"
     },
     {
      "w": "米",
      "p": "hé"
     },
     {
      "w": "丽",
      "p": "ài"
     },
     {
      "w": "都很",
      "p": "mǐlì"
     },
     {
      "w": "快乐",
      "p": "dōuhěn"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   }
  ],
  "questions": [
   {
    "q": "What did Xiaoming write in his letter to Xiaohong?",
    "options": [
     "He was going to Beijing.",
     "He was going to Shanghai.",
     "He was going to Hangzhou.",
     "He was going to Guangzhou."
    ],
    "answer": 0
   },
   {
    "q": "Why was Xiaohong worried?",
    "options": [
     "Because Xiaoming was going to Beijing.",
     "Because Xiaoming was going to Shanghai.",
     "Because Xiaoming was going to Hangzhou.",
     "Because Xiaoming was going to Guangzhou."
    ],
    "answer": 0
   },
   {
    "q": "What did Mark and Emily write in their letter to Xiaohong?",
    "options": [
     "They liked Beijing.",
     "They liked Shanghai.",
     "They liked Hangzhou.",
     "They liked Guangzhou."
    ],
    "answer": 0
   }
  ]
 }
];
