import { format } from "date-fns";

function convertTimeString(timeStr) {
  const [hours, minutes, seconds] = timeStr.split(":").map(Number);
  const now = new Date();
  const date = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    hours,
    minutes,
    seconds,
  );
  return date;
}

export function convertToMilitaryTime(time) {
  const convertedTime = convertTimeString(time);
  return format(convertedTime, "H:mm");
}

export function formatExactDate(day) {
  const convertedDate = new Date(day);
  return format(convertedDate, "cccc, MMMM dd, yyyy");
}
