let egyptiandict = {
  // Core affirmations
  "yes": "it is so",
  "no": "it is not so",
  "maybe": "it may yet be weighed",

  // Knowledge & thought
  "think": "consider",
  "know": "know in the heart",
  "understand": "see clearly",
  "believe": "hold as true",
  "remember": "keep in the heart",
  "forget": "let fall from memory",

  // Emotion as physical state
  "happy": "light of heart",
  "sad": "heavy of heart",
  "angry": "burning within",
  "afraid": "troubled in breath",
  "calm": "still within",

  // Abstract concepts grounded
  "truth": "that which stands firm",
  "lie": "crooked speech",
  "order": "right balance",
  "chaos": "unmaking",
  "danger": "peril",
  "problem": "a matter of weight",
  "choice": "the path before the feet",

  // Time & eternity
  "now": "in this moment",
  "soon": "before long",
  "later": "after this time",
  "forever": "for all cycles",
  "past": "what has already come to pass",

  // People & roles
  "king": "he who wears the crown",
  "queen": "she who wears the crown",
  "leader": "one who stands foremost",
  "enemy": "one who stands against",
  "friend": "one who stands beside",

  // Stock phrases
  "i do not know": "this is not known to me",
  "i don't know": "this is not known to me",
  "i understand": "I see this clearly",
  "i do not understand": "this is not clear to me",
  "be careful": "walk with care",
  "this is important": "this carries great weight",
  "that is not my problem": "this matter does not rest upon me"
}

let egyptianregex = [
  // Stative reframing FIRST (order matters)
  { pattern: /\bthis is\b/gi, replacement: "this stands as" },
  { pattern: /\bthat is\b/gi, replacement: "that stands as" },

  // Normalize contractions (after quote normalization)
  { pattern: /\bcan't\b/gi, replacement: "cannot" },
  { pattern: /\bdon't\b/gi, replacement: "do not" },
  { pattern: /\bwon't\b/gi, replacement: "will not" },
  { pattern: /\bi'm\b/gi, replacement: "I am" },
  { pattern: /\bit's\b/gi, replacement: "it is" },
  { pattern: /\bwouldn't\b/gi, replacement: "would not" },

  // Emotion reframed as state
  { pattern: /\bi am afraid\b/gi, replacement: "my breath is troubled" },
  { pattern: /\bi am angry\b/gi, replacement: "fire stirs within me" },

  // Future softened into inevitability
  { pattern: /\bwill\b/gi, replacement: "shall" },

  // Possession made explicit (keep late, it’s aggressive)
  { pattern: /\bmy\b/gi, replacement: "that which is mine" },

  // Emphasis
  { pattern: /\bvery\b/gi, replacement: "most" }
]
