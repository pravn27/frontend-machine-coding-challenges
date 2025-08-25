// Write a JavaScript function to Count Vowels in a string

// Approach 1 - For loop (loop each char) and array includes() method
const countVowels_A1 = (str) => {
  // define vowel array
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  // for loop each char of string & use includes() to count vowels
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  // return the count
  return count;
};

console.log("Approach 1 =======>");
console.log(countVowels_A1("Hello World"));
console.log(countVowels_A1("amad@aM#---a"));
console.log(countVowels_A1("hello welcome ---"));
console.log(countVowels_A1("hello welcome to javascript coding challenges"));

// Approach 1 - For loop (loop each char) and includes() method
const countVowels_A1_1 = (str) => {
  // define vowel string
  const vowels = "aeiou";
  let count = 0;
  // for loop each char of string & use includes() to count vowels
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  // return the count
  return count;
};

console.log("Approach 1_1 =======>");
console.log(countVowels_A1_1("Hello World"));
console.log(countVowels_A1_1("amad@aM#---aA hello"));
console.log(countVowels_A1_1("hello welcome ---"));
console.log(countVowels_A1_1("hello welcome to javascript coding challenges"));
