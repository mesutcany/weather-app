/* source  https://stackoverflow.com/a/40628566 */

const isInToday = (currentDate, otherDate) => {
  if (currentDate.setHours(0, 0, 0, 0) == otherDate.setHours(0, 0, 0, 0))
    return true;
  else {
    return false;
  }
};

const filterHourlyForecasts = (forecasts) => {
  const currentDate = new Date();
  return forecasts.filter((forecast) => {
    const forecastTime = new Date(forecast.time * 1000);
    return isInToday(currentDate, forecastTime);
  });
};

const formatIconString = (iconString) => {
  return iconString.toUpperCase().split('-').join('_');
};

const fahrenheitToCelsius = (fahrenheit) => {
  return ((5 / 9) * (fahrenheit - 32)).toFixed(2);
};

const timestampToHour = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return `${date.getHours()}:00`;
};

export {
  isInToday,
  filterHourlyForecasts,
  formatIconString,
  fahrenheitToCelsius,
  timestampToHour,
};
