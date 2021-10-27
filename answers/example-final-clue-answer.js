const LETTERS = [
  'a', 'b', 'c','d','e','f','g', 'h','i', 'j', 'k',
  'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
  'u', 'v', 'w', 'x', 'y', 'z',

  'A', 'B', 'C','D','E','F','G', 'H','I', 'J', 'K',
  'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
  'U', 'V', 'W', 'X', 'Y', 'Z',

  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',

  ',', '.', '!', '@', '#', '$', '%', '^', '&', '*',
  ':', ';', '-', '_',
  '(', ')', '{', '}', '[', ']',
 ' ',
];

// build our map of letters to their index in the array
let indexMap = {};
for (let i = 0; i < LETTERS.length; i++) {
  let letter = LETTERS[i];
  indexMap[letter] = i;
}

// 'rotate' a letter by the given offset
function rotateLetter(letter, offset) {
  // turn it into a number (index in our letters array)
  let index = indexMap[letter];

  // just pass the letter through if we dont know how to rotate it
  if (index == undefined) {
    return letter;
  }

  // add our offset to the index to get a new number
  let newIndex = index + offset;

  // TODO: wrap correctly if we allow offsets greater than the list length
  while (newIndex >= LETTERS.length) {
    newIndex = newIndex - LETTERS.length;
  }

while (newIndex < 0) {
    newIndex = newIndex + LETTERS.length;
  }

  // turn the new number back into a letter
  let newCharacter = LETTERS[newIndex];

  return newCharacter;
}

// utility function - rotate all the letters in a message
function rotateMessage(message, offset) {
  let newMessage = '';

  // for every letter in the message
  for (let i = 0; i < message.length; i++) {
    let letter = message[i];
    let newLetter = rotateLetter(letter, offset);
    newMessage += newLetter;
  }

  return newMessage;
}


const startingOffset = 25;
const clueLines = [
"_NTyRGNTKCyEDDK",
"AMAZINGzFORzMAKING",
"JUAUIJT",
"HCTBCPF",
"XVLQJC1RXUCEUDQG",
"RI0DGSHMRKDWOMPPW",
"YTERFPJ",
"ZKJOU0YFGTJ",
"YLWL0P0P2L",
"1I0S0",
"NJ17IJWMIO3WIRW12NJMq",
"]ROJ2OM1O3JKX26O1",
"4ZK4ST3KWT44WP",
"53QM463QLT6Z5",
"V5M6URM2U4N5R",
"683S532,S5SRN21S6WS6N0OYSN7VSN,25ZRNU2N5281R",
"}T77PVTO8WP8",
"94PyVY3Q1%38!U7d1QS0_Q3T1UPY3P81QS0P",
"R4UQ,YV$Q@Z22Q,V22QIV!V8$54VI",
".ZS.R%6!R,63@WV",
"!0XS8@&&4XST6WS!0T!",
"&8#",
"V!Z",
"W&0#,80D",
];


for (let i = 0; i < clueLines.length; i++) {
  console.log(rotateMessage(clueLines[i], -1 * (startingOffset+i)))
}
