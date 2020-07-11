import React from 'react';
import { WeatherIcon } from './';
import { fahrenheitToCelsius } from '../helpers';

const WeatherSummary = ({ temperature, icon, tempType }) => {
  return (
    <div className="weather-summary">
      <h2 className="weather-summary__temperature">
        {tempType == 'fahrenheit'
          ? temperature
          : fahrenheitToCelsius(temperature)}
        <span className="weather-summary__temp-icon">
          {tempType == 'fahrenheit' ? '°F' : '°C'}
        </span>
      </h2>
      <WeatherIcon icon={icon} />
    </div>
  );
};

export default WeatherSummary;
