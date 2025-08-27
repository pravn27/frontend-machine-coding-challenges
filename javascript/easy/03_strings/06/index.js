// Write a JavaScript function that takes a string and Capitalizes the first letter of each word

// Approach 1 - using array split(" "), map() and join(" ") methods
const capitalizedWords_A1 = (str) => {
  if (typeof str !== "string") {
    throw new Error("Invalid input");
  }
  if (str.length <= 1) return str.toUpperCase();

  const words = str.split(" ");
  const capitalizedWord = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
  return capitalizedWord.join(" ");
};

console.log("Approach 1 =======>");
console.log(capitalizedWords_A1("hello world from javascript"));
console.log(capitalizedWords_A1("this is a test"));
console.log(capitalizedWords_A1("  multiple   spaces  here "));
console.log(capitalizedWords_A1("Welcome to JAvascRipt CODe challenge"));
