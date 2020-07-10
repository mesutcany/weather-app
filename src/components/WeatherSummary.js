import React from 'react';
import WeatherIcon from './WeatherIcon';

const WeatherSummary = ({ currently }) => {
  return (
    <div className="weather-summary">
      <h2 className="weather-summary__temperature">
        {currently.temperature} °C
      </h2>
      <WeatherIcon icon={currently.icon} />
    </div>
  );
};

export default WeatherSummary;
