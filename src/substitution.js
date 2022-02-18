// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet = "", encode = true) {
    // checking for cypher alphabet length requirement
    if (alphabet.length !== 26) return false;

    // checking for unique characters in the cypher alphabet
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
      for (let character of lowerCaseInput) {
        // find index of the cypher character in the regular alphabet
        let searchedForIndex = regularAlphabet.indexOf(character);

        // if the cypher char isn't in the alphabet, add to result string
        if (searchedForIndex < 0) {
          result += character;
          continue;
        }

        // encode character and add to result string
        character = lowerCaseCypherAlphabet[searchedForIndex];
        result += character;
      }
    }

    if (!encode) {
      for (let character of lowerCaseInput) {
        // find index of character in the cypher alphabet
        let searchedForIndex = lowerCaseCypherAlphabet.indexOf(character);

        // if the char isn't in the cypher alphabet, add to result string
        if (searchedForIndex < 0) {
          result += character;
          continue;
        }

        // decode character and add to result string
        character = regularAlphabet[searchedForIndex];
        result += character;
      }
    }
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
