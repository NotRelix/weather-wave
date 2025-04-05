const API_KEY = "QVD5PNRPA8ZYADBZWBLL6QQRK";
const BASE_URL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

export async function fetchData(country) {
  const response = await fetch(`${BASE_URL}/${country}?key=${API_KEY}`, {
    mode: "cors",
  });
  const data = await response.json();
  const necessaryData = processData(data);
  return necessaryData;
}

function processData(data) {
  const currentConditions = {
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
  const address = data.resolvedAddress;
  return { address, currentConditions };
}
