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

// using Object char frequency count & check count
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
