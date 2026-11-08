import type { Exercise } from "./grammar";

export const grammarExercises2: Record<number, Exercise[]> = {
  // 60: Comparison with 比
  60: [
    { type: "fill", sentence: "他___我高。", answer: "比", distractors: ["和", "跟", "很"] },
    { type: "reorder", english: "Today is colder than yesterday.", words: ["冷", "今天", "昨天", "比"], answer: ["今天", "比", "昨天", "冷"] },
    { type: "mcq", prompt: "Which sentence correctly uses 比?", options: ["他比我很高。", "他比我高。", "他很比我高。", "他比高我。"], answer: 1 },
    { type: "translate", english: "Chinese is harder than English.", answer: "中文比英文难。", accept: ["中文比英文难"] },
  
    {"type":"fill","sentence":"他___我高。","answer":"比","distractors":["很","更","最"],"difficulty":1},
    {"type":"translate","english":"She is older than me.","answer":"她比我大。","accept":["她比我大"],"difficulty":2},
    {"type":"translate","english":"This apple is bigger than that apple.","answer":"这个苹果比那个苹果大。","accept":["这个苹果比那个苹果大。"],"difficulty":3},
    {"type":"reorder","english":"This car is faster than that car.","words":["这","比","那","快","车","车"],"answer":["这","车","比","那","车","快"],"difficulty":2},
    {"type":"mcq","prompt":"Which sentence correctly uses 比?","options":["这个苹果比那个苹果很甜。","这个苹果比那个苹果甜。","这个苹果比那个苹果很甜的。","这个苹果比那个苹果甜很。"],"answer":1,"difficulty":3},
  ],
  // 61: Expressing 'the same as' with 一样
  61: [
    { type: "fill", sentence: "我跟你___高。", answer: "一样", distractors: ["比", "更", "最"] },
    { type: "mcq", prompt: "How do you say 'This one is the same as that one'?", options: ["这个和那个一样。", "这个比那个一样。", "这个一样那个。", "这个跟那个比。"], answer: 0 },
    { type: "reorder", english: "His phone is the same as mine.", words: ["一样", "我的", "他的", "手机", "跟"], answer: ["他的", "手机", "跟", "我的", "一样"] },
  
    {"type":"fill","sentence":"他和我___高。","answer":"一样","distractors":["比","更","最"],"difficulty":1},
    {"type":"reorder","english":"This and that are the same.","words":["一样","那个","和","这个"],"answer":["这个","和","那个","一样"],"difficulty":2},
    {"type":"translate","english":"My phone is the same as yours.","answer":"我的手机和你的一样。","accept":["我的手机和你的一样","我的手机跟你的一样。","我的手机跟你的一样"],"difficulty":2},
    {"type":"translate","english":"This pen is the same as that one.","answer":"这支笔和那支一样。","accept":["这支笔和那支一样。"],"difficulty":3},
    {"type":"mcq","prompt":"His shoes are the same as mine.","options":["他的鞋子和我的一样。","他的鞋子和我的不同。","他的鞋子比我的大。","他的鞋子和你的不一样。"],"answer":0,"difficulty":3},
    {"type":"mcq","prompt":"他的书包跟我的___。","options":["一样","一样地","一样吗","一样了"],"answer":0,"difficulty":3},
  ],
  // 62: Superlative with 最
  62: [
    { type: "fill", sentence: "她是___漂亮的。", answer: "最", distractors: ["很", "更", "比"] },
    { type: "translate", english: "I like eating Chinese food the most.", answer: "我最喜欢吃中国菜。", accept: ["我最喜欢吃中国菜"] },
    { type: "mcq", prompt: "Which word means 'most' or '-est'?", options: ["最", "更", "比", "很"], answer: 0 },
    { type: "reorder", english: "This one is the cheapest.", words: ["最", "便宜", "这个"], answer: ["这个", "最", "便宜"] },
  
    {"type":"fill","sentence":"他是___高的人。","answer":"最","distractors":["很","更","比"],"difficulty":1},
    {"type":"translate","english":"This is the most delicious.","answer":"这个最好吃。","accept":["这个最好吃"],"difficulty":2},
    {"type":"translate","english":"This is the most expensive.","answer":"这个最贵。","accept":["这个最贵。"],"difficulty":3},
    {"type":"mcq","prompt":"Which sentence uses '最' correctly for 'most'?","options":["他最喜欢的水果是苹果。","他喜欢最水果是苹果。","他喜欢的水果最是苹果。","他喜欢的水果是苹果最。"],"answer":0,"difficulty":3},
    {"type":"mcq","prompt":"Which sentence uses '最' correctly for 'most'?","options":["这是最贵的花。","这是最贵花。","这是最贵的花了。","这是最贵花了。"],"answer":0,"difficulty":3},
  ],
  // 63: Expressing 'even more' with 更
  63: [
    { type: "fill", sentence: "明天会___冷。", answer: "更", distractors: ["最", "很", "比"] },
    { type: "mcq", prompt: "Which sentence means 'I want to find an even better job'?", options: ["我想找更好的工作。", "我想找最好的工作。", "我想找很好的工作。", "我想找比好的工作。"], answer: 0 },
    { type: "reorder", english: "He is even taller than me.", words: ["更", "高", "他", "我", "比"], answer: ["他", "比", "我", "更", "高"] },
  
    {"type":"fill","sentence":"今天___冷了。","answer":"更","distractors":["很","最","比"],"difficulty":1},
    {"type":"reorder","english":"He is even taller.","words":["高","更","他"],"answer":["他","更","高"],"difficulty":1},
    {"type":"translate","english":"This one is even better.","answer":"这个更好。","accept":["这个更好"],"difficulty":2},
    {"type":"translate","english":"He runs even faster than me.","answer":"他跑得比我更快。","accept":["他跑得比我更快。"],"difficulty":3},
    {"type":"mcq","prompt":"Which sentence means 'She works even harder than before'?","options":["她工作得比以前更认真。","她工作得比以前更慢。","她工作得比以前更轻松。","她工作得比以前更少。"],"answer":0,"difficulty":3},
    {"type":"mcq","prompt":"Which sentence means 'He works even harder than before'?","options":["他更努力了。","他更累了。","他更开心了。","他更年轻了。"],"answer":0,"difficulty":3},
    {"type":"mcq","prompt":"哪句话的意思是‘他跑得比昨天更快’？","options":["他更慢了。","他昨天跑得更快。","他今天跑得更慢。","他今天跑得更快。"],"answer":3,"difficulty":3},
  ],
  // 64: Expressing 'a bit more' with 一点
  64: [
    { type: "fill", sentence: "请说慢___。", answer: "一点", distractors: ["一下", "一些", "一会儿"] },
    { type: "translate", english: "Can it be a bit cheaper?", answer: "可以便宜一点吗？", accept: ["能便宜一点吗？", "可以便宜一点吗"] },
    { type: "mcq", prompt: "Where does 一点 go in a comparative sentence?", options: ["After the adjective", "Before the adjective", "Before 比", "At the beginning"], answer: 0 },
  
    {"type":"fill","sentence":"请说慢___。","answer":"一点","distractors":["一样","一些","一下"],"difficulty":1},
    {"type":"reorder","english":"A little cheaper please.","words":["一点","便宜","请"],"answer":["请","便宜","一点"],"difficulty":2},
    {"type":"translate","english":"Can you speak a bit louder?","answer":"你能大声一点吗？","accept":["你能大声一点吗","请大声一点。","请大声一点"],"difficulty":2},
    {"type":"translate","english":"This book is a little more expensive than that one.","answer":"这本书比那本贵一点儿。","accept":["这本书比那本贵一点儿。"],"difficulty":3},
    {"type":"mcq","prompt":"Which sentence means 'Can you speak a little louder?'","options":["你能说快一点吗？","你能说慢一点吗？","你能大声一点吗？","你能小声一点吗？"],"answer":2,"difficulty":3},
    {"type":"mcq","prompt":"Which sentence means 'Can you speak a little louder?'","options":["请说大声一点儿。","请说慢一点儿。","请说快一点儿。","请说小一点儿。"],"answer":0,"difficulty":3},
  ],
  // 65: Expressing 'not as... as' with 没有
  65: [
    { type: "fill", sentence: "我___他高。", answer: "没有", distractors: ["不比", "不是", "没比"] },
    { type: "reorder", english: "Today is not as hot as yesterday.", words: ["热", "今天", "昨天", "没有"], answer: ["今天", "没有", "昨天", "热"] },
    { type: "mcq", prompt: "Which means 'I'm not as tall as him'?", options: ["我没有他高。", "我不比他高。", "我没他比高。", "我不有他高。"], answer: 0 },
  
    {"type":"fill","sentence":"他___我高。","answer":"没有","distractors":["不比","不是","不如"],"difficulty":1},
    {"type":"reorder","english":"Not as fast as him.","words":["快","没有","他"],"answer":["没有","他","快"],"difficulty":2},
    {"type":"translate","english":"Today is not as hot as yesterday.","answer":"今天没有昨天热。","accept":["今天没有昨天热","今天没有昨天那么热。","今天没有昨天那么热"],"difficulty":2},
    {"type":"translate","english":"Because I am tired, I want to sleep.","answer":"我累了，所以想睡觉。","accept":["我累了，所以想睡觉。"],"difficulty":3},
    {"type":"mcq","prompt":"Because it is raining, I didn't go to the park.","options":["因为下雨了，所以没去公园。","因为没下雨，所以去公园了。","因为下雨了，所以去了公园。","因为没下雨，所以没去公园。"],"answer":0,"difficulty":3},
    {"type":"fill","sentence":"他___生病了，所以没去学校。","answer":"因为","distractors":["所以","但是","而且"],"difficulty":3},
    {"type":"fill","sentence":"因为天气冷，___我穿了厚衣服。","answer":"所以","distractors":["因为","但是","然后"],"difficulty":3},
  ],
  // 66: 虽然...但是 (although...but)
  66: [
    { type: "fill", sentence: "___他很累，但是他还在学习。", answer: "虽然", distractors: ["因为", "如果", "不但"] },
    { type: "mcq", prompt: "Which pair means 'although...but'?", options: ["虽然...但是", "因为...所以", "不但...而且", "如果...就"], answer: 0 },
    { type: "reorder", english: "Although it's raining, I still want to go.", words: ["但是", "我", "虽然", "下雨", "还", "想去"], answer: ["虽然", "下雨", "但是", "我", "还", "想去"] },
    { type: "translate", english: "Although he is tired, he is still studying.", answer: "虽然他很累，但是他还在学习。", accept: ["虽然他很累，但是还在学习。"] },
  
    {"type":"fill","sentence":"___很贵，___质量很好。","answer":"虽然","distractors":["因为","不但","如果"],"difficulty":1},
    {"type":"translate","english":"Although it's raining, I still go.","answer":"虽然下雨了，但是我还是去。","accept":["虽然下雨了，但是我还是去","虽然下雨，但是我还去。","虽然下雨，但是我还去"],"difficulty":2},
    {"type":"translate","english":"Although it is cold, I still want to go out.","answer":"虽然很冷，但是我想出去。","accept":["虽然很冷但是我想出去。"],"difficulty":3},
    {"type":"mcq","prompt":"Which sentence correctly uses 虽然...但是 to express contrast?","options":["虽然他很忙，他去了。","虽然他很忙，但是他还去了。","他很忙，但是虽然去了。","虽然他很忙，他但是去了。"],"answer":1,"difficulty":3},
    {"type":"fill","sentence":"虽然很累，___继续工作。","answer":"但是","distractors":["而且","所以","然后"],"difficulty":3},
    {"type":"fill","sentence":"虽然很冷，___我想出去。","answer":"但是","distractors":["所以","因为","然后"],"difficulty":3},
  ],
  // 67: 因为...所以 (because...so)
  67: [
    { type: "fill", sentence: "___下雨了，所以我没去。", answer: "因为", distractors: ["虽然", "如果", "不但"] },
    { type: "mcq", prompt: "Complete: ___他生病了，所以没来上课。", options: ["因为", "虽然", "如果", "不但"], answer: 0 },
    { type: "reorder", english: "Because I'm busy, I can't go.", words: ["去", "因为", "所以", "我", "很忙", "不能"], answer: ["因为", "我", "很忙", "所以", "不能", "去"] },
  
    {"type":"fill","sentence":"___他努力学习，___考试考得很好。","answer":"因为","distractors":["虽然","如果","不但"],"difficulty":1},
    {"type":"reorder","english":"Because it's cold, I wear a coat.","words":["所以","穿","因为","外套","冷","我"],"answer":["因为","冷","所以","我","穿","外套"],"difficulty":2},
    {"type":"translate","english":"Because I'm busy, I can't go.","answer":"因为我很忙，所以不能去。","accept":["因为我很忙，所以不能去","因为忙，所以去不了。","因为忙，所以去不了"],"difficulty":2},
    {"type":"translate","english":"Besides the teacher, everyone went to the party.","answer":"除了老师以外，大家都去参加聚会了。","accept":["除了老师以外，大家都去参加聚会了。"],"difficulty":3},
    {"type":"mcq","prompt":"除了他以外，我们都去了学校。这句话的意思是：","options":["只有他没去学校。","他和我们都去了学校。","他去了学校，但我们都没去。","他和我们都没去学校。"],"answer":0,"difficulty":3},
    {"type":"fill","sentence":"除了他以外，___人都来了。","answer":"其他","distractors":["也","都","还"],"difficulty":3},
    {"type":"fill","sentence":"除了小明___，大家都去公园了。","answer":"以外","distractors":["也","还","都"],"difficulty":3},
  ],
  // 68: 不但...而且 (not only...but also)
  68: [
    { type: "fill", sentence: "他___会说中文，而且会说日语。", answer: "不但", distractors: ["虽然", "因为", "如果"] },
    { type: "translate", english: "She is not only beautiful, but also smart.", answer: "她不但漂亮，而且聪明。", accept: ["她不但漂亮而且聪明。"] },
    { type: "mcq", prompt: "Which pair means 'not only...but also'?", options: ["不但...而且", "虽然...但是", "因为...所以", "一边...一边"], answer: 0 },
  
    {"type":"fill","sentence":"他___会说中文，___会说日语。","answer":"不但","distractors":["虽然","因为","如果"],"difficulty":1},
    {"type":"reorder","english":"Not only pretty but also smart.","words":["而且","聪明","不但","漂亮"],"answer":["不但","漂亮","而且","聪明"],"difficulty":2},
    {"type":"translate","english":"He not only sings but also dances.","answer":"他不但会唱歌，而且会跳舞。","accept":["他不但会唱歌，而且会跳舞","他不但唱歌，而且跳舞。","他不但唱歌，而且跳舞"],"difficulty":2},
    {"type":"translate","english":"Do you want tea or coffee?","answer":"你要喝茶还是咖啡？","accept":["你要喝茶还是咖啡？"],"difficulty":3},
    {"type":"mcq","prompt":"Which sentence correctly uses '或者' to say 'Tomorrow or the day after is fine.'?","options":["明天或者后天都可以。","明天还是后天都可以。","明天和后天都可以。","明天或者后天都不可以。"],"answer":0,"difficulty":3},
    {"type":"fill","sentence":"你要喝茶___咖啡？","answer":"还是","distractors":["或者","和","还是吗"],"difficulty":3},
  ],
  // 69: 如果...就 (if...then)
  69: [
    { type: "fill", sentence: "___你有时间，就来我家吧。", answer: "如果", distractors: ["虽然", "因为", "不但"] },
    { type: "reorder", english: "If it rains tomorrow, I won't go.", words: ["就", "如果", "明天", "不去", "我", "下雨"], answer: ["如果", "明天", "下雨", "我", "就", "不去"] },
    { type: "translate", english: "If you are tired, then rest.", answer: "如果你累了，就休息吧。", accept: ["如果你累了就休息吧。"] },
  
    {"type":"fill","sentence":"___你来，我___去接你。","answer":"如果","distractors":["虽然","因为","不但"],"difficulty":1},
    {"type":"reorder","english":"If free, then go.","words":["就","有空","去","如果"],"answer":["如果","有空","就","去"],"difficulty":2},
    {"type":"translate","english":"If it rains, we won't go.","answer":"如果下雨，我们就不去了。","accept":["如果下雨，我们就不去了","如果下雨就不去了。","如果下雨就不去了"],"difficulty":2},
    {"type":"translate","english":"She not only sings, but also dances very well.","answer":"她不但唱歌，而且跳舞跳得很好。","accept":["她不但唱歌，而且跳舞跳得很好。"],"difficulty":3},
    {"type":"mcq","prompt":"He not only studies Chinese, but also speaks it very well. Which sentence is correct?","options":["他不但学习中文，而且说得好。","他不但说中文，而且学习得好。","他不但学习中文，而且说得不好。","他不但说中文，而且学习中文。"],"answer":0,"difficulty":3},
    {"type":"mcq","prompt":"Which sentence is correct?","options":["他不但会做饭，而且会洗衣服。","他不但会做饭，而且洗衣服。","他不但会做饭，而且会洗衣服了。","他不但会做饭，而且会洗衣服的。"],"answer":0,"difficulty":3},
    {"type":"mcq","prompt":"Which sentence correctly uses 不但…而且?","options":["他不但会唱歌，而且会跳舞。","他不但会唱歌，而且不会跳舞。","他不但不会唱歌，而且会跳舞。","他不但不会唱歌，而且不会跳舞。"],"answer":0,"difficulty":3},
  ],
  // 70: 一边...一边 (doing two things at once)
  70: [
    { type: "fill", sentence: "他___吃饭___看电视。", answer: "一边", distractors: ["一样", "一起", "一下"] },
    { type: "mcq", prompt: "Which sentence correctly uses 一边...一边?", options: ["她一边唱歌一边跳舞。", "她一边唱歌一边了跳舞。", "一边她唱歌一边跳舞。", "她唱歌一边跳舞一边。"], answer: 0 },
    { type: "reorder", english: "He listens to music while studying.", words: ["一边", "学习", "一边", "他", "听音乐"], answer: ["他", "一边", "学习", "一边", "听音乐"] },
  
    {"type":"fill","sentence":"她___听音乐___做作业。","answer":"一边","distractors":["一起","又","一样"],"difficulty":1},
    {"type":"reorder","english":"Walking and talking.","words":["一边","说话","走路","一边"],"answer":["一边","走路","一边","说话"],"difficulty":2},
    {"type":"translate","english":"He eats while watching TV.","answer":"他一边看电视一边吃饭。","accept":["他一边看电视一边吃饭","他一边吃饭一边看电视。","他一边吃饭一边看电视"],"difficulty":2},
    {"type":"translate","english":"She has already finished her homework.","answer":"她已经完成了作业。","accept":["她已经完成了作业。"],"difficulty":3},
    {"type":"reorder","english":"They have already left the room.","words":["他们","房间","已经","离开","了"],"answer":["他们","已经","离开","了","房间"],"difficulty":2},
    {"type":"fill","sentence":"我们___去公园了。","answer":"已经","distractors":["了","已经了","了已经"],"difficulty":3},
  ],
  // 71: 越来越 (more and more)
  71: [
    { type: "fill", sentence: "天气越来越___了。", answer: "冷", distractors: ["很冷", "最冷", "更冷"] },
    { type: "mcq", prompt: "What does 越来越 mean?", options: ["More and more", "Less and less", "The most", "Even more"], answer: 0 },
    { type: "translate", english: "His Chinese is getting better and better.", answer: "他的中文越来越好了。", accept: ["他的中文越来越好。"] },
    { type: "reorder", english: "The weather is getting hotter and hotter.", words: ["越来越", "天气", "了", "热"], answer: ["天气", "越来越", "热", "了"] },
  
    {"type":"fill","sentence":"天气___冷了。","answer":"越来越","distractors":["更","最","很"],"difficulty":1},
    {"type":"translate","english":"He is getting better and better.","answer":"他越来越好了。","accept":["他越来越好了","他越来越好。","他越来越好"],"difficulty":2},
    {"type":"translate","english":"He just called me.","answer":"他刚才给我打电话了。","accept":["他刚才给我打电话了。"],"difficulty":3},
    {"type":"mcq","prompt":"Which sentence means 'He just called me'?","options":["他刚才给我打电话了。","他现在给我打电话了。","他昨天给我打电话了。","他明天给我打电话了。"],"answer":0,"difficulty":3},
  ],
  // 72: 又...又 (both...and)
  72: [
    { type: "fill", sentence: "这个菜又好吃又___。", answer: "便宜", distractors: ["很贵", "不好", "太大"] },
    { type: "mcq", prompt: "Which correctly uses 又...又?", options: ["她又漂亮又聪明。", "她又漂亮又了聪明。", "又她漂亮又聪明。", "她漂亮又聪明又。"], answer: 0 },
    { type: "reorder", english: "This room is both big and bright.", words: ["又", "这个", "又", "房间", "大", "亮"], answer: ["这个", "房间", "又", "大", "又", "亮"] },
  
    {"type":"fill","sentence":"这个菜___好看___好吃。","answer":"又","distractors":["也","都","还"],"difficulty":1},
    {"type":"reorder","english":"Both cheap and good.","words":["又","好","又","便宜"],"answer":["又","便宜","又","好"],"difficulty":2},
    {"type":"translate","english":"She is both tall and beautiful.","answer":"她又高又漂亮。","accept":["她又高又漂亮"],"difficulty":2},
    {"type":"translate","english":"The boy finally found his toy.","answer":"男孩终于找到了他的玩具。","accept":["男孩终于找到了他的玩具。"],"difficulty":3},
    {"type":"mcq","prompt":"Which sentence correctly uses 终于 to express 'finally'?","options":["他终于吃晚饭了。","他吃晚饭终于了。","他终于晚饭吃。","他晚饭终于吃。"],"answer":0,"difficulty":3},
    {"type":"mcq","prompt":"Which sentence correctly uses 终于 to express 'finally'?","options":["我终于吃饭了。","我终于吃饭。","我吃饭终于了。","我吃饭了终于。"],"answer":0,"difficulty":3},
    {"type":"fill","sentence":"他___考试了。","answer":"终于","distractors":["终于了","了终于","终于了了"],"difficulty":3},
  ],
  // 73: 除了...以外 (besides / except)
  73: [
    { type: "fill", sentence: "___中文以外，他还会说英语。", answer: "除了", distractors: ["因为", "虽然", "不但"] },
    { type: "mcq", prompt: "What does 除了中文以外，他还会说日语 mean?", options: ["Besides Chinese, he can also speak Japanese.", "Except for Chinese, he cannot speak Japanese.", "He speaks Chinese instead of Japanese.", "He only speaks Chinese and Japanese."], answer: 0 },
    { type: "translate", english: "Besides me, everyone went.", answer: "除了我以外，大家都去了。", accept: ["除了我，大家都去了。"] },
  
    {"type":"fill","sentence":"___他以外，我们都去了。","answer":"除了","distractors":["因为","虽然","不但"],"difficulty":1},
    {"type":"reorder","english":"Besides Chinese, he speaks English.","words":["以外","除了","还会","英语","中文","说"],"answer":["除了","中文","以外","还会","说","英语"],"difficulty":3},
    {"type":"translate","english":"Besides me, everyone went.","answer":"除了我以外，大家都去了。","accept":["除了我以外，大家都去了","除了我，大家都去了。","除了我，大家都去了"],"difficulty":2},
    {"type":"translate","english":"He often plays basketball.","answer":"他经常打篮球。","accept":["他常常打篮球。"],"difficulty":3},
    {"type":"reorder","english":"They often eat noodles.","words":["他们","吃","面","经常"],"answer":["他们","经常","吃","面"],"difficulty":2},
    {"type":"mcq","prompt":"Which sentence correctly uses '经常' to mean 'often'?","options":["我经常去学校。","我经常去学校了。","我经常去学校了的。","我经常去学校了的了。"],"answer":0,"difficulty":3},
  ],
  // 74: 对...感兴趣 (interested in)
  74: [
    { type: "fill", sentence: "我对中国文化很___。", answer: "感兴趣", distractors: ["喜欢", "高兴", "有意思"] },
    { type: "reorder", english: "She is interested in music.", words: ["感兴趣", "她", "音乐", "对", "很"], answer: ["她", "对", "音乐", "很", "感兴趣"] },
    { type: "mcq", prompt: "How do you say 'I'm interested in history'?", options: ["我对历史很感兴趣。", "我很感兴趣对历史。", "我对历史感很兴趣。", "对历史我很感兴趣。"], answer: 0 },
  
    {"type":"fill","sentence":"我对中国文化___。","answer":"感兴趣","distractors":["有兴趣","喜欢","爱好"],"difficulty":1},
    {"type":"reorder","english":"She is interested in music.","words":["感兴趣","音乐","对","她"],"answer":["她","对","音乐","感兴趣"],"difficulty":2},
    {"type":"translate","english":"Are you interested in history?","answer":"你对历史感兴趣吗？","accept":["你对历史感兴趣吗"],"difficulty":2},
    {"type":"translate","english":"He has always lived in Shanghai.","answer":"他一直住在上海。","accept":["他一直住在上海。"],"difficulty":3},
    {"type":"mcq","prompt":"Which sentence means 'She has always eaten vegetables'?","options":["她一直吃蔬菜。","她吃一直蔬菜。","她一直吃肉。","她吃蔬菜一直。"],"answer":0,"difficulty":3},
    {"type":"mcq","prompt":"Which sentence means 'He has always drunk water'?","options":["他一直喝水。","他喝水。","他一直吃水。","他喝一直水。"],"answer":0,"difficulty":3},
  ],
  // 75: 先...然后 (first...then)
  75: [
    { type: "fill", sentence: "___吃饭，然后去上课。", answer: "先", distractors: ["再", "就", "才"] },
    { type: "reorder", english: "First take a shower, then sleep.", words: ["然后", "先", "睡觉", "洗澡"], answer: ["先", "洗澡", "然后", "睡觉"] },
    { type: "translate", english: "First do homework, then watch TV.", answer: "先做作业，然后看电视。", accept: ["先做作业然后看电视。"] },
  
    {"type":"fill","sentence":"___洗手，___吃饭。","answer":"先","distractors":["就","才","再"],"difficulty":1},
    {"type":"reorder","english":"First study, then play.","words":["然后","玩","学习","先"],"answer":["先","学习","然后","玩"],"difficulty":2},
    {"type":"translate","english":"First eat, then go.","answer":"先吃饭，然后去。","accept":["先吃饭，然后去","先吃饭然后去。","先吃饭然后去"],"difficulty":2},
    {"type":"translate","english":"It suddenly started snowing.","answer":"突然下雪了。","accept":["突然下雪了"],"difficulty":3},
    {"type":"mcq","prompt":"Which sentence means 'She suddenly stopped crying'?","options":["她突然不哭。","她突然不哭了。","她突然哭不了。","她突然哭了。"],"answer":1,"difficulty":3},
    {"type":"mcq","prompt":"Which sentence means 'He suddenly stopped running'?","options":["他突然不跑。","他突然跑不。","他突然不跑步。","他突然跑步。"],"answer":0,"difficulty":3},
  ],
  // 76: 一...就 (as soon as)
  76: [
    { type: "fill", sentence: "他一回家___看电视。", answer: "就", distractors: ["才", "再", "还"] },
    { type: "mcq", prompt: "What does 一...就 express?", options: ["As soon as...then", "Not only...but also", "Although...but", "If...then"], answer: 0 },
    { type: "reorder", english: "As soon as I see him, I'm happy.", words: ["高兴", "我", "就", "一", "他", "看到"], answer: ["我", "一", "看到", "他", "就", "高兴"] },
    { type: "translate", english: "As soon as he arrives, we'll eat.", answer: "他一到我们就吃饭。", accept: ["他一到，我们就吃饭。"] },
  
    {"type":"fill","sentence":"他___回家___做作业。","answer":"一","distractors":["先","才","又"],"difficulty":2},
    {"type":"translate","english":"As soon as I arrived, it started raining.","answer":"我一到就下雨了。","accept":["我一到就下雨了"],"difficulty":2},
    {"type":"translate","english":"He will come immediately.","answer":"他马上来。","accept":["他马上来"],"difficulty":3},
    {"type":"reorder","english":"She drinks water immediately.","words":["她","水","喝","马上"],"answer":["她","马上","喝","水"],"difficulty":2},
    {"type":"fill","sentence":"我___吃饭。","answer":"马上","distractors":["马上地","马上了","马上着"],"difficulty":3},
  ],
  // 77: 才 (only then / not until)
  77: [
    { type: "fill", sentence: "他十点___来。", answer: "才", distractors: ["就", "再", "又"] },
    { type: "mcq", prompt: "What does 才 imply about timing?", options: ["Later than expected", "Earlier than expected", "Exactly on time", "Repeatedly"], answer: 0 },
    { type: "translate", english: "I didn't understand until the teacher explained.", answer: "老师解释了我才明白。", accept: ["老师解释以后我才明白。"] },
  
    {"type":"fill","sentence":"他十点___来。","answer":"才","distractors":["就","再","又"],"difficulty":1},
    {"type":"mcq","prompt":"才 emphasizes that something happened:","options":["later than expected","earlier than expected","as expected","never"],"answer":0,"difficulty":1},
    {"type":"translate","english":"He didn't arrive until 10 o'clock.","answer":"他十点才到。","accept":["他十点才到","他十点才来。","他十点才来"],"difficulty":2},
    {"type":"fill","sentence":"我___书。","answer":"看到","distractors":["喝到","听到","吃到"],"difficulty":3},
    {"type":"mcq","prompt":"I ___ the book. (successfully found it)","options":["找到","找到的","找到他","找到我"],"answer":0,"difficulty":3},
  ],
  // 78: 再 vs 又 (again - future vs past)
  78: [
    { type: "fill", sentence: "明天我___来。", answer: "再", distractors: ["又", "还", "才"] },
    { type: "mcq", prompt: "Which is correct for something that happened again in the past?", options: ["他又迟到了。", "他再迟到了。", "他还迟到了。", "他才迟到了。"], answer: 0 },
    { type: "fill", sentence: "他昨天___迟到了。", answer: "又", distractors: ["再", "才", "就"] },
    { type: "translate", english: "Please come again tomorrow.", answer: "明天请再来。", accept: ["请明天再来。"] },
  
    {"type":"fill","sentence":"明天我___去一次。","answer":"再","distractors":["又","还","才"],"difficulty":1},
    {"type":"mcq","prompt":"又 is used for repetition in the:","options":["past","future","both","neither"],"answer":0,"difficulty":1},
    {"type":"translate","english":"The cake is ready.","answer":"蛋糕做好了。","accept":["蛋糕做好了"],"difficulty":3},
    {"type":"reorder","english":"The milk is ready.","words":["好","牛奶","了","做"],"answer":["牛奶","做","好","了"],"difficulty":2},
    {"type":"fill","sentence":"作业___了。","answer":"写好","distractors":["写","写完了","写好没"],"difficulty":3},
  ],
  // 79: 还是 vs 或者 (or - question vs statement)
  79: [
    { type: "fill", sentence: "你喝茶___喝咖啡？", answer: "还是", distractors: ["或者", "和", "跟"] },
    { type: "fill", sentence: "你可以坐公共汽车___坐地铁。", answer: "或者", distractors: ["还是", "和", "跟"] },
    { type: "mcq", prompt: "When asking a question with 'or', which word should you use?", options: ["还是", "或者", "和", "但是"], answer: 0 },
  
    {"type":"fill","sentence":"你喝茶___喝咖啡？","answer":"还是","distractors":["或者","和","但"],"difficulty":1},
    {"type":"mcq","prompt":"或者 is used in:","options":["statements","questions","commands","exclamations"],"answer":0,"difficulty":1},
    {"type":"translate","english":"You can come today or tomorrow.","answer":"你今天或者明天来。","accept":["你今天或者明天来","你可以今天或者明天来。","你可以今天或者明天来"],"difficulty":2},
  ],
  // 80: 把 (disposal construction)
  80: [
    { type: "fill", sentence: "请___门关上。", answer: "把", distractors: ["被", "让", "给"] },
    { type: "reorder", english: "Please put the book on the table.", words: ["桌子上", "请", "书", "放在", "把"], answer: ["请", "把", "书", "放在", "桌子上"] },
    { type: "mcq", prompt: "Which sentence correctly uses 把?", options: ["他把作业做完了。", "他做完了把作业。", "把他作业做完了。", "他作业把做完了。"], answer: 0 },
    { type: "translate", english: "I drank the water.", answer: "我把水喝了。", accept: ["我把水喝完了。"] },
  
    {"type":"fill","sentence":"请___门关上。","answer":"把","distractors":["被","让","给"],"difficulty":1},
    {"type":"translate","english":"Please put the book on the table.","answer":"请把书放在桌子上。","accept":["请把书放在桌子上"],"difficulty":2},
    {"type":"translate","english":"Can you lift this box?","answer":"你能抬得动这个箱子吗？","accept":["你能抬得动这个箱子吗？"],"difficulty":3},
    {"type":"mcq","prompt":"Which sentence correctly uses the potential complement with 得/不?","options":["我听不懂这个故事。","我听不懂故事。","我听不故事。","我听得故事。"],"answer":0,"difficulty":3},
    {"type":"mcq","prompt":"Which sentence correctly uses the potential complement with 得/不?","options":["他听不懂音乐。","他听不音乐。","他听得音乐。","他听音乐。"],"answer":0,"difficulty":3},
  ],
  // 81: 被 (passive construction)
  81: [
    { type: "fill", sentence: "我的手机___偷了。", answer: "被", distractors: ["把", "让", "给"] },
    { type: "mcq", prompt: "Which sentence is passive?", options: ["蛋糕被他吃了。", "他吃了蛋糕。", "他把蛋糕吃了。", "蛋糕让吃他了。"], answer: 0 },
    { type: "reorder", english: "The cup was broken by him.", words: ["了", "被", "他", "杯子", "打破"], answer: ["杯子", "被", "他", "打破", "了"] },
    { type: "translate", english: "My bike was stolen.", answer: "我的自行车被偷了。", accept: ["我的自行车被人偷了。"] },
  
    {"type":"fill","sentence":"杯子___他打破了。","answer":"被","distractors":["把","让","给"],"difficulty":1},
    {"type":"translate","english":"The cake was eaten by him.","answer":"蛋糕被他吃了。","accept":["蛋糕被他吃了"],"difficulty":2},
    {"type":"translate","english":"He sings badly.","answer":"他唱得不好。","accept":["他唱得不好。"],"difficulty":3},
    {"type":"mcq","prompt":"He writes very quickly.","options":["他写得很快。","他写得慢。","他写得不好。","他写得漂亮。"],"answer":0,"difficulty":3},
  ],
  // 82: 让/叫 (to make/let someone do)
  82: [
    { type: "fill", sentence: "妈妈___我去买菜。", answer: "让", distractors: ["被", "把", "给"] },
    { type: "mcq", prompt: "Which means 'The teacher asked us to do homework'?", options: ["老师让我们做作业。", "老师被我们做作业。", "老师把我们做作业。", "我们让老师做作业。"], answer: 0 },
    { type: "translate", english: "Don't let him know.", answer: "别让他知道。", accept: ["不要让他知道。"] },
  
    {"type":"fill","sentence":"妈妈___我去买菜。","answer":"让","distractors":["把","被","给"],"difficulty":1},
    {"type":"reorder","english":"Teacher told us to read.","words":["我们","看书","老师","让"],"answer":["老师","让","我们","看书"],"difficulty":2},
    {"type":"translate","english":"Don't let him go.","answer":"别让他走。","accept":["别让他走","不要让他走。","不要让他走"],"difficulty":2},
    {"type":"translate","english":"He puts the pen on the desk.","answer":"他把笔放在桌子上。","accept":["他把笔放在桌子上。"],"difficulty":3},
    {"type":"reorder","english":"He put the pen on the desk.","words":["笔","把","他","放","在","桌子","上"],"answer":["他","把","笔","放","在","桌子","上"],"difficulty":2},
    {"type":"mcq","prompt":"Choose the correct sentence using 把 construction.","options":["他把书看完了。","他把书看了。","他把书看。","他把书看完了书。"],"answer":0,"difficulty":3},
  ],
  // 83: 是...的 (emphasis on time/place/manner)
  83: [
    { type: "fill", sentence: "我___昨天来的。", answer: "是", distractors: ["在", "有", "很"] },
    { type: "mcq", prompt: "What does 是...的 emphasize?", options: ["When/where/how something happened", "Whether something happened", "What will happen", "Who is doing something"], answer: 0 },
    { type: "reorder", english: "I came by plane.", words: ["的", "来", "我", "坐飞机", "是"], answer: ["我", "是", "坐飞机", "来", "的"] },
    { type: "translate", english: "Where did you buy this?", answer: "你是在哪儿买的？", accept: ["这是在哪儿买的？", "你是在哪里买的？"] },
  
    {"type":"fill","sentence":"他___昨天来___。","answer":"是","distractors":["在","被","把"],"difficulty":1},
    {"type":"translate","english":"I came by bus.","answer":"我是坐公交车来的。","accept":["我是坐公交车来的","我是坐公共汽车来的。","我是坐公共汽车来的"],"difficulty":2},
    {"type":"translate","english":"The book was taken by him.","answer":"那本书被他拿走了。","accept":["那本书被他拿走了"],"difficulty":3},
    {"type":"mcq","prompt":"The book was taken by the girl.","options":["书被女孩拿走了。","女孩被书拿走了。","书被拿走了女孩。","女孩书被拿走了。"],"answer":0,"difficulty":3},
    {"type":"fill","sentence":"教室里的灯___关了。","answer":"被","distractors":["是","了","被了"],"difficulty":3},
  ],
  // 84: Resultative complement 到
  84: [
    { type: "fill", sentence: "我找___了我的钥匙。", answer: "到", distractors: ["了", "过", "在"] },
    { type: "mcq", prompt: "What does the complement 到 indicate?", options: ["The action reached its goal", "The action is ongoing", "The action happened before", "The action will happen"], answer: 0 },
    { type: "translate", english: "I heard what you said.", answer: "我听到了你说的话。", accept: ["我听到你说的了。"] },
  
    {"type":"fill","sentence":"我找___了我的钥匙。","answer":"到","distractors":["完","好","了"],"difficulty":1},
    {"type":"reorder","english":"I heard it.","words":["了","到","听","我"],"answer":["我","听","到","了"],"difficulty":2},
    {"type":"translate","english":"I can't see it.","answer":"我看不到。","accept":["我看不到"],"difficulty":2},
    {"type":"translate","english":"The teacher lets the students go outside.","answer":"老师让学生出去。","accept":["老师让学生出去。"],"difficulty":3},
    {"type":"reorder","english":"He lets me drink water.","words":["他","我","喝","水","让"],"answer":["他","让","我","喝","水"],"difficulty":2},
    {"type":"mcq","prompt":"Which sentence is correct? The teacher makes the students clean the classroom.","options":["老师让学生打扫教室。","老师让教室打扫学生。","老师学生让打扫教室。","老师打扫让学生教室。"],"answer":0,"difficulty":3},
    {"type":"reorder","english":"He makes her study.","words":["她","让","学习","他"],"answer":["他","让","她","学习"],"difficulty":3},
    {"type":"translate","english":"The teacher lets us rest.","answer":"老师让我们休息。","accept":["老师让我们休息"],"difficulty":3},
  ],
  // 85: Resultative complement 完
  85: [
    { type: "fill", sentence: "我吃___了。", answer: "完", distractors: ["到", "过", "好"] },
    { type: "reorder", english: "Have you finished reading this book?", words: ["了", "这本书", "你", "看完", "吗"], answer: ["你", "看完", "这本书", "了", "吗"] },
    { type: "translate", english: "I finished doing my homework.", answer: "我做完作业了。", accept: ["我做完了作业。"] },
  
    {"type":"fill","sentence":"我吃___了。","answer":"完","distractors":["到","好","了"],"difficulty":1},
    {"type":"reorder","english":"Have you finished reading?","words":["了","吗","看","完","你"],"answer":["你","看","完","了","吗"],"difficulty":2},
    {"type":"translate","english":"I've finished writing.","answer":"我写完了。","accept":["我写完了"],"difficulty":2},
    {"type":"translate","english":"From Monday to Friday, I go to school.","answer":"从星期一到星期五，我上学。","accept":["从星期一到星期五，我上学。"],"difficulty":3},
    {"type":"fill","sentence":"从早上___晚上，我都在工作。","answer":"到","distractors":["从","去","在"],"difficulty":3},
  ],
  // 86: Resultative complement 好
  86: [
    { type: "fill", sentence: "饭做___了，快来吃吧。", answer: "好", distractors: ["完", "到", "了"] },
    { type: "mcq", prompt: "What does the complement 好 indicate?", options: ["Completed and ready / satisfactorily done", "Finished all of it", "Reached the goal", "Happened in the past"], answer: 0 },
    { type: "translate", english: "Are you ready? (Have you prepared well?)", answer: "你准备好了吗？", accept: ["准备好了吗？"] },
  
    {"type":"fill","sentence":"饭做___了。","answer":"好","distractors":["完","到","了"],"difficulty":1},
    {"type":"mcq","prompt":"Verb + 好 indicates:","options":["properly completed/ready","done to completion","reached a target","in progress"],"answer":0,"difficulty":1},
    {"type":"translate","english":"I've packed my bags.","answer":"我收拾好了行李。","accept":["我收拾好了行李","我行李收拾好了。","我行李收拾好了","行李收拾好了。","行李收拾好了"],"difficulty":2},
    {"type":"translate","english":"He walks toward the school.","answer":"他向学校走。","accept":["他向学校走。"],"difficulty":3},
    {"type":"reorder","english":"She walks toward the park.","words":["她","公园","往","走"],"answer":["她","往","公园","走"],"difficulty":2},
  ],
  // 87: Potential complement 得/不 + resultative
  87: [
    { type: "fill", sentence: "这个字太小了，我看___清楚。", answer: "不", distractors: ["得", "没", "了"] },
    { type: "mcq", prompt: "How do you say 'I can finish eating this'?", options: ["我吃得完。", "我吃不完。", "我能吃完。", "我吃了完。"], answer: 0 },
    { type: "fill", sentence: "这首歌很简单，我听___懂。", answer: "得", distractors: ["不", "了", "过"] },
    { type: "translate", english: "I can't understand this.", answer: "我看不懂。", accept: ["我听不懂。"] },
  
    {"type":"fill","sentence":"太远了，我走___。","answer":"不到","distractors":["不了","不完","得到"],"difficulty":2},
    {"type":"translate","english":"I can understand.","answer":"我听得懂。","accept":["我听得懂"],"difficulty":2},
    {"type":"translate","english":"He has been working here for six months.","answer":"他在这家公司工作了六个月了。","accept":["他在这家公司工作了六个月了。"],"difficulty":3},
    {"type":"fill","sentence":"他___了三年英语了。","answer":"学","distractors":["吃","看","走"],"difficulty":3},
    {"type":"fill","sentence":"我___了五年中文了。","answer":"学","distractors":["看","吃","住"],"difficulty":3},
  ],
  // 88: Direction complements 来/去
  88: [
    { type: "fill", sentence: "他走___了。", answer: "过来", distractors: ["过去", "出来", "回去"] },
    { type: "mcq", prompt: "Which means 'come in'?", options: ["进来", "进去", "出来", "出去"], answer: 0 },
    { type: "reorder", english: "He ran out.", words: ["了", "他", "出去", "跑"], answer: ["他", "跑", "出去", "了"] },
  
    {"type":"fill","sentence":"他走___了。","answer":"出去","distractors":["进来","上去","下来"],"difficulty":1},
    {"type":"reorder","english":"Please come in.","words":["来","请","进"],"answer":["请","进","来"],"difficulty":1},
    {"type":"translate","english":"He ran out.","answer":"他跑出去了。","accept":["他跑出去了"],"difficulty":2},
    {"type":"translate","english":"He watches TV for two hours every day.","answer":"他每天看两个小时电视。","accept":["他每天看两个小时电视"],"difficulty":3},
    {"type":"mcq","prompt":"小明看了两个小时的书。小红看了两个小时的电影。谁看了两个小时的书？","options":["小明","小红","小明和小红","没有人"],"answer":0,"difficulty":3},
    {"type":"fill","sentence":"他___了两个小时的电视。","answer":"看","distractors":["吃","喝","玩"],"difficulty":3},
  ],
  // 89: 着 (continuous state)
  89: [
    { type: "fill", sentence: "门开___呢。", answer: "着", distractors: ["了", "过", "在"] },
    { type: "mcq", prompt: "What does 着 express?", options: ["An ongoing state", "A completed action", "A past experience", "A future plan"], answer: 0 },
    { type: "reorder", english: "He is sitting on the chair.", words: ["着", "他", "椅子上", "坐", "在"], answer: ["他", "在", "椅子上", "坐", "着"] },
    { type: "translate", english: "The light is on.", answer: "灯开着呢。", accept: ["灯开着。"] },
  
    {"type":"fill","sentence":"门开___。","answer":"着","distractors":["了","过","在"],"difficulty":1},
    {"type":"translate","english":"He is standing there.","answer":"他站着呢。","accept":["他站着呢","他站着。","他站着"],"difficulty":2},
    {"type":"translate","english":"He goes to school every day.","answer":"他每天都去学校。","accept":["他每天都去学校。"],"difficulty":3},
    {"type":"mcq","prompt":"Which sentence is correct? She goes to the park every day.","options":["她每天去公园。","她每天公园去。","她去每天公园。","她每天公园都去。"],"answer":0,"difficulty":3},
    {"type":"mcq","prompt":"他每个星期都___。他每个星期都去学校。","options":["去学校","去公园","去商店","去图书馆"],"answer":0,"difficulty":3},
  ],
  // 90: 地 (adverbial particle)
  90: [
    { type: "fill", sentence: "他高兴___说。", answer: "地", distractors: ["的", "得", "了"] },
    { type: "mcq", prompt: "Which particle links an adverb to a verb?", options: ["地", "的", "得", "了"], answer: 0 },
    { type: "translate", english: "She spoke quietly.", answer: "她安静地说。", accept: ["她轻轻地说。", "她小声地说。"] },
  
    {"type":"fill","sentence":"他高兴___说。","answer":"地","distractors":["的","得","了"],"difficulty":1},
    {"type":"mcq","prompt":"地 is placed:","options":["between adverb and verb","after the verb","before the noun","at sentence end"],"answer":0,"difficulty":1},
    {"type":"translate","english":"She happily sang.","answer":"她高兴地唱歌。","accept":["她高兴地唱歌","她开心地唱歌。","她开心地唱歌"],"difficulty":2},
    {"type":"translate","english":"He listens to music while eating.","answer":"他一边吃饭一边听音乐。","accept":["他一边吃饭一边听音乐。"],"difficulty":3},
    {"type":"reorder","english":"She cooks while talking on the phone.","words":["她","打电话","一边","一边","做饭"],"answer":["她","一边","做饭","一边","打电话"],"difficulty":2},
    {"type":"mcq","prompt":"Which sentence correctly uses 一边…一边 to express doing two things at the same time?","options":["他一边看书一边玩手机。","他一边看书一边玩手机了。","他一边看书一边玩手机的。","他一边看书一边玩手机的了。"],"answer":0,"difficulty":3},
  ],
  // 91: 得 (degree complement)
  91: [
    { type: "fill", sentence: "他跑___很快。", answer: "得", distractors: ["的", "地", "了"] },
    { type: "mcq", prompt: "Which is correct for 'She sings very well'?", options: ["她唱得很好。", "她唱的很好。", "她唱地很好。", "她很好唱得。"], answer: 0 },
    { type: "reorder", english: "He writes Chinese characters very beautifully.", words: ["得", "很", "他", "漂亮", "写", "汉字"], answer: ["他", "汉字", "写", "得", "很", "漂亮"] },
    { type: "translate", english: "You speak Chinese very well.", answer: "你中文说得很好。", accept: ["你说中文说得很好。", "你的中文说得很好。"] },
  
    {"type":"fill","sentence":"他说___很好。","answer":"得","distractors":["的","地","了"],"difficulty":1},
    {"type":"translate","english":"She dances very well.","answer":"她跳舞跳得很好。","accept":["她跳舞跳得很好","她舞跳得很好。","她舞跳得很好"],"difficulty":2},
    {"type":"translate","english":"In order to go to school, he gets up early.","answer":"为了上学，他起得很早。","accept":["为了上学，他起得很早。"],"difficulty":3},
    {"type":"fill","sentence":"为了健康，我___运动。","answer":"多","distractors":["少","快","慢"],"difficulty":3},
  ],
  // 92: 多/少 + verb (do more/less)
  92: [
    { type: "fill", sentence: "你应该___喝水。", answer: "多", distractors: ["很", "太", "更"] },
    { type: "mcq", prompt: "How do you say 'Eat less meat'?", options: ["少吃肉。", "吃少肉。", "不多吃肉。", "肉少吃。"], answer: 0 },
    { type: "translate", english: "You should exercise more.", answer: "你应该多运动。", accept: ["你要多运动。", "你应该多锻炼。"] },
  
    {"type":"fill","sentence":"你应该___运动。","answer":"多","distractors":["少","很","最"],"difficulty":1},
    {"type":"reorder","english":"Drink less coffee.","words":["咖啡","少","喝"],"answer":["少","喝","咖啡"],"difficulty":1},
    {"type":"translate","english":"You should eat more vegetables.","answer":"你应该多吃蔬菜。","accept":["你应该多吃蔬菜","你要多吃蔬菜。","你要多吃蔬菜"],"difficulty":2},
    {"type":"translate","english":"It depends on how much money you have.","answer":"看你有多少钱。","accept":["看你有多少钱"],"difficulty":3},
    {"type":"mcq","prompt":"How do you say 'It depends on whether you like it'?","options":["看你是否喜欢它。","你喜欢看它。","看它是否喜欢你。","你是否看它喜欢。"],"answer":0,"difficulty":3},
    {"type":"mcq","prompt":"How do you say 'It depends on what time you arrive'?","options":["看你什么时候来。","看你来什么时候。","看什么时候你来。","看什么时候来你。"],"answer":0,"difficulty":3},
    {"type":"fill","sentence":"看___。","answer":"你什么时候来","distractors":["你什么时候来吗","什么时候你来","来什么时候你"],"difficulty":3},
  ],
  // 93: 连...都/也 (even)
  93: [
    { type: "fill", sentence: "他___自己的名字都不会写。", answer: "连", distractors: ["把", "被", "对"] },
    { type: "mcq", prompt: "What does 连...都 emphasize?", options: ["Even (something extreme)", "Not only...but also", "Although...but", "Because...so"], answer: 0 },
    { type: "reorder", english: "Even children know this.", words: ["都", "连", "知道", "小孩子", "这个"], answer: ["连", "小孩子", "都", "知道", "这个"] },
    { type: "translate", english: "I don't even have time to eat.", answer: "我连吃饭的时间都没有。", accept: ["我连吃饭的时间也没有。"] },
  
    {"type":"fill","sentence":"他___最简单的题___不会做。","answer":"连","distractors":["就","才","也"],"difficulty":2},
    {"type":"translate","english":"He can't even write his name.","answer":"他连自己的名字都不会写。","accept":["他连自己的名字都不会写","他连名字都不会写。","他连名字都不会写"],"difficulty":3},
    {"type":"translate","english":"The light is on.","answer":"灯开着。","accept":["灯开着。"],"difficulty":3},
  ],
};
