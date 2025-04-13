import { convertToCelsius } from "../utils/convertTemp";
import { isDayTime } from "../utils/dayOrNight";
import { convertToMilitaryTime, formatExactDate } from "../utils/formatDate";
import {
  formatBackgroundLocation,
  formatCondition,
  formatIconLocation,
} from "../utils/formatText";

function displayCardHeader(response) {
  const address = document.querySelector(".address");
  address.textContent = response.today.resolvedAddress;

  const time = document.querySelector(".time");
  time.textContent = convertToMilitaryTime(response.today.time);

  const date = document.querySelector(".date");
  date.textContent = formatExactDate(response.today.date);
}

async function displayStatistics(response) {
  const temperature = document.querySelector(".temperature");
  const tempnow = response.today.temp;
  temperature.textContent = `${convertToCelsius(tempnow)}°c`;

  const temperatureAndCondition = document.querySelector(
    ".temperature-and-condition",
  );
  const tempmin = response.today.tempmin;
  const tempmax = response.today.tempmax;
  temperatureAndCondition.textContent = `${convertToCelsius(tempmin)}°c / ${convertToCelsius(tempmax)}°c | ${formatCondition(response.today.icon)}`;

  const isDay = isDayTime(response);
  const dayStatus = isDay ? "day" : "night";

  const bottomLeft = document.querySelector(".bottom-left");
  const iconToday = document.querySelector(".icon-today");

  const backgroundLocation = await formatBackgroundLocation(
    response.today.icon,
    dayStatus,
  );
  const iconLocation = await formatIconLocation(response.today.icon, dayStatus);

  bottomLeft.style.backgroundImage = `linear-gradient(
    rgba(0, 0, 0, 0.5), 
    rgba(61, 61, 61, 0.5)
  ), url(${backgroundLocation})`;
  iconToday.src = iconLocation;
}

function displayWeatherDetails(response) {
  const rainProbability = document.querySelector(".rain-probability");
  rainProbability.textContent = `${Math.round(response.today.precipprob)}%`;

  const windSpeed = document.querySelector(".wind-speed");
  windSpeed.textContent = `${response.today.windspeed.toFixed(1)} Km/h`;

  const humidity = document.querySelector(".humidity");
  humidity.textContent = `${Math.round(response.today.humidity)}%`;

  const uvIndex = document.querySelector(".uv-index");
  uvIndex.textContent = response.today.uvindex;
}

export function displayApiContent(response) {
  displayCardHeader(response);
  displayStatistics(response);
  displayWeatherDetails(response);
}
