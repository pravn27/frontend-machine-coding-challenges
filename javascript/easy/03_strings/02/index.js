// Write a function to check Palindrome String

// Approach 1 - Reverse & compare with original string
const isPalindromeString_A1 = (str) => {
  // string which accepts only Alpha Numeric
  const cleanedString = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  if (typeof cleanedString !== "string") {
    throw new Error("Enter valid input string");
  }
  if (cleanedString.length <= 1) return true;
  const reversedString = cleanedString.split("").reverse().join("");
  return reversedString === cleanedString;
};

console.log("Approach 1 =======>");
console.log(isPalindromeString_A1("121"));
console.log(isPalindromeString_A1("amad@aM#---a"));
console.log(isPalindromeString_A1("hello welcome ---"));
console.log(isPalindromeString_A1("welcome hello olleh emoclew"));

// Approach 2 - Two pointer
const isPalindromeString_A2 = (str) => {
  // string which accepts only Alpha Numeric
  const cleanedString = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  if (typeof cleanedString !== "string") {
    throw new Error("Enter valid input string");
  }
  if (cleanedString.length <= 1) return true;

  let left = 0;
  let right = cleanedString.length - 1;

  while (left < right) {
    if (cleanedString[left] !== cleanedString[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

console.log("Approach 2 =======>");
console.log(isPalindromeString_A2("121"));
console.log(isPalindromeString_A2("carrac"));
console.log(isPalindromeString_A2("amad@aM#---a"));
console.log(isPalindromeString_A2("hello welcome ---"));
console.log(isPalindromeString_A2("welcome hello olleh emoclew"));
