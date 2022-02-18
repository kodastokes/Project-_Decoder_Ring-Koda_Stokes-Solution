// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    
    // check for qualifying shift
    if (!shift || shift < -25 || shift > 25) {
      return false;
    }

    // adjust shift for decoding
    if (!encode) {
      shift = shift * -1;
    }

    //reference alphabet
    let alphabetString = "abcdefghijklmnopqrstuvwxyz";

    let lowerCaseInput = input.toLowerCase();
    let result = "";

    // loop through input string
    for (let letter of lowerCaseInput) {
      let letterIndex = alphabetString.indexOf(letter);

      // if it is a space or special, add to string as-is
      if (letterIndex < 0) {
        result += letter;
        continue;
      }

      // find index starting point
      let newIndex = letterIndex + shift;

      // adjustments to index if it needs to "wrap around"
      if (newIndex > alphabetString.length - 1) {
        newIndex = newIndex - 26;
      }

      if (newIndex < 0) {
        newIndex = newIndex + 26;
      }

      // add new letter to the string
      result += alphabetString[newIndex];
    }

    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
