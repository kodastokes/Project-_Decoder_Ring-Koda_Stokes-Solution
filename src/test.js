function caesarOld(input, shift, encode = true) {
    if (!shift || shift < -25 || shift > 25) {
      return false;
    }

    if (!encode) {
      shift = shift * -1;
    }

    let alphabetArray = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    
    let lowerCaseInputArray = input.toLowerCase().split("");

    for (let i = 0; i < lowerCaseInputArray.length; i++) {
      for (let j = 0; j < alphabetArray.length; j++) {
        if (lowerCaseInputArray[i] === alphabetArray[j]) {
          let adjustedIndex = j + shift;
          if (adjustedIndex > 25) {
            adjustedIndex = adjustedIndex - 26;
          }
          if (adjustedIndex < 0) {
            adjustedIndex = adjustedIndex + 26;
          }
          lowerCaseInputArray[i] = alphabetArray[adjustedIndex];
          break;
        }
      }
    }

    return lowerCaseInputArray.join("");
  }

function mod(n, l) {
    return ((n % l) + l) % l
} 

function caesar(input, shift, encode = true) {
    if (!shift) {
        return false;
    }

    if (!encode) {
        shift = shift * -1;
    }

    let alphabetArray = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
    let lowerCaseInput = input.toLowerCase();
    let result = ''

    for (let letter of lowerCaseInput) {    // Lenght of input > k
        let letterIndex = alphabetArray.indexOf(letter);  // 26
        
        // If the letter is not in the array, it will return -1 so just append it to the result and move on
        if (letterIndex < 0) {
            result += letter;
            continue;
        }

        // We found the letter, let's find the new index
        let newIndex = letterIndex + shift

        // Keep the index always within the array (0 - 25)
        // if (newIndex > alphabetArray.length - 1) {
        //     newIndex = newIndex % alphabetArray.length
        // }        

        // if (newIndex < 0) {
        //     newIndex = mod(newIndex, alphabetArray.length)
        // }
        newIndex = mod(newIndex, alphabetArray.length)

        // Append the new letter to the result
        result += alphabetArray[newIndex]
    }

    return result
}




// let resultOld = caesarOld("thinkful", 3)
// let resultNew = caesar("thinkful", 3)
let resultOld = caesarOld("a", -1)
let resultNew = caesar("a", -1)
// let resultOld = caesarOld("z", 1)
// let resultNew = caesar("z", 1)

console.log(`${resultOld} = ${resultNew}`)

console.log(caesar("thinkful", 3)); //> 'wklqnixo'
console.log(caesar("thinkful", -3)); //> 'qefkhcri'
console.log(caesar("wklqnixo", 3, false)); //> 'thinkful'
console.log(caesar("This is a secret message!", 8)); //> 'bpqa qa i amkzmb umaaiom!'
console.log(caesar("BPQA qa I amkzmb umaaiom!", 8, false)); //> 'this is a secret message!'


// let arr = ['a','b','c']
// console.log(arr.indexOf('d'))

// 3, 1 = a , 1
// 3, 2 = b , 2
// 3, 3 = c , 3
// 3, 4 = a , 1
// 3, 10 = a , 1


// 2(b), 10 = c(3)


// (2 * 3) + 4 = 10


// (3 * 3) + 1 = 10


// 10 - (3*3) = 1

// 10 % 3 = 

// 10 / 3 = 3 remainder 1
// 10 % 3 = 1

// 10 / 3 




// 3 * 1 + 1 = 4
// 3 * 0 + 2 = 2
// 3 * 0 + 1 = 1
// 3 * 0 + 3 = 3

// console.log(11 % 3)
// console.log(4 % 3)
// console.log(5 % 3)
// console.log(6 % 3)
// console.log(1 % 3)
// console.log(2 % 3)
// console.log(3 % 3)
// let arr1 = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
// let it = arr1.indexOf('t')
// let ni = it + (26 * 32) + 26 + 3
// let ni2 = ni

// if (ni > arr1.length - 1) { // 25
//     ni -= (26 * 32) - 26;
// }

// let mni = mod(ni2, arr1.length)

// console.log(it)
// console.log(`${ni} = ${mni}`)


// console.log(4 % 3)
// console.log(-20 % 26)

// console.log(mod(-20, 26))


// console.log(arr1[ni])
// console.log(arr1[mni]) // w
// console.log(300 / 26)
// console.log(300 % 26)



let alphabetArray = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];

function shiftLetter(letter, shift, encode = true) {
    if (!encode) {
        shift = shift * -1;
    }

    let lowerCaseLetter = letter.toLowerCase();
    let letterIndex = alphabetArray.indexOf(lowerCaseLetter);
    
    if (letterIndex < 0) {
        return letter
    }

    let newIndex = letterIndex + shift       
    newIndex = mod(newIndex, alphabetArray.length)

    return alphabetArray[newIndex]
}

function ceasarMap(input, shift, encode = true) {
    if (!shift) {
        return false;
    }

    return input.split('').map(x => shiftLetter(x, shift, encode)).join('');
}

console.log('Using map...')
console.log(ceasarMap('thinkful', 3))
console.log(ceasarMap("This is a secret message!", 8)); //> 'bpqa qa i amkzmb umaaiom!'
console.log(ceasarMap("BPQA qa I amkzmb umaaiom!", 8, false)); //> 'this is a secret message!'




let name = 'koda'  // 1

// CPU = 10 operations / second

function greet(name, n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                console.log(`Hi ${name}`) // n * n
            }
        }
    }
    // n * n * n = 400 > 40 secs  
    // n ^ 3 = 8000 > 13 mins
}

function greet(name, n) {
    for (let i = 0; i < n; i++) {
        console.log(`Hi ${name}`) // n
    }

    for (let j = 0; j < n; j++) {
        console.log(`Hi ${name}`) // n
    }
    // n + n = 40 > 4 secs
    // 2n  n 3n 4n 5n => n
}

// O (n)

greet(name, 30000)