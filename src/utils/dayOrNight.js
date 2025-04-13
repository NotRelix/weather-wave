export function isDayTime(response) {
  const timenow = response.today.time;
  const sunrise = response.today.sunrise;
  const sunset = response.today.sunset;
  if (sunrise < timenow && timenow < sunset) {
    return true;
  }
  return false;
}
