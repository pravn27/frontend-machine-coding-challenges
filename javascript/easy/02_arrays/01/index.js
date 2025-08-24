// Write a function to remove duplicate element from an Array

// Approach 1 - using Set()
const removeDuplicates_A1 = (arr) => {
  const uniqueElements = new Set(arr);
  return [...uniqueElements];
};

console.log("Approach 1 =======>");
console.log(removeDuplicates_A1([1, 2, 2, 3, 3, 3, 4, 5, 3, 2, 1]));
console.log(removeDuplicates_A1([6, 5, 6, 1, 1, 2, 5, 2, 1]));
console.log(removeDuplicates_A1(["Hare", "Hare", "Krishna", "Hare"]));
console.log(removeDuplicates_A1(["1", 1, 2, 2, 3, 1, "1"]));

// Approach 2 - using Array filter and indexOf methods
const removeDuplicates_A2 = (arr) => {
  const uniqueElements = arr.filter(
    (item, index) => arr.indexOf(item) === index
  );
  return uniqueElements;
};

console.log("Approach 2 =======>");
console.log(removeDuplicates_A2([1, 3, 3, 3, 4, 5, 3, 1]));
console.log(removeDuplicates_A2([6, 5, 6, 1, 5, 2, 1]));
console.log(removeDuplicates_A2(["Hare", "Rama", "Krishna", "Hare", "Hare"]));
console.log(removeDuplicates_A2(["1", 1, 2, 3, 1, "1"]));

// Approach 3 - using Objects manual tracking
const removeDuplicates_A3 = (arr) => {
  const results = [];
  const uniqueObjProps = {};
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueObjProps[arr[i]]) {
      uniqueObjProps[arr[i]] = true;
      results.push(arr[i]);
    }
  }
  return results;
};

console.log("Approach 3 =======>");
console.log(removeDuplicates_A3([1, 1, 10, 9, 9, 3, 5, 3, 1]));
console.log(removeDuplicates_A3([6, 5, 6, 5, 2, 1]));
console.log(removeDuplicates_A3(["Hare", "Rama", "Krishna", "Hare", "Hare"]));
console.log(removeDuplicates_A3(["1", 1, 2, 3, 1, "1"]));
