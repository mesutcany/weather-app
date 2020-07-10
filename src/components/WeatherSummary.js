import React from 'react';
import WeatherIcon from './WeatherIcon';

const WeatherSummary = ({ currently }) => {
  return (
    <div className="weather-summary">
      {currently.summary} - {currently.icon}
    </div>
  );
};

export default WeatherSummary;
