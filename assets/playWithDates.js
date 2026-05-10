/*
 * declare, calculate, and export the value of the difference between two dates
 */

// define Current date and declare a Specific date
const currentDate = new Date(); // current date
const specificDate = new Date("2018-11-01T00:00:00"); // specific date

// subtract the two values
let millisecondsDifference = Math.abs(specificDate - currentDate);

// convert milliseconds value into days
const daysDifference = Math.floor(millisecondsDifference / 86400000);

const currentYear = new Date().getFullYear();

console.log(daysDifference.toLocaleString());

module.exports = {
  daysDifference: daysDifference,
  currentYear: currentYear,
};
