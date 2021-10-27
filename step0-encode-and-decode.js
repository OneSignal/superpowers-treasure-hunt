/**
* Step 0
*
* This is the beginning of the code needed for encoding and decoding
* a message using our particular list of characters.
*
* Note: the 'offset' is currently hardcoded to 13 for all messages.
*
* HOMEWORK:
* - implement the decodeMessage function near the bottom!
* - there is an issue with the existing code - find and fix it!
*
* You can run this script with node to run a simple 'test' which
* takes a message, encodes it, then decodes it (with the code
* you wrote!) and compares that to the original.
*/

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

  // TODO: there might be a bug here... :)

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

function encodeMessage(message) {
  return rotateMessage(message, 13);
}

function decodeMessage(encodedMessage) {
  // TODO: WRITE ME
}


// A SIMPLE TEST - call this script from node
function test() {
  const message = "Lorem ipsum dolor sit amet";
  const encoded = encodeMessage(message);
  const decoded = decodeMessage(encoded);
  if (message === decoded) {
    console.log("SUCCESSFULLY ENCODED AND DECODED MESSAGE!");
  } else {
    console.log("OOPS - SOMETHING WENT WRONG");
    console.log("---------------------------");
    console.log("ENCODED MESSAGE:  " + encoded);
    console.log("EXPECTED DECODED: " + message);
    console.log("ACTUAL DECODED:   " + decoded);
  }
}

test();
