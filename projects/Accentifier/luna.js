let lunadict = {
  // Greetings & Phrases
  "hello": "hail",
  "hi": "well met",
  "good morning": "a fair morn to thee",
  "good evening": "a quiet eve to thee",
  "goodbye": "fare thee well",
  "how are you": "how dost thou fare?",
  "nice to meet you": "’tis a pleasure to make thy acquaintance",
  "it is good to see you": "’tis a joy to behold thee once more",


  // Acknowledgements
  "thanks": "our thanks",
  "thank you": "we thank thee",
  "you're welcome": "’tis naught",
  "okay": "very well",
  "yes": "aye",
  "no": "nay",
  "sure": "verily",

  // People
  "friend": "companion",
  "friends": "comrades",
  "pony": "subject",
  "ponies": "our subjects",
  "stallion": "gentlestallion",
  "mare": "gentlemare",
  "colt": "young one",
  "filly": "young one",
  "foal": "babe",
  "changeling": "shifter-fey",
  "alicorn": "sister in power",
  "pegasus": "skyborne one",
  "earth pony": "earthbound soul",
  "unicorn": "horned kin",

  // Emotions
  "tired": "weary",
  "happy": "gladdened",
  "sad": "burdened in heart",
  "angry": "incensed",
  "love": "devotion",
  "affection": "fondness",
  "joy": "elation",
  "fear": "dread",
  "anxiety": "unquiet mind",
  "pride": "honor held high",

  // Miscellaneous
  "food": "nourishment",
  "drink": "draught",
  "sleep": "rest",
  "dream": "vision of night",
  "nightmare": "phantom dread",
  "light": "radiance",
  "darkness": "the shade",

  // MLP Lore (reworded with her voice)
  "cutie mark": "soul-crest",
  "magic": "arcane",
  "princess": "crown-bearer",
  "equestria": "the realm",
  "canterlot": "the high city",
  "ponyville": "the village of harmony",
  "crystal empire": "the northern gleam",
  "nightmare moon": "our former shadow",

  // Military & Guard Speak
  "orders": "directives",
  "commander": "warden",
  "soldier": "mare-at-arms",
  "guard": "watchmare",
  "mission": "quest",
  "enemy": "foe",

  // Terms from blindness / batpony heritage
  "look": "mark well",
  "see": "perceive",
  "watch": "attend",
  "hear": "harken",
  "listen": "lend thine ear",
  "dark": "gloom",
  "light": "radience",

  // Sentence-level transforms
  "i do not know": "we knoweth not",
  "i am going to": "we shall venture forth",
  "i do not want to": "we wish it not",
  "are you okay": "dost thou fare well?",
  "what is going on": "what transpires hither?",
  "this is very important": "this matter beareth great weight",
  "that is not my problem": "that burden is not ours to bear",
  "i am sorry": "we beg thy pardon",
  "i understand": "we comprehend thy meaning",
  "you must be careful": "thou must take heed",
  "we have to go": "we needs must away",
  "i have no choice": "our hoof is forced",
  "this is my duty": "this task is our charge"
}

let lunaregex = [
  { pattern: /\byou are\b/gi, replacement: "thou art" },
  { pattern: /\byour\b/gi, replacement: "thy" },
  { pattern: /\byours\b/gi, replacement: "thine" },
  { pattern: /\byou\b/gi, replacement: "thee" },
  { pattern: /\bi am\b/gi, replacement: "we are" },
  { pattern: /\bi have\b/gi, replacement: "we possess" },
  { pattern: /\bi will\b/gi, replacement: "we shall" },
  { pattern: /\bi shall\b/gi, replacement: "we shall" },
  { pattern: /\bwill you\b/gi, replacement: "wilt thou" },
  { pattern: /\bdo you\b/gi, replacement: "dost thou" },
  { pattern: /\bdid you\b/gi, replacement: "didst thou" },
  { pattern: /\bdoes\b/gi, replacement: "doth" },
  { pattern: /\bis\b/gi, replacement: "be" },
  { pattern: /\bwas\b/gi, replacement: "wert" },
  { pattern: /\bwere\b/gi, replacement: "wast" },
  { pattern: /\bit is\b/gi, replacement: "’tis" },
  { pattern: /\bit was\b/gi, replacement: "’twas" },
  { pattern: /\bi (\w+) not\b/gi, replacement: "not $1 I" },
  { pattern: /\bthis is\b/gi, replacement: "’tis" },
  { pattern: /\bthat is\b/gi, replacement: "’tis that" },
  { pattern: /\bthe (\w+) is\b/gi, replacement: "$1 is the" },
  { pattern: /\bwe must (\w+)\b/gi, replacement: "$1 must we" }
]
