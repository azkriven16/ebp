export function convertDateToWords(dateString: string) {
  if (dateString === null || dateString === undefined) {
    return "";
  }

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

  if (isNaN(monthIndex) || isNaN(parseInt(day)) || isNaN(parseInt(year))) {
    return "";
  }

  const monthWord = months[monthIndex];
  const convertedDate = `${monthWord} ${day}, ${year}`;

  return convertedDate;
}
