// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

  function substitution(input, alphabet = "", encode = true) {
    if (alphabet.length !== 26) return false;

    let alphabetArray = alphabet.split("");
    let sortedAlphabetArray = alphabetArray.sort();
    for (let i = 0; i < sortedAlphabetArray.length; i++) {
      if (sortedAlphabetArray[i] === sortedAlphabetArray[i + 1]) {
        return false;
      }
    }

    let result = "";

    let lowerCaseInput = input.toLowerCase();
    let lowerCaseCypherAlphabet = alphabet.toLowerCase();
    let regularAlphabet = "abcdefghijklmnopqrstuvwxyz";

    if (encode) {
      for (let letter of lowerCaseInput) {
        let searchedForIndex = regularAlphabet.indexOf(letter);

        if (searchedForIndex < 0) {
          result += letter;
          continue;
        }

        letter = lowerCaseCypherAlphabet[searchedForIndex];
        result += letter;
      }
    }

    if (!encode) {
      for (let letter of lowerCaseInput) {
        let searchedForIndex = lowerCaseCypherAlphabet.indexOf(letter);

        if (searchedForIndex < 0) {
          result += letter;
          continue;
        }

        letter = regularAlphabet[searchedForIndex];

        result += letter;
      }
    }

    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
