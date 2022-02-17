function polybiusOld(input, encode = true) {
  let encodingObject = {
    " ": " ",
    a: 11,
    b: 21,
    c: 31,
    d: 41,
    e: 51,
    f: 12,
    g: 22,
    h: 32,
    i: 42,
    j: 42,
    k: 52,
    l: 13,
    m: 23,
    n: 33,
    o: 43,
    p: 53,
    q: 14,
    r: 24,
    s: 34,
    t: 44,
    u: 54,
    v: 15,
    w: 25,
    x: 35,
    y: 45,
    z: 55,
  };

  let decodingObject = {
    " ": " ",
    11: "a",
    21: "b",
    31: "c",
    41: "d",
    51: "e",
    12: "f",
    22: "g",
    32: "h",
    42: "i/j",
    52: "k",
    13: "l",
    23: "m",
    33: "n",
    43: "o",
    53: "p",
    14: "q",
    24: "r",
    34: "s",
    44: "t",
    54: "u",
    15: "v",
    25: "w",
    35: "x",
    45: "y",
    55: "z",
  };

  if (encode) {
    let inputArray = input.toLowerCase().split("");
    let finalWordArray = [];

    for (let i = 0; i < inputArray.length; i++) {
      finalWordArray.push(encodingObject[inputArray[i]]);
    }

    return finalWordArray.join("");
  }

  if (!encode) {
    let inputArray = input.split("");

    let filteredArray = inputArray.filter((number) => number > 0);
    if (filteredArray.length % 2 === 1) {
      return false;
    }

    let combinedArray = [];

    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i] > 0) {
        let digitA = inputArray[i];
        let digitB = inputArray[++i];
        combinedArray.push(digitA + digitB);
      } else combinedArray.push(inputArray[i]);
    }

    let finalNumberArray = [];

    for (let i = 0; i < combinedArray.length; i++) {
      finalNumberArray.push(decodingObject[combinedArray[i]]);
    }

    return finalNumberArray.join("");
  }
}

const cipher = [
    [' ', '1', '2', '3', '4', '5']
    ['1', 'A', 'B', 'C', 'D', 'E']
    ['2', 'F', 'G', 'H', 'I/J', 'K']
    ['3', 'L', 'M', 'N', 'O', 'P']
    ['4', 'Q', 'R', 'S', 'T', 'U']
    ['5', 'V', 'W', 'X', 'Y', 'Z']
]

function polybius(input, encode = true) {

}

console.log(polybiusOld("thinkful"), "4432423352125413"); //> "4432423352125413"
console.log(polybiusOld("4432423352125413", false), "th(i/j)nkful");


const polybiusModule = (function () {
    let polybiusSquareArray = [
      ["Na", "Na", "Na", "Na", "Na"],
      ["Na", "a", "b", "c", "d", "e"],
      ["Na", "f", "g", "h", "i/j", "k"],
      ["Na", "l", "m", "n", "o", "p"],
      ["Na", "q", "r", "s", "t", "u"],
      ["Na", "v", "w", "x", "y", "z"],
    ];
  
    //console.log(polybiusSquareArray[1][1])
  
    function polybius(input, encode = true) {
      if (!encode) {
        let inputArray = input.split("");
        let space = inputArray.indexOf(" ") / 2;
        // console.log(inputArray)
        // console.log(space)
  
        let filteredArray = inputArray.filter((number) => number > 0);
        if (filteredArray.length % 2 === 1) {
          return false;
        }
  
        let firstDigit = [];
        for (let i = 0; i < filteredArray.length; i += 2) {
          let digitOne = filteredArray[i];
          firstDigit.push(digitOne);
        }
  
        let secondDigit = [];
        for (let i = 1; i < filteredArray.length; i += 2) {
          let digitTwo = filteredArray[i];
          secondDigit.push(digitTwo);
        }
  
        // console.log(firstDigit)
        // console.log(secondDigit)
  
        let lettersArray = [];
  
        for (let i = 0; i < firstDigit.length; i++) {
          for (let j = 0; j < secondDigit.length; j++) {
            // console.log(firstDigit[i], secondDigit[i])
            // console.log(polybiusSquareArray[firstDigit[i]][secondDigit[i]])
            lettersArray.push(polybiusSquareArray[secondDigit[i]][firstDigit[i]]);
            break;
          }
        }
        //console.log(lettersArray)
        if (space > 1) {
          lettersArray.splice(space, 0, " ");
        }
        return lettersArray.join("");
      }
  
      let lowerCaseInputArray = input.toLowerCase().split("");
      //console.log(lowerCaseInputArray)
    }
  
    // polybius("thinkful");
    // console.log(polybius("3251131343 2543241341", false));
    // console.log(polybius("4432423352125413", false));
  
    return {
      polybius,
    };
  })();
  
  module.exports = { polybius: polybiusModule.polybius };
  