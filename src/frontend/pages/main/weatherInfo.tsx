import React from "react";
import "./weatherInfo.css";
import { WeatherData } from "../../types/types";

interface WeatherInfoProps {
  weatherInfo: WeatherData | null;
}

const WeatherInfo: React.FC<WeatherInfoProps> = ({ weatherInfo }) => {
  console.log(weatherInfo);

  return (
    <div className="weather-info__container">
      <div className="weather-info__content">
        <div className="temp">
          <p className="fact-temp">Temperature: {weatherInfo?.current.temp_c}°C</p>
          <p className="feelslike-temp">Feels like: {weatherInfo?.current.feelslike_c}°C</p>
        </div>
        <p>Description: {weatherInfo?.current.condition.text}</p>
        <p>Humidity: {weatherInfo?.current.humidity}%</p>
        <p>
          Wind: {weatherInfo?.current.wind_mph} m/h{" "}
          {weatherInfo?.current.wind_dir}
        </p>
      </div>
    </div>
  );
};

export default WeatherInfo;
