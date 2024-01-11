function dayOfYear(dataString) {
  const date = new Date(dataString);

  const startYear = new Date(date.getFullYear(), 0, 0);

  // date:2020-01-09  -  date:2020-01-01  =  9 days
  const diff = date - startYear;

  const oneDay = 24 * 60 * 60 * 1000;

  const dayOfYear = Math.floor(diff / oneDay);

  return dayOfYear;
}

// "2024-01-04T12:30:00.000Z"
// "YYYY-MM-DD"

// dayOfYEar("2020-01-09") // 9

console.log(dayOfYear("2020-02-29")); // 60)
