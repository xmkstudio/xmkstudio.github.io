// define Current date and declare a Specific date
const currentDate = new Date(); // current date
const specificDate = new Date('2018-11-01T00:00:00'); // specific date

// subtract the two values
const differenceInMilliseconds = specificDate - currentDate;
const absoluteDifferenceMs = Math.abs(differenceInMilliseconds);

const millisecondsInSecond = 1000;
const millisecondsInMinute = millisecondsInSecond * 60;
const millisecondsInHour = millisecondsInMinute * 60;
const millisecondsInDay = millisecondsInHour * 24;

export const differenceInDays = Math.floor(absoluteDifferenceMs / 86400000);
