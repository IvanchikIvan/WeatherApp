import React from 'react';
import './weatherInfo.css';
import sun from '../../assets/sun-svgrepo-com.svg'
import moon from '../../assets/moon-svgrepo-com.svg'

const WeatherInfo: React.FC = () => {
  const weatherData = {
    temperature: 25,
    description: 'Sunny',
    humidity: 60,
    windSpeed: 10,
  };

  return (
    <div className="weather-info__container">
        <div className="weather-info__content">
          <p>Temperature: {weatherData.temperature}°C</p>
          <p>Description: {weatherData.description}</p>
          <p>Humidity: {weatherData.humidity}%</p>
          <p>Wind Speed: {weatherData.windSpeed} km/h</p>
        </div>
    </div>
  );
};

export default WeatherInfo;
