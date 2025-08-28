// Write a function to find Minimum and Maximum element in an Array

// Approach 1 - one pass with for loop
const findMinMax_A1 = (arr) => {
  // check init array exist condition
  if (arr && arr.length === 0) {
    throw new Error("Array can not be empty");
  }

  // if only one element in the array
  if (arr.length === 1) {
    return {
      min: arr[0],
      max: arr[0],
    };
  }

  // define min, max as first element
  let min = arr[0];
  let max = arr[0];

  // for loop each items & check min, max condition / compare & update
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  // return min, max
  return {
    min: min,
    max: max,
  };
};

console.log("Approach 1 =======>");
console.log(findMinMax_A1([5, 3, 2, 4, 1]));
console.log(findMinMax_A1([6, 10, 10, 11]));
console.log(findMinMax_A1([61, 100, 10, 11, 1, 3000]));
console.log(findMinMax_A1([11, 11, 11]));
