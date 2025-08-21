/**
 * Converts time from hours to minutes.
 * @param {number} hours - The number of hours to convert.
 * @returns {number|string} The equivalent minutes, or an error message for invalid input.
 */
const convertToMinutes = (hours) => {
  if (hours > 0) {
    return hours * 60;
  } else {
    return "Enter valid hour";
  }
};

console.log(convertToMinutes(3));
