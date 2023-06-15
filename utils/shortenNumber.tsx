export function shortenNumber(number: string) {
  const numberString = String(number);
  let shortenedNumber = numberString;

  if (numberString.length >= 4 && numberString.length <= 6) {
    shortenedNumber = numberString.replace(/(\d{1,3})(\d{1})(\d+)/, "$1.$2k");
  } else if (numberString.length >= 7) {
    shortenedNumber = numberString.replace(/(\d{1,3})(\d{1})(\d+)/, "$1.$2m");
  }

  return shortenedNumber;
}
