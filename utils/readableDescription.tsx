export function readableDescription(string: string) {
  const convertedString =
    string && string.replace(/<[^>]+>/g, "").trim() !== ""
      ? string.replace(/<[^>]+>/g, "")
      : "";
  return (
    convertedString ||
    "No description available for this show at this current time"
  );
}
