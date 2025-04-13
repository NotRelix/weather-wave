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

export async function formatBackgroundLocation(icon, dayStatus) {
  let m;
  if (
    icon !== "snow" &&
    icon !== "clear-day" &&
    icon !== "clear-night" &&
    icon !== "partly-cloudy-day" &&
    icon !== "partly-cloudy-night"
  ) {
    m = await import(`../images/background/${icon}-${dayStatus}.png`);
  } else if (icon === "snow") {
    m = await import(`../images/background/${icon}-${dayStatus}.png`);
  } else {
    m = await import(`../images/background/${icon}.png`);
  }
  return m.default;
}

export async function formatIconLocation(icon, dayStatus) {
  let m;
  if (
    icon !== "snow" &&
    icon !== "clear-day" &&
    icon !== "clear-night" &&
    icon !== "partly-cloudy-day" &&
    icon !== "partly-cloudy-night"
  ) {
    m = await import(`../images/icon/${icon}-${dayStatus}-icon.png`);
  } else if (icon === "snow") {
    m = await import(`../images/icon/${icon}-icon.png`);
  } else {
    m = await import(`../images/icon/${icon}-icon.png`);
  }
  return m.default;
}
