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
