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

function encodeMessage(message, offset) {
  return rotateMessage(message, offset);
}

function decodeMessage(encodedMessage, offset) {
  return rotateMessage(encodedMessage, -1 * offset);
}


// we sent the hunters to various people in slack for some clues
const secondClueHolder = "@firstClueSlackHandle";
const thirdClueHolder = "@thirdClueSlackHandle";
const finalAnswerSlackHandle = "@finalAnswerSlackHandle";
const finalAnswerPhrase = "superpowered onesies make the world go round";

const clue3SecretMessage = "Hi! I'm hot on the trail and ready for the next clue!";

function generateClues() {

// CLUE 1

const rawClue =
`Welcome to the treasure hunt! Message ${secondClueHolder} on slack and ask for the next clue!`;

console.log("CLUE NUMBER 1");
console.log("--------------");
console.log(`
Decode the following message with offset 13 for the next step:

${encodeMessage(rawClue, 13)}`);


// CLUE 2
console.log("");
console.log("CLUE NUMBER 2");
console.log("--------------");

console.log(`
For the next step, encode the following message with
any offset between 2 and 100 and send it
to ${thirdClueHolder} on slack:

${clue3SecretMessage}
`);


// CLUE 3 INSTRUCTIONS
console.log("");
console.log("CLUE NUMBER 3");
console.log("--------------");
console.log(`
For step 3 everyone will message ${thirdClueHolder} on slack
with the following message encoded with an unknown offset between
1 and 100.

${clue3SecretMessage}


Paste this into the variable incomingSecretOffsetMessage at the bottom
of this script and uncomment the processThirdClue function call to
automatically decode the message and print out the final clue to send!
`);
}

function processThirdClue(incomingMessage) {
  let foundOffset = false;
  let offset = null;

  // brute force find the offset they used
  for (let i = 2; i <= 100; i++) {
    const decoded = decodeMessage(incomingMessage, i);
    if (decoded == clue3SecretMessage) {
      foundOffset = true;
      offset = i;
      break;
    }
  }

  if (foundOffset) {
    console.log(`FOUND OFFSET: ${offset}`);
    console.log("Respond with the following clue:");
    console.log("");
    printFinalClue(offset);
  } else {
    // didnt find it... print them in english to help visually debug
    for (let i = 2; i <= 100; i++) {
      const decoded = decodeMessage(incomingMessage, i);
      console.log(`====  ${i}  ================`);
      console.log(decoded);
    }
    console.log("COULD NOT FIND THE MESSAGE - VISUALLY DEBUG AND HELP THEM");
  }
}

function printFinalClue(offset) {
  console.log("");
  console.log(`
For the last task each line is encoded using a different offset.
The first line will use offset ${offset} and each line after
that will increase the offset by one.`
  );
  console.log("You'll need to decode each line individually and piece the last message together.");
  console.log("");
  console.log("");

  const lastLines = [
    "You should feel",
    "amazing for making",
    "it this",
    "far and",
    "using your brand",
    "new coding skills",
    "to make",
    "tedious and",
    "repetitive",
    "tasks",
    "easy and fun instead!",
    "The secret answer",
    "to this little",
    "treasure hunt",
    "is the phrase",
    finalAnswerPhrase,
    "Message that",
    `to ${finalAnswerSlackHandle} in slack `,
    "and they will tell -everyone-",
    "that you solved",
    "the puzzle and that",
    "you",
    "are",
    "awesome!",
  ];

  for (let i = 0; i < lastLines.length; i++) {
    console.log(encodeMessage(lastLines[i], offset+i));
  }
}

generateClues();

// when given secret offset clue paste it here
const incomingSecretOffsetMessage = "6Hgy7'LyGNSyNMySGDySQzHKyzMCyQDzCXyENQySGDyMDWSyBKTDg";
processThirdClue(incomingSecretOffsetMessage);
