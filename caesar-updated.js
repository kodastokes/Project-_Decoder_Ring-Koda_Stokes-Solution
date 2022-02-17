function caesar(input, shift, encode = true) {
  if (!shift || shift < -25 || shift > 25) {
    return false;
  }

  if (!encode) {
    shift = shift * -1;
  }

  let alphabetString = "abcdefghijklmnopqrstuvwxyz";
  let lowerCaseInput = input.toLowerCase();
  let result = "";

  for (let letter of lowerCaseInput) {
    let letterIndex = alphabetString.indexOf(letter);

    if (letterIndex < 0) {
      result += letter;
      continue;
    }

    let newIndex = letterIndex + shift;

    if (newIndex > alphabetString.length - 1) {
      newIndex = newIndex - 26;
    }

    if (newIndex < 0) {
      newIndex = newIndex + 26;
    }
    result += alphabetString[newIndex];
  }

  return result;
}

console.log(caesar("thinkful", 3)); //> 'wklqnixo'
console.log(caesar("thinkful", -3)); //> 'qefkhcri'
console.log(caesar("wklqnixo", 3, false)); //> 'thinkful'
console.log(caesar("This is a secret message!", 8)); //> 'bpqa qa i amkzmb umaaiom!'
console.log(caesar("BPQA qa I amkzmb umaaiom!", 8, false)); //> 'this is a secret message!'
