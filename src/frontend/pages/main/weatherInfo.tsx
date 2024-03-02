import React, { useEffect } from "react";
import "./weatherInfo.css";
import { QueryType } from '../../types/types';
import SearchBar from "../search/search";
import { useQuery } from "react-query";


const data: React.FC = () => {

  const { isLoading, error, data }: QueryType = useQuery('weather');

  useEffect(() => {
    console.log('isLoading:', isLoading);
    console.log('error:', error);
  }, [isLoading, error]);
  
  return (
    <div className="weather-info">
      <div className="weather-info__container">
        <div className="weather-info__content">
          <div className="temp">
            <p className="fact-temp">
              Temperature: {data?.current.temp_c}°C
            </p>
            <p className="feelslike-temp">
              Feels like: {data?.current.feelslike_c}°C
            </p>
          </div>
          <p>Description: {data?.current.condition.text}</p>
          <p>Humidity: {data?.current.humidity}%</p>
          <p>
            Wind: {data?.current.wind_mph} m/h{" "}
            {data?.current.wind_dir}
          </p>
        </div>
        <SearchBar />
      </div>
    </div>
  );
};

export default data;
