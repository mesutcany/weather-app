const KEY = '0a9155e5c9e6bb58eb900f56be30b57e';
const CORS = 'https://cors-anywhere.herokuapp.com/';
const FORECAST_URL = `${CORS}https://api.darksky.net/forecast/${KEY}`;
const COORDS_URL = `${CORS}https://darksky.net/geo?q=`;

const getForecasts = (lat, long) => {
  return fetch(`${FORECAST_URL}/${lat},${long}`).then((response) => {
    if (response.status >= 400) {
      throw new Error("Can't find the forecasts for the specified location :(");
    }
    return response.json();
  });
};

const getLatLongByCityName = (cityName) => {
  return fetch(`${COORDS_URL}${cityName}`).then((response) => {
    console.log('city name', response.status);
    if (response.status >= 400) {
      throw new Error("Can't find the forecasts for the specified location :(");
    }
    return response.json();
  });
};

export default { getForecasts, getLatLongByCityName };
