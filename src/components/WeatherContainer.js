import React, { useState, useEffect } from 'react';
import {
  Search,
  Select,
  WeatherSummary,
  ForecastList,
  WeatherIcon,
  Message,
} from './';
import api from '../api';
import { filterHourlyForecasts } from '../helpers';

const WeatherContainer = () => {
  const [city, setCity] = useState('');
  const [forecastInfo, setForecastInfo] = useState({});
  const [message, setMessage] = useState('');
  const [tempType, setTempType] = useState('celsius');

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log('latlong', latitude, longitude);
          api
            .getForecasts(latitude, longitude)
            .then((forecast) => {
              const normalizedForecast = {
                currently: forecast.currently,
                hourly: filterHourlyForecasts(forecast.hourly.data),
              };
              console.log(normalizedForecast);
              setForecastInfo(normalizedForecast);
            })
            .catch((err) => {
              setMessage(err.message);
            });
        },
        (error) => setMessage('Sevdiğin bir şehrin ismini yaz')
      );
    }
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const normalizedCity = city.toLocaleLowerCase().trim();
      if (normalizedCity == '') return;

      setMessage('');
      setForecastInfo({});
      api
        .getLatLongByCityName(normalizedCity)
        .then(({ latitude, longitude }) => {
          return api.getForecasts(latitude, longitude);
        })
        .then((forecast) => {
          const normalizedForecast = {
            currently: forecast.currently,
            hourly: filterHourlyForecasts(forecast.hourly.data),
          };
          console.log(normalizedForecast);
          setForecastInfo(normalizedForecast);
        })
        .catch((err) => {
          setMessage(err.message);
        });
    }
  };

  const handleTempTypeChange = (event) => {
    console.log(event.target.value);
    setTempType(event.target.value);
  };

  return (
    <div className="weather-container">
      <Search
        value={city}
        handleChange={handleCityChange}
        handleKeyPress={handleKeyPress}
      />
      <Select
        options={['celsius', 'fahrenheit']}
        value={tempType}
        handleChange={handleTempTypeChange}
      />
      {message ? (
        <Message text={message} />
      ) : (
        <>
          {forecastInfo.currently && (
            <div clasname="forecast-content">
              <WeatherSummary
                temperature={forecastInfo.currently.temperature}
                tempType={tempType}
                icon={forecastInfo.currently.icon}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default WeatherContainer;
