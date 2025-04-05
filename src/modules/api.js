const API_KEY = "QVD5PNRPA8ZYADBZWBLL6QQRK";
const BASE_URL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

function processDataToday(data) {
  const filteredToday = {
    resolvedAddress: data.resolvedAddress,
    conditions: data.days[0].conditions,
    datetime: data.days[0].datetime,
    icon: data.days[0].icon,
    tempmin: data.days[0].tempmin,
    tempmax: data.days[0].tempmax,
    feelslike: data.days[0].feelslike,
    precipprob: data.days[0].precipprob,
    windspeed: data.days[0].windspeed,
    humidity: data.days[0].humidity,
    uvindex: data.days[0].uvindex,
  };
  return filteredToday;
}

function processDataNextFiveDays(data) {
  const filteredNextFiveDays = [];
  const nextFiveDays = data.days.slice(1, 6);
  nextFiveDays.forEach((day) => {
    const filtered = {
      conditions: day.conditions,
      datetime: day.datetime,
      icon: day.icon,
      tempmin: day.tempmin,
      tempmax: day.tempmax,
    };
    filteredNextFiveDays.push(filtered);
  });
  return filteredNextFiveDays;
}

function processData(data) {
  const today = processDataToday(data);
  const nextFiveDays = processDataNextFiveDays(data);
  return { today, nextFiveDays };
}

export async function fetchData(country) {
  const response = await fetch(`${BASE_URL}/${country}?key=${API_KEY}`, {
    mode: "cors",
  });
  const data = await response.json();
  const necessaryData = processData(data);
  return necessaryData;
}
