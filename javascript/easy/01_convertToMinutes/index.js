// function to converts time from hours to minutes
const convertToMinutes = (hours) => {
  if (hours > 0) {
    return hours * 60;
  } else {
    return "Enter valid hour";
  }
};

console.log(convertToMinutes(3));
