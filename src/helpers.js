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

// const normalizeData = (data) => {
//   return {
//     currently: data.currently,
//     hourly: filterHourlyForecasts(data.hourly.data),
//   };
// };

export { isInToday, filterHourlyForecasts };
