let countrydict = {
  // Greetings & Phrases
  "hello": "howdy",
  "hi": "howdy",
  "good morning": "mornin’ y’all",
  "good evening": "evenin’",
  "goodbye": "see y’all later",
  "how are you": "how ya doin’",
  "nice to meet you": "real pleased t’meetcha",

  // Acknowledgements
  "thanks": "much obliged",
  "thank you": "’preciate it",
  "you're welcome": "don’t mention it",
  "okay": "alrighty",
  "yes": "yep",
  "no": "nope",

  // People
  "friend": "pardner",
  "friends": "folks",
  "pony": "critter",
  "stallion": "feller",
  "mare": "gal",
  "colt": "young’un",
  "filly": "little lady",
  "foal": "young’un",

  // Food & Drink
  "food": "chow",
  "drink": "swig",
  "breakfast": "mornin’ grub",
  "lunch": "midday fixin’s",
  "dinner": "supper",

  // Time & Place
  "home": "homestead",
  "town": "village",
  "city": "big ol’ place",
  "farm": "spread",
  "countryside": "back forty",

  // Emotions
  "tired": "worn out",
  "happy": "tickled",
  "sad": "blue",
  "angry": "fit to be tied",
  "love": "sweet on ya",
  "pride": "plumb proud",

  // Sentence-level
  "i do not know": "ain’t got a clue",
  "i don't know": "dunno",
  "i am going to": "i’m fixin’ to",
  "we have to go": "we best be movin’",
  "are you okay": "y’all doin’ alright?",
  "what is going on": "what in tarnation?",
  "this is very important": "this here’s mighty serious",
  "that is not my problem": "ain’t my hog to wrestle"
}

let contryregex = [
  { pattern: /\bgoing to\b/gi, replacement: "fixin’ to" },
  { pattern: /(\w+)ing\b/gi, replacement: "$1in’" },
  { pattern: /\byou all\b/gi, replacement: "y’all" },
  { pattern: /\bdo not\b/gi, replacement: "don’t" },
  { pattern: /\bdoes not\b/gi, replacement: "don’t" },
  { pattern: /\bdid not\b/gi, replacement: "didn’t" },
  { pattern: /\bis not\b/gi, replacement: "ain’t" },
  { pattern: /\bare not\b/gi, replacement: "ain’t" },
  { pattern: /\bwas not\b/gi, replacement: "weren’t" },
  { pattern: /\bwere not\b/gi, replacement: "weren’t" },
  { pattern: /\bcannot\b/gi, replacement: "can’t" }
]
