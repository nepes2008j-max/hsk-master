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
     "Xiao Ming",
     "Xiao Hong",
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
     "Xiao Ming",
     "Xiao Hong",
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
     "Xiao Hong",
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
     "Xiao Ming",
     "Mark",
     "Emily",
     "Xiao Hong"
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
     "Xiao Hong.",
     "Mark.",
     "Emily.",
     "Xiao Ming."
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
     "Xiao Hong said finding a job is hard"
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
     "Because Xiao Ming was going to Beijing.",
     "Because Xiao Ming was going to Shanghai.",
     "Because Xiao Ming was going to Hangzhou.",
     "Because Xiao Ming was going to Guangzhou."
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
 },
 {
  "id": "1-15",
  "level": 1,
  "title": {
   "zh": "我的学校",
   "en": "My school",
   "ru": "Моя школа"
  },
  "sentences": [
   {
    "zh": "小明在学校。",
    "en": "Xiao Ming is at school.",
    "ru": "Сяо Мин в школе.",
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
      "w": "学校",
      "p": "xuéxiào"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "学校有大操场。",
    "en": "The school has a big playground.",
    "ru": "В школе есть большая спортивная площадка.",
    "tokens": [
     {
      "w": "学校",
      "p": "xuéxiào"
     },
     {
      "w": "有",
      "p": "yǒu"
     },
     {
      "w": "大",
      "p": "dà"
     },
     {
      "w": "操场",
      "p": "cāochǎng"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小红在操场跑步。",
    "en": "Xiao Hong is running on the playground.",
    "ru": "Сяо Хун бежит по спортивной площадке.",
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
      "w": "在",
      "p": "zài"
     },
     {
      "w": "操场",
      "p": "cāochǎng"
     },
     {
      "w": "跑步",
      "p": "pǎobù"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克和艾米丽在打篮球。",
    "en": "Mark and Emily are playing basketball.",
    "ru": "Марк и Эмили играют в баскетбол.",
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
      "w": "打",
      "p": "dǎ"
     },
     {
      "w": "篮球",
      "p": "lánqiú"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明喜欢学校。",
    "en": "Xiao Ming likes school.",
    "ru": "Сяо Мин любит школу.",
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
      "w": "学校",
      "p": "xuéxiào"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "学校很美丽。",
    "en": "The school is very beautiful.",
    "ru": "Школа очень красивая.",
    "tokens": [
     {
      "w": "学校",
      "p": "xuéxiào"
     },
     {
      "w": "很",
      "p": "hěn"
     },
     {
      "w": "美丽",
      "p": "měilì"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小红问：学校有图书馆吗？",
    "en": "Xiao Hong asks: Is there a library at school?",
    "ru": "Сяо Хун спрашивает: Есть ли в школе библиотека?",
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
      "w": "学校",
      "p": "：xué"
     },
     {
      "w": "有",
      "p": "xiào"
     },
     {
      "w": "图书",
      "p": "yǒutú"
     },
     {
      "w": "馆",
      "p": "shū"
     },
     {
      "w": "吗",
      "p": "guǎn"
     },
     {
      "w": "？",
      "p": ""
     }
    ]
   },
   {
    "zh": "老师说：有，图书馆在教学楼。",
    "en": "The teacher says: Yes, the library is in the teaching building.",
    "ru": "Учитель говорит: Да, библиотека находится в учебном здании.",
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
      "w": "有",
      "p": "："
     },
     {
      "w": "，",
      "p": ""
     },
     {
      "w": "图书",
      "p": "yǒu，"
     },
     {
      "w": "馆",
      "p": "tú"
     },
     {
      "w": "在",
      "p": "shū"
     },
     {
      "w": "教学",
      "p": "guǎnzài"
     },
     {
      "w": "楼",
      "p": "jiào"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克说：学校很好！",
    "en": "Mark says: The school is great!",
    "ru": "Марк говорит: Школа отличная!",
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
      "w": "学校",
      "p": "：xué"
     },
     {
      "w": "很好",
      "p": "xiàohěn"
     },
     {
      "w": "！",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明说：我爱学校！",
    "en": "Xiao Ming says: I love school!",
    "ru": "Сяо Мин говорит: Я люблю школу!",
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
      "w": "我",
      "p": "："
     },
     {
      "w": "爱",
      "p": "wǒ"
     },
     {
      "w": "学校",
      "p": "àixué"
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
    "q": "Where is Xiao Hong running?",
    "options": [
     "In the classroom",
     "On the playground",
     "In the library",
     "In the basketball court"
    ],
    "answer": 1
   },
   {
    "q": "What are Mark and Emily doing?",
    "options": [
     "Running",
     "Playing basketball",
     "Reading books",
     "Sleeping"
    ],
    "answer": 1
   },
   {
    "q": "Where is the library located?",
    "options": [
     "In the playground",
     "In the classroom",
     "In the teaching building",
     "In the basketball court"
    ],
    "answer": 2
   }
  ]
 },
 {
  "id": "1-16",
  "level": 1,
  "title": {
   "zh": "我家的狗",
   "en": "My dog",
   "ru": "Моя собака"
  },
  "sentences": [
   {
    "zh": "小明有一只狗。",
    "en": "Xiao Ming has a dog.",
    "ru": "У Сяо Мина есть собака.",
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
      "w": "一只",
      "p": "yìzhī"
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
    "zh": "狗很可爱。",
    "en": "The dog is very cute.",
    "ru": "Собака очень милая.",
    "tokens": [
     {
      "w": "狗",
      "p": "gǒu"
     },
     {
      "w": "很",
      "p": "hěn"
     },
     {
      "w": "可爱",
      "p": "kěài"
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
    "zh": "小红问：狗叫吗？",
    "en": "Xiao Hong asks: Does the dog bark?",
    "ru": "Сяо Хун спрашивает: Лает ли собака?",
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
      "w": "狗叫",
      "p": "：gǒu"
     },
     {
      "w": "吗",
      "p": "jiào"
     },
     {
      "w": "？",
      "p": ""
     }
    ]
   },
   {
    "zh": "狗不叫。",
    "en": "The dog does not bark.",
    "ru": "Собака не лает.",
    "tokens": [
     {
      "w": "狗",
      "p": "gǒu"
     },
     {
      "w": "不",
      "p": "bú"
     },
     {
      "w": "叫",
      "p": "jiào"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克说：狗很安静。",
    "en": "Mark says: The dog is very quiet.",
    "ru": "Марк говорит: Собака очень тихая.",
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
      "w": "狗",
      "p": "："
     },
     {
      "w": "很",
      "p": "gǒu"
     },
     {
      "w": "安静",
      "p": "hěnān"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "艾米丽喜欢狗。",
    "en": "Emily likes the dog.",
    "ru": "Эмили любит собаку.",
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
      "w": "喜欢",
      "p": "xǐhuan"
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
    "zh": "狗和我们玩。",
    "en": "The dog plays with us.",
    "ru": "Собака играет с нами.",
    "tokens": [
     {
      "w": "狗",
      "p": "gǒu"
     },
     {
      "w": "和",
      "p": "hé"
     },
     {
      "w": "我们",
      "p": "wǒmen"
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
    "zh": "狗很友好。",
    "en": "The dog is very friendly.",
    "ru": "Собака очень добрая.",
    "tokens": [
     {
      "w": "狗",
      "p": "gǒu"
     },
     {
      "w": "很",
      "p": "hěn"
     },
     {
      "w": "友好",
      "p": "yǒuhǎo"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "我们爱狗。",
    "en": "We love the dog.",
    "ru": "Мы любим собаку.",
    "tokens": [
     {
      "w": "我们",
      "p": "wǒmen"
     },
     {
      "w": "爱",
      "p": "ài"
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
   }
  ],
  "questions": [
   {
    "q": "Where is the dog located according to the story?",
    "options": [
     "In the kitchen",
     "In the bedroom",
     "In the living room",
     "In the garden"
    ],
    "answer": 2
   },
   {
    "q": "What does Mark say about the dog?",
    "options": [
     "The dog is very loud.",
     "The dog is very quiet.",
     "The dog is very hungry.",
     "The dog is very sleepy."
    ],
    "answer": 1
   },
   {
    "q": "How does Emily feel about the dog?",
    "options": [
     "She dislikes the dog.",
     "She is indifferent to the dog.",
     "She likes the dog.",
     "She is scared of the dog."
    ],
    "answer": 2
   }
  ]
 },
 {
  "id": "1-17",
  "level": 1,
  "title": {
   "zh": "去公园",
   "en": "Going to the park",
   "ru": "В парк"
  },
  "sentences": [
   {
    "zh": "小明有公园的票。",
    "en": "Xiao Ming has tickets to the park.",
    "ru": "У Сяо Мина есть билеты в парк.",
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
      "w": "公园",
      "p": "gōngyuán"
     },
     {
      "w": "的",
      "p": "de"
     },
     {
      "w": "票",
      "p": "piào"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小红在公园门口等。",
    "en": "Xiao Hong is waiting at the park entrance.",
    "ru": "Сяо Хун ждет у входа в парк.",
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
      "w": "在",
      "p": "zài"
     },
     {
      "w": "公园",
      "p": "gōngyuán"
     },
     {
      "w": "门口",
      "p": "ménkǒu"
     },
     {
      "w": "等",
      "p": "děng"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克和艾米丽来了。",
    "en": "Mark and Emily arrived.",
    "ru": "Марк и Эмили пришли.",
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
    "zh": "公园有花。",
    "en": "The park has flowers.",
    "ru": "В парке есть цветы.",
    "tokens": [
     {
      "w": "公园",
      "p": "gōngyuán"
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
    "zh": "花很香。",
    "en": "The flowers are very fragrant.",
    "ru": "Цветы очень ароматные.",
    "tokens": [
     {
      "w": "花",
      "p": "huā"
     },
     {
      "w": "很香",
      "p": "hěnxiāng"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明说：我们玩。",
    "en": "Xiao Ming says: Let's play.",
    "ru": "Сяо Мин говорит: Давайте поиграем.",
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
      "w": "玩",
      "p": "men"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "大家开心。",
    "en": "Everyone is happy.",
    "ru": "Все рады.",
    "tokens": [
     {
      "w": "大家",
      "p": "dàjiā"
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
    "zh": "小红问：公园好吗？",
    "en": "Xiao Hong asks: Is the park good?",
    "ru": "Сяо Хун спрашивает: Парк хорош?",
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
      "w": "公园",
      "p": "：gōng"
     },
     {
      "w": "好",
      "p": "yuán"
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
    "zh": "马克说：是的，很好！",
    "en": "Mark says: Yes, very good!",
    "ru": "Марк говорит: Да, очень хорошо!",
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
      "w": "很好",
      "p": "de，"
     },
     {
      "w": "！",
      "p": ""
     }
    ]
   },
   {
    "zh": "我们回家了。",
    "en": "We go home.",
    "ru": "Мы идем домой.",
    "tokens": [
     {
      "w": "我们",
      "p": "wǒmen"
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
   }
  ],
  "questions": [
   {
    "q": "Where is Xiao Hong waiting?",
    "options": [
     "At the park entrance",
     "At home",
     "At the school",
     "At the cinema"
    ],
    "answer": 0
   },
   {
    "q": "What is the park like according to Mark?",
    "options": [
     "It's boring",
     "It's very good",
     "It's too crowded",
     "It's too expensive"
    ],
    "answer": 1
   }
  ]
 },
 {
  "id": "1-18",
  "level": 1,
  "title": {
   "zh": "我的房间",
   "en": "My room",
   "ru": "Моя комната"
  },
  "sentences": [
   {
    "zh": "小明的房间很干净。",
    "en": "Xiao Ming's room is very clean.",
    "ru": "В комнате Сяо Мина очень чисто.",
    "tokens": [
     {
      "w": "小明",
      "p": "Xiǎomíng"
     },
     {
      "w": "的",
      "p": "de"
     },
     {
      "w": "房间",
      "p": "fángjiān"
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
    "zh": "小红有新书包。",
    "en": "Xiao Hong has a new backpack.",
    "ru": "У Сяо Хун новый рюкзак.",
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
      "w": "新",
      "p": "xīn"
     },
     {
      "w": "书包",
      "p": "shūbāo"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克在房间。",
    "en": "Mark is in the room.",
    "ru": "Марк находится в комнате.",
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
      "w": "房间",
      "p": "fángjiān"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "艾米丽的床很舒服。",
    "en": "Emily's bed is very comfortable.",
    "ru": "Кровать Эмили очень удобная.",
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
      "w": "的",
      "p": "de"
     },
     {
      "w": "床",
      "p": "chuáng"
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
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明问：房间大吗？",
    "en": "Xiao Ming asks: Is the room big?",
    "ru": "Сяо Мин спрашивает: Комната большая?",
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
      "w": "房间",
      "p": "：fáng"
     },
     {
      "w": "大",
      "p": "jiān"
     },
     {
      "w": "吗",
      "p": "dà"
     },
     {
      "w": "？",
      "p": ""
     }
    ]
   },
   {
    "zh": "小红说：不，房间小。",
    "en": "Xiao Hong says: No, the room is small.",
    "ru": "Сяо Хун говорит: Нет, комната маленькая.",
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
      "w": "不",
      "p": "："
     },
     {
      "w": "，",
      "p": ""
     },
     {
      "w": "房间",
      "p": "bù，"
     },
     {
      "w": "小",
      "p": "fáng"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克说：我的书在书架上。",
    "en": "Mark says: My books are on the bookshelf.",
    "ru": "Марк говорит: Мои книги на полке.",
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
      "w": "我的",
      "p": "：wǒ"
     },
     {
      "w": "书",
      "p": "de"
     },
     {
      "w": "在",
      "p": "shū"
     },
     {
      "w": "书架",
      "p": "zàishū"
     },
     {
      "w": "上",
      "p": "jià"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "艾米丽说：我的花很香。",
    "en": "Emily says: My flowers are fragrant.",
    "ru": "Эмили говорит: Мои цветы ароматные.",
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
      "w": "我的",
      "p": "：wǒ"
     },
     {
      "w": "花",
      "p": "de"
     },
     {
      "w": "很香",
      "p": "huāhěn"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "大家喜欢我的房间。",
    "en": "Everyone likes my room.",
    "ru": "Все любят мою комнату.",
    "tokens": [
     {
      "w": "大家",
      "p": "dàjiā"
     },
     {
      "w": "喜欢",
      "p": "xǐhuan"
     },
     {
      "w": "我的",
      "p": "wǒde"
     },
     {
      "w": "房间",
      "p": "fángjiān"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "我的房间真好！",
    "en": "My room is really good!",
    "ru": "Моя комната действительно хорошая!",
    "tokens": [
     {
      "w": "我的",
      "p": "wǒde"
     },
     {
      "w": "房间",
      "p": "fángjiān"
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
    "q": "What is Xiao Ming's room like?",
    "options": [
     "It is very clean.",
     "It is very big.",
     "It is very messy.",
     "It is very old."
    ],
    "answer": 0
   },
   {
    "q": "What does Mark say about his books?",
    "options": [
     "They are on the bookshelf.",
     "They are on the floor.",
     "They are in the backpack.",
     "They are under the bed."
    ],
    "answer": 0
   }
  ]
 },
 {
  "id": "2-19",
  "level": 2,
  "title": {
   "zh": "过生日",
   "en": "A birthday",
   "ru": "День рождения"
  },
  "sentences": [
   {
    "zh": "小明今天过生日。",
    "en": "Xiao Ming is having a birthday today.",
    "ru": "У Сяо Мина сегодня день рождения.",
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
      "w": "过生日",
      "p": "guòshēngrì"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小红送他一个蛋糕。",
    "en": "Xiao Hong gave him a cake.",
    "ru": "Сяо Хун подарила ему торт.",
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
      "w": "送",
      "p": "sòng"
     },
     {
      "w": "他",
      "p": "tā"
     },
     {
      "w": "一个",
      "p": "yígè"
     },
     {
      "w": "蛋糕",
      "p": "dàngāo"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克也送他一个礼物。",
    "en": "Mark also gave him a gift.",
    "ru": "Марк тоже подарил ему подарок.",
    "tokens": [
     {
      "w": "马克",
      "p": "Mǎkè"
     },
     {
      "w": "也",
      "p": "yě"
     },
     {
      "w": "送",
      "p": "sòng"
     },
     {
      "w": "他",
      "p": "tā"
     },
     {
      "w": "一个",
      "p": "yígè"
     },
     {
      "w": "礼物",
      "p": "lǐwù"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "艾米丽说：生日快乐！",
    "en": "Emily said: Happy birthday!",
    "ru": "Эмили сказала: С днём рождения!",
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
      "w": "生日",
      "p": "：shēng"
     },
     {
      "w": "快乐",
      "p": "rìkuài"
     },
     {
      "w": "！",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明笑了，他很高兴。",
    "en": "Xiao Ming smiled, he was very happy.",
    "ru": "Сяо Мин улыбнулся, он был очень счастлив.",
    "tokens": [
     {
      "w": "小明",
      "p": "Xiǎomíng"
     },
     {
      "w": "笑了",
      "p": "xiàole"
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
      "w": "很",
      "p": "tā"
     },
     {
      "w": "高兴",
      "p": "hěngāo"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "蛋糕是草莓味的。",
    "en": "The cake is strawberry-flavored.",
    "ru": "Торт был клубничным.",
    "tokens": [
     {
      "w": "蛋糕",
      "p": "dàngāo"
     },
     {
      "w": "是",
      "p": "shì"
     },
     {
      "w": "草莓",
      "p": "cǎoméi"
     },
     {
      "w": "味",
      "p": "wèi"
     },
     {
      "w": "的",
      "p": "de"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小红说：好吃！",
    "en": "Xiao Hong said: Delicious!",
    "ru": "Сяо Хун сказала: Вкусно!",
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
      "w": "好吃",
      "p": "：hǎo"
     },
     {
      "w": "！",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克说：谢谢。",
    "en": "Mark said: Thank you.",
    "ru": "Марк сказал: Спасибо.",
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
      "w": "谢谢",
      "p": "：xiè"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "艾米丽说：我们吃蛋糕吧。",
    "en": "Emily said: Let's eat the cake.",
    "ru": "Эмили сказала: Давайте съедим торт.",
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
      "w": "我们",
      "p": "：wǒ"
     },
     {
      "w": "吃",
      "p": "men"
     },
     {
      "w": "蛋糕",
      "p": "chīdàn"
     },
     {
      "w": "吧",
      "p": "gāo"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "他们一起吃蛋糕。",
    "en": "They ate the cake together.",
    "ru": "Они вместе съели торт.",
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
      "w": "蛋糕",
      "p": "dàngāo"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明说：谢谢大家。",
    "en": "Xiao Ming said: Thank you everyone.",
    "ru": "Сяо Мин сказал: Спасибо всем.",
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
      "w": "大家",
      "p": "xièdà"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "今天真开心！",
    "en": "Today was so fun!",
    "ru": "Сегодня было так весело!",
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
    "q": "What did Xiao Hong give Xiao Ming for his birthday?",
    "options": [
     "A cake",
     "A gift",
     "A strawberry",
     "A thank you"
    ],
    "answer": 0
   },
   {
    "q": "What flavor was the cake?",
    "options": [
     "Chocolate",
     "Vanilla",
     "Strawberry",
     "Apple"
    ],
    "answer": 2
   },
   {
    "q": "Who said 'Thank you' after receiving the gift?",
    "options": [
     "Xiao Hong",
     "Mark",
     "Emily",
     "Xiao Ming"
    ],
    "answer": 1
   }
  ]
 },
 {
  "id": "2-20",
  "level": 2,
  "title": {
   "zh": "在商店",
   "en": "At the store",
   "ru": "В магазине"
  },
  "sentences": [
   {
    "zh": "小明在商店买东西。",
    "en": "Xiao Ming is shopping at the store.",
    "ru": "Сяо Мин покупает товары в магазине.",
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
    "zh": "小红也来商店。",
    "en": "Xiao Hong also comes to the store.",
    "ru": "Сяо Хун тоже приходит в магазин.",
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
      "w": "商店",
      "p": "shāngdiàn"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克在商店买苹果。",
    "en": "Mark is buying apples at the store.",
    "ru": "Марк покупает яблоки в магазине.",
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
      "w": "商店",
      "p": "shāngdiàn"
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
    "zh": "艾米丽买橙子。",
    "en": "Emily buys oranges.",
    "ru": "Эмили покупает апельсины.",
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
      "w": "买",
      "p": "mǎi"
     },
     {
      "w": "橙",
      "p": "chéng"
     },
     {
      "w": "子",
      "p": "zǐ"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明问小红：苹果贵吗？",
    "en": "Xiao Ming asks Xiao Hong: Are apples expensive?",
    "ru": "Сяо Мин спрашивает Сяо Хун: Яблоки дорогие?",
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
      "w": "小",
      "p": "xiǎo"
     },
     {
      "w": "红",
      "p": "hóng"
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
      "w": "贵",
      "p": "guǒ"
     },
     {
      "w": "吗",
      "p": "guì"
     },
     {
      "w": "？",
      "p": ""
     }
    ]
   },
   {
    "zh": "小红说：苹果不贵。",
    "en": "Xiao Hong says: Apples are not expensive.",
    "ru": "Сяо Хун говорит: Яблоки не дорогие.",
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
      "w": "苹果",
      "p": "：píng"
     },
     {
      "w": "不",
      "p": "guǒ"
     },
     {
      "w": "贵",
      "p": "bú"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克说：我买苹果。",
    "en": "Mark says: I am buying apples.",
    "ru": "Марк говорит: Я покупаю яблоки.",
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
      "w": "买",
      "p": "wǒ"
     },
     {
      "w": "苹果",
      "p": "mǎipíng"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "艾米丽说：橙子便宜。",
    "en": "Emily says: Oranges are cheap.",
    "ru": "Эмили говорит: Апельсины дешевые.",
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
      "w": "橙",
      "p": "："
     },
     {
      "w": "子",
      "p": "chéng"
     },
     {
      "w": "便宜",
      "p": "zǐpián"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明说：我买苹果。",
    "en": "Xiao Ming says: I will buy apples.",
    "ru": "Сяо Мин говорит: Я куплю яблоки.",
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
      "w": "我",
      "p": "："
     },
     {
      "w": "买",
      "p": "wǒ"
     },
     {
      "w": "苹果",
      "p": "mǎipíng"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小红说：我买橙子。",
    "en": "Xiao Hong says: I will buy oranges.",
    "ru": "Сяо Хун говорит: Я куплю апельсины.",
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
      "w": "买",
      "p": "wǒ"
     },
     {
      "w": "橙",
      "p": "mǎi"
     },
     {
      "w": "子",
      "p": "chéng"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明和小红都开心。",
    "en": "Xiao Ming and Xiao Hong are happy.",
    "ru": "Сяо Мин и Сяо Хун оба рады.",
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
      "w": "都",
      "p": "dōu"
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
    "zh": "他们离开商店。",
    "en": "They leave the store.",
    "ru": "Они уходят из магазина.",
    "tokens": [
     {
      "w": "他们",
      "p": "tāmen"
     },
     {
      "w": "离开",
      "p": "líkāi"
     },
     {
      "w": "商店",
      "p": "shāngdiàn"
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
    "q": "Who is buying apples at the store?",
    "options": [
     "Xiao Ming",
     "Mark",
     "Emily",
     "Xiao Hong"
    ],
    "answer": 1
   },
   {
    "q": "What does Xiao Hong say about apples?",
    "options": [
     "Apples are expensive.",
     "Apples are not expensive.",
     "Apples are cheap.",
     "Apples are very expensive."
    ],
    "answer": 1
   }
  ]
 },
 {
  "id": "2-21",
  "level": 2,
  "title": {
   "zh": "我的爱好",
   "en": "My hobbies",
   "ru": "Мои увлечения"
  },
  "sentences": [
   {
    "zh": "小明喜欢画画。",
    "en": "Xiao Ming likes drawing.",
    "ru": "Сяо Мин любит рисовать.",
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
      "w": "画",
      "p": "huà"
     },
     {
      "w": "画",
      "p": "huà"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小红喜欢读书。",
    "en": "Xiao Hong likes reading.",
    "ru": "Сяо Хун любит читать.",
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
      "w": "读书",
      "p": "dúshū"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克喜欢打篮球。",
    "en": "Mark likes playing basketball.",
    "ru": "Марк любит играть в баскетбол.",
    "tokens": [
     {
      "w": "马克",
      "p": "Mǎkè"
     },
     {
      "w": "喜欢",
      "p": "xǐhuan"
     },
     {
      "w": "打",
      "p": "dǎ"
     },
     {
      "w": "篮球",
      "p": "lánqiú"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "艾米丽喜欢唱歌。",
    "en": "Emily likes singing.",
    "ru": "Эмили любит петь.",
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
      "w": "喜欢",
      "p": "xǐhuan"
     },
     {
      "w": "唱歌",
      "p": "chànggē"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明画了一幅画。",
    "en": "Xiao Ming drew a picture.",
    "ru": "Сяо Мин нарисовал картину.",
    "tokens": [
     {
      "w": "小明",
      "p": "Xiǎomíng"
     },
     {
      "w": "画",
      "p": "huà"
     },
     {
      "w": "了",
      "p": "le"
     },
     {
      "w": "一幅",
      "p": "yìfú"
     },
     {
      "w": "画",
      "p": "huà"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小红读了一本好书。",
    "en": "Xiao Hong read a good book.",
    "ru": "Сяо Хун прочитала хорошую книгу.",
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
      "w": "读了",
      "p": "dúle"
     },
     {
      "w": "一本",
      "p": "yìběn"
     },
     {
      "w": "好",
      "p": "hǎo"
     },
     {
      "w": "书",
      "p": "shū"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克打篮球很好。",
    "en": "Mark plays basketball well.",
    "ru": "Марк хорошо играет в баскетбол.",
    "tokens": [
     {
      "w": "马克",
      "p": "Mǎkè"
     },
     {
      "w": "打",
      "p": "dǎ"
     },
     {
      "w": "篮球",
      "p": "lánqiú"
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
    "zh": "艾米丽唱得很好听。",
    "en": "Emily sings very well.",
    "ru": "Эмили поет очень хорошо.",
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
      "w": "唱得",
      "p": "chàngdé"
     },
     {
      "w": "很好",
      "p": "hěnhǎo"
     },
     {
      "w": "听",
      "p": "tīng"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "我们一起去公园。",
    "en": "We go to the park together.",
    "ru": "Мы идем в парк вместе.",
    "tokens": [
     {
      "w": "我们",
      "p": "wǒmen"
     },
     {
      "w": "一起去",
      "p": "yìqǐqù"
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
    "zh": "我们在公园里玩。",
    "en": "We play in the park.",
    "ru": "Мы играем в парке.",
    "tokens": [
     {
      "w": "我们",
      "p": "wǒmen"
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
      "w": "里",
      "p": "lǐ"
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
    "zh": "我们都很开心。",
    "en": "We are all happy.",
    "ru": "Мы все очень рады.",
    "tokens": [
     {
      "w": "我们",
      "p": "wǒmen"
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
   },
   {
    "zh": "我们的爱好真好！",
    "en": "Our hobbies are great!",
    "ru": "Наши увлечения отличные!",
    "tokens": [
     {
      "w": "我们",
      "p": "wǒmen"
     },
     {
      "w": "的",
      "p": "de"
     },
     {
      "w": "爱好",
      "p": "àihào"
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
    "q": "What does Xiao Ming like to do?",
    "options": [
     "drawing",
     "reading",
     "playing basketball",
     "singing"
    ],
    "answer": 0
   },
   {
    "q": "How does Mark play basketball?",
    "options": [
     "well",
     "badly",
     "slowly",
     "quietly"
    ],
    "answer": 0
   },
   {
    "q": "Where do they go together?",
    "options": [
     "the park",
     "the school",
     "the library",
     "the store"
    ],
    "answer": 0
   }
  ]
 },
 {
  "id": "3-22",
  "level": 3,
  "title": {
   "zh": "一次面试",
   "en": "A job interview",
   "ru": "Собеседование на работу"
  },
  "sentences": [
   {
    "zh": "小明很紧张。",
    "en": "Xiao Ming was nervous.",
    "ru": "Сяо Мин нервничал.",
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
      "w": "紧张",
      "p": "jǐnzhāng"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "他要参加一个面试。",
    "en": "He was going to attend an interview.",
    "ru": "Он собирался пройти собеседование.",
    "tokens": [
     {
      "w": "他要",
      "p": "tāyào"
     },
     {
      "w": "参加",
      "p": "cānjiā"
     },
     {
      "w": "一个",
      "p": "yígè"
     },
     {
      "w": "面试",
      "p": "miànshì"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "面试官问：你好，你叫什么名字？",
    "en": "The interviewer asked: 'Hello, what is your name?'",
    "ru": "Интервьюер спросил: «Привет, как вас зовут?»",
    "tokens": [
     {
      "w": "面试",
      "p": "miànshì"
     },
     {
      "w": "官",
      "p": "guān"
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
      "w": "你好",
      "p": "：nǐ"
     },
     {
      "w": "，",
      "p": ""
     },
     {
      "w": "你",
      "p": "hǎo"
     },
     {
      "w": "叫",
      "p": "，"
     },
     {
      "w": "什么",
      "p": "nǐjiào"
     },
     {
      "w": "名字",
      "p": "shénme"
     },
     {
      "w": "？",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明说：我叫小明。",
    "en": "Xiao Ming said: 'My name is Xiao Ming.'",
    "ru": "Сяо Мин сказал: «Меня зовут Сяо Мин.»",
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
      "w": "我",
      "p": "："
     },
     {
      "w": "叫",
      "p": "wǒ"
     },
     {
      "w": "小明",
      "p": "Jiàoxiǎo"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "面试官又问：你有工作经验吗？",
    "en": "The interviewer asked again: 'Do you have work experience?'",
    "ru": "Интервьюер спросил снова: «У вас есть опыт работы?»",
    "tokens": [
     {
      "w": "面试",
      "p": "miànshì"
     },
     {
      "w": "官",
      "p": "guān"
     },
     {
      "w": "又",
      "p": "yòu"
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
      "w": "你有",
      "p": "：nǐ"
     },
     {
      "w": "工作",
      "p": "yǒugōng"
     },
     {
      "w": "经验",
      "p": "zuòjīng"
     },
     {
      "w": "吗",
      "p": "yàn"
     },
     {
      "w": "？",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明说：没有。",
    "en": "Xiao Ming said: 'No.'",
    "ru": "Сяо Мин сказал: «Нет.»",
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
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小红在旁边说：小明有经验！",
    "en": "Xiao Hong said from the side: 'Xiao Ming has experience!'",
    "ru": "Сяо Хун сказала рядом: «Сяо Мин имеет опыт!»",
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
      "w": "在",
      "p": "zài"
     },
     {
      "w": "旁边",
      "p": "pángbiān"
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
      "w": "小明",
      "p": "：xiǎo"
     },
     {
      "w": "有",
      "p": "míng"
     },
     {
      "w": "经验",
      "p": "yǒujīng"
     },
     {
      "w": "！",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明笑了。",
    "en": "Xiao Ming smiled.",
    "ru": "Сяо Мин улыбнулся.",
    "tokens": [
     {
      "w": "小明",
      "p": "Xiǎomíng"
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
    "zh": "马克说：小明在我们公司工作过。",
    "en": "Mark said: 'Xiao Ming worked at our company.'",
    "ru": "Марк сказал: «Сяо Мин работал в нашей компании.»",
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
      "w": "小明",
      "p": "：xiǎo"
     },
     {
      "w": "在",
      "p": "míng"
     },
     {
      "w": "我们",
      "p": "zàiwǒ"
     },
     {
      "w": "公司",
      "p": "mengōng"
     },
     {
      "w": "工作",
      "p": "sīgōng"
     },
     {
      "w": "过",
      "p": "zuò"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "艾米丽说：是的，他很认真。",
    "en": "Emily said: 'Yes, he is very serious.'",
    "ru": "Эмили сказала: «Да, он очень серьезный.»",
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
      "w": "他",
      "p": "de"
     },
     {
      "w": "很",
      "p": "，"
     },
     {
      "w": "认真",
      "p": "tāhěn"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明很惊讶。",
    "en": "Xiao Ming was surprised.",
    "ru": "Сяо Мин был удивлен.",
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
    "zh": "面试官说：谢谢，我们明天通知你。",
    "en": "The interviewer said: 'Thank you, we will notify you tomorrow.'",
    "ru": "Интервьюер сказал: «Спасибо, мы сообщим вам завтра.»",
    "tokens": [
     {
      "w": "面试",
      "p": "miànshì"
     },
     {
      "w": "官",
      "p": "guān"
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
      "w": "，",
      "p": ""
     },
     {
      "w": "我们",
      "p": "xiè，"
     },
     {
      "w": "明天",
      "p": "wǒmen"
     },
     {
      "w": "通知",
      "p": "míngtiān"
     },
     {
      "w": "你",
      "p": "tōng"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明很高兴。",
    "en": "Xiao Ming was very happy.",
    "ru": "Сяо Мин был очень рад.",
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
    "zh": "他终于找到工作了！",
    "en": "He finally found a job!",
    "ru": "Он наконец-то нашел работу!",
    "tokens": [
     {
      "w": "他",
      "p": "tā"
     },
     {
      "w": "终于",
      "p": "zhōngyú"
     },
     {
      "w": "找到",
      "p": "zhǎodào"
     },
     {
      "w": "工作",
      "p": "gōngzuò"
     },
     {
      "w": "了",
      "p": "le"
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
    "q": "Why was Xiao Ming nervous before the interview?",
    "options": [
     "He was going to attend a job interview.",
     "He was going to meet his friends.",
     "He was going to take an exam.",
     "He was going to give a speech."
    ],
    "answer": 0
   },
   {
    "q": "What did Xiao Ming say when asked about his work experience?",
    "options": [
     "He said he had no experience.",
     "He said he had experience at another company.",
     "He said he was very serious.",
     "He said he had experience at the current company."
    ],
    "answer": 0
   },
   {
    "q": "How did Xiao Ming feel after the interview?",
    "options": [
     "He was nervous.",
     "He was surprised.",
     "He was happy.",
     "He was angry."
    ],
    "answer": 2
   }
  ]
 },
 {
  "id": "3-23",
  "level": 3,
  "title": {
   "zh": "春节回家",
   "en": "Going home for Spring Festival",
   "ru": "Домой на Праздник весны"
  },
  "sentences": [
   {
    "zh": "小明在火车站等朋友。",
    "en": "Xiao Ming is waiting for his friend at the train station.",
    "ru": "Сяо Мин ждет своего друга на вокзале.",
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
      "w": "火车",
      "p": "huǒchē"
     },
     {
      "w": "站",
      "p": "zhàn"
     },
     {
      "w": "等",
      "p": "děng"
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
    "zh": "马克和艾米丽也来了。",
    "en": "Mark and Emily also arrived.",
    "ru": "Марк и Эмили тоже пришли.",
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
    "zh": "他们一边走一边聊天。",
    "en": "They walked and chatted together.",
    "ru": "Они шли и разговаривали.",
    "tokens": [
     {
      "w": "他们",
      "p": "tāmen"
     },
     {
      "w": "一边",
      "p": "yìbiān"
     },
     {
      "w": "走",
      "p": "zǒu"
     },
     {
      "w": "一边",
      "p": "yìbiān"
     },
     {
      "w": "聊天",
      "p": "liáotiān"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小红说：我们回家吧。",
    "en": "Xiao Hong said, Let's go home.",
    "ru": "Сяо Хун сказала: Давайте поедем домой.",
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
      "w": "回家",
      "p": "menhuí"
     },
     {
      "w": "吧",
      "p": "jiā"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明问：火车票买好了吗？",
    "en": "Xiao Ming asked, Have you bought the train ticket?",
    "ru": "Сяо Мин спросил: Вы купили билет на поезд?",
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
      "w": "火",
      "p": "："
     },
     {
      "w": "车票",
      "p": "huǒchē"
     },
     {
      "w": "买",
      "p": "piào"
     },
     {
      "w": "好了吗",
      "p": "mǎihǎole"
     },
     {
      "w": "？",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克说：是的，我已经买了。",
    "en": "Mark said, Yes, I've already bought it.",
    "ru": "Марк сказал: Да, я уже купил его.",
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
      "w": "我",
      "p": "de"
     },
     {
      "w": "已经",
      "p": "，wǒ"
     },
     {
      "w": "买",
      "p": "yǐ"
     },
     {
      "w": "了",
      "p": "jīng"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "艾米丽说：我担心路上太挤。",
    "en": "Emily said, I'm worried about the crowded train.",
    "ru": "Эмили сказала: Я беспокоюсь, что поезд будет слишком переполнен.",
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
      "w": "担心",
      "p": "wǒdān"
     },
     {
      "w": "路上",
      "p": "xīnlù"
     },
     {
      "w": "太",
      "p": "shang"
     },
     {
      "w": "挤",
      "p": "tài"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明说：虽然人多，但是我们可以一起。",
    "en": "Xiao Ming said, Although it's crowded, we can go together.",
    "ru": "Сяо Мин сказал: Хотя людей много, мы можем поехать вместе.",
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
      "w": "虽然",
      "p": "：suī"
     },
     {
      "w": "人",
      "p": "rán"
     },
     {
      "w": "多",
      "p": "rén"
     },
     {
      "w": "，",
      "p": ""
     },
     {
      "w": "但是",
      "p": "duō，"
     },
     {
      "w": "我们",
      "p": "dànshì"
     },
     {
      "w": "可以",
      "p": "wǒmen"
     },
     {
      "w": "一起",
      "p": "kěyǐ"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "他们终于坐上了火车。",
    "en": "They finally got on the train.",
    "ru": "Наконец они сели на поезд.",
    "tokens": [
     {
      "w": "他们",
      "p": "tāmen"
     },
     {
      "w": "终于",
      "p": "zhōngyú"
     },
     {
      "w": "坐上",
      "p": "zuòshàng"
     },
     {
      "w": "了",
      "p": "le"
     },
     {
      "w": "火车",
      "p": "huǒchē"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小红拿出手机拍照。",
    "en": "Xiao Hong took a photo with her phone.",
    "ru": "Сяо Хун вынула телефон и сделала фото.",
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
      "w": "拿出",
      "p": "náchū"
     },
     {
      "w": "手机",
      "p": "shǒujī"
     },
     {
      "w": "拍照",
      "p": "pāizhào"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克说：这是第一次坐火车回家。",
    "en": "Mark said, This is the first time I'm taking the train home.",
    "ru": "Марк сказал: Это первый раз, когда я еду на поезде домой.",
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
      "w": "这",
      "p": "："
     },
     {
      "w": "是",
      "p": "zhè"
     },
     {
      "w": "第一次",
      "p": "shìdìyī"
     },
     {
      "w": "坐",
      "p": "cì"
     },
     {
      "w": "火车",
      "p": "zuòhuǒ"
     },
     {
      "w": "回家",
      "p": "chēhuí"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "艾米丽说：我也想家了。",
    "en": "Emily said, I miss home too.",
    "ru": "Эмили сказала: Я тоже скучаю по дому.",
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
      "w": "我也",
      "p": "：wǒ"
     },
     {
      "w": "想家",
      "p": "yěxiǎng"
     },
     {
      "w": "了",
      "p": "jiā"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明说：春节快到了，我们回家过年。",
    "en": "Xiao Ming said, The Spring Festival is coming soon, let's go home for the holiday.",
    "ru": "Сяо Мин сказал: Скоро Праздник весны, поедем домой встречать Новый год.",
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
      "w": "春节",
      "p": "：chūn"
     },
     {
      "w": "快",
      "p": "jié"
     },
     {
      "w": "到了",
      "p": "kuàidào"
     },
     {
      "w": "，",
      "p": ""
     },
     {
      "w": "我们",
      "p": "le，"
     },
     {
      "w": "回家",
      "p": "wǒmen"
     },
     {
      "w": "过年",
      "p": "huíjiā"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "他们开心地笑了。",
    "en": "They smiled happily.",
    "ru": "Они счастливо улыбнулись.",
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
      "w": "笑了",
      "p": "xiàole"
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
    "q": "What did Xiao Ming ask Mark about before getting on the train?",
    "options": [
     "If he had bought the train ticket",
     "If he had brought his phone",
     "If he was worried about the crowded train",
     "If he had taken a photo"
    ],
    "answer": 0
   },
   {
    "q": "Why did Emily say she was worried?",
    "options": [
     "About the crowded train",
     "About missing home",
     "About the Spring Festival",
     "About taking a photo"
    ],
    "answer": 0
   },
   {
    "q": "What did Xiao Hong do after they got on the train?",
    "options": [
     "She took a photo with her phone",
     "She asked about the train ticket",
     "She said she missed home",
     "She mentioned the Spring Festival"
    ],
    "answer": 0
   }
  ]
 },
 {
  "id": "3-24",
  "level": 3,
  "title": {
   "zh": "新同学",
   "en": "A new classmate",
   "ru": "Новый одноклассник"
  },
  "sentences": [
   {
    "zh": "小明在教室里看书。",
    "en": "Xiao Ming was reading a book in the classroom.",
    "ru": "Сяо Мин читал книгу в классе.",
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
      "w": "教室",
      "p": "jiàoshì"
     },
     {
      "w": "里",
      "p": "lǐ"
     },
     {
      "w": "看书",
      "p": "kànshū"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "突然，一个外国学生走进来。",
    "en": "Suddenly, a foreign student walked in.",
    "ru": "Внезапно вошел иностранный студент.",
    "tokens": [
     {
      "w": "突然",
      "p": "tūrán"
     },
     {
      "w": "，",
      "p": ""
     },
     {
      "w": "一个",
      "p": "，yí"
     },
     {
      "w": "外国",
      "p": "gèwài"
     },
     {
      "w": "学生",
      "p": "guóxué"
     },
     {
      "w": "走进",
      "p": "shēngzǒu"
     },
     {
      "w": "来",
      "p": "jìn"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小红说：你好，欢迎来中国。",
    "en": "Xiao Hong said, Hello, welcome to China.",
    "ru": "Сяо Хун сказала: Привет, добро пожаловать в Китай.",
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
      "w": "欢迎",
      "p": "hǎo，"
     },
     {
      "w": "来",
      "p": "huān"
     },
     {
      "w": "中国",
      "p": "Yínglái"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克说：你好，我是马克。",
    "en": "Mark said, Hello, I'm Mark.",
    "ru": "Марк сказал: Привет, я Марк.",
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
      "w": "我是",
      "p": "hǎo，"
     },
     {
      "w": "马克",
      "p": "Wǒshì"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "艾米丽说：你好，我是艾米丽。",
    "en": "Emily said, Hello, I'm Emily.",
    "ru": "Эмили сказала: Привет, я Эмили.",
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
      "w": "你好",
      "p": "：nǐ"
     },
     {
      "w": "，",
      "p": ""
     },
     {
      "w": "我是",
      "p": "hǎo，"
     },
     {
      "w": "艾",
      "p": "wǒ"
     },
     {
      "w": "米",
      "p": "shì"
     },
     {
      "w": "丽",
      "p": "ài"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明问：你是美国人吗？",
    "en": "Xiao Ming asked, Are you American?",
    "ru": "Сяо Мин спросил: Ты американец?",
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
      "w": "你是",
      "p": "：nǐ"
     },
     {
      "w": "美国",
      "p": "shìměi"
     },
     {
      "w": "人",
      "p": "guó"
     },
     {
      "w": "吗",
      "p": "rén"
     },
     {
      "w": "？",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克说：是的，我是美国人。",
    "en": "Mark said, Yes, I'm American.",
    "ru": "Марк сказал: Да, я американец.",
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
      "w": "我是",
      "p": "de，"
     },
     {
      "w": "美国",
      "p": "wǒshì"
     },
     {
      "w": "人",
      "p": "měi"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小红问：你喜欢中国吗？",
    "en": "Xiao Hong asked, Do you like China?",
    "ru": "Сяо Хун спросила: Тебе нравится Китай?",
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
      "w": "喜欢",
      "p": "nǐxǐ"
     },
     {
      "w": "中国",
      "p": "Huanzhōng"
     },
     {
      "w": "吗",
      "p": "guó"
     },
     {
      "w": "？",
      "p": ""
     }
    ]
   },
   {
    "zh": "艾米丽说：是的，我喜欢北京。",
    "en": "Emily said, Yes, I like Beijing.",
    "ru": "Эмили сказала: Да, мне нравится Пекин.",
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
      "w": "喜欢",
      "p": "，wǒ"
     },
     {
      "w": "北京",
      "p": "Xǐhuan"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明说：我们一起学习吧。",
    "en": "Xiao Ming said, Let's study together.",
    "ru": "Сяо Мин сказал: Давай учиться вместе.",
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
      "w": "一起",
      "p": "menyì"
     },
     {
      "w": "学习",
      "p": "qǐxué"
     },
     {
      "w": "吧",
      "p": "xí"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克说：好，谢谢。",
    "en": "Mark said, Good, thank you.",
    "ru": "Марк сказал: Хорошо, спасибо.",
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
      "w": "好",
      "p": "："
     },
     {
      "w": "，",
      "p": ""
     },
     {
      "w": "谢谢",
      "p": "hǎo，"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "艾米丽说：谢谢你们。",
    "en": "Emily said, Thank you.",
    "ru": "Эмили сказала: Спасибо вам.",
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
    "zh": "他们一起学习，很快成了好朋友。",
    "en": "They studied together and quickly became good friends.",
    "ru": "Они учились вместе и быстро стали хорошими друзьями.",
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
      "w": "，",
      "p": ""
     },
     {
      "w": "很快",
      "p": "，hěn"
     },
     {
      "w": "成了",
      "p": "kuàichéng"
     },
     {
      "w": "好朋友",
      "p": "lehǎopéng"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明想：新同学真好！",
    "en": "Xiao Ming thought: A new classmate is great!",
    "ru": "Сяо Мин подумал: Новый одноклассник очень хороший!",
    "tokens": [
     {
      "w": "小明",
      "p": "Xiǎomíng"
     },
     {
      "w": "想",
      "p": "xiǎng"
     },
     {
      "w": "：",
      "p": ""
     },
     {
      "w": "新",
      "p": "："
     },
     {
      "w": "同学",
      "p": "xīntóng"
     },
     {
      "w": "真好",
      "p": "xuézhēn"
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
    "q": "What did Xiao Hong say when the foreign students walked in?",
    "options": [
     "Hello, welcome to China.",
     "Hello, I'm Mark.",
     "Hello, I'm Emily.",
     "Good, thank you."
    ],
    "answer": 0
   },
   {
    "q": "Where does Mark say he is from?",
    "options": [
     "Beijing.",
     "America.",
     "China.",
     "London."
    ],
    "answer": 1
   },
   {
    "q": "What did Xiao Ming suggest to the foreign students?",
    "options": [
     "Let's eat together.",
     "Let's play together.",
     "Let's study together.",
     "Let's go to Beijing."
    ],
    "answer": 2
   }
  ]
 },
 {
  "id": "3-25",
  "level": 3,
  "title": {
   "zh": "下雨的一天",
   "en": "A rainy day",
   "ru": "Дождливый день"
  },
  "sentences": [
   {
    "zh": "小明在图书馆看书。",
    "en": "Xiao Ming is reading a book in the library.",
    "ru": "Сяо Мин читает книгу в библиотеке.",
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
      "w": "图书",
      "p": "túshū"
     },
     {
      "w": "馆",
      "p": "guǎn"
     },
     {
      "w": "看书",
      "p": "kànshū"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "突然下起了大雨。",
    "en": "Suddenly, heavy rain started falling.",
    "ru": "Внезапно пошел сильный дождь.",
    "tokens": [
     {
      "w": "突然",
      "p": "tūrán"
     },
     {
      "w": "下",
      "p": "xià"
     },
     {
      "w": "起了",
      "p": "qǐle"
     },
     {
      "w": "大雨",
      "p": "dàyǔ"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明想回家，但没带伞。",
    "en": "Xiao Ming wants to go home, but he didn't bring an umbrella.",
    "ru": "Сяо Мин хочет пойти домой, но он не взял зонт.",
    "tokens": [
     {
      "w": "小明",
      "p": "Xiǎomíng"
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
      "w": "，",
      "p": ""
     },
     {
      "w": "但",
      "p": "，"
     },
     {
      "w": "没",
      "p": "dàn"
     },
     {
      "w": "带",
      "p": "méi"
     },
     {
      "w": "伞",
      "p": "dài"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小红看见小明很着急。",
    "en": "Xiao Hong saw that Xiao Ming was worried.",
    "ru": "Сяо Хун увидела, что Сяо Мин волнуется.",
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
      "w": "看见",
      "p": "kànjiàn"
     },
     {
      "w": "小明",
      "p": "Xiǎomíng"
     },
     {
      "w": "很",
      "p": "hěn"
     },
     {
      "w": "着急",
      "p": "zháojí"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小红把伞借给小明。",
    "en": "Xiao Hong lent her umbrella to Xiao Ming.",
    "ru": "Сяо Хун одолжила Сяо Мину свой зонт.",
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
      "w": "把",
      "p": "bǎ"
     },
     {
      "w": "伞",
      "p": "sǎn"
     },
     {
      "w": "借给",
      "p": "jiègěi"
     },
     {
      "w": "小明",
      "p": "Xiǎomíng"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明说谢谢。",
    "en": "Xiao Ming said thank you.",
    "ru": "Сяо Мин сказал спасибо.",
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
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克和艾米丽也来了。",
    "en": "Mark and Emily also arrived.",
    "ru": "Марк и Эмили тоже пришли.",
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
    "zh": "他们一起等雨停。",
    "en": "They waited together for the rain to stop.",
    "ru": "Они ждали вместе, пока дождь не перестанет.",
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
      "w": "雨",
      "p": "yǔ"
     },
     {
      "w": "停",
      "p": "tíng"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克一边等一边聊天。",
    "en": "Mark chatted while waiting.",
    "ru": "Марк болтал, пока ждал.",
    "tokens": [
     {
      "w": "马克",
      "p": "Mǎkè"
     },
     {
      "w": "一边",
      "p": "yìbiān"
     },
     {
      "w": "等",
      "p": "děng"
     },
     {
      "w": "一边",
      "p": "yìbiān"
     },
     {
      "w": "聊天",
      "p": "liáotiān"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "艾米丽一边等一边看手机。",
    "en": "Emily checked her phone while waiting.",
    "ru": "Эмили смотрела на телефон, пока ждала.",
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
      "w": "一边",
      "p": "yìbiān"
     },
     {
      "w": "等",
      "p": "děng"
     },
     {
      "w": "一边",
      "p": "yìbiān"
     },
     {
      "w": "看",
      "p": "kàn"
     },
     {
      "w": "手机",
      "p": "shǒujī"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "雨终于停了。",
    "en": "The rain finally stopped.",
    "ru": "Дождь наконец перестал.",
    "tokens": [
     {
      "w": "雨",
      "p": "yǔ"
     },
     {
      "w": "终于",
      "p": "zhōngyú"
     },
     {
      "w": "停了",
      "p": "tíngle"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "他们一起回家。",
    "en": "They went home together.",
    "ru": "Они пошли домой вместе.",
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
    "zh": "小明说：下次我请你吃饭。",
    "en": "Xiao Ming said: I'll treat you to dinner next time.",
    "ru": "Сяо Мин сказал: В следующий раз я приглашу тебя на ужин.",
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
      "w": "下次",
      "p": "：xià"
     },
     {
      "w": "我",
      "p": "cì"
     },
     {
      "w": "请",
      "p": "wǒ"
     },
     {
      "w": "你",
      "p": "qǐng"
     },
     {
      "w": "吃饭",
      "p": "nǐchī"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "大家笑着说：好！",
    "en": "Everyone laughed and said: Good!",
    "ru": "Все засмеялись и сказали: Хорошо!",
    "tokens": [
     {
      "w": "大家",
      "p": "dàjiā"
     },
     {
      "w": "笑",
      "p": "xiào"
     },
     {
      "w": "着",
      "p": "zhe"
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
      "w": "！",
      "p": ""
     }
    ]
   }
  ],
  "questions": [
   {
    "q": "What did Xiao Hong do for Xiao Ming?",
    "options": [
     "She lent him her umbrella.",
     "She gave him money to buy an umbrella.",
     "She called a taxi for him.",
     "She walked him home."
    ],
    "answer": 0
   },
   {
    "q": "How did Mark and Emily spend their time while waiting for the rain to stop?",
    "options": [
     "Mark chatted and Emily checked her phone.",
     "Mark checked his phone and Emily chatted.",
     "Mark and Emily both read books.",
     "Mark and Emily both played games on their phones."
    ],
    "answer": 0
   }
  ]
 },
 {
  "id": "3-26",
  "level": 3,
  "title": {
   "zh": "学做中国菜",
   "en": "Learning to cook Chinese food",
   "ru": "Учимся готовить китайские блюда"
  },
  "sentences": [
   {
    "zh": "小明和小红在中国学习。",
    "en": "Xiao Ming and Xiao Hong are studying in China.",
    "ru": "Сяо Мин и Сяо Хун учатся в Китае.",
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
      "w": "中国",
      "p": "Zhōngguó"
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
    "zh": "马克和艾米丽是他们的朋友。",
    "en": "Mark and Emily are their friends.",
    "ru": "Марк и Эмили — их друзья.",
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
      "w": "他们",
      "p": "tāmen"
     },
     {
      "w": "的",
      "p": "de"
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
    "zh": "他们想学做中国菜。",
    "en": "They want to learn to cook Chinese food.",
    "ru": "Они хотят научиться готовить китайские блюда.",
    "tokens": [
     {
      "w": "他们",
      "p": "tāmen"
     },
     {
      "w": "想学",
      "p": "xiǎngxué"
     },
     {
      "w": "做",
      "p": "zuò"
     },
     {
      "w": "中国",
      "p": "Zhōngguó"
     },
     {
      "w": "菜",
      "p": "cài"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小红说：今天学做青菜！",
    "en": "Xiao Hong said: Let's cook green vegetables today!",
    "ru": "Сяо Хун сказала: Сегодня учимся готовить зелёные овощи!",
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
      "w": "今天",
      "p": "：jīn"
     },
     {
      "w": "学",
      "p": "tiān"
     },
     {
      "w": "做",
      "p": "xué"
     },
     {
      "w": "青菜",
      "p": "zuòqīng"
     },
     {
      "w": "！",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克问：青菜是什么？",
    "en": "Mark asked: What is green vegetables?",
    "ru": "Марк спросил: Что такое «цинцай»?",
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
      "w": "青菜",
      "p": "：qīng"
     },
     {
      "w": "是",
      "p": "cài"
     },
     {
      "w": "什么",
      "p": "shìshén"
     },
     {
      "w": "？",
      "p": ""
     }
    ]
   },
   {
    "zh": "小红笑着回答：青菜是蔬菜。",
    "en": "Xiao Hong smiled and answered: Green vegetables are vegetables.",
    "ru": "Сяо Хун улыбнулась и ответила: «Цинцай» — это зелёные овощи.",
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
      "w": "笑",
      "p": "xiào"
     },
     {
      "w": "着",
      "p": "zhe"
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
      "w": "青菜",
      "p": "：qīng"
     },
     {
      "w": "是",
      "p": "cài"
     },
     {
      "w": "蔬菜",
      "p": "shìshū"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "艾米丽想帮忙：我来切菜。",
    "en": "Emily wanted to help: I'll cut the vegetables.",
    "ru": "Эмили хотела помочь: Я порежу овощи.",
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
      "w": "想",
      "p": "xiǎng"
     },
     {
      "w": "帮忙",
      "p": "bāngmáng"
     },
     {
      "w": "：",
      "p": ""
     },
     {
      "w": "我来",
      "p": "：wǒ"
     },
     {
      "w": "切菜",
      "p": "láiqiè"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小红说：谢谢！菜被切好了。",
    "en": "Xiao Hong said: Thank you! The vegetables are cut.",
    "ru": "Сяо Хун сказала: Спасибо! Овощи уже нарезаны.",
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
      "w": "！",
      "p": ""
     },
     {
      "w": "菜",
      "p": "xiè"
     },
     {
      "w": "被",
      "p": "！"
     },
     {
      "w": "切",
      "p": "cài"
     },
     {
      "w": "好了",
      "p": "bèiqiè"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明说：我来炒菜。",
    "en": "Xiao Ming said: I'll stir-fry the vegetables.",
    "ru": "Сяо Мин сказал: Я пожарю овощи.",
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
      "w": "我来",
      "p": "：wǒ"
     },
     {
      "w": "炒菜",
      "p": "láichǎo"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小红说：小心！油太热了。",
    "en": "Xiao Hong said: Be careful! The oil is too hot.",
    "ru": "Сяо Хун сказала: Осторожно! Масло слишком горячее.",
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
      "w": "小心",
      "p": "：xiǎo"
     },
     {
      "w": "！",
      "p": ""
     },
     {
      "w": "油",
      "p": "xīn"
     },
     {
      "w": "太",
      "p": "！"
     },
     {
      "w": "热",
      "p": "yóu"
     },
     {
      "w": "了",
      "p": "tài"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "艾米丽说：我学会了！",
    "en": "Emily said: I learned it!",
    "ru": "Эмили сказала: Я научилась!",
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
      "w": "！",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克说：这道菜很好吃！",
    "en": "Mark said: This dish is delicious!",
    "ru": "Марк сказал: Это блюдо очень вкусное!",
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
      "w": "这",
      "p": "："
     },
     {
      "w": "道",
      "p": "zhè"
     },
     {
      "w": "菜",
      "p": "dào"
     },
     {
      "w": "很好",
      "p": "càihěn"
     },
     {
      "w": "吃",
      "p": "hǎo"
     },
     {
      "w": "！",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明说：下次我们做鱼。",
    "en": "Xiao Ming said: Next time we'll cook fish.",
    "ru": "Сяо Мин сказал: В следующий раз мы приготовим рыбу.",
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
      "w": "下次",
      "p": "：xià"
     },
     {
      "w": "我们",
      "p": "cìwǒ"
     },
     {
      "w": "做",
      "p": "men"
     },
     {
      "w": "鱼",
      "p": "zuò"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "大家高兴地说：好！",
    "en": "Everyone happily said: Good!",
    "ru": "Все радостно сказали: Хорошо!",
    "tokens": [
     {
      "w": "大家",
      "p": "dàjiā"
     },
     {
      "w": "高兴",
      "p": "gāoxìng"
     },
     {
      "w": "地",
      "p": "dì"
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
      "w": "！",
      "p": ""
     }
    ]
   }
  ],
  "questions": [
   {
    "q": "What are Xiao Hong and Xiao Ming planning to cook today?",
    "options": [
     "Fish",
     "Green vegetables",
     "Rice",
     "Noodles"
    ],
    "answer": 1
   },
   {
    "q": "Why did Xiao Hong say 'Be careful!' to Xiao Ming?",
    "options": [
     "The vegetables were too big",
     "The oil was too hot",
     "The stove was broken",
     "The knife was sharp"
    ],
    "answer": 1
   },
   {
    "q": "What did Mark say about the dish after it was cooked?",
    "options": [
     "It was too spicy",
     "It was delicious",
     "It was too salty",
     "It was cold"
    ],
    "answer": 1
   }
  ]
 },
 {
  "id": "3-27",
  "level": 3,
  "title": {
   "zh": "搬家",
   "en": "Moving house",
   "ru": "Переезд"
  },
  "sentences": [
   {
    "zh": "小明和小红正在搬家。",
    "en": "Xiao Ming and Xiao Hong are moving house.",
    "ru": "Сяо Мин и Сяо Хун переезжают.",
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
      "w": "正在",
      "p": "zhèngzài"
     },
     {
      "w": "搬家",
      "p": "bānjiā"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "他们把旧家具搬进新家。",
    "en": "They are moving the old furniture into the new house.",
    "ru": "Они переносят старую мебель в новый дом.",
    "tokens": [
     {
      "w": "他们",
      "p": "tāmen"
     },
     {
      "w": "把",
      "p": "bǎ"
     },
     {
      "w": "旧",
      "p": "jiù"
     },
     {
      "w": "家具",
      "p": "jiājù"
     },
     {
      "w": "搬",
      "p": "bān"
     },
     {
      "w": "进",
      "p": "jìn"
     },
     {
      "w": "新家",
      "p": "xīnjiā"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克和艾米丽帮忙搬箱子。",
    "en": "Mark and Emily help move the boxes.",
    "ru": "Марк и Эмили помогают переносить коробки.",
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
      "w": "帮忙",
      "p": "bāngmáng"
     },
     {
      "w": "搬",
      "p": "bān"
     },
     {
      "w": "箱子",
      "p": "xiāngzǐ"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小红说：箱子太重了。",
    "en": "Xiao Hong says: The boxes are too heavy.",
    "ru": "Сяо Хун говорит: Коробки слишком тяжёлые.",
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
      "w": "箱子",
      "p": "：xiāng"
     },
     {
      "w": "太重",
      "p": "zǐtài"
     },
     {
      "w": "了",
      "p": "zhòng"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克说：我来帮你。",
    "en": "Mark says: I'll help you.",
    "ru": "Марк говорит: Я помогу тебе.",
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
      "w": "我来",
      "p": "：wǒ"
     },
     {
      "w": "帮",
      "p": "lái"
     },
     {
      "w": "你",
      "p": "bāng"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "艾米丽一边搬一边笑。",
    "en": "Emily laughs while moving.",
    "ru": "Эмили смеялась, пока носила коробки.",
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
      "w": "一边",
      "p": "yìbiān"
     },
     {
      "w": "搬",
      "p": "bān"
     },
     {
      "w": "一边",
      "p": "yìbiān"
     },
     {
      "w": "笑",
      "p": "xiào"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "虽然很累，但他们很开心。",
    "en": "Although it's tiring, they are happy.",
    "ru": "Хотя они устали, им было весело.",
    "tokens": [
     {
      "w": "虽然",
      "p": "suīrán"
     },
     {
      "w": "很",
      "p": "hěn"
     },
     {
      "w": "累",
      "p": "lèi"
     },
     {
      "w": "，",
      "p": ""
     },
     {
      "w": "但",
      "p": "，"
     },
     {
      "w": "他们",
      "p": "dàntā"
     },
     {
      "w": "很",
      "p": "men"
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
    "zh": "小明说：新家真漂亮！",
    "en": "Xiao Ming says: The new house is so beautiful!",
    "ru": "Сяо Мин говорит: Новый дом такой красивый!",
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
      "w": "新家",
      "p": "：xīn"
     },
     {
      "w": "真",
      "p": "jiā"
     },
     {
      "w": "漂亮",
      "p": "zhēnpiào"
     },
     {
      "w": "！",
      "p": ""
     }
    ]
   },
   {
    "zh": "小红说：是的，我们喜欢这里。",
    "en": "Xiao Hong says: Yes, we like it here.",
    "ru": "Сяо Хун говорит: Да, нам здесь нравится.",
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
      "w": "喜欢",
      "p": "wǒmen"
     },
     {
      "w": "这里",
      "p": "xǐhuan"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明说：谢谢大家帮忙。",
    "en": "Xiao Ming says: Thank you all for helping.",
    "ru": "Сяо Мин говорит: Спасибо всем за помощь.",
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
      "w": "大家",
      "p": "xièdà"
     },
     {
      "w": "帮忙",
      "p": "jiābāng"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "大家开心地笑了。",
    "en": "Everyone smiled happily.",
    "ru": "Все весело улыбнулись.",
    "tokens": [
     {
      "w": "大家",
      "p": "dàjiā"
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
    "zh": "新家让我们感到温暖。",
    "en": "The new house makes us feel warm.",
    "ru": "В новом доме нам тепло и уютно.",
    "tokens": [
     {
      "w": "新家",
      "p": "xīnjiā"
     },
     {
      "w": "让",
      "p": "ràng"
     },
     {
      "w": "我们",
      "p": "wǒmen"
     },
     {
      "w": "感到",
      "p": "gǎndào"
     },
     {
      "w": "温暖",
      "p": "wēnnuǎn"
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
    "q": "How do the people feel about the new house?",
    "options": [
     "They feel tired and unhappy.",
     "They feel happy and warm.",
     "They feel confused and lost.",
     "They feel excited but stressed."
    ],
    "answer": 1
   }
  ]
 },
 {
  "id": "1-28",
  "level": 1,
  "title": {
   "zh": "喝咖啡",
   "en": "Having coffee",
   "ru": "Пить кофе"
  },
  "sentences": [
   {
    "zh": "小明在咖啡店。",
    "en": "Xiao Ming is in the coffee shop.",
    "ru": "Сяо Мин в кофейне.",
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
      "w": "咖啡店",
      "p": "kāfēidiàn"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "他有咖啡。",
    "en": "He has coffee.",
    "ru": "У него есть кофе.",
    "tokens": [
     {
      "w": "他有",
      "p": "tāyǒu"
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
    "zh": "小红来了。",
    "en": "Xiao Hong comes.",
    "ru": "Пришла Сяо Хун.",
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
    "zh": "小红有茶。",
    "en": "Xiao Hong has tea.",
    "ru": "У Сяо Хун есть чай.",
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
      "w": "茶",
      "p": "chá"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克和艾米丽也来了。",
    "en": "Mark and Emily also come.",
    "ru": "Пришли Марк и Эмили.",
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
    "zh": "他们有好咖啡。",
    "en": "They have good coffee.",
    "ru": "У них есть хороший кофе.",
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
      "w": "好",
      "p": "hǎo"
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
    "zh": "小明说：好咖啡！",
    "en": "Xiao Ming says: Good coffee!",
    "ru": "Сяо Мин говорит: Хороший кофе!",
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
      "w": "好",
      "p": "："
     },
     {
      "w": "咖啡",
      "p": "hǎokā"
     },
     {
      "w": "！",
      "p": ""
     }
    ]
   },
   {
    "zh": "小红说：茶很好。",
    "en": "Xiao Hong says: Tea is good.",
    "ru": "Сяо Хун говорит: Чай хорош.",
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
      "w": "茶",
      "p": "："
     },
     {
      "w": "很好",
      "p": "cháhěn"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克说：咖啡很香。",
    "en": "Mark says: Coffee is fragrant.",
    "ru": "Марк говорит: Кофе ароматный.",
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
      "w": "咖啡",
      "p": "：kā"
     },
     {
      "w": "很香",
      "p": "fēihěn"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "大家开心。",
    "en": "Everyone is happy.",
    "ru": "Все рады.",
    "tokens": [
     {
      "w": "大家",
      "p": "dàjiā"
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
    "q": "What does Xiao Ming have in the coffee shop?",
    "options": [
     "Tea",
     "Coffee",
     "Water",
     "Juice"
    ],
    "answer": 1
   },
   {
    "q": "Who has tea in the coffee shop?",
    "options": [
     "Xiao Ming",
     "Mark",
     "Xiao Hong",
     "Emily"
    ],
    "answer": 2
   },
   {
    "q": "What does Mark say about the coffee?",
    "options": [
     "It is good",
     "It is fragrant",
     "It is expensive",
     "It is cold"
    ],
    "answer": 1
   }
  ]
 },
 {
  "id": "2-29",
  "level": 2,
  "title": {
   "zh": "看电影",
   "en": "Watching a movie",
   "ru": "Посмотреть фильм"
  },
  "sentences": [
   {
    "zh": "小明和小红想看电影。",
    "en": "Xiao Ming and Xiao Hong want to watch a movie.",
    "ru": "Сяо Мин и Сяо Хун хотят посмотреть фильм.",
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
      "w": "想看",
      "p": "xiǎngkàn"
     },
     {
      "w": "电影",
      "p": "diànyǐng"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克和艾米丽也想看电影。",
    "en": "Mark and Emily also want to watch a movie.",
    "ru": "Марк и Эмили тоже хотят посмотреть фильм.",
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
      "w": "也",
      "p": "yě"
     },
     {
      "w": "想看",
      "p": "xiǎngkàn"
     },
     {
      "w": "电影",
      "p": "diànyǐng"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "他们决定去看电影。",
    "en": "They decided to go see a movie.",
    "ru": "Они решили пойти посмотреть фильм.",
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
      "w": "去",
      "p": "qù"
     },
     {
      "w": "看",
      "p": "kàn"
     },
     {
      "w": "电影",
      "p": "diànyǐng"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明说：电影很好看！",
    "en": "Xiao Ming said: The movie is very good!",
    "ru": "Сяо Мин сказал: Фильм очень хороший!",
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
      "w": "电影",
      "p": "：diàn"
     },
     {
      "w": "很好",
      "p": "yǐnghěn"
     },
     {
      "w": "看",
      "p": "hǎo"
     },
     {
      "w": "！",
      "p": ""
     }
    ]
   },
   {
    "zh": "小红说：我看过很多电影。",
    "en": "Xiao Hong said: I have seen many movies.",
    "ru": "Сяо Хун сказала: Я видела много фильмов.",
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
      "w": "我看",
      "p": "：wǒ"
     },
     {
      "w": "过",
      "p": "kàn"
     },
     {
      "w": "很多",
      "p": "guòhěn"
     },
     {
      "w": "电影",
      "p": "duōdiàn"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克说：我还没有看过这部电影。",
    "en": "Mark said: I haven't seen this movie yet.",
    "ru": "Марк сказал: Я еще не видел этот фильм.",
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
      "w": "我还",
      "p": "：wǒ"
     },
     {
      "w": "没有",
      "p": "háiméi"
     },
     {
      "w": "看",
      "p": "yǒu"
     },
     {
      "w": "过",
      "p": "kàn"
     },
     {
      "w": "这",
      "p": "guò"
     },
     {
      "w": "部",
      "p": "zhè"
     },
     {
      "w": "电影",
      "p": "bùdiàn"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "艾米丽说：这部电影很有趣。",
    "en": "Emily said: This movie is interesting.",
    "ru": "Эмили сказала: Этот фильм интересный.",
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
      "w": "这",
      "p": "："
     },
     {
      "w": "部",
      "p": "zhè"
     },
     {
      "w": "电影",
      "p": "bùdiàn"
     },
     {
      "w": "很",
      "p": "yǐng"
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
    "zh": "他们看电影很开心。",
    "en": "They enjoyed watching the movie very much.",
    "ru": "Им было очень весело смотреть фильм.",
    "tokens": [
     {
      "w": "他们",
      "p": "tāmen"
     },
     {
      "w": "看",
      "p": "kàn"
     },
     {
      "w": "电影",
      "p": "diànyǐng"
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
    "zh": "电影结束时，他们笑了。",
    "en": "They laughed when the movie ended.",
    "ru": "Они засмеялись, когда фильм закончился.",
    "tokens": [
     {
      "w": "电影",
      "p": "diànyǐng"
     },
     {
      "w": "结束",
      "p": "jiéshù"
     },
     {
      "w": "时",
      "p": "shí"
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
      "w": "笑了",
      "p": "menxiào"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小明说：我们下次还来看电影。",
    "en": "Xiao Ming said: We will watch a movie again next time.",
    "ru": "Сяо Мин сказал: Мы посмотрим фильм еще раз в следующий раз.",
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
      "w": "下次",
      "p": "menxià"
     },
     {
      "w": "还",
      "p": "cì"
     },
     {
      "w": "来看",
      "p": "háilái"
     },
     {
      "w": "电影",
      "p": "kàndiàn"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "小红说：我喜欢和朋友一起看电影。",
    "en": "Xiao Hong said: I like watching movies with friends.",
    "ru": "Сяо Хун сказала: Мне нравится смотреть фильмы с друзьями.",
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
      "w": "喜欢",
      "p": "wǒxǐ"
     },
     {
      "w": "和",
      "p": "huan"
     },
     {
      "w": "朋友",
      "p": "hépéng"
     },
     {
      "w": "一起",
      "p": "yǒuyì"
     },
     {
      "w": "看",
      "p": "qǐ"
     },
     {
      "w": "电影",
      "p": "kàndiàn"
     },
     {
      "w": "。",
      "p": ""
     }
    ]
   },
   {
    "zh": "马克和艾米丽说：好主意！",
    "en": "Mark and Emily said: Good idea!",
    "ru": "Марк и Эмили сказали: Хорошая идея!",
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
      "w": "说",
      "p": "shuō"
     },
     {
      "w": "：",
      "p": ""
     },
     {
      "w": "好主意",
      "p": "：hǎozhǔ"
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
    "q": "What did Xiao Ming say about the movie?",
    "options": [
     "The movie is very good!",
     "I have seen many movies.",
     "I haven't seen this movie yet.",
     "This movie is interesting."
    ],
    "answer": 0
   },
   {
    "q": "What did Xiao Hong say about her movie-watching experience?",
    "options": [
     "The movie is very good!",
     "I have seen many movies.",
     "I haven't seen this movie yet.",
     "This movie is interesting."
    ],
    "answer": 1
   }
  ]
 }
];
