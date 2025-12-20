const l337 = {
  A: ['4', '@'], B: ['8'], C: ['<', '('], D: ['|)'], E: ['3'], F: ['|='],
  G: ['6', '9'], H: ['#'], I: ['1', '!'], J: ['_|'], K: ['|<'], L: ['1', '|_'],
  M: ['/\\/\\'], N: ['|\\|'], O: ['0'], P: ['|2'], Q: ['(,)'], R: ['|2'],
  S: ['5', '$'], T: ['7', '+'], U: ['(_)'], V: ['\\/'], W: ['\\/\\/'], X: ['><'],
  Y: ['`/'], Z: ['2']
};

function randomChar() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const char = chars.charAt(Math.floor(Math.random() * chars.length));
  return Math.random() < 0.7 && l337[char]
    ? l337[char][Math.floor(Math.random() * l337[char].length)]
    : char;
}

function randomNumber() {
  return Math.floor(Math.random() * 10);
}

function generateSegment(length = 4) {
  let seg = '';
  for (let i = 0; i < length; i++) {
    seg += Math.random() < 0.5 ? randomChar() : randomNumber();
  }
  return seg;
}

function RobotNameGen() {
  const parts = [
    generateSegment(2),
    '-',
    generateSegment(3),
    Math.random() < 0.3 ? '_' + generateSegment(1) : '',
    Math.random() < 0.3 ? '-V' + (Math.floor(Math.random() * 5) + 1) : ''
  ];
  document.getElementById('RobotNameOutput').innerText = parts.join('');
}
