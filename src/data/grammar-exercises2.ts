import type { Exercise } from "./grammar";

export const grammarExercises2: Record<number, Exercise[]> = {
  // 60: Comparison with 比
  60: [
    { type: "fill", sentence: "他___我高。", answer: "比", distractors: ["和", "跟", "很"] },
    { type: "reorder", english: "Today is colder than yesterday.", words: ["冷", "今天", "昨天", "比"], answer: ["今天", "比", "昨天", "冷"] },
    { type: "mcq", prompt: "Which sentence correctly uses 比?", options: ["他比我很高。", "他比我高。", "他很比我高。", "他比高我。"], answer: 1 },
    { type: "translate", english: "Chinese is harder than English.", answer: "中文比英文难。", accept: ["中文比英文难"] },
  ],
  // 61: Expressing 'the same as' with 一样
  61: [
    { type: "fill", sentence: "我跟你___高。", answer: "一样", distractors: ["比", "更", "最"] },
    { type: "mcq", prompt: "How do you say 'This one is the same as that one'?", options: ["这个和那个一样。", "这个比那个一样。", "这个一样那个。", "这个跟那个比。"], answer: 0 },
    { type: "reorder", english: "His phone is the same as mine.", words: ["一样", "我的", "他的", "手机", "跟"], answer: ["他的", "手机", "跟", "我的", "一样"] },
  ],
  // 62: Superlative with 最
  62: [
    { type: "fill", sentence: "她是___漂亮的。", answer: "最", distractors: ["很", "更", "比"] },
    { type: "translate", english: "I like eating Chinese food the most.", answer: "我最喜欢吃中国菜。", accept: ["我最喜欢吃中国菜"] },
    { type: "mcq", prompt: "Which word means 'most' or '-est'?", options: ["最", "更", "比", "很"], answer: 0 },
    { type: "reorder", english: "This one is the cheapest.", words: ["最", "便宜", "这个"], answer: ["这个", "最", "便宜"] },
  ],
  // 63: Expressing 'even more' with 更
  63: [
    { type: "fill", sentence: "明天会___冷。", answer: "更", distractors: ["最", "很", "比"] },
    { type: "mcq", prompt: "Which sentence means 'I want to find an even better job'?", options: ["我想找更好的工作。", "我想找最好的工作。", "我想找很好的工作。", "我想找比好的工作。"], answer: 0 },
    { type: "reorder", english: "He is even taller than me.", words: ["更", "高", "他", "我", "比"], answer: ["他", "比", "我", "更", "高"] },
  ],
  // 64: Expressing 'a bit more' with 一点
  64: [
    { type: "fill", sentence: "请说慢___。", answer: "一点", distractors: ["一下", "一些", "一会儿"] },
    { type: "translate", english: "Can it be a bit cheaper?", answer: "可以便宜一点吗？", accept: ["能便宜一点吗？", "可以便宜一点吗"] },
    { type: "mcq", prompt: "Where does 一点 go in a comparative sentence?", options: ["After the adjective", "Before the adjective", "Before 比", "At the beginning"], answer: 0 },
  ],
  // 65: Expressing 'not as... as' with 没有
  65: [
    { type: "fill", sentence: "我___他高。", answer: "没有", distractors: ["不比", "不是", "没比"] },
    { type: "reorder", english: "Today is not as hot as yesterday.", words: ["热", "今天", "昨天", "没有"], answer: ["今天", "没有", "昨天", "热"] },
    { type: "mcq", prompt: "Which means 'I'm not as tall as him'?", options: ["我没有他高。", "我不比他高。", "我没他比高。", "我不有他高。"], answer: 0 },
  ],
  // 66: 虽然...但是 (although...but)
  66: [
    { type: "fill", sentence: "___他很累，但是他还在学习。", answer: "虽然", distractors: ["因为", "如果", "不但"] },
    { type: "mcq", prompt: "Which pair means 'although...but'?", options: ["虽然...但是", "因为...所以", "不但...而且", "如果...就"], answer: 0 },
    { type: "reorder", english: "Although it's raining, I still want to go.", words: ["但是", "我", "虽然", "下雨", "还", "想去"], answer: ["虽然", "下雨", "但是", "我", "还", "想去"] },
    { type: "translate", english: "Although he is tired, he is still studying.", answer: "虽然他很累，但是他还在学习。", accept: ["虽然他很累，但是还在学习。"] },
  ],
  // 67: 因为...所以 (because...so)
  67: [
    { type: "fill", sentence: "___下雨了，所以我没去。", answer: "因为", distractors: ["虽然", "如果", "不但"] },
    { type: "mcq", prompt: "Complete: ___他生病了，所以没来上课。", options: ["因为", "虽然", "如果", "不但"], answer: 0 },
    { type: "reorder", english: "Because I'm busy, I can't go.", words: ["去", "因为", "所以", "我", "很忙", "不能"], answer: ["因为", "我", "很忙", "所以", "不能", "去"] },
  ],
  // 68: 不但...而且 (not only...but also)
  68: [
    { type: "fill", sentence: "他___会说中文，而且会说日语。", answer: "不但", distractors: ["虽然", "因为", "如果"] },
    { type: "translate", english: "She is not only beautiful, but also smart.", answer: "她不但漂亮，而且聪明。", accept: ["她不但漂亮而且聪明。"] },
    { type: "mcq", prompt: "Which pair means 'not only...but also'?", options: ["不但...而且", "虽然...但是", "因为...所以", "一边...一边"], answer: 0 },
  ],
  // 69: 如果...就 (if...then)
  69: [
    { type: "fill", sentence: "___你有时间，就来我家吧。", answer: "如果", distractors: ["虽然", "因为", "不但"] },
    { type: "reorder", english: "If it rains tomorrow, I won't go.", words: ["就", "如果", "明天", "不去", "我", "下雨"], answer: ["如果", "明天", "下雨", "我", "就", "不去"] },
    { type: "translate", english: "If you are tired, then rest.", answer: "如果你累了，就休息吧。", accept: ["如果你累了就休息吧。"] },
  ],
  // 70: 一边...一边 (doing two things at once)
  70: [
    { type: "fill", sentence: "他___吃饭___看电视。", answer: "一边", distractors: ["一样", "一起", "一下"] },
    { type: "mcq", prompt: "Which sentence correctly uses 一边...一边?", options: ["她一边唱歌一边跳舞。", "她一边唱歌一边了跳舞。", "一边她唱歌一边跳舞。", "她唱歌一边跳舞一边。"], answer: 0 },
    { type: "reorder", english: "He listens to music while studying.", words: ["一边", "学习", "一边", "他", "听音乐"], answer: ["他", "一边", "学习", "一边", "听音乐"] },
  ],
  // 71: 越来越 (more and more)
  71: [
    { type: "fill", sentence: "天气越来越___了。", answer: "冷", distractors: ["很冷", "最冷", "更冷"] },
    { type: "mcq", prompt: "What does 越来越 mean?", options: ["More and more", "Less and less", "The most", "Even more"], answer: 0 },
    { type: "translate", english: "His Chinese is getting better and better.", answer: "他的中文越来越好了。", accept: ["他的中文越来越好。"] },
    { type: "reorder", english: "The weather is getting hotter and hotter.", words: ["越来越", "天气", "了", "热"], answer: ["天气", "越来越", "热", "了"] },
  ],
  // 72: 又...又 (both...and)
  72: [
    { type: "fill", sentence: "这个菜又好吃又___。", answer: "便宜", distractors: ["很贵", "不好", "太大"] },
    { type: "mcq", prompt: "Which correctly uses 又...又?", options: ["她又漂亮又聪明。", "她又漂亮又了聪明。", "又她漂亮又聪明。", "她漂亮又聪明又。"], answer: 0 },
    { type: "reorder", english: "This room is both big and bright.", words: ["又", "这个", "又", "房间", "大", "亮"], answer: ["这个", "房间", "又", "大", "又", "亮"] },
  ],
  // 73: 除了...以外 (besides / except)
  73: [
    { type: "fill", sentence: "___中文以外，他还会说英语。", answer: "除了", distractors: ["因为", "虽然", "不但"] },
    { type: "mcq", prompt: "What does 除了中文以外，他还会说日语 mean?", options: ["Besides Chinese, he can also speak Japanese.", "Except for Chinese, he cannot speak Japanese.", "He speaks Chinese instead of Japanese.", "He only speaks Chinese and Japanese."], answer: 0 },
    { type: "translate", english: "Besides me, everyone went.", answer: "除了我以外，大家都去了。", accept: ["除了我，大家都去了。"] },
  ],
  // 74: 对...感兴趣 (interested in)
  74: [
    { type: "fill", sentence: "我对中国文化很___。", answer: "感兴趣", distractors: ["喜欢", "高兴", "有意思"] },
    { type: "reorder", english: "She is interested in music.", words: ["感兴趣", "她", "音乐", "对", "很"], answer: ["她", "对", "音乐", "很", "感兴趣"] },
    { type: "mcq", prompt: "How do you say 'I'm interested in history'?", options: ["我对历史很感兴趣。", "我很感兴趣对历史。", "我对历史感很兴趣。", "对历史我很感兴趣。"], answer: 0 },
  ],
  // 75: 先...然后 (first...then)
  75: [
    { type: "fill", sentence: "___吃饭，然后去上课。", answer: "先", distractors: ["再", "就", "才"] },
    { type: "reorder", english: "First take a shower, then sleep.", words: ["然后", "先", "睡觉", "洗澡"], answer: ["先", "洗澡", "然后", "睡觉"] },
    { type: "translate", english: "First do homework, then watch TV.", answer: "先做作业，然后看电视。", accept: ["先做作业然后看电视。"] },
  ],
  // 76: 一...就 (as soon as)
  76: [
    { type: "fill", sentence: "他一回家___看电视。", answer: "就", distractors: ["才", "再", "还"] },
    { type: "mcq", prompt: "What does 一...就 express?", options: ["As soon as...then", "Not only...but also", "Although...but", "If...then"], answer: 0 },
    { type: "reorder", english: "As soon as I see him, I'm happy.", words: ["高兴", "我", "就", "一", "他", "看到"], answer: ["我", "一", "看到", "他", "就", "高兴"] },
    { type: "translate", english: "As soon as he arrives, we'll eat.", answer: "他一到我们就吃饭。", accept: ["他一到，我们就吃饭。"] },
  ],
  // 77: 才 (only then / not until)
  77: [
    { type: "fill", sentence: "他十点___来。", answer: "才", distractors: ["就", "再", "又"] },
    { type: "mcq", prompt: "What does 才 imply about timing?", options: ["Later than expected", "Earlier than expected", "Exactly on time", "Repeatedly"], answer: 0 },
    { type: "translate", english: "I didn't understand until the teacher explained.", answer: "老师解释了我才明白。", accept: ["老师解释以后我才明白。"] },
  ],
  // 78: 再 vs 又 (again - future vs past)
  78: [
    { type: "fill", sentence: "明天我___来。", answer: "再", distractors: ["又", "还", "才"] },
    { type: "mcq", prompt: "Which is correct for something that happened again in the past?", options: ["他又迟到了。", "他再迟到了。", "他还迟到了。", "他才迟到了。"], answer: 0 },
    { type: "fill", sentence: "他昨天___迟到了。", answer: "又", distractors: ["再", "才", "就"] },
    { type: "translate", english: "Please come again tomorrow.", answer: "明天请再来。", accept: ["请明天再来。"] },
  ],
  // 79: 还是 vs 或者 (or - question vs statement)
  79: [
    { type: "fill", sentence: "你喝茶___喝咖啡？", answer: "还是", distractors: ["或者", "和", "跟"] },
    { type: "fill", sentence: "你可以坐公共汽车___坐地铁。", answer: "或者", distractors: ["还是", "和", "跟"] },
    { type: "mcq", prompt: "When asking a question with 'or', which word should you use?", options: ["还是", "或者", "和", "但是"], answer: 0 },
  ],
  // 80: 把 (disposal construction)
  80: [
    { type: "fill", sentence: "请___门关上。", answer: "把", distractors: ["被", "让", "给"] },
    { type: "reorder", english: "Please put the book on the table.", words: ["桌子上", "请", "书", "放在", "把"], answer: ["请", "把", "书", "放在", "桌子上"] },
    { type: "mcq", prompt: "Which sentence correctly uses 把?", options: ["他把作业做完了。", "他做完了把作业。", "把他作业做完了。", "他作业把做完了。"], answer: 0 },
    { type: "translate", english: "I drank the water.", answer: "我把水喝了。", accept: ["我把水喝完了。"] },
  ],
  // 81: 被 (passive construction)
  81: [
    { type: "fill", sentence: "我的手机___偷了。", answer: "被", distractors: ["把", "让", "给"] },
    { type: "mcq", prompt: "Which sentence is passive?", options: ["蛋糕被他吃了。", "他吃了蛋糕。", "他把蛋糕吃了。", "蛋糕让吃他了。"], answer: 0 },
    { type: "reorder", english: "The cup was broken by him.", words: ["了", "被", "他", "杯子", "打破"], answer: ["杯子", "被", "他", "打破", "了"] },
    { type: "translate", english: "My bike was stolen.", answer: "我的自行车被偷了。", accept: ["我的自行车被人偷了。"] },
  ],
  // 82: 让/叫 (to make/let someone do)
  82: [
    { type: "fill", sentence: "妈妈___我去买菜。", answer: "让", distractors: ["被", "把", "给"] },
    { type: "mcq", prompt: "Which means 'The teacher asked us to do homework'?", options: ["老师让我们做作业。", "老师被我们做作业。", "老师把我们做作业。", "我们让老师做作业。"], answer: 0 },
    { type: "translate", english: "Don't let him know.", answer: "别让他知道。", accept: ["不要让他知道。"] },
  ],
  // 83: 是...的 (emphasis on time/place/manner)
  83: [
    { type: "fill", sentence: "我___昨天来的。", answer: "是", distractors: ["在", "有", "很"] },
    { type: "mcq", prompt: "What does 是...的 emphasize?", options: ["When/where/how something happened", "Whether something happened", "What will happen", "Who is doing something"], answer: 0 },
    { type: "reorder", english: "I came by plane.", words: ["的", "来", "我", "坐飞机", "是"], answer: ["我", "是", "坐飞机", "来", "的"] },
    { type: "translate", english: "Where did you buy this?", answer: "你是在哪儿买的？", accept: ["这是在哪儿买的？", "你是在哪里买的？"] },
  ],
  // 84: Resultative complement 到
  84: [
    { type: "fill", sentence: "我找___了我的钥匙。", answer: "到", distractors: ["了", "过", "在"] },
    { type: "mcq", prompt: "What does the complement 到 indicate?", options: ["The action reached its goal", "The action is ongoing", "The action happened before", "The action will happen"], answer: 0 },
    { type: "translate", english: "I heard what you said.", answer: "我听到了你说的话。", accept: ["我听到你说的了。"] },
  ],
  // 85: Resultative complement 完
  85: [
    { type: "fill", sentence: "我吃___了。", answer: "完", distractors: ["到", "过", "好"] },
    { type: "reorder", english: "Have you finished reading this book?", words: ["了", "这本书", "你", "看完", "吗"], answer: ["你", "看完", "这本书", "了", "吗"] },
    { type: "translate", english: "I finished doing my homework.", answer: "我做完作业了。", accept: ["我做完了作业。"] },
  ],
  // 86: Resultative complement 好
  86: [
    { type: "fill", sentence: "饭做___了，快来吃吧。", answer: "好", distractors: ["完", "到", "了"] },
    { type: "mcq", prompt: "What does the complement 好 indicate?", options: ["Completed and ready / satisfactorily done", "Finished all of it", "Reached the goal", "Happened in the past"], answer: 0 },
    { type: "translate", english: "Are you ready? (Have you prepared well?)", answer: "你准备好了吗？", accept: ["准备好了吗？"] },
  ],
  // 87: Potential complement 得/不 + resultative
  87: [
    { type: "fill", sentence: "这个字太小了，我看___清楚。", answer: "不", distractors: ["得", "没", "了"] },
    { type: "mcq", prompt: "How do you say 'I can finish eating this'?", options: ["我吃得完。", "我吃不完。", "我能吃完。", "我吃了完。"], answer: 0 },
    { type: "fill", sentence: "这首歌很简单，我听___懂。", answer: "得", distractors: ["不", "了", "过"] },
    { type: "translate", english: "I can't understand this.", answer: "我看不懂。", accept: ["我听不懂。"] },
  ],
  // 88: Direction complements 来/去
  88: [
    { type: "fill", sentence: "他走___了。", answer: "过来", distractors: ["过去", "出来", "回去"] },
    { type: "mcq", prompt: "Which means 'come in'?", options: ["进来", "进去", "出来", "出去"], answer: 0 },
    { type: "reorder", english: "He ran out.", words: ["了", "他", "出去", "跑"], answer: ["他", "跑", "出去", "了"] },
  ],
  // 89: 着 (continuous state)
  89: [
    { type: "fill", sentence: "门开___呢。", answer: "着", distractors: ["了", "过", "在"] },
    { type: "mcq", prompt: "What does 着 express?", options: ["An ongoing state", "A completed action", "A past experience", "A future plan"], answer: 0 },
    { type: "reorder", english: "He is sitting on the chair.", words: ["着", "他", "椅子上", "坐", "在"], answer: ["他", "在", "椅子上", "坐", "着"] },
    { type: "translate", english: "The light is on.", answer: "灯开着呢。", accept: ["灯开着。"] },
  ],
  // 90: 地 (adverbial particle)
  90: [
    { type: "fill", sentence: "他高兴___说。", answer: "地", distractors: ["的", "得", "了"] },
    { type: "mcq", prompt: "Which particle links an adverb to a verb?", options: ["地", "的", "得", "了"], answer: 0 },
    { type: "translate", english: "She spoke quietly.", answer: "她安静地说。", accept: ["她轻轻地说。", "她小声地说。"] },
  ],
  // 91: 得 (degree complement)
  91: [
    { type: "fill", sentence: "他跑___很快。", answer: "得", distractors: ["的", "地", "了"] },
    { type: "mcq", prompt: "Which is correct for 'She sings very well'?", options: ["她唱得很好。", "她唱的很好。", "她唱地很好。", "她很好唱得。"], answer: 0 },
    { type: "reorder", english: "He writes Chinese characters very beautifully.", words: ["得", "很", "他", "漂亮", "写", "汉字"], answer: ["他", "汉字", "写", "得", "很", "漂亮"] },
    { type: "translate", english: "You speak Chinese very well.", answer: "你中文说得很好。", accept: ["你说中文说得很好。", "你的中文说得很好。"] },
  ],
  // 92: 多/少 + verb (do more/less)
  92: [
    { type: "fill", sentence: "你应该___喝水。", answer: "多", distractors: ["很", "太", "更"] },
    { type: "mcq", prompt: "How do you say 'Eat less meat'?", options: ["少吃肉。", "吃少肉。", "不多吃肉。", "肉少吃。"], answer: 0 },
    { type: "translate", english: "You should exercise more.", answer: "你应该多运动。", accept: ["你要多运动。", "你应该多锻炼。"] },
  ],
  // 93: 连...都/也 (even)
  93: [
    { type: "fill", sentence: "他___自己的名字都不会写。", answer: "连", distractors: ["把", "被", "对"] },
    { type: "mcq", prompt: "What does 连...都 emphasize?", options: ["Even (something extreme)", "Not only...but also", "Although...but", "Because...so"], answer: 0 },
    { type: "reorder", english: "Even children know this.", words: ["都", "连", "知道", "小孩子", "这个"], answer: ["连", "小孩子", "都", "知道", "这个"] },
    { type: "translate", english: "I don't even have time to eat.", answer: "我连吃饭的时间都没有。", accept: ["我连吃饭的时间也没有。"] },
  ],
};
