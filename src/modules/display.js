import { convertToCelsius } from "../utils/convertTemp";
import { convertToMilitaryTime, formatExactDate } from "../utils/formatDate";

function displayCardHeader(response) {
  const address = document.querySelector(".address");
  address.textContent = response.today.resolvedAddress;

  const time = document.querySelector(".time");
  time.textContent = convertToMilitaryTime(response.today.time);

  const date = document.querySelector(".date");
  date.textContent = formatExactDate(response.today.date);
}

function displayStatistics(response) {
  const temperature = document.querySelector(".temperature");
  const tempnow = response.today.temp;
  temperature.textContent = `${convertToCelsius(tempnow)}°c`;

  const temperatureAndCondition = document.querySelector(
    ".temperature-and-condition",
  );
  const tempmin = response.today.tempmin;
  const tempmax = response.today.tempmax;
  temperatureAndCondition.textContent = `${convertToCelsius(tempmin)}°c / ${convertToCelsius(tempmax)}°c | ${response.nextFiveDays[0].icon}`;
}

export function displayApiContent(response) {
  displayCardHeader(response);
  displayStatistics(response);
}
