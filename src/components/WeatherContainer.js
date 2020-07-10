import React from 'react';
import {
  Search,
  Select,
  WeatherSummary,
  ForecastList,
  WeatherIcon,
  Message,
} from './';

const WeatherContainer = () => {
  return (
    <div className="weather-container">
      <Search />
      <Select />
      <WeatherSummary />
      <ForecastList />
      <WeatherIcon />
      <Message />
    </div>
  );
};

export default WeatherContainer;
