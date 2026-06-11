const questions = [
  // ==========================================
  // SECTION 1: VERBS & TENSES (Category: tenses)
  // ==========================================
  {
    question: "Fill in the blank with the correct tense: She ____ to the office every day.",
    answers: { a: "go", b: "goes", c: "gone", d: "going" },
    correctAnswer: "b",
    category: "tenses",
    difficulty: "easy",
    explanation: "For singular third-person subjects (he, she, it), the simple present tense requires the verb to end in -s or -es."
  },
  {
    question: "Choose the correct past continuous form: They ____ dinner when I arrived.",
    answers: { a: "eating", b: "are eating", c: "were eating", d: "eat" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "medium",
    explanation: "The past continuous tense (were eating) is used to describe an ongoing action that was interrupted by a completed past event (arrived)."
  },
  {
    question: "Complete the sentence using the future perfect tense: By next month, they ____ the construction project.",
    answers: { a: "finish", b: "finishing", c: "will have finished", d: "finished" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "hard",
    explanation: "The future perfect tense (will have finished) describes an action that is expected to be completed before a specific point in the future."
  },
  {
    question: "Complete the past perfect sentence: The train ____ before we arrived at the platform.",
    answers: { a: "leave", b: "left", c: "had left", d: "leaves" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "medium",
    explanation: "Use the past perfect tense (had left) to show that one action was completed in the past before another past action occurred."
  },
  {
    question: "Select the correct conditional structure: If she ____ harder, she would have passed the exam.",
    answers: { a: "studies", b: "studied", c: "had studied", d: "has studied" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "hard",
    explanation: "The third conditional refers to a hypothetical past situation and requires the past perfect tense (had studied) in the 'if' clause."
  },
  {
    question: "Select the correct tense: Yesterday, I ____ a great movie at the cinema.",
    answers: { a: "see", b: "seen", c: "saw", d: "seeing" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "easy",
    explanation: "Use the simple past tense (saw) for actions completed at a specific time in the past."
  },
  {
    question: "Fill in the blank: By this time next year, I ____ to a new apartment.",
    answers: { a: "moved", b: "will have moved", c: "moving", d: "move" },
    correctAnswer: "b",
    category: "tenses",
    difficulty: "hard",
    explanation: "This construction indicates a future completed milestone, requiring the future perfect tense (will have moved)."
  },
  {
    question: "Choose the correct past passive form: The project ____ by the development team last Friday.",
    answers: { a: "was completed", b: "is completed", c: "will be completed", d: "completed" },
    correctAnswer: "a",
    category: "tenses",
    difficulty: "medium",
    explanation: "For past tense passive voice with a singular object (project), use 'was' followed by the past participle (completed)."
  },
  {
    question: "Choose the correct indirect speech form: She said, 'I am learning French.'",
    answers: { a: "She said she learns French.", b: "She said she was learning French.", c: "She said she has learned French.", d: "She says she will learn French." },
    correctAnswer: "b",
    category: "tenses",
    difficulty: "medium",
    explanation: "When transforming present continuous direct speech ('am learning') into indirect speech, backshift the tense to the past continuous ('was learning')."
  },
  {
    question: "Fill in the blank: He ____ his homework before going out to play.",
    answers: { a: "doing", b: "done", c: "had done", d: "does" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "medium",
    explanation: "The past perfect tense (had done) indicates that the homework was completed before the subsequent past action of going out."
  },
  {
    question: "Choose the correct simple present form: He ____ his dog for a walk every evening.",
    answers: { a: "take", b: "takes", c: "taken", d: "taking" },
    correctAnswer: "b",
    category: "tenses",
    difficulty: "easy",
    explanation: "Singular third-person subjects (he/she/it) require verbs ending in -s or -es in simple present tense."
  },
  {
    question: "Complete the sentence: Yesterday, they ____ a wonderful meal at the new restaurant.",
    answers: { a: "eat", b: "eats", c: "ate", d: "eating" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "easy",
    explanation: "The past marker 'Yesterday' requires the simple past tense form of the irregular verb 'eat', which is 'ate'."
  },
  {
    question: "Fill in the blank: Look! It ____ to rain outside.",
    answers: { a: "starts", b: "is starting", c: "started", d: "has started" },
    correctAnswer: "b",
    category: "tenses",
    difficulty: "easy",
    explanation: "The exclamation 'Look!' indicates that the action is happening right now, requiring the present continuous tense."
  },
  {
    question: "Choose the correct past form: We ____ to the radio on our drive home yesterday.",
    answers: { a: "listen", b: "listens", c: "listened", d: "listening" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "easy",
    explanation: "For regular verbs, the simple past tense is formed by adding -ed to the base form."
  },
  {
    question: "Complete the sentence: I ____ my homework an hour ago.",
    answers: { a: "finish", b: "finished", c: "finishing", d: "has finished" },
    correctAnswer: "b",
    category: "tenses",
    difficulty: "easy",
    explanation: "The past time indicator 'an hour ago' requires the simple past tense ('finished')."
  },
  {
    question: "Fill in the blank: While she ____ a book, the lights suddenly went out.",
    answers: { a: "read", b: "reads", c: "was reading", d: "has read" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "medium",
    explanation: "Use past continuous (was reading) for an ongoing background action that was interrupted by a simple past event (went out)."
  },
  {
    question: "Complete the sentence: By the time the guest speaker arrived, the audience ____ for an hour.",
    answers: { a: "waited", b: "were waiting", c: "had been waiting", d: "have waited" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "medium",
    explanation: "The past perfect continuous (had been waiting) is used to show that an action was ongoing up to a specific point in the past."
  },
  {
    question: "Choose the correct form: If she wins the lottery, she ____ a new house.",
    answers: { a: "buy", b: "buys", c: "will buy", d: "would buy" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "medium",
    explanation: "This is a first conditional sentence, which uses simple present in the 'if' clause and 'will' + verb in the main clause."
  },
  {
    question: "Fill in the blank: Over the last decade, technology ____ rapidly.",
    answers: { a: "evolves", b: "evolved", c: "has evolved", d: "had evolved" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "medium",
    explanation: "The phrase 'Over the last decade' describes a period stretching from the past to the present, requiring the present perfect tense."
  },
  {
    question: "Choose the correct passive structure: This historic bridge ____ in the late nineteenth century.",
    answers: { a: "built", b: "was built", c: "has been built", d: "was building" },
    correctAnswer: "b",
    category: "tenses",
    difficulty: "medium",
    explanation: "Passive voice for a singular object in the past requires 'was' + the past participle form of the verb."
  },
  {
    question: "Choose the correct subjunctive form: The manager insisted that he ____ the report immediately.",
    answers: { a: "submit", b: "submits", c: "submitted", d: "should submit" },
    correctAnswer: "a",
    category: "tenses",
    difficulty: "hard",
    explanation: "Verbs of demand or insistence require the subjunctive mood, which uses the base form of the verb ('submit') regardless of the subject."
  },
  {
    question: "Complete the conditional clause: If we ____ your advice, we would not have run into this issue.",
    answers: { a: "take", b: "took", c: "had taken", d: "would have taken" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "hard",
    explanation: "This is a third conditional sentence (hypothetical past), which requires the past perfect tense in the 'if' clause."
  },
  {
    question: "Fill in the blank: Scarcely ____ entered the room when the alarm went off.",
    answers: { a: "she had", b: "had she", c: "she did", d: "did she" },
    correctAnswer: "b",
    category: "tenses",
    difficulty: "hard",
    explanation: "Negative adverbials like 'scarcely', 'hardly', or 'no sooner' placed at the beginning of a sentence trigger subject-auxiliary inversion."
  },
  {
    question: "Choose the correct perfect continuous form: By next December, she ____ at this university for five years.",
    answers: { a: "will teach", b: "will be teaching", c: "will have been teaching", d: "teaches" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "hard",
    explanation: "The future perfect continuous tense (will have been teaching) is used to project an ongoing action up to a specific point in the future."
  },
  {
    question: "Fill in the blank: I wish I ____ to her advice before making that investment.",
    answers: { a: "listen", b: "listened", c: "had listened", d: "would listen" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "hard",
    explanation: "Regrets about past events are expressed using 'wish' followed by a clause in the past perfect tense."
  },

  {
    question: "Fill in the blank with the correct tense: She ____ to the office every day.",
    answers: { a: "go", b: "goes", c: "gone", d: "going" },
    correctAnswer: "b",
    category: "tenses",
    difficulty: "easy",
    explanation: "For singular third-person subjects (he, she, it), the simple present tense requires the verb to end in -s or -es."
  },
  {
    question: "By the time we arrive at the theater, the movie ____.",
    answers: { a: "will start", b: "started", c: "will have started", d: "has started" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "medium",
    explanation: "The future perfect ('will have started') is used to describe an action that will be completed before a specific point in the future."
  },
  {
    question: "I ____ for this company since 2018.",
    answers: { a: "work", b: "am working", c: "have been working", d: "was working" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "medium",
    explanation: "The present perfect continuous ('have been working') emphasizes an action that started in the past and is still continuing in the present."
  },
  {
    question: "If I ____ you were coming, I would have baked a cake.",
    answers: { a: "knew", b: "know", c: "have known", d: "had known" },
    correctAnswer: "d",
    category: "tenses",
    difficulty: "hard",
    explanation: "This is a third conditional sentence, which requires the past perfect ('had known') in the 'if' clause to talk about an unreal past condition."
  },
  {
    question: "Water ____ at 100 degrees Celsius.",
    answers: { a: "boil", b: "boils", c: "is boiling", d: "has boiled" },
    correctAnswer: "b",
    category: "tenses",
    difficulty: "easy",
    explanation: "The simple present tense is used to state general truths or scientific facts."
  },
  {
    question: "While I ____ to work, I saw a terrible accident.",
    answers: { a: "drive", b: "was driving", c: "drove", d: "have driven" },
    correctAnswer: "b",
    category: "tenses",
    difficulty: "easy",
    explanation: "The past continuous ('was driving') sets the background scene for an action that was interrupted by a simple past event ('saw')."
  },
  {
    question: "He ____ his keys, so he can't open the door.",
    answers: { a: "lost", b: "has lost", c: "had lost", d: "was losing" },
    correctAnswer: "b",
    category: "tenses",
    difficulty: "medium",
    explanation: "The present perfect ('has lost') links a past action to its current result in the present (he can't open the door right now)."
  },
  {
    question: "I wish I ____ a million dollars.",
    answers: { a: "have", b: "has", c: "had", d: "will have" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "hard",
    explanation: "After 'wish' to express a desire for a different present situation, we use the simple past tense (the subjunctive mood)."
  },
  {
    question: "Next year, they ____ married for 25 years.",
    answers: { a: "are", b: "will be", c: "have been", d: "will have been" },
    correctAnswer: "d",
    category: "tenses",
    difficulty: "hard",
    explanation: "The future perfect ('will have been') is used to express duration up to a specific time in the future."
  },
  {
    question: "We usually ____ dinner at 7 PM.",
    answers: { a: "are eating", b: "ate", c: "eat", d: "have eaten" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "easy",
    explanation: "The simple present ('eat') is used for habits and routines, often signaled by adverbs like 'usually'."
  },
  {
    question: "Before she moved to London, she ____ in Paris for five years.",
    answers: { a: "lived", b: "has lived", c: "had lived", d: "was living" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "medium",
    explanation: "The past perfect ('had lived') is used to show that one past action happened before another past action ('moved')."
  },
  {
    question: "Look at those dark clouds! It ____ soon.",
    answers: { a: "rains", b: "will rain", c: "is going to rain", d: "rained" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "medium",
    explanation: "'Is going to rain' is used to make a future prediction based on present, physical evidence (the dark clouds)."
  },
  {
    question: "They ____ on the project all morning.",
    answers: { a: "have been working", b: "worked", c: "work", d: "had worked" },
    correctAnswer: "a",
    category: "tenses",
    difficulty: "medium",
    explanation: "The present perfect continuous ('have been working') highlights the duration of an activity that started in the past and continues to the present."
  },
  {
    question: "If it rains tomorrow, we ____ the picnic.",
    answers: { a: "canceled", b: "will cancel", c: "would cancel", d: "cancel" },
    correctAnswer: "b",
    category: "tenses",
    difficulty: "easy",
    explanation: "This is a first conditional sentence. The 'if' clause uses present simple, and the main clause uses 'will' + base verb."
  },
  {
    question: "I ____ to the gym three times this week.",
    answers: { a: "went", b: "go", c: "have gone", d: "am going" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "medium",
    explanation: "The present perfect ('have gone') is used for repeated actions in an unfinished time period ('this week')."
  },
  {
    question: "It's high time you ____ studying for the exam.",
    answers: { a: "start", b: "started", c: "will start", d: "have started" },
    correctAnswer: "b",
    category: "tenses",
    difficulty: "hard",
    explanation: "The phrase 'it's high time' is followed by a past tense verb ('started') to express that something should be done now or should have been done already."
  },
  {
    question: "When I was a child, I ____ play outside until it got dark.",
    answers: { a: "would", b: "will", c: "am used to", d: "should" },
    correctAnswer: "a",
    category: "tenses",
    difficulty: "hard",
    explanation: "'Would' can be used to describe repeated habitual actions in the past, similar to 'used to'."
  },
  {
    question: "By this time tomorrow, I ____ on a beach in Hawaii.",
    answers: { a: "will lie", b: "am lying", c: "will be lying", d: "will have lied" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "hard",
    explanation: "The future continuous ('will be lying') is used to describe an action that will be in progress at a specific time in the future."
  },
  {
    question: "She ____ her homework when the phone rang.",
    answers: { a: "is doing", b: "was doing", c: "did", d: "has done" },
    correctAnswer: "b",
    category: "tenses",
    difficulty: "easy",
    explanation: "The past continuous sets an ongoing past action that was interrupted by a sudden past event."
  },
  {
    question: "He ____ ever calls me anymore.",
    answers: { a: "hardly", b: "often", c: "usually", d: "sometimes" },
    correctAnswer: "a",
    category: "tenses",
    difficulty: "easy",
    explanation: "'Hardly ever' is an adverb of frequency meaning 'almost never', which correctly modifies the simple present verb 'calls' in this context."
  },
  {
    question: "The train ____ at 8:00 AM sharp.",
    answers: { a: "is leaving", b: "will leave", c: "leaves", d: "left" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "medium",
    explanation: "The simple present ('leaves') is used for scheduled future events, like timetables and itineraries."
  },
  {
    question: "If I ____ a bird, I would fly across the world.",
    answers: { a: "am", b: "was", c: "were", d: "have been" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "medium",
    explanation: "In the second conditional, the past subjunctive 'were' is used for all subjects to describe a hypothetical present or future situation."
  },
  {
    question: "I ____ dinner by the time you get home.",
    answers: { a: "will prepare", b: "will have prepared", c: "am preparing", d: "prepare" },
    correctAnswer: "b",
    category: "tenses",
    difficulty: "hard",
    explanation: "The future perfect is used to state that an action will be fully completed before a certain time in the future."
  },
  {
    question: "He ____ English for three years before he finally visited London.",
    answers: { a: "has been studying", b: "was studying", c: "had been studying", d: "studied" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "hard",
    explanation: "The past perfect continuous emphasizes the duration of an action that was ongoing up to another point in the past."
  },
  {
    question: "Don't call me at 6 PM. I ____ dinner then.",
    answers: { a: "will eat", b: "am eating", c: "will be eating", d: "eat" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "medium",
    explanation: "The future continuous is used for actions that will be in progress at a specific moment in the future."
  },
  {
    question: "She ____ sushi before she moved to Japan.",
    answers: { a: "never eats", b: "has never eaten", c: "had never eaten", d: "was never eating" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "medium",
    explanation: "Past perfect is used to show a state or lack of experience that existed before a specific event in the past."
  },
  {
    question: "I can't believe it! You ____ my chocolate again!",
    answers: { a: "are always eating", b: "always eat", c: "were always eating", d: "have always eaten" },
    correctAnswer: "a",
    category: "tenses",
    difficulty: "hard",
    explanation: "The present continuous with 'always' is used to express annoyance about a repeated habit."
  },
  {
    question: "By next month, I ____ all the books in the series.",
    answers: { a: "will read", b: "will have read", c: "am reading", d: "have read" },
    correctAnswer: "b",
    category: "tenses",
    difficulty: "medium",
    explanation: "Future perfect is required to show completion of an action before a future deadline."
  },
  {
    question: "They ____ the house for two months by the time it is finished.",
    answers: { a: "will have been painting", b: "have been painting", c: "are painting", d: "will paint" },
    correctAnswer: "a",
    category: "tenses",
    difficulty: "hard",
    explanation: "Future perfect continuous is used to project the duration of an ongoing action up to a future point in time."
  },
  {
    question: "I ____ a ghost in my life.",
    answers: { a: "never saw", b: "have never seen", c: "had never seen", d: "am never seeing" },
    correctAnswer: "b",
    category: "tenses",
    difficulty: "easy",
    explanation: "The present perfect is used to talk about life experiences at an unspecified time before now."
  },
  {
    question: "My father ____ a new car last week.",
    answers: { a: "buys", b: "bought", c: "has bought", d: "was buying" },
    correctAnswer: "b",
    category: "tenses",
    difficulty: "easy",
    explanation: "The simple past is used for completed actions at a specific time in the past ('last week')."
  },
  {
    question: "It ____ heavily when we left the building.",
    answers: { a: "snows", b: "has snowed", c: "is snowing", d: "was snowing" },
    correctAnswer: "d",
    category: "tenses",
    difficulty: "easy",
    explanation: "The past continuous describes a background action in progress when a shorter action ('left') happened."
  },
  {
    question: "I would travel more if I ____ the time.",
    answers: { a: "have", b: "had", c: "have had", d: "would have" },
    correctAnswer: "b",
    category: "tenses",
    difficulty: "medium",
    explanation: "Second conditional structures require the simple past ('had') in the 'if' clause to express a hypothetical situation."
  },
  {
    question: "The children ____ in the garden right now.",
    answers: { a: "play", b: "played", c: "are playing", d: "were playing" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "easy",
    explanation: "The present continuous is used for actions happening exactly at the moment of speaking."
  },
  {
    question: "I ____ my keys. Can you help me look for them?",
    answers: { a: "lose", b: "lost", c: "have lost", d: "had lost" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "medium",
    explanation: "The present perfect connects a past event (losing keys) to a present situation (needing help looking for them)."
  },
  {
    question: "He demanded that she ____ the building immediately.",
    answers: { a: "leaves", b: "left", c: "leave", d: "is leaving" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "hard",
    explanation: "Verbs like 'demand' take the base form of the verb (subjunctive) in a 'that' clause."
  },
  {
    question: "We ____ to Paris three times this year.",
    answers: { a: "flew", b: "have flown", c: "fly", d: "are flying" },
    correctAnswer: "b",
    category: "tenses",
    difficulty: "medium",
    explanation: "The present perfect is used for repeated actions within an unfinished time period ('this year')."
  },
  {
    question: "By the time the police arrived, the burglar ____.",
    answers: { a: "escaped", b: "has escaped", c: "had escaped", d: "was escaping" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "medium",
    explanation: "Past perfect ('had escaped') indicates an action that was completed before another past action ('arrived')."
  },
  {
    question: "This soup ____ delicious!",
    answers: { a: "tastes", b: "is tasting", c: "tasted", d: "has tasted" },
    correctAnswer: "a",
    category: "tenses",
    difficulty: "easy",
    explanation: "Stative verbs related to senses (like 'taste') are usually used in the simple present, not the continuous."
  },
  {
    question: "I will call you as soon as I ____ at the hotel.",
    answers: { a: "will arrive", b: "arrived", c: "am arriving", d: "arrive" },
    correctAnswer: "d",
    category: "tenses",
    difficulty: "hard",
    explanation: "In time clauses introduced by 'as soon as', 'when', or 'before', we use the simple present to refer to the future."
  },
  {
    question: "How long ____ for me?",
    answers: { a: "are you waiting", b: "have you been waiting", c: "do you wait", d: "were you waiting" },
    correctAnswer: "b",
    category: "tenses",
    difficulty: "medium",
    explanation: "The present perfect continuous asks about the duration of an activity from the past up until now."
  },
  {
    question: "If I hadn't missed the bus, I ____ late for the meeting.",
    answers: { a: "wouldn't be", b: "won't be", c: "wouldn't have been", d: "wasn't" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "hard",
    explanation: "Third conditional requires 'would have + past participle' in the main clause for impossible past scenarios."
  },
  {
    question: "She ____ working here for ten years by the end of this month.",
    answers: { a: "will be", b: "will have been", c: "has been", d: "is" },
    correctAnswer: "b",
    category: "tenses",
    difficulty: "hard",
    explanation: "Future perfect continuous connects the duration of an ongoing action to a future milestone."
  },
  {
    question: "The Earth ____ around the Sun.",
    answers: { a: "is revolving", b: "revolves", c: "revolved", d: "has revolved" },
    correctAnswer: "b",
    category: "tenses",
    difficulty: "easy",
    explanation: "Simple present is used for immutable scientific laws and facts."
  },
  {
    question: "I ____ a good book at the moment.",
    answers: { a: "read", b: "am reading", c: "have read", d: "was reading" },
    correctAnswer: "b",
    category: "tenses",
    difficulty: "easy",
    explanation: "'At the moment' is a classic marker for the present continuous tense."
  },
  {
    question: "They ____ each other since they were in primary school.",
    answers: { a: "know", b: "are knowing", c: "have known", d: "knew" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "medium",
    explanation: "For stative verbs like 'know', we use the present perfect (not continuous) to show an ongoing state starting in the past."
  },
  {
    question: "The flight ____ cancelled because of the severe storm.",
    answers: { a: "was", b: "has", c: "did", d: "is being" },
    correctAnswer: "a",
    category: "tenses",
    difficulty: "easy",
    explanation: "Passive voice in the simple past requires 'was' + past participle."
  },
  {
    question: "Suppose you ____ the lottery, what would you do?",
    answers: { a: "win", b: "won", c: "have won", d: "had won" },
    correctAnswer: "b",
    category: "tenses",
    difficulty: "hard",
    explanation: "'Suppose' can introduce a hypothetical situation, taking the past simple just like a second conditional 'if' clause."
  },
  {
    question: "By the time he woke up, his roommates ____ all the coffee.",
    answers: { a: "drink", b: "drank", c: "have drunk", d: "had drunk" },
    correctAnswer: "d",
    category: "tenses",
    difficulty: "medium",
    explanation: "Past perfect is used to indicate an action (drinking coffee) that was completed before another past action (waking up)."
  },
  {
    question: "I will give him the message when I ____ him.",
    answers: { a: "will see", b: "see", c: "am seeing", d: "saw" },
    correctAnswer: "b",
    category: "tenses",
    difficulty: "medium",
    explanation: "In future time clauses starting with 'when', the verb remains in the simple present."
  },


  {
    question: "By the time the manager returns, the team ____ the report.",
    answers: { "a": "finishes", "b": "finished", "c": "will have finished", "d": "has finished" },
    correctAnswer: "c",
    category: "tenses",
    difficult: "medium",
    explanation: "Future perfect ('will have finished') indicates an action completed before a specific future moment."
  },
  {
    question: "I ____ to read that book for months, but I just haven't had the time.",
    answers: { "a": "am meaning", "b": "have been meaning", "c": "mean", "d": "had meant" },
    correctAnswer: "b",
    category: "tenses",
    difficult: "medium",
    explanation: "Present perfect continuous ('have been meaning') shows an ongoing intention that started in the past and continues into the present."
  },
  {
    question: "If you ____ ice, it melts.",
    answers: { "a": "heat", "b": "heated", "c": "will heat", "d": "have heated" },
    correctAnswer: "a",
    category: "tenses",
    difficult: "easy",
    explanation: "Zero conditional uses simple present in both clauses for universal truths."
  },
  {
    question: "They ____ the bridge for three years before it finally collapsed.",
    answers: { "a": "built", "b": "have been building", "c": "had been building", "d": "were building" },
    correctAnswer: "c",
    category: "tenses",
    difficult: "hard",
    explanation: "Past perfect continuous ('had been building') emphasizes the duration of an action before a specific past event."
  },
  {
    question: "This time next week, we ____ on the beach in Bali.",
    answers: { "a": "relax", "b": "will be relaxing", "c": "will relax", "d": "are relaxing" },
    correctAnswer: "b",
    category: "tenses",
    difficult: "medium",
    explanation: "Future continuous ('will be relaxing') describes an action that will be in progress at a specific time in the future."
  },
  {
    question: "She ____ her grandmother every Sunday when she was younger.",
    answers: { "a": "visits", "b": "has visited", "c": "visited", "d": "was visiting" },
    correctAnswer: "c",
    category: "tenses",
    difficult: "easy",
    explanation: "Simple past ('visited') is used for past habits that are now finished."
  },
  {
    question: "We ____ each other since we graduated from college.",
    answers: { "a": "haven't seen", "b": "didn't see", "c": "don't see", "d": "hadn't seen" },
    correctAnswer: "a",
    category: "tenses",
    difficult: "medium",
    explanation: "Present perfect ('haven't seen') connects a past starting point ('since we graduated') to the present state."
  },
  {
    question: "The train ____ before we reached the station.",
    answers: { "a": "leaves", "b": "has left", "c": "was leaving", "d": "had left" },
    correctAnswer: "d",
    category: "tenses",
    difficult: "easy",
    explanation: "Past perfect ('had left') shows that the train's departure happened before their arrival."
  },
  {
    question: "I would have helped you if you ____ me.",
    answers: { "a": "asked", "b": "ask", "c": "had asked", "d": "have asked" },
    correctAnswer: "c",
    category: "tenses",
    difficult: "medium",
    explanation: "Third conditional 'if' clause requires the past perfect ('had asked')."
  },
  {
    question: "He ____ extremely annoying today.",
    answers: { "a": "is", "b": "is being", "c": "was", "d": "has been" },
    correctAnswer: "b",
    category: "tenses",
    difficult: "hard",
    explanation: "'Is being' is used to describe temporary behavior that is different from someone's usual character."
  },
  {
    question: "Look out! The vase ____ fall!",
    answers: { "a": "will", "b": "is going to", "c": "is falling", "d": "falls" },
    correctAnswer: "b",
    category: "tenses",
    difficult: "easy",
    explanation: "'Is going to' is used for predictions based on immediate, visible evidence."
  },
  {
    question: "I ____ you an email as soon as I get the results.",
    answers: { "a": "will send", "b": "send", "c": "am sending", "d": "have sent" },
    correctAnswer: "a",
    category: "tenses",
    difficult: "easy",
    explanation: "Simple future ('will send') is used for spontaneous decisions or promises in main clauses paired with time clauses."
  },
  {
    question: "It ____ since yesterday morning.",
    answers: { "a": "is snowing", "b": "snows", "c": "has been snowing", "d": "snowed" },
    correctAnswer: "c",
    category: "tenses",
    difficult: "medium",
    explanation: "Present perfect continuous ('has been snowing') shows an action that started in the past and is still continuing."
  },
  {
    question: "By 2030, scientists ____ a cure for the disease.",
    answers: { "a": "will discover", "b": "are discovering", "c": "will have discovered", "d": "have discovered" },
    correctAnswer: "c",
    category: "tenses",
    difficult: "medium",
    explanation: "Future perfect ('will have discovered') is used for actions completed before a specified future date."
  },
  {
    question: "I ____ my keys. I can't find them anywhere.",
    answers: { "a": "lost", "b": "have lost", "c": "had lost", "d": "lose" },
    correctAnswer: "b",
    category: "tenses",
    difficult: "easy",
    explanation: "Present perfect ('have lost') implies a past action with a direct consequence in the present."
  },
  {
    question: "She acts as if she ____ the boss.",
    answers: { "a": "is", "b": "was", "c": "were", "d": "has been" },
    correctAnswer: "c",
    category: "tenses",
    difficult: "hard",
    explanation: "After 'as if' for hypothetical or unreal situations, the past subjunctive ('were') is used."
  },
  {
    question: "They ____ dinner when the lights went out.",
    answers: { "a": "have", "b": "had", "c": "were having", "d": "are having" },
    correctAnswer: "c",
    category: "tenses",
    difficult: "easy",
    explanation: "Past continuous ('were having') shows an ongoing action interrupted by a sudden event."
  },
  {
    question: "I ____ there a few times, but not recently.",
    answers: { "a": "went", "b": "have been", "c": "had been", "d": "go" },
    correctAnswer: "b",
    category: "tenses",
    difficult: "medium",
    explanation: "Present perfect ('have been') is used to talk about general life experiences at unspecified times."
  },
  {
    question: "If you mix blue and yellow, you ____ green.",
    answers: { "a": "get", "b": "got", "c": "will get", "d": "would get" },
    correctAnswer: "a",
    category: "tenses",
    difficult: "easy",
    explanation: "Zero conditional (fact/general truth) uses simple present in both clauses."
  },
  {
    question: "She said she ____ the document the previous day.",
    answers: { "a": "sent", "b": "has sent", "c": "had sent", "d": "sends" },
    correctAnswer: "c",
    category: "tenses",
    difficult: "hard",
    explanation: "In reported speech, past simple shifts back one tense to past perfect ('had sent')."
  },
  {
    question: "Right now, I ____ to music.",
    answers: { "a": "listen", "b": "am listening", "c": "have listened", "d": "listened" },
    correctAnswer: "b",
    category: "tenses",
    difficult: "easy",
    explanation: "'Right now' indicates an action currently in progress, requiring the present continuous."
  },
  {
    question: "I wish I ____ earlier. Now we are going to be late.",
    answers: { "a": "leave", "b": "left", "c": "have left", "d": "had left" },
    correctAnswer: "d",
    category: "tenses",
    difficult: "hard",
    explanation: "To express regret about the past, 'wish' is followed by the past perfect ('had left')."
  },
  {
    question: "When I arrived, they ____ already finished eating.",
    answers: { "a": "have", "b": "were", "c": "had", "d": "did" },
    correctAnswer: "c",
    category: "tenses",
    difficult: "easy",
    explanation: "'Had' forms the past perfect, showing the eating finished before the arrival."
  },
  {
    question: "He ____ playing the piano for ten years.",
    answers: { "a": "has been", "b": "is", "c": "was", "d": "had" },
    correctAnswer: "a",
    category: "tenses",
    difficult: "medium",
    explanation: "Present perfect continuous ('has been playing') emphasizes the duration of a past-to-present action."
  },
  {
    question: "The sun ____ in the east.",
    answers: { "a": "is rising", "b": "rose", "c": "rises", "d": "has risen" },
    correctAnswer: "c",
    category: "tenses",
    difficult: "easy",
    explanation: "Simple present ('rises') states universal facts and geographic truths."
  },
  {
    question: "We ____ television when the phone rang.",
    answers: { "a": "watch", "b": "were watching", "c": "have watched", "d": "watched" },
    correctAnswer: "b",
    category: "tenses",
    difficult: "easy",
    explanation: "Past continuous sets the background action that was interrupted by the phone ringing."
  },
  {
    question: "Next month, I ____ for this company for a decade.",
    answers: { "a": "will work", "b": "have worked", "c": "will have been working", "d": "am working" },
    correctAnswer: "c",
    category: "tenses",
    difficult: "hard",
    explanation: "Future perfect continuous calculates the duration of an ongoing action up to a future date."
  },
  {
    question: "I can't believe she ____ my name again!",
    answers: { "a": "forgot", "b": "has forgotten", "c": "forgets", "d": "had forgotten" },
    correctAnswer: "b",
    category: "tenses",
    difficult: "medium",
    explanation: "Present perfect ('has forgotten') connects the past action to the present relevance and emotional reaction."
  },
  {
    question: "If you ____ to bed earlier, you wouldn't be so tired now.",
    answers: { "a": "go", "b": "went", "c": "had gone", "d": "have gone" },
    correctAnswer: "c",
    category: "tenses",
    difficult: "hard",
    explanation: "This is a mixed conditional: past perfect ('had gone') in the condition, conditional present ('wouldn't be') in the result."
  },
  {
    question: "By the time we ____ the theater, the movie had already started.",
    answers: { "a": "reached", "b": "reach", "c": "had reached", "d": "were reaching" },
    correctAnswer: "a",
    category: "tenses",
    difficult: "medium",
    explanation: "Simple past ('reached') acts as the later time marker for the earlier past perfect action."
  },
  {
    question: "I ____ Spanish before I travelled to Mexico.",
    answers: { "a": "learned", "b": "had learned", "c": "was learning", "d": "have learned" },
    correctAnswer: "b",
    category: "tenses",
    difficult: "medium",
    explanation: "Past perfect ('had learned') shows completion of learning prior to the travel."
  },
  {
    question: "They ____ the car by next Tuesday.",
    answers: { "a": "will repair", "b": "repair", "c": "are repairing", "d": "will have repaired" },
    correctAnswer: "d",
    category: "tenses",
    difficult: "medium",
    explanation: "Future perfect ('will have repaired') indicates action completion before a set future deadline."
  },
  {
    question: "I ____ the document right now, please don't interrupt me.",
    answers: { "a": "type", "b": "am typing", "c": "have typed", "d": "was typing" },
    correctAnswer: "b",
    category: "tenses",
    difficult: "easy",
    explanation: "'Right now' necessitates the present continuous."
  },
  {
    question: "He ____ tennis professionally until he injured his knee.",
    answers: { "a": "has played", "b": "played", "c": "plays", "d": "is playing" },
    correctAnswer: "b",
    category: "tenses",
    difficult: "easy",
    explanation: "Simple past ('played') is used for an action that started and finished in the past."
  },
  {
    question: "At 8 PM tomorrow, I ____ a presentation to the board.",
    answers: { "a": "will give", "b": "give", "c": "will be giving", "d": "will have given" },
    correctAnswer: "c",
    category: "tenses",
    difficult: "medium",
    explanation: "Future continuous indicates an action that will be in progress at a specific future moment."
  },
  {
    question: "If he ____ harder, he would pass the exam.",
    answers: { "a": "studies", "b": "studied", "c": "had studied", "d": "has studied" },
    correctAnswer: "b",
    category: "tenses",
    difficult: "medium",
    explanation: "Second conditional 'if' clause requires the simple past to express a hypothetical present/future."
  },
  {
    question: "She ____ to Paris three times in her life.",
    answers: { "a": "went", "b": "has gone", "c": "has been", "d": "was" },
    correctAnswer: "c",
    category: "tenses",
    difficult: "hard",
    explanation: "'Has been' is the correct present perfect form for visiting and returning from a place, whereas 'has gone' means still there."
  },
  {
    question: "The concert ____ at 7:30 PM, so don't be late.",
    answers: { "a": "starts", "b": "is starting", "c": "will start", "d": "started" },
    correctAnswer: "a",
    category: "tenses",
    difficult: "medium",
    explanation: "Simple present is used for scheduled events and timetables."
  },
  {
    question: "How long ____ to play the guitar?",
    answers: { "a": "are you learning", "b": "do you learn", "c": "have you been learning", "d": "did you learn" },
    correctAnswer: "c",
    category: "tenses",
    difficult: "medium",
    explanation: "Present perfect continuous asks about the duration of an ongoing past-to-present action."
  },
  {
    question: "I would have bought the car if it ____ so expensive.",
    answers: { "a": "wasn't", "b": "weren't", "c": "hasn't been", "d": "hadn't been" },
    correctAnswer: "d",
    category: "tenses",
    difficult: "hard",
    explanation: "Third conditional negative 'if' clause requires 'had not been'."
  },
  {
    question: "We ____ for hours when the rescue team finally arrived.",
    answers: { "a": "waited", "b": "were waiting", "c": "have been waiting", "d": "had been waiting" },
    correctAnswer: "d",
    category: "tenses",
    difficult: "hard",
    explanation: "Past perfect continuous ('had been waiting') measures the duration of an action before a specific past event."
  },
  {
    question: "She ____ never seen snow until she moved to Canada.",
    answers: { "a": "has", "b": "was", "c": "had", "d": "did" },
    correctAnswer: "c",
    category: "tenses",
    difficult: "medium",
    explanation: "Past perfect ('had seen') expresses an experience (or lack thereof) up to a point in the past."
  },
  {
    question: "You look exhausted. What ____?",
    answers: { "a": "have you been doing", "b": "do you do", "c": "are you doing", "d": "have you done" },
    correctAnswer: "a",
    category: "tenses",
    difficult: "medium",
    explanation: "Present perfect continuous explains a present result (looking exhausted) based on recent ongoing activity."
  },
  {
    question: "I ____ you at the station when you arrive.",
    answers: { "a": "meet", "b": "met", "c": "will meet", "d": "have met" },
    correctAnswer: "c",
    category: "tenses",
    difficult: "easy",
    explanation: "Simple future ('will meet') is used in the main clause for a spontaneous promise/plan contingent on a future time clause."
  },
  {
    question: "The museum ____ built in 1920.",
    answers: { "a": "is", "b": "was", "c": "has been", "d": "had been" },
    correctAnswer: "b",
    category: "tenses",
    difficult: "easy",
    explanation: "Simple past passive ('was built') is used for a completed action at a specific time in the past."
  },
  {
    question: "I suggest that he ____ a doctor immediately.",
    answers: { "a": "sees", "b": "saw", "c": "see", "d": "has seen" },
    correctAnswer: "c",
    category: "tenses",
    difficult: "hard",
    explanation: "Verbs of suggestion take the base form (subjunctive) in the 'that' clause."
  },
  {
    question: "My friends ____ outside for me right now.",
    answers: { "a": "wait", "b": "are waiting", "c": "have waited", "d": "were waiting" },
    correctAnswer: "b",
    category: "tenses",
    difficult: "easy",
    explanation: "'Right now' indicates a temporary present action requiring the continuous tense."
  },
  {
    question: "If you add salt to water, it ____ the freezing point.",
    answers: { "a": "lower", "b": "lowered", "c": "lowers", "d": "will lower" },
    correctAnswer: "c",
    category: "tenses",
    difficult: "medium",
    explanation: "Zero conditional scientific fact requires simple present in both clauses."
  },
  {
    question: "I ____ hard recently to pass this exam.",
    answers: { "a": "study", "b": "studied", "c": "am studying", "d": "have been studying" },
    correctAnswer: "d",
    category: "tenses",
    difficult: "medium",
    explanation: "'Recently' combined with duration implies the present perfect continuous."
  },
  {
    question: "He ____ home late every night this week.",
    answers: { "a": "comes", "b": "has been coming", "c": "is coming", "d": "came" },
    correctAnswer: "b",
    category: "tenses",
    difficult: "hard",
    explanation: "Present perfect continuous can be used for repeated, temporary actions leading up to now ('this week')."
  },
  {
    question: "As soon as I ____ home, I will call you.",
    answers: { "a": "get", "b": "will get", "c": "got", "d": "have got" },
    correctAnswer: "a",
    category: "tenses",
    difficult: "medium",
    explanation: "Time clauses (as soon as, when) use the present simple to refer to the future."
  },
  {
    question: "While we ____ dinner, someone knocked on the door.",
    answers: { "a": "ate", "b": "have eaten", "c": "were eating", "d": "eat" },
    correctAnswer: "c",
    category: "tenses",
    difficult: "easy",
    explanation: "Past continuous describes a background action interrupted by a past simple event."
  },
  {
    question: "They ____ their anniversary next week.",
    answers: { "a": "celebrate", "b": "are celebrating", "c": "have celebrated", "d": "celebrated" },
    correctAnswer: "b",
    category: "tenses",
    difficult: "medium",
    explanation: "Present continuous ('are celebrating') is often used for definite future arrangements."
  },
  {
    question: "By 5 PM, I ____ five reports.",
    answers: { "a": "will finish", "b": "am finishing", "c": "will have finished", "d": "finish" },
    correctAnswer: "c",
    category: "tenses",
    difficult: "medium",
    explanation: "Future perfect ('will have finished') expresses the completion of an amount before a future deadline."
  },
  {
    question: "I ____ him for years. He's my best friend.",
    answers: { "a": "know", "b": "am knowing", "c": "have known", "d": "have been knowing" },
    correctAnswer: "c",
    category: "tenses",
    difficult: "medium",
    explanation: "Stative verbs ('know') use the present perfect simple, not continuous, to show duration from past to present."
  },
  {
    question: "What ____ you do if you found a wallet on the street?",
    answers: { "a": "will", "b": "would", "c": "did", "d": "have" },
    correctAnswer: "b",
    category: "tenses",
    difficult: "easy",
    explanation: "Second conditional main clause uses 'would' + base verb."
  },
  {
    question: "She ____ already left when I called.",
    answers: { "a": "has", "b": "is", "c": "had", "d": "was" },
    correctAnswer: "c",
    category: "tenses",
    difficult: "easy",
    explanation: "Past perfect ('had left') is used when an action happened before another past action ('called')."
  },
  {
    question: "He told me he ____ English for five years.",
    answers: { "a": "studies", "b": "has studied", "c": "had been studying", "d": "was studying" },
    correctAnswer: "c",
    category: "tenses",
    difficult: "hard",
    explanation: "In reported speech, present perfect continuous shifts back to past perfect continuous."
  },
  
  {
    question: "By the time the investors finally arrived, the manager ____ the presentation for over an hour.",
    answers: { "a": "has been delivering", "b": "delivered", "c": "had been delivering", "d": "was delivering" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "hard",
    explanation: "The past perfect continuous is used to show that an action was ongoing up until a specific point in the past."
  },
  {
    question: "Hardly ____ the house when the thunderstorm began.",
    answers: { "a": "I had left", "b": "had I left", "c": "did I leave", "d": "I have left" },
    correctAnswer: "b",
    category: "tenses",
    difficulty: "hard",
    explanation: "When a sentence begins with a negative adverbial like 'Hardly', subject-auxiliary inversion is required with the past perfect tense."
  },
  {
    question: "By next December, she ____ for this corporation for exactly twenty years.",
    answers: { "a": "will work", "b": "will have been working", "c": "is working", "d": "will have worked" },
    correctAnswer: "b",
    category: "tenses",
    difficulty: "hard",
    explanation: "The future perfect continuous tense emphasizes the duration of an ongoing action leading up to a specific time in the future."
  },
  {
    question: "It is high time you ____ taking your responsibilities seriously.",
    answers: { "a": "start", "b": "started", "c": "had started", "d": "are starting" },
    correctAnswer: "b",
    category: "tenses",
    difficulty: "hard",
    explanation: "The phrase 'it is high time' is followed by the past simple tense to express that an action should have been done already."
  },
  {
    question: "If I ____ earlier about the schedule change, I would have warned you.",
    answers: { "a": "was told", "b": "had been told", "c": "have been told", "d": "would be told" },
    correctAnswer: "b",
    category: "tenses",
    difficulty: "hard",
    explanation: "In a third conditional sentence, the 'if' clause requires the past perfect (here, in the passive voice) for unreal past situations."
  },
  {
    question: "Scarcely ____ the phone down when it rang again.",
    answers: { "a": "she had put", "b": "did she put", "c": "had she put", "d": "has she put" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "hard",
    explanation: "Similar to 'hardly', 'scarcely' at the beginning of a clause triggers inversion with the past perfect tense."
  },
  {
    question: "They ____ to contact you all morning; where have you been?",
    answers: { "a": "have been trying", "b": "had tried", "c": "were trying", "d": "try" },
    correctAnswer: "a",
    category: "tenses",
    difficulty: "hard",
    explanation: "The present perfect continuous is used for an action that started in the past and has continued uninterrupted up to the present moment."
  },
  {
    question: "By the time the rescue team reaches the summit, the stranded climbers ____ to extreme cold for 48 hours.",
    answers: { "a": "will be exposed", "b": "are exposed", "c": "will have been exposed", "d": "have been exposed" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "hard",
    explanation: "The future perfect passive is required here to describe a state that will have lasted for a specific duration by a future point in time."
  },
  {
    question: "Not until he received the test results ____ the severity of his condition.",
    answers: { "a": "he understood", "b": "did he understand", "c": "he had understood", "d": "has he understood" },
    correctAnswer: "b",
    category: "tenses",
    difficulty: "hard",
    explanation: "'Not until' placed at the beginning of a sentence requires inversion (auxiliary verb + subject) in the main clause."
  },
  {
    question: "The contractor assured us that the roof ____ before the rainy season starts.",
    answers: { "a": "will be fixed", "b": "would have been fixed", "c": "has been fixed", "d": "is being fixed" },
    correctAnswer: "b",
    category: "tenses",
    difficulty: "hard",
    explanation: "Reported speech backshifts 'will have been fixed' to 'would have been fixed', establishing completion before a future deadline."
  },
  {
    question: "He was out of breath because he ____ up the steep hill.",
    answers: { "a": "has run", "b": "was running", "c": "had been running", "d": "ran" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "hard",
    explanation: "The past perfect continuous explains a past visible result ('out of breath') caused by an ongoing action before that past moment."
  },
  {
    question: "I would rather you ____ me the truth yesterday instead of lying.",
    answers: { "a": "told", "b": "had told", "c": "have told", "d": "tell" },
    correctAnswer: "b",
    category: "tenses",
    difficulty: "hard",
    explanation: "When 'would rather' refers to a past action, the past perfect tense is used for the unreal past."
  },
  {
    question: "Never before ____ such a blatant disregard for the rules in this institution.",
    answers: { "a": "I have witnessed", "b": "did I witness", "c": "have I witnessed", "d": "I had witnessed" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "hard",
    explanation: "Negative adverbial phrases like 'Never before' at the beginning of a sentence trigger inversion, typically with the present or past perfect."
  },
  {
    question: "If only I ____ more attention in math class, I would understand these statistics now.",
    answers: { "a": "paid", "b": "had paid", "c": "have paid", "d": "was paying" },
    correctAnswer: "b",
    category: "tenses",
    difficulty: "hard",
    explanation: "'If only' followed by a past regret requires the past perfect tense, creating a mixed conditional with the present result."
  },
  {
    question: "By 2030, scientists ____ a completely renewable energy grid for the city.",
    answers: { "a": "will design", "b": "will be designing", "c": "will have designed", "d": "would have designed" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "hard",
    explanation: "The future perfect is used to indicate that an action will be completed before a specified future time (By 2030)."
  },
  {
    question: "She acts as if she ____ the CEO, though she was only hired yesterday.",
    answers: { "a": "is", "b": "were", "c": "has been", "d": "will be" },
    correctAnswer: "b",
    category: "tenses",
    difficulty: "hard",
    explanation: "After 'as if' or 'as though', we use the past subjunctive ('were') to express an unreal or hypothetical situation in the present."
  },
  {
    question: "We ____ on this problem for hours, and we still haven't found a solution.",
    answers: { "a": "worked", "b": "had been working", "c": "have been working", "d": "are working" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "hard",
    explanation: "The present perfect continuous is used for actions that began in the past, continue to the present, and emphasize the duration."
  },
  {
    question: "He ____ his intent to resign before the scandal broke out.",
    answers: { "a": "has already announced", "b": "had already announced", "c": "was already announcing", "d": "already announced" },
    correctAnswer: "b",
    category: "tenses",
    difficulty: "hard",
    explanation: "The past perfect is necessary to clarify that the announcement occurred prior to another specific action in the past."
  },
  {
    question: "As soon as she ____ the manuscript, she will send it to the publisher.",
    answers: { "a": "will finish", "b": "finished", "c": "has finished", "d": "is finishing" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "hard",
    explanation: "In future time clauses (after 'as soon as', 'when', 'before'), the present perfect can be used to emphasize the completion of the action before the future event."
  },
  {
    question: "I ____ to visit my grandmother this weekend, but my car broke down.",
    answers: { "a": "have meant", "b": "had meant", "c": "mean", "d": "will mean" },
    correctAnswer: "b",
    category: "tenses",
    difficulty: "hard",
    explanation: "The past perfect 'had meant' is used to express an unfulfilled intention or plan in the past."
  },
  {
    question: "This time next week, I ____ on a beach in Hawaii.",
    answers: { "a": "will relax", "b": "will have relaxed", "c": "will be relaxing", "d": "relax" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "hard",
    explanation: "The future continuous describes an action that will be in progress at a specific time in the future."
  },
  {
    question: "Only after the plane had taken off ____ he had left his passport at the counter.",
    answers: { "a": "he realized", "b": "did he realize", "c": "had he realized", "d": "he had realized" },
    correctAnswer: "b",
    category: "tenses",
    difficulty: "hard",
    explanation: "'Only after' at the beginning of a sentence requires inversion in the main clause, using an auxiliary verb before the subject."
  },
  {
    question: "She didn't know how long they ____ for her before she finally arrived.",
    answers: { "a": "were waiting", "b": "have been waiting", "c": "had been waiting", "d": "waited" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "hard",
    explanation: "The past perfect continuous is used in embedded questions to show an ongoing action that preceded another past event."
  },
  {
    question: "Had the diplomatic talks failed, the two nations ____ into war.",
    answers: { "a": "would plunge", "b": "would have plunged", "c": "plunged", "d": "had plunged" },
    correctAnswer: "b",
    category: "tenses",
    difficulty: "hard",
    explanation: "In an inverted third conditional ('Had the talks failed'), the main clause requires the conditional perfect ('would have + past participle')."
  },
  {
    question: "The artwork ____ by experts before it was put on display.",
    answers: { "a": "has been authenticated", "b": "was being authenticated", "c": "had been authenticated", "d": "authenticated" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "hard",
    explanation: "The past perfect passive is used to indicate that the authentication was completed before the display, which is also in the past."
  },
  {
    question: "We ____ down the highway when suddenly a deer jumped into the road.",
    answers: { "a": "had driven", "b": "drove", "c": "were driving", "d": "have been driving" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "hard",
    explanation: "The past continuous sets the background scene of an ongoing action that was interrupted by a sudden past simple event."
  },
  {
    question: "No sooner ____ the door than he realized he had forgotten his keys inside.",
    answers: { "a": "did he close", "b": "he had closed", "c": "had he closed", "d": "he closed" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "hard",
    explanation: "'No sooner' followed by 'than' requires past perfect inversion to indicate that one past action happened immediately after another."
  },
  {
    question: "At this rate, the construction crew ____ the bridge by the deadline.",
    answers: { "a": "will not have finished", "b": "will not finish", "c": "are not finishing", "d": "have not finished" },
    correctAnswer: "a",
    category: "tenses",
    difficulty: "hard",
    explanation: "The negative future perfect expresses that an action will fail to be completed before a specified future deadline."
  },
  {
    question: "She told the police she ____ the suspect before the night of the robbery.",
    answers: { "a": "has never seen", "b": "never saw", "c": "had never seen", "d": "was never seeing" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "hard",
    explanation: "In reported speech, the past simple or present perfect shifts backward to the past perfect."
  },
  {
    question: "I ____ you with the translation if you had just asked me.",
    answers: { "a": "will help", "b": "would help", "c": "had helped", "d": "would have helped" },
    correctAnswer: "d",
    category: "tenses",
    difficulty: "hard",
    explanation: "This is a standard third conditional sentence where the main clause uses 'would have + past participle'."
  },
  {
    question: "They ____ for three days straight by the time they finally found an oasis.",
    answers: { "a": "were walking", "b": "had been walking", "c": "walked", "d": "have been walking" },
    correctAnswer: "b",
    category: "tenses",
    difficulty: "hard",
    explanation: "The past perfect continuous describes an action that was ongoing up until another specific point in the past."
  },
  {
    question: "Ever since the new software update was installed, the system ____ constantly.",
    answers: { "a": "crashed", "b": "has been crashing", "c": "had crashed", "d": "was crashing" },
    correctAnswer: "b",
    category: "tenses",
    difficulty: "hard",
    explanation: "'Ever since' combined with a past event requires the present perfect continuous to show a repeated action extending to the present."
  },
  {
    question: "You look exhausted! What ____ all day?",
    answers: { "a": "did you do", "b": "had you done", "c": "have you been doing", "d": "are you doing" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "hard",
    explanation: "The present perfect continuous is used to ask about an ongoing action that has a visible effect in the present."
  },
  {
    question: "He ____ as a consultant for five years when he was abruptly fired.",
    answers: { "a": "has been working", "b": "was working", "c": "had been working", "d": "worked" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "hard",
    explanation: "The past perfect continuous frames an action that was ongoing for a specific duration until it was interrupted in the past."
  },
  {
    question: "Unless he ____ his attitude, he will be dismissed from the team.",
    answers: { "a": "will change", "b": "changes", "c": "changed", "d": "has changed" },
    correctAnswer: "b",
    category: "tenses",
    difficulty: "hard",
    explanation: "First conditional sentences use the present simple in the 'unless' or 'if' clause to refer to future possibilities."
  },
  {
    question: "The ancient manuscript, which ____ for centuries, was finally decoded last week.",
    answers: { "a": "had been lost", "b": "was lost", "c": "has been lost", "d": "is lost" },
    correctAnswer: "a",
    category: "tenses",
    difficulty: "hard",
    explanation: "The past perfect passive describes a state that preceded the past action of being decoded."
  },
  {
    question: "By the time you wake up tomorrow morning, I ____ halfway across the world.",
    answers: { "a": "fly", "b": "will be flying", "c": "will have flown", "d": "am flying" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "hard",
    explanation: "The future perfect denotes that the action of flying halfway across the world will be completed by the future reference point."
  },
  {
    question: "My eyes are aching because I ____ computer code for eight hours straight.",
    answers: { "a": "had read", "b": "have read", "c": "am reading", "d": "have been reading" },
    correctAnswer: "d",
    category: "tenses",
    difficulty: "hard",
    explanation: "The present perfect continuous connects an ongoing recent activity to a current physical state or result."
  },
  {
    question: "If it ____ heavily last night, the streets wouldn't be flooded now.",
    answers: { "a": "didn't rain", "b": "wasn't raining", "c": "hadn't rained", "d": "hasn't rained" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "hard",
    explanation: "This is a mixed conditional where a past hypothetical condition (past perfect) results in a present unreal outcome."
  },
  {
    question: "She acts as though she ____ nothing about the missing funds, but I know she does.",
    answers: { "a": "knows", "b": "knew", "c": "has known", "d": "had known" },
    correctAnswer: "b",
    category: "tenses",
    difficulty: "hard",
    explanation: "Following 'as though', the past simple is used to indicate an untrue or unreal situation in the present."
  },
  {
    question: "Tomorrow marks the anniversary; we ____ together for five years.",
    answers: { "a": "will have been", "b": "will be", "c": "have been", "d": "had been" },
    correctAnswer: "a",
    category: "tenses",
    difficulty: "hard",
    explanation: "The future perfect expresses the total duration of a state that will be reached by a specific future point."
  },
  {
    question: "Not only ____ the speed limit, but he also ran a red light.",
    answers: { "a": "did he exceed", "b": "he exceeded", "c": "he did exceed", "d": "has he exceeded" },
    correctAnswer: "a",
    category: "tenses",
    difficulty: "hard",
    explanation: "'Not only' at the beginning of a clause requires subject-auxiliary inversion, effectively operating like a question structure."
  },
  {
    question: "Before the invention of the printing press, books ____ by hand.",
    answers: { "a": "were being copied", "b": "had been copied", "c": "were copied", "d": "have been copied" },
    correctAnswer: "b",
    category: "tenses",
    difficulty: "hard",
    explanation: "The past perfect passive emphasizes a regular practice completed prior to another past event (the invention)."
  },
  {
    question: "It's crucial that he ____ the application before the deadline.",
    answers: { "a": "submits", "b": "submit", "c": "submitted", "d": "will submit" },
    correctAnswer: "b",
    category: "tenses",
    difficulty: "hard",
    explanation: "After 'crucial that', the present subjunctive (base form of the verb) is used regardless of the subject."
  },
  {
    question: "By the time the trial concludes, the defendant ____ in custody for two years.",
    answers: { "a": "is", "b": "has been", "c": "will have been", "d": "would be" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "hard",
    explanation: "The future perfect tense captures the accumulated time of an ongoing state up to a specified point in the future."
  },
  {
    question: "The chef was furious because his assistant ____ the wrong spices to the stew.",
    answers: { "a": "added", "b": "was adding", "c": "had added", "d": "has added" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "hard",
    explanation: "The past perfect is used to state an action that was completed before another feeling or event in the past."
  },
  {
    question: "If they ____ the structural flaws earlier, the collapse could have been avoided.",
    answers: { "a": "discovered", "b": "would discover", "c": "had discovered", "d": "were discovering" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "hard",
    explanation: "In a third conditional sentence, the 'if' clause must be in the past perfect to represent a hypothetical past condition."
  },
  {
    question: "He ____ of running for mayor, but recent scandals made him reconsider.",
    answers: { "a": "has been thinking", "b": "had been thinking", "c": "thought", "d": "was thought" },
    correctAnswer: "b",
    category: "tenses",
    difficulty: "hard",
    explanation: "The past perfect continuous describes a continuous mental state that ended or was interrupted by a subsequent past event."
  },
  {
    question: "Seldom ____ such a flawless performance in classical theater.",
    answers: { "a": "I have seen", "b": "have I seen", "c": "did I see", "d": "I saw" },
    correctAnswer: "b",
    category: "tenses",
    difficulty: "hard",
    explanation: "The negative adverb 'seldom' at the beginning of a sentence triggers inversion with the present perfect tense."
  },
  {
    question: "I ____ this movie three times already, but I still don't fully understand the ending.",
    answers: { "a": "saw", "b": "had seen", "c": "have seen", "d": "will have seen" },
    correctAnswer: "c",
    category: "tenses",
    difficulty: "hard",
    explanation: "The present perfect is used to describe an experience that has happened multiple times up to the present moment without a specific time marker."
  },

  
  
  
  // ==========================================
  // SECTION 2: IDIOMATIC EXPRESSIONS (Category: idioms)
  // ==========================================
  {
    question: "Identify the correct meaning of this idiom: 'Hit the nail on the head'.",
    answers: { a: "To strike a nail.", b: "To make a mistake.", c: "To be exactly right.", d: "To be very close." },
    correctAnswer: "c",
    category: "idioms",
    difficulty: "medium",
    explanation: "This idiom describes identifying or expressing the precise truth about a situation."
  },
  {
    question: "Identify the correct meaning of this idiom: 'The ball is in your court'.",
    answers: { a: "To play with a ball.", b: "To be responsible for making the next move.", c: "To pass the ball.", d: "To make an excuse." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "This idiomatic expression means that the responsibility for taking the next action or decision lies with you."
  },
  {
    question: "Identify the correct meaning of this idiom: 'Once in a blue moon'.",
    answers: { a: "To happen frequently.", b: "To happen rarely.", c: "To happen quickly.", d: "To happen daily." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "A 'blue moon' is a rare astronomical occurrence; hence, the idiom refers to events that happen very infrequently."
  },
  {
    question: "Identify the correct meaning of this idiom: 'Bite the bullet'.",
    answers: { a: "To avoid a situation.", b: "To take responsibility.", c: "To face something unpleasant with courage.", d: "To make an easy decision." },
    correctAnswer: "c",
    category: "idioms",
    difficulty: "hard",
    explanation: "This idiom means to endure a painful or difficult situation that is unavoidable with fortitude."
  },
  {
    question: "Identify the correct meaning of this idiom: 'Spill the beans'.",
    answers: { a: "To make a mess.", b: "To reveal a secret.", c: "To drop food.", d: "To start something new." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "To 'spill the beans' means to prematurely or indiscreetly share confidential information."
  },
  {
    question: "Identify the correct meaning of this idiom: 'Burn the midnight oil'.",
    answers: { a: "To waste time.", b: "To work late at night.", c: "To finish work early.", d: "To sleep late." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "hard",
    explanation: "This phrase refers to studying or working late into the night, stemming from the historical use of oil lamps."
  },
  {
    question: "Identify the correct meaning of this idiom: 'A blessing in disguise'.",
    answers: { a: "A bad event.", b: "Something good that seemed bad initially.", c: "A surprising event.", d: "An unlucky situation." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "This describes an apparent misfortune that eventually results in a highly favorable or positive outcome."
  },
  {
    question: "Identify the correct meaning of this idiom: 'On cloud nine'.",
    answers: { a: "Very sad.", b: "Extremely happy.", c: "Very tired.", d: "Very angry." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "To be 'on cloud nine' represents experiencing extreme joy, elation, or state of deep satisfaction."
  },
  {
    question: "Identify the correct meaning of this idiom: 'Cost an arm and a leg'.",
    answers: { a: "Very expensive.", b: "Very cheap.", c: "Free of cost.", d: "Very confusing." },
    correctAnswer: "a",
    category: "idioms",
    difficulty: "hard",
    explanation: "This common expression describes goods or services that command an excessively high price."
  },
  {
    question: "Identify the correct meaning of this idiom: 'Piece of cake'.",
    answers: { a: "Something very easy to do.", b: "A cake that is small.", c: "Something very difficult.", d: "A surprise event." },
    correctAnswer: "a",
    category: "idioms",
    difficulty: "easy",
    explanation: "An extremely common idiom meaning that a task or activity is incredibly simple to complete."
  },
  {
    question: "Identify the correct meaning of this idiom: 'Let the cat out of the bag'.",
    answers: { a: "To free a pet.", b: "To tell a secret by mistake.", c: "To make a mess.", d: "To buy something cheap." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "This common idiom means to reveal confidential information, often accidentally."
  },
  {
    question: "Identify the correct meaning of this idiom: 'Break a leg'.",
    answers: { a: "To have an accident.", b: "To wish someone good luck.", c: "To perform poorly.", d: "To go to sleep." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Commonly used in theater circles, this idiom is used to wish performers good luck before a show."
  },
  {
    question: "Identify the correct meaning of this idiom: 'See eye to eye'.",
    answers: { a: "To look at each other.", b: "To agree completely.", c: "To argue about details.", d: "To be confused." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "When people 'see eye to eye', it means they share the exact same opinion on a matter."
  },
  {
    question: "Identify the correct meaning of this idiom: 'Cry over spilled milk'.",
    answers: { a: "To clean a mess.", b: "To waste food.", c: "To worry about past mistakes that cannot be changed.", d: "To be very hungry." },
    correctAnswer: "c",
    category: "idioms",
    difficulty: "easy",
    explanation: "This means spending time regretting past events that have already happened and cannot be undone."
  },
  {
    question: "Identify the correct meaning of this idiom: 'When pigs fly'.",
    answers: { a: "Something that will never happen.", b: "An expected event.", c: "A scientific impossibility.", d: "To act foolishly." },
    correctAnswer: "a",
    category: "idioms",
    difficulty: "easy",
    explanation: "This idiomatic expression is used to describe an event that is highly unlikely or impossible to ever happen."
  },
  {
    question: "Identify the correct meaning of this idiom: 'Barking up the wrong tree'.",
    answers: { a: "Following a mistaken line of thought.", b: "Chasing a wild animal.", c: "Shouting too loudly.", d: "Making an excuse." },
    correctAnswer: "a",
    category: "idioms",
    difficulty: "medium",
    explanation: "This expression means to pursue a misguided course of action or accuse the wrong person."
  },
  {
    question: "Identify the correct meaning of this idiom: 'Beat around the bush'.",
    answers: { a: "To cut plants.", b: "To avoid talking about the main topic directly.", c: "To run in circles.", d: "To speak very clearly." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "To 'beat around the bush' is to discuss a topic circuitously or evasively, usually because it is uncomfortable."
  },
  {
    question: "Identify the correct meaning of this idiom: 'Take with a grain of salt'.",
    answers: { a: "To cook food carefully.", b: "To accept something skeptically or with caution.", c: "To believe everything completely.", d: "To add flavor." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "This idiom means to not interpret something as literal or absolute truth, remaining slightly skeptical."
  },
  {
    question: "Identify the correct meaning of this idiom: 'Burn bridges'.",
    answers: { a: "To construct roads.", b: "To destroy relationships or pathways permanently.", c: "To make new friends.", d: "To act bravely." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "This phrase means to act in a way that cuts off any possibility of returning to a previous state or relationship."
  },
  {
    question: "Identify the correct meaning of this idiom: 'On the fence'.",
    answers: { a: "To be physically stuck.", b: "To be undecided or neutral.", c: "To make a bold decision.", d: "To climb over obstacles." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "Being 'on the fence' means a person is currently unable or unwilling to make a choice between two options."
  },
  {
    question: "Identify the correct meaning of this idiom: 'Throw caution to the wind'.",
    answers: { a: "To act extremely carefully.", b: "To take a major risk or behave recklessly.", c: "To predict the weather.", d: "To lose control of your emotions." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "hard",
    explanation: "This idiom means to discard worries, doubts, and safety precautions in order to take a decisive risk."
  },
  {
    question: "Identify the correct meaning of this idiom: 'Devil's advocate'.",
    answers: { a: "An evil person.", b: "Someone who argues against an idea to test its validity.", c: "A corrupt lawyer.", d: "To speak ill of others." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "hard",
    explanation: "A 'devil's advocate' presents opposing arguments for the sake of thorough debate, regardless of their personal stance."
  },
  {
    question: "Identify the correct meaning of this idiom: 'Leave no stone unturned'.",
    answers: { a: "To do a superficial job.", b: "To search thoroughly using every possible resource.", c: "To dig up a garden.", d: "To make a complete mess." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "hard",
    explanation: "This expression means to use every single available avenue or resource to achieve an objective."
  },
  {
    question: "Identify the correct meaning of this idiom: 'The elephant in the room'.",
    answers: { a: "A large physical object.", b: "An obvious major issue that everyone avoids discussing.", c: "A surprising event.", d: "An animal enclosure." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "hard",
    explanation: "This idiom refers to an obvious and significant problem or truth that is avoided because it is uncomfortable to address."
  },
  {
    question: "Identify the correct meaning of this idiom: 'Under the weather'.",
    answers: { a: "Feeling ill or unwell.", b: "Being outside in the rain.", c: "Working very hard.", d: "Feeling very happy." },
    correctAnswer: "a",
    category: "idioms",
    difficulty: "easy",
    explanation: "This nautical expression refers to feeling slightly sick, exhausted, or generally indisposed."
  },
  
  
  
  
  
  
  {
    question: "Identify the correct meaning of this idiom: 'Bite the bullet'.",
    answers: { a: "To eat something hard.", b: "To face a difficult situation with courage.", c: "To start a fight.", d: "To give up on a task." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "'Bite the bullet' means to accept or endure a painful or difficult situation that is unavoidable."
  },
  {
    question: "What is the meaning of the idiom 'Spill the beans'?",
    answers: { a: "To cook a meal.", b: "To make a mess.", c: "To reveal a secret accidentally.", d: "To waste money." },
    correctAnswer: "c",
    category: "idioms",
    difficulty: "easy",
    explanation: "'Spill the beans' means to prematurely disclose confidential or secret information."
  },
  {
    question: "What does it mean to 'Beat around the bush'?",
    answers: { a: "To clear a path in the woods.", b: "To avoid speaking directly about the main topic.", c: "To hunt for wild animals.", d: "To delay an assignment on purpose." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "This idiom means to stall or speak evasively to avoid addressing an uncomfortable subject directly."
  },
  {
    question: "What does 'A blessing in disguise' mean?",
    answers: { a: "Something good that isn't recognized at first.", b: "A magical spell.", c: "An event that brings bad luck.", d: "A costume party." },
    correctAnswer: "a",
    category: "idioms",
    difficulty: "easy",
    explanation: "It refers to a misfortune that eventually results in a positive outcome."
  },
  {
    question: "Identify the correct meaning of: 'Burn the midnight oil'.",
    answers: { a: "To waste electricity.", b: "To work or study late into the night.", c: "To cause an accident.", d: "To cook a late-night dinner." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "This expression originates from the practice of using an oil lamp to work deep into the night."
  },
  {
    question: "What is the meaning of 'By the skin of your teeth'?",
    answers: { a: "To have dental issues.", b: "By a very narrow margin.", c: "To smile brightly.", d: "Using extreme force." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "It means to barely succeed or escape a disaster by an incredibly small margin."
  },
  {
    question: "What does the phrase 'Barking up the wrong tree' mean?",
    answers: { a: "Chasing a stray animal.", b: "Pursuing a mistaken line of thought or course of action.", c: "Shouting at someone without a reason.", d: "Making too much noise at night." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "It means to look for solutions in the wrong place or accuse the wrong person."
  },
  {
    question: "What does the idiom 'Cold shoulder' signify?",
    answers: { a: "A weather condition.", b: "Intentionally ignoring or being unfriendly to someone.", c: "An injury sustained while exercising.", d: "Wearing inadequate winter clothing." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Giving someone the cold shoulder means to deliberately treat them with coldness or disdain."
  },
  {
    question: "What is the meaning of 'Cry over spilled milk'?",
    answers: { a: "To clean up a kitchen spill.", b: "To complain about something that cannot be undone.", c: "To be overly dramatic about minor physical injuries.", d: "To waste dairy products." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "It means to feel sorry or complain about past mistakes or losses that cannot be rectified."
  },
  {
    question: "Identify the meaning of 'Don't count your chickens before they hatch'.",
    answers: { a: "Do not plan on a good thing happening until it actually happens.", b: "To be very careful with farming equipment.", c: "To count possessions accurately.", d: "To avoid eating eggs before they are cooked." },
    correctAnswer: "a",
    category: "idioms",
    difficulty: "easy",
    explanation: "This warns against making plans based on assumptions that may turn out to be false."
  },
  {
    question: "What does it mean to 'Face the music'?",
    answers: { a: "To attend a live concert.", b: "To accept unpleasant consequences for your actions.", c: "To dance beautifully.", d: "To criticize someone's musical taste." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "To face the music means to confront a difficult situation or take responsibility for mistakes."
  },
  {
    question: "What is meant by the idiom 'Get out of hand'?",
    answers: { a: "To drop an object.", b: "To become out of control.", c: "To lose a card game.", d: "To give away control of a company." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "When a situation gets out of hand, it becomes unmanageable or chaotic."
  },
  {
    question: "What does the idiom 'Go cold turkey' mean?",
    answers: { a: "To eat leftover poultry.", b: "To suddenly and completely stop a habit or addiction.", c: "To freeze during an important performance.", d: "To travel to a cold country unexpectedly." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "It describes an abrupt, complete cessation of a regular dependency or habit rather than tapering off."
  },
  {
    question: "What does 'Hear it straight from the horse's mouth' mean?",
    answers: { a: "To talk to farm animals.", b: "To hear news from the original or highest authority source.", c: "To believe a rumor blindly.", d: "To study veterinary science." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "This means getting information directly from the person most accountable or knowledgeable about it."
  },
  {
    question: "What is the meaning of 'In the heat of the moment'?",
    answers: { a: "During a hot summer day.", b: "Overwhelmed by passion or anger at an exact absolute time.", c: "When cooking under high pressure.", d: "Making a logical, well-thought-out choice." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "It refers to saying or doing something driven by strong immediate emotions without thinking it through."
  },
  {
    question: "What does 'Let someone off the hook' mean?",
    answers: { a: "To rescue someone from drowning.", b: "To release someone from blame, obligation, or punishment.", c: "To catch a large fish.", d: "To hang up a telephone." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "It means allowing someone who did something wrong to escape judgment, penalty, or blame."
  },
  {
    question: "Identify the meaning of 'On cloud nine'.",
    answers: { a: "Flying high in an airplane.", b: "Extremely happy or euphoric.", c: "Confused and unable to think clearly.", d: "Predicting rainy weather." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Being on cloud nine means experiencing extreme joy, bliss, or satisfaction."
  },
  {
    question: "What does 'Put all your eggs in one basket' mean?",
    answers: { a: "To practice safe grocery shopping.", b: "To risk everything on a single venture or option.", c: "To cook a very large breakfast.", d: "To organize items in an efficient way." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "This idiom warns against concentrating all resources or efforts into one area, risking complete failure."
  },
  {
    question: "What does 'Rain on someone's parade' mean?",
    answers: { a: "To cause bad weather during an event.", b: "To spoil someone's plans or enthusiasm.", c: "To throw a festive outdoor party.", d: "To cancel a public celebration." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "It means to diminish someone's pleasure, excitement, or momentum regarding a specific plan."
  },
  {
    question: "What is the meaning of 'Take it with a grain of salt'?",
    answers: { a: "To add seasoning to a meal.", b: "To view something with skepticism or not take it literally.", c: "To swallow medicine carefully.", d: "To be resentful about a loss." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "It means to accept a statement while remaining conscious that it might be exaggerated or untrue."
  },
  {
    question: "What does the phrase 'The elephant in the room' refer to?",
    answers: { a: "A large zoo exhibit.", b: "An obvious, major problem that everyone avoids discussing.", c: "A heavy piece of furniture.", d: "An unexpected visitor." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "It signifies a glaring truth or issue that is completely ignored because it is uncomfortable to address."
  },
  {
    question: "What does 'Throw caution to the wind' mean?",
    answers: { a: "To act very carefully.", b: "To take a major, reckless risk.", c: "To measure wind speeds.", d: "To blame others for an accident." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "It means to discard warnings or prudence and proceed to behave in an audacious manner."
  },
  {
    question: "What is the meaning of 'Through thick and thin'?",
    answers: { a: "Walking through dense woods.", b: "In both good times and bad times.", c: "Losing and gaining weight rapidly.", d: "Looking at objects from different dimensions." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "It signifies supporting someone or maintaining loyalty through all kinds of difficulties and hardships."
  },
  {
    question: "What does 'Under the weather' mean?",
    answers: { a: "Standing under an umbrella.", b: "Slightly sick or unwell.", c: "Experiencing extreme climates.", d: "Feeling trapped indoors." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "This common idiom is used when a person is feeling indisposed, exhausted, or mildly ill."
  },
  {
    question: "What does the expression 'Up in the air' mean?",
    answers: { a: "Traveling via an aircraft.", b: "Uncertain or undecided.", c: "Extremely excited or happy.", d: "Throwing something upwards." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "If plans are up in the air, it means they are unresolved, pending, or not yet finalized."
  },
  {
    question: "What does 'Wrap your head around something' mean?",
    answers: { a: "To wear protective gear.", b: "To find a way to understand a complex or strange concept.", c: "To suffer from a severe headache.", d: "To keep a secret carefully." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "It means to find the mental capacity to comprehend an idea that is hard to accept or understand."
  },
  {
    question: "What is the meaning of 'A dime a dozen'?",
    answers: { a: "Something very rare and valuable.", b: "Very common and of little special value.", c: "An expensive financial transaction.", d: "A precise mathematical set." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "If something is a dime a dozen, it is ubiquitous and easy to obtain, hence not prized."
  },
  {
    question: "What does the idiom 'An arm and a leg' mean?",
    answers: { a: "An anatomical injury.", b: "An exorbitant or extremely high price.", c: "A fair trade agreement.", d: "A great physical effort." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "If something costs an arm and a leg, it is immensely expensive."
  },
  {
    question: "What does 'Back to square one' mean?",
    answers: { a: "Winning a board game.", b: "Having to start all over again from the beginning.", c: "Returning to your hometown.", d: "Failing a simple math test." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "It indicates that a previous attempt failed completely, requiring a restart from the very initial stage."
  },
  {
    question: "What is the meaning of 'The ball is in your court'?",
    answers: { a: "A sports match has resumed.", b: "It is up to you to make the next move or decision.", c: "You have lost a point.", d: "Someone is playing a prank on you." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "This means it is now your absolute responsibility to respond or take action."
  },
  {
    question: "What does 'Bite off more than you can chew' mean?",
    answers: { a: "To eat too quickly.", b: "To take on a commitment that is too big or difficult.", c: "To act aggressively without reason.", d: "To practice bad table manners." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "It refers to overextending oneself by taking on more responsibilities than one can realistically manage."
  },
  {
    question: "Identify the meaning of 'Caught between a rock and a hard place'.",
    answers: { a: "An outdoor rock climbing accident.", b: "Facing a choice between two equally difficult or unpleasant options.", c: "Working in a quarry.", d: "Making a very solid decision." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "It represents a dilemma where any path chosen leads to trouble or hardship."
  },
  {
    question: "What does 'Cut corners' mean?",
    answers: { a: "To trim a piece of paper.", b: "To do something poorly or cheaply to save time or money.", c: "To take a shorter driving route.", d: "To reduce safety hazards." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Cutting corners implies bypassing procedures or quality standards to expedite a result."
  },
  {
    question: "What does it mean to play 'Devil's advocate'?",
    answers: { a: "To support evil actions.", b: "To present a counterargument or opposing view for the sake of debate.", c: "To represent someone in court.", d: "To act maliciously in a professional setting." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "hard",
    explanation: "A devil's advocate tests an argument by presenting alternative viewpoints, even if they don't personally agree with them."
  },
  {
    question: "What does 'Kill two birds with one stone' mean?",
    answers: { a: "To hunt birds efficiently.", b: "To accomplish two distinct tasks with a single action.", c: "To cause unintended damage.", d: "To act cruelly." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "It means maximizing efficiency by solving two separate issues via one consolidated effort."
  },
  {
    question: "What does 'The last straw' mean?",
    answers: { a: "The final drinking tube available.", b: "The final problem in a series of setbacks that makes a situation unbearable.", c: "A breakthrough solution.", d: "The end of a harvest season." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "It is the ultimate minor irritation or setback that breaks a person's patience or endurance."
  },
  {
    question: "What does 'Miss the boat' mean?",
    answers: { a: "To arrive late at a harbor.", b: "To miss an excellent opportunity.", c: "To experience seasickness.", d: "To misinterpret navigation directions." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Missing the boat means acting too slowly, causing one to lose out on a favorable opening."
  },
  {
    question: "Identify the meaning of 'Once in a blue moon'.",
    answers: { a: "An astronomical alignment.", b: "An event that happens very rarely.", c: "Something that occurs monthly.", d: "A sad or melancholy night." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "It references the rare second full moon in a calendar month, meaning an event is highly infrequent."
  },
  {
    question: "What does it mean to 'Pull someone's leg'?",
    answers: { a: "To trip someone physically.", b: "To play a lighthearted, playful trick or joke on someone.", c: "To help someone climb a wall.", d: "To delay someone intentionally." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Pulling someone's leg means teasing them by telling them something untrue as a joke."
  },
  {
    question: "What does 'See eye to eye' mean?",
    answers: { a: "To stare at someone intently.", b: "To agree fully with someone.", c: "To be of the exact same height.", d: "To undergo an ophthalmic exam." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Seeing eye to eye with someone means having identical opinions or mutual agreement."
  },
  {
    question: "What does it mean to 'Sit on the fence'?",
    answers: { a: "To balance on a narrow structure.", b: "To avoid making a decision or choosing a side.", c: "To protect your property boundaries.", d: "To relax in a backyard." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "It describes a state of neutrality, hesitation, or non-commitment in a debate or conflict."
  },
  {
    question: "What does 'Steal someone's thunder' mean?",
    answers: { a: "To forecast a storm incorrectly.", b: "To take credit or attention away from someone else's achievements.", c: "To make a loud noise out of nowhere.", d: "To outrun a competitor in bad weather." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "It means preempting someone else's news or success to redirect praise toward oneself."
  },
  {
    question: "What is a 'Wild goose chase'?",
    answers: { a: "A popular countryside sport.", b: "A foolish, hopeless, or frustrating search for something unattainable.", c: "An efficient tracking method.", d: "An animal conservation program." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "It describes a wasteful pursuit of something that does not exist or cannot be found."
  },
  {
    question: "What does 'At the drop of a hat' mean?",
    answers: { a: "Losing an item of clothing.", b: "Instantly, without any hesitation or delay.", c: "Behaving clumsily.", d: "When a formal signal is given." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Doing something at the drop of a hat means being ready to do it immediately at the slightest prompt."
  },
  {
    question: "What is meant by the idiom 'Burn bridges'?",
    answers: { a: "An act of industrial sabotage.", b: "To destroy paths, relationships, or options permanently.", c: "To complete a difficult engineering project.", d: "To settle a bitter dispute." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Burning bridges implies acting in a way that makes returning to a previous state or relationship impossible."
  },
  {
    question: "What does it mean to 'Cry wolf'?",
    answers: { a: "To imitate forest predators.", b: "To raise a false alarm or ask for help when it is not needed.", c: "To complain about authentic dangers.", d: "To feel profound sorrow." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Derived from Aesop's fable, it means calling for assistance falsely, so that people ignore you when real danger arrives."
  },
  {
    question: "What does 'Cut to the chase' mean?",
    answers: { a: "To run after a criminal.", b: "To leave out distracting details and get straight to the point.", c: "To edit a film sequence roughly.", d: "To end a game prematurely." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "It means stopping irrelevant side-talk and addressing the core issue directly."
  },
  {
    question: "What does 'Fit as a fiddle' mean?",
    answers: { a: "To be highly skilled at string instruments.", b: "To be in excellent physical health.", c: "To fit perfectly inside a tight space.", d: "To change your clothes quickly." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "An old idiom that highlights that a person is structurally sound, energetic, and completely healthy."
  },
  {
    question: "What does it mean to 'Fly off the handle'?",
    answers: { a: "To break a mechanical tool.", b: "To lose one's temper suddenly and unexpectedly.", c: "To travel spontaneously.", d: "To operate a machine recklessly." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "It means reacting with sudden, explosive rage over a minor irritation."
  },
  {
    question: "What does 'Get cold feet' mean?",
    answers: { a: "To suffer from poor blood circulation.", b: "To become nervous or hesitant about a big event or commitment.", c: "To walk barefoot in winter.", d: "To change one's mind safely." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "It refers to a loss of courage or sudden anxiety before embarking on an important venture (like a wedding or speech)."
  },
  {
    question: "What is the meaning of 'Keep your chin up'?",
    answers: { a: "To maintain good posture.", b: "To remain cheerful and hopeful in a difficult situation.", c: "To defend yourself in a physical fight.", d: "To look upwards constantly." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "It is an encouraging phrase telling someone to stay positive and resilient despite hardships."
  },
  {
    question: "What does 'Method to madness' mean?",
    answers: { a: "A scientific treatment for mental illness.", b: "A rational purpose behind actions that seem crazy or chaotic.", c: "An unorganized approach to art.", d: "A breakdown of rules and laws." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "It implies that even though someone's actions look strange or random, they have a calculated plan."
  },
  {
    question: "What does 'On thin ice' mean?",
    answers: { a: "Practicing professional figure skating.", b: "In a risky, precarious, or dangerous situation.", c: "Succeeding effortlessly.", d: "Living in polar regions." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "If you are on thin ice, you are in a highly sensitive position where one more mistake could trigger disaster."
  },
  {
    question: "What does the expression 'Out of the blue' mean?",
    answers: { a: "Falling from the open sky.", b: "Completely unexpectedly and without warning.", c: "Feeling cured of depression.", d: "Sailing far out into the ocean." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "It refers to an event that catches everyone by surprise, like lightning from a clear blue sky."
  },
  {
    question: "What does 'Pull yourself together' mean?",
    answers: { a: "To assemble a team of workers.", b: "To calm down and regain emotional control.", c: "To exercise heavy weights.", d: "To stand closer to another person." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "It is a command to stabilize one's emotions and act rationally after panic, grief, or anger."
  },
  {
    question: "What is a 'Rule of thumb'?",
    answers: { a: "A metric measurement system using fingers.", b: "A broadly accurate guide based on practical experience rather than theory.", c: "A strict legal decree.", d: "An ancient martial arts technique." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "It represents a useful, easily applied baseline principle that works in most cases."
  },
  {
    question: "What does 'Throw in the towel' mean?",
    answers: { a: "To finish a household cleaning chore.", b: "To admit defeat or surrender.", c: "To start a swimming race.", d: "To challenge an opponent." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Originating from boxing, where a coach throws a towel to stop a fight, it means giving up."
  },
  {
    question: "What does 'Wolf in sheep's clothing' mean?",
    answers: { a: "A rare livestock predator.", b: "A dangerous person pretending to be completely harmless or friendly.", c: "A fancy dress costume.", d: "A clever animal trick." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "It warns of malicious entities masking themselves under a benign appearance to deceive others."
  },
  {
    question: "What does the idiom 'Barking up the wrong tree' mean?",
    answers: { a: "A dog chasing a phantom scent.", b: "Pursuing a mistaken line of thought or action.", c: "Arguing with an innocent bystander.", d: "Trimming the wrong branches." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "It means targeting the wrong suspect or following a faulty path of inquiry."
  },
  {
    question: "What does 'A penny for your thoughts' mean?",
    answers: { a: "Paying someone for an essay.", b: "A polite way of asking what someone is thinking about.", c: "A cheap financial offer.", d: "Insulting someone's intelligence." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "It is a conversational phrase used to gently prompt a quiet person to share their current thoughts."
  },
  {
    question: "What does the phrase 'A drop in the bucket' mean?",
    answers: { a: "A water leakage problem.", b: "An insignificant amount compared to what is needed.", c: "A sudden rainy spell.", d: "A precise laboratory measurement." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "It refers to a contribution or action that is minuscule and has negligible impact on a massive requirement."
  },
  {
    question: "What is meant by 'Actions speak louder than words'?",
    answers: { a: "Shouting is more effective than speaking.", b: "What people actually do matters more than what they promise.", c: "Acting in a play is highly communicative.", d: "Sign language is more expressive than spoken language." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "It implies that true intent and character are measured by deeds rather than empty rhetoric."
  },
  {
    question: "What does 'Add insult to injury' mean?",
    answers: { a: "To sue someone after an accident.", b: "To worsen an already bad situation with further unfavorable acts or words.", c: "To misdiagnose a physical wound.", d: "To mock someone who is completely healthy." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "It means compounding a person's existing misfortune or offense by treating them with additional disrespect."
  },
  {
    question: "What does 'Ball is in your court' mean?",
    answers: { a: "You have won a tennis set.", b: "It is now your responsibility to take the next step.", c: "You have broken a property rule.", d: "You need to find a new sports venue." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Metaphorically derived from tennis, meaning the onus of action has passed directly to you."
  },
  {
    question: "What is the meaning of 'Barking up the wrong tree'?",
    answers: { a: "Confusing one forest species with another.", b: "Directing your efforts or accusations toward the wrong target.", c: "Making erratic demands in public.", d: "Training hunting hounds improperly." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "It means wasting energy by pursuing a false lead or pinning blame on an innocent party."
  },
  {
    question: "What does 'Bite off more than you can chew' mean?",
    answers: { a: "Eating large portions of food carelessly.", b: "Taking on a task or responsibility that is way too big to handle.", c: "Threatening someone aggressively.", d: "Overestimating your physical strength." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "It applies to individuals who commit to projects far exceeding their bandwidth or capabilities."
  },
  {
    question: "What does the expression 'Bite the bullet' mean?",
    answers: { a: "To swallow ammunition.", b: "To force yourself to do something difficult or unpleasant without delaying.", c: "To engage in dangerous combat sports.", d: "To stop talking immediately." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "It means showing grit and facing inevitable pain or a tough task directly."
  },
  {
    question: "What does 'Break a leg' mean?",
    answers: { a: "A severe skeletal fracture.", b: "A superstitious way to wish a performer good luck before a show.", c: "An instruction to run very fast.", d: "A critique of clumsy dancing." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "An old theatrical idiom based on the superstition that directly wishing someone good luck will bring bad luck."
  },
  {
    question: "What does it mean to 'Break the ice'?",
    answers: { a: "To chop blocks of ice for drinks.", b: "To relieve tension or awkwardness at the start of a social interaction.", c: "To navigate a ship through frozen waters.", d: "To start an aggressive argument." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Breaking the ice means initiating a conversation to help people feel comfortable around each other."
  },
  {
    question: "What does 'Burn the midnight oil' mean?",
    answers: { a: "To waste resources needlessly.", b: "To study or work late into the night.", c: "To set fire to fuel materials.", d: "To operate a late-night restaurant." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "It directly references working late by the illumination of a lamp."
  },
  {
    question: "What does 'Call it a day' mean?",
    answers: { a: "To name a new holiday.", b: "To stop working on something for the rest of the day.", c: "To look at a calendar.", d: "To declare a task completely finished forever." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "It means halting professional or personal activity because you have done enough for that session."
  },
  {
    question: "What does 'Cut corners' mean?",
    answers: { a: "To carve patterns into wood.", b: "To omit necessary steps to save time or money, lowering quality.", c: "To take a diagonal path across a street.", d: "To reduce operating budgets safely." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Bypassing protocols to save effort, resulting in inferior or risky outcomes."
  },
  {
    question: "What does the idiom 'Cut to the chase' mean?",
    answers: { a: "To skip the introduction and move directly to the essential point.", b: "To stop running from a predator.", c: "To film an action scene in cinema.", d: "To stop a competition abruptly." },
    correctAnswer: "a",
    category: "idioms",
    difficulty: "easy",
    explanation: "It urges removing fluff or preamble and jumping straight into the core matter."
  },
  {
    question: "What does 'Don't count your chickens before they hatch' mean?",
    answers: { a: "To protect bird nests carefully.", b: "Do not depend on positive future events until they are absolutely certain.", c: "To trade agricultural goods early.", d: "To count assets regularly." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "A warning against celebrating an outcome that isn't fully locked in yet."
  },
  {
    question: "What does 'Face the music' mean?",
    answers: { a: "To perform on stage.", b: "To accept the criticism or punishment for your actions.", c: "To support local musical artists.", d: "To listen to sound waves attentively." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Confronting the negative reality and fallout of your own mistakes."
  },
  {
    question: "What does 'Get out of hand' mean?",
    answers: { a: "To slip out of someone's physical grasp.", b: "To lose control of a situation entirely.", c: "To leave a meeting early.", d: "To resign from a position." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "When behavior or an event escalates beyond boundaries of reason or management."
  },
  {
    question: "What does 'Get a taste of your own medicine' mean?",
    answers: { a: "To sample a new prescription drug.", b: "To be treated with the same negative behavior you inflict on others.", c: "To learn medical science.", d: "To recover from an illness." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Experiencing the exact same mistreatment or cruelty you regularly dish out to others."
  },
  {
    question: "What is meant by 'Giving someone the benefit of the doubt'?",
    answers: { a: "Accusing someone without concrete evidence.", b: "Choosing to believe someone is honest without definitive proof.", c: "Providing legal aid to a suspect.", d: "Doubting someone's technical skills." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Deciding to view a person's actions favorably when explicit evidence is missing."
  },
  {
    question: "What does 'Hit the nail on the head' mean?",
    answers: { a: "To drive a spike cleanly into wood.", b: "To say or do something that is precisely correct.", c: "To target an opponent's weak spot.", d: "To injure yourself accidentally." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Pinpointing the exact cause, answer, or nature of an issue."
  },
  {
    question: "What does the expression 'Ignorance is bliss' mean?",
    answers: { a: "Education leads to deep sadness.", b: "It is better or safer not to know the disturbing facts about a situation.", c: "Stupidity should be punished legally.", d: "Being unaware makes a person dangerous." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Suggests that not knowing bad news keeps a person happy and stress-free."
  },
  {
    question: "What does 'It takes two to tango' mean?",
    answers: { a: "A dance format requiring a couple.", b: "Both parties involved in a dispute or action share the responsibility.", c: "An activity that must be done double-time.", d: "A legal contract requires two witnesses." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Implies that a conflict or collaborative action cannot happen without both individuals actively participating."
  },
  {
    question: "What does 'Jump on the bandwagon' mean?",
    answers: { a: "To board a festival parade vehicle.", b: "To adopt a popular trend or opinion simply because everyone else is doing it.", c: "To change careers suddenly.", d: "To join a musical group." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Following a popular craze or climbing aboard a winning movement to be part of the crowd."
  },
  {
    question: "What does 'Keep something at bay' mean?",
    answers: { a: "To dock a boat safely in a harbor.", b: "To prevent something dangerous or problematic from coming too close.", c: "To store items in a warehouse.", d: "To study coastal geography." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "Holding off an enemy, disease, or problem at a safe distance."
  },
  {
    question: "What does 'Kill two birds with one stone' mean?",
    answers: { a: "An act of efficient hunting.", b: "To achieve two objectives through a single action.", c: "To solve a math equation twice.", d: "To make a double error." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Accomplishing two distinct positive outcomes with just one maneuver."
  },
  {
    question: "What does 'Leave no stone unturned' mean?",
    answers: { a: "To search an archaeological site improperly.", b: "To look everywhere and try every possible option to find a solution.", c: "To rearrange rock formations.", d: "To solve a simple riddle immediately." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "Exhausting every single possible avenue of research, investigation, or action."
  },
  {
    question: "What does 'Let the cat out of the bag' mean?",
    answers: { a: "To release a pet from a carrier box.", b: "To reveal a secret, often accidentally.", c: "To play a malicious trick on someone.", d: "To make an obvious statement." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Exposing a secret or surprise before the intended time."
  },
  {
    question: "What does the idiom 'Make a long story short' mean?",
    answers: { a: "To edit a book manuscript down.", b: "To skip unimportant details and get directly to the conclusion.", c: "To speak very quickly.", d: "To lie about historical events." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Condensing information into a brief overview to save time for the listener."
  },
  {
    question: "What does 'Miss the boat' mean?",
    answers: { a: "To drop your ferry ticket.", b: "To lose an opportunity by failing to act quickly enough.", c: "To be left stranded at a port.", d: "To misunderstand naval technology." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Arriving or deciding too late, causing you to lose out on a favorable break."
  },
  {
    question: "What does it mean if someone is 'On the ball'?",
    answers: { a: "Balancing safely on athletic equipment.", b: "Alert, competent, and quick to understand or react to things.", c: "Owning a lot of property.", d: "Playing a sports game defensively." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Being sharp, efficient, and highly attentive to duties or changes."
  },
  {
    question: "What does 'Once in a blue moon' mean?",
    answers: { a: "An astronomical occurrence every few years.", b: "Extremely rarely.", c: "On a sad night.", d: "Regularly once a month." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Used to describe events that occur with absolute minimal frequency."
  },
  {
    question: "What does 'Pull someone's leg' mean?",
    answers: { a: "To stretch an athlete's muscles.", b: "To joke or tease someone by telling them something false.", c: "To hold back a competitor.", d: "To ask someone for money." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Engaging in good-natured deception or kidding around with someone."
  },
  {
    question: "What does 'See eye to eye' mean?",
    answers: { a: "To maintain strong direct eye contact.", b: "To fully agree with someone on an issue.", c: "To match someone's physical height.", d: "To share the same optic prescription." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Sharing a common perspective, judgment, or agreement."
  },
  {
    question: "What does 'Sit on the fence' mean?",
    answers: { a: "To watch a game from a boundary wall.", b: "To delay making a decision or taking a side in an argument.", c: "To protect your territory.", d: "To relax without any worries." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Remaining neutral or uncommitted when forced to choose between two stances."
  },
  {
    question: "What does 'Spill the beans' mean?",
    answers: { a: "To ruin a culinary dish.", b: "To reveal a secret prematurely.", c: "To scatter items on the floor.", d: "To gossip about false events." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Unintentionally or deliberately blowing the cover on a secret."
  },
  {
    question: "What does 'Steal someone's thunder' mean?",
    answers: { a: "To replicate a sound effect.", b: "To take the praise or attention that belonged to another person's idea or achievement.", c: "To speak louder than everyone else.", d: "To win a race in a thunderstorm." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "Diminishing someone else's presentation or achievement by upstaging them first."
  },
  {
    question: "What does 'Take it with a grain of salt' mean?",
    answers: { a: "To measure dietary condiments carefully.", b: "To remain skeptical and not accept a claim as absolute truth.", c: "To listen with deep empathy.", d: "To feel angry about an insult." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "Approaching a rumor or statement with healthy suspicion or reservation."
  },
  {
    question: "What does 'The elephant in the room' refer to?",
    answers: { a: "An oversized object in a display area.", b: "A major, obvious problem that people choose to ignore because it is uncomfortable.", c: "An uninvited guest.", d: "A historical monument." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "An undeniable reality or critical topic that everyone purposefully avoids speaking about."
  },
  {
    question: "What does 'Through thick and thin' mean?",
    answers: { a: "Navigating across uneven terrain.", b: "Supporting someone through all hardships and good times alike.", c: "Measuring varying depths of liquid.", d: "Changing opinions constantly." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Unwavering commitment or presence across every phase of life's ups and downs."
  },
  {
    question: "What does 'Throw caution to the wind' mean?",
    answers: { a: "To act with supreme care.", b: "To act recklessly or take a bold risk without worrying about consequences.", c: "To check the direction of air currents.", d: "To accuse others without backing." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "Abandoning hesitation and jumping into a daring or risky action headfirst."
  },
  {
    question: "What does 'Under the weather' mean?",
    answers: { a: "Suffer from climate shock.", b: "Feeling slightly unwell, sick, or low in energy.", c: "Standing beneath shelter during rain.", d: "Having an accurate weather forecast." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Feeling indisposed, sub-par, or dealing with a mild physical illness."
  },
  {
    question: "What does 'Up in the air' mean?",
    answers: { a: "Floating high above.", b: "Unresolved, uncertain, or undecided.", c: "Highly ambitious.", d: "Angry and aggressive." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Refers to situations where a conclusion has not yet been locked in or determined."
  },
  {
    question: "What does 'Wild goose chase' mean?",
    answers: { a: "An organized tracking game.", b: "A frustrating, hopeless, and useless pursuit of something unattainable.", c: "A scientific study of waterfowl.", d: "A fast but successful operation." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "Spending valuable energy chasing a dead-end lead or impossible target."
  },
  {
    question: "What does 'Wolf in sheep's clothing' mean?",
    answers: { a: "A clever farm predator.", b: "A hostile or dangerous entity pretending to be gentle and trustworthy.", c: "A bizarre style trend.", d: "An animal that acts like a pet." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "An adversary who adopts a warm, safe exterior to catch targets off guard."
  },
  {
    question: "What does 'Wrap your head around something' mean?",
    answers: { a: "To protect your skull during a sport.", b: "To succeed in fully understanding a difficult, strange, or complex concept.", c: "To overthink simple details.", d: "To treat a head injury." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "Finding the conceptual capacity to untangle and comprehend an intricate puzzle or piece of news."
  },
  {
    question: "What does 'You can't judge a book by its cover' mean?",
    answers: { a: "You must read an entire novel to review it.", b: "Outward appearances can be deeply deceptive; value lies beneath.", c: "Publishers design misleading artwork.", d: "Cheap products always look bad." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Advises against evaluating the absolute worth or character of an object or person purely by aesthetics."
  },
  {
    question: "What is the meaning of the idiom 'A dime a dozen'?",
    answers: { a: "An expensive set of foreign coins.", b: "Extremely common and of very low value or importance.", c: "A profitable wholesale business deal.", d: "A rare collection of vintage items." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Used to classify things that are so abundant they have no special uniqueness or worth."
  },
  {
    question: "What does the expression 'An arm and a leg' stand for?",
    answers: { a: "A physical sacrifice.", b: "A massive, exorbitant amount of money.", c: "A medical package deal.", d: "An athletic measurement standard." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Implies that a purchase requires an unreasonably high financial expenditure."
  },
  {
    question: "What does it mean to be 'Back to square one'?",
    answers: { a: "Returning to your home base in a board game.", b: "Forced to return to the absolute beginning after a complete failure.", c: "Achieving a milestone early.", d: "Simplifying a mathematical problem." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Acknowledging that progress has been wiped out, necessitating a clean reset."
  },
  {
    question: "What does the phrase 'Barking up the wrong tree' describe?",
    answers: { a: "A dog mistracking a physical target.", b: "Pursuing an incorrect path or making an erroneous assumption.", c: "Arguing with an individual who has zero authority.", d: "Mistaking a plant species during field research." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Investing critical energy into an investigation or plan based on a false baseline premise."
  },
  {
    question: "What does 'Bite off more than you can chew' signify?",
    answers: { a: "Risking choking during a heavy meal.", b: "Committing to a workload or responsibility that exceeds your capacity.", c: "Behaving arrogantly toward a boss.", d: "Overestimating your physical speed." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Taking on an assignment or challenge that is far too immense to handle effectively."
  },
  {
    question: "What does 'Bite the bullet' imply?",
    answers: { a: "Facing an inevitable, painful situation with courage and stoicism.", b: "Enduring an impact during physical contact sports.", c: "Refusing to yield information under interrogation.", d: "Committing a sudden act of physical aggression." },
    correctAnswer: "a",
    category: "idioms",
    difficulty: "medium",
    explanation: "Accepting a tough reality without showing weakness or delaying the consequence."
  },
  {
    question: "What is the true meaning of 'Break a leg'?",
    answers: { a: "A severe accidental fracture.", b: "A traditional idiom used to wish actors or musicians a great performance.", c: "An aggressive instruction given to athletes.", d: "A description of sloppy movement." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "A phrase commonly spoken in theater circles to wish performers success without jinxing them."
  },
  {
    question: "What does 'Break the ice' accomplish?",
    answers: { a: "Clears frozen winter pathways.", b: "Eases social awkwardness or tension among unfamiliar people.", c: "Initiates a risky deep-sea expedition.", d: "Starts an intense, adversarial confrontation." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Creating a warm, conversational baseline to overcome initial social freezing."
  },
  {
    question: "What does 'Burn the midnight oil' entail?",
    answers: { a: "Wasting precious electrical units unnecessarily.", b: "Studying or working intensely through late hours of the night.", c: "Igniting combustible fuels inside a lab.", d: "Managing a night shift at a factory." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Investing overnight hours into a project, task, or academic study."
  },
  {
    question: "What does 'Call it a day' communicate?",
    answers: { a: "Declaring a formal calendar holiday.", b: "Deciding to stop working on a task or project for the evening.", c: "Ending a personal relationship permanently.", d: "Announcing the final completion of a career." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Signaling that the day's professional output is sufficient and it's time to rest."
  },
  {
    question: "What does 'Cut corners' mean in a professional context?",
    answers: { a: "Trimming the rough borders of a raw prototype.", b: "Bypassing protocols or quality standards to save time or cash, compromising results.", c: "Taking a more efficient transit route to work.", d: "Trimming excess fiscal spending safely." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Choosing a cheaper, faster path that intentionally leaves out essential quality or safety steps."
  },
  {
    question: "What does 'Cut to the chase' mean?",
    answers: { a: "Sprinting after an individual who escapes.", b: "Eliminating trivial chatter and directly addressing the main issue.", c: "Re-editing a cinema sequence for action continuity.", d: "Halting a sports event immediately." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Demanding that a speaker drop the introductory fluff and get to the core message."
  },
  {
    question: "What is the lesson of 'Don't count your chickens before they hatch'?",
    answers: { a: "Farming inventories must be updated strictly.", b: "Avoid making concrete plans based on speculative future successes.", c: "Never sell physical commodities before production is complete.", d: "Keep property assets secure against threats." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "A standard warning against assuming an expected reward is guaranteed before it physically materializes."
  },
  {
    question: "What does 'Face the music' require a person to do?",
    answers: { a: "Sing or play an instrument publicly.", b: "Accept the direct blame, criticism, or penalty for their errors.", c: "Attend a disciplinary corporate hearing quietly.", d: "Listen closely to acoustic feedback." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Stepping up to shoulder the unpleasant repercussions of one's own misconduct."
  },
  {
    question: "What happens when an event 'Gets out of hand'?",
    answers: { a: "An object slips cleanly away from a grip.", b: "The situation spirals out of reasonable management or boundaries.", c: "A meeting is dismissed early due to time constraints.", d: "A worker resigns from a role unexpectedly." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Refers to conditions or behaviors that cross into unmanageable, chaotic escalation."
  },
  {
    question: "What does 'Get a taste of your own medicine' mean?",
    answers: { a: "Sipping a harsh pharmaceutical cure.", b: "Experiencing the exact same negative treatment you typically show to others.", c: "Learning practical clinical biology.", d: "Overcoming a prolonged illness." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Receiving a dose of your own toxic behavior or cruelty back from the world."
  },
  {
    question: "What does 'Giving someone the benefit of the doubt' mean?",
    answers: { a: "Acquitting a suspect due to corrupted files.", b: "Choosing to trust a person's story or integrity when proof is inconclusive.", c: "Offering legal representation in a trial.", d: "Questioning a professional's specialized skill set." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Extending trust and assuming positive intent in the absence of solid contradictory evidence."
  },
  {
    question: "What does 'Hit the nail on the head' mean?",
    answers: { a: "Striking a metallic fastener with a hammer perfectly.", b: "Arriving at the precise correct answer or assessing a problem perfectly.", c: "Exposing a competitor's strategic error.", d: "Incurring an accidental impact injury." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Stating or executing something with absolute precision and accuracy."
  },
  {
    question: "What does 'Ignorance is bliss' imply?",
    answers: { a: "Academic institutions limit joy.", b: "Remaining unaware of uncomfortable truths can protect peace of mind.", c: "Negligence should be prosecuted.", d: "Lack of knowledge makes an individual vulnerable." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Suggests that not knowing stressful facts leaves a person in a state of untroubled comfort."
  },
  {
    question: "What is meant by 'It takes two to tango'?",
    answers: { a: "A specific partner dance style.", b: "A conflict or collaborative action requires the active role of both parties.", c: "An urgent procedure must be double-checked.", d: "A contract requires dual signatures." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Reminds us that both people in an argument or dynamic share responsibility for creating or maintaining it."
  },
  {
    question: "What does it mean to 'Jump on the bandwagon'?",
    answers: { a: "Climbing onto a parade car.", b: "Adopting an idea or trend solely because it has become popular.", c: "Shifting to a different corporate branch.", d: "Enrolling in a musical academy." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Aligning oneself with a popular movement simply to match the current social consensus."
  },
  {
    question: "What does it mean to 'Keep something at bay'?",
    answers: { a: "Anchoring a commercial cargo vessel inside a port.", b: "Successfully preventing an adverse or dangerous force from advancing.", c: "Storing raw inventory materials inside a warehouse.", d: "Conducting an ecological survey of coastlines." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "Warding off a threat or holding it back at a safe, non-impact distance."
  },
  {
    question: "What does 'Kill two birds with one stone' emphasize?",
    answers: { a: "High precision during wildlife tracking.", b: "Accomplishing two distinct positive outcomes via a single action.", c: "Causing incidental damage to property.", d: "Making a double arithmetic error." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Achieving dual objectives concurrently through one elegant, streamlined effort."
  },
  {
    question: "What does 'Leave no stone unturned' mean?",
    answers: { a: "Disrupting an archaeological layout.", b: "Exhausting every possible option and resource to find an answer.", c: "Re-stacking mineral formations.", d: "Answering a basic query instantly." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "Conducting an incredibly thorough investigation without skipping any potential lead."
  },
  {
    question: "What happens when you 'Let the cat out of the bag'?",
    answers: { a: "You let a domestic animal wander outside.", b: "You reveal classified or secret data, usually by accident.", c: "You manipulate an individual maliciously.", d: "You voice an incredibly obvious statement." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Leaking a confidential matter or surprise ahead of its scheduled disclosure."
  },
  {
    question: "What does 'Make a long story short' indicate?",
    answers: { a: "Trimming a textual document.", b: "Omitting trivial background facts to deliver the conclusion rapidly.", c: "Accelerating your verbal speaking pace.", d: "Fabricating real past occurrences." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Jumping directly to the core resolution of a complex narrative to save time."
  },
  {
    question: "What does 'Miss the boat' imply?",
    answers: { a: "Losing a physical travel ticket.", b: "Losing a critical opportunity because you failed to act in time.", c: "Being left behind at a shipping pier.", d: "Misinterpreting maritime rules." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Procrastinating or moving too slowly, causing an advantageous option to pass you by."
  },
  {
    question: "What does it mean when a professional is 'On the ball'?",
    answers: { a: "Maintaining a physical stance on an exercise sphere.", b: "Highly alert, competent, organized, and quick to respond.", c: "Possessing an immense portfolio of assets.", d: "Adopting a defensive posture in sports." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Demonstrating top-tier awareness, promptness, and mastery over your responsibilities."
  },
  {
    question: "What does 'Once in a blue moon' refer to?",
    answers: { a: "A celestial phenomenon occurring every few years.", b: "With extreme rarity or infrequency.", c: "An event marked by deep melancholy.", d: "An event occurring on a monthly cycle." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "An expression highlighting that a specific event occurs only once in a great while."
  },
  {
    question: "What are you doing when you 'Pull someone's leg'?",
    answers: { a: "Stretching a sports partner's limbs.", b: "Teasing or joking with them by feeding them a harmless untruth.", c: "Restraining a runner during a match.", d: "Requesting immediate financial aid." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Engaging in a friendly, lighthearted prank or deception for mutual amusement."
  },
  
  
  
  
  
  
  {
    question: "Identify the correct meaning of the idiom: 'A piece of cake'.",
    answers: { "a": "A delicious dessert.", "b": "Something that is very easy to do.", "c": "A small portion of a larger task.", "d": "A celebration or party." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "'A piece of cake' is a common colloquial expression used to describe a task or activity that requires minimal effort."
  },
  {
    question: "What does the idiom 'Pay through the nose' mean?",
    answers: { "a": "To suffer from a severe allergy.", "b": "To pay an unreasonably high price for something.", "c": "To make a cash payment reluctantly.", "d": "To receive an unexpected medical bill." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "Paying through the nose means spending an exorbitant, excessive amount of money on an item or service."
  },
  {
    question: "What is the meaning of the expression 'Break the bank'?",
    answers: { "a": "To commit a financial crime.", "b": "To cost more than one can afford.", "c": "To win a massive lottery prize.", "d": "To close a bank account permanently." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "If an item doesn't 'break the bank', it means it is reasonably priced and within your budget."
  },
  {
    question: "Identify the correct meaning of: 'Hit the sack'.",
    answers: { "a": "To start a physical fight.", "b": "To go to bed or go to sleep.", "c": "To pack your luggage for a trip.", "d": "To work out at a gym." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "An informal idiom meaning to prepare for sleep or head to bed for the night."
  },
  {
    question: "What does it mean to 'Give someone a piece of your mind'?",
    answers: { "a": "To share a creative concept.", "b": "To express your disapproval or anger directly to someone.", "c": "To offer intellectual assistance.", "d": "To forget an argument entirely." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Giving someone a piece of your mind means telling them off sharply because you are annoyed by their behavior."
  },
  {
    question: "What does 'Read between the lines' imply?",
    answers: { "a": "To read a text very slowly.", "b": "To understand a hidden meaning that is not directly stated.", "c": "To correct typographical errors.", "d": "To memorize a script thoroughly." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "It means perceiving the real, underlying message behind a statement or situation rather than just looking at the surface facts."
  },
  {
    question: "What is the meaning of 'Scrape the bottom of the barrel'?",
    answers: { "a": "To clean out a storage unit.", "b": "To use the worst or last remaining options available because there is nothing else.", "c": "To save money very efficiently.", "d": "To finish a delicious meal entirely." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "hard",
    explanation: "This idiom denotes being forced to choose from the poorest quality resources because the good ones have been exhausted."
  },
  {
    question: "What does it mean to 'Turn a blind eye'?",
    answers: { "a": "To suffer from temporary vision loss.", "b": "To pretend not to notice something, usually something wrong or illegal.", "c": "To look in a different direction quickly.", "d": "To guide a visually impaired person." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "Turning a blind eye means deliberately ignoring a specific truth, infraction, or situation."
  },
  {
    question: "What does the expression 'Water under the bridge' mean?",
    answers: { "a": "A dangerous river current.", "b": "Past events that are over, done with, and can no longer be changed or worried about.", "c": "An engineering flaw in infrastructure.", "d": "A major ongoing family argument." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "Refers to problems or conflicts from the past that are no longer considered important or worth fighting over."
  },
  {
    question: "What does it mean if you 'Wear your heart on your sleeve'?",
    answers: { "a": "To have a medical cardiac condition.", "b": "To display your emotions openly and transparently rather than hiding them.", "c": "To dress in highly fashionable attire.", "d": "To act impulsively during an emergency." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "Someone who wears their heart on their sleeve makes their true feelings immediately obvious to everyone around them."
  },
  {
    question: "What does the phrase 'Tip of the iceberg' mean?",
    answers: { "a": "A severe geographic hazard.", "b": "A tiny, visible part of a much larger, more complex problem.", c: "The most successful phase of a project.", "d": "A minor cold weather spell." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "It signifies that what is currently observed is only a small fraction of a massive hidden issue."
  },
  {
    question: "What does it mean to 'Break new ground'?",
    answers: { "a": "To work on a construction excavation project.", "b": "To innovate or do something that has never been done before.", "c": "To solve a basic gardening problem.", "d": "To damage your own property accidentally." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "Breaking new ground implies pioneering a unique path, discovery, or method in a field."
  },
  {
    question: "What does 'Burn the candle at both ends' mean?",
    answers: { "a": "To waste lighting supplies.", "b": "To exhaust yourself by working too hard from early morning until late at night.", "c": "To perform a magic trick.", "d": "To manage financial assets poorly." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "hard",
    explanation: "This idiom describes living a frantic life or overworking to the point of absolute physical depletion."
  },
  {
    question: "What does it mean to 'Chew the fat'?",
    answers: { "a": "To struggle with tough food items.", "b": "To chat in a friendly, leisurely way about unimportant things.", "c": "To complain about gym routines.", "d": "To think deeply about an investment." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "hard",
    explanation: "An old informal phrase that simply means engaging in prolonged, casual, and friendly conversation."
  },
  {
    question: "What is a 'Dark horse'?",
    answers: { "a": "A rare breed of equestrian animal.", "b": "A candidate or competitor about whom little is known but who wins unexpectedly.", "c": "A person who prefers night shifts.", "d": "A malicious political figure." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "A dark horse is an underdog who surprises everyone by achieving victory or massive prominence."
  },
  {
    question: "What does the phrase 'Dog days of summer' refer to?",
    answers: { "a": "A period when pets require extra care.", "b": "The hottest, most sultry days of the summer season.", "c": "The final days before the autumn harvest.", "d": "A festival celebrating local wildlife." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "Historically tied to the rising of the star Sirius, this phrase notes the peak oppressive heat of summer."
  },
  {
    question: "What does it mean to 'Draw the line'?",
    answers: { "a": "To sketch a boundary on a map.", "b": "To set a strict limit on what you will accept or allow.", "c": "To finish an architectural blueprint.", "d": "To cancel a business contract abruptly." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Drawing the line means establishing a firm boundary beyond which you refuse to proceed or compromise."
  },
  {
    question: "What does it mean to feel like a 'Fish out of water'?",
    answers: { "a": "To feel extremely thirsty or dehydrated.", "b": "To feel uncomfortable or awkward in an unfamiliar environment.", "c": "To experience sudden financial success.", "d": "To be highly skilled at swimming." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "It describes the alienation and discomfort felt when a person is placed in a setting completely alien to them."
  },
  {
    question: "What would a 'Fly on the wall' want to do?",
    answers: { "a": "To cause a minor pest distraction.", "b": "To listen to a private conversation without being noticed.", "c": "To inspect a room's physical cleanliness.", "d": "To escape from a sealed building." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "Wishing to be a fly on the wall means wanting to witness private interactions invisibly."
  },
  {
    question: "What does it mean when someone tells you to 'Get your act together'?",
    answers: { "a": "To prepare for a theatrical performance.", "b": "To organize your life or behavior more efficiently to achieve success.", "c": "To pack your belongings before moving.", "d": "To join a professional group." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "It is a firm piece of advice telling an unorganized or erratic person to start operating systematically."
  },
  {
    question: "What does it mean if a project 'Goes down in flames'?",
    answers: { "a": "It suffers from a literal fire accident.", "b": "It fails completely, spectacularly, and suddenly.", "c": "It receives harsh criticism online.", "d": "It achieves rapid popularity." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Going down in flames indicates a total, public, and catastrophic failure."
  },
  {
    question: "What does it mean to be 'Head over heels'?",
    answers: { "a": "To fall down a flight of stairs clumsily.", "b": "To be deeply, completely, and intensely in love.", "c": "To turn a cartwheel in sports.", "d": "To be incredibly confused by data." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "The full phrase is 'head over heels in love,' indicating complete infatuation or romantic devotion."
  },
  {
    question: "What does it mean to explain a concept 'In a nutshell'?",
    answers: { "a": "To use highly complex jargon.", "b": "To state something using as few words as possible; briefly.", "c": "To keep the details hidden from the public.", d: "To explain something during a meal." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "To put something in a nutshell means to compress a massive narrative into a short, concise summary."
  },
  {
    question: "Why would someone say 'Keep your fingers crossed'?",
    answers: { "a": "To indicate that they are lying.", "b": "To hope for good luck or a positive outcome.", "c": "To perform a physical therapeutic exercise.", "d": "To signal the end of a long meeting." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Crossing your fingers is a superstitious gesture used to invoke luck or positive results."
  },
  {
    question: "What does it mean to 'Keep an eye on' something?",
    answers: { "a": "To stare at an object without blinking.", "b": "To watch or monitor something or someone carefully.", "c": "To protect your own eyesight.", "d": "To look for lost belongings." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "It means supervising, tracking, or guarding a situation or asset closely."
  },
  {
    question: "What is the slang meaning of 'Kick the bucket'?",
    answers: { "a": "To damage cleaning equipment.", "b": "To die.", "c": "To express extreme anger.", "d": "To begin a difficult journey." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "A well-known, informal euphemism used to state that a person or animal has passed away."
  },
  {
    question: "What does the advice 'Let sleeping dogs lie' mean?",
    answers: { "a": "To treat household pets with kindness.", "b": "To avoid interfering in a situation that could cause trouble or arguments.", "c": "To skip morning exercises entirely.", "d": "To leave a workplace early." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "It suggests leaving a settled matter alone to prevent stirring up dormant conflicts or problems."
  },
  {
    question: "What does 'Make ends meet' mean?",
    answers: { "a": "To tie two loose ropes together.", "b": "To earn just enough money to pay for one's basic living expenses.", "c": "To schedule a corporate meeting successfully.", "d": "To finish a puzzle project." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "Making ends meet refers to managing a tight budget so that your income covers your basic survival bills."
  },
  {
    question: "What does 'No pain, no gain' imply?",
    answers: { "a": "Sustaining an injury makes you weak.", "b": "Suffering or hard work is completely necessary to achieve success or progress.", "c": "Medical treatments should be avoided.", "d": "Physical fitness requires zero effort." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "A common motto stating that meaningful improvement demands sacrifice and strenuous effort."
  },
  {
    question: "What does it mean when two people are 'On the same page'?",
    answers: { "a": "They are reading the exact same book copy.", "b": "They are in complete agreement or have the same understanding of a situation.", "c": "They are working in the same department.", "d": "They share the same academic qualifications." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Being on the same page implies alignment, synchronization, and harmony in thought or strategy."
  },
  {
    question: "What does 'Out of the frying pan into the fire' signify?",
    answers: { "a": "A common kitchen safety hazard.", "b": "Going from a bad situation to an even worse one.", "c": "Improving your circumstances dramatically.", "d": "Acting impulsively while cooking." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "It tracks a transition where escaping a minor trouble lands you squarely in a catastrophic crisis."
  },
  {
    question: "What does it mean to be 'Penny wise and pound foolish'?",
    answers: { "a": "Highly skilled at international currency trading.", "b": "Careful about small amounts of money but careless with large sums.", c: "An expert in micro-economics.", "d": "Hoarding cash resources needlessly." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "hard",
    explanation: "Describes someone who obsesses over trivial expenses but mismanages massive capital outlays, causing net losses."
  },
  {
    question: "What does it mean to 'Play second fiddle'?",
    answers: { "a": "To perform auxiliary music inside an orchestra.", "b": "To take a subordinate or lesser role relative to someone else.", "c": "To practice a backup hobby.", "d": "To delay an important corporate choice." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "Playing second fiddle means being treated as secondary or less influential compared to a dominant partner."
  },
  {
    question: "What does it mean to 'Put something on ice'?",
    answers: { "a": "To preserve fresh food items.", "b": "To delay or postpone a plan or project temporarily.", c: "To cancel a business venture permanently.", "d": "To host a winter sports event." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "Putting a concept on ice means freezing its momentum for now, intending to revisit it later."
  },
  {
    question: "What does the idiom 'Right off the bat' mean?",
    answers: { "a": "A sports event hit by a batsman.", "b": "Immediately, right from the very beginning.", "c": "Making a sudden error in judgement.", d: "Acting without proper tool gear." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "An expression that means taking action or introducing a fact instantaneously without any preamble."
  },
  {
    question: "What does it mean to 'Save for a rainy day'?",
    answers: { "a": "To purchase umbrellas ahead of a storm.", "b": "To reserve money or resources for a future time of financial need or crisis.", "c": "To plan an indoor event schedule.", "d": "To accumulate liquid water assets." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Advises practicing thriftiness by setting aside capital to act as a buffer for future emergencies."
  },
  {
    question: "What does it mean if you 'Smell a rat'?",
    answers: { "a": "To detect a pest control problem.", "b": "To suspect that something is wrong, dishonest, or deceptive in a situation.", "c": "To have a highly sensitive sense of smell.", "d": "To falsely accuse a coworker." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Smelling a rat means intuitively sensing a trap, betrayal, or underlying trickery before it is exposed."
  },
  {
    question: "What does it mean to 'Take the bull by the horns'?",
    answers: { "a": "To engage in dangerous livestock handling.", "b": "To face a difficult situation directly and with great courage.", c: "To act recklessly during a public debate.", "d": "To completely lose your temper." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "It denotes confronting a major obstacle decisively and proactively rather than avoiding it."
  },
  {
    question: "What does it mean to hear news 'Through the grapevine'?",
    answers: { "a": "To study agricultural information systems.", "b": "To learn or hear gossip via an informal network of rumors.", "c": "To receive an official corporate letter.", "d": "To misinterpret a clear conversation." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Hearing it through the grapevine means getting info passed along informally from person to person."
  },
  {
    question: "What happens if you are 'Up a creek without a paddle'?",
    answers: { "a": "You are stranded during an outdoor boating holiday.", "b": "You are in a difficult situation with absolutely no way to get out of it.", c: "You have completed a challenging task easily.", "d": "You have mismanaged an environmental project." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "Signifies being stuck in an highly unfavorable position completely devoid of resources or remedies."
  },
  {
    question: "What is the meaning of 'When pigs fly'?",
    answers: { "a": "A fantasy science-fiction trope.", "b": "Something that is completely impossible and will never happen.", c: "An event scheduled for the distant future.", "d": "A sudden weather anomaly." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "An ironical phrase used to emphasize that a specific scenario has zero probability of occurring."
  },
  {
    question: "What does 'Your guess is as good as mine' indicate?",
    answers: { "a": "We have both solved the riddle correctly.", "b": "I have absolutely no idea about the answer or situation.", c: "We are competing in a trivia match.", "d": "Your logic is flawed compared to mine." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Used when a speaker confesses that they share the exact same state of ignorance as the questioner."
  },
  {
    question: "What does it mean to 'Zip your lip'?",
    answers: { "a": "To suffer from cold dry skin.", "b": "To stop talking or keep a secret strictly.", "c": "To smile tightly for a photo.", "d": "To give an elegant speech." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "An informal command telling someone to be quiet or maintain strict confidentiality."
  },
  {
    question: "What does it mean to talk 'Behind someone's back'?",
    answers: { "a": "To speak in a soft whisper.", "b": "To criticize or gossip about someone when they are not present.", c: "To protect someone from a hazard.", "d": "To guide someone across an intersection." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Deceptive behavior involving speaking ill of an individual behind their back, violating their trust."
  },
  {
    question: "What does it mean to 'Bring home the bacon'?",
    answers: { "a": "To purchase groceries for a family dinner.", "b": "To earn the primary income that financially supports a household.", c: "To achieve a major cooking qualification.", "d": "To live an active agrarian lifestyle." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "It refers to working and bringing home a salary to sustain a domestic family's financial needs."
  },
  {
    question: "What does it mean to 'Call the shots'?",
    answers: { "a": "To operate a camera on a film set.", "b": "To be the person who controls a situation or makes the decisions.", c: "To predict sports match scores accurately.", "d": "To order drinks for a group." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "The individual who calls the shots possesses the absolute operational authority over a domain or team."
  },
  {
    question: "What does it mean if a person is 'Down to earth'?",
    answers: { "a": "They have a poor physical balance.", "b": "They are practical, realistic, friendly, and unpretentious.", c: "They are interested in environmental sciences.", "d": "They have recently fallen down." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "A complimentary phrase noting that a person is humble, grounded, and approachable despite potential high status."
  },
  {
    question: "What does it mean to 'Drive someone up the wall'?",
    answers: { "a": "To guide a vehicle dangerously.", "b": "To annoy, irritate, or frustrate someone intensely.", c: "To assist someone in climbing a barrier.", d: "To force someone to work late shifts." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "If a habit drives you up the wall, it completely breaks your patience and makes you highly exasperated."
  },
  {
    question: "What does the phrase 'Fit to a T' mean?",
    answers: { "a": "To form a geometric letter layout.", "b": "To fit perfectly or suit someone's needs with absolute precision.", c: "To undergo an athletic measurement.", "d": "To wear formal modern attire." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "Originating from the draftsman's T-square tool, it means something aligns with flawless accuracy."
  },
  {
    question: "What does it mean to 'Get the ball rolling'?",
    answers: { "a": "To kick an object in a football match.", "b": "To start a process, project, or action.", c: "To manage an athletic equipment budget.", d: "To cause a chaotic distraction." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Initiating the first step of an ongoing endeavor to establish operational momentum."
  },
  {
    question: "What does it mean to 'Go the extra mile'?",
    answers: { "a": "To miscalculate a driving distance.", "b": "To make a special effort that goes beyond what is strictly required or expected.", c: "To complete an intense cardiovascular run.", d: "To travel to a distant city unexpectedly." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Going the extra mile marks outstanding dedication where a person beats baseline targets to deliver excellent quality."
  },
  {
    question: "What does it mean if you have a 'Change of heart'?",
    answers: { "a": "To undergo a major surgical procedure.", "b": "To alter your opinion, decision, or feelings about something completely.", c: "To experience an intense emotional breakdown.", d: "To forget a previous promise entirely." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "A change of heart represents a profound shift in mindset, reversing a prior judgment or emotional stance."
  },
  {
    question: "What does it mean if a firm is 'In the red'?",
    answers: { "a": "They operate in a highly dangerous zone.", "b": "They are losing money and operating at a financial deficit.", c: "They have achieved great market popularity.", d: "They are dealing with high workplace stress." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Derived from bookkeeping where negative ledger entries were inked in red, indicating debt or loss."
  },
  {
    question: "What does it mean if a business is 'In the black'?",
    answers: { "a": "They are operating under a system of secrecy.", "b": "They are making a profit and are financially stable.", c: "They have completely run out of asset reserves.", d: "They are facing intense legal scrutiny." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Being in the black indicates positive financial health and operational profitability."
  },
  {
    question: "What does it mean to 'Keep a straight face'?",
    answers: { "a": "To maintain good posture during a photo.", "b": "To refrain from laughing or showing emotion when something is funny or serious.", c: "To look directly forward without turning.", d: "To act dishonestly without feeling guilt." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Suppressing the urge to smile or smirk during an awkward, funny, or intensely formal moment."
  },
  {
    question: "What is a 'Loose cannon'?",
    answers: { "a": "An unanchored piece of antique weaponry.", "b": "An unpredictable person who may cause damage or trouble because they lack control.", c: "A highly talkative professional.", d: "A strategic military vulnerability." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "A loose cannon represents an erratic element whose sudden volatile choices endanger the whole team."
  },
  {
    question: "What does it mean to speak 'Off the cuff'?",
    answers: { "a": "To whisper secrets to a neighbor.", "b": "To speak or give a speech spontaneously without prior preparation.", c: "To speak in an aggressive, accusatory tone.", d: "To read directly from a written manuscript." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "Delivering remarks extemporaneously on the spot, rather than working off structured notes."
  },
  {
    question: "What does it mean to 'Pass the buck'?",
    answers: { "a": "To trade currency units informally.", "b": "To shift responsibility or blame onto another person to avoid accountability.", c: "To lose a commercial bet.", d: "To offer a financial bribe safely." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "Deflecting personal blame or duty onto a subordinate or peer to protect oneself from fallout."
  },
  {
    question: "What happens when you 'Put your foot in your mouth'?",
    answers: { "a": "You pull a severe muscle during yoga.", "b": "You accidentally say something embarrassing, tactless, or hurtful.", c: "You make an excellent point in a debate.", d: "You choke on your food while talking." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Making a conversational blunder that inadvertently causes offense or severe social awkwardness."
  },
  {
    question: "What does it mean if a word is 'On the tip of my tongue'?",
    answers: { "a": "You are experiencing an oral taste sensation.", "b": "You are just about to remember a specific word or name but cannot quite recall it.", c: "You have accidentally revealed a major secret.", d: "You are speaking very rapidly." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "A frustrating state where a piece of information is active in memory but evades conscious retrieval."
  },
  {
    question: "What does the term 'Red tape' refer to?",
    answers: { "a": "Adhesive supplies used in manufacturing.", "b": "Excessive bureaucracy, regulations, or rules that delay progress.", c: "A boundary marker on a crime scene.", d: "An urgent security alert warning." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "An expression tracking back to historic legal documents tied in red string, highlighting slow administrative bloat."
  },
  {
    question: "What does it mean to 'Rule the roost'?",
    answers: { "a": "To manage a commercial poultry farm.", "b": "To be the most powerful or dominant person in a group or household.", c: "To enforce structural laws rigidly.", d: "To wake up early every morning." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "The individual who rules the roost holds undisputed domestic or group authority."
  },
  {
    question: "What is a 'Run of the mill' product?",
    answers: { "a": "An item engineered via industrial factories.", "b": "Completely ordinary, average, and unexciting; nothing special.", c: "A highly experimental prototype.", d: "An item produced at a massive financial loss." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "If a device or movie is run of the mill, it lacks any standout qualities or unique advantages."
  },
  {
    question: "What does it mean to arrive 'Safe and sound'?",
    answers: { "a": "To complete a trip with loud celebration.", "b": "Completely uninjured, safe, and healthy after a journey or danger.", c: "To check acoustic equipment parameters.", d: "To lock away your valuable personal belongings." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Reaching a destination without meeting any physical harm or adverse accidents along the path."
  },
  {
    question: "What is a 'Shot in the dark'?",
    answers: { "a": "A dangerous military firearm accident.", "b": "A complete guess or attempt made without any definitive backing data.", c: "A photo captured during night hours.", d: "A targeted critique aimed at an enemy." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Making a pure speculative attempt where you have no factual guidance to ensure success."
  },
  {
    question: "What is a 'Skeleton in the closet'?",
    answers: { "a": "An antique anatomical display piece.", "b": "A shocking or embarrassing secret fact that someone keeps hidden from others.", c: "A storage unit vulnerability problem.", d: "A terrifying horror fiction trope." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Represents private past indiscretions or failures that would ruin a reputation if unearthed."
  },
  {
    question: "What does it mean to 'Take a back seat'?",
    answers: { "a": "To choose a rear location inside a passenger car.", "b": "To assume a less prominent, active, or controlling role in an endeavor.", c: "To fail an essential driving examination.", d: "To allow others to complete your chores." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Stepping back from a leadership position to allow someone else to direct the course of action."
  },
  {
    question: "What does the expression 'The plot thickens' communicate?",
    answers: { "a": "A fictional story script is getting too long.", "b": "A situation is becoming much more complex, mysterious, or interesting.", c: "An agricultural soil condition is changing.", d: "A legal dispute is reaching a complete settlement." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Spoken when new details turn a straightforward scenario into an intricate riddle."
  },
  {
    question: "What does it mean to be 'Under lock and key'?",
    answers: { "a": "To lose your home entry keys completely.", "b": "Stored away securely and safely behind locks.", c: "Trapped inside an office workspace illegally.", d: "Subjected to rigorous academic testing." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Guarantees that an asset or file is fully locked down against potential theft or exposure."
  },
  {
    question: "What does it mean if performance is 'Up to par'?",
    answers: { "a": "It matches professional golf scoring metrics.", "b": "It meets the required, expected, or satisfactory standard.", c: "It sets an all-time global quality record.", d: "It is slightly below what was requested." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "If work is not up to par, it indicates that its quality is deficient or unacceptable."
  },
  {
    question: "What does it mean to be 'Wet behind the ears'?",
    answers: { "a": "Failing to dry yourself properly after bathing.", "b": "Inexperienced, naive, or very new to a specific profession or role.", c: "Highly sensitive to chilly winter weather conditions.", d: "Caught outdoors during a sudden heavy storm." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "Metaphorically derived from newborn livestock, describing a rookie who lacks practical street-smarts or professional experience."
  },
  {
    question: "What does it mean to pass an exam 'With flying colors'?",
    answers: { "a": "To paint an artistic spectrum diagram.", "b": "To achieve an incredibly high score or complete a task with total success.", c: "To pass a test via lenient grading parameters.", d: "To finish an assessment ahead of the time limit." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Originating from ships returning to port flying their flags to signal a triumphant naval victory."
  },
  {
    question: "What is 'Word of mouth' transmission?",
    answers: { "a": "An intensive verbal communication lecture.", "b": "The informal passing of information or recommendations from person to person orally.", c: "A dental medical health issue.", d: "A collection of local idioms and poetry." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Organic marketing or news sharing powered purely by organic social conversations."
  },
  {
    question: "What does it mean if someone is the 'Apple of my eye'?",
    answers: { "a": "A healthy fruit component of a diet.", "b": "A person who is deeply cherished, loved, and prized above all others.", c: "An individual who monitors your work strictly.", d: "A optical illusion pattern." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Refers to a favorite person who fills someone with immense pride and affection."
  },
  {
    question: "What is a 'Backseat driver'?",
    answers: { "a": "A secondary vehicle operator on a long trip.", "b": "A person who gives unwanted, annoying advice on how to do things.", c: "An uncertified driving training instructor.", d: "A passenger who prefers riding in rear seats." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "An irritating individual who micromanages actions they have zero operational control over."
  },
  {
    question: "What is a 'Bad egg'?",
    answers: { "a": "A spoiled dairy item in a kitchen.", "b": "A dishonest, untrustworthy, or malicious individual.", c: "A project that fails during the initial stage.", d: "An eccentric or unusual artistic concept." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "An old idiom used to classify a troublesome person who consistently breaks rules or acts deceptively."
  },
  {
    question: "What does 'Their bark is worse than their bite' mean?",
    answers: { "a": "An animal displaying aggressive behavior.", "b": "Someone who sounds fierce or angry but is actually harmless and gentle.", c: "An individual who makes hollow promises.", d: "A severe throat health issue." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Implies that a person's loud threats or strict words mask a fundamentally soft or safe interior."
  },
  {
    question: "What happens 'Behind the scenes'?",
    answers: { "a": "An action sequence occurring out of view on a stage or in private.", "b": "A set of background decorations are arranged.", c: "A technical error causes a system crash.", d: "A story plot line changes entirely." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Refers to the crucial structural work or negotiations that occur outside of public visibility."
  },
  {
    question: "What is a 'Big fish in a small pond'?",
    answers: { "a": "An oversized specimen inside an aquarium.", "b": "An influential, powerful person who dominates a very small local environment.", c: "A worker trapped in a minor corporate role.", d: "An ambitious business operating in a major city." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "Someone who enjoys massive status within a tiny, limited community but might be ordinary on a larger global scale."
  },
  {
    question: "What does a 'Bird's eye view' provide?",
    answers: { "a": "A highly detailed zoological data set.", "b": "An overall, panoramic view of a situation or landscape from high above.", c: "A highly flawed, restricted perspective.", d: "An optical illusion grid." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "A sweeping, high-altitude vantage point that captures the macro layout of an area or problem."
  },
  {
    question: "What does it mean to 'Bite your tongue'?",
    answers: { "a": "To cause an accidental injury while eating.", "b": "To stop yourself from saying something that might cause offense or trouble.", c: "To refuse to respond under direct pressure.", d: "To express sharp physical pain." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Forcing yourself to stay quiet despite having an intense urge to make an unhelpful comment."
  },
  {
    question: "What is the lesson of 'Blood is thicker than water'?",
    answers: { "a": "A fact regarding biological fluid density.", "b": "Family relationships and loyalties are stronger than any other bonds.", c: "Friendships matter more than relatives.", d: "Work ties take priority over family links." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "An ancient proverb asserting that allegiance to family supersedes obligations to outsiders."
  },
  {
    question: "What does it mean to 'Blow off steam'?",
    answers: { "a": "To release gas pressure from a boiler machine.", "b": "To get rid of strong, pent-up emotions or energy by doing something active.", c: "To express intense rage at a coworker.", d: "To relax completely inside a sauna room." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Engaging in harmless, physical, or recreational activities to clear out stress or anger safely."
  },
  {
    question: "What are you doing when you 'Call someone's bluff'?",
    answers: { "a": "Accusing someone of a criminal act.", "b": "Challenging someone to prove their threat or claim, believing they cannot do it.", c: "Joining in a collaborative card game.", d: "Exposing a minor administrative error." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "Forcing an opponent to back up their high-stakes posturing, expecting them to fail because they were faking."
  },
  {
    question: "What happens if you 'Can't make heads or tails of' something?",
    answers: { "a": "You are unable to finish a coin-toss game.", "b": "You are completely confused by it and cannot understand it at all.", c: "You have miscalculated a mathematical total.", d: "You are looking at an upside-down diagram." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Used when data, layout, or speech is so chaotic it defies logical comprehension."
  },
  {
    question: "What does it mean if a suspect is 'Caught red-handed'?",
    answers: { "a": "They have sustained an injury during an altercation.", "b": "They are discovered exactly while committing a crime or wrongdoing.", c: "They have a severe skin condition.", d: "They are found with corrupted evidence documents." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Apprehended mid-act with undeniable physical proof linking them directly to the misdeed."
  },
  {
    question: "What does it mean to 'Clear the air'?",
    answers: { "a": "To operate an environmental ventilation fan.", "b": "To resolve anger, hidden tension, or a misunderstanding by talking openly.", c: "To settle a complex corporate lawsuit.", d: "To step outside for a brief walk." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "Bringing hidden resentments into a frank conversation to restore harmony."
  },
  {
    question: "What is a 'Close shave'?",
    answers: { "a": "An exceptionally smooth barber trim.", "b": "A narrow escape from a serious accident, disaster, or failure.", c: "A highly precise surgical incision.", d: "A minor financial loss." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "A near-miss scenario where a tiny fraction of a second or inch separates safety from absolute disaster."
  },
  {
    question: "What does it mean to 'Come clean'?",
    answers: { "a": "To wash your hands thoroughly.", "b": "To confess the complete truth about something you kept hidden.", c: "To accept a fair legal settlement.", d: "To fix a technical coding error." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "Abandoning deception and stepping forward to give a full, honest admission."
  },
  {
    question: "What is a 'Couch potato'?",
    answers: { "a": "An unwashed agricultural product.", "b": "A lazy person who watches excessive amounts of television and avoids exercise.", c: "A comfortable piece of domestic furniture.", d: "A person who works night shifts constantly." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "easy",
    explanation: "A slang idiom tracking an inactive, highly sedentary lifestyle anchored in front of a screen."
  },
  {
    question: "What does it mean to 'Cut the rug'?",
    answers: { "a": "To damage a piece of carpet layout.", "b": "To dance in a highly energetic or skillful manner.", c: "To save money on domestic furnishing projects.", d: "To complete an intensive household chore." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "hard",
    explanation: "An old-fashioned, classic expression celebrating exceptional or vivacious dancing."
  },
  {
    question: "What does it mean to 'Dig your heels in'?",
    answers: { "a": "To perform a grounding athletic stretch.", "b": "To stubbornly refuse to change your mind, position, or choice.", c: "To work intensely on a difficult engineering project.", d: "To retreat from an aggressive argument." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "Adopting an unyielding, rigid stance against persuasion, compromises, or external demands."
  },
  {
    question: "What is a 'Double-edged sword'?",
    answers: { "a": "An ancient combat weaponry relic.", "b": "A situation or choice that has both positive advantages and negative consequences.", c: "A highly effective strategy that guarantees victory.", d: "A confusing contradiction in legal text." },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "medium",
    explanation: "An option where the exact same mechanism that aids you can concurrently trigger severe drawbacks."
  },
  
  
  
  {
    question: "What does the idiom 'A Pyrrhic victory' mean?",
    answers: { a: "A victory achieved at such a great cost that it is almost a defeat", b: "A surprise military attack", c: "A victory without effort", d: "A diplomatic success" },
    correctAnswer: "a",
    category: "idioms",
    difficulty: "hard",
    explanation: "A Pyrrhic victory brings more harm than benefit because of the heavy losses incurred."
},
{
    question: "What does the idiom 'Carry coals to Newcastle' mean?",
    answers: { a: "To engage in coal mining", b: "To do something superfluous or unnecessary", c: "To transport goods long distances", d: "To perform dangerous work" },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "hard",
    explanation: "The idiom refers to bringing something to a place that already has plenty of it."
},
{
    question: "What does the idiom 'Cut the Gordian knot' mean?",
    answers: { a: "To create a difficult problem", b: "To untangle a rope", c: "To solve a complex problem decisively", d: "To avoid responsibility" },
    correctAnswer: "c",
    category: "idioms",
    difficulty: "hard",
    explanation: "It means solving a difficult issue with bold and decisive action."
},
{
    question: "What does the idiom 'The sword of Damocles' signify?",
    answers: { a: "A powerful weapon", b: "An act of bravery", c: "A royal privilege", d: "An ever-present danger or threat" },
    correctAnswer: "d",
    category: "idioms",
    difficulty: "hard",
    explanation: "The idiom refers to a constant risk hanging over someone."
},
{
    question: "What does the idiom 'Burn the candle at both ends' mean?",
    answers: { a: "To exhaust oneself through excessive activity", b: "To save resources carefully", c: "To work only at night", d: "To celebrate extravagantly" },
    correctAnswer: "a",
    category: "idioms",
    difficulty: "hard",
    explanation: "It means overworking or overextending oneself."
},
{
    question: "What does the idiom 'A busman's holiday' mean?",
    answers: { a: "A holiday with free transportation", b: "A vacation spent doing the same type of work one normally does", c: "A public holiday", d: "An unexpected day off" },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "hard",
    explanation: "It describes spending leisure time engaged in one's usual occupation."
},
{
    question: "What does the idiom 'Bell the cat' mean?",
    answers: { a: "To warn everyone", b: "To catch a thief", c: "To undertake a dangerous task", d: "To expose a secret" },
    correctAnswer: "c",
    category: "idioms",
    difficulty: "hard",
    explanation: "It refers to taking responsibility for a risky action."
},
{
    question: "What does the idiom 'Go by the board' mean?",
    answers: { a: "To be discussed publicly", b: "To become successful", c: "To be carefully examined", d: "To be abandoned or neglected" },
    correctAnswer: "d",
    category: "idioms",
    difficulty: "hard",
    explanation: "It means something has been discarded or ignored."
},
{
    question: "What does the idiom 'Feather one's nest' mean?",
    answers: { a: "To enrich oneself, often dishonestly", b: "To decorate a home", c: "To help others prosper", d: "To prepare for winter" },
    correctAnswer: "a",
    category: "idioms",
    difficulty: "hard",
    explanation: "It means using one's position to gain personal wealth."
},
{
    question: "What does the idiom 'Cry stinking fish' mean?",
    answers: { a: "To complain loudly", b: "To speak badly of one's own cause", c: "To expose corruption", d: "To insult someone" },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "hard",
    explanation: "It means undermining your own argument or interests."
},
{
    question: "What does the idiom 'Throw down the gauntlet' mean?",
    answers: { a: "To surrender", b: "To remove a challenge", c: "To issue a challenge", d: "To lose a competition" },
    correctAnswer: "c",
    category: "idioms",
    difficulty: "hard",
    explanation: "It means to challenge someone to a contest or confrontation."
},
{
    question: "What does the idiom 'Eat humble pie' mean?",
    answers: { a: "To enjoy simple food", b: "To celebrate modestly", c: "To accept a difficult task", d: "To admit one's mistakes and apologize" },
    correctAnswer: "d",
    category: "idioms",
    difficulty: "hard",
    explanation: "It refers to admitting fault and being humbled."
},
{
    question: "What does the idiom 'Cross the Rubicon' mean?",
    answers: { a: "To pass a point of no return", b: "To cross a river", c: "To avoid conflict", d: "To start a journey" },
    correctAnswer: "a",
    category: "idioms",
    difficulty: "hard",
    explanation: "It means making an irreversible decision."
},
{
    question: "What does the idiom 'Put a spoke in someone's wheel' mean?",
    answers: { a: "To help someone progress", b: "To hinder someone's plans", c: "To repair something", d: "To encourage competition" },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "hard",
    explanation: "It means creating obstacles for someone."
},
{
    question: "What does the idiom 'Bear the brunt' mean?",
    answers: { a: "To escape punishment", b: "To share responsibility", c: "To endure the main impact of something unpleasant", d: "To win despite difficulties" },
    correctAnswer: "c",
    category: "idioms",
    difficulty: "hard",
    explanation: "It means suffering the worst part of an adverse situation."
},
{
    question: "What does the idiom 'Blow hot and cold' mean?",
    answers: { a: "To work in difficult weather", b: "To change one's attitude frequently", c: "To argue passionately", d: "To speak emotionally" },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "hard",
    explanation: "It refers to inconsistency in feelings or opinions."
},
{
    question: "What does the idiom 'Be on tenterhooks' mean?",
    answers: { a: "To be in a state of suspense or anxiety", b: "To be physically trapped", c: "To be overconfident", d: "To be under investigation" },
    correctAnswer: "a",
    category: "idioms",
    difficulty: "hard",
    explanation: "It means being very anxious while waiting for something."
},
{
    question: "What does the idiom 'Ride roughshod over' mean?",
    answers: { a: "To travel recklessly", b: "To dominate or treat others harshly", c: "To ignore directions", d: "To take risks" },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "hard",
    explanation: "It means acting without regard for others' rights or feelings."
},
{
    question: "What does the idiom 'Leave no stone unturned' mean?",
    answers: { a: "To destroy evidence", b: "To search carelessly", c: "To make every possible effort", d: "To hide something thoroughly" },
    correctAnswer: "c",
    category: "idioms",
    difficulty: "hard",
    explanation: "It means trying every possible method to achieve something."
},
{
    question: "What does the idiom 'At sixes and sevens' mean?",
    answers: { a: "In agreement", b: "In a mathematical discussion", c: "In a competitive mood", d: "In a state of confusion or disorder" },
    correctAnswer: "d",
    category: "idioms",
    difficulty: "hard",
    explanation: "It refers to being disorganized or confused."
},
{
    question: "What does the idiom 'Hobson's choice' mean?",
    answers: { a: "No real choice at all", b: "A difficult examination", c: "A lucky opportunity", d: "A business agreement" },
    correctAnswer: "a",
    category: "idioms",
    difficulty: "hard",
    explanation: "It means having only one option."
},
{
    question: "What does the idiom 'Hang fire' mean?",
    answers: { a: "To start a conflict", b: "To be delayed or hesitate", c: "To become angry", d: "To fail completely" },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "hard",
    explanation: "It means to postpone action or delay."
},
{
    question: "What does the idiom 'Take up the cudgels' mean?",
    answers: { a: "To practice a sport", b: "To collect evidence", c: "To defend or support a cause", d: "To challenge authority" },
    correctAnswer: "c",
    category: "idioms",
    difficulty: "hard",
    explanation: "It means actively supporting or defending someone or something."
},
{
    question: "What does the idiom 'Wash one's hands of' mean?",
    answers: { a: "To clean thoroughly", b: "To show innocence", c: "To make peace", d: "To refuse responsibility for something" },
    correctAnswer: "d",
    category: "idioms",
    difficulty: "hard",
    explanation: "It means disassociating oneself from a matter."
},
{
    question: "What does the idiom 'In the offing' mean?",
    answers: { a: "Likely to happen soon", b: "Out of sight forever", c: "At a distant place", d: "Officially announced" },
    correctAnswer: "a",
    category: "idioms",
    difficulty: "hard",
    explanation: "It refers to something expected in the near future."
},
  
  
  
  {
    question: "What does the idiom 'A mare's nest' mean?",
    answers: { a: "A place for horses", b: "A comfortable home", c: "An illusory discovery or a false invention", d: "A hidden treasure" },
    correctAnswer: "c",
    category: "idioms",
    difficulty: "hard",
    explanation: "A mare's nest refers to something mistakenly believed to be an important discovery."
},
{
    question: "What does the idiom 'Between Scylla and Charybdis' mean?",
    answers: { a: "Between two equally dangerous alternatives", b: "Lost at sea", c: "Surrounded by enemies", d: "Facing a legal problem" },
    correctAnswer: "a",
    category: "idioms",
    difficulty: "hard",
    explanation: "It means being caught between two undesirable choices."
},
{
    question: "What does the idiom 'Draw a blank' mean?",
    answers: { a: "To create an outline", b: "To fail to get a result or answer", c: "To erase evidence", d: "To postpone a decision" },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "hard",
    explanation: "It means being unable to remember or obtain something."
},
{
    question: "What does the idiom 'Have an axe to grind' mean?",
    answers: { a: "To sharpen tools", b: "To prepare for work", c: "To work hard for success", d: "To have a selfish motive" },
    correctAnswer: "d",
    category: "idioms",
    difficulty: "hard",
    explanation: "It refers to pursuing personal interests behind one's actions."
},
{
    question: "What does the idiom 'Keep the wolf from the door' mean?",
    answers: { a: "To avoid starvation or poverty", b: "To guard against animals", c: "To maintain security", d: "To protect one's family" },
    correctAnswer: "a",
    category: "idioms",
    difficulty: "hard",
    explanation: "It means earning enough to survive financially."
},
{
    question: "What does the idiom 'On the horns of a dilemma' mean?",
    answers: { a: "Facing physical danger", b: "Confronted with a difficult choice", c: "Winning a debate", d: "Being extremely angry" },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "hard",
    explanation: "It means being unable to choose between two difficult options."
},
{
    question: "What does the idiom 'Plough a lonely furrow' mean?",
    answers: { a: "To work in agriculture", b: "To avoid social gatherings", c: "To act independently without support", d: "To travel alone" },
    correctAnswer: "c",
    category: "idioms",
    difficulty: "hard",
    explanation: "It refers to pursuing one's own course without assistance."
},
{
    question: "What does the idiom 'Set the Thames on fire' mean?",
    answers: { a: "To commit a crime", b: "To become famous overnight", c: "To start a revolution", d: "To achieve something remarkable" },
    correctAnswer: "d",
    category: "idioms",
    difficulty: "hard",
    explanation: "Usually used negatively to suggest someone is unlikely to do anything remarkable."
},
{
    question: "What does the idiom 'Throw pearls before swine' mean?",
    answers: { a: "To offer something valuable to those who cannot appreciate it", b: "To waste money on luxuries", c: "To feed animals expensively", d: "To display wealth publicly" },
    correctAnswer: "a",
    category: "idioms",
    difficulty: "hard",
    explanation: "It means giving something precious to someone who does not value it."
},
{
    question: "What does the idiom 'A nine days' wonder' mean?",
    answers: { a: "A long-lasting mystery", b: "A short-lived sensation", c: "A difficult challenge", d: "A rare achievement" },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "hard",
    explanation: "It refers to something that attracts attention briefly and is soon forgotten."
},
{
    question: "What does the idiom 'Dance attendance on' mean?",
    answers: { a: "To entertain someone", b: "To attend a celebration", c: "To wait on someone eagerly", d: "To perform regularly" },
    correctAnswer: "c",
    category: "idioms",
    difficulty: "hard",
    explanation: "It means showing excessive attentiveness to someone."
},
{
    question: "What does the idiom 'A red-letter day' mean?",
    answers: { a: "A dangerous occasion", b: "A government holiday", c: "A day of mourning", d: "A very important or happy day" },
    correctAnswer: "d",
    category: "idioms",
    difficulty: "hard",
    explanation: "It signifies a memorable and significant occasion."
},
{
    question: "What does the idiom 'By fits and starts' mean?",
    answers: { a: "Irregularly and intermittently", b: "Quickly and efficiently", c: "Without interruption", d: "With great enthusiasm" },
    correctAnswer: "a",
    category: "idioms",
    difficulty: "hard",
    explanation: "It means proceeding unevenly with interruptions."
},
{
    question: "What does the idiom 'Go to the dogs' mean?",
    answers: { a: "To become popular", b: "To deteriorate badly", c: "To become aggressive", d: "To lose direction" },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "hard",
    explanation: "It means to decline in quality or condition."
},
{
    question: "What does the idiom 'Hold brief for' mean?",
    answers: { a: "To summarize a report", b: "To postpone judgment", c: "To support or defend someone", d: "To remain neutral" },
    correctAnswer: "c",
    category: "idioms",
    difficulty: "hard",
    explanation: "It means speaking or arguing in favor of someone."
},
{
    question: "What does the idiom 'In cold blood' mean?",
    answers: { a: "While ill", b: "In winter conditions", c: "After careful planning and without emotion", d: "In self-defense" },
    correctAnswer: "c",
    category: "idioms",
    difficulty: "hard",
    explanation: "It refers to acting deliberately and unemotionally."
},
{
    question: "What does the idiom 'Know the ropes' mean?",
    answers: { a: "To understand the details of a task", b: "To work on ships", c: "To tie knots expertly", d: "To teach others" },
    correctAnswer: "a",
    category: "idioms",
    difficulty: "hard",
    explanation: "It means being familiar with procedures and practices."
},
{
    question: "What does the idiom 'Pass the buck' mean?",
    answers: { a: "To hand over money", b: "To shift responsibility to someone else", c: "To transfer ownership", d: "To avoid travel expenses" },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "hard",
    explanation: "It means avoiding responsibility by blaming others."
},
{
    question: "What does the idiom 'Smell a rat' mean?",
    answers: { a: "To notice a bad odor", b: "To discover hidden treasure", c: "To suspect something is wrong", d: "To fear failure" },
    correctAnswer: "c",
    category: "idioms",
    difficulty: "hard",
    explanation: "It means sensing that something is suspicious."
},
{
    question: "What does the idiom 'Take French leave' mean?",
    answers: { a: "To go on vacation in France", b: "To leave secretly without permission", c: "To resign formally", d: "To travel abroad unexpectedly" },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "hard",
    explanation: "It means departing without informing others."
},
{
    question: "What does the idiom 'The lion's share' mean?",
    answers: { a: "The largest portion", b: "A risky investment", c: "A reward for bravery", d: "A royal privilege" },
    correctAnswer: "a",
    category: "idioms",
    difficulty: "hard",
    explanation: "It refers to the biggest part of something."
},
{
    question: "What does the idiom 'Turn the tables' mean?",
    answers: { a: "To rearrange furniture", b: "To reverse a situation in one's favor", c: "To start a new discussion", d: "To change locations" },
    correctAnswer: "b",
    category: "idioms",
    difficulty: "hard",
    explanation: "It means changing a disadvantage into an advantage."
},
{
    question: "What does the idiom 'Under a cloud' mean?",
    answers: { a: "Traveling in bad weather", b: "Living in poverty", c: "Being under suspicion or disfavor", d: "Feeling sleepy" },
    correctAnswer: "c",
    category: "idioms",
    difficulty: "hard",
    explanation: "It means being viewed with suspicion or criticism."
},
{
    question: "What does the idiom 'With a high hand' mean?",
    answers: { a: "Generously", b: "Skillfully", c: "Openly and honestly", d: "Arrogantly and overbearingly" },
    correctAnswer: "d",
    category: "idioms",
    difficulty: "hard",
    explanation: "It means behaving in a domineering manner."
},
{
    question: "What does the idiom 'Take the bull by the horns' mean?",
    answers: { a: "To confront a difficult situation boldly", b: "To work on a farm", c: "To challenge authority recklessly", d: "To act without thinking" },
    correctAnswer: "a",
    category: "idioms",
    difficulty: "hard",
    explanation: "It means facing a problem directly and courageously."
},
  
  
  
  

  // ==========================================
  // SECTION 3: SUBJECT-VERB AGREEMENT & SYNTAX (Category: agreement)
  // ==========================================
  
  
  
    {
    question: "Choose the sentence that demonstrates correct subject-verb agreement.",
    answers: { a: "A number of students has volunteered to help with the community clean-up.", b: "A number of students have volunteered to help with the community clean-up.", c: "A number of students is volunteering to help with the community clean-up.", d: "A number of students was volunteered to help with the community clean-up." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "medium",
    explanation: "While 'the number of' takes a singular verb, the phrase 'a number of' acts as a plural quantifier meaning 'several' or 'many', requiring a plural verb ('have volunteered')."
  },
  {
    question: "Which of the following sentences uses correct syntax?",
    answers: { a: "Romeo and Juliet is a classic tragedy written by William Shakespeare.", b: "Romeo and Juliet are a classic tragedy written by William Shakespeare.", c: "Romeo and Juliet were a classic tragedy written by William Shakespeare.", d: "Romeo and Juliet have been a classic tragedy written by William Shakespeare." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "easy",
    explanation: "When a compound subject joined by 'and' refers to a single book, play, movie, or artistic work, it takes a singular verb ('is')."
  },
  {
    question: "Select the sentence with accurate subject-verb agreement.",
    answers: { a: "Neither of the candidates are qualified for the position.", b: "Neither of the candidates were qualified for the position.", c: "Neither of the candidates have been qualified for the position.", d: "Neither of the candidates is qualified for the position." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "medium",
    explanation: "The pronoun 'Neither' is singular when used without 'nor' and followed by a prepositional phrase. It requires the singular verb 'is'."
  },
  {
    question: "Identify the grammatically correct sentence involving a collective noun.",
    answers: { a: "The committee has signed the report, indicating their full consensus.", b: "The committee have signed the report, indicating their full consensus.", c: "The committee were signing the report, indicating their full consensus.", d: "The committee are signing the report, indicating their full consensus." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "medium",
    explanation: "Since the committee acted as a unified collective unit to sign the report with full consensus, it takes the singular verb 'has signed'."
  },
  {
    question: "Which sentence correctly manages intervening prepositional phrases?",
    answers: { a: "The primary owner of the apartment complexes live out of state.", b: "The primary owner of the apartment complexes are living out of state.", d: "The primary owner of the apartment complexes were living out of state.", c: "The primary owner of the apartment complexes lives out of state." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "easy",
    explanation: "The true subject of the sentence is 'owner' (singular). The plural modifier 'of the apartment complexes' does not alter the number of the true subject, requiring the singular verb 'lives'."
  },
  {
    question: "Choose the sentence that treats units of measurement correctly.",
    answers: { a: "Three miles are too far for us to walk in this heavy rain.", b: "Three miles were too far for us to walk in this heavy rain.", c: "Three miles is too far for us to walk in this heavy rain.", d: "Three miles have been too far for us to walk in this heavy rain." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "easy",
    explanation: "A specific measurement of distance, time, or weight ('Three miles') is viewed as a singular, collective block of measurement and takes a singular verb ('is')."
  },
  {
    question: "Identify the correct option with proper indefinite pronoun agreement.",
    answers: { a: "Everyone in the advanced programming classes have passed the midterm exam.", b: "Everyone in the advanced programming classes are passing the midterm exam.", c: "Everyone in the advanced programming classes has passed the midterm exam.", d: "Everyone in the advanced programming classes were passing the midterm exam." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "easy",
    explanation: "The pronoun 'Everyone' is structurally singular and requires a singular verb ('has passed'), regardless of the plural noun 'classes' inside the modifier phrase."
  },
  {
    question: "Select the sentence that handles uncountable modifiers correctly.",
    answers: { a: "None of the water in the reservoirs were safe to drink after the storm.", b: "None of the water in the reservoirs are safe to drink after the storm.", c: "None of the water in the reservoirs have been safe to drink after the storm.", d: "None of the water in the reservoirs was safe to drink after the storm." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "medium",
    explanation: "The word 'None' can be singular or plural depending on the context. Because it modifies the mass/uncountable noun 'water', it takes the singular verb 'was'."
  },
  {
    question: "Which sentence uses the phrase 'a pair of' accurately?",
    answers: { a: "A new pair of work jeans are hanging in the utility closet.", b: "A new pair of work jeans is hanging in the utility closet.", c: "A new pair of work jeans were hanging in the utility closet.", d: "A new pair of work jeans have been hanging in the utility closet." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "easy",
    explanation: "While 'jeans' is a plural noun, the actual subject of the verb is the singular noun 'pair', which demands the singular verb 'is hanging'."
  },
  {
    question: "Choose the correct sentence involving correlative conjunctions.",
    answers: { a: "Not only the rebellious students but also the strict professor were surprised by the high scores.", b: "Not only the rebellious students but also the strict professor are surprised by the high scores.", c: "Not only the rebellious students but also the strict professor was surprised by the high scores.", d: "Not only the rebellious students but also the strict professor have been surprised by the high scores." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "medium",
    explanation: "When 'not only... but also' connects subjects of different numbers, the verb aligns with the closest subject. 'Professor' is singular, requiring 'was'."
  },
  {
    question: "Which option contains correct agreement with an inverted sentence structure?",
    answers: { a: "Beneath the old floorboards sits the lost documents from the 1920s.", b: "Beneath the old floorboards sitting the lost documents from the 1920s.", c: "Beneath the old floorboards sit the lost documents from the 1920s.", d: "Beneath the old floorboards is sitting the lost documents from the 1920s." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "hard",
    explanation: "In an inverted sentence starting with a prepositional phrase, the subject comes after the verb. The subject is 'documents' (plural), requiring the plural verb 'sit'."
  },
  {
    question: "Select the sentence with accurate syntax for an abstract field of study.",
    answers: { a: "Macroeconomics are a mandatory course for business majors.", b: "Macroeconomics is a mandatory course for business majors.", c: "Macroeconomics were a mandatory course for business majors.", d: "Macroeconomics have been a mandatory course for business majors." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "easy",
    explanation: "Academic disciplines ending in '-ics' like macroeconomics, logistics, and ethics are singular in concept and syntax, taking a singular verb ('is')."
  },
  {
    question: "Identify the sentence that handles 'The news' correctly.",
    answers: { a: "The latest news regarding the global stock markets are catastrophic.", b: "The latest news regarding the global stock markets were catastrophic.", c: "The latest news regarding the global stock markets have been catastrophic.", d: "The latest news regarding the global stock markets is catastrophic." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "easy",
    explanation: "The noun 'news' is structurally singular and uncountable, meaning it must always match with a singular verb form ('is')."
  },
  {
    question: "Choose the sentence that features an accurate 'there are' structure.",
    answers: { a: "Here is the spare keys that you forgot on the counter.", b: "Here are the spare keys that you forgot on the counter.", c: "Here was the spare keys that you forgot on the counter.", d: "Here has been the spare keys that you forgot on the counter." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "easy",
    explanation: "When starting a sentence with 'here' or 'there', the true subject follows the verb. 'Keys' is plural, which forces the use of 'are'."
  },
  {
    question: "Which statement shows a compound concept acting as a singular unit?",
    answers: { a: "Fish and chips are my grandfather's absolute favorite meal.", b: "Fish and chips were my grandfather's absolute favorite meal.", c: "Fish and chips is my grandfather's absolute favorite meal.", d: "Fish and chips have been my grandfather's absolute favorite meal." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "medium",
    explanation: "When two nouns connected by 'and' represent a single combination, entity, or culinary dish, the phrase functions as a singular subject and takes a singular verb ('is')."
  },
  {
    question: "Select the correct sentence using the 'many a' construction.",
    answers: { a: "Many a brave soldier have fallen in defense of this valley.", b: "Many a brave soldier are fallen in defense of this valley.", c: "Many a brave soldier were fallen in defense of this valley.", d: "Many a brave soldier has fallen in defense of this valley." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "hard",
    explanation: "The formal idiom 'many a' is followed strictly by a singular noun and requires a singular verb ('has fallen'), even though the expression implies a plural quantity."
  },
  {
    question: "Which option handles fraction agreement correctly with a plural object?",
    answers: { a: "Two-thirds of the missing artifacts has been recovered by archeologists.", b: "Two-thirds of the missing artifacts was recovered by archeologists.", c: "Two-thirds of the missing artifacts have been recovered by archeologists.", d: "Two-thirds of the missing artifacts is recovered by archeologists." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "medium",
    explanation: "When fractions modify a countable plural noun ('artifacts'), the subject is treated as plural, which means it requires a plural verb ('have been recovered')."
  },
  {
    question: "Choose the sentence with accurate relative pronoun agreement.",
    answers: { a: "She is one of those managers who micromanages every minor task.", b: "She is one of those managers who micromanage every minor task.", c: "She is one of those managers who is micromanaging every minor task.", d: "She is one of those managers who has micromanaged every minor task." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "hard",
    explanation: "In the phrase 'one of those [plural noun] who', the relative pronoun 'who' points back to the plural noun 'managers'. Therefore, the verb must be plural ('micromanage')."
  },
  {
    question: "Select the correct sentence involving gerund phrases.",
    answers: { a: "Analyzing complex datasets and coding automated scripts are exhausting work.", b: "Analyzing complex datasets and coding automated scripts were exhausting work.", c: "Analyzing complex datasets and coding automated scripts have been exhausting work.", d: "Analyzing complex datasets and coding automated scripts is exhausting work." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "hard",
    explanation: "When compound gerund phrases reflect an interconnected, single action or project, or describe a singular state of being ('work'), they take a singular verb ('is')."
  },
  {
    question: "Which of the following sentences utilizes the correct verb form?",
    answers: { a: "The majority of the population voted against the tax hike.", b: "The majority of the population vote against the tax hike.", c: "The majority of the population are voting against the tax hike.", d: "The majority of the population were voting against the tax hike." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "medium",
    explanation: "The word 'population' is a singular collective noun. Modified by 'the majority of', it denotes a single collective stance, calling for the singular past tense or singular agreement ('voted' fits universally, but option A matches basic singular framing best over plural options)."
  },
  {
    question: "Identify the correct option using parenthetical punctuation expressions.",
    answers: { a: "The CEO, accompanied by her legal advisors, are scheduled to arrive at noon.", b: "The CEO, accompanied by her legal advisors, were scheduled to arrive at noon.", c: "The CEO, accompanied by her legal advisors, is scheduled to arrive at noon.", d: "The CEO, accompanied by her legal advisors, have been scheduled to arrive at noon." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "medium",
    explanation: "Parenthetical expressions set off by commas, such as 'accompanied by', do not create a compound subject. The true subject remains 'The CEO' (singular), requiring 'is'."
  },
  {
    question: "Select the sentence with flawless subject-verb matching.",
    answers: { a: "Neither the players nor the coach are willing to accept the defeat.", b: "Neither the players nor the coach were willing to accept the defeat.", c: "Neither the players nor the coach have been willing to accept the defeat.", d: "Neither the players nor the coach is willing to accept the defeat." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "medium",
    explanation: "According to the proximity rule for 'neither... nor', the verb matches the closest subject noun. 'Coach' is singular, so it uses 'is'."
  },
  {
    question: "Which of the sentences adheres perfectly to syntactic rules?",
    answers: { a: "Mumps are a highly contagious viral infection that causes swelling.", b: "Mumps were a highly contagious viral infection that causes swelling.", c: "Mumps is a highly contagious viral infection that causes swelling.", d: "Mumps have been a highly contagious viral infection that causes swelling." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "easy",
    explanation: "Names of specific diseases that end in '-s' (like mumps, measles, or shingles) are singular concepts and require a singular verb ('is')."
  },
  {
    question: "Choose the option that reflects correct agreement with 'more than one'.",
    answers: { a: "More than one witness has confirmed the suspect's alibi.", b: "More than one witness have confirmed the suspect's alibi.", c: "More than one witness are confirming the suspect's alibi.", d: "More than one witness were confirming the suspect's alibi." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "hard",
    explanation: "Despite its plural meaning, the phrase 'more than one' followed by a singular noun requires a singular verb structure ('has confirmed') to match the singular noun form."
  },
  {
    question: "Select the sentence that handles collective action in the plural form correctly.",
    answers: { a: "The staff is divided on whether to switch to a four-day work week.", b: "The staff are divided on whether to switch to a four-day work week.", c: "The staff was divided on whether to switch to a four-day work week.", d: "The staff has been divided on whether to switch to a four-day work week." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "hard",
    explanation: "The word 'divided' implies individual disagreement among separate people within the group. When a collective noun acts as separate units, it takes a plural verb ('are')."
  },
  {
    question: "Identify the sentence that maintains correct agreement with indefinite quantities.",
    answers: { a: "Some of the cargo were ruined when water leaked into the hold.", b: "Some of the cargo have been ruined when water leaked into the hold.", c: "Some of the cargo are ruined when water leaked into the hold.", d: "Some of the cargo was ruined when water leaked into the hold." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "medium",
    explanation: "'Some' adapts to the noun it modifies. Because 'cargo' is treated here as an uncountable mass noun, 'some' functions as singular and takes 'was ruined'."
  },
  {
    question: "Which option shows proper agreement when dealing with singular relative pronouns?",
    answers: { a: "This is the only one of his books that are worth reading.", b: "This is the only one of his books that were worth reading.", c: "This is the only one of his books that have been worth reading.", d: "This is the only one of his books that is worth reading." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "hard",
    explanation: "The inclusion of 'the only one' changes the mechanics. The relative pronoun 'that' points back specifically to 'one' rather than 'books', requiring the singular verb 'is'."
  },
  {
    question: "Choose the correct sentence involving inverted phrasing and compound subjects.",
    answers: { a: "Out of the darkness emerges a wolf and her cubs.", b: "Out of the darkness emerge a wolf and her cubs.", c: "Out of the darkness was emerging a wolf and her cubs.", d: "Out of the darkness is emerging a wolf and her cubs." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "hard",
    explanation: "The true subject is compound: 'a wolf and her cubs' (plural). When the sentence structure is inverted, the verb must still match the plural subject ('emerge')."
  },
  {
    question: "Select the grammatically accurate sentence.",
    answers: { a: "Every book and magazine were replaced on the shelf after the inspection.", b: "Every book and magazine was replaced on the shelf after the inspection.", c: "Every book and magazine have been replaced on the shelf after the inspection.", d: "Every book and magazine are replaced on the shelf after the inspection." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "medium",
    explanation: "When a compound subject joined by 'and' is preceded by the word 'every' or 'each', the subject remains singular in syntax and takes a singular verb ('was replaced')."
  },
  {
    question: "Identify the correct option with proper numerical subject-verb agreement.",
    answers: { a: "Forty percent of the student body are from out of state.", b: "Forty percent of the student body were from out of state.", c: "Forty percent of the student body have been from out of state.", d: "Forty percent of the student body is from out of state." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "medium",
    explanation: "Percentages follow the noun in the prepositional phrase. 'Student body' is a singular collective noun, making the percentage singular and requiring 'is'."
  },
  {
    question: "Which sentence displays the correct syntax with titles?",
    answers: { a: "The Canterbury Tales are studied in most medieval literature classes.", b: "The Canterbury Tales were studied in most medieval literature classes.", c: "The Canterbury Tales is studied in most medieval literature classes.", d: "The Canterbury Tales have been studied in most medieval literature classes." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "easy",
    explanation: "Even though a title like 'The Canterbury Tales' ends in a plural noun, the title itself represents a single creative work, which dictates a singular verb ('is')."
  },
  {
    question: "Choose the sentence that correctly applies the proximity rule.",
    answers: { a: "Either the main engine or the backup generators are failing to start.", b: "Either the main engine or the backup generators is failing to start.", c: "Either the main engine or the backup generators was failing to start.", d: "Either the main engine or the backup generators has failed to start." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "medium",
    explanation: "With the correlative structure 'either... or', the verb agrees with the closest noun. 'Generators' is plural, which aligns perfectly with the plural verb 'are'."
  },
  {
    question: "Select the correct sentence involving indefinite pronouns.",
    answers: { a: "Both of the alternatives looks viable to the board.", b: "Both of the alternatives has looked viable to the board.", c: "Both of the alternatives look viable to the board.", d: "Both of the alternatives is looking viable to the board." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "easy",
    explanation: "The indefinite pronoun 'Both' is inherently plural and always requires a plural verb ('look')."
  },
  {
    question: "Which option contains a subject-verb agreement error corrected?",
    answers: { a: "The container of liquid chemicals have a small crack near the base.", b: "The container of liquid chemicals are having a small crack near the base.", c: "The container of liquid chemicals has a small crack near the base.", d: "The container of liquid chemicals were having a small crack near the base." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "easy",
    explanation: "The phrase 'of liquid chemicals' is an attribute modifying the core subject 'container' (singular). A singular subject requires a singular verb ('has')."
  },
  {
    question: "Identify the option that handles expressions of time correctly.",
    answers: { a: "Five years seem like an eternity when you are away from home.", b: "Five years seems like an eternity when you are away from home.", c: "Five years were seeming like an eternity when you are away from home.", d: "Five years are seeming like an eternity when you are away from home." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "medium",
    explanation: "A specific length of time ('Five years') functions as a singular unit of measurement, which means it takes a singular verb ('seems')."
  },
  {
    question: "Select the sentence with accurate syntax for compound modifiers.",
    answers: { a: "The captain, along with his crew members, was hailed as a hero.", b: "The captain, along with his crew members, were hailed as a hero.", c: "The captain, along with his crew members, are hailed as a hero.", d: "The captain, along with his crew members, have been hailed as a hero." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "medium",
    explanation: "Phrases like 'along with' do not expand the subject into a compound plural. The subject is still the singular 'captain', requiring the singular verb 'was'."
  },
  {
    question: "Which sentence matches a plural-form singular noun correctly?",
    answers: { a: "The acoustics in this new auditorium are absolutely phenomenal.", b: "The acoustics in this new auditorium is absolutely phenomenal.", c: "The acoustics in this new auditorium was absolutely phenomenal.", d: "The acoustics in this new auditorium has been absolutely phenomenal." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "hard",
    explanation: "While words ending in '-ics' are singular when denoting a field of study, they are plural when describing physical properties or traits (like the acoustic properties of a room), thus requiring 'are'."
  },
  {
    question: "Choose the sentence that handles collective group entities properly.",
    answers: { a: "The army are moving toward the northern border at dawn.", b: "The army were moving toward the northern border at dawn.", c: "The army is moving toward the northern border at dawn.", d: "The army have been moving toward the northern border at dawn." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "easy",
    explanation: "The collective noun 'army' functions as a unified singular block in this context, requiring the singular verb form 'is moving'."
  },
  {
    question: "Select the correct sentence with indefinite pronouns modifying plural objects.",
    answers: { a: "Most of the voters has already cast their ballots before noon.", b: "Most of the voters is already casting their ballots before noon.", d: "Most of the voters was already casting their ballots before noon.", c: "Most of the voters have already cast their ballots before noon." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "medium",
    explanation: "Because 'voters' is a countable plural noun, the modifying pronoun 'Most' operates as plural and requires the plural verb 'have cast'."
  },
  {
    question: "Identify the option with accurate inverted clause mechanics.",
    answers: { a: "There is several explanations for why the experiment failed.", b: "There was several explanations for why the experiment failed.", c: "There has been several explanations for why the experiment failed.", d: "There are several explanations for why the experiment failed." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "easy",
    explanation: "The real grammatical subject is 'explanations' (plural), meaning the introductory 'there' phrase must use the plural verb 'are'."
  },
  {
    question: "Which of the sentences exhibits perfect subject-verb matching?",
    answers: { a: "The pair of scissors were misplaced during the move.", b: "The pair of scissors have been misplaced during the move.", c: "The pair of scissors was misplaced during the move.", d: "The pair of scissors are misplaced during the move." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "medium",
    explanation: "Even though 'scissors' is inherently plural, the head of the noun phrase is the singular noun 'pair', making the subject singular and selecting 'was'."
  },
  {
    question: "Choose the option that represents an accurate fractional calculation.",
    answers: { a: "One-fourth of the cake were consumed during the party.", b: "One-fourth of the cake have been consumed during the party.", c: "One-fourth of the cake are consumed during the party.", d: "One-fourth of the cake was consumed during the party." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "medium",
    explanation: "The fraction 'One-fourth' modifies the singular, uncountable noun 'cake', which requires the singular verb 'was consumed'."
  },
  {
    question: "Select the sentence with accurate compound noun logic.",
    answers: { a: "Breaking and entering are a serious criminal offense.", b: "Breaking and entering is a serious criminal offense.", c: "Breaking and entering were a serious criminal offense.", d: "Breaking and entering have been a serious criminal offense." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "medium",
    explanation: "The compound phrase 'Breaking and entering' describes a single legal/criminal concept, so it acts as a singular subject and takes a singular verb ('is')."
  },
  {
    question: "Which sentence uses proper syntax when relative clauses are inserted?",
    answers: { a: "He is one of those authors who writes exclusively in the dark.", b: "He is one of those authors who write exclusively in the dark.", c: "He is one of those authors who is writing exclusively in the dark.", d: "He is one of those authors who has written exclusively in the dark." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "hard",
    explanation: "The relative clause 'who write' modifies 'authors' (plural), which is the true antecedent of 'who'. Therefore, it requires the plural verb 'write'."
  },
  {
    question: "Identify the grammatically perfect choice.",
    answers: { a: "Each of the draft proposals has been carefully reviewed.", b: "Each of the draft proposals have been carefully reviewed.", c: "Each of the draft proposals were carefully reviewed.", d: "Each of the draft proposals are carefully reviewed." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "easy",
    explanation: "The singular indefinite pronoun 'Each' is the subject of the sentence, which forces the choice of the singular verb 'has been reviewed'."
  },
  {
    question: "Select the sentence that handles parenthetical terms properly.",
    answers: { a: "The accountant, as well as her interns, are auditing the files.", b: "The accountant, as well as her interns, were auditing the files.", c: "The accountant, as well as her interns, have audited the files.", d: "The accountant, as well as her interns, is auditing the files." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "medium",
    explanation: "The phrase 'as well as her interns' is a parenthetical addition and doesn't change the number of the singular subject 'accountant', which takes 'is'."
  },
  {
    question: "Which option handles proximity and alternation accurately?",
    answers: { a: "Neither the supervisors nor the director have approved the budget.", b: "Neither the supervisors nor the director are approving the budget.", c: "Neither the supervisors nor the director is approving the budget.", d: "Neither the supervisors nor the director were approving the budget." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "medium",
    explanation: "In a 'neither... nor' configuration, the verb keys off the closest subject. 'Director' is singular, so the matching verb choice is 'is'."
  },
  {
    question: "Choose the correct sentence involving singular collective actions.",
    answers: { a: "The audience was clapping its hands in perfect synchronization.", b: "The audience were clapping its hands in perfect synchronization.", c: "The audience are clapping its hands in perfect synchronization.", d: "The audience have been clapping its hands in perfect synchronization." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "hard",
    explanation: "The phrase 'its hands' confirms that the collective noun 'audience' is viewed as a single, coordinated corporate group entity, selecting the singular verb 'was'."
  },
  {
    question: "Select the sentence with accurate syntax for plural measurement nouns.",
    answers: { a: "Fifty pounds are a lot of weight for a small child to carry.", b: "Fifty pounds is a lot of weight for a small child to carry.", c: "Fifty pounds were a lot of weight for a small child to carry.", d: "Fifty pounds have been a lot of weight for a small child to carry." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "easy",
    explanation: "Units of mass or weight ('Fifty pounds') are processed conceptually as a singular metric block, taking a singular verb ('is')."
  },
  {
    question: "Identify the correct option involving indefinite pronouns.",
    answers: { a: "Nobody in the research laboratories are allowed to enter without a badge.", b: "Nobody in the research laboratories were allowed to enter without a badge.", c: "Nobody in the research laboratories have been allowed to enter without a badge.", d: "Nobody in the research laboratories is allowed to enter without a badge." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "easy",
    explanation: "The singular indefinite pronoun 'Nobody' requires a singular verb match ('is allowed'), independent of the plural nouns inside the modifier phrase."
  },
  {
    question: "Which sentence demonstrates proper grammatical structure?",
    answers: { a: "The number of cybersecurity breaches has doubled since last year.", b: "The number of cybersecurity breaches have doubled since last year.", c: "The number of cybersecurity breaches are doubling since last year.", d: "The number of cybersecurity breaches were doubling since last year." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "medium",
    explanation: "'The number of' acts as a singular phrase highlighting the statistical figure itself, thus taking the singular verb form 'has doubled'."
  },
  {
    question: "Choose the accurate sentence with alternating plural subjects.",
    answers: { a: "Either the broken sensors or the loose wiring is causing the power outage.", b: "Either the broken sensors or the loose wiring are causing the power outage.", c: "Either the broken sensors or the loose wiring were causing the power outage.", d: "Either the broken sensors or the loose wiring have caused the power outage." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "medium",
    explanation: "According to the proximity rule for 'either... or', the verb must match 'wiring' (singular), making 'is' the correct choice."
  },
  {
    question: "Select the sentence with proper relative clause agreement syntax.",
    answers: { a: "This is one of the few houses on the street that has a fireplace.", b: "This is one of the few houses on the street that have a fireplace.", c: "This is one of the few houses on the street that is having a fireplace.", d: "This is one of the few houses on the street that was having a fireplace." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "hard",
    explanation: "The relative pronoun 'that' modifies the plural noun 'houses', meaning the dependent clause verb must be plural ('have')."
  },
  {
    question: "Which of the options features correct subject-verb coordination?",
    answers: { a: "Politics are a topic best avoided during family dinners.", b: "Politics were a topic best avoided during family dinners.", c: "Politics is a topic best avoided during family dinners.", d: "Politics have been a topic best avoided during family dinners." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "easy",
    explanation: "The word 'Politics' here refers to a generalized singular arena or concept, requiring the singular verb form 'is'."
  },
  {
    question: "Identify the correct option with an inverted structure and plural subjects.",
    answers: { a: "High above the mountain peak flies two majestic golden eagles.", b: "High above the mountain peak fly two majestic golden eagles.", c: "High above the mountain peak is flying two majestic golden eagles.", d: "High above the mountain peak has flown two majestic golden eagles." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "hard",
    explanation: "The true subject of this inverted sentence structure is 'two majestic golden eagles' (plural), which pairs with the plural verb 'fly'."
  },
  {
    question: "Select the sentence that manages percentage modifiers correctly.",
    answers: { a: "Ninety percent of the wall space was covered with vibrant graffiti.", b: "Ninety percent of the wall space were covered with vibrant graffiti.", c: "Ninety percent of the wall space are covered with vibrant graffiti.", d: "Ninety percent of the wall space have been covered with vibrant graffiti." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "medium",
    explanation: "Percentages are driven by the object noun. Because 'wall space' is singular and uncountable, 'Ninety percent' requires a singular verb ('was covered')."
  },
  {
    question: "Which sentence features an accurate collective noun division?",
    answers: { a: "The council has voted to table the motion until next month.", b: "The council have voted to table the motion until next month.", c: "The council are voting to table the motion until next month.", d: "The council were voting to table the motion until next month." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "easy",
    explanation: "The collective noun 'council' acts as a unified administrative body choosing to table a motion, requiring the singular verb 'has voted'."
  },
  {
    question: "Choose the grammatically sound sentence.",
    answers: { a: "Every employee and volunteer are required to attend training.", b: "Every employee and volunteer were required to attend training.", c: "Every employee and volunteer have been required to attend training.", d: "Every employee and volunteer is required to attend training." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "medium",
    explanation: "The introductory modifier 'Every' distributes across both subjects, forcing the entire compound noun to take a singular verb ('is required')."
  },
  {
    question: "Select the sentence with proper mathematical or quantitative syntax.",
    answers: { a: "Two plus two make four.", b: "Two plus two are making four.", c: "Two plus two makes four.", d: "Two plus two were making four." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "medium",
    explanation: "Mathematical operations or sums ('Two plus two') are viewed as singular mathematical truths and take a singular verb ('makes')."
  },
  {
    question: "Identify the correct option with intervening parenthetical syntax.",
    answers: { a: "The lead designer, together with his developers, have finished the layout.", b: "The lead designer, together with his developers, are finishing the layout.", c: "The lead designer, together with his developers, is finishing the layout.", d: "The lead designer, together with his developers, were finishing the layout." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "medium",
    explanation: "The phrase 'together with his developers' is a parenthetical modifier. The singular subject 'designer' controls the verb choice, selecting 'is finishing'."
  },
  {
    question: "Which sentence contains perfect relative clause mechanics?",
    answers: { a: "She is the only one of the candidates who have practical experience.", b: "She is the only one of the candidates who are having practical experience.", c: "She is the only one of the candidates who were having practical experience.", d: "She is the only one of the candidates who has practical experience." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "hard",
    explanation: "Because the text specifies 'the only one', the relative clause 'who' strictly modifies the singular word 'one' rather than 'candidates', requiring 'has'."
  },
  {
    question: "Select the option that shows correct noun/verb alignment.",
    answers: { a: "The binoculars is missing from the glove compartment.", b: "The binoculars are missing from the glove compartment.", c: "The binoculars has been missing from the glove compartment.", d: "The binoculars was missing from the glove compartment." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "easy",
    explanation: "Nouns like binoculars, trousers, and shears are plural items and naturally take a plural verb ('are missing') unless packaged with 'a pair of'."
  },
  {
    question: "Choose the correct sentence with indefinite quantities.",
    answers: { a: "All of the documents have been securely shredded.", b: "All of the documents has been securely shredded.", c: "All of the documents was securely shredded.", d: "All of the documents is securely shredded." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "easy",
    explanation: "'All' matches the plural noun 'documents', making the subject plural and dictating the use of the plural verb 'have been securely shredded'."
  },
  {
    question: "Identify the sentence that treats gerund phrases with perfect syntax.",
    answers: { a: "Running marathons and swimming channels requires immense stamina.", b: "Running marathons and swimming channels require immense stamina.", c: "Running marathons and swimming channels is requiring immense stamina.", d: "Running marathons and swimming channels has required immense stamina." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "hard",
    explanation: "Here, two distinct athletic activities ('Running marathons' and 'swimming channels') are combined with 'and' to form a plural compound subject, taking 'require'."
  },
  {
    question: "Select the sentence with valid syntax for measurement units.",
    answers: { a: "Ten dollars were the entry fee for the charity raffle.", b: "Ten dollars have been the entry fee for the charity raffle.", c: "Ten dollars are the entry fee for the charity raffle.", d: "Ten dollars was the entry fee for the charity raffle." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "easy",
    explanation: "A quantitative sum of money ('Ten dollars') acts as a single total cost unit, matching with the singular verb 'was'."
  },
  {
    question: "Which sentence utilizes proper subject-verb configuration with plural expressions?",
    answers: { a: "A variety of local organic vegetables is available at the market.", b: "A variety of local organic vegetables are available at the market.", c: "A variety of local organic vegetables has been available at the market.", d: "A variety of local organic vegetables was available at the market." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "hard",
    explanation: "When 'a variety of' describes an assortment of plural items, it behaves like a plural collective quantifier, selecting the plural verb 'are'."
  },
  {
    question: "Choose the correct sentence following the rule of proximity.",
    answers: { a: "Neither the faulty wiring nor the dead batteries are the main issue.", b: "Neither the faulty wiring nor the dead batteries is the main issue.", c: "Neither the faulty wiring nor the dead batteries was the main issue.", d: "Neither the faulty wiring nor the dead batteries has been the main issue." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "medium",
    explanation: "The closest subject noun to the verb is 'batteries' (plural), which forces the correlative construction to pick the plural verb 'are'."
  },
  {
    question: "Select the sentence that handles abstract corporate subjects correctly.",
    answers: { a: "The board of directors meets on the first Tuesday of every month.", b: "The board of directors meet on the first Tuesday of every month.", c: "The board of directors are meeting on the first Tuesday of every month.", d: "The board of directors were meeting on the first Tuesday of every month." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "medium",
    explanation: "The core subject is 'board' (singular collective noun), which works as a singular administrative entity to choose a schedule, taking 'meets'."
  },
  {
    question: "Identify the correct option involving indefinite pronoun objects.",
    answers: { a: "Someone in the upper tiers of management have leaked the secret memo.", b: "Someone in the upper tiers of management are leaking the secret memo.", c: "Someone in the upper tiers of management has leaked the secret memo.", d: "Someone in the upper tiers of management were leaking the secret memo." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "easy",
    explanation: "The core subject is the singular pronoun 'Someone'. Intervening plural phrases like 'upper tiers' do not affect it; it requires 'has leaked'."
  },
  {
    question: "Which of the sentences adheres perfectly to inverted sentence syntax?",
    answers: { a: "There goes the final two competitors of the obstacle race.", b: "There go the final two competitors of the obstacle race.", c: "There is going the final two competitors of the obstacle race.", d: "There has gone the final two competitors of the obstacle race." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "hard",
    explanation: "The true underlying grammatical subject is 'competitors' (plural), meaning the inverted sentence must employ the plural verb 'go'."
  },
  {
    question: "Select the sentence with accurate syntax for fractional components.",
    answers: { a: "Three-quarters of the raw material has already been processed.", b: "Three-quarters of the raw material have already been processed.", c: "Three-quarters of the raw material are already processed.", d: "Three-quarters of the raw material were already processed." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "medium",
    explanation: "The fraction 'Three-quarters' modifies 'material', which is an uncountable singular mass noun, dictating the singular verb 'has already been processed'."
  },
  {
    question: "Choose the correct sentence using parenthetical additions.",
    answers: { a: "The store manager, along with her security guards, were monitoring the exit.", b: "The store manager, along with her security guards, have been monitoring the exit.", c: "The store manager, along with her security guards, are monitoring the exit.", d: "The store manager, along with her security guards, was monitoring the exit." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "medium",
    explanation: "The subject 'manager' is singular. The modifier phrase 'along with her security guards' does not alter this, requiring the singular verb 'was monitoring'."
  },
  {
    question: "Identify the option with correct grammatical matching for fields of study.",
    answers: { a: "Aeronautics require a strong foundation in calculus and physics.", b: "Aeronautics is requiring a strong foundation in calculus and physics.", c: "Aeronautics requires a strong foundation in calculus and physics.", d: "Aeronautics have required a strong foundation in calculus and physics." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "easy",
    explanation: "The field of study 'Aeronautics' is treated as a singular noun concept, which correctly takes the singular verb form 'requires'."
  },
  {
    question: "Select the sentence with accurate collective pronoun agreement.",
    answers: { a: "The team are wearing their new custom jerseys for the final match.", b: "The team is wearing their new custom jerseys for the final match.", c: "The team was wearing their new custom jerseys for the final match.", d: "The team has been wearing their new custom jerseys for the final match." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "hard",
    explanation: "The use of the plural possessive pronoun 'their' indicates that the members of the team are acting as separate individuals putting on individual jerseys, making 'are' the proper verb."
  },
  {
    question: "Which sentence features proper syntax with plural-form units?",
    answers: { a: "Twenty kilometers are a exhausting distance to run without training.", b: "Twenty kilometers were an exhausting distance to run without training.", c: "Twenty kilometers have been an exhausting distance to run without training.", d: "Twenty kilometers is an exhausting distance to run without training." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "easy",
    explanation: "A designated singular metric statement of distance ('Twenty kilometers') works as an individual unit of value, thus taking 'is'."
  },
  {
    question: "Choose the grammatically sound option from the list below.",
    answers: { a: "Each of the digital files are scanned for malicious software.", b: "Each of the digital files were scanned for malicious software.", c: "Each of the digital files have been scanned for malicious software.", d: "Each of the digital files is scanned for malicious software." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "easy",
    explanation: "The indefinite pronoun 'Each' operates strictly as a singular subject, matching cleanly with the singular verb 'is scanned'."
  },
  {
    question: "Select the sentence with proper correlative syntax using singular/plural shifts.",
    answers: { a: "Not only the main server but also the local workstations have crashed.", b: "Not only the main server but also the local workstations has crashed.", c: "Not only the main server but also the local workstations is crashing.", d: "Not only the main server but also the local workstations was crashing." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "medium",
    explanation: "With 'not only... but also', the verb aligns with the nearest subject entity. 'Workstations' is plural, requiring 'have crashed'."
  },
  {
    question: "Identify the correct option involving complex singular compounds.",
    answers: { a: "The give-and-take of normal political negotiations are crucial for peace.", b: "The give-and-take of normal political negotiations is crucial for peace.", c: "The give-and-take of normal political negotiations were crucial for peace.", d: "The give-and-take of normal political negotiations have been crucial for peace." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "medium",
    explanation: "The complex compound noun 'give-and-take' represents an individual singular concept, pairing with the singular verb 'is'."
  },
  {
    question: "Which sentence displays perfect relative pronoun connection mechanics?",
    answers: { a: "He is one of those employees who works late every single night.", b: "He is one of those employees who work late every single night.", c: "He is one of those employees who is working late every single night.", d: "He is one of those employees who has worked late every single night." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "hard",
    explanation: "The relative clause 'who' targets 'employees' (plural) as its structural anchor, which means the verb inside the clause must be plural ('work')."
  },
  {
    question: "Select the sentence with accurate quantity/modifier distribution rules.",
    answers: { a: "Most of the workspace have been reorganized by the design staff.", b: "Most of the workspace are reorganized by the design staff.", c: "Most of the workspace were reorganized by the design staff.", d: "Most of the workspace has been reorganized by the design staff." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "medium",
    explanation: "The quantity pronoun 'Most' modifies 'workspace' (singular, uncountable), which requires the singular verb option 'has been reorganized'."
  },
  {
    question: "Choose the correct sentence containing inverted elements.",
    answers: { a: "Inside the ancient stone vault lies the legendary crown jewels.", b: "Inside the ancient stone vault is lying the legendary crown jewels.", c: "Inside the ancient stone vault lie the legendary crown jewels.", d: "Inside the ancient stone vault has lain the legendary crown jewels." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "hard",
    explanation: "The structural subject 'jewels' is plural. Because the sentence order is inverted, the preceding verb must be the plural form 'lie'."
  },
  {
    question: "Identify the option with flawless subject-verb integration.",
    answers: { a: "The number of applications received have reached an all-time high.", b: "The number of applications received has reached an all-time high.", c: "The number of applications received are reaching an all-time high.", d: "The number of applications received were reaching an all-time high." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "easy",
    explanation: "The noun phrase 'The number' behaves as a singular count variable, which demands the singular verb selection 'has reached'."
  },
  {
    question: "Select the sentence with correct syntax for title identifiers.",
    answers: { a: "Great Expectations are a masterpiece written by Charles Dickens.", b: "Great Expectations were a masterpiece written by Charles Dickens.", c: "Great Expectations have been a masterpiece written by Charles Dickens.", d: "Great Expectations is a masterpiece written by Charles Dickens." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "easy",
    explanation: "The plural proper noun title 'Great Expectations' addresses an individual uniform novel, dictating the singular verb 'is'."
  },
  {
    question: "Which of the options features accurate alternating agreement structure?",
    answers: { a: "Either the laboratory samples or the main testing apparatus are compromised.", b: "Either the laboratory samples or the main testing apparatus is compromised.", c: "Either the laboratory samples or the main testing apparatus were compromised.", d: "Either the laboratory samples or the main testing apparatus have been compromised." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "medium",
    explanation: "The alternating correlative 'either... or' links with 'apparatus' (singular) as the closest noun option, preferring the singular verb 'is'."
  },
  {
    question: "Choose the correct sentence featuring an intensive singular unit.",
    answers: { a: "Every window and door were locked securely prior to the storm.", b: "Every window and door have been locked securely prior to the storm.", c: "Every window and door was locked securely prior to the storm.", d: "Every window and door are locked securely prior to the storm." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "medium",
    explanation: "An introductory 'Every' changes the syntactic frame of a compound subject to singular, taking the singular verb form 'was locked'."
  },
  {
    question: "Select the sentence with accurate syntax for fractions and counts.",
    answers: { a: "One-fifth of the survey participants were unable to complete the form.", b: "One-fifth of the survey participants was unable to complete the form.", c: "One-fifth of the survey participants is unable to complete the form.", d: "One-fifth of the survey participants has been unable to complete the form." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "medium",
    explanation: "Since the fraction 'One-fifth' acts on 'participants' (countable plural noun), the phrase requires the plural verb 'were'."
  },
  {
    question: "Identify the correct option with parenthetical modifiers.",
    answers: { a: "The lead physician, accompanied by three senior nurses, are visiting the ward.", b: "The lead physician, accompanied by three senior nurses, were visiting the ward.", c: "The lead physician, accompanied by three senior nurses, is visiting the ward.", d: "The lead physician, accompanied by three senior nurses, have been visiting the ward." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "medium",
    explanation: "The comma-delimited modifier 'accompanied by...' does not affect the core subject number. 'Physician' is singular, requiring 'is'."
  },
  {
    question: "Which sentence utilizes proper grammatical structure with collective nouns?",
    answers: { a: "The committee has reached a final decision regarding the scholarship.", b: "The committee have reached a final decision regarding the scholarship.", c: "The committee are reaching a final decision regarding the scholarship.", d: "The committee were reaching a final decision regarding the scholarship." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "easy",
    explanation: "The collective group entity 'committee' functions under a unified purpose to make a decision, selecting the singular verb 'has reached'."
  },
  {
    question: "Choose the correct sentence containing indefinite expressions.",
    answers: { a: "Nobody in the surrounding residential neighborhoods are aware of the plan.", b: "Nobody in the surrounding residential neighborhoods were aware of the plan.", c: "Nobody in the surrounding residential neighborhoods have been aware of the plan.", d: "Nobody in the surrounding residential neighborhoods is aware of the plan." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "easy",
    explanation: "The indefinite singular pronoun 'Nobody' governs the verb choice entirely, rejecting plural options in favor of 'is'."
  },
  {
    question: "Select the sentence with proper quantitative structure.",
    answers: { a: "Ten minutes seem like a very short amount of time to pitch an idea.", b: "Ten minutes seems like a very short amount of time to pitch an idea.", c: "Ten minutes were seeming like a very short amount of time to pitch an idea.", d: "Ten minutes are seeming like a very short amount of time to pitch an idea." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "medium",
    explanation: "A unit measuring standard duration ('Ten minutes') maps to a singular conceptual standard, matching with 'seems'."
  },
  {
    question: "Identify the correct choice with complex double descriptors.",
    answers: { a: "Law and order are difficult to maintain during a major natural disaster.", b: "Law and order is difficult to maintain during a major natural disaster.", c: "Law and order were difficult to maintain during a major natural disaster.", d: "Law and order have been difficult to maintain during a major natural disaster." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "medium",
    explanation: "The phrase 'Law and order' acts as a singular political and social concept rather than separate items, requiring 'is'."
  },
  {
    question: "Which option represents an accurate relative pronoun assignment?",
    answers: { a: "This is one of the developments that makes the project worthwhile.", b: "This is one of the developments that make the project worthwhile.", c: "This is one of the developments that is making the project worthwhile.", d: "This is one of the developments that has made the project worthwhile." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "hard",
    explanation: "The relative clause anchor word is 'developments' (plural). Therefore, the verb inside the clause follows suit with 'make'."
  },
  {
    question: "Select the sentence with correct indefinite pronoun logic.",
    answers: { a: "Each of the local franchise locations are independently owned.", b: "Each of the local franchise locations were independently owned.", c: "Each of the local franchise locations is independently owned.", d: "Each of the local franchise locations have been independently owned." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "easy",
    explanation: "The singular subject pronoun 'Each' commands the sentence structure, filtering out plural options for the singular 'is'."
  },
  {
    question: "Choose the accurate sentence with alternating proximity constraints.",
    answers: { a: "Neither the principal investigator nor the lab assistants is available.", b: "Neither the principal investigator nor the lab assistants are available.", c: "Neither the principal investigator nor the lab assistants was available.", d: "Neither the principal investigator nor the lab assistants has been available." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "medium",
    explanation: "In a 'neither... nor' structure, the noun closest to the verb determines its form. 'Assistants' is plural, requiring 'are'."
  },
  {
    question: "Identify the option with correct grammatical matching for abstract collective entities.",
    answers: { a: "The public is demanding a full explanation from the city council.", b: "The public are demanding a full explanation from the city council.", c: "The public were demanding a full explanation from the city council.", d: "The public have been demanding a full explanation from the city council." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "medium",
    explanation: "The collective noun 'public' functions as a unified singular body in this context, matching with the singular verb form 'is demanding'."
  },
  {
    question: "Select the sentence with accurate syntax for compound relative statements.",
    answers: { a: "She is the only one of the designers who creates sustainable clothes.", b: "She is the only one of the designers who create sustainable clothes.", c: "She is the only one of the designers who are creating sustainable clothes.", d: "She is the only one of the designers who have created sustainable clothes." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "hard",
    explanation: "Because of the descriptive phrase 'the only one', the relative pronoun 'who' focuses on the singular 'one', matching with 'creates'."
  },
  {
    question: "Which of the options features perfect inverted structural syntax?",
    answers: { a: "Here comes the individual updates that you requested yesterday.", b: "Here was coming the individual updates that you requested yesterday.", c: "Here has come the individual updates that you requested yesterday.", d: "Here come the individual updates that you requested yesterday." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "medium",
    explanation: "The target inverted subject is 'updates' (plural), which dictates the matching plural verb choice 'come'."
  },
  {
    question: "Choose the correct sentence involving mass pronoun qualifiers.",
    answers: { a: "Most of the research data has been verified by independent experts.", b: "Most of the research data have been verified by independent experts.", c: "Most of the research data are verified by independent experts.", d: "Most of the research data were verified by independent experts." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "medium",
    explanation: "The noun 'data' can be treated as a collective mass noun in modern English syntax. Modified by 'Most of', it takes the singular verb 'has been verified'."
  },
  {
    question: "Select the sentence with proper measurement syntax.",
    answers: { a: "Five liters of fuel are all that remains in the secondary tank.", b: "Five liters of fuel were all that remains in the secondary tank.", c: "Five liters of fuel is all that remains in the secondary tank.", d: "Five liters of fuel have been all that remains in the secondary tank." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "easy",
    explanation: "A volumetric quantity ('Five liters') acts as an individual aggregate unit of measurement, which uses the singular verb 'is'."
  },
  {
    question: "Identify the correct option involving parenthetical modifiers.",
    answers: { a: "The structural engineer, along with her inspectors, are testing the concrete.", b: "The structural engineer, along with her inspectors, were testing the concrete.", c: "The structural engineer, along with her inspectors, have tested the concrete.", d: "The structural engineer, along with her inspectors, is testing the concrete." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "medium",
    explanation: "The parenthetical phrase 'along with her inspectors' does not make the subject plural. The singular 'engineer' matches with 'is testing'."
  },
  {
    question: "Which sentence displays perfect subject-verb matching with continuous quantities?",
    answers: { a: "A number of active cases have been reported in the rural county.", b: "A number of active cases has been reported in the rural county.", c: "A number of active cases is being reported in the rural county.", d: "A number of active cases was being reported in the rural county." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "medium",
    explanation: "The plural quantifier expression 'A number of' implies multiple individual entities, matching with the plural verb 'have been reported'."
  },
  {
    question: "Choose the grammatically sound option from the list below.",
    answers: { a: "Neither the primary document nor its appendices is ready for print.", b: "Neither the primary document nor its appendices was ready for print.", c: "Neither the primary document nor its appendices has been ready for print.", d: "Neither the primary document nor its appendices are ready for print." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "medium",
    explanation: "The closer subject to the verb position is 'appendices' (plural), forcing the choice of the plural verb form 'are ready'."
  },
  {
    question: "Select the sentence with proper corporate collective logic.",
    answers: { a: "The management team has decided to postpone the annual merger.", b: "The management team have decided to postpone the annual merger.", c: "The management team are deciding to postpone the annual merger.", d: "The management team were deciding to postpone the annual merger." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "easy",
    explanation: "The collective unit 'management team' functions under a single unified executive objective, selecting the singular verb 'has decided'."
  },
  {
    question: "Identify the correct option involving absolute indefinite pronouns.",
    answers: { a: "Everything on the experimental testing menus sound appetizing.", b: "Everything on the experimental testing menus sounds appetizing.", c: "Everything on the experimental testing menus were sounding appetizing.", d: "Everything on the experimental testing menus are sounding appetizing." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "easy",
    explanation: "The pronoun 'Everything' is structurally singular and always takes a singular verb form ('sounds'), despite the plural noun 'menus'."
  },
  {
    question: "Which sentence features accurate positional inverted agreement?",
    answers: { a: "Behind the heavy curtain stands two guards holding spears.", b: "Behind the heavy curtain is standing two guards holding spears.", c: "Behind the heavy curtain has stood two guards holding spears.", d: "Behind the heavy curtain stand two guards holding spears." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "hard",
    explanation: "The grammatical subject 'guards' is plural. In an inverted construction, the preceding verb matches it with the plural form 'stand'."
  },
  {
    question: "Select the sentence with accurate syntax for academic identifiers.",
    answers: { a: "Statistics is often considered a difficult course for new students.", b: "Statistics are often considered a difficult course for new students.", c: "Statistics were often considered a difficult course for new students.", d: "Statistics have been often considered a difficult course for new students." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "medium",
    explanation: "When 'Statistics' designates a singular academic subject area or course curriculum, it takes a singular verb ('is')."
  },
  {
    question: "Choose the correct sentence containing unique fraction distributions.",
    answers: { a: "Two-thirds of the missing wheat cargo were ruined by mold.", b: "Two-thirds of the missing wheat cargo have been ruined by mold.", c: "Two-thirds of the missing wheat cargo was ruined by mold.", d: "Two-thirds of the missing wheat cargo are ruined by mold." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "medium",
    explanation: "The fraction functions on 'wheat cargo' (singular mass noun), which dictates the selection of the singular verb 'was ruined'."
  },
  {
    question: "Identify the option with correct distributive modifier mechanics.",
    answers: { a: "Each system administrator and developer are given a secure key.", b: "Each system administrator and developer were given a secure key.", c: "Each system administrator and developer have been given a secure key.", d: "Each system administrator and developer is given a secure key." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "medium",
    explanation: "The distributive word 'Each' modifies the entire compound structure, resulting in a singular framework that requires 'is given'."
  },
  {
    question: "Select the sentence with accurate syntax for title items.",
    answers: { a: "The Arabian Nights contains many ancient folk tales.", b: "The Arabian Nights contain many ancient folk tales.", c: "The Arabian Nights are containing many ancient folk tales.", d: "The Arabian Nights were containing many ancient folk tales." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "easy",
    explanation: "The plural title 'The Arabian Nights' references one specific collection or book, demanding the singular verb 'contains'."
  },
  {
    question: "Which option handles structural relative pronoun agreement perfectly?",
    answers: { a: "She is one of those nurses who works double shifts on weekends.", b: "She is one of those nurses who work double shifts on weekends.", c: "She is one of those nurses who is working double shifts on weekends.", d: "She is one of those nurses who has worked double shifts on weekends." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "hard",
    explanation: "The relative clause anchor noun is the plural 'nurses'. Therefore, the relative pronoun 'who' requires the plural verb 'work'."
  },
  {
    question: "Choose the correct sentence containing collective entities acting separately.",
    answers: { a: "The jury are arguing over the specific meanings of the evidence.", b: "The jury is arguing over the specific meanings of the evidence.", c: "The jury was arguing over the specific meanings of the evidence.", d: "The jury has been arguing over the specific meanings of the evidence." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "hard",
    explanation: "The act of 'arguing' over evidence implies internal disagreement among individual members of the jury, shifting the collective noun to plural agreement ('are')."
  },
  {
    question: "Select the sentence with accurate proximity handling for alternate items.",
    answers: { a: "Either the broken pipe or the damaged valves is the cause.", b: "Either the broken pipe or the damaged valves are the cause.", c: "Either the broken pipe or the damaged valves was the cause.", d: "Either the broken pipe or the damaged valves has been the cause." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "medium",
    explanation: "The closest subject noun to the verb is 'valves' (plural), which forces the 'either... or' construct to choose the plural verb 'are'."
  },
  {
    question: "Identify the option with accurate introductory 'there' structure alignment.",
    answers: { a: "There are a long list of tasks that we need to finish today.", b: "There were a long list of tasks that we need to finish today.", c: "There have been a long list of tasks that we need to finish today.", d: "There is a long list of tasks that we need to finish today." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "medium",
    explanation: "The actual grammatical subject is 'list' (singular), which overrides the plural modifier 'of tasks' and matches with 'is'."
  },
  {
    question: "Which sentence utilizes proper parenthetical additive syntax?",
    answers: { a: "The chief officer, together with his deputies, is managing the crisis.", b: "The chief officer, together with his deputies, are managing the crisis.", c: "The chief officer, together with his deputies, were managing the crisis.", d: "The chief officer, together with his deputies, have managed the crisis." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "medium",
    explanation: "The core singular subject 'officer' is not made plural by the expression 'together with his deputies', requiring the singular verb 'is managing'."
  },
  {
    question: "Choose the grammatically sound option from the list below.",
    answers: { a: "Every computer and monitor have been tested for electrical defects.", b: "Every computer and monitor are tested for electrical defects.", c: "Every computer and monitor were tested for electrical defects.", d: "Every computer and monitor has been tested for electrical defects." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "medium",
    explanation: "The modifier 'Every' distributes a singular status to the entire compound subject phrase, selecting the singular verb 'has been tested'."
  },
  {
    question: "Select the sentence with proper relative clause constraint logic.",
    answers: { a: "This is the only one of the artifacts that are intact.", b: "This is the only one of the artifacts that were intact.", c: "This is the only one of the artifacts that have been intact.", d: "This is the only one of the artifacts that is intact." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "hard",
    explanation: "The restrictive phrase 'the only one' directs the relative pronoun 'that' to target the singular 'one', matching with 'is'."
  },
  {
    question: "Identify the correct option involving fractional quantities of countable items.",
    answers: { a: "One-half of the architectural blueprints were destroyed in the fire.", b: "One-half of the architectural blueprints was destroyed in the fire.", c: "One-half of the architectural blueprints is destroyed in the fire.", d: "One-half of the architectural blueprints has been destroyed in the fire." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "medium",
    explanation: "Fractions map to the object noun they evaluate. 'Blueprints' is a countable plural noun, requiring the plural verb 'were destroyed'."
  },
  {
    question: "Which sentence features accurate abstract discipline syntax?",
    answers: { a: "Thermodynamics deal with the relations between heat and other forms of energy.", b: "Thermodynamics deals with the relations between heat and other forms of energy.", c: "Thermodynamics are dealing with the relations between heat and other forms of energy.", d: "Thermodynamics were dealing with the relations between heat and other forms of energy." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "easy",
    explanation: "The scientific discipline 'Thermodynamics' is a singular fields-of-study noun phrase, matching with 'deals'."
  },
  {
    question: "Choose the correct sentence involving singular compound units.",
    answers: { a: "Spaghetti and meatballs are my absolute favorite Italian dish.", b: "Spaghetti and meatballs were my absolute favorite Italian dish.", c: "Spaghetti and meatballs is my absolute favorite Italian dish.", d: "Spaghetti and meatballs have been my absolute favorite Italian dish." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "easy",
    explanation: "When linked nouns describe a singular integrated dish or unit concept, the phrase acts as a singular subject and takes 'is'."
  },
  {
    question: "Select the sentence with accurate syntax for modern data collections.",
    answers: { a: "The financial data is ready for the upcoming corporate audit.", b: "The financial data are ready for the upcoming corporate audit.", c: "The financial data were ready for the upcoming corporate audit.", d: "The financial data have been ready for the upcoming corporate audit." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "medium",
    explanation: "In general financial and corporate contexts, 'data' is treated as a singular mass noun unit, perfectly aligning with 'is'."
  },
  {
    question: "Identify the option with correct subject matching for collective quantifiers.",
    answers: { a: "The number of qualified applicants is surprisingly low this term.", b: "The number of qualified applicants are surprisingly low this term.", c: "The number of qualified applicants were surprisingly low this term.", d: "The number of qualified applicants have been surprisingly low this term." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "easy",
    explanation: "The identifier 'The number' behaves structurally as an individual entity counting value, which selects the singular verb 'is'."
  },
  {
    question: "Which option handles alternating singular constructions perfectly?",
    answers: { a: "Neither the operations director nor the field supervisor are satisfied.", b: "Neither the operations director nor the field supervisor were satisfied.", c: "Neither the operations director nor the field supervisor have been satisfied.", d: "Neither the operations director nor the field supervisor is satisfied." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "medium",
    explanation: "Both connected nouns are singular, and 'supervisor' is the nearest subject to the verb, requiring the singular verb 'is'."
  },
  {
    question: "Choose the correct sentence containing inverted structure constraints.",
    answers: { a: "Deep inside the lush jungle grows rare species of orchids.", b: "Deep inside the lush jungle grow rare species of orchids.", c: "Deep inside the lush jungle is growing rare species of orchids.", d: "Deep inside the lush jungle has grown rare species of orchids." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "hard",
    explanation: "The true grammatical subject is 'species' (plural here, as signaled by 'rare species of orchids' growing collectively), requiring 'grow'."
  },
  {
    question: "Select the sentence with accurate syntax for quantitative blocks of value.",
    answers: { a: "Two hundred miles are a long distance to travel in one day.", b: "Two hundred miles were a long distance to travel in one day.", c: "Two hundred miles have been a long distance to travel in one day.", d: "Two hundred miles is a long distance to travel in one day." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "easy",
    explanation: "A total scalar unit of distance measurement ('Two hundred miles') is parsed as a single concept, selecting 'is'."
  },
  {
    question: "Identify the correct choice with complex parenthetical insertions.",
    answers: { a: "The editor, along with her top columnists, are reviewing the draft.", b: "The editor, along with her top columnists, were reviewing the draft.", c: "The editor, along with her top columnists, is reviewing the draft.", d: "The editor, along with her top columnists, have reviewed the draft." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "medium",
    explanation: "The parenthetical addition does not alter the underlying subject state. The singular 'editor' requires the singular verb 'is reviewing'."
  },
  {
    question: "Which sentence features proper relative clause connection metrics?",
    answers: { a: "He is one of those scientists who believes in extraterrestrial life.", b: "He is one of those scientists who believe in extraterrestrial life.", c: "He is one of those scientists who is believing in extraterrestrial life.", d: "He is one of those scientists who has believed in extraterrestrial life." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "hard",
    explanation: "The relative clause 'who' links back to the plural noun group 'scientists', matching with the plural verb form 'believe'."
  },
  {
    question: "Select the sentence with correct syntax for indefinite items.",
    answers: { a: "Each of the local test segments has been completed successfully.", b: "Each of the local test segments have been completed successfully.", c: "Each of the local test segments were completed successfully.", d: "Each of the local test segments are completed successfully." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "easy",
    explanation: "The definitive singular indefinite pronoun 'Each' commands the syntax, selecting the singular verb form 'has been completed'."
  },
  {
    question: "Choose the accurate sentence with alternating plural subjects.",
    answers: { a: "Either the project manager or the sub-contractors have the keys.", b: "Either the project manager or the sub-contractors has the keys.", c: "Either the project manager or the sub-contractors is having the keys.", d: "Either the project manager or the sub-contractors was having the keys." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "medium",
    explanation: "The closer subject to the verb is the plural noun 'sub-contractors', matching with the plural verb 'have'."
  },
  {
    question: "Identify the option with correct grammatical matching for aggregate expressions.",
    answers: { a: "A total of twenty parameters was adjusted during the system check.", b: "A total of twenty parameters were adjusted during the system check.", c: "A total of twenty parameters are adjusted during the system check.", d: "A total of twenty parameters have been adjusted during the system check." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "hard",
    explanation: "The phrase 'A total' acts as the principal singular subject head of the sentence phrase, requiring the singular verb form 'was adjusted'."
  },
  {
    question: "Select the sentence with accurate syntax for title items.",
    answers: { a: "The Elements of Style remains an essential handbook for writers.", b: "The Elements of Style remain an essential handbook for writers.", c: "The Elements of Style are remaining an essential handbook for writers.", d: "The Elements of Style were remaining an essential handbook for writers." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "easy",
    explanation: "The proper noun title 'The Elements of Style' maps onto one single specific textbook entity, requiring 'remains'."
  },
  {
    question: "Which of the options features perfect inverted structural syntax?",
    answers: { a: "There is several critical flaws in the architectural blueprint.", b: "There was several critical flaws in the architectural blueprint.", c: "There has been several critical flaws in the architectural blueprint.", d: "There are several critical flaws in the architectural blueprint." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "easy",
    explanation: "The true underlying structural subject is 'flaws' (plural), which forces the introductory construction to select 'are'."
  },
  {
    question: "Choose the correct sentence involving plural modifiers.",
    answers: { a: "The quality of these manufacturing materials is exceptionally high.", b: "The quality of these manufacturing materials are exceptionally high.", c: "The quality of these manufacturing materials were exceptionally high.", d: "The quality of these manufacturing materials have been exceptionally high." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "easy",
    explanation: "The sentence subject is 'quality' (singular). The intervening plural phrase 'of these manufacturing materials' does not alter the verb 'is'."
  },
  {
    question: "Select the sentence with accurate syntax for mass quantities.",
    answers: { a: "Most of the spilled chemical has evaporated from the floor.", b: "Most of the spilled chemical have evaporated from the floor.", c: "Most of the spilled chemical are evaporated from the floor.", d: "Most of the spilled chemical were evaporated from the floor." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "medium",
    explanation: "'Most' scales down to match the singular noun 'chemical', configuring the sentence to require the singular verb 'has evaporated'."
  },
  {
    question: "Identify the option with correct compound logic fields.",
    answers: { a: "Every man and woman are eligible to apply for the grant.", b: "Every man and woman were eligible to apply for the grant.", c: "Every man and woman is eligible to apply for the grant.", d: "Every man and woman have been eligible to apply for the grant." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "medium",
    explanation: "The inclusion of the distributor 'Every' transforms the compound subject structure into a singular framework, matching with 'is'."
  },
  {
    question: "Which sentence displays perfect subject-verb matching with numeric variables?",
    answers: { a: "Ten percent of the missing volume has been recovered by the team.", b: "Ten percent of the missing volume have been recovered by the team.", c: "Ten percent of the missing volume are recovered by the team.", d: "Ten percent of the missing volume were recovered by the team." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "medium",
    explanation: "The percentage aligns with 'volume' (singular noun), which requires the singular verb option 'has been recovered'."
  },
  {
    question: "Choose the grammatically sound option from the list below.",
    answers: { a: "Neither the employees nor the line manager are aware of the shift.", b: "Neither the employees nor the line manager were aware of the shift.", c: "Neither the employees nor the line manager is aware of the shift.", d: "Neither the employees nor the line manager have been aware of the shift." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "medium",
    explanation: "The proximity rule dictates that the verb matches 'manager' (singular), requiring the choice of the singular verb 'is'."
  },
  {
    question: "Select the sentence with proper relative clause connection mechanics.",
    answers: { a: "This is one of the machines that require daily calibration.", b: "This is one of the machines that requires daily calibration.", c: "This is one of the machines that is requiring daily calibration.", d: "This is one of the machines that has required daily calibration." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "hard",
    explanation: "The relative clause 'that' modifies the plural entity 'machines', which calls for the matching plural verb form 'require'."
  },
  {
    question: "Identify the correct option involving mass indefinite pronouns.",
    answers: { a: "None of the leaked documentation have been verified by corporate.", b: "None of the leaked documentation are verified by corporate.", d: "None of the leaked documentation were verified by corporate.", c: "None of the leaked documentation was verified by corporate." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "medium",
    explanation: "Because 'documentation' functions as an uncountable singular mass noun, 'None' acts as singular, taking the singular verb 'was verified'."
  },
  {
    question: "Which sentence features accurate positional inverted structural syntax?",
    answers: { a: "On the table sits a map and a pair of old compasses.", b: "On the table sit a map and a pair of old compasses.", c: "On the table was sitting a map and a pair of old compasses.", d: "On the table is sitting a map and a pair of old compasses." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "hard",
    explanation: "The true compound grammatical subject is 'a map and a pair' (plural), which forces the inverted verb to take the plural form 'sit'."
  },
  {
    question: "Select the sentence with accurate syntax for quantitative calculations.",
    answers: { a: "Three hours is a long time to wait in an empty reception room.", b: "Three hours are a long time to wait in an empty reception room.", c: "Three hours were a long time to wait in an empty reception room.", d: "Three hours have been a long time to wait in an empty reception room." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "easy",
    explanation: "A specific block of duration ('Three hours') acts as an individual aggregate unit of measurement, selecting the singular verb 'is'."
  },
  {
    question: "Choose the correct sentence involving complex descriptive modifiers.",
    answers: { a: "The general manager, along with his assistants, are leaving now.", b: "The general manager, along with his assistants, were leaving now.", c: "The general manager, along with his assistants, is leaving now.", d: "The general manager, along with his assistants, have been leaving now." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "easy",
    explanation: "The descriptive addition does not alter the head subject noun status. The singular 'manager' requires the singular verb 'is leaving'."
  },
  {
    question: "Identify the option with correct subject matching for collective categories.",
    answers: { a: "The audience are raising their glowing phones during the acoustic song.", b: "The audience is raising their glowing phones during the acoustic song.", c: "The audience was raising their glowing phones during the acoustic song.", d: "The audience has been raising their glowing phones during the acoustic song." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "hard",
    explanation: "The plural possessive marker 'their' reveals that the individuals in the audience are acting independently with separate phones, requiring 'are'."
  },
  {
    question: "Which option handles alternating plural structures perfectly?",
    answers: { a: "Either the local network line or the main servers is offline.", b: "Either the local network line or the main servers are offline.", c: "Either the local network line or the main servers was offline.", d: "Either the local network line or the main servers has been offline." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "medium",
    explanation: "The closest noun phrase to the verb is 'servers' (plural), which dictates that the correlative structure select 'are'."
  },
  {
    question: "Choose the correct sentence containing unique quantitative bounds.",
    answers: { a: "A total of fifty distinct records were reviewed during the audit.", b: "A total of fifty distinct records was reviewed during the audit.", c: "A total of fifty distinct records are reviewed during the audit.", d: "A total of fifty distinct records have been reviewed during the audit." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "hard",
    explanation: "The head noun phrase 'A total' operates as a singular metric block in formal writing, requiring the singular verb choice 'was reviewed'."
  },
  {
    question: "Select the sentence with accurate syntax for title items.",
    answers: { a: "The Canterbury Tales is still read in modern university courses.", b: "The Canterbury Tales are still read in modern university courses.", c: "The Canterbury Tales were still read in modern university courses.", d: "The Canterbury Tales have been still read in modern university courses." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "easy",
    explanation: "The classic title text 'The Canterbury Tales' addresses an individual uniform literary creation, requiring the singular verb 'is'."
  },
  {
    question: "Identify the correct choice with complex relative pronoun structures.",
    answers: { a: "She is the only one of the players who has won a championship title.", b: "She is the only one of the players who have won a championship title.", c: "She is the only one of the players who are having a championship title.", d: "She is the only one of the players who were having a championship title." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "hard",
    explanation: "Because of the definitive framing 'the only one', the dependent clause relative pronoun 'who' maps to 'one' (singular), requiring 'has'."
  },
  {
    question: "Which sentence features proper modern data agreement mechanics?",
    answers: { a: "The demographic data shows a distinct upward trend in urbanization.", b: "The demographic data show a distinct upward trend in urbanization.", c: "The demographic data are showing a distinct upward trend in urbanization.", d: "The demographic data were showing a distinct upward trend in urbanization." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "medium",
    explanation: "When treated as a collective unified information mass, the term 'data' safely pairs with the singular verb form 'shows'."
  },
  {
    question: "Select the sentence with correct syntax for abstract discipline terms.",
    answers: { a: "Ethics are an essential field of study for modern journalists.", b: "Ethics is an essential field of study for modern journalists.", c: "Ethics were an essential field of study for modern journalists.", d: "Ethics have been an essential field of study for modern journalists." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "easy",
    explanation: "The philosophical discipline 'Ethics' functions syntactically as a singular fields-of-study concept, matching with 'is'."
  },
  {
    question: "Choose the accurate sentence with alternating proximity constraints.",
    answers: { a: "Neither the security guard nor the building tenants were aware.", b: "Neither the security guard nor the building tenants was aware.", c: "Neither the security guard nor the building tenants is aware.", d: "Neither the security guard nor the building tenants has been aware." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "medium",
    explanation: "The closest subject to the verb position is 'tenants' (plural), which forces the correlative structure to select 'were'."
  },
  {
    question: "Identify the option with correct grammatical matching for mass items.",
    answers: { a: "Some of the contaminated soil have been removed from the site.", b: "Some of the contaminated soil are removed from the site.", c: "Some of the contaminated soil were removed from the site.", d: "Some of the contaminated soil has been removed from the site." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "medium",
    explanation: "The quantity modifier 'Some' targets 'soil' (singular mass noun), which calls for the singular verb option 'has been removed'."
  },
  {
    question: "Select the sentence with accurate syntax for plural entity expressions.",
    answers: { a: "A list of verified email addresses is available in the appendix.", b: "A list of verified email addresses are available in the appendix.", c: "A list of verified email addresses were available in the appendix.", d: "A list of verified email addresses have been available in the appendix." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "easy",
    explanation: "The true syntactic head subject is 'list' (singular). The plural modifier 'of verified email addresses' does not affect the verb 'is'."
  },
  {
    question: "Which of the options features perfect inverted structural syntax?",
    answers: { a: "There is several critical updates left to install on the computer.", b: "There was several critical updates left to install on the computer.", c: "There are several critical updates left to install on the computer.", d: "There has been several critical updates left to install on the computer." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "easy",
    explanation: "The true core structural subject is 'updates' (plural), which forces the introductory clause to select 'are'."
  },
  {
    question: "Choose the correct sentence involving relative tracking.",
    answers: { a: "This is one of those historic novels that keep you reading all night.", b: "This is one of those historic novels that keeps you reading all night.", c: "This is one of those historic novels that is keeping you reading all night.", d: "This is one of those historic novels that has kept you reading all night." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "hard",
    explanation: "The relative pronoun clause references 'novels' (plural) as its structural anchor, requiring the plural verb 'keep'."
  },
  {
    question: "Select the sentence with accurate corporate collective unit logic.",
    answers: { a: "The administrative staff is planning a surprise party for the director.", b: "The administrative staff are planning a surprise party for the director.", c: "The administrative staff were planning a surprise party for the director.", d: "The administrative staff have been planning a surprise party for the director." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "easy",
    explanation: "The collective noun unit 'staff' acts together as a single administrative body to plan an event, taking the singular verb 'is'."
  },
  {
    question: "Identify the option with correct numerical percentage mechanics.",
    answers: { a: "Twenty percent of the workspace are allocated for communal use.", b: "Twenty percent of the workspace is allocated for communal use.", c: "Twenty percent of the workspace were allocated for communal use.", d: "Twenty percent of the workspace have been allocated for communal use." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "medium",
    explanation: "Percentages are driven by the trailing noun block. 'Workspace' is singular/uncountable, requiring the singular verb 'is'."
  },
  {
    question: "Which sentence displays perfect subject-verb matching with continuous quantities.",
    answers: { a: "Each of the potential investment projects has unique risks.", b: "Each of the potential investment projects have unique risks.", c: "Each of the potential investment projects are having unique risks.", d: "Each of the potential investment projects were having unique risks." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "easy",
    explanation: "The indefinite pronoun 'Each' commands a singular syntax profile, forcing the choice of the singular verb 'has'."
  },
  {
    question: "Choose the grammatically sound option from the list below.",
    answers: { a: "Neither the faulty wire nor the blown fuses is the main issue.", b: "Neither the faulty wire nor the blown fuses was the main issue.", c: "Neither the faulty wire nor the blown fuses has been the main issue.", d: "Neither the faulty wire nor the blown fuses are the main issue." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "medium",
    explanation: "The proximity rules specify that the verb matches 'fuses' (plural), making the plural choice 'are' correct."
  },
  {
    question: "Select the sentence with proper parenthetical modifier additions.",
    answers: { a: "The lead architect, together with her engineers, are visiting the site.", b: "The lead architect, together with her engineers, were visiting the site.", c: "The lead architect, together with her engineers, have visited the site.", d: "The lead architect, together with her engineers, is visiting the site." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "medium",
    explanation: "The parenthetical addition does not break the singular status of 'architect', which requires the singular verb 'is visiting'."
  },
  {
    question: "Identify the correct option involving volumetric units of values.",
    answers: { a: "Fifty gallons of water are standard capacity for this local tank.", b: "Fifty gallons of water were standard capacity for this local tank.", c: "Fifty gallons of water is standard capacity for this local tank.", d: "Fifty gallons of water have been standard capacity for this local tank." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "easy",
    explanation: "A specific total amount of volume measurement ('Fifty gallons') behaves as a singular collective metric block, taking 'is'."
  },
  {
    question: "Which sentence features accurate positional inverted structural syntax?",
    answers: { a: "Near the river banks grows several rare species of wild fern.", b: "Near the river banks is growing several rare species of wild fern.", c: "Near the river banks has grown several rare species of wild fern.", d: "Near the river banks grow several rare species of wild fern." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "hard",
    explanation: "The real subject follows the verb structure and is plural ('several rare species'), requiring the plural verb 'grow'."
  },
  {
    question: "Choose the correct sentence containing distinctive relative clause mechanics.",
    answers: { a: "She is the only one of the applicants who stands out completely.", b: "She is the only one of the applicants who stand out completely.", c: "She is the only one of the applicants who are standing out completely.", d: "She is the only one of the applicants who have stood out completely." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "hard",
    explanation: "The restrictive formula phrase 'the only one' forces the relative clause pronoun 'who' to agree with 'one' (singular), taking 'stands'."
  },
  {
    question: "Select the sentence with accurate syntax for singular compound combinations.",
    answers: { a: "Rock and roll are a timeless music genre loved by millions.", b: "Rock and roll were a timeless music genre loved by millions.", d: "Rock and roll have been a timeless music genre loved by millions.", c: "Rock and roll is a timeless music genre loved by millions." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "easy",
    explanation: "The compound entity 'Rock and roll' is treated as a singular integrated genre concept, matching perfectly with 'is'."
  },
  {
    question: "Identify the option with correct distributive modifier mechanics.",
    answers: { a: "Every local supervisor and associate are expected to dial into the call.", b: "Every local supervisor and associate were expected to dial into the call.", c: "Every local supervisor and associate have been expected to dial into the call.", d: "Every local supervisor and associate is expected to dial into the call." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "medium",
    explanation: "The introductory term 'Every' shifts the entire compound structural phrase into a singular profile, requiring 'is expected'."
  },
  {
    question: "Which option handles alternating singular/plural pairings perfectly?",
    answers: { a: "Not only the main office but also the remote branches is closed.", b: "Not only the main office but also the remote branches was closed.", d: "Not only the main office but also the remote branches has been closed.", c: "Not only the main office but also the remote branches are closed." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "medium",
    explanation: "The closer subject block to the verb position is 'branches' (plural), which forces the construction to use the plural verb 'are'."
  },
  {
    question: "Choose the correct sentence containing unique fraction distributions.",
    answers: { a: "One-third of the dynamic team were assigned to the research branch.", b: "One-third of the dynamic team was assigned to the research branch.", c: "One-third of the dynamic team are assigned to the research branch.", d: "One-third of the dynamic team have been assigned to the research branch." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "medium",
    explanation: "The fraction acts upon 'team', which is a singular collective noun block acting uniformly here, requiring the singular verb 'was assigned'."
  },
  {
    question: "Select the sentence with accurate syntax for fractional calculations.",
    answers: { a: "Three-quarters of the raw inventory data have been validated.", b: "Three-quarters of the raw inventory data has been validated.", c: "Three-quarters of the raw inventory data are validated.", d: "Three-quarters of the raw inventory data were validated." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "medium",
    explanation: "The fraction modifies the singular collective mass noun data, which correctly calls for the singular verb 'has been validated'."
  },
  {
    question: "Identify the correct choice with complex parenthetical insertions.",
    answers: { a: "The managing partner, along with her attorneys, are adjusting the deal.", b: "The managing partner, along with her attorneys, were adjusting the deal.", c: "The managing partner, along with her attorneys, have adjusted the deal.", d: "The managing partner, along with her attorneys, is adjusting the deal." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "medium",
    explanation: "The additive phrase does not alter the core status of the singular subject noun 'partner', requiring 'is adjusting'."
  },
  {
    question: "Which sentence features proper relative clause connection metrics?",
    answers: { a: "He is one of those managers who requires a status report hourly.", b: "He is one of those managers who require a status report hourly.", c: "He is one of those managers who is requiring a status report hourly.", d: "He is one of those managers who has required a status report hourly." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "hard",
    explanation: "The relative clause 'who' points directly to the plural noun 'managers', requiring the matching plural verb form 'require'."
  },
  {
    question: "Select the sentence with correct syntax for indefinite tracking items.",
    answers: { a: "Each of the local audit parameters has been set by the controller.", b: "Each of the local audit parameters have been set by the controller.", c: "Each of the local audit parameters were set by the controller.", d: "Each of the local audit parameters are set by the controller." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "easy",
    explanation: "The singular indefinite subject token 'Each' rules the phrase, which requires the singular verb option 'has been set'."
  },
  {
    question: "Choose the accurate sentence with alternating proximity variables.",
    answers: { a: "Either the floor supervisors or the plant manager are signing.", b: "Either the floor supervisors or the plant manager is signing.", c: "Either the floor supervisors or the plant manager were signing.", d: "Either the floor supervisors or the plant manager have been signing." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "medium",
    explanation: "The closest noun phrase block to the verb target is 'manager' (singular), selecting the singular verb form 'is signing'."
  },
  {
    question: "Identify the option with correct grammatical matching for mass items.",
    answers: { a: "Most of the oil spill have been contained by emergency barriers.", b: "Most of the oil spill are contained by emergency barriers.", c: "Most of the oil spill were contained by emergency barriers.", d: "Most of the oil spill has been contained by emergency barriers." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "medium",
    explanation: "The quantity modifier phrase 'Most of' targets 'spill' (singular noun), which requires the singular verb selection 'has been contained'."
  },
  {
    question: "Select the sentence with accurate syntax for plural modifier expressions.",
    answers: { a: "The reliability of the mechanical systems is crucial for flight safety.", b: "The reliability of the mechanical systems are crucial for flight safety.", c: "The reliability of the mechanical systems were crucial for flight safety.", d: "The reliability of the mechanical systems have been crucial for flight safety." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "easy",
    explanation: "The true underlying structural subject is 'reliability' (singular). The plural modifier 'of the mechanical systems' does not affect 'is'."
  },
  {
    question: "Which of the options features perfect inverted structural syntax?",
    answers: { a: "There is several critical updates left to process on the database.", b: "There was several critical updates left to process on the database.", c: "There are several critical updates left to process on the database.", d: "There has been several critical updates left to process on the database." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "easy",
    explanation: "The underlying true grammatical subject phrase is 'updates' (plural), which forces the introductory clause to use 'are'."
  },
  {
    question: "Choose the correct sentence involving unique relative tracking profiles.",
    answers: { a: "This is one of those policy changes that create confusion for users.", b: "This is one of those policy changes that creates confusion for users.", c: "This is one of those policy changes that is creating confusion for users.", d: "This is one of those policy changes that has created confusion for users." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "hard",
    explanation: "The relative clause construction targets 'changes' (plural) as its structural base, requiring the plural verb choice 'create'."
  },
  {
    question: "Select the sentence with accurate corporate collective tracking mechanics.",
    answers: { a: "The internal team is preparing a new version of the software package.", b: "The internal team are preparing a new version of the software package.", c: "The internal team were preparing a new version of the software package.", d: "The internal team have been preparing a new version of the software package." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "easy",
    explanation: "The collective noun grouping 'team' operates here as a single uniform unit to build a package, taking the singular verb form 'is'."
  },
  {
    question: "Identify the option with correct numerical percentage modifier metrics.",
    answers: { a: "Thirty percent of the storage space are allocated for system caches.", b: "Thirty percent of the storage space is allocated for system caches.", c: "Thirty percent of the storage space were allocated for system caches.", d: "Thirty percent of the storage space have been allocated for system caches." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "medium",
    explanation: "The percentage operates on 'space' (singular and uncountable mass), requiring the singular verb form 'is allocated'."
  },
  {
    question: "Which sentence displays perfect subject-verb matching with numeric metrics.",
    answers: { a: "Each of the local business parameters has been verified by internal audit.", b: "Each of the local business parameters have been verified by internal audit.", c: "Each of the local business parameters are verified by internal audit.", d: "Each of the local business parameters were verified by internal audit." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "easy",
    explanation: "The absolute singular token pronoun 'Each' rules the phrase completely, choosing the singular verb 'has been verified'."
  },
  {
    question: "Choose the grammatically sound option from the list below.",
    answers: { a: "Neither the faulty module nor the network channels is operational.", b: "Neither the faulty module nor the network channels was operational.", c: "Neither the faulty module nor the network channels has been operational.", d: "Neither the faulty module nor the network channels are operational." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "medium",
    explanation: "The proximity matrix rule sets the verb alignment with 'channels' (plural), making the plural option 'are' correct."
  },
  {
    question: "Select the sentence with proper parenthetical modifier logic adjustments.",
    answers: { a: "The lead investigator, together with her forensic units, are auditing the room.", b: "The lead investigator, together with her forensic units, were auditing the room.", c: "The lead investigator, together with her forensic units, have audited the room.", d: "The lead investigator, together with her forensic units, is auditing the room." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "medium",
    explanation: "The modifier addition does not alter the base state of the singular subject head 'investigator', requiring 'is auditing'."
  },
  {
    question: "Identify the correct option involving specific quantitative metrics.",
    answers: { a: "Ten dollars is a reasonable amount to spend on a smartphone app.", b: "Ten dollars are a reasonable amount to spend on a smartphone app.", c: "Ten dollars were a reasonable amount to spend on a smartphone app.", d: "Ten dollars have been a reasonable amount to spend on a smartphone app." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "easy",
    explanation: "An aggregate sum currency value descriptor ('Ten dollars') behaves as an individual total cost item, requiring 'is'."
  },
  {
    question: "Which sentence features accurate positional inverted structural syntax?",
    answers: { a: "Deep within the text files lies the encrypted passwords.", b: "Deep within the text files is lying the encrypted passwords.", d: "Deep within the text files has lain the encrypted passwords.", c: "Deep within the text files lie the encrypted passwords." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "hard",
    explanation: "The true grammatical subject follows the verb form and is plural ('passwords'), selecting the plural verb structure 'lie'."
  },
  {
    question: "Choose the correct sentence containing distinctive relative clause mechanics.",
    answers: { a: "She is the only one of the engineers who understands the system architecture.", b: "She is the only one of the engineers who understand the system architecture.", c: "She is the only one of the engineers who are understanding the system architecture.", d: "She is the only one of the engineers who have understood the system architecture." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "hard",
    explanation: "The specific presence of 'the only one' configures the relative pronoun 'who' to focus on 'one' (singular), requiring 'understands'."
  },
  {
    question: "Select the sentence with accurate syntax for compound food combinations.",
    answers: { a: "Bacon and eggs are a classic breakfast option across the country.", b: "Bacon and eggs were a classic breakfast option across the country.", c: "Bacon and eggs have been a classic breakfast option across the country.", d: "Bacon and eggs is a classic breakfast option across the country." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "easy",
    explanation: "When combined items represent a single standard food combination dish, the phrase functions as a singular subject, matching with 'is'."
  },
  {
    question: "Identify the option with correct distributive modifier mechanics.",
    answers: { a: "Every local supervisor and branch manager are required to sign the ledger.", b: "Every local supervisor and branch manager were required to sign the ledger.", c: "Every local supervisor and branch manager have been required to sign the ledger.", d: "Every local supervisor and branch manager is required to sign the ledger." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "medium",
    explanation: "The structural inclusion of 'Every' maps a singular syntax to the compound subject structure, taking 'is required'."
  },
  {
    question: "Which option handles alternating singular/plural pairings perfectly?",
    answers: { a: "Not only the regional manager but also the store assistants are arriving.", b: "Not only the regional manager but also the store assistants is arriving.", c: "Not only the regional manager but also the store assistants was arriving.", d: "Not only the regional manager but also the store assistants has arrived." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "medium",
    explanation: "The closest subject to the verb position is 'assistants' (plural), which forces the correlative construction to use 'are'."
  },
  {
    question: "Choose the correct sentence containing unique fraction distributions.",
    answers: { a: "One-third of the dynamic team were assigned to the marketing branch.", b: "One-third of the dynamic team is assigned to the marketing branch.", c: "One-third of the dynamic team are assigned to the marketing branch.", d: "One-third of the dynamic team have been assigned to the marketing branch." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "medium",
    explanation: "The fraction targets the singular collective noun 'team' which acts uniformly here, requiring the singular verb 'is assigned'."
  },
  {
    question: "Select the sentence with accurate syntax for fractional calculations.",
    answers: { a: "Three-quarters of the raw research material have been processed.", b: "Three-quarters of the raw research material has been processed.", c: "Three-quarters of the raw research material are processed.", d: "Three-quarters of the raw research material were processed." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "medium",
    explanation: "The fraction modifies the singular mass noun 'material', which correctly calls for the singular verb 'has been processed'."
  },
  {
    question: "Identify the correct choice with complex parenthetical insertions.",
    answers: { a: "The lead designer, along with her assistant animators, are updating the asset.", b: "The lead designer, along with her assistant animators, were updating the asset.", c: "The lead designer, along with her assistant animators, have updated the asset.", d: "The lead designer, along with her assistant animators, is updating the asset." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "medium",
    explanation: "The addition does not modify the base singular profile of 'designer', requiring 'is updating'."
  },
  {
    question: "Which sentence features proper relative clause connection metrics?",
    answers: { a: "He is one of those programmers who checks code tracking entries hourly.", b: "He is one of those programmers who check code tracking entries hourly.", c: "He is one of those programmers who is checking code tracking entries hourly.", d: "He is one of those programmers who has checked code tracking entries hourly." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "hard",
    explanation: "The relative clause anchor word is 'programmers' (plural), requiring the matching plural verb form 'check'."
  },
  {
    question: "Select the sentence with correct syntax for indefinite tracking items.",
    answers: { a: "Each of the local audit logs has been checked by the developer.", b: "Each of the local audit logs have been checked by the developer.", c: "Each of the local audit logs were checked by the developer.", d: "Each of the local audit logs are checked by the developer." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "easy",
    explanation: "The singular indefinite subject token 'Each' rules the phrase, which requires the singular verb option 'has been checked'."
  },
  {
    question: "Choose the accurate sentence with alternating proximity variables.",
    answers: { a: "Either the floor supervisors or the shift lead are signing the form.", b: "Either the floor supervisors or the shift lead is signing the form.", c: "Either the floor supervisors or the shift lead were signing the form.", d: "Either the floor supervisors or the shift lead have been signing the form." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "medium",
    explanation: "The closest noun phrase block to the verb target is 'lead' (singular), selecting the singular verb form 'is signing'."
  },
  {
    question: "Identify the option with correct grammatical matching for mass items.",
    answers: { a: "Most of the chemical waste have been removed from the pipeline.", b: "Most of the chemical waste are removed from the pipeline.", c: "Most of the chemical waste were removed from the pipeline.", d: "Most of the chemical waste has been removed from the pipeline." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "medium",
    explanation: "The quantity modifier phrase 'Most of' targets 'waste' (singular mass noun), which requires the singular verb selection 'has been contained'."
  },
  {
    question: "Select the sentence with accurate syntax for plural modifier expressions.",
    answers: { a: "The reliability of the database nodes is crucial for infrastructure health.", b: "The reliability of the database nodes are crucial for infrastructure health.", c: "The reliability of the database nodes were crucial for infrastructure health.", d: "The reliability of the database nodes have been crucial for infrastructure health." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "easy",
    explanation: "The true underlying structural subject is 'reliability' (singular). The plural modifier 'of the database nodes' does not affect 'is'."
  },
  {
    question: "Which of the options features perfect inverted structural syntax?",
    answers: { a: "There is several critical configuration values left to change.", b: "There was several critical configuration values left to change.", c: "There are several critical configuration values left to change.", d: "There has been several critical configuration values left to change." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "easy",
    explanation: "The underlying true grammatical subject phrase is 'values' (plural), which forces the introductory clause to use 'are'."
  },
  {
    question: "Choose the correct sentence involving unique relative tracking profiles.",
    answers: { a: "This is one of those configuration changes that alter output files.", b: "This is one of those configuration changes that alters output files.", c: "This is one of those configuration changes that is altering output files.", d: "This is one of those configuration changes that has altered output files." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "hard",
    explanation: "The relative clause construction targets 'changes' (plural) as its structural base, requiring the plural verb choice 'alter'."
  },
  {
    question: "Select the sentence with accurate corporate collective tracking mechanics.",
    answers: { a: "The infrastructure team is updating the parameters of the server farm.", b: "The infrastructure team are updating the parameters of the server farm.", c: "The infrastructure team were updating the parameters of the server farm.", d: "The infrastructure team have been updating the parameters of the server farm." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "easy",
    explanation: "The collective noun grouping 'team' operates here as a single uniform unit to update parameters, taking the singular verb form 'is'."
  },
  {
    question: "Identify the option with correct numerical percentage modifier metrics.",
    answers: { a: "Thirty percent of the allocation space are designated for archival storage.", b: "Thirty percent of the allocation space is designated for archival storage.", c: "Thirty percent of the allocation space were designated for archival storage.", d: "Thirty percent of the allocation space have been designated for archival storage." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "medium",
    explanation: "The percentage operates on 'space' (singular and uncountable mass), requiring the singular verb form 'is designated'."
  },
  {
    question: "Which sentence displays perfect subject-verb matching with numeric metrics.",
    answers: { a: "Each of the local platform parameters has been checked by security.", b: "Each of the local platform parameters have been checked by security.", c: "Each of the local platform parameters are checked by security.", d: "Each of the local platform parameters were checked by security." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "easy",
    explanation: "The absolute singular token pronoun 'Each' rules the phrase completely, choosing the singular verb 'has been checked'."
  },
  {
    question: "Choose the grammatically sound option from the list below.",
    answers: { a: "Neither the faulty card nor the connection ports is working properly.", b: "Neither the faulty card nor the connection ports was working properly.", c: "Neither the faulty card nor the connection ports has been working properly.", d: "Neither the faulty card nor the connection ports are working properly." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "medium",
    explanation: "The proximity matrix rule sets the verb alignment with 'ports' (plural), making the plural option 'are' correct."
  },
  {
    question: "Select the sentence with proper parenthetical modifier logic adjustments.",
    answers: { a: "The lead architect, together with her project logs, are arriving now.", b: "The lead architect, together with her project logs, were arriving now.", c: "The lead architect, together with her project logs, have arrived now.", d: "The lead architect, together with her project logs, is arriving now." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "medium",
    explanation: "The modifier addition does not alter the base state of the singular subject head 'architect', requiring 'is arriving'."
  },
  {
    question: "Identify the correct option involving specific quantitative metrics.",
    answers: { a: "Ten dollars is a small amount to spend on an office upgrade.", b: "Ten dollars are a small amount to spend on an office upgrade.", c: "Ten dollars were a small amount to spend on an office upgrade.", d: "Ten dollars have been a small amount to spend on an office upgrade." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "easy",
    explanation: "An aggregate sum currency value descriptor ('Ten dollars') behaves as an individual total cost item, requiring 'is'."
  },
  {
    question: "Which sentence features accurate positional inverted structural syntax?",
    answers: { a: "Deep within the config array lies the environment keys.", b: "Deep within the config array is lying the environment keys.", c: "Deep within the config array has lain the environment keys.", d: "Deep within the config array lie the environment keys." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "hard",
    explanation: "The true grammatical subject follows the verb form and is plural ('keys'), selecting the plural verb structure 'lie'."
  },
  {
    question: "Choose the correct sentence containing distinctive relative clause mechanics.",
    answers: { a: "She is the only one of the developers who knows the exact configuration path.", b: "She is the only one of the developers who know the exact configuration path.", c: "She is the only one of the developers who are knowing the exact configuration path.", d: "She is the only one of the developers who have understood the exact configuration path." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "hard",
    explanation: "The specific presence of 'the only one' configures the relative pronoun 'who' to focus on 'one' (singular), requiring 'understands'."
  },
  {
    question: "Select the sentence with accurate syntax for compound food combinations.",
    answers: { a: "Ham and eggs are a classic breakfast option across the nation.", b: "Ham and eggs were a classic breakfast option across the nation.", c: "Ham and eggs have been a classic breakfast option across the nation.", d: "Ham and eggs is a classic breakfast option across the nation." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "easy",
    explanation: "When combined items represent a single standard food combination dish, the phrase functions as a singular subject, matching with 'is'."
  },
  {
    question: "Identify the option with correct distributive modifier mechanics.",
    answers: { a: "Every regional coordinator and team lead are requested to submit reports.", b: "Every regional coordinator and team lead were requested to submit reports.", c: "Every regional coordinator and team lead have been requested to submit reports.", d: "Every regional coordinator and team lead is requested to submit reports." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "medium",
    explanation: "The structural inclusion of 'Every' maps a singular syntax to the compound subject structure, taking 'is requested'."
  },
  
  
  
  {
    question: "Select the correct sentence with respect to subject-verb agreement.",
    answers: { a: "The team have won the match.", b: "The team has won the match.", c: "The team is won the match.", d: "The team were won the match." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "medium",
    explanation: "Collective nouns (like 'team') take singular verbs when the group acts as a single, unified entity."
  },
  {
    question: "Select the correct sentence with respect to subject-verb agreement.",
    answers: { a: "Everybody are happy.", b: "Everybody was happy.", c: "Everybody is happy.", d: "Everybody were happy." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "easy",
    explanation: "Indefinite pronouns such as 'everybody', 'everyone', 'somebody', and 'nothing' are grammatically singular and require singular verbs."
  },
  {
    question: "Identify the error in this subject-verb agreement sentence: 'Neither of the boys were able to complete the task.'",
    answers: { a: "'Neither' should be 'None'", b: "'were' should be 'was'", c: "No error", d: "'able to' should be 'capable of'" },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "medium",
    explanation: "The subject 'Neither' is singular and requires the singular verb 'was'. The plural object 'boys' does not change the subject's number."
  },
  {
    question: "Choose the correct verb form for collective agreement: Each of the students ____ completed the assignment.",
    answers: { a: "has", b: "have", c: "are", d: "were" },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "medium",
    explanation: "The subject 'Each' is singular. Prepositional phrases following the subject (such as 'of the students') do not change its singular status."
  },
  {
    question: "Select the correct subject-verb agreement structure: Neither the manager nor the employees ____ present at the briefing.",
    answers: { a: "was", b: "were", c: "is", d: "has been" },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "medium",
    explanation: "When subjects are joined by 'neither... nor', the verb agrees with the closer subject. 'Employees' is plural, so 'were' is required."
  },
  {
    question: "Choose the correct subject-verb agreement sentence.",
    answers: { a: "The results of the test were announced yesterday.", b: "The results of the test was announced yesterday.", c: "The result of the test were announced yesterday.", d: "The results of the test announces yesterday." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "easy",
    explanation: "The head noun 'results' is plural, so it matches with the plural verb form 'were'."
  },
  {
    question: "Choose the correct syntax: The list of items ____ on the conference table.",
    answers: { a: "are", b: "is", c: "were", d: "be" },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "easy",
    explanation: "The subject is 'list' (singular), not 'items' (plural). Therefore, the verb must be singular ('is')."
  },
  {
    question: "Choose the correct syntax under parenthetical phrases: The teacher, along with her students, ____ arriving shortly.",
    answers: { a: "is", b: "are", c: "were", d: "be" },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "hard",
    explanation: "Phrases like 'along with', 'as well as', or 'together with' do not alter the grammatical number of the singular main subject ('teacher')."
  },
  {
    question: "Identify the correct structure for plural coordinate subjects: Either John or his friends ____ coming to help.",
    answers: { a: "is", b: "are", c: "was", d: "were" },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "medium",
    explanation: "With correlative conjunctions (either... or), the verb agrees with the closest subject. 'Friends' is plural, requiring 'are'."
  },
  {
    question: "Select the correct sentence.",
    answers: { a: "Neither the dog nor the cat is in the garden.", b: "Neither the dog nor the cat are in the garden.", c: "Neither the dog or the cat is in the garden.", d: "Neither the dog or the cat are in the garden." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "easy",
    explanation: "The conjunction 'neither' must pair with 'nor'. Since both singular subjects ('dog', 'cat') are singular, the verb 'is' is correct."
  },
  {
    question: "Choose the correct simple present verb: The energetic dogs ____ around the yard.",
    answers: { a: "run", b: "runs", c: "running", d: "has run" },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "easy",
    explanation: "Plural subjects (dogs) take plural verbs (run), which do not end in -s in the simple present tense."
  },
  {
    question: "Complete the sentence: My brother ____ drinking coffee in the morning.",
    answers: { a: "like", b: "likes", c: "liking", d: "have liked" },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "easy",
    explanation: "The subject 'My brother' is a singular third-person subject, requiring the singular verb 'likes'."
  },
  {
    question: "Fill in the blank with the correct verb: Most of the milk ____ spilled on the floor.",
    answers: { a: "is", b: "are", c: "were", d: "be" },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "easy",
    explanation: "When fraction or portion words (like 'most of') are followed by an uncountable noun (milk), they require a singular verb."
  },
  {
    question: "Choose the correct form: The box of chocolates ____ disappeared from the counter.",
    answers: { a: "have", b: "has", c: "are", d: "were" },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "easy",
    explanation: "The true subject of this sentence is the singular noun 'box', not the plural noun 'chocolates' inside the prepositional phrase."
  },
  {
    question: "Complete the sentence: Cats ____ generally known to be highly independent animals.",
    answers: { a: "is", b: "are", c: "was", d: "be" },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "easy",
    explanation: "The plural subject 'Cats' requires the matching plural present verb 'are'."
  },
  {
    question: "Choose the correct verb: Neither the quality nor the prices of the items ____ satisfactory.",
    answers: { a: "was", b: "were", c: "is", d: "has been" },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "medium",
    explanation: "In 'neither... nor' constructions, the verb agrees with the closer subject. 'Prices' is plural, so use the plural verb 'were'."
  },
  {
    question: "Fill in the blank: A number of local citizens ____ protested the new construction project.",
    answers: { a: "has", b: "have", c: "is", d: "was" },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "medium",
    explanation: "The idiomatic phrase 'A number of' is plural and takes a plural verb, whereas 'The number of' is singular."
  },
  {
    question: "Complete the sentence: The group of circus performers ____ arriving by bus tonight.",
    answers: { a: "is", b: "are", c: "were", d: "be" },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "medium",
    explanation: "Collective nouns (group) acting as a single unit take singular verbs (is), regardless of any plural nouns in prepositional phrases."
  },
  {
    question: "Fill in the blank: None of the investigative information ____ shared with the press.",
    answers: { a: "was", b: "were", c: "are", d: "be" },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "medium",
    explanation: "'None of' with an uncountable noun ('information') takes a singular verb ('was')."
  },
  {
    question: "Choose the correct present verb: Politics ____ a highly debated topic in almost every country.",
    answers: { a: "is", b: "are", c: "were", d: "be" },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "medium",
    explanation: "Nouns like 'politics', 'news', 'physics', or 'mathematics' appear plural but are grammatically singular."
  },
  {
    question: "Identify the correct verb: The criteria for evaluating the research papers ____ exceptionally strict.",
    answers: { a: "is", b: "are", c: "was", d: "has been" },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "hard",
    explanation: "The subject 'criteria' is the irregular plural form of 'criterion', requiring the plural verb 'are'."
  },
  {
    question: "Complete the sentence: A basket of fresh apples, together with some organic grapes, ____ delivered.",
    answers: { a: "was", b: "were", c: "are", d: "have been" },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "hard",
    explanation: "Parenthetical expressions (together with...) do not modify the main subject ('basket'), which remains singular ('was')."
  },
  {
    question: "Fill in the blank: Every man, woman, and child ____ entitled to basic human rights.",
    answers: { a: "is", b: "are", c: "were", d: "be" },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "hard",
    explanation: "When multiple singular nouns joined by 'and' are preceded by 'every' or 'each', the subject remains singular."
  },
  {
    question: "Choose the correct verb: There ____ a massive increase in challenges during the implementation phase.",
    answers: { a: "was", b: "were", c: "are", d: "have been" },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "hard",
    explanation: "In sentences beginning with 'there', the verb matches the physical noun that follows. 'Increase' is singular, so we use 'was'."
  },
  {
    question: "Complete the statement: Three-quarters of the building's roof ____ repaired so far.",
    answers: { a: "has been", b: "have been", c: "were", d: "are" },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "hard",
    explanation: "With fractions or percentages, look to the noun in the prepositional phrase. 'Roof' is singular, so use 'has been'."
  },
  
  
  
  {
    question: "Identify the sentence that uses correct subject-verb agreement with collective nouns.",
    answers: { a: "The choir are singing in perfect harmony tonight.", b: "The choir is singing in perfect harmony tonight.", c: "The choir were singing in perfect harmony tonight.", d: "The choir have been singing in perfect harmony tonight." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "easy",
    explanation: "The collective noun 'choir' acts as a single unit here, requiring the singular verb 'is'."
  },
  {
    question: "Select the correct sentence involving indefinite pronouns.",
    answers: { a: "Anyone with a valid ID are allowed to enter the building.", b: "Anyone with a valid ID were allowed to enter the building.", c: "Anyone with a valid ID is allowed to enter the building.", d: "Anyone with a valid ID have been allowed to enter the building." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "easy",
    explanation: "The indefinite pronoun 'Anyone' is strictly singular, taking the singular verb 'is'."
  },
  {
    question: "Which of the following handles plural titles correctly?",
    answers: { a: "The Netherlands are known for its beautiful tulip fields.", b: "The Netherlands is known for its beautiful tulip fields.", c: "The Netherlands were known for its beautiful tulip fields.", d: "The Netherlands have been known for its beautiful tulip fields." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "medium",
    explanation: "Even though 'The Netherlands' ends in 's', it refers to a single country, requiring the singular verb 'is'."
  },
  {
    question: "Choose the sentence that correctly matches a compound subject.",
    answers: { a: "Peanut butter and jelly are my favorite type of sandwich.", b: "Peanut butter and jelly were my favorite type of sandwich.", c: "Peanut butter and jelly have been my favorite type of sandwich.", d: "Peanut butter and jelly is my favorite type of sandwich." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "easy",
    explanation: "When two items form a single cohesive unit or dish, they take a singular verb ('is')."
  },
  {
    question: "Select the sentence with accurate syntax for fractions.",
    answers: { a: "Half of the apples is rotten.", b: "Half of the apples has been rotten.", c: "Half of the apples are rotten.", d: "Half of the apples was rotten." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "medium",
    explanation: "Fractions take their number from the noun in the 'of' phrase. 'Apples' is plural, so 'are' is correct."
  },
  {
    question: "Which sentence features proper relative clause syntax?",
    answers: { a: "This is one of the birds that migrates south.", b: "This is one of the birds that migrate south.", c: "This is one of the birds that is migrating south.", d: "This is one of the birds that has migrated south." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "hard",
    explanation: "The relative pronoun 'that' refers to the plural 'birds', making the verb plural ('migrate')."
  },
  {
    question: "Identify the correct option with a 'there' construction.",
    answers: { a: "There is three distinct possibilities to consider.", b: "There was three distinct possibilities to consider.", c: "There are three distinct possibilities to consider.", d: "There has been three distinct possibilities to consider." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "easy",
    explanation: "The true subject 'possibilities' is plural, requiring the plural verb 'are'."
  },
  {
    question: "Select the correct sentence regarding quantities of money.",
    answers: { a: "Fifty thousand dollars are the minimum bid.", b: "Fifty thousand dollars is the minimum bid.", c: "Fifty thousand dollars were the minimum bid.", d: "Fifty thousand dollars have been the minimum bid." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "medium",
    explanation: "A single sum of money is treated as singular, taking the verb 'is'."
  },
  {
    question: "Choose the correct sentence with 'neither... nor'.",
    answers: { a: "Neither the manager nor the staff members is present.", b: "Neither the manager nor the staff members has been present.", c: "Neither the manager nor the staff members was present.", d: "Neither the manager nor the staff members are present." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "medium",
    explanation: "The verb agrees with the closest subject, 'members', which is plural ('are')."
  },
  {
    question: "Which sentence correctly uses 'a number of'?",
    answers: { a: "A number of volunteers is helping today.", b: "A number of volunteers are helping today.", c: "A number of volunteers was helping today.", d: "A number of volunteers has helped today." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "medium",
    explanation: "'A number of' takes a plural verb because it implies 'many' or 'several'."
  },
  {
    question: "Select the sentence with accurate syntax for 'the number of'.",
    answers: { a: "The number of errors are increasing.", b: "The number of errors were increasing.", c: "The number of errors is increasing.", d: "The number of errors have increased." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "medium",
    explanation: "'The number of' refers to a singular count and takes a singular verb ('is')."
  },
  {
    question: "Identify the grammatically correct sentence.",
    answers: { a: "Everyone in the stands were cheering loudly.", b: "Everyone in the stands are cheering loudly.", c: "Everyone in the stands have cheered loudly.", d: "Everyone in the stands was cheering loudly." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "easy",
    explanation: "The indefinite pronoun 'Everyone' requires a singular verb ('was')."
  },
  {
    question: "Which option handles singular entities that end in 's'?",
    answers: { a: "Measles are a highly infectious disease.", b: "Measles is a highly infectious disease.", c: "Measles were a highly infectious disease.", d: "Measles have been a highly infectious disease." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "easy",
    explanation: "Diseases like measles, mumps, and rabies take singular verbs."
  },
  {
    question: "Choose the correct sentence with gerund phrases.",
    answers: { a: "Reading books and writing essays takes up most of my time.", b: "Reading books and writing essays take up most of my time.", c: "Reading books and writing essays is taking up most of my time.", d: "Reading books and writing essays has taken up most of my time." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "hard",
    explanation: "Two distinct gerund subjects joined by 'and' form a plural subject ('take')."
  },
  {
    question: "Select the sentence with proper parenthetical modifiers.",
    answers: { a: "The principal, as well as the teachers, are attending the seminar.", b: "The principal, as well as the teachers, were attending the seminar.", c: "The principal, as well as the teachers, is attending the seminar.", d: "The principal, as well as the teachers, have attended the seminar." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "medium",
    explanation: "The phrase 'as well as the teachers' does not make the subject plural. The verb agrees with 'principal' ('is')."
  },
  {
    question: "Which of the options features accurate inverted structure?",
    answers: { a: "Under the tree sits three large boxes.", b: "Under the tree sit three large boxes.", c: "Under the tree is sitting three large boxes.", d: "Under the tree has sat three large boxes." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "hard",
    explanation: "The subject 'boxes' is plural and follows the verb. Therefore, the verb must be plural ('sit')."
  },
  {
    question: "Identify the sentence that uses correct relative clause syntax with 'the only one'.",
    answers: { a: "He is the only one of the players who has scored.", b: "He is the only one of the players who have scored.", c: "He is the only one of the players who are scoring.", d: "He is the only one of the players who were scoring." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "hard",
    explanation: "The phrase 'the only one' directs the relative pronoun 'who' to agree with 'one' (singular), requiring 'has'."
  },
  {
    question: "Choose the correct sentence regarding percentages.",
    answers: { a: "Fifty percent of the pie have been eaten.", b: "Fifty percent of the pie are eaten.", c: "Fifty percent of the pie were eaten.", d: "Fifty percent of the pie has been eaten." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "medium",
    explanation: "Percentages agree with the noun they modify. 'Pie' is singular, so it takes 'has been'."
  },
  {
    question: "Select the grammatically accurate sentence with 'many a'.",
    answers: { a: "Many a student have struggled with calculus.", b: "Many a student are struggling with calculus.", c: "Many a student has struggled with calculus.", d: "Many a student were struggling with calculus." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "hard",
    explanation: "The phrase 'Many a' is always followed by a singular noun and a singular verb."
  },
  {
    question: "Which option handles 'none' correctly with a mass noun?",
    answers: { a: "None of the information are correct.", b: "None of the information were correct.", c: "None of the information have been correct.", d: "None of the information is correct." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "medium",
    explanation: "'None' takes a singular verb when modifying an uncountable mass noun like 'information'."
  },
  {
    question: "Identify the correct choice with complex subjects.",
    answers: { a: "The time and place of the meeting are yet to be decided.", b: "The time and place of the meeting is yet to be decided.", c: "The time and place of the meeting has been yet to be decided.", d: "The time and place of the meeting was yet to be decided." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "medium",
    explanation: "'Time and place' form a plural compound subject requiring 'are'."
  },
  {
    question: "Select the sentence with proper unit of measurement syntax.",
    answers: { a: "Two liters of water are the recommended daily intake.", b: "Two liters of water is the recommended daily intake.", c: "Two liters of water were the recommended daily intake.", d: "Two liters of water have been the recommended daily intake." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "easy",
    explanation: "A unit of volume like 'Two liters' acts as a single measurement block, taking the singular 'is'."
  },
  {
    question: "Which sentence features accurate compound item logic?",
    answers: { a: "My friend and colleague are arriving today.", b: "My friend and colleague were arriving today.", c: "My friend and colleague is arriving today.", d: "My friend and colleague have arrived today." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "hard",
    explanation: "When two nouns refer to the same person ('friend and colleague'), the verb is singular ('is')."
  },
  {
    question: "Choose the correct sentence with 'either... or'.",
    answers: { a: "Either the cats or the dog are responsible for the mess.", b: "Either the cats or the dog is responsible for the mess.", c: "Either the cats or the dog were responsible for the mess.", d: "Either the cats or the dog have been responsible for the mess." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "medium",
    explanation: "The verb matches the nearest subject. 'Dog' is singular, so 'is' is correct."
  },
  {
    question: "Identify the correct option with a plural title.",
    answers: { a: "The Starry Night are a famous painting by Van Gogh.", b: "The Starry Night is a famous painting by Van Gogh.", c: "The Starry Night were a famous painting by Van Gogh.", d: "The Starry Night have been a famous painting by Van Gogh." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "easy",
    explanation: "A singular work of art takes a singular verb, regardless of its title."
  },
  {
    question: "Select the correct sentence involving indefinite pronouns.",
    answers: { a: "Everything in the boxes are labeled.", b: "Everything in the boxes were labeled.", c: "Everything in the boxes have been labeled.", d: "Everything in the boxes is labeled." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "easy",
    explanation: "'Everything' is an indefinite pronoun that always takes a singular verb ('is')."
  },
  {
    question: "Which sentence properly matches a divided collective noun?",
    answers: { a: "The jury is taking their seats.", b: "The jury are taking their seats.", c: "The jury has taken their seats.", d: "The jury was taking their seats." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "hard",
    explanation: "The plural pronoun 'their' shows the jury members are acting individually, so the verb must be plural ('are')."
  },
  {
    question: "Choose the grammatically sound option.",
    answers: { a: "Every man, woman, and child are welcome.", b: "Every man, woman, and child were welcome.", c: "Every man, woman, and child is welcome.", d: "Every man, woman, and child have been welcome." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "medium",
    explanation: "The word 'Every' makes the compound subject singular, requiring 'is'."
  },
  {
    question: "Select the sentence with proper syntax for an abstract field of study.",
    answers: { a: "Physics are fascinating to me.", b: "Physics were fascinating to me.", c: "Physics have been fascinating to me.", d: "Physics is fascinating to me." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "easy",
    explanation: "Nouns ending in '-ics' referring to fields of study are singular."
  },
  {
    question: "Identify the correct option involving proximity constraints.",
    answers: { a: "Not only the students but also the teacher are excited.", b: "Not only the students but also the teacher is excited.", c: "Not only the students but also the teacher were excited.", d: "Not only the students but also the teacher have been excited." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "medium",
    explanation: "The verb must agree with 'teacher', the closest subject ('is')."
  },
  {
    question: "Which of the options features perfect inverted structural syntax?",
    answers: { a: "Here comes the train.", b: "Here come the train.", c: "Here are coming the train.", d: "Here have come the train." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "easy",
    explanation: "The subject 'train' is singular, so the inverted verb must be 'comes'."
  },
  {
    question: "Choose the correct sentence involving indefinite pronouns.",
    answers: { a: "Both of the cars is damaged.", b: "Both of the cars are damaged.", c: "Both of the cars has been damaged.", d: "Both of the cars was damaged." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "easy",
    explanation: "'Both' is a plural indefinite pronoun and takes a plural verb ('are')."
  },
  {
    question: "Select the sentence with accurate syntax for fractions and plural nouns.",
    answers: { a: "One-quarter of the books is missing.", b: "One-quarter of the books was missing.", c: "One-quarter of the books has been missing.", d: "One-quarter of the books are missing." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "medium",
    explanation: "The fraction takes its number from 'books' (plural), requiring 'are'."
  },
  {
    question: "Identify the correct option involving proximity modifiers.",
    answers: { a: "The CEO, along with the board, are stepping down.", b: "The CEO, along with the board, is stepping down.", c: "The CEO, along with the board, were stepping down.", d: "The CEO, along with the board, have stepped down." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "medium",
    explanation: "'Along with' does not compound the subject. The singular 'CEO' takes 'is'."
  },
  {
    question: "Which sentence features proper relative clause connection metrics?",
    answers: { a: "She is one of the few who has arrived early.", b: "She is one of the few who have arrived early.", c: "She is one of the few who is arriving early.", d: "She is one of the few who was arriving early." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "hard",
    explanation: "The pronoun 'who' refers to the plural 'few', making the verb plural ('have')."
  },
  {
    question: "Select the sentence with accurate corporate collective tracking mechanics.",
    answers: { a: "The company are expanding its overseas operations.", b: "The company were expanding its overseas operations.", c: "The company is expanding its overseas operations.", d: "The company have been expanding its overseas operations." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "easy",
    explanation: "The collective noun 'company' is acting as a single unit, taking 'is'."
  },
  {
    question: "Choose the correct sentence containing unique fraction distributions.",
    answers: { a: "Two-thirds of the city were destroyed.", b: "Two-thirds of the city are destroyed.", c: "Two-thirds of the city have been destroyed.", d: "Two-thirds of the city was destroyed." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "medium",
    explanation: "The fraction modifies 'city' (singular), requiring the singular verb 'was'."
  },
  {
    question: "Identify the option with correct distributive modifier mechanics.",
    answers: { a: "Each computer and printer are working now.", b: "Each computer and printer were working now.", c: "Each computer and printer is working now.", d: "Each computer and printer have been working now." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "medium",
    explanation: "'Each' distributes singularity to the compound subject, making it 'is'."
  },
  {
    question: "Which sentence displays proper subject-verb matching with continuous quantities.",
    answers: { a: "A great deal of effort are required.", b: "A great deal of effort were required.", c: "A great deal of effort is required.", d: "A great deal of effort have been required." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "easy",
    explanation: "'Effort' is an uncountable noun, so 'A great deal of' takes the singular 'is'."
  },
  {
    question: "Choose the grammatically sound option from the list below.",
    answers: { a: "The news are broadcast at six o'clock.", b: "The news were broadcast at six o'clock.", c: "The news is broadcast at six o'clock.", d: "The news have been broadcast at six o'clock." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "easy",
    explanation: "The word 'news' is structurally singular and uncountable, requiring 'is'."
  },
  {
    question: "Select the sentence with proper logic adjustments.",
    answers: { a: "A pair of shoes are in the closet.", b: "A pair of shoes is in the closet.", c: "A pair of shoes were in the closet.", d: "A pair of shoes have been in the closet." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "medium",
    explanation: "The subject is 'pair' (singular), which takes the singular verb 'is'."
  },
  {
    question: "Identify the correct option involving specific quantitative metrics.",
    answers: { a: "Five miles are too far to walk.", b: "Five miles is too far to walk.", c: "Five miles were too far to walk.", d: "Five miles have been too far to walk." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "easy",
    explanation: "A distance metric ('Five miles') is treated as a singular block, requiring 'is'."
  },
  {
    question: "Which sentence features accurate positional inverted structural syntax?",
    answers: { a: "There remains many unanswered questions.", b: "There remain many unanswered questions.", c: "There is remaining many unanswered questions.", d: "There has remained many unanswered questions." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "hard",
    explanation: "The subject 'questions' is plural, requiring the plural verb 'remain'."
  },
  {
    question: "Choose the correct sentence involving indefinite pronouns.",
    answers: { a: "None of the members is happy.", b: "None of the members are happy.", c: "None of the members was happy.", d: "None of the members has been happy." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "medium",
    explanation: "'None' is typically treated as plural when modifying a plural countable noun ('members')."
  },
  {
    question: "Select the sentence with accurate syntax for compound variables.",
    answers: { a: "Macaroni and cheese are my comfort food.", b: "Macaroni and cheese were my comfort food.", c: "Macaroni and cheese is my comfort food.", d: "Macaroni and cheese have been my comfort food." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "easy",
    explanation: "As a single dish, 'Macaroni and cheese' acts as a singular subject, taking 'is'."
  },
  {
    question: "Identify the correct option with a compound subject joined by 'and'.",
    answers: { a: "The writer and director of the movie are giving an interview.", b: "The writer and director of the movie is giving an interview.", c: "The writer and director of the movie were giving an interview.", d: "The writer and director of the movie have given an interview." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "hard",
    explanation: "Because there is only one 'The', 'writer and director' refers to one person, taking the singular verb 'is'."
  },
  {
    question: "Which option handles alternating singular/plural pairings perfectly?",
    answers: { a: "Either the players or the coach are to blame.", b: "Either the players or the coach were to blame.", c: "Either the players or the coach is to blame.", d: "Either the players or the coach have been to blame." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "medium",
    explanation: "The verb agrees with the closest subject, 'coach' (singular)."
  },
  {
    question: "Choose the correct sentence containing unique modifiers.",
    answers: { a: "More than one student are going to the state fair.", b: "More than one student were going to the state fair.", c: "More than one student have gone to the state fair.", d: "More than one student is going to the state fair." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "hard",
    explanation: "The phrase 'more than one' grammatically requires a singular noun and a singular verb ('is')."
  },
  {
    question: "Select the sentence with accurate syntax for plural entity expressions.",
    answers: { a: "The scissors is on the desk.", b: "The scissors are on the desk.", c: "The scissors was on the desk.", d: "The scissors has been on the desk." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "easy",
    explanation: "'Scissors' is a plural noun and takes a plural verb unless preceded by 'a pair of'."
  },
  {
    question: "Identify the option with correct distributive modifier mechanics.",
    answers: { a: "Each of the answers are correct.", b: "Each of the answers is correct.", c: "Each of the answers were correct.", d: "Each of the answers have been correct." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "easy",
    explanation: "The pronoun 'Each' is singular and requires the singular verb 'is'."
  },
  {
    question: "Which sentence displays proper subject-verb matching with continuous quantities.",
    answers: { a: "Some of the milk are spoiled.", b: "Some of the milk were spoiled.", c: "Some of the milk have been spoiled.", d: "Some of the milk is spoiled." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "medium",
    explanation: "'Some' modifies the uncountable noun 'milk', making it singular ('is')."
  },
  {
    question: "Choose the grammatically sound option from the list below.",
    answers: { a: "The family are arguing about where to go for vacation.", b: "The family is arguing about where to go for vacation.", c: "The family was arguing about where to go for vacation.", d: "The family has been arguing about where to go for vacation." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "hard",
    explanation: "The act of arguing implies individuals acting separately, making the collective noun 'family' plural ('are')."
  },
  {
    question: "Select the sentence with proper logic adjustments.",
    answers: { a: "Neither of the options seem viable.", b: "Neither of the options seems viable.", c: "Neither of the options are seeming viable.", d: "Neither of the options were seeming viable." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "medium",
    explanation: "'Neither' is a singular indefinite pronoun, taking the singular verb 'seems'."
  },
  {
    question: "Identify the correct option involving specific quantitative metrics.",
    answers: { a: "Eighty pounds are a lot to lift.", b: "Eighty pounds were a lot to lift.", c: "Eighty pounds have been a lot to lift.", d: "Eighty pounds is a lot to lift." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "easy",
    explanation: "A weight measurement acts as a singular collective block, taking 'is'."
  },
  {
    question: "Which sentence features accurate positional inverted structural syntax?",
    answers: { a: "Beyond the hills lies a tiny village.", b: "Beyond the hills lie a tiny village.", c: "Beyond the hills are lying a tiny village.", d: "Beyond the hills have lain a tiny village." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "medium",
    explanation: "The inverted subject is 'village' (singular), requiring the singular verb 'lies'."
  },
  {
    question: "Choose the correct sentence involving indefinite pronouns.",
    answers: { a: "Most of the students has passed.", b: "Most of the students is passing.", c: "Most of the students have passed.", d: "Most of the students was passing." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "medium",
    explanation: "'Most' scales to the plural 'students', requiring the plural verb 'have'."
  },
  {
    question: "Select the sentence with accurate syntax for compound variables.",
    answers: { a: "Law and order is essential for society.", b: "Law and order are essential for society.", c: "Law and order were essential for society.", d: "Law and order have been essential for society." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "medium",
    explanation: "'Law and order' forms a singular conceptual block, requiring 'is'."
  },
  {
    question: "Identify the correct option with a compound subject joined by 'and'.",
    answers: { a: "The bread and the butter is on the table.", b: "The bread and the butter are on the table.", c: "The bread and the butter was on the table.", d: "The bread and the butter has been on the table." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "medium",
    explanation: "Because both nouns have their own article ('The'), they are distinct items, taking the plural 'are'."
  },
  {
    question: "Which option handles alternating singular/plural pairings perfectly?",
    answers: { a: "Either you or I are going.", b: "Either you or I is going.", c: "Either you or I am going.", d: "Either you or I were going." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "hard",
    explanation: "The verb must agree with the closest subject ('I'), requiring the verb 'am'."
  },
  {
    question: "Choose the correct sentence containing unique modifiers.",
    answers: { a: "The mayor, along with the city council, are voting today.", b: "The mayor, along with the city council, were voting today.", c: "The mayor, along with the city council, have voted today.", d: "The mayor, along with the city council, is voting today." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "medium",
    explanation: "The phrase 'along with' does not make the subject plural. The verb agrees with 'mayor' ('is')."
  },
  {
    question: "Select the sentence with accurate syntax for plural entity expressions.",
    answers: { a: "My trousers is ripped.", b: "My trousers are ripped.", c: "My trousers has been ripped.", d: "My trousers was ripped." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "easy",
    explanation: "'Trousers' is an inherently plural noun and takes a plural verb."
  },
  {
    question: "Identify the option with correct distributive modifier mechanics.",
    answers: { a: "Every book and journal are cataloged.", b: "Every book and journal were cataloged.", c: "Every book and journal is cataloged.", d: "Every book and journal have been cataloged." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "medium",
    explanation: "The word 'Every' distributes singularity across the compound subject, taking 'is'."
  },
  {
    question: "Which sentence displays proper subject-verb matching with continuous quantities.",
    answers: { a: "A lot of people is attending.", b: "A lot of people are attending.", c: "A lot of people was attending.", d: "A lot of people has been attending." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "medium",
    explanation: "'A lot of' matches the plural noun 'people', taking the plural verb 'are'."
  },
  {
    question: "Choose the grammatically sound option from the list below.",
    answers: { a: "Gulliver's Travels are a great book.", b: "Gulliver's Travels were a great book.", c: "Gulliver's Travels have been a great book.", d: "Gulliver's Travels is a great book." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "easy",
    explanation: "A book title is a singular entity and takes a singular verb."
  },
  {
    question: "Select the sentence with proper logic adjustments.",
    answers: { a: "One of the boxes are empty.", b: "One of the boxes is empty.", c: "One of the boxes were empty.", d: "One of the boxes have been empty." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "easy",
    explanation: "The subject is 'One', which is singular and requires 'is'."
  },
  {
    question: "Identify the correct option involving specific quantitative metrics.",
    answers: { a: "Two years are a long time to wait.", b: "Two years is a long time to wait.", c: "Two years were a long time to wait.", d: "Two years have been a long time to wait." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "easy",
    explanation: "A period of time is treated as a singular block, requiring 'is'."
  },
  {
    question: "Which sentence features accurate positional inverted structural syntax?",
    answers: { a: "There is two birds on the branch.", b: "There was two birds on the branch.", c: "There are two birds on the branch.", d: "There has been two birds on the branch." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "easy",
    explanation: "The true subject is 'birds' (plural), requiring 'are'."
  },
  {
    question: "Choose the correct sentence involving indefinite pronouns.",
    answers: { a: "Nobody in the class have the answer.", b: "Nobody in the class are having the answer.", c: "Nobody in the class were having the answer.", d: "Nobody in the class has the answer." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "easy",
    explanation: "The pronoun 'Nobody' is strictly singular and takes 'has'."
  },
  {
    question: "Select the sentence with accurate syntax for compound variables.",
    answers: { a: "Fish and chips is popular in the UK.", b: "Fish and chips are popular in the UK.", c: "Fish and chips were popular in the UK.", d: "Fish and chips have been popular in the UK." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "medium",
    explanation: "As a singular dish, 'Fish and chips' takes the singular verb 'is'."
  },
  {
    question: "Identify the correct option with a compound subject joined by 'and'.",
    answers: { a: "The coach and the captain are discussing strategy.", b: "The coach and the captain is discussing strategy.", c: "The coach and the captain was discussing strategy.", d: "The coach and the captain has been discussing strategy." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "medium",
    explanation: "Two distinct individuals linked by 'and' form a plural subject requiring 'are'."
  },
  {
    question: "Which option handles alternating singular/plural pairings perfectly?",
    answers: { a: "Not only the dog but also the cats is hungry.", b: "Not only the dog but also the cats are hungry.", c: "Not only the dog but also the cats was hungry.", d: "Not only the dog but also the cats has been hungry." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "medium",
    explanation: "The verb matches the nearest subject, 'cats' (plural)."
  },
  {
    question: "Choose the correct sentence containing unique modifiers.",
    answers: { a: "The number of days in a week are seven.", b: "The number of days in a week is seven.", c: "The number of days in a week were seven.", d: "The number of days in a week have been seven." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "medium",
    explanation: "'The number of' behaves as a singular count, taking 'is'."
  },
  {
    question: "Select the sentence with accurate syntax for plural entity expressions.",
    answers: { a: "A pair of glasses are on the table.", b: "A pair of glasses is on the table.", c: "A pair of glasses were on the table.", d: "A pair of glasses have been on the table." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "medium",
    explanation: "The subject is 'pair' (singular), requiring the singular verb 'is'."
  },
  {
    question: "Identify the option with correct distributive modifier mechanics.",
    answers: { a: "Each boy and girl receives a gift.", b: "Each boy and girl receive a gift.", c: "Each boy and girl are receiving a gift.", d: "Each boy and girl were receiving a gift." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "medium",
    explanation: "'Each' forces the compound subject to be singular, taking 'receives'."
  },
  {
    question: "Which sentence displays proper subject-verb matching with continuous quantities.",
    answers: { a: "A lot of the water have evaporated.", b: "A lot of the water are evaporated.", c: "A lot of the water were evaporated.", d: "A lot of the water has evaporated." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "medium",
    explanation: "'Water' is uncountable, so 'A lot of' takes a singular verb."
  },
  {
    question: "Choose the grammatically sound option from the list below.",
    answers: { a: "Economics is a difficult subject.", b: "Economics are a difficult subject.", c: "Economics were a difficult subject.", d: "Economics have been a difficult subject." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "easy",
    explanation: "Academic subjects ending in '-ics' are singular."
  },
  {
    question: "Select the sentence with proper logic adjustments.",
    answers: { a: "Someone are knocking at the door.", b: "Someone is knocking at the door.", c: "Someone were knocking at the door.", d: "Someone have been knocking at the door." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "easy",
    explanation: "'Someone' is a singular indefinite pronoun, requiring 'is'."
  },
  {
    question: "Identify the correct option involving specific quantitative metrics.",
    answers: { a: "Ten percent of the profit go to charity.", b: "Ten percent of the profit goes to charity.", c: "Ten percent of the profit are going to charity.", d: "Ten percent of the profit were going to charity." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "medium",
    explanation: "The percentage modifies 'profit' (singular), taking the singular verb 'goes'."
  },
  {
    question: "Which sentence features accurate positional inverted structural syntax?",
    answers: { a: "On the wall hangs two paintings.", b: "On the wall hang two paintings.", c: "On the wall is hanging two paintings.", d: "On the wall has hung two paintings." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "hard",
    explanation: "The inverted subject is 'paintings' (plural), requiring 'hang'."
  },
  {
    question: "Choose the correct sentence involving indefinite pronouns.",
    answers: { a: "All of the cake have been eaten.", b: "All of the cake is eaten.", c: "All of the cake are eaten.", d: "All of the cake has been eaten." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "medium",
    explanation: "'All' modifies the singular 'cake', requiring the singular verb 'has been'."
  },
  {
    question: "Select the sentence with accurate syntax for compound variables.",
    answers: { a: "Bed and breakfast are a popular accommodation type.", b: "Bed and breakfast were a popular accommodation type.", c: "Bed and breakfast is a popular accommodation type.", d: "Bed and breakfast have been a popular accommodation type." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "medium",
    explanation: "As a unified lodging concept, 'Bed and breakfast' takes 'is'."
  },
  {
    question: "Identify the correct option with a compound subject joined by 'and'.",
    answers: { a: "My brother and my sister is visiting.", b: "My brother and my sister are visiting.", c: "My brother and my sister was visiting.", d: "My brother and my sister has been visiting." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "easy",
    explanation: "Two separate individuals joined by 'and' require a plural verb."
  },
  {
    question: "Which option handles alternating singular/plural pairings perfectly?",
    answers: { a: "Neither the children nor the mother are going.", b: "Neither the children nor the mother were going.", c: "Neither the children nor the mother have gone.", d: "Neither the children nor the mother is going." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "medium",
    explanation: "The verb matches 'mother', the closest singular subject."
  },
  {
    question: "Choose the correct sentence containing unique modifiers.",
    answers: { a: "A number of cars is parked outside.", b: "A number of cars are parked outside.", c: "A number of cars was parked outside.", d: "A number of cars has been parked outside." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "medium",
    explanation: "'A number of' acts as a plural quantifier, taking 'are'."
  },
  {
    question: "Select the sentence with accurate syntax for plural entity expressions.",
    answers: { a: "The pliers is broken.", b: "The pliers are broken.", c: "The pliers was broken.", d: "The pliers has been broken." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "easy",
    explanation: "Tools with two parts like 'pliers' are inherently plural."
  },
  {
    question: "Identify the option with correct distributive modifier mechanics.",
    answers: { a: "Every dog and cat have a microchip.", b: "Every dog and cat has a microchip.", c: "Every dog and cat are having a microchip.", d: "Every dog and cat were having a microchip." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "medium",
    explanation: "'Every' distributes singularity, requiring the singular 'has'."
  },
  {
    question: "Which sentence displays proper subject-verb matching with continuous quantities.",
    answers: { a: "Most of the cookies is gone.", b: "Most of the cookies was gone.", c: "Most of the cookies has been gone.", d: "Most of the cookies are gone." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "medium",
    explanation: "'Most' modifies 'cookies' (plural), taking the plural verb 'are'."
  },
  {
    question: "Choose the grammatically sound option from the list below.",
    answers: { a: "Billiards are played in this room.", b: "Billiards were played in this room.", c: "Billiards have been played in this room.", d: "Billiards is played in this room." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "easy",
    explanation: "Games ending in '-s' like billiards or darts are singular."
  },
  {
    question: "Select the sentence with proper logic adjustments.",
    answers: { a: "Either of the choices are fine.", b: "Either of the choices is fine.", c: "Either of the choices were fine.", d: "Either of the choices have been fine." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "medium",
    explanation: "'Either' is a singular indefinite pronoun, requiring 'is'."
  },
  {
    question: "Identify the correct option involving specific quantitative metrics.",
    answers: { a: "Fifty dollars are a high price for a ticket.", b: "Fifty dollars is a high price for a ticket.", c: "Fifty dollars were a high price for a ticket.", d: "Fifty dollars have been a high price for a ticket." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "easy",
    explanation: "An amount of money takes a singular verb."
  },
  {
    question: "Which sentence features accurate positional inverted structural syntax?",
    answers: { a: "In the drawer is the missing keys.", b: "In the drawer was the missing keys.", c: "In the drawer has been the missing keys.", d: "In the drawer are the missing keys." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "medium",
    explanation: "The true subject 'keys' is plural, requiring 'are'."
  },
  {
    question: "Choose the correct sentence involving indefinite pronouns.",
    answers: { a: "Few of the participants is willing to speak.", b: "Few of the participants are willing to speak.", c: "Few of the participants was willing to speak.", d: "Few of the participants has been willing to speak." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "easy",
    explanation: "The pronoun 'Few' is always plural."
  },
  {
    question: "Select the sentence with accurate syntax for compound variables.",
    answers: { a: "Trial and error is the only way to solve it.", b: "Trial and error are the only way to solve it.", c: "Trial and error were the only way to solve it.", d: "Trial and error have been the only way to solve it." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "medium",
    explanation: "'Trial and error' functions as a single conceptual method."
  },
  {
    question: "Identify the correct option with a compound subject joined by 'and'.",
    answers: { a: "The wind and the rain is damaging the crops.", b: "The wind and the rain are damaging the crops.", c: "The wind and the rain was damaging the crops.", d: "The wind and the rain has been damaging the crops." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "easy",
    explanation: "Two separate elements linked by 'and' form a plural subject."
  },
  {
    question: "Which option handles alternating singular/plural pairings perfectly?",
    answers: { a: "Either the teacher or the students is organizing the trip.", b: "Either the teacher or the students was organizing the trip.", c: "Either the teacher or the students are organizing the trip.", d: "Either the teacher or the students has organized the trip." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "medium",
    explanation: "The verb agrees with the closer subject, 'students' (plural)."
  },
  {
    question: "Choose the correct sentence containing unique modifiers.",
    answers: { a: "The committee, despite its differences, are voting tomorrow.", b: "The committee, despite its differences, is voting tomorrow.", c: "The committee, despite its differences, were voting tomorrow.", d: "The committee, despite its differences, have voted tomorrow." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "hard",
    explanation: "The singular collective noun 'committee' takes 'is', and the modifying phrase does not change this."
  },
  {
    question: "Select the sentence with accurate syntax for plural entity expressions.",
    answers: { a: "A pair of twins is enrolling today.", b: "A pair of twins are enrolling today.", c: "A pair of twins were enrolling today.", d: "A pair of twins have been enrolling today." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "medium",
    explanation: "The head noun 'pair' is singular, requiring 'is'."
  },
  {
    question: "Identify the option with correct distributive modifier mechanics.",
    answers: { a: "Every cup and saucer were washed.", b: "Every cup and saucer have been washed.", c: "Every cup and saucer are washed.", d: "Every cup and saucer was washed." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "medium",
    explanation: "'Every' applies singular agreement to the compound subject, requiring 'was'."
  },
  {
    question: "Which sentence displays proper subject-verb matching with continuous quantities.",
    answers: { a: "A large portion of the pie are missing.", b: "A large portion of the pie is missing.", c: "A large portion of the pie were missing.", d: "A large portion of the pie have been missing." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "medium",
    explanation: "'Portion' refers to a part of a singular uncountable entity, taking 'is'."
  },
  {
    question: "Choose the grammatically sound option from the list below.",
    answers: { a: "Mathematics are challenging for many.", b: "Mathematics is challenging for many.", c: "Mathematics were challenging for many.", d: "Mathematics have been challenging for many." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "easy",
    explanation: "Academic subjects ending in '-ics' are singular."
  },
  {
    question: "Select the sentence with proper logic adjustments.",
    answers: { a: "None of the boys are ready.", b: "None of the boys is ready.", c: "None of the boys was ready.", d: "None of the boys has been ready." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "hard",
    explanation: "In modern English usage, 'None' modifying a plural count noun usually takes a plural verb ('are')."
  },
  {
    question: "Identify the correct option involving specific quantitative metrics.",
    answers: { a: "Six months are a long wait.", b: "Six months is a long wait.", c: "Six months were a long wait.", d: "Six months have been a long wait." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "easy",
    explanation: "A block of time ('Six months') is considered singular."
  },
  {
    question: "Which sentence features accurate positional inverted structural syntax?",
    answers: { a: "Out of the woods come a giant bear.", b: "Out of the woods comes a giant bear.", c: "Out of the woods are coming a giant bear.", d: "Out of the woods have come a giant bear." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "medium",
    explanation: "The true subject 'bear' is singular, requiring 'comes'."
  },
  {
    question: "Choose the correct sentence involving indefinite pronouns.",
    answers: { a: "Many of the tourists is lost.", b: "Many of the tourists was lost.", c: "Many of the tourists are lost.", d: "Many of the tourists has been lost." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "easy",
    explanation: "'Many' is a plural pronoun and takes 'are'."
  },
  {
    question: "Select the sentence with accurate syntax for compound variables.",
    answers: { a: "Bacon and eggs is a great meal.", b: "Bacon and eggs are a great meal.", c: "Bacon and eggs were a great meal.", d: "Bacon and eggs have been a great meal." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "medium",
    explanation: "When grouped as a single meal concept, it takes 'is'."
  },
  {
    question: "Identify the correct option with a compound subject joined by 'and'.",
    answers: { a: "My aunt and uncle is visiting this weekend.", b: "My aunt and uncle are visiting this weekend.", c: "My aunt and uncle was visiting this weekend.", d: "My aunt and uncle has been visiting this weekend." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "easy",
    explanation: "Two separate family members joined by 'and' form a plural subject."
  },
  {
    question: "Which option handles alternating singular/plural pairings perfectly?",
    answers: { a: "Neither the manager nor the workers is going.", b: "Neither the manager nor the workers was going.", c: "Neither the manager nor the workers are going.", d: "Neither the manager nor the workers has gone." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "medium",
    explanation: "The verb matches 'workers', the closer plural subject."
  },
  {
    question: "Choose the correct sentence containing unique modifiers.",
    answers: { a: "The captain, as well as the sailors, are surviving.", b: "The captain, as well as the sailors, were surviving.", c: "The captain, as well as the sailors, have survived.", d: "The captain, as well as the sailors, is surviving." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "medium",
    explanation: "Modifiers like 'as well as' don't change the singularity of the subject 'captain'."
  },
  {
    question: "Select the sentence with accurate syntax for plural entity expressions.",
    answers: { a: "The tweezers is on the shelf.", b: "The tweezers are on the shelf.", c: "The tweezers was on the shelf.", d: "The tweezers has been on the shelf." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "easy",
    explanation: "'Tweezers' is a plural noun requiring 'are'."
  },
  {
    question: "Identify the option with correct distributive modifier mechanics.",
    answers: { a: "Each and every student are required to pass.", b: "Each and every student were required to pass.", c: "Each and every student is required to pass.", d: "Each and every student have been required to pass." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "medium",
    explanation: "The redundant phrase 'Each and every' still enforces a singular subject."
  },
  {
    question: "Which sentence displays proper subject-verb matching with continuous quantities.",
    answers: { a: "All of the equipment are functional.", b: "All of the equipment is functional.", c: "All of the equipment were functional.", d: "All of the equipment have been functional." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "medium",
    explanation: "'Equipment' is an uncountable mass noun, requiring the singular 'is'."
  },
  {
    question: "Choose the grammatically sound option from the list below.",
    answers: { a: "Gymnastics are an Olympic sport.", b: "Gymnastics is an Olympic sport.", c: "Gymnastics were an Olympic sport.", d: "Gymnastics have been an Olympic sport." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "easy",
    explanation: "Names of sports ending in '-s' are singular."
  },
  {
    question: "Select the sentence with proper logic adjustments.",
    answers: { a: "Anyone is welcome to join.", b: "Anyone are welcome to join.", c: "Anyone were welcome to join.", d: "Anyone have been welcome to join." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "easy",
    explanation: "'Anyone' is a singular indefinite pronoun."
  },
  {
    question: "Identify the correct option involving specific quantitative metrics.",
    answers: { a: "Three tablespoons of sugar is needed.", b: "Three tablespoons of sugar are needed.", c: "Three tablespoons of sugar were needed.", d: "Three tablespoons of sugar have been needed." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "medium",
    explanation: "A measured amount is treated as a singular unit."
  },
  {
    question: "Which sentence features accurate positional inverted structural syntax?",
    answers: { a: "Here is the reports you requested.", b: "Here was the reports you requested.", c: "Here are the reports you requested.", d: "Here has been the reports you requested." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "easy",
    explanation: "The true subject 'reports' is plural."
  },
  {
    question: "Choose the correct sentence involving indefinite pronouns.",
    answers: { a: "Several of the guests is leaving.", b: "Several of the guests was leaving.", c: "Several of the guests are leaving.", d: "Several of the guests has been leaving." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "easy",
    explanation: "'Several' is a plural pronoun."
  },
  {
    question: "Select the sentence with accurate syntax for compound variables.",
    answers: { a: "Research and development are key to our success.", b: "Research and development is key to our success.", c: "Research and development were key to our success.", d: "Research and development have been key to our success." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "hard",
    explanation: "As a single combined corporate department, it takes 'is'."
  },
  {
    question: "Identify the correct option with a compound subject joined by 'and'.",
    answers: { a: "The cat and the dog is fighting again.", b: "The cat and the dog are fighting again.", c: "The cat and the dog was fighting again.", d: "The cat and the dog has been fighting again." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "easy",
    explanation: "Two distinct animals joined by 'and' require 'are'."
  },
  {
    question: "Which option handles alternating singular/plural pairings perfectly?",
    answers: { a: "Either the CEO or the executives is attending.", b: "Either the CEO or the executives was attending.", c: "Either the CEO or the executives are attending.", d: "Either the CEO or the executives has attended." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "medium",
    explanation: "The verb agrees with 'executives' (plural)."
  },
  {
    question: "Choose the correct sentence containing unique modifiers.",
    answers: { a: "The house, complete with its furnishings, are for sale.", b: "The house, complete with its furnishings, were for sale.", c: "The house, complete with its furnishings, have been for sale.", d: "The house, complete with its furnishings, is for sale." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "medium",
    explanation: "The parenthetical phrase doesn't change the singular subject 'house'."
  },
  {
    question: "Select the sentence with accurate syntax for plural entity expressions.",
    answers: { a: "The goggles is fogging up.", b: "The goggles are fogging up.", c: "The goggles was fogging up.", d: "The goggles has been fogging up." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "easy",
    explanation: "'Goggles' is a plural noun taking 'are'."
  },
  {
    question: "Identify the option with correct distributive modifier mechanics.",
    answers: { a: "Every man, woman, and child are affected.", b: "Every man, woman, and child were affected.", c: "Every man, woman, and child is affected.", d: "Every man, woman, and child have been affected." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "medium",
    explanation: "'Every' makes the entire compound subject singular."
  },
  {
    question: "Which sentence displays proper subject-verb matching with continuous quantities.",
    answers: { a: "A vast amount of time is wasted.", b: "A vast amount of time are wasted.", c: "A vast amount of time were wasted.", d: "A vast amount of time have been wasted." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "medium",
    explanation: "'Time' is uncountable, taking the singular 'is'."
  },
  {
    question: "Choose the grammatically sound option from the list below.",
    answers: { a: "Darts are a fun game.", b: "Darts is a fun game.", c: "Darts were a fun game.", d: "Darts have been a fun game." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "easy",
    explanation: "The game 'Darts' is a singular noun."
  },
  {
    question: "Select the sentence with proper logic adjustments.",
    answers: { a: "Somebody have left their bag here.", b: "Somebody are leaving their bag here.", c: "Somebody were leaving their bag here.", d: "Somebody has left their bag here." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "easy",
    explanation: "'Somebody' is a singular indefinite pronoun."
  },
  {
    question: "Identify the correct option involving specific quantitative metrics.",
    answers: { a: "Ten degrees are too cold for me.", b: "Ten degrees is too cold for me.", c: "Ten degrees were too cold for me.", d: "Ten degrees have been too cold for me." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "medium",
    explanation: "A measurement of temperature acts as a singular unit."
  },
  {
    question: "Which sentence features accurate positional inverted structural syntax?",
    answers: { a: "Inside the box was two rings.", b: "Inside the box has been two rings.", c: "Inside the box is two rings.", d: "Inside the box were two rings." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "medium",
    explanation: "The true subject 'rings' is plural, requiring 'were'."
  },
  {
    question: "Choose the correct sentence involving indefinite pronouns.",
    answers: { a: "Both of the books is good.", b: "Both of the books are good.", c: "Both of the books was good.", d: "Both of the books has been good." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "easy",
    explanation: "'Both' requires a plural verb."
  },
  {
    question: "Select the sentence with accurate syntax for compound variables.",
    answers: { a: "Peace and quiet are all I ask for.", b: "Peace and quiet is all I ask for.", c: "Peace and quiet were all I ask for.", d: "Peace and quiet have been all I ask for." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "hard",
    explanation: "The conceptual state of 'Peace and quiet' is a singular idea."
  },
  {
    question: "Identify the correct option with a compound subject joined by 'and'.",
    answers: { a: "The car and the bike is parked outside.", b: "The car and the bike are parked outside.", c: "The car and the bike was parked outside.", d: "The car and the bike has been parked outside." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "easy",
    explanation: "Two separate items form a plural subject."
  },
  {
    question: "Which option handles alternating singular/plural pairings perfectly?",
    answers: { a: "Neither the parents nor the child are ready.", b: "Neither the parents nor the child is ready.", c: "Neither the parents nor the child were ready.", d: "Neither the parents nor the child have been ready." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "medium",
    explanation: "The verb matches 'child', the closer singular subject."
  },
  {
    question: "Choose the correct sentence containing unique modifiers.",
    answers: { a: "The ship, together with its crew, are lost.", b: "The ship, together with its crew, were lost.", c: "The ship, together with its crew, is lost.", d: "The ship, together with its crew, have been lost." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "medium",
    explanation: "'Together with' doesn't pluralize the singular subject 'ship'."
  },
  {
    question: "Select the sentence with accurate syntax for plural entity expressions.",
    answers: { a: "The binoculars is broken.", b: "The binoculars are broken.", c: "The binoculars was broken.", d: "The binoculars has been broken." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "easy",
    explanation: "'Binoculars' requires a plural verb."
  },
  {
    question: "Identify the option with correct distributive modifier mechanics.",
    answers: { a: "Each apple and orange are fresh.", b: "Each apple and orange were fresh.", c: "Each apple and orange have been fresh.", d: "Each apple and orange is fresh." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "medium",
    explanation: "'Each' mandates singular agreement."
  },
  {
    question: "Which sentence displays proper subject-verb matching with continuous quantities.",
    answers: { a: "Much of the land is flooded.", b: "Much of the land are flooded.", c: "Much of the land were flooded.", d: "Much of the land have been flooded." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "easy",
    explanation: "'Much' operates with uncountable nouns to form a singular subject."
  },
  {
    question: "Choose the grammatically sound option from the list below.",
    answers: { a: "Rabies are a serious disease.", b: "Rabies were a serious disease.", c: "Rabies is a serious disease.", d: "Rabies have been a serious disease." },
    correctAnswer: "c",
    category: "agreement",
    difficulty: "easy",
    explanation: "Diseases like rabies take singular verbs."
  },
  {
    question: "Select the sentence with proper logic adjustments.",
    answers: { a: "Nothing is impossible.", b: "Nothing are impossible.", c: "Nothing were impossible.", d: "Nothing have been impossible." },
    correctAnswer: "a",
    category: "agreement",
    difficulty: "easy",
    explanation: "'Nothing' is a singular indefinite pronoun."
  },
  {
    question: "Identify the correct option involving specific quantitative metrics.",
    answers: { a: "Twenty dollars are a fair price.", b: "Twenty dollars is a fair price.", c: "Twenty dollars were a fair price.", d: "Twenty dollars have been a fair price." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "easy",
    explanation: "A sum of money takes a singular verb."
  },
  {
    question: "Which sentence features accurate positional inverted structural syntax?",
    answers: { a: "There is the documents you needed.", b: "There was the documents you needed.", c: "There has been the documents you needed.", d: "There are the documents you needed." },
    correctAnswer: "d",
    category: "agreement",
    difficulty: "easy",
    explanation: "The true subject 'documents' is plural."
  },
  {
    question: "Choose the correct sentence involving indefinite pronouns.",
    answers: { a: "Some of the books is missing.", b: "Some of the books are missing.", c: "Some of the books was missing.", d: "Some of the books has been missing." },
    correctAnswer: "b",
    category: "agreement",
    difficulty: "medium",
    explanation: "'Some' modifies 'books' (plural count noun), requiring 'are'."
  },
  
  
  
  
  

  // ==========================================
  // SECTION 4: PREPOSITIONS & ARTICLES (Category: prepositions)
  // ==========================================
  {
    question: "Select the correct use of articles: He is ____ honest man.",
    answers: { a: "a", b: "the", c: "an", d: "no article" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The word 'honest' begins with a silent 'h'. Because it starts with a vowel sound, the correct indefinite article is 'an'."
  },
  {
    question: "Select the correct use of prepositions: She is exceptionally good ____ singing.",
    answers: { a: "in", b: "at", c: "on", d: "with" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The adjective 'good' matches with the preposition 'at' when referencing skill proficiency."
  },
  {
    question: "Choose the correct preposition: He arrived ____ the airport just in time.",
    answers: { a: "at", b: "in", c: "to", d: "on" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "medium",
    explanation: "We use the preposition 'at' for specific, functional locations such as airports, stations, or buildings."
  },
  {
    question: "Select the correct preposition: The reference book is ____ the table.",
    answers: { a: "in", b: "on", c: "at", d: "of" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The preposition 'on' is used to indicate position on top of, and in physical contact with, a flat surface."
  },
  {
    question: "Select the correct preposition: She is highly interested ____ learning new languages.",
    answers: { a: "in", b: "of", c: "on", d: "with" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The adjective 'interested' is idiomatically paired with the preposition 'in' to indicate attention or concern."
  },
  {
    question: "Choose the correct preposition: She is married ____ a prominent doctor.",
    answers: { a: "to", b: "with", c: "for", d: "at" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "hard",
    explanation: "The passive verb or adjective 'married' takes the preposition 'to', not 'with'."
  },
  {
    question: "Choose the correct article for the description: I saw ____ car parked in front of my house, and ____ car was blue.",
    answers: { a: "a... the", b: "the... a", c: "a... a", d: "the... the" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "medium",
    explanation: "Use the indefinite article 'a' for first-time mentions of countable nouns, and 'the' for subsequent mentions of the same noun."
  },
  {
    question: "Choose the correct preposition: They were excited ____ the upcoming holiday trip.",
    answers: { a: "about", b: "of", c: "for", d: "to" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "medium",
    explanation: "The adjective 'excited' is commonly followed by the preposition 'about' when referencing an upcoming event."
  },
  {
    question: "Choose the correct preposition: The manager is responsible ____ the performance of the branch.",
    answers: { a: "for", b: "with", c: "to", d: "of" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "medium",
    explanation: "The adjective 'responsible' is paired with 'for' when expressing accountability or duty."
  },
  {
    question: "Choose the correct preposition: She is fond ____ painting classical portraits.",
    answers: { a: "of", b: "in", c: "on", d: "with" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "hard",
    explanation: "The adjective 'fond' is paired with the preposition 'of' when expressing affection or liking."
  },
  {
    question: "Fill in the blank: The physical textbook is resting ____ the desk.",
    answers: { a: "in", b: "on", c: "at", d: "of" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The preposition 'on' is used to show a position of physical contact on a flat surface."
  },
  {
    question: "Select the correct article: She is planning to buy ____ umbrella before the rain starts.",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "Use the indefinite article 'an' before singular countable nouns that start with a vowel sound (u-m-brella)."
  },
  {
    question: "Complete the sentence: They have been living ____ London for several years.",
    answers: { a: "in", b: "on", c: "at", d: "by" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "easy",
    explanation: "Use the preposition 'in' for geographic regions, cities, states, or countries."
  },
  {
    question: "Fill in the blank: He is highly afraid ____ spiders and insects.",
    answers: { a: "with", b: "about", c: "of", d: "at" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The adjective 'afraid' is idiomatically paired with the preposition 'of'."
  },
  {
    question: "Complete the expression: We always go to the beautiful beach ____ summer.",
    answers: { a: "on", b: "at", c: "in", d: "by" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "easy",
    explanation: "Use the preposition 'in' when talking about seasons, months, or years."
  },
  {
    question: "Choose the correct preposition: She apologized sincerely ____ her lateness to the meeting.",
    answers: { a: "for", b: "about", c: "to", d: "with" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "medium",
    explanation: "The verb 'apologize' is followed by 'to' for a person, and 'for' for the reason or action."
  },
  {
    question: "Fill in the blank: The entire project's outcome depends ____ your final decision.",
    answers: { a: "on", b: "at", c: "with", d: "about" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "medium",
    explanation: "The verb 'depend' is paired with the preposition 'on' to show reliance or condition."
  },
  {
    question: "Complete the sentence: He graduated ____ college with honors last May.",
    answers: { a: "at", b: "from", c: "in", d: "by" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "medium",
    explanation: "To complete the education journey from an institution, use the verb 'graduate' with 'from'."
  },
  {
    question: "Fill in the blank: We are unfortunately quite short ____ staff this week.",
    answers: { a: "with", b: "about", c: "of", d: "on" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "medium",
    explanation: "The adjective phrase 'short of' is used to indicate an insufficient supply of something."
  },
  {
    question: "Choose the correct phrase: The historic novel has been translated ____ twelve languages.",
    answers: { a: "into", b: "to", c: "in", d: "with" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "medium",
    explanation: "We use the preposition 'into' to show conversion, change of state, or translation between languages."
  },
  {
    question: "Choose the correct adjective preposition: She was completely oblivious ____ the potential hazards around her.",
    answers: { a: "to", b: "of", c: "about", d: "with" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "hard",
    explanation: "The adjective 'oblivious' is historically and idiomatically paired with the preposition 'to' (or sometimes 'of')."
  },
  {
    question: "Fill in the blank: The suspect was officially charged ____ theft and vandalism.",
    answers: { a: "of", b: "for", c: "with", d: "by" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "hard",
    explanation: "In legal contexts, one is 'accused of' a crime, but 'charged with' a crime."
  },
  {
    question: "Select the correct combination: His radical views are simply not compatible ____ our company culture.",
    answers: { a: "with", b: "to", c: "for", d: "by" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "hard",
    explanation: "The adjective 'compatible' is paired with the preposition 'with' to denote harmony or alignment."
  },
  {
    question: "Complete the statement: He is remarkably adept ____ resolving complex interpersonal disputes.",
    answers: { a: "at", b: "in", c: "with", d: "for" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "hard",
    explanation: "The adjective 'adept' is followed by 'at' (or 'in') when indicating specialized skill or dexterity."
  },
  {
    question: "Fill in the blank: Certain charitable organizations are entirely exempt ____ local property taxes.",
    answers: { a: "from", b: "of", c: "with", d: "by" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "hard",
    explanation: "To be free from an obligation or liability is to be 'exempt from' it."
  },
  
  
  {
    question: "Select the correct use of articles: She wants to be ____ doctor.",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The word 'doctor' begins with a consonant sound ('d'), so the indefinite article 'a' is used before it."
  },
  {
    question: "Select the correct use of articles: Paris is ____ capital of France.",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "easy",
    explanation: "We use 'the' because 'capital of France' is a specific, unique noun phrase."
  },
  {
    question: "Select the correct use of articles: I saw ____ eagle flying high in the sky.",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The word 'eagle' begins with a vowel sound, so the indefinite article 'an' is appropriate."
  },
  {
    question: "Select the correct use of articles: They prefer traveling by ____ bus.",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "d",
    category: "prepositions",
    difficulty: "easy",
    explanation: "No article is used in the idiomatic expression 'by bus', 'by train', or 'by car' when talking about means of transport."
  },
  {
    question: "Select the correct use of articles: Copper is ____ useful metal.",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "medium",
    explanation: "Although 'useful' begins with the vowel letter 'u', it starts with a consonant sound ('yoo'). Therefore, 'a' is used."
  },
  {
    question: "Select the correct use of articles: He graduated with ____ M.A. degree in English literature.",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "medium",
    explanation: "The abbreviation 'M.A.' is pronounced starting with a vowel sound ('em'), requiring the article 'an'."
  },
  {
    question: "Select the correct use of articles: Sri Lanka is ____ island in the Indian Ocean.",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The word 'island' begins with a vowel sound, so 'an' is the correct indefinite article."
  },
  {
    question: "Select the correct use of articles: ____ sun shines brightly during the day.",
    answers: { a: "A", b: "An", c: "The", d: "No article" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The definite article 'the' is used before unique celestial bodies like the sun, moon, and earth."
  },
  {
    question: "Select the correct use of articles: She is ____ untidy girl.",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The adjective 'untidy' begins with a short vowel sound, so it takes the indefinite article 'an'."
  },
  {
    question: "Select the correct use of articles: Wisdom is ____ gift of heaven.",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "medium",
    explanation: "The definite article 'the' is used here to specify a particular gift defined by the phrase 'of heaven'."
  },
  {
    question: "Select the correct use of articles: He promised to return after ____ hour.",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The 'h' in 'hour' is silent, making the word begin with a vowel sound, which requires 'an'."
  },
  {
    question: "Select the correct use of articles: Which is ____ tallest building in the world?",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "easy",
    explanation: "Superlative adjectives like 'tallest' always require the definite article 'the'."
  },
  {
    question: "Select the correct use of articles: She loves playing ____ violin in her free time.",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "medium",
    explanation: "The definite article 'the' is standard when referring to playing musical instruments."
  },
  {
    question: "Select the correct use of articles: This discovery represents ____ unique case in science.",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "medium",
    explanation: "The word 'unique' begins with a consonant sound ('yoo'), so the correct indefinite article is 'a'."
  },
  {
    question: "Select the correct use of articles: They moved into ____ old house at the corner.",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The word 'old' begins with a vowel sound, so 'an' is the appropriate indefinite article."
  },
  {
    question: "Select the correct use of articles: My cousin is ____ university student.",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The word 'university' begins with a consonant sound ('yoo'), meaning it takes 'a' instead of 'an'."
  },
  {
    question: "Select the correct use of articles: Honest men always speak ____ truth.",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The phrase is an established idiom: 'speak the truth'."
  },
  {
    question: "Select the correct use of articles: She eats ____ apple every morning.",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The singular countable noun 'apple' starts with a vowel sound, demanding 'an'."
  },
  {
    question: "Select the correct use of articles: Gold is ____ precious metal.",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The noun phrase 'precious metal' begins with a consonant sound, so 'a' is correct."
  },
  {
    question: "Select the correct preposition: She is highly proficient ____ English.",
    answers: { a: "at", b: "in", c: "with", d: "for" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "medium",
    explanation: "The adjective 'proficient' is conventionally followed by the preposition 'in' when referring to a field or language."
  },
  {
    question: "Select the correct preposition: The old man died ____ cholera.",
    answers: { a: "from", b: "by", c: "of", d: "with" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "easy",
    explanation: "When someone passes away due to a disease, we use the phrase 'died of'."
  },
  {
    question: "Select the correct preposition: My sister is very fond ____ classical music.",
    answers: { a: "to", b: "of", c: "for", d: "about" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The adjective 'fond' always takes the fixed preposition 'of'."
  },
  {
    question: "Select the correct preposition: Please divide the apples ____ the two brothers.",
    answers: { a: "among", b: "between", c: "with", d: "to" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "We use 'between' when dividing or distributing items specifically involving two parties."
  },
  {
    question: "Select the correct preposition: Distribute the sweets ____ the children in the classroom.",
    answers: { a: "between", b: "among", c: "through", d: "by" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "We use 'among' when distributing items to a group of more than two individuals."
  },
  {
    question: "Select the correct preposition: The startled cat jumped ____ the table.",
    answers: { a: "onto", b: "in", c: "at", d: "into" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "easy",
    explanation: "'Onto' signifies movement toward a position on a surface."
  },
  {
    question: "Select the correct preposition: He has been suffering from fever ____ last Monday.",
    answers: { a: "for", b: "from", c: "since", d: "by" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "easy",
    explanation: "In perfect tenses, 'since' is used to mark a specific starting point in time."
  },
  {
    question: "Select the correct preposition: She has been living in this city ____ five years.",
    answers: { a: "since", b: "for", c: "during", d: "before" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "We use 'for' to denote a duration or period of time."
  },
  {
    question: "Select the correct preposition: Could you tell me what the time is ____ your watch?",
    answers: { a: "in", b: "by", c: "on", d: "at" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "medium",
    explanation: "The standard English idiom for asking time according to a timepiece is 'by your watch'."
  },
  {
    question: "Select the correct preposition: After a long day, I am tired ____ walking.",
    answers: { a: "with", b: "by", c: "of", d: "from" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The expression 'tired of' means weary or exhausted by a continuous activity."
  },
  {
    question: "Select the correct preposition: In terms of corporate hierarchy, he is senior ____ me.",
    answers: { a: "than", b: "to", c: "from", d: "with" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "Adjectives like senior, junior, superior, and inferior take the preposition 'to' instead of 'than'."
  },
  {
    question: "Select the correct preposition: Please look attentively ____ the blackboard.",
    answers: { a: "to", b: "on", c: "at", d: "towards" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The verb 'look' takes the preposition 'at' when directing sight toward a specific object."
  },
  {
    question: "Select the correct preposition: Translate this passage from Bengali ____ English.",
    answers: { a: "to", b: "into", c: "in", d: "for" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "'Into' is used to express a change of state, form, or language."
  },
  {
    question: "Select the correct preposition: Unfortunately, he is blind ____ one eye.",
    answers: { a: "in", b: "of", c: "with", d: "to" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "medium",
    explanation: "When referring to physical sight loss in an eye, 'blind in' is the standard phrase."
  },
  {
    question: "Select the correct preposition: Beware ____ pickpockets when you are in crowded buses.",
    answers: { a: "from", b: "with", c: "of", d: "against" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The verb/adjective phrase 'beware' is followed by the fixed preposition 'of'."
  },
  {
    question: "Select the correct preposition: Open your text book ____ page 45.",
    answers: { a: "on", b: "at", c: "to", d: "in" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "medium",
    explanation: "We use 'at' to specify a precise location or point within a document or book."
  },
  {
    question: "Select the correct preposition: The archer aimed directly ____ the target.",
    answers: { a: "on", b: "to", c: "at", d: "against" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The verb 'aim' takes the preposition 'at' when targeting a specific point."
  },
  {
    question: "Select the correct preposition: We must not laugh ____ the misfortunes of the poor.",
    answers: { a: "on", b: "for", c: "at", d: "with" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "easy",
    explanation: "To mock or show derition requires the phrase 'laugh at'."
  },
  {
    question: "Select the correct preposition: A true gentleman stays true ____ his word.",
    answers: { a: "with", b: "to", c: "for", d: "by" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The expression 'true to' means remaining loyal or faithful to an obligation or promise."
  },
  {
    question: "Select the correct preposition: After deep consideration, I agree ____ your proposal.",
    answers: { a: "with", b: "to", c: "on", d: "for" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "medium",
    explanation: "One agrees 'to' a proposal, plan, or suggestion, whereas one agrees 'with' a person."
  },
  {
    question: "Select the correct preposition: I completely agree ____ you on this political matter.",
    answers: { a: "to", b: "with", c: "for", d: "by" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "We use 'agree with' when indicating alignment of views with another person."
  },
  {
    question: "Select the correct preposition: The suspect was accused ____ theft by the local police.",
    answers: { a: "for", b: "with", c: "of", d: "by" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The verb 'accuse' takes the mandatory preposition 'of' before the crime."
  },
  {
    question: "Select the correct preposition: The child is terrified and afraid ____ spiders.",
    answers: { a: "from", b: "by", c: "with", d: "of" },
    correctAnswer: "d",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The adjective 'afraid' is paired with 'of' to denote the source of fear."
  },
  {
    question: "Select the correct preposition: The principal congratulated me ____ my excellent academic performance.",
    answers: { a: "for", b: "on", c: "at", d: "with" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "medium",
    explanation: "The verb 'congratulate' is followed by 'on' to highlight the occasion or reason for praise."
  },
  {
    question: "Select the correct preposition: In times of trouble, you should depend ____ your own abilities.",
    answers: { a: "to", b: "on", c: "with", d: "for" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The verb 'depend' is naturally followed by the preposition 'on' or 'upon'."
  },
  {
    question: "Select the correct preposition: He spent hours searching ____ his misplaced keys.",
    answers: { a: "for", b: "to", c: "after", d: "in" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "easy",
    explanation: "To 'search for' is a phrasal verb meaning to look around to find something lost."
  },
  {
    question: "Select the correct preposition: The wide river flows silently ____ the old wooden bridge.",
    answers: { a: "below", b: "under", c: "down", d: "beneath" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "'Under' is used when something is directly below another object, especially when covered or crossed by it."
  },
  {
    question: "Select the correct preposition: Please don't be angry ____ me; I didn't mean to break it.",
    answers: { a: "at", b: "with", c: "on", d: "for" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "medium",
    explanation: "Generally, one is angry 'with' a person but angry 'at' a situation or thing."
  },
  {
    question: "Select the express express train arrived ____ the destination station right on schedule.",
    answers: { a: "in", b: "at", c: "on", d: "to" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "We use 'arrive at' for specific points or locations like stations, airports, or buildings."
  },
  {
    question: "Select the correct preposition: It felt refreshing to sit ____ the shade of an old oak tree.",
    answers: { a: "under", b: "in", c: "below", d: "beneath" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "medium",
    explanation: "We sit 'in the shade' because the shade is a three-dimensional area inside which you are located; you sit 'under the tree', but 'in the shade'."
  },
  {
    question: "Select the correct preposition: My father prefers to go to his office ____ train.",
    answers: { a: "by", b: "with", c: "on", d: "in" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The preposition 'by' indicates the mode or instrument of transportation."
  },
  {
    question: "Select the correct preposition: Candidates are requested to write their answers ____ blue or black ink.",
    answers: { a: "with", b: "in", c: "by", d: "through" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "medium",
    explanation: "We use 'in ink' or 'in pencil' to describe the medium used for writing, while 'with' is used for the tool (e.g., with a pen)."
  },
  {
    question: "Select the correct preposition: The jury found him guilty ____ manslaughter.",
    answers: { a: "for", b: "with", c: "of", d: "by" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The adjective 'guilty' takes 'of' to indicate the specific offense committed."
  },
  {
    question: "Select the correct preposition: Public health campaigns state that smoking is injurious ____ health.",
    answers: { a: "for", b: "to", c: "against", d: "with" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The phrase 'injurious to' is a fixed collocation meaning causing harm or damage to something."
  },
  {
    question: "Select the correct preposition: Personally, I prefer hot cocoa ____ coffee.",
    answers: { a: "than", b: "to", c: "over", d: "before" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The verb 'prefer' requires the preposition 'to' when setting up a comparison between two items."
  },
  {
    question: "Select the correct preposition: She was married ____ a renowned surgeon from Delhi.",
    answers: { a: "with", b: "to", c: "by", d: "for" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "medium",
    explanation: "In passive voice or descriptions of relational status, 'married' is followed by 'to'."
  },
  {
    question: "Select the correct preposition: In deep distress, we must place our trust ____ God.",
    answers: { a: "on", b: "in", c: "to", d: "upon" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The phrase 'trust in' means having faith or confidence in the reliability or existence of someone."
  },
  {
    question: "Select the correct preposition: The heavy downpour prevented us ____ leaving the house.",
    answers: { a: "to", b: "from", c: "by", d: "for" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The structure 'prevent someone from doing something' is an established rule."
  },
  {
    question: "Select the correct preposition: Students are advised to abstain ____ bad habits.",
    answers: { a: "from", b: "to", c: "of", d: "against" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The verb 'abstain' is paired with 'from' to mean deliberately avoiding an action."
  },
  {
    question: "Select the correct preposition: He had to borrow some money because he was short ____ cash.",
    answers: { a: "for", b: "in", c: "of", d: "with" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The adjective phrase 'short of' indicates an insufficient supply of something."
  },
  {
    question: "Select the correct preposition: Once he turned eighteen, he became independent ____ his parents.",
    answers: { a: "from", b: "of", c: "by", d: "with" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "hard",
    explanation: "While people often mistakenly say 'independent from', 'independent of' is grammatically accurate when denoting freedom from reliance."
  },
  {
    question: "Select the correct preposition: Students must pay strict attention ____ what the teacher says.",
    answers: { a: "on", b: "to", c: "for", d: "towards" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The verb phrase 'pay attention' always channels focus using the preposition 'to'."
  },
  {
    question: "Select the correct preposition: The defensive hunter killed the attacking snake ____ a heavy stick.",
    answers: { a: "by", b: "with", c: "from", d: "through" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "medium",
    explanation: "We use 'with' to denote the physical instrument used to perform an action."
  },
  {
    question: "Select the correct preposition: The venomous snake was killed ____ a skilled hunter.",
    answers: { a: "with", b: "by", c: "through", d: "from" },
    correctAnswer: "a",
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "We use 'by' in passive voice constructions to introduce the agent performing the action."
  },
  {
    question: "Select the correct preposition: My uncle lives ____ 14, MG Road, Howrah.",
    answers: { a: "in", b: "on", c: "at", d: "inside" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "medium",
    explanation: "We use 'at' when specifying a precise address featuring a house or block number."
  },
  {
    question: "Select the correct preposition: My cousin has been residing ____ London for several years.",
    answers: { a: "at", b: "in", c: "on", d: "inside" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The preposition 'in' is utilized for large, expansive locations like cities, countries, or continents."
  },
  {
    question: "Select the correct preposition: A beautiful framed map of India was hung ____ the wall.",
    answers: { a: "on", b: "at", c: "to", d: "upon" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "easy",
    explanation: "'On' is used to show a position touching or supported by a vertical or horizontal surface."
  },
  {
    question: "Select the correct preposition: It became so dark that we had to put ____ the lamps.",
    answers: { a: "out", b: "off", c: "on", d: "up" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "medium",
    explanation: "The phrasal verb 'put on' means to activate or ignite illumination sources, whereas 'put out' means to extinguish."
  },
  {
    question: "Select the correct preposition: The old warehouse caught fire and completely burned ____.",
    answers: { a: "down", b: "out", c: "up", d: "off" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "medium",
    explanation: "The phrasal verb 'burn down' refers to a building being completely destroyed or leveled by fire."
  },
  {
    question: "Select the correct preposition: She broke ____ tears when she heard the tragic news.",
    answers: { a: "out", b: "into", c: "up", d: "off" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "'Break into tears' is an idiom meaning to suddenly begin crying intensely."
  },
  {
    question: "Select the correct preposition: The cricket match was called ____ due to an unexpected downpour.",
    answers: { a: "off", b: "out", c: "away", d: "up" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The phrasal verb 'call off' means to cancel an event or activity."
  },
  {
    question: "Select the correct preposition: A true leader always deals ____ absolute honesty with everyone.",
    answers: { a: "in", b: "with", c: "out", d: "for" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "medium",
    explanation: "'Deal with' means to behave toward someone or handle a situation in a specific manner."
  },
  {
    question: "Select the correct preposition: My business partner deals ____ wholesale stationery goods.",
    answers: { a: "with", b: "in", c: "at", d: "for" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "medium",
    explanation: "The phrasal verb 'deal in' means to buy, sell, or trade a specific commodity commercially."
  },
  {
    question: "Select the correct preposition: The elderly grandfather is a bit hard ____ hearing.",
    answers: { a: "of", b: "at", c: "in", d: "with" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "hard",
    explanation: "The idiomatic expression meaning somewhat deaf is 'hard of hearing'."
  },
  {
    question: "Select the correct preposition: You must make an effort to give ____ your bad habits.",
    answers: { a: "out", b: "up", c: "away", d: "off" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The phrasal verb 'give up' means to abandon, quit, or cease practicing a habit."
  },
  {
    question: "Select the correct preposition: She carefully took ____ her muddy shoes before entering the clean room.",
    answers: { a: "out", b: "away", c: "off", d: "down" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "easy",
    explanation: "'Take off' is a phrasal verb used here to mean removing an article of clothing or footwear."
  },
  {
    question: "Select the correct preposition: I am eagerly looking forward ____ meeting you at the seminar.",
    answers: { a: "to", b: "for", c: "at", d: "towards" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "medium",
    explanation: "The complex prepositional phrase 'look forward to' requires the preposition 'to', which is followed by a gerund or noun."
  },
  {
    question: "Select the correct preposition: Signs in the public park warn visitors to keep ____ the grass.",
    answers: { a: "off", b: "away", c: "out", d: "from" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The phrasal verb 'keep off' means to stay away from or avoid stepping on a surface."
  },
  {
    question: "Select the correct preposition: With his deep analytical mind, he is clearly cut ____ for a research career.",
    answers: { a: "out", b: "in", c: "up", d: "off" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "medium",
    explanation: "'Cut out for' is an idiomatic phrasal verb meaning naturally suited or qualified for something."
  },
  {
    question: "Select the correct preposition: The dedicated nurse attended ____ the needs of the ailing patient.",
    answers: { a: "to", b: "on", c: "at", d: "with" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "medium",
    explanation: "To 'attend to' means to take care of, deal with, or give attention to someone or something."
  },
  {
    question: "Select the correct preposition: I am quite familiar ____ his unique style of painting.",
    answers: { a: "to", b: "with", c: "in", d: "about" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "When an individual has knowledge or awareness of something, they are 'familiar with' it."
  },
  {
    question: "Select the correct preposition: His face seems completely familiar ____ me, but I forget his name.",
    answers: { a: "with", b: "to", c: "at", d: "by" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "medium",
    explanation: "When a thing or person is recognized by someone, it is said to be 'familiar to' that person."
  },
  {
    question: "Select the correct preposition: The young professor is immensely popular ____ his students.",
    answers: { a: "with", b: "to", c: "for", d: "by" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "medium",
    explanation: "The adjective 'popular' is classically paired with 'with' to signify being liked or admired by a group."
  },
  {
    question: "Select the correct preposition: Out of absolute panic, the hunter fired ____ the tiger.",
    answers: { a: "on", b: "to", c: "at", d: "against" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "easy",
    explanation: "To 'fire at' means to discharge a weapon aimed directly toward a specific target."
  },
  {
    question: "Select the correct preposition: Do not judge him harshly; he is just a bit slow ____ understanding complex equations.",
    answers: { a: "at", b: "of", c: "in", d: "with" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "medium",
    explanation: "The expression 'slow at' or 'slow of' can be used, but 'slow at doing something' is standard for skills/comprehension."
  },
  {
    question: "Select the correct preposition: Consistent hard work is the true key ____ success.",
    answers: { a: "for", b: "to", c: "of", d: "in" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The noun 'key' when used in a figurative sense to mean the solution or route takes the preposition 'to'."
  },
  {
    question: "Select the correct preposition: Please fetch me a bucket that is full ____ clean water.",
    answers: { a: "with", b: "of", c: "by", d: "in" },
    correctAnswer: "c",
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The adjective 'full' takes the fixed preposition 'of' to denote containing a maximum amount."
  },
  {
    question: "Select the correct preposition: A wise man is always content ____ what he honestly earns.",
    answers: { a: "with", b: "by", c: "of", d: "at" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The adjective 'content' takes 'with' to mean satisfied or comfortable with one's circumstances."
  },
  {
    question: "Select the correct preposition: This old book is an heirloom, and I simply cannot part ____ it.",
    answers: { a: "from", b: "with", c: "by", d: "away" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "hard",
    explanation: "One parts 'with' a material possession or object, whereas one parts 'from' a person."
  },
  {
    question: "Select the correct preposition: The traveler parted ____ his emotional family at the train station gates.",
    answers: { a: "with", b: "from", c: "by", d: "away" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "hard",
    explanation: "To part 'from' someone means to say goodbye and separate from a person."
  },
  {
    question: "Select the correct preposition: On the auspicious day, all the students were dressed ____ traditional white attire.",
    answers: { a: "with", b: "by", c: "in", d: "on" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "easy",
    explanation: "We use the preposition 'in' to indicate the clothing, garments, or colors someone is wearing."
  },
  {
    question: "Select the correct preposition: If you manage your finances recklessly, you will quickly run ____ debt.",
    answers: { a: "into", b: "in", c: "to", d: "with" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "easy",
    explanation: "'Run into debt' is a common phrasal construction describing entering an unfavorable state or situation."
  },
  {
    question: "Select the correct preposition: The medical report confirmed that the worker died ____ sheer overwork.",
    answers: { a: "of", b: "from", c: "by", d: "with" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "hard",
    explanation: "While one dies 'of' an internal disease, one dies 'from' an external cause or physical condition like overwork, hunger, or exhaustion."
  },
  {
    question: "Select the correct preposition: The entire nation was deeply shocked ____ the sudden demise of the leader.",
    answers: { a: "by", b: "at", c: "with", d: "for" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "medium",
    explanation: "The passive verb/adjective 'shocked' is traditionally followed by 'at' when reacting to an event or piece of news."
  },
  {
    question: "Select the correct preposition: Right from her childhood, she has excelled ____ classical dancing.",
    answers: { a: "at", b: "in", c: "with", d: "by" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The verb 'excel' takes the preposition 'in' when highlighting a domain of outstanding skill."
  },
  {
    question: "Select the correct preposition: When he gets furious, he loses all control ____ his temper.",
    answers: { a: "on", b: "over", c: "at", d: "with" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "We exercise or lose control 'over' something or someone."
  },
  {
    question: "Select the correct preposition: The constitutional rule is universally applicable ____ every single citizen.",
    answers: { a: "for", b: "to", c: "with", d: "on" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The adjective 'applicable' is paired with the preposition 'to'."
  },
  {
    question: "Select the correct preposition: Please do not disturb me right now; I am completely absorbed ____ my study.",
    answers: { a: "at", b: "with", c: "in", d: "by" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "easy",
    explanation: "To be 'absorbed in' something means deeply engrossed or giving full attention to an activity."
  },
  {
    question: "Select the correct preposition: The stray dog barked fiercely ____ the complete stranger.",
    answers: { a: "to", b: "on", c: "at", d: "against" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The verb 'bark' requires 'at' to specify the target of the vocalization."
  },
  {
    question: "Select the correct preposition: Without hesitating for a moment, he jumped ____ the river to rescue the drowning child.",
    answers: { a: "in", b: "into", c: "inside", d: "to" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "'Into' is essential here as it shows movement from the outside to the inside of a space (the water)."
  },
  {
    question: "Select the correct use of articles: The team is looking for ____ energetic coordinator.",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "'Energetic' starts with a vowel sound, so it takes the indefinite article 'an'."
  },
  {
    question: "Select the correct use of articles: She wants to scale ____ Mount Everest next spring.",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "d",
    category: "prepositions",
    difficulty: "medium",
    explanation: "No article is used before the names of individual mountain peaks (e.g., Mount Everest)."
  },
  {
    question: "Select the correct use of articles: ____ Himalayas protect the northern border of India.",
    answers: { a: "A", b: "An", c: "The", d: "No article" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The definite article 'the' is mandatory before the names of mountain ranges."
  },
  {
    question: "Select the correct use of articles: My brother bought ____ new laptop yesterday.",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "easy",
    explanation: "We use 'a' for a non-specific, singular countable noun mentioned for the first time."
  },
  {
    question: "Select the correct use of articles: ____ laptop he bought yesterday is very fast.",
    answers: { a: "A", b: "An", c: "The", d: "No article" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "easy",
    explanation: "Since the laptop is now specific (the one he bought yesterday), we change to the definite article 'the'."
  },
  {
    question: "Select the correct use of articles: Honesty is ____ best policy.",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The superlative form 'best' requires the definite article 'the'."
  },
  {
    question: "Select the correct use of articles: He is ____ honorable judge.",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "medium",
    explanation: "The 'h' in 'honorable' is silent, so the word starts with a vowel sound, necessitating 'an'."
  },
  {
    question: "Select the correct use of articles: I read ____ interesting book last weekend.",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "'Interesting' begins with a vowel sound, so 'an' is the correct indefinite article."
  },
  {
    question: "Select the correct use of articles: They sailed across ____ Atlantic Ocean.",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The names of oceans, seas, and rivers always require the definite article 'the'."
  },
  {
    question: "Select the correct use of articles: My sister speaks ____ French fluently.",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "d",
    category: "prepositions",
    difficulty: "easy",
    explanation: "Articles are generally not used before the names of languages."
  },
  {
    question: "Select the correct use of articles: ____ French are known for their culinary arts.",
    answers: { a: "A", b: "An", c: "The", d: "No article" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "medium",
    explanation: "When referring to a collective nationality or people as a whole group, 'the' is placed before the term."
  },
  {
    question: "Select the correct use of articles: We saw ____ one-eyed man walking down the street.",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "medium",
    explanation: "The word 'one-eyed' begins with a consonant sound ('w'), so the indefinite article 'a' is appropriate."
  },
  {
    question: "Select the correct use of articles: I would love to explore ____ space one day.",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "d",
    category: "prepositions",
    difficulty: "hard",
    explanation: "When referring to the infinite universe beyond Earth, 'space' is used without an article."
  },
  {
    question: "Select the correct use of articles: Could you pass me ____ salt, please?",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The definite article 'the' is used because both speakers can identify the specific salt shaker on the table."
  },
  {
    question: "Select the correct use of articles: My uncle is ____ member of Parliament.",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "easy",
    explanation: "Since he is one of many members, the indefinite article 'a' is used."
  },
  {
    question: "Select the correct use of articles: He is ____ oldest man in this village.",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "easy",
    explanation: "Superlative adjectives like 'oldest' must take the definite article 'the'."
  },
  {
    question: "Select the correct use of articles: She has ____ unique way of solving problems.",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "medium",
    explanation: "The word 'unique' begins with the semi-vowel 'y' sound, so it acts like a consonant and takes 'a'."
  },
  {
    question: "Select the correct use of articles: They live in ____ United Kingdom.",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "easy",
    explanation: "Country names containing words like 'Kingdom', 'States', or 'Republic' take the definite article 'the'."
  },
  {
    question: "Select the correct use of articles: I have got ____ headache this morning.",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "medium",
    explanation: "The common expression for singular ailments is often preceded by 'a' (e.g., 'have a headache')."
  },
  {
    question: "Select the correct use of articles: He loves listening to ____ radio while cooking.",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The phrase 'listen to the radio' is standard usage when referring to the medium."
  },
  {
    question: "Select the correct preposition: She stands ____ the top of the class in mathematics.",
    answers: { a: "in", b: "on", c: "at", d: "to" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The phrase 'at the top of' is a fixed prepositional expression pointing to a specific rank or location."
  },
  {
    question: "Select the correct preposition: Please do not step ____ the freshly painted floor.",
    answers: { a: "in", b: "on", c: "at", d: "into" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The preposition 'on' indicates physical contact with a horizontal or flat surface."
  },
  {
    question: "Select the correct preposition: The meeting will commence ____ exactly 10:30 AM.",
    answers: { a: "on", b: "in", c: "at", d: "by" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "easy",
    explanation: "We use 'at' before precise clock times."
  },
  {
    question: "Select the correct preposition: Our final semester examinations will begin ____ Monday.",
    answers: { a: "at", b: "in", c: "on", d: "from" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The preposition 'on' is strictly used before specific days of the week and dates."
  },
  {
    question: "Select the correct preposition: India achieved independence ____ August 1947.",
    answers: { a: "on", b: "in", c: "at", d: "by" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "We use 'in' before months, years, seasons, and long periods."
  },
  {
    question: "Select the correct preposition: He stepped out for a moment but will return ____ an hour.",
    answers: { a: "at", b: "on", c: "in", d: "by" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The preposition 'in' can mean 'within a specific duration of time' in future contexts."
  },
  {
    question: "Select the correct preposition: The little girl hid her doll ____ the soft pillow.",
    answers: { a: "under", b: "on", c: "over", d: "at" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "easy",
    explanation: "'Under' is used to show that something is directly covered or hidden by another object."
  },
  {
    question: "Select the correct preposition: An airplane flew right ____ our house.",
    answers: { a: "over", b: "on", c: "at", d: "through" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "easy",
    explanation: "We use 'over' when an object is at a higher level than something else and moving across it."
  },
  {
    question: "Select the correct preposition: There is an intimate understanding ____ the twin sisters.",
    answers: { a: "among", b: "between", c: "with", d: "in" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The preposition 'between' is used when discussing relations or connections involving exactly two separate entities."
  },
  {
    question: "Select the correct preposition: The secret was discussed safely ____ the members of the committee.",
    answers: { a: "between", b: "among", c: "through", d: "along" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "'Among' is used for collective relations or distributions involving more than two members."
  },
  {
    question: "Select the correct preposition: He sat quietly ____ his grandfather during the ceremony.",
    answers: { a: "besides", b: "beside", c: "at", d: "with" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "medium",
    explanation: "'Beside' means next to or at the side of, whereas 'besides' means in addition to."
  },
  {
    question: "Select the correct preposition: ____ English, she can also speak Hindi and Spanish fluently.",
    answers: { a: "Beside", b: "Besides", c: "With", d: "Except" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "medium",
    explanation: "'Besides' is a preposition meaning 'in addition to' or 'apart from'."
  },
  {
    question: "Select the correct preposition: I am extremely proud ____ my student's achievements.",
    answers: { a: "for", b: "with", c: "of", d: "at" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The adjective 'proud' takes the fixed preposition 'of'."
  },
  {
    question: "Select the correct preposition: The student apologized ____ the teacher for being late.",
    answers: { a: "to", b: "for", c: "with", d: "at" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "easy",
    explanation: "One 'apologizes to' a person for an error or misdeed."
  },
  {
    question: "Select the correct preposition: She always excels ____ solving challenging math riddles.",
    answers: { a: "at", b: "in", c: "with", d: "for" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The verb 'excel' typically collocates with 'in' when referring to a subject or field."
  },
  {
    question: "Select the correct preposition: The local merchant deals ____ imported organic spices.",
    answers: { a: "with", b: "in", c: "at", d: "out" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "medium",
    explanation: "'Deal in' means to carry on business or trade in a particular commodity."
  },
  {
    question: "Select the correct preposition: It is difficult to deal ____ an unruly crowd.",
    answers: { a: "in", b: "with", c: "at", d: "for" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "'Deal with' means to handle, manage, or interact with a situation or entity."
  },
  {
    question: "Select the correct preposition: The brave boy jumped into the pool to save his friend, regardless ____ the cold.",
    answers: { a: "of", b: "for", c: "with", d: "about" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The phrase 'regardless of' is a compound preposition meaning in spite of or without regard to."
  },
  {
    question: "Select the correct preposition: My parents always insist ____ maintaining discipline.",
    answers: { a: "on", b: "to", c: "for", d: "with" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "medium",
    explanation: "The verb 'insist' is followed by the fixed preposition 'on' or 'upon'."
  },
  {
    question: "Select the correct preposition: He was prevented ____ entering the evaluation hall without an identity card.",
    answers: { a: "to", b: "from", c: "by", d: "against" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The verb 'prevent' requires the structure 'prevent someone from doing something'."
  },
  {
    question: "Select the correct preposition: The child is completely cured ____ his persistent illness.",
    answers: { a: "from", b: "of", c: "with", d: "by" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "hard",
    explanation: "When 'cure' is used as a verb in the passive form or as an adjective, it takes the preposition 'of'."
  },
  {
    question: "Select the correct preposition: We must adapt ourselves ____ changing environments.",
    answers: { a: "to", b: "with", c: "for", d: "in" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The verb 'adapt' takes the preposition 'to' when indicating adjustment to a new state or condition."
  },
  {
    question: "Select the correct preposition: He is very sensitive ____ extreme changes in temperature.",
    answers: { a: "with", b: "for", c: "to", d: "at" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "medium",
    explanation: "The adjective 'sensitive' is followed by the preposition 'to'."
  },
  {
    question: "Select the correct preposition: They are working hard with a view ____ launching the application next month.",
    answers: { a: "to", b: "for", c: "of", d: "at" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "hard",
    explanation: "The complex phrase 'with a view to' always takes a gerund (verb+ing) because 'to' here functions as a preposition."
  },
  {
    question: "Select the correct preposition: The match was postponed owing ____ bad playground conditions.",
    answers: { a: "for", b: "to", c: "by", d: "with" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The compound preposition 'owing to' acts as a synonym for 'because of'."
  },
  {
    question: "Select the correct preposition: She is fully conscious ____ her shortcomings.",
    answers: { a: "about", b: "with", c: "of", d: "for" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The adjective 'conscious' is followed by the preposition 'of'."
  },
  {
    question: "Select the correct preposition: The young student was rewarded ____ a medal for bravery.",
    answers: { a: "by", b: "with", c: "for", d: "of" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "medium",
    explanation: "When someone receives an award or prize, the construction is 'rewarded with something'."
  },
  {
    question: "Select the correct preposition: He was blamed ____ the unexpected failure of the event.",
    answers: { a: "of", b: "for", c: "with", d: "to" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The passive verb phrase 'blamed for' assigns responsibility for an unwanted outcome."
  },
  {
    question: "Select the correct preposition: Do you believe ____ the existence of parallel universes?",
    answers: { a: "on", b: "at", c: "in", d: "to" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The verb 'believe' takes 'in' to express conviction in the reality or truth of a concept."
  },
  {
    question: "Select the correct preposition: The book is composed ____ ten informative chapters.",
    answers: { a: "with", b: "by", c: "of", d: "from" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "medium",
    explanation: "The phrase 'composed of' means made up of or formed from specific constituents."
  },
  {
    question: "Select the correct use of articles: Copper is ____ valuable asset for industries.",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "easy",
    explanation: "'Valuable' starts with a consonant sound ('v'), requiring the indefinite article 'a'."
  },
  {
    question: "Select the correct use of articles: My grandfather reads ____ Holy Bible every evening.",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The definite article 'the' is mandatory before the names of sacred or holy scriptures."
  },
  {
    question: "Select the correct use of articles: I met ____ European tourist at the museum.",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "medium",
    explanation: "The word 'European' begins with a consonant sound ('yoo'), so the correct article to use is 'a'."
  },
  {
    question: "Select the correct use of articles: What ____ beautiful painting this is!",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "easy",
    explanation: "In singular exclamatory sentences, the indefinite article 'a' or 'an' is standard after 'what'."
  },
  {
    question: "Select the correct use of articles: He is ____ oldest employee in the organization.",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "easy",
    explanation: "We use 'the' with superlative adjectives like 'oldest'."
  },
  {
    question: "Select the correct use of articles: Iron is ____ essential element for building structures.",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The adjective 'essential' starts with a vowel sound, requiring 'an'."
  },
  {
    question: "Select the correct use of articles: They plan to visit ____ Netherlands during their summer break.",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "medium",
    explanation: "Certain country names that represent geographical collections or plural structures, like 'the Netherlands', require the definite article."
  },
  {
    question: "Select the correct use of articles: She has traveled all around ____ world.",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The phrase 'around the world' is standard because 'world' is a unique noun in this context."
  },
  {
    question: "Select the correct use of articles: I need to buy ____ inkpot from the nearby store.",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "'Inkpot' starts with a vowel sound, so it takes the indefinite article 'an'."
  },
  {
    question: "Select the correct use of articles: He thinks that ____ money cannot buy pure happiness.",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "d",
    category: "prepositions",
    difficulty: "medium",
    explanation: "Abstract, uncountable nouns like 'money' or 'happiness' do not take an article when used in a general sense."
  },
  {
    question: "Select the correct preposition: She is remarkably good ____ drawing portraits.",
    answers: { a: "in", b: "at", c: "with", d: "for" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The phrase 'good at' is the standard idiomatic construction to denote proficiency in an activity."
  },
  {
    question: "Select the correct preposition: My uncle is weak ____ mathematics, but excellent at history.",
    answers: { a: "at", b: "in", c: "with", d: "for" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "medium",
    explanation: "While one is 'good at' a subject, it is standard to say someone is 'weak in' a field or subject."
  },
  {
    question: "Select the correct preposition: The school principal presided ____ the annual function.",
    answers: { a: "on", b: "over", c: "at", d: "upon" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "medium",
    explanation: "The verb 'preside' takes the preposition 'over' to mean occupying the place of authority or control."
  },
  {
    question: "Select the correct preposition: They had to call ____ a doctor when his condition worsened.",
    answers: { a: "in", b: "at", c: "for", d: "up" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "medium",
    explanation: "The phrasal verb 'call for' means to demand or require something necessary."
  },
  {
    question: "Select the correct preposition: He completely threw cold water ____ my creative plans.",
    answers: { a: "on", b: "at", c: "to", d: "into" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "medium",
    explanation: "The phrase 'throw cold water on' is an idiom meaning to discourage or act negatively toward an idea."
  },
  {
    question: "Select the correct preposition: Please do not look down ____ those who are less fortunate.",
    answers: { a: "at", b: "on", c: "to", d: "for" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The phrasal verb 'look down on' means to regard someone with contempt or feel superior to them."
  },
  {
    question: "Select the correct preposition: She was brought ____ by her maternal aunt in Delhi.",
    answers: { a: "up", b: "in", c: "off", d: "out" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The phrasal verb 'bring up' in passive voice ('was brought up') means to be raised or nurtured through childhood."
  },
  {
    question: "Select the correct preposition: The local library stands close ____ the town hall.",
    answers: { a: "by", b: "to", c: "at", d: "with" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The phrase 'close to' indicates near proximity to a specific object or landmark."
  },
  {
    question: "Select the correct preposition: The security guard acts in accordance ____ company guidelines.",
    answers: { a: "to", b: "with", c: "by", d: "for" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The complex prepositional phrase 'in accordance with' means conforming to or following a set of rules."
  },
  {
    question: "Select the correct preposition: She was deeply absorbed ____ reading her new novel.",
    answers: { a: "with", b: "at", c: "in", d: "on" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The fixed expression 'absorbed in' means entirely engrossed or focused on an activity."
  },
  {
    question: "Select the correct preposition: He could not comply ____ the strict demands of his employer.",
    answers: { a: "to", b: "with", c: "by", d: "for" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "medium",
    explanation: "The verb 'comply' always takes the preposition 'with' to signify acting in accordance with a command."
  },
  {
    question: "Select the correct preposition: The small village is free ____ any sort of noise pollution.",
    answers: { a: "from", b: "of", c: "with", d: "off" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The phrase 'free from' denotes liberation or exemption from an unwanted element."
  },
  {
    question: "Select the correct preposition: You must take care ____ your physical health during the winter season.",
    answers: { a: "for", b: "with", c: "of", d: "about" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The common idiomatic phrase is 'take care of'."
  },
  {
    question: "Select the correct preposition: I was totally blind ____ his malicious intentions at that time.",
    answers: { a: "in", b: "of", c: "to", d: "at" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "hard",
    explanation: "Figuratively, being 'blind to' means being unaware or unable to perceive a fault, fact, or intention."
  },
  {
    question: "Select the correct preposition: The entire community grieved ____ the tragic loss of life.",
    answers: { a: "for", b: "at", c: "over", d: "with" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "medium",
    explanation: "While one can grieve 'for' a person, we conventionally grieve 'over' or 'at' a situation, event, or loss."
  },
  {
    question: "Select the correct preposition: The direct path runs ____ the dense forest.",
    answers: { a: "across", b: "through", c: "along", d: "over" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "'Through' indicates movement inside a three-dimensional space, such as a tunnel, forest, or crowd."
  },
  {
    question: "Select the correct preposition: A true soldier never shrinks ____ doing his duty.",
    answers: { a: "to", b: "from", c: "by", d: "at" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "medium",
    explanation: "The verb 'shrink' takes 'from' when meaning to avoid or turn away from a task or obligation."
  },
  {
    question: "Select the correct preposition: This software version is far superior ____ the old one.",
    answers: { a: "than", b: "to", c: "over", d: "with" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "Adjectives expressing comparative status like superior, inferior, prefer, etc., take 'to' instead of 'than'."
  },
  {
    question: "Select the correct preposition: The administrative assistant was accused ____ leaking confidential files.",
    answers: { a: "for", b: "with", c: "of", d: "by" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The verb 'accuse' requires the fixed preposition 'of' before the specified offense."
  },
  {
    question: "Select the correct preposition: We must strive ____ perfection in every project we handle.",
    answers: { a: "for", b: "to", c: "at", d: "with" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "easy",
    explanation: "To 'strive for' means to make great efforts to achieve or obtain a specific goal."
  },
  {
    question: "Select the correct use of articles: My friend plays ____ acoustic guitar beautifully.",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "medium",
    explanation: "When describing someone's ability to play a musical instrument, the definite article 'the' is used."
  },
  {
    question: "Select the correct use of articles: They went on ____ holiday to Spain.",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "d",
    category: "prepositions",
    difficulty: "medium",
    explanation: "The idiomatic expression is 'on holiday' without any article."
  },
  {
    question: "Select the correct use of articles: She has traveled across ____ Pacific Ocean three times.",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "easy",
    explanation: "Names of distinct bodies of water like oceans and seas take the definite article 'the'."
  },
  {
    question: "Select the correct use of articles: He holds ____ degree from Raiganj University.",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "easy",
    explanation: "'Degree' starts with a consonant sound, so the indefinite article 'a' is appropriate."
  },
  {
    question: "Select the correct use of articles: ____ sun sets in the west.",
    answers: { a: "A", b: "An", c: "The", d: "No article" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The definite article 'the' is used before unique cosmic entities such as the sun and the moon."
  },
  {
    question: "Select the correct use of articles: I will be back in ____ quarter of an hour.",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "medium",
    explanation: "The expression is 'a quarter of an hour', where 'a' acts as an indefinite indicator of fractional quantity."
  },
  {
    question: "Select the correct use of articles: This is ____ historical moment for our nation.",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "medium",
    explanation: "In modern standard English, 'historical' begins with a pronounced consonant 'h' sound, making 'a' the preferred choice over 'an'."
  },
  {
    question: "Select the correct use of articles: He is searching for ____ honest answer.",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "Because the 'h' in 'honest' is silent, the word starts with a vowel sound and requires 'an'."
  },
  {
    question: "Select the correct use of articles: Look at ____ bright sky tonight!",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The definite article 'the' is used because the specific sky above is clear and identifiable to the listener."
  },
  {
    question: "Select the correct use of articles: I had ____ breakfast at eight this morning.",
    answers: { a: "a", b: "an", c: "the", d: "no article" },
    correctAnswer: "d",
    category: "prepositions",
    difficulty: "medium",
    explanation: "Articles are omitted before regular meals (breakfast, lunch, dinner) when referred to in a general sense."
  },
  {
    question: "Select the correct preposition: The tired traveler rested ____ the shade of an old banyan tree.",
    answers: { a: "under", b: "in", c: "below", d: "beneath" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "medium",
    explanation: "We say 'in the shade' because the shade represents a surrounding area of reduced light, not a structural ceiling."
  },
  {
    question: "Select the correct preposition: The local library remains closed ____ Sundays.",
    answers: { a: "at", b: "in", c: "on", d: "for" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "easy",
    explanation: "Days of the week are always introduced using the preposition 'on'."
  },
  {
    question: "Select the correct preposition: The dynamic manager is very popular ____ her team members.",
    answers: { a: "with", b: "to", c: "for", d: "amongst" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "medium",
    explanation: "The adjective 'popular' is conventionally paired with 'with' when indicating broad acceptance within a group."
  },
  {
    question: "Select the correct preposition: We final layout must correspond ____ the original approved design blueprint.",
    answers: { a: "to", b: "with", c: "for", d: "by" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "hard",
    explanation: "'Correspond to' means to match or be identical to something, whereas 'correspond with' can mean exchanging letters."
  },
  {
    question: "Select the correct preposition: He has absolute confidence ____ his technical coding skills.",
    answers: { a: "on", b: "in", c: "with", d: "for" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The noun 'confidence' requires the preposition 'in' when denoting belief or trust in someone or something."
  },
  {
    question: "Select the correct preposition: The brave student did not yield ____ the peer pressure.",
    answers: { a: "to", b: "with", c: "against", d: "for" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The verb 'yield' takes the preposition 'to' when meaning to surrender or give way to a force."
  },
  {
    question: "Select the correct preposition: Our college campus is equipped ____ state-of-the-art computer labs.",
    answers: { a: "with", b: "by", c: "in", d: "of" },
    correctAnswer: "b",
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The passive verb/adjective 'equipped' requires 'with' to indicate the tools or assets provided."
  },
  {
    question: "Select the correct preposition: The dynamic startup was exempt ____ paying taxes for its first three years.",
    answers: { a: "to", b: "from", c: "with", d: "of" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "medium",
    explanation: "The phrase 'exempt from' indicates being officially freed from an obligation or requirement."
  },
  {
    question: "Select the correct preposition: He is persistent in his efforts and never gives ____ to failure.",
    answers: { a: "up", b: "in", c: "away", d: "off" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "hard",
    explanation: "'Give in' means to capitulate or yield to a force, whereas 'give up' means to abandon an attempt completely."
  },
  {
    question: "Select the correct preposition: The multi-story building caught fire and was reduced ____ ashes within hours.",
    answers: { a: "into", b: "to", c: "in", d: "with" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "medium",
    explanation: "The phrase 'reduced to' is standard when describing a destructive transition down to a fundamental or ruined state."
  },
  {
    question: "Select the correct preposition: I completely disagree ____ your cynical point of view.",
    answers: { a: "to", b: "with", c: "on", d: "against" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "We use 'disagree with' when expressing differences in perspectives or ideas with a person or statement."
  },
  {
    question: "Select the correct preposition: Do not interfere ____ my personal matters.",
    answers: { a: "in", b: "with", c: "at", d: "into" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "medium",
    explanation: "We say 'interfere in' affairs or situations, whereas 'interfere with' means to obstruct a process or machine."
  },
  {
    question: "Select the correct preposition: The dense fog interfered ____ the airport's flight schedule.",
    answers: { a: "in", b: "with", c: "into", d: "at" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "medium",
    explanation: "To 'interfere with' means to act as a hindrance, obstacle, or disruption to a system or process."
  },
  {
    question: "Select the correct preposition: She is quite familiar ____ the core concepts of web development.",
    answers: { a: "to", b: "with", c: "in", d: "for" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "When an individual possesses knowledge about something, they are 'familiar with' it."
  },
  {
    question: "Select the correct preposition: He was excluded ____ the final selection list due to missing documents.",
    answers: { a: "from", b: "to", c: "with", d: "by" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The verb 'exclude' naturally takes the preposition 'from' to denote keeping out or leaving out."
  },
  {
    question: "Select the correct preposition: The young student has a great passion ____ learning new things.",
    answers: { a: "to", b: "for", c: "with", d: "at" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The noun 'passion' takes the preposition 'for' when highlighting a powerful desire or enthusiasm."
  },
  {
    question: "Select the correct preposition: I am highly obliged ____ you for your timely assistance.",
    answers: { a: "to", b: "with", c: "for", d: "by" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "easy",
    explanation: "The phrase 'obliged to' expresses gratitude directed toward a specific person."
  },
  {
    question: "Select the correct preposition: The historical monument dates back ____ the sixteenth century.",
    answers: { a: "from", b: "to", c: "in", d: "at" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "medium",
    explanation: "The phrasal verb phrase 'dates back to' traces an object's origin to a particular period in history."
  },
  {
    question: "Select the correct preposition: The project was completed within budget, much ____ our satisfaction.",
    answers: { a: "to", b: "with", c: "for", d: "in" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "hard",
    explanation: "The phrase 'much to our satisfaction' or 'much to my surprise' uses 'to' to denote a resulting reaction or emotional state."
  },
  {
    question: "Select the correct preposition: The energetic puppy jumped ____ the low boundary fence.",
    answers: { a: "through", b: "over", c: "across", d: "above" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "easy",
    explanation: "'Over' is used to show movement across a barrier from one side to another while maintaining an elevated path."
  },
  {
    question: "Select the correct preposition: The manager acted ____ accordance with the company policy.",
    answers: { a: "on", b: "in", c: "with", d: "for" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "hard",
    explanation: "The correct phrase is 'in accordance with', meaning in agreement with."
},
{
    question: "Select the correct preposition: The witness testified ____ oath before the court.",
    answers: { a: "under", b: "in", c: "on", d: "by" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "hard",
    explanation: "The correct expression is 'on oath'."
},
{
    question: "Select the correct preposition: She is well versed ____ classical literature.",
    answers: { a: "with", b: "in", c: "at", d: "for" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "hard",
    explanation: "The phrase is 'versed in', meaning knowledgeable about."
},
{
    question: "Select the correct preposition: The proposal is subject ____ approval by the board.",
    answers: { a: "for", b: "to", c: "with", d: "under" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "hard",
    explanation: "'Subject to' means dependent upon or requiring."
},
{
    question: "Select the correct preposition: He was accused ____ embezzling company funds.",
    answers: { a: "for", b: "with", c: "of", d: "about" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "hard",
    explanation: "The correct collocation is 'accused of'."
},
{
    question: "Select the correct preposition: The ambassador arrived ____ a diplomatic mission.",
    answers: { a: "on", b: "at", c: "for", d: "with" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "hard",
    explanation: "The phrase is 'on a mission'."
},
{
    question: "Select the correct preposition: The scientist succeeded ____ isolating the rare compound.",
    answers: { a: "at", b: "with", c: "for", d: "in" },
    correctAnswer: "d",
    category: "prepositions",
    difficulty: "hard",
    explanation: "'Succeed in' is the correct usage."
},
{
    question: "Select the correct preposition: The speaker's remarks were relevant ____ the topic under discussion.",
    answers: { a: "for", b: "with", c: "to", d: "at" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "hard",
    explanation: "'Relevant to' is the standard expression."
},
{
    question: "Select the correct preposition: The officer was entrusted ____ sensitive information.",
    answers: { a: "with", b: "to", c: "for", d: "by" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "hard",
    explanation: "'Entrusted with' means given responsibility for."
},
{
    question: "Select the correct preposition: The committee is comprised ____ experts from various fields.",
    answers: { a: "with", b: "by", c: "from", d: "of" },
    correctAnswer: "d",
    category: "prepositions",
    difficulty: "hard",
    explanation: "'Comprised of' is commonly used to indicate composition."
},
{
    question: "Select the correct preposition: His comments were contrary ____ established facts.",
    answers: { a: "with", b: "for", c: "to", d: "against" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "hard",
    explanation: "The correct phrase is 'contrary to'."
},
{
    question: "Select the correct preposition: The child has a remarkable aptitude ____ mathematics.",
    answers: { a: "for", b: "in", c: "with", d: "at" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "hard",
    explanation: "'Aptitude for' means natural ability in something."
},
{
    question: "Select the correct preposition: She abstained ____ voting during the meeting.",
    answers: { a: "with", b: "from", c: "at", d: "for" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "hard",
    explanation: "'Abstain from' means deliberately refrain from."
},
{
    question: "Select the correct preposition: The medicine is effective ____ treating the disease.",
    answers: { a: "for", b: "at", c: "with", d: "in" },
    correctAnswer: "d",
    category: "prepositions",
    difficulty: "hard",
    explanation: "'Effective in' is used before a gerund."
},
{
    question: "Select the correct preposition: He is indifferent ____ public criticism.",
    answers: { a: "with", b: "to", c: "for", d: "at" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "hard",
    explanation: "'Indifferent to' means unconcerned about."
},
{
    question: "Select the correct preposition: The lawyer complied ____ the court's directives.",
    answers: { a: "with", b: "to", c: "for", d: "under" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "hard",
    explanation: "'Comply with' is the correct phrase."
},
{
    question: "Select the correct preposition: The report is devoid ____ factual inaccuracies.",
    answers: { a: "off", b: "with", c: "of", d: "from" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "hard",
    explanation: "'Devoid of' means completely lacking."
},
{
    question: "Select the correct preposition: She has no control ____ the outcome of the event.",
    answers: { a: "upon", b: "over", c: "for", d: "with" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "hard",
    explanation: "'Control over' is the standard expression."
},
{
    question: "Select the correct preposition: The minister was involved ____ lengthy negotiations.",
    answers: { a: "at", b: "on", c: "for", d: "in" },
    correctAnswer: "d",
    category: "prepositions",
    difficulty: "hard",
    explanation: "'Involved in' means taking part in."
},
{
    question: "Select the correct preposition: The article sheds light ____ the issue.",
    answers: { a: "on", b: "at", c: "upon", d: "over" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "hard",
    explanation: "'Shed light on' means clarify."
},
{
    question: "Select the correct preposition: The officer is accountable ____ the department head.",
    answers: { a: "for", b: "with", c: "to", d: "under" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "hard",
    explanation: "'Accountable to' means answerable to."
},
{
    question: "Select the correct preposition: The company is exempt ____ certain taxes.",
    answers: { a: "of", b: "from", c: "with", d: "for" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "hard",
    explanation: "'Exempt from' means free from obligation."
},
{
    question: "Select the correct preposition: She has a penchant ____ collecting antique coins.",
    answers: { a: "for", b: "to", c: "with", d: "in" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "hard",
    explanation: "'Penchant for' means strong liking for."
},
{
    question: "Select the correct preposition: The success of the venture hinges ____ proper planning.",
    answers: { a: "upon", b: "with", c: "for", d: "by" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "hard",
    explanation: "'Hinge upon' means depend upon."
},
{
    question: "Select the correct preposition: He is notorious ____ arriving late to meetings.",
    answers: { a: "with", b: "for", c: "of", d: "at" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "hard",
    explanation: "'Notorious for' is the standard collocation."
},
{
    question: "Select the correct preposition: The decision was arrived ____ after careful deliberation.",
    answers: { a: "at", b: "on", c: "in", d: "for" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "hard",
    explanation: "'Arrive at a decision' is idiomatic usage."
},
{
    question: "Select the correct preposition: The findings are consistent ____ previous research.",
    answers: { a: "to", b: "for", c: "with", d: "at" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "hard",
    explanation: "'Consistent with' means in agreement with."
},
{
    question: "Select the correct preposition: The witness refrained ____ making further comments.",
    answers: { a: "from", b: "with", c: "to", d: "at" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "hard",
    explanation: "'Refrain from' means avoid doing."
},
{
    question: "Select the correct preposition: The book is replete ____ historical references.",
    answers: { a: "by", b: "from", c: "with", d: "of" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "hard",
    explanation: "'Replete with' means filled with."
},
{
    question: "Select the correct preposition: The chairman presided ____ the annual meeting.",
    answers: { a: "over", b: "on", c: "at", d: "for" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "hard",
    explanation: "'Preside over' means to lead or supervise."
},{
    question: "Select the correct preposition: The candidate was debarred ____ participating in the examination.",
    answers: { a: "with", b: "from", c: "of", d: "at" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "hard",
    explanation: "'Debarred from' means prohibited from participating."
},
{
    question: "Select the correct preposition: The remarks were tantamount ____ an admission of guilt.",
    answers: { a: "with", b: "for", c: "to", d: "at" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "hard",
    explanation: "'Tantamount to' means equivalent to."
},
{
    question: "Select the correct preposition: The professor specializes ____ medieval history.",
    answers: { a: "in", b: "on", c: "for", d: "with" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "hard",
    explanation: "'Specialize in' is the correct collocation."
},
{
    question: "Select the correct preposition: The employee was compensated ____ the losses incurred.",
    answers: { a: "with", b: "for", c: "at", d: "to" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "hard",
    explanation: "'Compensated for' means reimbursed for losses."
},
{
    question: "Select the correct preposition: The king was succeeded ____ his eldest son.",
    answers: { a: "to", b: "from", c: "with", d: "by" },
    correctAnswer: "d",
    category: "prepositions",
    difficulty: "hard",
    explanation: "'Succeeded by' refers to the person who takes over."
},
{
    question: "Select the correct preposition: She is endowed ____ exceptional artistic talent.",
    answers: { a: "with", b: "for", c: "to", d: "in" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "hard",
    explanation: "'Endowed with' means naturally gifted with."
},
{
    question: "Select the correct preposition: The organization caters ____ the needs of rural communities.",
    answers: { a: "at", b: "to", c: "for", d: "with" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "hard",
    explanation: "'Cater to' means provide what is needed or desired."
},
{
    question: "Select the correct preposition: The scholar was absorbed ____ his research work.",
    answers: { a: "with", b: "at", c: "in", d: "for" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "hard",
    explanation: "'Absorbed in' means deeply engaged in."
},
{
    question: "Select the correct preposition: The workers protested ____ the unfair labor practices.",
    answers: { a: "against", b: "for", c: "to", d: "with" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "hard",
    explanation: "'Protest against' is the standard expression."
},
{
    question: "Select the correct preposition: The judge concurred ____ the majority opinion.",
    answers: { a: "to", b: "with", c: "for", d: "at" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "hard",
    explanation: "'Concur with' means agree with."
},
{
    question: "Select the correct preposition: The policy is detrimental ____ small businesses.",
    answers: { a: "for", b: "with", c: "to", d: "at" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "hard",
    explanation: "'Detrimental to' means harmful to."
},
{
    question: "Select the correct preposition: He was reluctant ____ disclose confidential information.",
    answers: { a: "for", b: "with", c: "at", d: "to" },
    correctAnswer: "d",
    category: "prepositions",
    difficulty: "hard",
    explanation: "'Reluctant to' means unwilling to do something."
},
{
    question: "Select the correct preposition: The child is susceptible ____ frequent infections.",
    answers: { a: "to", b: "for", c: "with", d: "at" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "hard",
    explanation: "'Susceptible to' means likely to be affected by."
},
{
    question: "Select the correct preposition: The committee dispensed ____ the usual formalities.",
    answers: { a: "of", b: "with", c: "for", d: "at" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "hard",
    explanation: "'Dispense with' means do without."
},
{
    question: "Select the correct preposition: The verdict was based ____ circumstantial evidence.",
    answers: { a: "with", b: "upon", c: "for", d: "at" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "hard",
    explanation: "'Based upon/on' means founded on."
},
{
    question: "Select the correct preposition: The politician was censured ____ his inappropriate remarks.",
    answers: { a: "for", b: "with", c: "to", d: "at" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "hard",
    explanation: "'Censured for' means formally criticized for."
},
{
    question: "Select the correct preposition: The manager is responsible ____ overseeing daily operations.",
    answers: { a: "to", b: "with", c: "for", d: "at" },
    correctAnswer: "c",
    category: "prepositions",
    difficulty: "hard",
    explanation: "'Responsible for' indicates duty or obligation."
},
{
    question: "Select the correct preposition: The region is prone ____ seasonal flooding.",
    answers: { a: "for", b: "with", c: "at", d: "to" },
    correctAnswer: "d",
    category: "prepositions",
    difficulty: "hard",
    explanation: "'Prone to' means having a tendency toward."
},
{
    question: "Select the correct preposition: The author alluded ____ several historical events in the novel.",
    answers: { a: "to", b: "with", c: "for", d: "at" },
    correctAnswer: "a",
    category: "prepositions",
    difficulty: "hard",
    explanation: "'Allude to' means refer to indirectly."
},
{
    question: "Select the correct preposition: The team persevered ____ numerous obstacles to achieve success.",
    answers: { a: "at", b: "through", c: "for", d: "with" },
    correctAnswer: "b",
    category: "prepositions",
    difficulty: "hard",
    explanation: "'Persevered through' means continued despite difficulties."
},
];

window.quizQuestions = questions;
