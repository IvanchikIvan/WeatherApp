import React from 'react';
import './weatherInfo.css';

const Main: React.FC = () => {
  const weatherData = {
    temperature: 25,
    description: 'Sunny',
    humidity: 60,
    windSpeed: 10,
  };

  return (
    <div className="container">
      <section className="weather-section">
        <h2 className="section-title">Current Weather:</h2>
        <div className="weather-info">
          <p>Temperature: {weatherData.temperature}°C</p>
          <p>Description: {weatherData.description}</p>
          <p>Humidity: {weatherData.humidity}%</p>
          <p>Wind Speed: {weatherData.windSpeed} km/h</p>
        </div>
      </section>
    </div>
  );
};

export default Main;
