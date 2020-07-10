import React, { useEffect, useRef } from 'react';
import { formatIconString } from '../helpers';

const WeatherIcon = ({ icon, width = 100, height = 100, color = 'white' }) => {
  const iconRef = useRef();

  useEffect(() => {
    const skycons = new window.Skycons({ color });
    skycons.add(iconRef.current, formatIconString(icon));
    skycons.play();

    return () => {
      skycons.remove(iconRef.current);
    };
  }, []);

  return <canvas ref={iconRef} width={width} height={height}></canvas>;
};

export default WeatherIcon;
