import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import {
  Search,
  Select,
  WeatherSummary,
  ForecastList,
  Message,
  Loading,
} from './';
import api from '../api';
import { filterHourlyForecasts } from '../helpers';

const WeatherContainer = () => {
  const [city, setCity] = useState('');
  const [forecastInfo, setForecastInfo] = useState({});
  const [message, setMessage] = useState('');
  const [tempType, setTempType] = useState('celsius');
  const [isLoading, setIsloading] = useState(true);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          api
            .getForecasts(latitude, longitude)
            .then((forecast) => {
              const normalizedForecast = {
                currently: forecast.currently,
                hourly: filterHourlyForecasts(forecast.hourly.data),
              };
              setForecastInfo(normalizedForecast);
              setIsloading(false);
            })
            .catch((err) => {
              setMessage(err.message);
              setIsloading(false);
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
      setIsloading(true);

      api
        .getLatLongByCityName(normalizedCity)
        .then(({ latitude, longitude }) => {
          return api.getForecasts(latitude, longitude);
        })
        .then((forecast) => {
          const normalizedForecast = {
            location: city,
            currently: forecast.currently,
            hourly: filterHourlyForecasts(forecast.hourly.data),
          };
          setForecastInfo(normalizedForecast);
          setIsloading(false);
        })
        .catch((err) => {
          setMessage(err.message);
          setIsloading(false);
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
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {message ? (
            <Message text={message} />
          ) : (
            <>
              {forecastInfo.currently && (
                <div className="forecast-content">
                  <WeatherSummary
                    temperature={forecastInfo.currently.temperature}
                    tempType={tempType}
                    icon={forecastInfo.currently.icon}
                  />
                  <h4 className="forecast-location">
                    {forecastInfo.location &&
                      forecastInfo.location.toUpperCase()}
                  </h4>
                  <ForecastList
                    forecasts={forecastInfo.hourly}
                    tempType={tempType}
                  />
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default WeatherContainer;
