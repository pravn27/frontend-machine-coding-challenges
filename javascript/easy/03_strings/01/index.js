// Write a function to reverse a string

// Approach 1 - using array Built-in methods (split, reverse, join)
const reverseString_A1 = (str) => {
  if (typeof str !== "string") {
    throw new Error("Enter valid input string");
  }
  if (str.length <= 1) return str;
  return str.split("").reverse().join("");
};

console.log("Approach 1 =======>");
console.log(reverseString_A1("praveen"));
console.log(reverseString_A1("hello"));
console.log(reverseString_A1("hello welcome to javascript"));

// Approach 2 - using Array 2 pointer swap
const reverseString_A2 = (str) => {
  const charArray = str.split("");
  let left = 0;
  let right = charArray.length - 1;

  while (left < right) {
    [charArray[left], charArray[right]] = [charArray[right], charArray[left]];
    left++;
    right--;
  }
  return charArray.join("");
};

console.log("Approach 2 =======>");
console.log(reverseString_A2("praveen test reverse string"));
console.log(reverseString_A2("hello all"));
console.log(reverseString_A2("hello welcome to javascript"));

// Approach (Brute Force Approach) 3 - using for loop & string concatenation
const reverseString_A3 = (str) => {
  let reverseString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseString = reverseString + str[i];
  }
  return reverseString;
};

console.log("Approach (Brute Force Approach) 3 =======>");
console.log(reverseString_A3("praveen test reverse string"));
console.log(reverseString_A3("hello all"));
console.log(reverseString_A3("hello welcome to javascript"));
