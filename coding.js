// 1) Sum Zero
// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

const addToZero = (numArray) => {
    for (let index = 0; index < numArray.length; index++) {
        let secondaryNums = numArray.slice(index)
        secondaryNums.forEach(num => {
            if(numArray[index] + num === 0) {
                console.log(`${numArray[index]} + ${num} = 0`)
            }
        });
    }
}

//RUNTIME, its comprised of two loops nested, so O(n^2)

// For example:
addToZero([]);
// -> False
addToZero([1]);
// -> False
addToZero([1, 2, 3]);
// -> False
addToZero([1, 2, 3, -2]);
// -> True

// 2) Unique Characters
// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

const hasUniqueChars = (str) => {
    const spreadStr = [...new Set (str)]
    console.log(spreadStr)

    return spreadStr.length === str.length ? true : false
}

// For example:
console.log(hasUniqueChars("Monday"));
// -> True
console.log(hasUniqueChars("Moonday"));
// -> False

//RUNTIME: i could be wrong on this one. Buuutt i think its O(n)


// 3) Pangram Sentence
// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”
// Write a function to check a sentence to see if it is a pangram or not.

const isPangram = (str) => {
    let isPangram = false 
    const strArr = [...str]
    const alphabet = [..."abcdefghijklmnopqrstuvwxyz"]

    for (let index = 0; index < alphabet.length; index++) {
        if (!strArr.includes(alphabet[index])){
            return false
        } else if (strArr.includes(alphabet[index])) {
            isPangram = true
        }
    }
    return isPangram
}

//RUNTIME O(n) 

// For example:
console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// -> True
console.log(isPangram("I like cats, but not mice"));
// -> False



// 4) Longest Word
// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

const findLongestWord = (arr) => {
    let longestWord = ""
    arr.forEach(word => {
        if(word.length > longestWord.length) {
            longestWord = word
        }
    })
    console.log(longestWord.length)
    return longestWord.length
}

//RUNTIME: O(n)

// For example:
findLongestWord(["hi", "hello"]);
// -> 5