let copticdict = {
  // Affirmation & certainty
  "yes": "it is so",
  "no": "it is not so",
  "maybe": "it remains to be seen",

  // Knowing & perception
  "know": "know within",
  "think": "consider within",
  "understand": "see clearly",
  "believe": "hold as true",
  "remember": "keep within",

  // Emotion as physical state
  "happy": "light within the chest",
  "sad": "heavy within the chest",
  "angry": "heat within",
  "afraid": "tightness of breath",
  "calm": "stillness within",

  // Abstract concepts grounded
  "truth": "that which is firm",
  "lie": "bent speech",
  "order": "right arrangement",
  "chaos": "falling apart",

  // People
  "friend": "one who is near",
  "enemy": "one who stands against",
  "leader": "one who stands before",

  // Time
  "now": "in this moment",
  "later": "after this",
  "forever": "without end"
}

let copticregex = [
  // Copula emphasis
  { pattern: /\bi am\b/gi, replacement: "I exist as" },
  { pattern: /\byou are\b/gi, replacement: "you exist as" },
  { pattern: /\bit is\b/gi, replacement: "it exists as" },

  // Possession externalization
  { pattern: /\bmy (\w+)\b/gi, replacement: "the $1 of me" },
  { pattern: /\byour (\w+)\b/gi, replacement: "the $1 of you" },
  { pattern: /\bhis (\w+)\b/gi, replacement: "the $1 of him" },
  { pattern: /\bher (\w+)\b/gi, replacement: "the $1 of her" },
  { pattern: /\btheir (\w+)\b/gi, replacement: "the $1 of them" },

  // De-agentification
  { pattern: /\bi decided to\b/gi, replacement: "it came to pass that I" },
  { pattern: /\bi want to\b/gi, replacement: "there is desire within me to" },

  // Causal phrasing
  { pattern: /\bbecause\b/gi, replacement: "for this reason" },

]
