export function convertDateToWords(dateString: string) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [month, day, year] = dateString.split("/");
  const monthIndex = parseInt(month) - 1;

  const monthWord = months[monthIndex];
  const convertedDate = `${monthWord} ${day}, ${year}`;

  return convertedDate;
}

const originalDate = "6/4/2023";
const convertedDate = convertDateToWords(originalDate);
console.log(convertedDate);
