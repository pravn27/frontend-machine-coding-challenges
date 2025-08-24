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

// Approach 2 - using Objects manual tracking / Hash map
const removeDuplicates_A2 = (arr) => {
  const results = [];
  const uniqueObjProps = {};
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    // check if value already exists in hash map
    if (!uniqueObjProps[value]) {
      // mark as seen
      uniqueObjProps[value] = true;
      // add to result
      results.push(value);
    }
  }
  return results;
};

console.log("Approach 2 =======>");
console.log(removeDuplicates_A2([1, 1, 10, 9, 9, 3, 5, 3, 1]));
console.log(removeDuplicates_A2([6, 5, 6, 5, 2, 1]));
console.log(removeDuplicates_A2(["Hare", "Rama", "Krishna", "Hare", "Hare"]));
console.log(removeDuplicates_A2(["1", 1, 2, 3, 1, "1"]));

// Approach (Brute Force Approach) 3 - using Array filter and indexOf methods
const removeDuplicates_A3_1 = (arr) => {
  const uniqueElements = arr.filter(
    (item, index) => arr.indexOf(item) === index
  );
  return uniqueElements;
};

console.log("Approach 3_1 =======>");
console.log(removeDuplicates_A3_1([1, 3, 3, 3, 4, 5, 3, 1]));
console.log(removeDuplicates_A3_1([6, 5, 6, 1, 5, 2, 1]));
console.log(removeDuplicates_A3_1(["Hare", "Rama", "Krishna", "Hare", "Hare"]));
console.log(removeDuplicates_A3_1(["1", 1, 2, 3, 1, "1"]));

// Approach (Brute Force Approach) 3 - using for loop & indexOf
const removeDuplicates_A3_2 = (arr) => {
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (results.indexOf(value) === -1) {
      results.push(value);
    }
  }
  return results;
};

console.log("Approach 3_2 =======>");
console.log(removeDuplicates_A3_2([1, 3, 3, 3, 4, 5, 3, 1]));
console.log(removeDuplicates_A3_2([6, 5, 6, 1, 5, 2, 1]));
console.log(removeDuplicates_A3_2(["Hare", "Rama", "Krishna", "Hare", "Hare"]));
console.log(removeDuplicates_A3_2(["1", 1, 2, 3, 1, "1"]));
