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



const secretMessage = "Hi! I'm hot on the trail and ready for the next clue!";
console.log(rotateMessage(secretMessage, 25));
