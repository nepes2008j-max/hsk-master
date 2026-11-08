import type { Exercise } from "./grammar";

export const grammarExercises: Record<number, Exercise[]> = {
  // 1: Basic SVO word order
  1: [
    { type: "mcq", prompt: "Which sentence follows correct SVO order?", options: ["我吃饭。", "吃饭我。", "饭我吃。", "饭吃我。"], answer: 0 },
    { type: "reorder", english: "She reads books.", words: ["书", "她", "看"], answer: ["她", "看", "书"] },
    { type: "fill", sentence: "他___水。", answer: "喝", distractors: ["是", "的", "了"] },
    { type: "translate", english: "I eat rice.", answer: "我吃饭。", accept: ["我吃饭"] },
  
    {"type":"mcq","prompt":"Choose the correct word order:","options":["我喝茶。","喝我茶。","茶我喝。","喝茶我。"],"answer":0,"difficulty":1},
    {"type":"fill","sentence":"妈妈___菜。","answer":"做","distractors":["的","了","在"],"difficulty":2},
    {"type":"translate","english":"He drinks juice.","answer":"他喝果汁。","accept":["他喝果汁"],"difficulty":3},
    {"type":"reorder","english":"They eat apples.","words":["苹果","他们","吃"],"answer":["他们","吃","苹果"],"difficulty":2},
    {"type":"mcq","prompt":"Which sentence follows correct SVO order?","options":["他吃苹果。","苹果他吃。","吃苹果他。","他苹果吃。"],"answer":0,"difficulty":3},
  ],
  // 2: Linking nouns with 是
  2: [
    { type: "fill", sentence: "我___学生。", answer: "是", distractors: ["有", "在", "很"] },
    { type: "mcq", prompt: "Which correctly uses 是?", options: ["她是老师。", "她是漂亮。", "她是在家。", "她是喝水。"], answer: 0 },
    { type: "translate", english: "He is a doctor.", answer: "他是医生。", accept: ["他是医生"] },
    { type: "reorder", english: "I am Chinese.", words: ["人", "我", "中国", "是"], answer: ["我", "是", "中国", "人"] },
  
    {"type":"fill","sentence":"他___老师。","answer":"是","distractors":["很","在","也"],"difficulty":1},
    {"type":"translate","english":"We are students.","answer":"我们是学生。","accept":["我们是学生"],"difficulty":2},
    {"type":"translate","english":"This is a cat.","answer":"这是猫。","accept":["这是猫。"],"difficulty":3},
    {"type":"reorder","english":"He is a doctor.","words":["医生","是","他"],"answer":["他","是","医生"],"difficulty":2},
    {"type":"mcq","prompt":"Which sentence correctly uses 是 to say 'This is a pen.'?","options":["这是笔。","这是书。","这是桌子。","这是电脑。"],"answer":0,"difficulty":3},
    {"type":"fill","sentence":"她___老师。","answer":"是","distractors":["吃","看","喝"],"difficulty":3},
  ],
  // 3: Negation with 不
  3: [
    { type: "fill", sentence: "我___是学生。", answer: "不", distractors: ["没", "很", "也"] },
    { type: "mcq", prompt: "How do you say 'I don't eat meat'?", options: ["我不吃肉。", "我没吃肉。", "我不了吃肉。", "我吃不肉。"], answer: 0 },
    { type: "reorder", english: "She is not a teacher.", words: ["老师", "不", "她", "是"], answer: ["她", "不", "是", "老师"] },
    { type: "translate", english: "He doesn't drink coffee.", answer: "他不喝咖啡。", accept: ["他不喝咖啡"] },
  
    {"type":"reorder","english":"I don't like it.","words":["喜欢","不","我"],"answer":["我","不","喜欢"],"difficulty":1},
    {"type":"fill","sentence":"她___去学校。","answer":"不","distractors":["没","很","在"],"difficulty":2},
    {"type":"translate","english":"The movie is very interesting.","answer":"这部电影很有趣。","accept":["这部电影很有趣。"],"difficulty":3},
    {"type":"mcq","prompt":"Which sentence is correct? 'The book is very big.'","options":["这本书很大。","这本书很。大","这本书是大。","这本书很。"],"answer":0,"difficulty":3},
    {"type":"fill","sentence":"这个苹果___。","answer":"很甜","distractors":["甜很","很甜的","甜的"],"difficulty":3},
    {"type":"mcq","prompt":"Which sentence is correct?","options":["他很聪明。","他聪明很。","他很很聪明。","聪明他很。"],"answer":0,"difficulty":3},
  ],
  // 4: Possession with 的
  4: [
    { type: "fill", sentence: "这是我___书。", answer: "的", distractors: ["了", "是", "在"] },
    { type: "mcq", prompt: "Which shows possession correctly?", options: ["妈妈的手机", "妈妈了手机", "妈妈是手机", "妈妈在手机"], answer: 0 },
    { type: "translate", english: "This is my cat.", answer: "这是我的猫。", accept: ["这是我的猫"] },
    { type: "reorder", english: "Teacher's book", words: ["的", "书", "老师"], answer: ["老师", "的", "书"] },
  
    {"type":"reorder","english":"My friend's phone","words":["手机","的","朋友","我"],"answer":["我","朋友","的","手机"],"difficulty":2},
    {"type":"fill","sentence":"她___衣服很好看。","answer":"的","distractors":["是","在","了"],"difficulty":1},
    {"type":"translate","english":"He has a dog.","answer":"他有一只狗。","accept":["他有一只狗。"],"difficulty":3},
    {"type":"fill","sentence":"我___一个妹妹。","answer":"有","distractors":["是","在","吃"],"difficulty":3},
    {"type":"mcq","prompt":"Which sentence correctly uses 有 to show possession?","options":["她有汽车。","她汽车有。","汽车她有。","有汽车她。"],"answer":0,"difficulty":3},
  ],
  // 5: Questions with 吗
  5: [
    { type: "fill", sentence: "你是学生___？", answer: "吗", distractors: ["呢", "了", "的"] },
    { type: "mcq", prompt: "Which is a correct yes/no question?", options: ["你喜欢中国吗？", "你喜欢中国呢？", "吗你喜欢中国？", "你喜欢吗中国？"], answer: 0 },
    { type: "translate", english: "Is he a doctor?", answer: "他是医生吗？", accept: ["他是医生吗"] },
    { type: "reorder", english: "Do you like coffee?", words: ["吗", "咖啡", "你", "喜欢"], answer: ["你", "喜欢", "咖啡", "吗"] },
  
    {"type":"reorder","english":"Do you eat meat?","words":["吗","肉","你","吃"],"answer":["你","吃","肉","吗"],"difficulty":1},
    {"type":"translate","english":"Does she like cats?","answer":"她喜欢猫吗？","accept":["她喜欢猫吗"],"difficulty":2},
    {"type":"translate","english":"There is a cat in the room.","answer":"房间里有一只猫。","accept":["房间里有一只猫。"],"difficulty":3},
    {"type":"reorder","english":"There is a cup on the table.","words":["有","杯子","桌子上"],"answer":["桌子上","有","杯子"],"difficulty":2},
    {"type":"mcq","prompt":"Which sentence correctly uses '有' to express existence?","options":["公园里有花。","公园里花有。","公园里有花在。","公园里花在有。"],"answer":0,"difficulty":3},
  ],
  // 6: Demonstratives 这/那
  6: [
    { type: "mcq", prompt: "这 means:", options: ["this", "that", "which", "what"], answer: 0 },
    { type: "fill", sentence: "___是什么？", answer: "那", distractors: ["的", "了", "吗"] },
    { type: "translate", english: "This is my book.", answer: "这是我的书。", accept: ["这是我的书"] },
    { type: "reorder", english: "That is his cat.", words: ["猫", "那", "他的", "是"], answer: ["那", "是", "他的", "猫"] },
  
    {"type":"fill","sentence":"___个人是我爸爸。","answer":"那","distractors":["这","哪","几"],"difficulty":1},
    {"type":"mcq","prompt":"Which correctly uses 这?","options":["这是我的。","这我是的。","是这我的。","我这是的。"],"answer":0,"difficulty":2},
    {"type":"mcq","prompt":"小明是怎么去学校的？他___骑自行车去的。","options":["是","在","坐","用"],"answer":0,"difficulty":3},
  ],
  // 7: Location with 在
  7: [
    { type: "fill", sentence: "他___家。", answer: "在", distractors: ["是", "有", "去"] },
    { type: "mcq", prompt: "Which correctly expresses location?", options: ["我在学校。", "我是学校。", "我有学校。", "我的学校。"], answer: 0 },
    { type: "translate", english: "She is at the hospital.", answer: "她在医院。", accept: ["她在医院"] },
    { type: "reorder", english: "The cat is at home.", words: ["在", "猫", "家"], answer: ["猫", "在", "家"] },
  
    {"type":"translate","english":"The book is on the table.","answer":"书在桌子上。","accept":["书在桌子上"],"difficulty":2},
    {"type":"reorder","english":"He is at the store.","words":["在","他","商店"],"answer":["他","在","商店"],"difficulty":1},
    {"type":"translate","english":"The boy and the girl are friends.","answer":"男孩和女孩是朋友。","accept":["男孩和女孩是朋友。"],"difficulty":3},
    {"type":"fill","sentence":"苹果___香蕉在桌子上。","answer":"和","distractors":["在","是","有"],"difficulty":3},
  ],
  // 8: Existence with 有
  8: [
    { type: "fill", sentence: "我___一个哥哥。", answer: "有", distractors: ["是", "在", "很"] },
    { type: "mcq", prompt: "Which correctly uses 有?", options: ["桌子上有一本书。", "桌子上是一本书。", "桌子上在一本书。", "桌子上很一本书。"], answer: 0 },
    { type: "translate", english: "I have two cats.", answer: "我有两只猫。", accept: ["我有两只猫", "我有两个猫"] },
    { type: "reorder", english: "There is a person here.", words: ["人", "有", "这里", "一个"], answer: ["这里", "有", "一个", "人"] },
  
    {"type":"reorder","english":"I have a dog.","words":["狗","一只","有","我"],"answer":["我","有","一只","狗"],"difficulty":1},
    {"type":"translate","english":"There are three chairs.","answer":"有三把椅子。","accept":["有三把椅子","有三个椅子"],"difficulty":2},
    {"type":"mcq","prompt":"哪一句是正确的？","options":["他的是红色的书。","他的书是红色的。","他的书红色。","他的书的红色。"],"answer":1,"difficulty":3},
  ],
  // 9: Adjectives with 很
  9: [
    { type: "fill", sentence: "她___漂亮。", answer: "很", distractors: ["是", "有", "不"] },
    { type: "mcq", prompt: "Which correctly describes someone as tall?", options: ["他很高。", "他是高。", "他有高。", "他在高。"], answer: 0 },
    { type: "translate", english: "Chinese food is very delicious.", answer: "中国菜很好吃。", accept: ["中国菜很好吃"] },
    { type: "reorder", english: "This book is very good.", words: ["很", "好", "这本书"], answer: ["这本书", "很", "好"] },
  
    {"type":"fill","sentence":"这个苹果___大。","answer":"很","distractors":["是","的","了"],"difficulty":1},
    {"type":"reorder","english":"She is very pretty.","words":["很","漂亮","她"],"answer":["她","很","漂亮"],"difficulty":1},
    {"type":"translate","english":"He does not like apples.","answer":"他不喜欢苹果。","accept":["他不喜欢苹果。"],"difficulty":3},
    {"type":"mcq","prompt":"Which sentence correctly says 'He does not drink water.'?","options":["他喝水。","他不喝水。","他不喝牛奶。","他喝不水。"],"answer":1,"difficulty":3},
    {"type":"fill","sentence":"这个苹果___小。","answer":"不","distractors":["是","吃","大"],"difficulty":3},
  ],
  // 10: Negation with 没有
  10: [
    { type: "fill", sentence: "我___钱。", answer: "没有", distractors: ["不有", "没是", "不是"] },
    { type: "mcq", prompt: "How do you negate 有?", options: ["没有", "不有", "没是", "不了"], answer: 0 },
    { type: "translate", english: "He doesn't have a phone.", answer: "他没有手机。", accept: ["他没有手机"] },
    { type: "reorder", english: "I don't have money.", words: ["钱", "我", "没有"], answer: ["我", "没有", "钱"] },
  
    {"type":"reorder","english":"She doesn't have a cat.","words":["猫","没有","她"],"answer":["她","没有","猫"],"difficulty":1},
    {"type":"fill","sentence":"桌子上___书。","answer":"没有","distractors":["不有","没是","不了"],"difficulty":2},
    {"type":"translate","english":"There is no pen on the desk.","answer":"桌子上没有笔。","accept":["桌子上没有笔"],"difficulty":3},
    {"type":"mcq","prompt":"Which sentence correctly says 'She doesn't have a cat.'?","options":["她有猫没。","她没有猫。","她不有猫。","她有没猫。"],"answer":1,"difficulty":3},
    {"type":"mcq","prompt":"Which sentence correctly says 'He doesn't have water.'?","options":["他没有水。","他不有水。","他有没水。","他没有没水。"],"answer":0,"difficulty":3},
    {"type":"mcq","prompt":"Which sentence correctly says 'He doesn't have a book.'?","options":["他没有书。","他不有书。","他没有书的。","他不书。"],"answer":0,"difficulty":3},
  ],
  // 11: Questions with 什么
  11: [
    { type: "fill", sentence: "你叫___名字？", answer: "什么", distractors: ["哪个", "谁", "多少"] },
    { type: "mcq", prompt: "什么 is used to ask about:", options: ["things/what", "people/who", "places/where", "time/when"], answer: 0 },
    { type: "translate", english: "What is this?", answer: "这是什么？", accept: ["这是什么"] },
    { type: "reorder", english: "What do you want to eat?", words: ["什么", "想", "你", "吃"], answer: ["你", "想", "吃", "什么"] },
  
    {"type":"reorder","english":"What is your name?","words":["名字","什么","你的","是"],"answer":["你的","名字","是","什么"],"difficulty":1},
    {"type":"fill","sentence":"你在做___？","answer":"什么","distractors":["谁","哪","多少"],"difficulty":1},
    {"type":"translate","english":"He didn't drink water.","answer":"他没喝水。","accept":["他没喝水"],"difficulty":3},
    {"type":"reorder","english":"She didn't go to school.","words":["学校","她","没","去"],"answer":["她","没","去","学校"],"difficulty":2},
  ],
  // 12: Questions with 谁
  12: [
    { type: "fill", sentence: "___是你的老师？", answer: "谁", distractors: ["什么", "哪", "几"] },
    { type: "mcq", prompt: "Which correctly asks 'who'?", options: ["他是谁？", "他是什么？", "他是哪？", "他是几？"], answer: 0 },
    { type: "translate", english: "Who is she?", answer: "她是谁？", accept: ["她是谁"] },
  
    {"type":"reorder","english":"Who wants to go?","words":["去","谁","想"],"answer":["谁","想","去"],"difficulty":1},
    {"type":"translate","english":"Who is your teacher?","answer":"谁是你的老师？","accept":["谁是你的老师","你的老师是谁？","你的老师是谁"],"difficulty":2},
    {"type":"fill","sentence":"这本书是___的？","answer":"谁","distractors":["什么","哪","几"],"difficulty":1},
    {"type":"translate","english":"He is not very tired.","answer":"他不太累。","accept":["他不太累。"],"difficulty":3},
    {"type":"mcq","prompt":"Which sentence correctly uses '不太' to mean 'not very'?","options":["她不太喜欢这个电影。","她不不太喜欢这个电影。","她太不喜欢这个电影。","她不太喜欢太这个电影。"],"answer":0,"difficulty":3},
    {"type":"mcq","prompt":"Which sentence correctly uses '不太' to mean 'not very'?","options":["他不太高兴。","他不高兴太。","他太不高兴。","他高兴不太。"],"answer":0,"difficulty":3},
  ],
  // 13: Questions with 哪
  13: [
    { type: "fill", sentence: "你是___国人？", answer: "哪", distractors: ["什么", "谁", "几"] },
    { type: "mcq", prompt: "哪 is used to ask about:", options: ["which/where", "what", "who", "how many"], answer: 0 },
    { type: "translate", english: "Which one is yours?", answer: "哪个是你的？", accept: ["哪个是你的"] },
  
    {"type":"reorder","english":"Which is yours?","words":["你的","是","哪个"],"answer":["哪个","是","你的"],"difficulty":1},
    {"type":"translate","english":"Where are you from?","answer":"你是哪国人？","accept":["你是哪国人","你从哪里来？","你从哪里来"],"difficulty":2},
    {"type":"fill","sentence":"你在___儿？","answer":"哪","distractors":["什么","谁","几"],"difficulty":1},
    {"type":"translate","english":"He doesn't drink coffee anymore.","answer":"他不喝咖啡了。","accept":["他不喝咖啡了。"],"difficulty":3},
    {"type":"reorder","english":"He drinks tea no longer.","words":["他","喝茶","不","了"],"answer":["他","不","喝茶","了"],"difficulty":2},
    {"type":"fill","sentence":"我___吃肉了。","answer":"不","distractors":["吃","了","不吃"],"difficulty":3},
  ],
  // 14: Questions with 几/多少
  14: [
    { type: "fill", sentence: "你有___个孩子？", answer: "几", distractors: ["多少", "什么", "哪"] },
    { type: "mcq", prompt: "几 is typically used for numbers:", options: ["under 10", "over 100", "any number", "only 1"], answer: 0 },
    { type: "translate", english: "How many students are there?", answer: "有多少学生？", accept: ["有多少学生", "多少学生"] },
    { type: "reorder", english: "How old are you?", words: ["岁", "几", "你", "了"], answer: ["你", "几", "岁", "了"] },
  
    {"type":"fill","sentence":"这个___钱？","answer":"多少","distractors":["几","什么","哪"],"difficulty":1},
    {"type":"translate","english":"How many books do you have?","answer":"你有几本书？","accept":["你有几本书"],"difficulty":2},
    {"type":"translate","english":"Is he your brother?","answer":"他是你的哥哥吗？","accept":["他是你的哥哥吗？"],"difficulty":3},
    {"type":"mcq","prompt":"Is this your pen?","options":["这是你的笔吗？","这是你的笔不？","这是你的笔呀？","这是你的笔呢？"],"answer":0,"difficulty":3},
    {"type":"translate","english":"Do you speak Chinese?","answer":"你说中文吗？","accept":["你说中文吗？"],"difficulty":3},
  ],
  // 15: Affirmative-negative questions
  15: [
    { type: "fill", sentence: "你是___是学生？", answer: "不", distractors: ["没", "很", "也"] },
    { type: "mcq", prompt: "Which is a correct A-not-A question?", options: ["你喜欢不喜欢？", "你喜欢没喜欢？", "你不喜欢喜欢？", "你喜欢吗不？"], answer: 0 },
    { type: "translate", english: "Is it good or not?", answer: "好不好？", accept: ["好不好"] },
    { type: "reorder", english: "Do you want to go or not?", words: ["去", "你", "不", "想", "想"], answer: ["你", "想", "不", "想", "去"] },
  
    {"type":"fill","sentence":"你去___去？","answer":"不","distractors":["没","吗","呢"],"difficulty":1},
    {"type":"translate","english":"Is he busy or not?","answer":"他忙不忙？","accept":["他忙不忙"],"difficulty":2},
    {"type":"translate","english":"What do you want to drink?","answer":"你想喝什么？","accept":["你想喝什么？"],"difficulty":3},
  ],
  // 16: Tag questions with 好吗
  16: [
    { type: "fill", sentence: "我们去吃饭，___？", answer: "好吗", distractors: ["吗", "呢", "吧"] },
    { type: "mcq", prompt: "好吗 at the end of a sentence is used to:", options: ["suggest and ask for agreement", "ask a yes/no question", "express surprise", "show emphasis"], answer: 0 },
    { type: "translate", english: "Let's go, okay?", answer: "我们走吧，好吗？", accept: ["我们走，好吗？", "我们走吧，好吗"] },
  
    {"type":"reorder","english":"We eat together, okay?","words":["好吗","我们","一起","吃饭"],"answer":["我们","一起","吃饭","好吗"],"difficulty":2},
    {"type":"fill","sentence":"明天去看电影，___？","answer":"好吗","distractors":["吗","呢","了"],"difficulty":1},
    {"type":"translate","english":"Let's study Chinese, okay?","answer":"我们学中文，好吗？","accept":["我们学中文，好吗"],"difficulty":2},
    {"type":"translate","english":"Who is she?","answer":"她是谁？","accept":["她是谁？"],"difficulty":3},
    {"type":"reorder","english":"Who is this?","words":["是","谁","这"],"answer":["这","是","谁"],"difficulty":2},
  ],
  // 17: Questions with 呢
  17: [
    { type: "fill", sentence: "我很好，你___？", answer: "呢", distractors: ["吗", "吧", "了"] },
    { type: "mcq", prompt: "呢 is used to:", options: ["return a question back", "negate a statement", "show past tense", "express surprise"], answer: 0 },
    { type: "translate", english: "I'm a student. And you?", answer: "我是学生。你呢？", accept: ["我是学生，你呢？", "我是学生。你呢"] },
  
    {"type":"reorder","english":"And your mom?","words":["呢","你","妈妈"],"answer":["你","妈妈","呢"],"difficulty":1},
    {"type":"fill","sentence":"他去了，你___？","answer":"呢","distractors":["吗","吧","了"],"difficulty":1},
    {"type":"translate","english":"I like tea. And you?","answer":"我喜欢茶。你呢？","accept":["我喜欢茶，你呢？","我喜欢茶。你呢"],"difficulty":2},
    {"type":"translate","english":"Where is the school?","answer":"学校在哪里？","accept":["学校在哪里？"],"difficulty":3},
    {"type":"mcq","prompt":"Where is the teacher?","options":["老师在哪儿？","老师哪里？","老师哪儿？","老师哪里在？"],"answer":0,"difficulty":3},
    {"type":"mcq","prompt":"Where is the library?","options":["图书馆在哪儿？","图书馆在哪儿的？","图书馆哪儿在？","图书馆哪儿的在？"],"answer":0,"difficulty":3},
  ],
  // 18: Also with 也
  18: [
    { type: "fill", sentence: "我喜欢猫，我___喜欢狗。", answer: "也", distractors: ["都", "还", "很"] },
    { type: "mcq", prompt: "Where does 也 go?", options: ["before the verb", "after the verb", "at the end", "at the beginning"], answer: 0 },
    { type: "translate", english: "She is also a teacher.", answer: "她也是老师。", accept: ["她也是老师"] },
    { type: "reorder", english: "I also like coffee.", words: ["也", "咖啡", "喜欢", "我"], answer: ["我", "也", "喜欢", "咖啡"] },
  
    {"type":"fill","sentence":"他___想去。","answer":"也","distractors":["都","还","又"],"difficulty":1},
    {"type":"translate","english":"I also have a cat.","answer":"我也有猫。","accept":["我也有猫","我也有一只猫。","我也有一只猫"],"difficulty":2},
    {"type":"translate","english":"When do you go to school?","answer":"你什么时候上学？","accept":["你什么时候上学？"],"difficulty":3},
    {"type":"reorder","english":"When do you go to school?","words":["你","什么时候","上学","去"],"answer":["你","什么时候","去","上学"],"difficulty":2},
    {"type":"mcq","prompt":"When does he drink water?","options":["他什么时候喝水？","他什么时候喝牛奶？","他什么时候吃水？","他什么时候喝书？"],"answer":0,"difficulty":3},
    {"type":"mcq","prompt":"When does she go to school?","options":["她什么时候去学校？","她什么时候去商店？","她什么时候喝水？","她什么时候睡觉？"],"answer":0,"difficulty":3},
  ],
  // 19: All with 都
  19: [
    { type: "fill", sentence: "我们___喜欢中国菜。", answer: "都", distractors: ["也", "很", "不"] },
    { type: "mcq", prompt: "都 means:", options: ["all/both", "also", "very", "not"], answer: 0 },
    { type: "translate", english: "They all are students.", answer: "他们都是学生。", accept: ["他们都是学生"] },
    { type: "reorder", english: "We all like it.", words: ["喜欢", "我们", "都"], answer: ["我们", "都", "喜欢"] },
  
    {"type":"fill","sentence":"他们___去了。","answer":"都","distractors":["也","还","又"],"difficulty":1},
    {"type":"translate","english":"We all eat Chinese food.","answer":"我们都吃中国菜。","accept":["我们都吃中国菜"],"difficulty":2},
    {"type":"translate","english":"How do you go to school?","answer":"你怎么去学校？","accept":["你怎么去学校？"],"difficulty":3},
    {"type":"mcq","prompt":"怎么去公园？","options":["我怎么去公园？","我怎么买公园？","我怎么看公园？","我怎么吃公园？"],"answer":0,"difficulty":3},
    {"type":"mcq","prompt":"How do you say 'How do you make tea?' in Chinese?","options":["你茶怎么喝？","怎么茶你喝？","你怎么喝茶？","茶怎么你喝？"],"answer":2,"difficulty":3},
  ],
  // 20: Adverbs 太...了
  20: [
    { type: "fill", sentence: "这个___贵了！", answer: "太", distractors: ["很", "真", "好"] },
    { type: "mcq", prompt: "太...了 expresses:", options: ["excessively/too much", "a little", "very (neutral)", "not at all"], answer: 0 },
    { type: "translate", english: "It's too expensive!", answer: "太贵了！", accept: ["太贵了"] },
    { type: "reorder", english: "Too delicious!", words: ["了", "好吃", "太"], answer: ["太", "好吃", "了"] },
  
    {"type":"fill","sentence":"今天___热了！","answer":"太","distractors":["很","真","不"],"difficulty":1},
    {"type":"reorder","english":"Too cold!","words":["了","冷","太"],"answer":["太","冷","了"],"difficulty":1},
    {"type":"translate","english":"Why is the dog crying?","answer":"狗为什么哭？","accept":["狗为什么哭？"],"difficulty":3},
    {"type":"reorder","english":"Why did he go to school?","words":["为什么","他","去","学校"],"answer":["他","为什么","去","学校"],"difficulty":2},
    {"type":"mcq","prompt":"Why did she not come?","options":["她为什么没来？","她为什么来？","她为什么去？","她为什么吃？"],"answer":0,"difficulty":3},
    {"type":"mcq","prompt":"Why did he go to the park?","options":["他为什么去公园？","他为什么买公园？","他为什么在公园？","他为什么看公园？"],"answer":0,"difficulty":3},
  ],
  // 21: Really with 真
  21: [
    { type: "fill", sentence: "今天___冷！", answer: "真", distractors: ["太", "很", "好"] },
    { type: "mcq", prompt: "真 before an adjective means:", options: ["really/truly", "too much", "a little", "not"], answer: 0 },
    { type: "translate", english: "You are really smart!", answer: "你真聪明！", accept: ["你真聪明"] },
  
    {"type":"reorder","english":"Really beautiful!","words":["漂亮","真"],"answer":["真","漂亮"],"difficulty":1},
    {"type":"fill","sentence":"这本书___好看！","answer":"真","distractors":["太","很","不"],"difficulty":1},
    {"type":"translate","english":"This is really delicious!","answer":"这个真好吃！","accept":["这个真好吃","真好吃！","真好吃"],"difficulty":2},
    {"type":"translate","english":"Which book is yours?","answer":"哪本书是你的？","accept":["哪本书是你的？"],"difficulty":3},
    {"type":"mcq","prompt":"Which one is your pen?","options":["哪个是你的书？","哪个是你的笔？","哪个是你的？","哪个是你的桌子？"],"answer":1,"difficulty":3},
    {"type":"mcq","prompt":"Which one is your bag? (The bag is small)","options":["哪个是你的小包？","哪个是你的包小？","小哪个是你的包？","包哪个是你的小？"],"answer":0,"difficulty":3},
  ],
  // 22: A little with 一点儿
  22: [
    { type: "fill", sentence: "我会说___中文。", answer: "一点儿", distractors: ["很多", "太", "真"] },
    { type: "mcq", prompt: "一点儿 means:", options: ["a little", "very", "too much", "really"], answer: 0 },
    { type: "translate", english: "I'm a little tired.", answer: "我有一点儿累。", accept: ["我有一点儿累", "我有点儿累", "我有点累"] },
  
    {"type":"reorder","english":"I know a little.","words":["一点儿","知道","我"],"answer":["我","知道","一点儿"],"difficulty":1},
    {"type":"fill","sentence":"他会说___英语。","answer":"一点儿","distractors":["很多","太","都"],"difficulty":1},
    {"type":"translate","english":"It's a little expensive.","answer":"有一点儿贵。","accept":["有一点儿贵","有点儿贵","有点贵"],"difficulty":2},
    {"type":"translate","english":"How many apples do you have?","answer":"你有几个苹果？","accept":["你有几个苹果？"],"difficulty":3},
    {"type":"mcq","prompt":"How many books does he have?","options":["他有几本书？","他有几本笔？","他有几支书？","他有几只书？"],"answer":0,"difficulty":3},
    {"type":"fill","sentence":"你___苹果？","answer":"有几个","distractors":["有几只","有几件","有几支"],"difficulty":3},
    {"type":"mcq","prompt":"他有几本___？","options":["书","苹果","水","时间"],"answer":0,"difficulty":3},
  ],
  // 23: Not very with 不太
  23: [
    { type: "fill", sentence: "这个菜___好吃。", answer: "不太", distractors: ["不很", "没太", "太不"] },
    { type: "mcq", prompt: "不太 means:", options: ["not very", "not at all", "too much", "really"], answer: 0 },
    { type: "translate", english: "I'm not very busy.", answer: "我不太忙。", accept: ["我不太忙"] },
  
    {"type":"reorder","english":"Not very far.","words":["远","不太"],"answer":["不太","远"],"difficulty":1},
    {"type":"fill","sentence":"今天___热。","answer":"不太","distractors":["不很","太不","没太"],"difficulty":1},
    {"type":"translate","english":"He is not very happy.","answer":"他不太高兴。","accept":["他不太高兴"],"difficulty":2},
    {"type":"translate","english":"How many apples do you have?","answer":"你有多少个苹果？","accept":["你有多少个苹果？"],"difficulty":3},
    {"type":"fill","sentence":"你___苹果？","answer":"有多少个","distractors":["有多个","有几","有怎样"],"difficulty":3},
  ],
  // 24: Still with 还
  24: [
    { type: "fill", sentence: "你___想吃什么？", answer: "还", distractors: ["也", "都", "又"] },
    { type: "mcq", prompt: "还 can mean:", options: ["still/also/in addition", "very", "not", "already"], answer: 0 },
    { type: "translate", english: "I still want to go.", answer: "我还想去。", accept: ["我还想去"] },
  
    {"type":"reorder","english":"He still wants to eat.","words":["吃","还","他","想"],"answer":["他","还","想","吃"],"difficulty":1},
    {"type":"fill","sentence":"我___没吃饭。","answer":"还","distractors":["也","都","就"],"difficulty":2},
    {"type":"translate","english":"She is still sleeping.","answer":"她还在睡觉。","accept":["她还在睡觉"],"difficulty":2},
    {"type":"translate","english":"How is the cake?","answer":"蛋糕怎么样？","accept":["蛋糕怎么样？"],"difficulty":3},
    {"type":"mcq","prompt":"How is the movie?","options":["电影怎么样？","电影怎么？","电影怎么了？","电影怎么样了？"],"answer":0,"difficulty":3},
  ],
  // 25: Want to with 想
  25: [
    { type: "fill", sentence: "我___去中国。", answer: "想", distractors: ["要", "会", "能"] },
    { type: "mcq", prompt: "想 + verb means:", options: ["want to", "can", "should", "must"], answer: 0 },
    { type: "translate", english: "I want to eat Chinese food.", answer: "我想吃中国菜。", accept: ["我想吃中国菜"] },
    { type: "reorder", english: "She wants to go home.", words: ["回家", "想", "她"], answer: ["她", "想", "回家"] },
  
    {"type":"fill","sentence":"我___喝咖啡。","answer":"想","distractors":["要","会","能"],"difficulty":1},
    {"type":"translate","english":"I want to go to China.","answer":"我想去中国。","accept":["我想去中国"],"difficulty":2},
    {"type":"translate","english":"How tall is he?","answer":"他多高？","accept":["他多高？"],"difficulty":3},
    {"type":"reorder","english":"How tall is he?","words":["高","他","多"],"answer":["他","多","高"],"difficulty":2},
  ],
  // 26: Need/must with 要
  26: [
    { type: "fill", sentence: "明天我___上班。", answer: "要", distractors: ["想", "会", "能"] },
    { type: "mcq", prompt: "要 expresses:", options: ["need to / will", "can", "a little", "already"], answer: 0 },
    { type: "translate", english: "I need to study.", answer: "我要学习。", accept: ["我要学习"] },
  
    {"type":"reorder","english":"I need to study.","words":["学习","要","我"],"answer":["我","要","学习"],"difficulty":1},
    {"type":"fill","sentence":"你___买什么？","answer":"要","distractors":["想","会","能"],"difficulty":1},
    {"type":"translate","english":"You must come tomorrow.","answer":"你明天要来。","accept":["你明天要来","明天你要来。","明天你要来"],"difficulty":2},
    {"type":"translate","english":"Has he finished his homework?","answer":"他写完作业了吗？","accept":["他写完作业了吗？"],"difficulty":3},
  ],
  // 27: Can (learned) with 会
  27: [
    { type: "fill", sentence: "她___说中文。", answer: "会", distractors: ["能", "可以", "想"] },
    { type: "mcq", prompt: "会 indicates ability that is:", options: ["learned/acquired", "physical", "permitted", "wanted"], answer: 0 },
    { type: "translate", english: "I can speak Chinese.", answer: "我会说中文。", accept: ["我会说中文", "我会说汉语"] },
    { type: "reorder", english: "Can you cook?", words: ["做饭", "你", "会", "吗"], answer: ["你", "会", "做饭", "吗"] },
  
    {"type":"fill","sentence":"她___说英语。","answer":"会","distractors":["能","可以","要"],"difficulty":1},
    {"type":"translate","english":"I can swim.","answer":"我会游泳。","accept":["我会游泳"],"difficulty":2},
    {"type":"translate","english":"He also drinks water.","answer":"他也喝水。","accept":["他也喝水"],"difficulty":3},
    {"type":"reorder","english":"She also eats vegetables.","words":["也","她","吃","蔬菜"],"answer":["她","也","吃","蔬菜"],"difficulty":2},
    {"type":"mcq","prompt":"He also likes apples.","options":["他喜欢苹果也。","他也喜欢苹果。","他苹果也喜欢。","他喜欢也苹果。"],"answer":1,"difficulty":3},
  ],
  // 28: Can (physical/circumstantial) with 能
  28: [
    { type: "fill", sentence: "我今天不___来。", answer: "能", distractors: ["会", "可以", "想"] },
    { type: "mcq", prompt: "能 indicates:", options: ["physical/circumstantial ability", "learned skill", "permission", "desire"], answer: 0 },
    { type: "translate", english: "I can't eat spicy food.", answer: "我不能吃辣的。", accept: ["我不能吃辣的", "我不能吃辣"] },
  
    {"type":"reorder","english":"Can you come?","words":["来","吗","能","你"],"answer":["你","能","来","吗"],"difficulty":1},
    {"type":"fill","sentence":"他生病了，___去上班。","answer":"不能","distractors":["不会","不可以","不要"],"difficulty":2},
    {"type":"translate","english":"I can't hear clearly.","answer":"我听不清楚。","accept":["我听不清楚","我不能听清楚。","我不能听清楚"],"difficulty":3},
    {"type":"translate","english":"They all speak Chinese.","answer":"他们都讲中文。","accept":["他们都讲中文。"],"difficulty":3},
    {"type":"reorder","english":"They all eat rice.","words":["都","饭","吃","他们"],"answer":["他们","都","吃","饭"],"difficulty":2},
    {"type":"mcq","prompt":"All the students _______ to school every day.","options":["都去","去都","都去都","都"],"answer":0,"difficulty":3},
  ],
  // 29: May/permission with 可以
  29: [
    { type: "fill", sentence: "我___进来吗？", answer: "可以", distractors: ["会", "能", "想"] },
    { type: "mcq", prompt: "可以 is used for:", options: ["permission", "learned ability", "physical ability", "desire"], answer: 0 },
    { type: "translate", english: "May I sit here?", answer: "我可以坐这里吗？", accept: ["我可以坐这里吗", "可以坐这里吗"] },
  
    {"type":"fill","sentence":"___在这里坐吗？","answer":"可以","distractors":["会","能","要"],"difficulty":1},
    {"type":"reorder","english":"You may go now.","words":["走","可以","你","了"],"answer":["你","可以","走","了"],"difficulty":2},
    {"type":"translate","english":"May I use your phone?","answer":"我可以用你的手机吗？","accept":["我可以用你的手机吗","可以用你的手机吗？","可以用你的手机吗"],"difficulty":2},
    {"type":"translate","english":"This dress is too small.","answer":"这条裙子太小了。","accept":["这条裙子太小了。"],"difficulty":3},
    {"type":"reorder","english":"The soup is too hot.","words":["太","了","汤","热","这"],"answer":["这","汤","太","热","了"],"difficulty":2},
    {"type":"mcq","prompt":"Which sentence means 'The movie is too long.'?","options":["电影太长了。","电影太好了。","电影太贵了。","电影太有趣了。"],"answer":0,"difficulty":3},
    {"type":"mcq","prompt":"哪一句表示‘这个苹果太酸了。’？","options":["这个苹果太甜了。","这个苹果太酸了。","这个苹果太红了。","这个苹果太小了。"],"answer":1,"difficulty":3},
  ],
  // 30: Should with 应该
  30: [
    { type: "fill", sentence: "你___多喝水。", answer: "应该", distractors: ["可以", "想", "要"] },
    { type: "mcq", prompt: "应该 means:", options: ["should", "can", "must", "want to"], answer: 0 },
    { type: "translate", english: "You should rest.", answer: "你应该休息。", accept: ["你应该休息"] },
  
    {"type":"fill","sentence":"你___早点儿睡觉。","answer":"应该","distractors":["可以","会","能"],"difficulty":1},
    {"type":"reorder","english":"We should study more.","words":["学习","应该","多","我们"],"answer":["我们","应该","多","学习"],"difficulty":2},
    {"type":"translate","english":"You should eat more vegetables.","answer":"你应该多吃蔬菜。","accept":["你应该多吃蔬菜","你应该多吃菜。","你应该多吃菜"],"difficulty":2},
    {"type":"translate","english":"The soup is a little too salty.","answer":"这汤有点儿咸。","accept":["这汤有点儿咸。"],"difficulty":3},
    {"type":"reorder","english":"The movie is a little too long.","words":["电影","有点儿","长","这"],"answer":["这","电影","有点儿","长"],"difficulty":2},
  ],
  // 31: Like to with 喜欢
  31: [
    { type: "fill", sentence: "我___看电影。", answer: "喜欢", distractors: ["想", "要", "会"] },
    { type: "mcq", prompt: "喜欢 can be followed by:", options: ["a noun or a verb", "only a noun", "only a verb", "an adjective"], answer: 0 },
    { type: "translate", english: "I like reading.", answer: "我喜欢看书。", accept: ["我喜欢看书", "我喜欢读书"] },
    { type: "reorder", english: "She likes drinking tea.", words: ["喝", "她", "茶", "喜欢"], answer: ["她", "喜欢", "喝", "茶"] },
  
    {"type":"fill","sentence":"我___看电影。","answer":"喜欢","distractors":["想","要","会"],"difficulty":1},
    {"type":"translate","english":"Do you like playing basketball?","answer":"你喜欢打篮球吗？","accept":["你喜欢打篮球吗"],"difficulty":2},
    {"type":"mcq","prompt":"Tom wants to try the cake again. What should he say?","options":["他再吃蛋糕。","他吃再蛋糕。","他再蛋糕吃。","他吃蛋糕再。"],"answer":0,"difficulty":3},
    {"type":"mcq","prompt":"What should you say if you want to watch a movie again tomorrow?","options":["我明天看电影。","我明天再看电影。","我明天看再电影。","我明天看电影再。"],"answer":1,"difficulty":3},
  ],
  // 32: Go/come to do with 去/来
  32: [
    { type: "fill", sentence: "我___商店买东西。", answer: "去", distractors: ["来", "在", "到"] },
    { type: "mcq", prompt: "去 + place + verb means:", options: ["go somewhere to do something", "come to do something", "be at a place", "want to do something"], answer: 0 },
    { type: "translate", english: "I'm going to school to study.", answer: "我去学校学习。", accept: ["我去学校学习", "我去学校上课"] },
  
    {"type":"fill","sentence":"我们___吃饭吧。","answer":"去","distractors":["来","在","到"],"difficulty":1},
    {"type":"reorder","english":"Come to my house to eat.","words":["吃饭","我家","来","到"],"answer":["来","到","我家","吃饭"],"difficulty":2},
    {"type":"translate","english":"She went to buy things.","answer":"她去买东西了。","accept":["她去买东西了","她去买东西。","她去买东西"],"difficulty":2},
    {"type":"translate","english":"He is still eating.","answer":"他还在吃饭。","accept":["他还在吃饭。"],"difficulty":3},
    {"type":"mcq","prompt":"What is the correct way to say 'She is still studying'?","options":["她还学习。","她学习还。","她还学习了。","她学习了还。"],"answer":0,"difficulty":3},
    {"type":"mcq","prompt":"She is still studying. What is the correct sentence?","options":["她学习还。","她还学习。","她还学习了。","她学习了还。"],"answer":1,"difficulty":3},
  ],
  // 33: Return with 回
  33: [
    { type: "fill", sentence: "我想___家。", answer: "回", distractors: ["去", "来", "到"] },
    { type: "mcq", prompt: "回家 means:", options: ["go home / return home", "leave home", "arrive home", "at home"], answer: 0 },
    { type: "translate", english: "He went back to China.", answer: "他回中国了。", accept: ["他回中国了"] },
  
    {"type":"fill","sentence":"他下午___家了。","answer":"回","distractors":["去","来","到"],"difficulty":1},
    {"type":"reorder","english":"When are you going home?","words":["回家","你","什么时候"],"answer":["你","什么时候","回家"],"difficulty":2},
    {"type":"translate","english":"I want to go back to my country.","answer":"我想回国。","accept":["我想回国","我想回我的国家。","我想回我的国家"],"difficulty":2},
    {"type":"translate","english":"The movie is not bad.","answer":"电影还不错。","accept":["电影还不错。"],"difficulty":3},
    {"type":"reorder","english":"The food is okay.","words":["还","可以","饭","这"],"answer":["这","饭","还","可以"],"difficulty":2},
  ],
  // 34: Completed action with 了
  34: [
    { type: "fill", sentence: "我吃___三个苹果。", answer: "了", distractors: ["过", "着", "的"] },
    { type: "mcq", prompt: "了 after a verb indicates:", options: ["completed action", "ongoing action", "future action", "habitual action"], answer: 0 },
    { type: "translate", english: "I bought a book.", answer: "我买了一本书。", accept: ["我买了一本书"] },
    { type: "reorder", english: "She ate.", words: ["了", "吃", "饭", "她"], answer: ["她", "吃", "了", "饭"] },
  
    {"type":"fill","sentence":"我吃___饭了。","answer":"了","distractors":["过","在","着"],"difficulty":1},
    {"type":"translate","english":"He bought a book.","answer":"他买了一本书。","accept":["他买了一本书"],"difficulty":2},
    {"type":"translate","english":"The book is on the table.","answer":"书在桌子上。","accept":["书在桌子上。"],"difficulty":3},
    {"type":"fill","sentence":"我的钥匙___包里。","answer":"在","distractors":["吃","喝","看"],"difficulty":3},
    {"type":"mcq","prompt":"他___在教室里。","options":["喝","吃","在","看"],"answer":2,"difficulty":3},
    {"type":"fill","sentence":"她___公园。","answer":"在","distractors":["吃","看","买"],"difficulty":3},
  ],
  // 35: Experience with 过
  35: [
    { type: "fill", sentence: "我去___中国。", answer: "过", distractors: ["了", "着", "的"] },
    { type: "mcq", prompt: "过 after a verb indicates:", options: ["past experience", "completed action just now", "ongoing action", "future action"], answer: 0 },
    { type: "translate", english: "Have you been to Beijing?", answer: "你去过北京吗？", accept: ["你去过北京吗", "你去过北京没有"] },
  
    {"type":"fill","sentence":"我去___中国。","answer":"过","distractors":["了","在","着"],"difficulty":1},
    {"type":"reorder","english":"Have you been to Beijing?","words":["吗","过","去","北京","你"],"answer":["你","去","过","北京","吗"],"difficulty":2},
    {"type":"translate","english":"I have eaten Chinese food.","answer":"我吃过中国菜。","accept":["我吃过中国菜"],"difficulty":2},
    {"type":"translate","english":"He drinks water at home.","answer":"他在家喝水。","accept":["他在家喝水"],"difficulty":3},
    {"type":"fill","sentence":"他___在公园踢球。","answer":"在","distractors":["吃","喝","看"],"difficulty":3},
  ],
  // 36: Progressive with 在
  36: [
    { type: "fill", sentence: "他___看书。", answer: "在", distractors: ["了", "过", "的"] },
    { type: "mcq", prompt: "在 before a verb means:", options: ["currently doing", "already done", "used to do", "will do"], answer: 0 },
    { type: "translate", english: "I am eating.", answer: "我在吃饭。", accept: ["我在吃饭"] },
    { type: "reorder", english: "She is studying.", words: ["学习", "在", "她"], answer: ["她", "在", "学习"] },
  
    {"type":"fill","sentence":"他___吃饭。","answer":"在","distractors":["了","过","着"],"difficulty":1},
    {"type":"translate","english":"She is reading a book.","answer":"她在看书。","accept":["她在看书"],"difficulty":2},
    {"type":"translate","english":"He wants to drink water.","answer":"他想喝水。","accept":["他想喝水"],"difficulty":3},
    {"type":"reorder","english":"They want to eat noodles.","words":["吃","他们","面","想"],"answer":["他们","想","吃","面"],"difficulty":2},
    {"type":"mcq","prompt":"他想做什么？","options":["他想喝咖啡。","他喝咖啡。","他想咖啡。","他咖啡想喝。"],"answer":0,"difficulty":3},
    {"type":"reorder","english":"She wants to read books.","words":["书","她","看","想"],"answer":["她","想","看","书"],"difficulty":2},
    {"type":"translate","english":"I want to eat noodles.","answer":"我想吃面。","accept":["我想吃面"],"difficulty":1},
  ],
  // 37: Sentence-final 了 for change of state
  37: [
    { type: "fill", sentence: "天冷___。", answer: "了", distractors: ["的", "过", "着"] },
    { type: "mcq", prompt: "了 at the end of a sentence indicates:", options: ["change of state / new situation", "completed action", "past experience", "ongoing action"], answer: 0 },
    { type: "translate", english: "I'm hungry now.", answer: "我饿了。", accept: ["我饿了"] },
  
    {"type":"fill","sentence":"下雨___。","answer":"了","distractors":["过","在","着"],"difficulty":1},
    {"type":"mcq","prompt":"Sentence-final 了 indicates:","options":["change of state","completed action","experience","ongoing action"],"answer":0,"difficulty":1},
    {"type":"translate","english":"Spring has come.","answer":"春天到了。","accept":["春天到了","春天来了。","春天来了"],"difficulty":2},
    {"type":"reorder","english":"She can speak Chinese.","words":["她","说","中文","能"],"answer":["她","能","说","中文"],"difficulty":2},
    {"type":"mcq","prompt":"Which sentence correctly shows that the boy can run?","options":["他能跑步。","他能跑书。","他能跑吗？","他能跑水。"],"answer":0,"difficulty":3},
  ],
  // 38: Sentence-final 吧 for suggestions
  38: [
    { type: "fill", sentence: "我们走___。", answer: "吧", distractors: ["了", "吗", "呢"] },
    { type: "mcq", prompt: "吧 at the end of a sentence suggests:", options: ["a suggestion or assumption", "a question", "a completed action", "negation"], answer: 0 },
    { type: "translate", english: "Let's eat!", answer: "我们吃饭吧！", accept: ["我们吃饭吧", "吃饭吧"] },
  
    {"type":"fill","sentence":"我们走___。","answer":"吧","distractors":["了","吗","呢"],"difficulty":1},
    {"type":"reorder","english":"Let's eat.","words":["吧","吃饭","我们"],"answer":["我们","吃饭","吧"],"difficulty":1},
    {"type":"translate","english":"Let's take a rest.","answer":"我们休息吧。","accept":["我们休息吧","休息吧。","休息吧"],"difficulty":2},
    {"type":"translate","english":"He can swim.","answer":"他会游泳。","accept":["他会游泳。"],"difficulty":3},
    {"type":"mcq","prompt":"She can cook. Which sentence is correct?","options":["她会做菜。","她做菜会。","她会菜做。","她做会菜。"],"answer":0,"difficulty":3},
  ],
  // 39: Expressing surprise/emphasis with 啊
  39: [
    { type: "fill", sentence: "好漂亮___！", answer: "啊", distractors: ["吗", "呢", "吧"] },
    { type: "mcq", prompt: "啊 expresses:", options: ["surprise or emphasis", "a question", "negation", "completion"], answer: 0 },
    { type: "translate", english: "So beautiful!", answer: "好漂亮啊！", accept: ["好漂亮啊", "真漂亮啊"] },
  
    {"type":"fill","sentence":"好漂亮___！","answer":"啊","distractors":["吧","吗","呢"],"difficulty":1},
    {"type":"mcq","prompt":"啊 at the end of a sentence expresses:","options":["surprise or emphasis","a question","a suggestion","past tense"],"answer":0,"difficulty":1},
    {"type":"translate","english":"So beautiful!","answer":"好漂亮啊！","accept":["好漂亮啊","真漂亮啊！","真漂亮啊"],"difficulty":2},
    {"type":"mcq","prompt":"Which sentence is correct? The girl is good to her brother.","options":["姐姐对弟弟好。","姐姐对弟弟不好。","姐姐对妈妈好。","姐姐对爸爸不好。"],"answer":0,"difficulty":3},
    {"type":"mcq","prompt":"Which sentence is correct? The boy is good to his sister.","options":["男孩对姐姐好。","男孩对姐姐了。","男孩对姐姐好了。","男孩对姐姐好啊。"],"answer":0,"difficulty":3},
    {"type":"mcq","prompt":"Which sentence is correct? The teacher is kind to the students.","options":["老师对学生们好。","老师对学生们说。","老师对学生们吃。","老师对学生们看。"],"answer":0,"difficulty":3},
  ],
  // 40: Telling time
  40: [
    { type: "fill", sentence: "现在三___半。", answer: "点", distractors: ["个", "时", "分"] },
    { type: "mcq", prompt: "How do you say 2:15?", options: ["两点十五分", "二点十五分", "两时十五分", "二个十五分"], answer: 0 },
    { type: "translate", english: "It's 8 o'clock now.", answer: "现在八点。", accept: ["现在八点", "现在八点了"] },
  
    {"type":"fill","sentence":"现在三___半。","answer":"点","distractors":["个","时","分"],"difficulty":1},
    {"type":"reorder","english":"It's two fifteen.","words":["分","两","一刻","点"],"answer":["两","点","一刻"],"difficulty":2},
    {"type":"translate","english":"What time is it now?","answer":"现在几点？","accept":["现在几点","现在几点了？","现在几点了"],"difficulty":1},
    {"type":"translate","english":"Try the shoes briefly.","answer":"试一下鞋子。","accept":["试一下鞋子"],"difficulty":3},
    {"type":"fill","sentence":"我___一下书。","answer":"看","distractors":["吃","喝","玩"],"difficulty":3},
  ],
  // 41: Dates and days
  41: [
    { type: "fill", sentence: "今天是星期___。", answer: "一", distractors: ["月", "号", "年"] },
    { type: "mcq", prompt: "The correct order for dates in Chinese is:", options: ["year-month-day", "day-month-year", "month-day-year", "day-year-month"], answer: 0 },
    { type: "translate", english: "Today is October 1st.", answer: "今天是十月一号。", accept: ["今天是十月一号", "今天十月一号", "今天是十月一日"] },
  
    {"type":"fill","sentence":"今天是星期___。","answer":"一","distractors":["天","日","月"],"difficulty":1},
    {"type":"translate","english":"Today is March 5th.","answer":"今天是三月五号。","accept":["今天是三月五号","今天三月五号。","今天三月五号"],"difficulty":2},
    {"type":"translate","english":"She finishes her homework.","answer":"她做完了作业。","accept":["她做完了作业"],"difficulty":3},
    {"type":"mcq","prompt":"Which sentence means 'He has finished drinking water?'","options":["他喝完水了。","他喝水了。","他喝水完。","他喝水了完。"],"answer":0,"difficulty":3},
    {"type":"fill","sentence":"我___完电影了。","answer":"看","distractors":["吃","做","写"],"difficulty":3},
    {"type":"mcq","prompt":"Which sentence means 'She has finished watching the movie?'","options":["她看完了电影。","她看电影了。","她看电影完。","她看电影。"],"answer":0,"difficulty":3},
    {"type":"fill","sentence":"他___完水了。","answer":"喝","distractors":["吃","看","写"],"difficulty":3},
  ],
  // 42: Duration of time
  42: [
    { type: "fill", sentence: "我学了两___中文。", answer: "年", distractors: ["个", "次", "些"] },
    { type: "mcq", prompt: "Where does the duration go?", options: ["after the verb", "before the verb", "before the subject", "at the end after 了"], answer: 0 },
    { type: "translate", english: "I studied for three hours.", answer: "我学了三个小时。", accept: ["我学了三个小时", "我学习了三个小时"] },
    { type: "reorder", english: "He slept for two hours.", words: ["两个小时", "了", "他", "睡"], answer: ["他", "睡", "了", "两个小时"] },
  
    {"type":"fill","sentence":"我学了三___中文。","answer":"年","distractors":["个","次","点"],"difficulty":1},
    {"type":"reorder","english":"I slept for two hours.","words":["小时","了","两个","睡","我"],"answer":["我","睡","了","两个","小时"],"difficulty":2},
    {"type":"translate","english":"He studied for five hours.","answer":"他学了五个小时。","accept":["他学了五个小时","他学习了五个小时。","他学习了五个小时"],"difficulty":2},
    {"type":"mcq","prompt":"Which sentence is correct? They go to the park together.","options":["他们去公园一起。","他们一起去公园。","他们一起公园去。","他们去一起公园。"],"answer":1,"difficulty":3},
    {"type":"mcq","prompt":"Which sentence means 'We go to school together'?","options":["我们一起去学校。","我们学校一起去。","我们去一起学校。","我们去学校一起。"],"answer":0,"difficulty":3},
  ],
  // 43: Time words (before/after)
  43: [
    { type: "fill", sentence: "吃饭___我去学校。", answer: "以后", distractors: ["以前", "的时候", "一边"] },
    { type: "mcq", prompt: "以前 means:", options: ["before", "after", "during", "always"], answer: 0 },
    { type: "translate", english: "Before class, I eat.", answer: "上课以前，我吃饭。", accept: ["上课以前我吃饭", "上课以前，我吃饭"] },
  
    {"type":"fill","sentence":"吃饭___去散步。","answer":"以后","distractors":["以前","的时候","正在"],"difficulty":1},
    {"type":"mcq","prompt":"以前 means:","options":["before","after","during","always"],"answer":0,"difficulty":1},
    {"type":"translate","english":"He came before me.","answer":"他在我以前来了。","accept":["他在我以前来了","他比我先来了。","他比我先来了"],"difficulty":3},
    {"type":"translate","english":"She bought a new dress.","answer":"她买了一件新裙子。","accept":["她买了一件新裙子。"],"difficulty":3},
    {"type":"mcq","prompt":"Which sentence correctly uses 了 to show a completed action?","options":["我吃饭了。","我吃饭。","我吃。","我饭吃。"],"answer":0,"difficulty":3},
  ],
  // 44: When with 的时候
  44: [
    { type: "fill", sentence: "我小___，很喜欢画画。", answer: "的时候", distractors: ["以前", "以后", "了"] },
    { type: "mcq", prompt: "的时候 means:", options: ["when / at the time of", "before", "after", "because"], answer: 0 },
    { type: "translate", english: "When I eat, I watch TV.", answer: "我吃饭的时候看电视。", accept: ["吃饭的时候我看电视", "我吃饭的时候看电视"] },
  
    {"type":"fill","sentence":"我吃饭___看电视。","answer":"的时候","distractors":["以后","以前","了"],"difficulty":1},
    {"type":"reorder","english":"When I was young.","words":["的时候","小","我"],"answer":["我","小","的时候"],"difficulty":2},
    {"type":"translate","english":"When it rains, I stay home.","answer":"下雨的时候，我在家。","accept":["下雨的时候，我在家","下雨的时候我在家。","下雨的时候我在家"],"difficulty":2},
    {"type":"translate","english":"It's getting dark now.","answer":"天黑了。","accept":["天黑了"],"difficulty":3},
  ],
  // 45: Measure words (个, 本, 只, etc.)
  45: [
    { type: "fill", sentence: "三___人", answer: "个", distractors: ["本", "只", "杯"] },
    { type: "mcq", prompt: "Which measure word is for books?", options: ["本", "个", "只", "杯"], answer: 0 },
    { type: "translate", english: "two cups of tea", answer: "两杯茶", accept: ["两杯茶"] },
    { type: "reorder", english: "one cat", words: ["猫", "一", "只"], answer: ["一", "只", "猫"] },
  
    {"type":"fill","sentence":"我买了三___苹果。","answer":"个","distractors":["本","只","杯"],"difficulty":1},
    {"type":"mcq","prompt":"Which measure word is for books?","options":["本","个","只","杯"],"answer":0,"difficulty":1},
    {"type":"translate","english":"He is cleaning the room right now.","answer":"他正在打扫房间。","accept":["他正在打扫房间。"],"difficulty":3},
    {"type":"mcq","prompt":"Which sentence correctly shows that she is eating dinner right now?","options":["她吃晚饭。","她正在吃晚饭。","她吃了晚饭。","她要吃晚饭。"],"answer":1,"difficulty":3},
  ],
  // 46: Ordinal numbers with 第
  46: [
    { type: "fill", sentence: "这是我___一次来中国。", answer: "第", distractors: ["个", "了", "的"] },
    { type: "mcq", prompt: "第三 means:", options: ["third", "three", "three times", "the three"], answer: 0 },
    { type: "translate", english: "He is the first.", answer: "他是第一。", accept: ["他是第一", "他是第一个"] },
  
    {"type":"fill","sentence":"这是我___一次来中国。","answer":"第","distractors":["个","只","了"],"difficulty":1},
    {"type":"reorder","english":"The second lesson.","words":["课","二","第"],"answer":["第","二","课"],"difficulty":1},
    {"type":"translate","english":"This is my first time.","answer":"这是我第一次。","accept":["这是我第一次"],"difficulty":2},
    {"type":"translate","english":"Let's go to the park.","answer":"我们去公园吧。","accept":["我们去公园吧"],"difficulty":3},
    {"type":"mcq","prompt":"Which sentence uses 吧 to make a suggestion?","options":["他吃饭吧。","他吃饭吗？","他吃饭了。","他吃饭。"],"answer":0,"difficulty":3},
  ],
  // 47: Approximate numbers with 几 and 多
  47: [
    { type: "fill", sentence: "他二十___岁。", answer: "多", distractors: ["几", "个", "些"] },
    { type: "mcq", prompt: "十几 means:", options: ["teens (10-19)", "exactly 10", "a few", "over 100"], answer: 0 },
    { type: "translate", english: "There are about thirty people.", answer: "有三十多个人。", accept: ["有三十多个人", "大约有三十个人"] },
  
    {"type":"fill","sentence":"他二十___岁。","answer":"多","distractors":["几","个","些"],"difficulty":1},
    {"type":"mcq","prompt":"几 for approximate numbers means:","options":["a few; several","exactly how many","very many","none"],"answer":0,"difficulty":1},
    {"type":"translate","english":"There are about ten people.","answer":"有十几个人。","accept":["有十几个人","大概有十个人。","大概有十个人"],"difficulty":2},
    {"type":"translate","english":"When it is cold, I wear a coat.","answer":"天冷的时候，我穿外套。","accept":["天冷的时候，我穿外套。"],"difficulty":3},
    {"type":"reorder","english":"He plays basketball when it is sunny.","words":["他","打","篮球","的时候","天","晴"],"answer":["天","晴","的时候","他","打","篮球"],"difficulty":2},
    {"type":"mcq","prompt":"When it is sunny, I go to the park.","options":["天晴的时候，我打篮球。","天晴的时候，我去看公园。","天晴的时候，我去公园。","天晴的时候，我玩公园。"],"answer":2,"difficulty":3},
  ],
  // 48: Money and prices
  48: [
    { type: "fill", sentence: "这个多少___？", answer: "钱", distractors: ["个", "元", "了"] },
    { type: "mcq", prompt: "块 is the spoken form of:", options: ["元 (yuan)", "角 (jiao)", "分 (fen)", "毛 (mao)"], answer: 0 },
    { type: "translate", english: "This is 5 yuan.", answer: "这个五块钱。", accept: ["这个五块钱", "这是五块钱", "这个五元"] },
  
    {"type":"fill","sentence":"这个___钱？","answer":"多少","distractors":["几","什么","怎么"],"difficulty":1},
    {"type":"reorder","english":"Five yuan.","words":["钱","块","五"],"answer":["五","块","钱"],"difficulty":1},
    {"type":"translate","english":"This is too expensive.","answer":"这个太贵了。","accept":["这个太贵了","太贵了。","太贵了"],"difficulty":2},
    {"type":"translate","english":"He drinks everything.","answer":"他什么都喝。","accept":["他什么都喝。"],"difficulty":3},
    {"type":"fill","sentence":"我___都不怕。","answer":"什么","distractors":["都","也","不"],"difficulty":3},
    {"type":"mcq","prompt":"She eats everything.","options":["她什么也吃。","她什么都吃。","她什么吃也。","她吃什么都。"],"answer":1,"difficulty":3},
  ],
  // 49: 二 vs 两
  49: [
    { type: "fill", sentence: "我有___个孩子。", answer: "两", distractors: ["二", "几", "些"] },
    { type: "mcq", prompt: "When do you use 两 instead of 二?", options: ["before measure words", "in phone numbers", "in math", "after 十"], answer: 0 },
    { type: "translate", english: "two books", answer: "两本书", accept: ["两本书"] },
  
    {"type":"fill","sentence":"我有___个孩子。","answer":"两","distractors":["二","几","多"],"difficulty":1},
    {"type":"mcq","prompt":"When should you use 两 instead of 二?","options":["Before measure words","In phone numbers","For math","After 十"],"answer":0,"difficulty":1},
    {"type":"translate","english":"Two cups of coffee.","answer":"两杯咖啡。","accept":["两杯咖啡"],"difficulty":2},
    {"type":"translate","english":"He will come tomorrow.","answer":"他明天来。","accept":["他明天来。"],"difficulty":3},
    {"type":"reorder","english":"They eat noodles today.","words":["今天","他们","吃","面"],"answer":["他们","今天","吃","面"],"difficulty":2},
    {"type":"mcq","prompt":"Which sentence is correct? He drinks water today. / He today drinks water.","options":["他今天喝水。","他喝水今天。","他今天喝。","他喝今天水。"],"answer":0,"difficulty":3},
    {"type":"translate","english":"I go to school tomorrow.","answer":"我明天去学校。","accept":["我明天去学校"],"difficulty":3},
  ],
  // 50: Asking about actions with 怎么
  50: [
    { type: "fill", sentence: "这个字___写？", answer: "怎么", distractors: ["什么", "哪里", "为什么"] },
    { type: "mcq", prompt: "怎么 is used to ask:", options: ["how", "what", "where", "why"], answer: 0 },
    { type: "translate", english: "How do you go to school?", answer: "你怎么去学校？", accept: ["你怎么去学校"] },
    { type: "reorder", english: "How do you say this?", words: ["说", "怎么", "这个"], answer: ["这个", "怎么", "说"] },
  
    {"type":"fill","sentence":"这个字___写？","answer":"怎么","distractors":["什么","哪里","为什么"],"difficulty":1},
    {"type":"translate","english":"How do you get to the school?","answer":"你怎么去学校？","accept":["你怎么去学校","怎么去学校？","怎么去学校"],"difficulty":2},
    {"type":"translate","english":"After school, I play football.","answer":"放学以后，我踢足球。","accept":["放学以后，我踢足球。"],"difficulty":3},
    {"type":"mcq","prompt":"After eating, he drinks water. Which sentence is correct?","options":["吃饭以后他喝水。","吃饭以后他吃水。","吃饭以后他走路。","吃饭以后他睡觉。"],"answer":0,"difficulty":3},
  ],
  // 51: Asking opinions with 怎么样
  51: [
    { type: "fill", sentence: "这个电影___？", answer: "怎么样", distractors: ["怎么", "什么", "好吗"] },
    { type: "mcq", prompt: "怎么样 is used to:", options: ["ask for an opinion", "ask how to do something", "ask where", "ask who"], answer: 0 },
    { type: "translate", english: "How's the weather today?", answer: "今天天气怎么样？", accept: ["今天天气怎么样", "今天的天气怎么样"] },
  
    {"type":"fill","sentence":"中国菜___？","answer":"怎么样","distractors":["怎么","什么","为什么"],"difficulty":1},
    {"type":"reorder","english":"How was the movie?","words":["怎么样","电影"],"answer":["电影","怎么样"],"difficulty":1},
    {"type":"translate","english":"How is the weather today?","answer":"今天天气怎么样？","accept":["今天天气怎么样","今天的天气怎么样？","今天的天气怎么样"],"difficulty":2},
    {"type":"translate","english":"Before eating, I wash my hands.","answer":"吃饭以前，我洗手。","accept":["吃饭以前，我洗手"],"difficulty":3},
    {"type":"fill","sentence":"___，我不会说中文。","answer":"来中国以前","distractors":["来中国以后","来中国现在","来中国明天"],"difficulty":3},
  ],
  // 52: Asking reason with 为什么
  52: [
    { type: "fill", sentence: "你___不高兴？", answer: "为什么", distractors: ["怎么", "什么", "哪里"] },
    { type: "mcq", prompt: "为什么 means:", options: ["why", "how", "what", "where"], answer: 0 },
    { type: "translate", english: "Why are you learning Chinese?", answer: "你为什么学中文？", accept: ["你为什么学中文", "你为什么学汉语"] },
  
    {"type":"fill","sentence":"你___不高兴？","answer":"为什么","distractors":["怎么","什么","哪里"],"difficulty":1},
    {"type":"reorder","english":"Why don't you eat?","words":["不","为什么","你","吃"],"answer":["你","为什么","不","吃"],"difficulty":2},
    {"type":"translate","english":"Why are you late?","answer":"你为什么迟到？","accept":["你为什么迟到","为什么你迟到？","为什么你迟到"],"difficulty":2},
    {"type":"translate","english":"What date is your birthday?","answer":"你的生日是几月几号？","accept":["你的生日是几月几号？"],"difficulty":3},
    {"type":"reorder","english":"July 5th, 2024","words":["七月","五号","二零二四年"],"answer":["二零二四年","七月","五号"],"difficulty":2},
  ],
  // 53: Preposition 从 (from)
  53: [
    { type: "fill", sentence: "我___北京来。", answer: "从", distractors: ["在", "到", "去"] },
    { type: "mcq", prompt: "从 indicates:", options: ["starting point (from)", "destination (to)", "location (at)", "direction (toward)"], answer: 0 },
    { type: "translate", english: "I come from China.", answer: "我从中国来。", accept: ["我从中国来", "我是从中国来的"] },
    { type: "reorder", english: "From home to school.", words: ["学校", "到", "从", "家"], answer: ["从", "家", "到", "学校"] },
  
    {"type":"fill","sentence":"我___北京来。","answer":"从","distractors":["到","在","去"],"difficulty":1},
    {"type":"translate","english":"I come from China.","answer":"我从中国来。","accept":["我从中国来","我是从中国来的。","我是从中国来的"],"difficulty":2},
    {"type":"translate","english":"It is 5:15 now.","answer":"现在五点十五分。","accept":["现在五点十五分。"],"difficulty":3},
    {"type":"mcq","prompt":"What time is it? It is 6:50.","options":["六点五十分","六点十分","六点五分","六点零五分"],"answer":0,"difficulty":3},
    {"type":"mcq","prompt":"现在是几点？现在是九点十分。","options":["九点十分","九点零分","九点五分","九点十五分"],"answer":0,"difficulty":3},
  ],
  // 54: Preposition 到 (to/until)
  54: [
    { type: "fill", sentence: "我___学校了。", answer: "到", distractors: ["从", "在", "去"] },
    { type: "mcq", prompt: "到 indicates:", options: ["arrival/destination", "departure", "location", "origin"], answer: 0 },
    { type: "translate", english: "I arrived at the airport.", answer: "我到机场了。", accept: ["我到机场了", "我到了机场"] },
  
    {"type":"fill","sentence":"我___学校去。","answer":"到","distractors":["从","在","去"],"difficulty":1},
    {"type":"reorder","english":"From home to school.","words":["学校","到","从","家"],"answer":["从","家","到","学校"],"difficulty":2},
    {"type":"translate","english":"I walk to the store.","answer":"我走到商店。","accept":["我走到商店","我到商店去。","我到商店去"],"difficulty":2},
    {"type":"translate","english":"I have two books.","answer":"我有两本书。","difficulty":3},
    {"type":"mcq","prompt":"Which sentence is correct?","options":["我有五个书。","我有五个个书。","我有五个苹果。","我有五个个苹果。"],"answer":2,"difficulty":3},
  ],
  // 55: Preposition 给 (to/for someone)
  55: [
    { type: "fill", sentence: "请___我一杯水。", answer: "给", distractors: ["到", "从", "在"] },
    { type: "mcq", prompt: "给 is used to:", options: ["indicate a recipient", "indicate a location", "indicate time", "indicate origin"], answer: 0 },
    { type: "translate", english: "Give me the book.", answer: "给我那本书。", accept: ["把书给我", "给我那本书", "给我书"] },
    { type: "reorder", english: "I'll call you.", words: ["打电话", "你", "我", "给"], answer: ["我", "给", "你", "打电话"] },
  
    {"type":"fill","sentence":"请___我一杯水。","answer":"给","distractors":["到","从","在"],"difficulty":1},
    {"type":"reorder","english":"Give him a book.","words":["书","一本","他","给"],"answer":["给","他","一本","书"],"difficulty":2},
    {"type":"translate","english":"He is 30 years old.","answer":"他三十岁。","accept":["他三十岁。"],"difficulty":3},
    {"type":"fill","sentence":"我___岁。","answer":"十","distractors":["吃","喝","看"],"difficulty":3},
  ],
  // 56: Conjunction 和 (and)
  56: [
    { type: "fill", sentence: "我___他是朋友。", answer: "和", distractors: ["也", "都", "很"] },
    { type: "mcq", prompt: "和 connects:", options: ["nouns/pronouns", "verbs", "sentences", "adjectives"], answer: 0 },
    { type: "translate", english: "Dad and Mom", answer: "爸爸和妈妈", accept: ["爸爸和妈妈"] },
  
    {"type":"fill","sentence":"我___他是同学。","answer":"和","distractors":["也","都","但"],"difficulty":1},
    {"type":"reorder","english":"He and I are friends.","words":["朋友","是","和","我","他"],"answer":["他","和","我","是","朋友"],"difficulty":2},
    {"type":"translate","english":"Mom and dad are at home.","answer":"爸爸和妈妈在家。","accept":["爸爸和妈妈在家","妈妈和爸爸在家。","妈妈和爸爸在家"],"difficulty":2},
    {"type":"mcq","prompt":"How much money does she have if she has 5 yuan and 3 jiao?","options":["五块三毛","五毛三块","三块五毛","三毛五块"],"answer":0,"difficulty":3},
    {"type":"mcq","prompt":"他有五块三毛。他有多少钱？","options":["五块三毛","三块五毛","五块五毛","三块三毛"],"answer":0,"difficulty":3},
  ],
  // 57: Because...so with 因为...所以
  57: [
    { type: "fill", sentence: "___下雨了，所以我没去。", answer: "因为", distractors: ["所以", "但是", "可是"] },
    { type: "mcq", prompt: "因为...所以 means:", options: ["because...therefore", "although...but", "if...then", "not only...but also"], answer: 0 },
    { type: "translate", english: "Because I'm sick, I'm not going.", answer: "因为我生病了，所以我不去。", accept: ["因为我生病了，所以不去", "因为生病了，所以我不去"] },
    { type: "reorder", english: "Because it's raining, I take an umbrella.", words: ["所以", "因为", "下雨", "带伞", "我"], answer: ["因为", "下雨", "所以", "我", "带伞"] },
  
    {"type":"fill","sentence":"___下雨了，___我没去。","answer":"因为","distractors":["虽然","如果","但是"],"difficulty":1},
    {"type":"translate","english":"Because I'm sick, I didn't go to school.","answer":"因为我生病了，所以我没去学校。","accept":["因为我生病了，所以没去学校。","因为我生病了，所以没去学校","因为我病了，所以没去上学。","因为我病了，所以没去上学"],"difficulty":2},
    {"type":"mcq","prompt":"Which sentence correctly uses the ordinal number for 'third'?","options":["这是第三个人。","这是第三个人的。","这是第三个人的书。","这是第三个人书。"],"answer":0,"difficulty":3},
    {"type":"reorder","english":"This is the third time I visit China.","words":["是","中国","我","第三","次","这","来"],"answer":["这","是","我","第三","次","来","中国"],"difficulty":2},
  ],
  // 58: Although with 虽然...但是
  58: [
    { type: "fill", sentence: "___他很忙，但是他很开心。", answer: "虽然", distractors: ["因为", "如果", "所以"] },
    { type: "mcq", prompt: "虽然...但是 means:", options: ["although...but", "because...therefore", "if...then", "not only...but also"], answer: 0 },
    { type: "translate", english: "Although it's cold, I want to go out.", answer: "虽然很冷，但是我想出去。", accept: ["虽然很冷，但是我想出去", "虽然冷，但是我想出去"] },
  
    {"type":"fill","sentence":"___很累，___他还在工作。","answer":"虽然","distractors":["因为","如果","所以"],"difficulty":1},
    {"type":"mcq","prompt":"虽然...但是 expresses:","options":["although...but","because...so","if...then","not only...but also"],"answer":0,"difficulty":1},
    {"type":"translate","english":"Although he is young, he is very smart.","answer":"虽然他很小，但是他很聪明。","accept":["虽然他很小，但是很聪明。","虽然他很小，但是很聪明","虽然他很年轻，但是他很聪明。","虽然他很年轻，但是他很聪明"],"difficulty":2},
    {"type":"translate","english":"There are some apples on the table.","answer":"桌子上有一些苹果。","accept":["桌子上有一些苹果。"],"difficulty":3},
    {"type":"reorder","english":"There are some apples on the table.","words":["一些","苹果","桌子上","有"],"answer":["桌子上","有","一些","苹果"],"difficulty":2},
    {"type":"mcq","prompt":"Which sentence is correct? Some water is on the table.","options":["桌子上有一些水。","有一些水桌子。","水有一些桌子。","桌子有一些水。"],"answer":0,"difficulty":3},
  ],
  // 59: If with 如果...就
  59: [
    { type: "fill", sentence: "___你有时间，就来我家吧。", answer: "如果", distractors: ["因为", "虽然", "所以"] },
    { type: "mcq", prompt: "如果...就 means:", options: ["if...then", "although...but", "because...so", "not only...also"], answer: 0 },
    { type: "translate", english: "If it rains, I won't go.", answer: "如果下雨，我就不去。", accept: ["如果下雨我就不去", "如果下雨，就不去了"] },
    { type: "reorder", english: "If you're tired, rest.", words: ["就", "如果", "休息", "累", "你"], answer: ["如果", "你", "累", "就", "休息"] },
  
    {"type":"fill","sentence":"___明天下雨，我们___不去了。","answer":"如果","distractors":["虽然","因为","但是"],"difficulty":1},
    {"type":"translate","english":"If you are free, let's eat together.","answer":"如果你有空，我们就一起吃饭。","accept":["如果你有空，我们一起吃饭吧。","如果你有空，我们一起吃饭吧","如果你有空，就一起吃饭。","如果你有空，就一起吃饭"],"difficulty":2},
    {"type":"translate","english":"May I use the phone?","answer":"我可以打电话吗？","accept":["我可以打电话吗？"],"difficulty":3},
    {"type":"reorder","english":"He can drink water.","words":["他","喝","水","可","以"],"answer":["他","可","以","喝","水"],"difficulty":2},
  ],
};
