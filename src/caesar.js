// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
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

  console.log(caesar("message", 1, encode = true))

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
