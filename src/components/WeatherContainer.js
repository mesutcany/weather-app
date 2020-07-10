import React, { useState } from 'react';
import {
  Search,
  Select,
  WeatherSummary,
  ForecastList,
  WeatherIcon,
  Message,
} from './';
import api from '../api';

const WeatherContainer = () => {
  const [city, setCity] = useState('izmir');
  const [forecastInfo, setForecastInfo] = useState({});
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      api
        .getForecasts(30, 40)
        .then((data) => {
            
        })
        .catch((err) => setMessage(err.message));
    }
  };

  return (
    <div className="weather-container">
      <Search
        value={city}
        handleChange={handleChange}
        handleKeyPress={handleKeyPress}
      />
      <Select />
      <WeatherSummary />
      <ForecastList />
      <WeatherIcon />
      <Message />
    </div>
  );
};

export default WeatherContainer;
