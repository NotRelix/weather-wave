import { convertToMilitaryTime, formatExactDate } from "../utils/formatDate";

export function displayApiContent(response) {
  const address = document.querySelector(".address");
  address.textContent = response.today.resolvedAddress;

  const time = document.querySelector(".time");
  time.textContent = convertToMilitaryTime(response.today.time);

  const date = document.querySelector(".date");
  date.textContent = formatExactDate(response.today.date);
}
