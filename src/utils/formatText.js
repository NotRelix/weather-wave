export function formatCondition(icon) {
  if (icon === "clear-day" || icon == "clear-night") {
    return "Clear";
  } else if (icon === "cloudy") {
    return "Cloudy";
  } else if (icon === "fog") {
    return "Fog";
  } else if (icon === "partly-cloudy-day" || icon === "partly-cloudy-night") {
    return "Few Clouds";
  } else if (icon === "rain") {
    return "Rain";
  } else if (icon === "snow") {
    return "Snow";
  } else if (icon === "wind") {
    return "Wind";
  }
}
