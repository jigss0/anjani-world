// ============================================================================
// src/content.js
//
// THIS IS THE ONLY FILE YOU SHOULD NEED TO EDIT.
//
// To add your real photos:
//   1. Put your photo files inside  public/photos/   (e.g. photo1.jpg)
//   2. Below, in the `photos` array, change the `src` to "/photos/photo1.jpg"
//      and write a caption. Leave `src: ""` for any memory you don't have
//      a photo for yet — it will automatically show an elegant placeholder.
//
// To add your real videos:
//   1. Put your video files inside  public/videos/   (e.g. video1.mp4)
//   2. Below, in the `videos` array, change the `src` to "/videos/video1.mp4".
//
// To add your song:
//   1. Set `music.url` to a direct audio file link (e.g. an .mp3 URL) or a
//      local file placed in public/music/ (e.g. "/music/oursong.mp3").
//   2. Leave it as "" to keep the elegant "not added yet" placeholder.
//
// Nothing else in the project needs to change. If an array is empty, or a
// src is missing, every section gracefully falls back to a placeholder —
// the site will never show a broken image or a broken layout.
// ============================================================================

export const content = {
  girlfriendName: "Anjani",
  myName: "Jigar",

  // ---------------------------------------------------------------------
  // OPENING SCREEN
  // ---------------------------------------------------------------------
  opening: {
    greeting: "Hey, Anjani.",
    lines: ["I made you something.", "No pressure.\nNo expectations.\nJust you. ♡"],
    button: "ENTER",
  },

  // ---------------------------------------------------------------------
  // CHAPTER ONE — ANJANI.EXE (diagnostics)
  // ---------------------------------------------------------------------
  diagnostics: {
    heading: "ANJANI.EXE",
    subtitle: "Running personality diagnostics…",
    stats: [
      { label: "ENERGY 🌸", value: 97, display: "97%" },
      { label: "SLEEPINESS 🌹", value: 91, display: "91%" },
      { label: "CHARMING 🌼", value: 84, display: "84%" },
      { label: "CUTENESS 🌙", value: 100, display: "∞%" },
      { label: "ABILITY TO DISTRACT JIGAR", value: 99, display: "Dangerously high" },
      { label: "ABILITY TO SAY \u201Cwhatever\u201D", value: 100, display: "Unlimited" },
    ],
    verdictLabel: "FINAL DIAGNOSIS",
    verdict: "Subject is ridiculously adorable.",
    footnote: "Unfortunately, there is no known cure.",
    button: "Continue",
  },

  // ---------------------------------------------------------------------
  // CHAPTER TWO — THINGS I NOTICE
  // ---------------------------------------------------------------------
  thingsINotice: {
    heading: "Things you probably don\u2019t know I notice.",
    cards: [
      "Your sleepy voice.",
      "The tiny changes in your voice when your mood changes.",
      "That little attitude you get when you know you\u2019re right.",
      "The random reactions you probably don\u2019t even realize you make.",
      "The way your energy can completely change the mood of a conversation.",
      "The way you can be doing absolutely nothing and somehow still have all my attention.",
      "The little things you do when you\u2019re comfortable.",
      "The way you get excited about tiny things.",
      "Your stubborn little side.",
    ],
    finalCard: {
      lead: "And somehow, after noticing all these little things\u2026",
      punch: "I still keep finding more reasons to love you.",
    },
  },

  // ---------------------------------------------------------------------
  // CHAPTER THREE — YOUR EFFECT ON ME
  // ---------------------------------------------------------------------
  effectCalculator: {
    heading: "Let\u2019s calculate your effect on me.",
    buttons: [
      { label: "YOUR SMILE 🥹", value: 99 },
      { label: "YOUR VOICE 💗", value: 99.99 },
      { label: "YOUR SLEEPY VOICE 😩", value: 95 },
      { label: "YOUR ENERGY 💋", value: 97 },
      { label: "YOUR RANDOM ATTITUDE ❤️‍🔥", value: 98 },
      { label: "YOU SAYING \u201CWHATEVER\u201D", value: 97 },
      { label: "YOU BEING CUTE FOR NO REASON 🫠", value: 100 },
    ],
    overloadLabel: "SYSTEM OVERLOAD",
    overloadText: "Apparently you have way too much influence over one particular boy.",
    footnote: "Please use this power responsibly.",
  },

  // ---------------------------------------------------------------------
  // CHAPTER FOUR — HOW WELL DO YOU KNOW ME? (quiz)
  // ---------------------------------------------------------------------
  quiz: {
  heading: "How well do we actually know each other? 💗",
  questions: [
    {
      question: "What can instantly make Anjani smile?",
      options: [
        "A random compliment",
        "Jigar being stupid",
        "A cute little surprise",
        "Probably all of the above",
      ],
      correctIndex: 3,
    },
    {
      question: "What's one thing that feels very “us”?",
      options: [
        "Random teasing",
        "Late-night conversations",
        "Laughing over completely stupid things",
        "All of the above",
      ],
      correctIndex: 3,
    },
    {
      question: "What is Anjani most likely to say when she's pretending not to care?",
      options: [
        "I don't know",
        "Whatever",
        "I'm fine",
        "Nothing",
      ],
      correctIndex: 1,
    },
    {
      question: "What's Jigar's biggest weakness when it comes to Anjani?",
      options: [
        "Her smile",
        "Her sleepy voice",
        "Her attitude",
        "Literally everything about her",
      ],
      correctIndex: 3,
    },
    {
      question: "What's the most dangerous combination?",
      options: [
        "Anjani being cute + Jigar trying to behave",
        "Anjani saying “whatever” + Jigar teasing her",
        "A sleepy call that was supposed to be five minutes",
        "All of these are dangerous",
      ],
      correctIndex: 3,
    },
    {
      question: "What happens when we start talking late at night?",
      options: [
        "We actually sleep on time",
        "Someone says “just five more minutes”",
        "Five minutes somehow becomes hours",
        "Both B and C",
      ],
      correctIndex: 3,
    },
    {
      question: "What's Jigar's favorite version of Anjani?",
      options: [
        "Happy Anjani",
        "Sleepy Anjani",
        "Angry-but-cute Anjani",
        "Every single version of her",
      ],
      correctIndex: 3,
    },
    {
      question: "What's the most accurate description of us?",
      options: [
        "Best friends with extra feelings",
        "Two idiots who fell way too hard",
        "Cute, chaotic and slightly dramatic",
        "Somehow all three",
      ],
      correctIndex: 3,
    },
  ],
  highScoreText:
    "Okay… apparently we know each other a little too well. 😭💗\nAnd honestly, I wouldn't have it any other way.",
  lowScoreText:
    "Hmm… looks like we need another ridiculously long conversation. 😏❤️",
  highScoreThreshold: 0.6,
  rewardLabel: "COUPLE MODE UNLOCKED 💗",
  rewardText:
    "Congratulations. You officially know way too much about each other.",
},
  // ---------------------------------------------------------------------
  // CHAPTER FIVE — MY PRIVATE FILES
  // ---------------------------------------------------------------------
  privateFiles: {
    heading: "JIGAR\u2019S PRIVATE FILES",
    files: [
      {
        id: "file001",
        code: "FILE 001",
        title: "Things I Never Say Enough",
        type: "text",
        entries: [
          "I notice more about you than I probably tell you.",
          "I remember little things because they matter to me.",
          "Sometimes I don\u2019t say enough, but that doesn\u2019t mean I don\u2019t feel it.",
        ],
      },
      {
        id: "file002",
        code: "FILE 002",
        title: "Moments I Replay",
        type: "memories",
        // These reuse the same photos/videos memory system below.
        // Leave empty and it will show elegant "memory coming soon" placeholders.
        memoryIndexes: [0, 1, 2],
      },
      {
        id: "file003",
        code: "FILE 003",
        title: "Things That Make Me Miss You",
        type: "text",
        entries: [
          "I miss your voice.",
          "I miss our random conversations.",
          "I miss your energy.",
          "I miss the stupid little moments that don\u2019t look important until you\u2019re not there.",
        ],
      },
      {
        id: "file004",
        code: "FILE 004",
        title: "Reasons You\u2019re Different",
        type: "text",
        entries: [
          "You became important to me in all the little ways.",
          "You became part of my ordinary days without me even realizing it.",
          "And somewhere between the conversations, jokes, calls, arguments and ordinary moments\u2026",
          "You became someone I never want to take for granted.",
        ],
      },
      {
        id: "file005",
        code: "FILE 005",
        title: "CLASSIFIED \uD83D\uDE0F",
        type: "classified",
        lockLabel: "ACCESS RESTRICTED",
        lockSubtext: "Only Anjani can unlock this.",
        holdInstruction: "Press and hold to unlock",
        unlockedLabel: "ACCESS GRANTED",
        revealLines: [
          "Okay\u2026 you weren\u2019t supposed to find this.",
          "It\u2019s basically proof that Jigar is ridiculously attached to you.",
          "There is no version of my future where you're not somewhere in it.",
        ],
      },
    ],
  },

  // ---------------------------------------------------------------------
  // CHAPTER SIX — FLIRT WITH ME
  // ---------------------------------------------------------------------
  flirt: {
  heading: "Okay… come here, pretty girl. 💋",
  subheading:
    "You already have my heart. Now let me embarrass myself trying to flirt with you.",
  button: "FLIRT WITH ME 💋",
},

flirtyMessages: [
  "Are you always this cute, or do you only become this dangerous when I'm around? 😏❤️",

  "I was going to flirt with you normally… then you smiled and I completely forgot what I was going to say.",

  "Can you stop being so attractive for five minutes? I'm trying very hard to pretend I have self-control. 😭",

  "If kisses were snowflakes, I'd send you a blizzard… and then probably get distracted kissing you instead. ❄️💋",

  "You know what's unfair? You get to be this pretty and I have to pretend I'm capable of acting normal around you.",

  "I think my heart has a favorite person… and unfortunately for me, it's you. 💗",

  "Are you Wi-Fi? Because every time you get close, I feel a connection I can't explain. 😭",

  "You must be tired… because you've been running through my mind all day. And yes, I'm still flirting with you. 😌",

  "If I could rearrange the alphabet, I'd put U and I closer… although honestly, I'd rather just keep you close to me. 🫠❤️",

  "You're becoming a serious problem. Every time I look at you, I like you a little more.",

  "I don't need a good morning text anymore. I just need you saying my name in that voice of yours. 🥹",

  "Your sleepy voice should come with a warning. I have absolutely no defense against it.",

  "You saying “whatever” should annoy me… so why does it somehow make you even cuter? 😭",

  "I could write you a hundred pickup lines… but I'd probably end up just telling you that you're ridiculously beautiful.",

  "Okay, last one… you're not just my type. You're the reason my type exists. 💋",
],
  // ---------------------------------------------------------------------
  // CHAPTER SEVEN — OUR MEMORY ROOM
  //
  // Leave `src` as "" for any memory whose photo you haven't added yet —
  // it will show an elegant placeholder automatically. Dates are optional;
  // leave blank to hide.
  // ---------------------------------------------------------------------
  memoryRoom: {
    heading: "Our little universe.",
    subheading: "A small, growing collection of us.",
  },
    photos: [
    {
      src: "/photos/photo1.jpg",
      caption: "My favorite smile.",
      date: "",
    },
    {
      src: "/photos/photo2.jpg",
      caption: "One of my favorite memories.",
      date: "",
    },
    {
      src: "/photos/photo3.jpg",
      caption: "The day you wouldn't stop laughing.",
      date: "",
    },
    {
      src: "/photos/photo4.jpg",
      caption: "That random call that turned into three hours.",
      date: "",
    },
    {
      src: "/photos/photo5.jpg",
      caption: "You, being effortlessly you.",
      date: "",
    },
  ],

  videos: [
    { src: "", caption: "A little memory." },
  ],

  // ---------------------------------------------------------------------
  // CHAPTER EIGHT — OUR SONG
  // ---------------------------------------------------------------------
  music: {
    title: "Our Song",
    // Direct audio URL (e.g. "/music/oursong.mp3" or an https link to an mp3).
    // Leave blank to show the "not added yet" placeholder player.
    url: "",
    prompt: "There is one song I associate with you.",
    subtitle: "Don\u2019t press play unless you\u2019re ready.",
    button: "PLAY OUR SONG \u266B",
  },

  // ---------------------------------------------------------------------
  // CHAPTER NINE — THE LETTER
  // Each entry in `paragraphs` is revealed one at a time as she taps.
  // ---------------------------------------------------------------------
  letter: {
    intro: "There is one thing I want to say properly.",
    openButton: "OPEN",
    paragraphs: [
      "I know I messed up.",
      "My misunderstanding during our call caused you pain, and I know that wasn\u2019t fair to you.",
      "I could explain what I was thinking, but an explanation doesn\u2019t erase how it made you feel.",
      "I was wrong.\nI own that.",
      "You didn\u2019t deserve to be hurt because I misunderstood you.",
      "And I don\u2019t want this little website to be a way of asking you to forget what happened or forcing you to be okay.",
      "I just wanted to say I\u2019m genuinely sorry.\nBecause you\u2019re important to me.",
      "More than my pride.\nMore than being right.",
      "And even while I\u2019m saying all of this, I still can\u2019t help thinking about all the tiny things I love about you.",
      "Your energy. Your sleepy voice. Your attitude. Your random little reactions.",
      "The way you can completely change my mood without even trying.",
      "Somewhere between all the conversations, jokes, calls, arguments and ordinary days\u2026 you became someone incredibly important to me.",
      "I don\u2019t expect you to suddenly forget everything.\nI don\u2019t expect a perfect response.\nAnd you don\u2019t have to say anything right now.",
      "I just want to do better.\nNot through pretty promises that last one night.",
      "Through the way I listen. Through the way I understand. Through the way I handle things when we\u2019re upset.\nThrough my actions.",
      "So if you\u2019re still hurt, take your time.\nIf you\u2019re still quiet, I\u2019ll understand.",
      "And if this little world made you smile even for a few seconds\u2026 then I\u2019m really glad I made it.",
      "I love you, Anjani.\nNo pressure.\nJust love. \u2661",
    ],
  },

  // ---------------------------------------------------------------------
  // FINAL SURPRISE
  // ---------------------------------------------------------------------
  finalSurprise: {
    teaser: "WAIT\u2026 ONE LAST THING.",
    button: "OPEN IT",
    steps: ["Come here.", "For a second.", "No words needed.", "Okay. You can go back to being JINIE 🌸 now. \uD83D\uDE0F", "I love you, sleepyhead."],
  },

  // ---------------------------------------------------------------------
  // FINAL SCREEN
  // ---------------------------------------------------------------------
  finalScreen: {
    line1: "You don\u2019t have to reply.",
    line2: "Just take care of yourself.",
    line3: "And remember\u2026",
    line4: "You\u2019re still my favorite person to annoy.",
    signature: "\u2661 Jigar 🥺",
  },
};
