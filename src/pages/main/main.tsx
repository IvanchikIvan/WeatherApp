import React from 'react';

const Main: React.FC = () => {
  const weatherData = {
    temperature: 25,
    description: 'Sunny',
    humidity: 60,
    windSpeed: 10,
  };

  return (
    <div className="container">
      <header className="header">
        <h1 className="title">Weather App</h1>
      </header>
      <section>
        <h2>Current Weather</h2>
        <div>
          <p>Temperature: {weatherData.temperature}°C</p>
          <p>Description: {weatherData.description}</p>
          <p>Humidity: {weatherData.humidity}%</p>
          <p>Wind Speed: {weatherData.windSpeed} km/h</p>
        </div>
      </section>
      <footer>
        <p>Contact us: vanyamalisheff@yandex.ru</p>
      </footer>
    </div>
  );
};

export default Main;
