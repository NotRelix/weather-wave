import "./style.css";

const API_KEY = "QVD5PNRPA8ZYADBZWBLL6QQRK";
const BASE_URL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

async function fetchData(country, BASE_URL, API_KEY) {
  const response = await fetch(`${BASE_URL}/${country}?key=${API_KEY}`, {
    mode: "cors",
  });
  const data = await response.json();
  return data;
}

const country = "new york";
fetchData(country, BASE_URL, API_KEY).then((response) => {
  console.log(response);
});
