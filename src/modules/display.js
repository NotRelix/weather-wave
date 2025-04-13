import { convertToCelsius } from "../utils/convertTemp";
import { isDayTime } from "../utils/dayOrNight";
import { convertToMilitaryTime, formatExactDate } from "../utils/formatDate";
import { formatCondition } from "../utils/formatText";

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
  temperatureAndCondition.textContent = `${convertToCelsius(tempmin)}°c / ${convertToCelsius(tempmax)}°c | ${formatCondition(response.today.icon)}`;

  const isDay = isDayTime(response);
  const dayStatus = isDay ? "day" : "night";

  const bottomLeft = document.querySelector(".bottom-left");
  const iconToday = document.querySelector(".icon-today");

  import(`../images/background/${response.today.icon}-${dayStatus}.png`).then(
    (backgroundImage) => {
      bottomLeft.style.backgroundImage = `url(${backgroundImage.default})`;
    },
  );

  if (response.today.icon !== "snow") {
    import(`../images/icon/${response.today.icon}-${dayStatus}-icon.png`).then(
      (iconImage) => {
        iconToday.src = iconImage.default;
      },
    );
  } else {
    import(`../images/icon/${response.today.icon}-icon.png`).then(
      (iconImage) => {
        iconToday.src = iconImage.default;
      },
    );
  }
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
