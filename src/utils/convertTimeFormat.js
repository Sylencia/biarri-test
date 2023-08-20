// Convert from XX:00:00 to XX:00 AM/PM format

export const convertTimeFormat = (timeString) => {
  const [hour] = timeString.split(":");
  const convertedHr = +hour % 24;

  return `${convertedHr % 12 || "12"}:00 ${convertedHr < 12 ? "AM" : "PM"}`;
};
