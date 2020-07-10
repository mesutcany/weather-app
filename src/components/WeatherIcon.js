import React, { useRef } from 'react';

const WeatherIcon = ({ width = 100, height = 100 }) => {
  const iconRef = useRef();

  return <canvas ref={iconRef} width={width} height={height}></canvas>;
};

export default WeatherIcon;
