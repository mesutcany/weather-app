const KEY = '65da5b761ce36d248acbb3694f4cd78a';
const CORS = 'https://cors-anywhere.herokuapp.com/';
const FORECAST_URL = `${CORS}https://api.darksky.net/forecast/${KEY}`;

const getForecasts = (lat, long) => {
  return fetch(`${FORECAST_URL}/${lat},${long}`).then((response) => {
    if (response.status == 400) {
      throw new Error("Can't find the forecasts for the specified location :(");
    }
    return response.json();
  });
};

export default { getForecasts };
