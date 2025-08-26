// Write a JavaScript function to Check if two strings are Anagrams or not

// Approach 1 - Sort both strings (use split, sort, join) & compare equality
const areAnagrams_A1 = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  // sort string 1 & string 2
  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");

  // compare sorted string & return true / false
  return sortedStr1 === sortedStr2;
};

console.log("Approach 1 =======>");
console.log(areAnagrams_A1("listen", "silent"));
console.log(areAnagrams_A1("triangle", "integral"));
console.log(areAnagrams_A1("hello", "world"));

// Approach 2 - using Object char frequency count & check count
const areAnagrams_A2 = (str1, str2) => {
  // check str1, str2 length, if not equal return false
  if (str1.length !== str2.length) return false;

  // create char freq count object of str1
  const charFreqOfStr1 = {};

  // loop each char of str1, update in char freq object
  for (let char of str1) {
    charFreqOfStr1[char] = (charFreqOfStr1[char] || 0) + 1;
  }
  // loop each char of str2, check with char freq of str1
  for (let char of str2) {
    if (!charFreqOfStr1[char]) return false;
    charFreqOfStr1[char]--;
  }

  return Object.values(charFreqOfStr1).every((count) => count === 0);
};

console.log("Approach 2 =======>");
console.log(areAnagrams_A2("listen", "silent"));
console.log(areAnagrams_A2("triangle", "integral"));
console.log(areAnagrams_A2("hello", "world"));

// Approach 3 - using Map char frequency count & check the count
const areAnagrams_A3 = (str1, str2) => {
  // check str1, str2 length, if not equal return false
  if (str1.length !== str2.length) return false;

  // define Char freq Map of string 1
  const charFreqOfStr1Map = new Map();
  // loop each char of str1, create Map of char freq count
  for (let char of str1) {
    charFreqOfStr1Map.set(char, (charFreqOfStr1Map.get(char) || 0) + 1);
  }
  // decrease freq count of str1 compare with str2
  for (let char of str2) {
    if (!charFreqOfStr1Map.has(char) || charFreqOfStr1Map.get(char) === 0) {
      return false;
    }
    charFreqOfStr1Map.set(char, charFreqOfStr1Map.get(char) - 1);
  }
  return true;
};

console.log("Approach 3 =======>");
console.log(areAnagrams_A3("listen", "silent"));
console.log(areAnagrams_A3("triangle", "integral"));
console.log(areAnagrams_A3("hello", "world"));
