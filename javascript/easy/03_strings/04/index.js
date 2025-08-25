// Write a JavaScript function to find First Non-repeated Character

// Approach 1 - for Loop each char & check it appears again in the string
const firstNonRepeatedChar_A1 = (str) => {
  // for loop each char & check exist again or not
  for (let char of str) {
    if (str.indexOf(char) === str.lastIndexOf(char)) {
      return char;
    }
  }
  return null;
};

console.log("Approach 1 =======>");
console.log(firstNonRepeatedChar_A1("swiss"));
console.log(firstNonRepeatedChar_A1("aabbccde"));
console.log(firstNonRepeatedChar_A1("programming"));
console.log(firstNonRepeatedChar_A1("javascript"));

// Approach 2 - Hashmap (Object) / Frequency count approach
// using object
const firstNonRepeatedChar_A2_1 = (str) => {
  // define char freq count object
  const freqCharCount = {};
  // loop each char & create freq count of char
  for (let char of str) {
    freqCharCount[char] = (freqCharCount[char] || 0) + 1;
  }
  // check freq count char of 1
  for (let char of str) {
    if (freqCharCount[char] === 1) {
      return char;
    }
  }
  return null;
};

console.log("Approach 2_1 =======>");
console.log(firstNonRepeatedChar_A2_1("swiss"));
console.log(firstNonRepeatedChar_A2_1("aabbccde"));
console.log(firstNonRepeatedChar_A2_1("programming"));
console.log(firstNonRepeatedChar_A2_1("javascript"));

// Approach 2 - Hashmap (Map) / Frequency count approach
// using Map
const firstNonRepeatedChar_A2_2 = (str) => {
  // define char freq map
  const charFreqCountMap = new Map();

  // loop each char & update in charFreqCountMap
  for (let char of str) {
    charFreqCountMap.set(char, (charFreqCountMap.get(char) || 0) + 1);
  }

  // check freq count char of 1
  for (let char of str) {
    if (charFreqCountMap.get(char) === 1) {
      return char;
    }
  }
  return null;
};

console.log("Approach 2_2 =======>");
console.log(firstNonRepeatedChar_A2_2("swiss"));
console.log(firstNonRepeatedChar_A2_2("aabbccde"));
console.log(firstNonRepeatedChar_A2_2("programming"));
console.log(firstNonRepeatedChar_A2_2("javascript"));
