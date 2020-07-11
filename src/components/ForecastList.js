import React from 'react';
import { WeatherIcon } from './';
import { fahrenheitToCelsius, timestampToHour } from '../helpers';

const ForecastList = ({ forecasts, tempType }) => {
  return (
    <div className="forecast-list">
      <table className="forecast-list__table">
        <thead>
          <tr>
            <th>Hour</th>
            <th>Temperature</th>
            <th>weather</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map(({ time, temperature, icon }) => {
            return (
              <tr>
                <td>{timestampToHour(time)}</td>
                <td>
                  {tempType == 'fahrenheit'
                    ? temperature + '°F'
                    : fahrenheitToCelsius(temperature) + '°C'}
                  <span></span>
                </td>
                <td>
                  <WeatherIcon icon={icon} width={20} height={20} />
                </td>
              </tr>
            );
          })}
          {/* <tr>
            <td>12:00</td>
            <td>35°C</td>
            <td>
              <WeatherIcon icon="cloudy" width={30} height={30} />
            </td>
          </tr>
          <tr>
            <td>12:00</td>
            <td>35°C</td>
            <td>
              <WeatherIcon icon="cloudy" width={30} height={30} />
            </td>
          </tr>
          <tr>
            <td>12:00</td>
            <td>35°C</td>
            <td>
              <WeatherIcon icon="rain" width={30} height={30} />
            </td>
          </tr>
          <tr>
            <td>12:00</td>
            <td>35°C</td>
            <td>
              <WeatherIcon icon="cloudy" width={30} height={30} />
            </td>
          </tr>
          <tr>
            <td>12:00</td>
            <td>35°C</td>
            <td>
              <WeatherIcon icon="cloudy" width={30} height={30} />
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default ForecastList;
