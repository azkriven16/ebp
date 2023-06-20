export function readableDescription(string: string) {
  const convertedString =
    string && string.replace(/<[^>]+>/g, "").trim() !== ""
      ? string.replace(/<[^>]+>/g, "")
      : "No description available for this show at this current time";
  return convertedString;
}
