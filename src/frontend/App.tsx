// App.tsx

import React, { useEffect, useState } from "react";
import "./App.css";
import "./reset.css";
import WeatherInfo from "./pages/main/weatherInfo";
import Header from "./pages/header/header";
import { WeatherData } from "./types/types";

const App: React.FC = () => {
  const [data, setData] = useState<WeatherData | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/weather-info');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <div className="weather-app">
      <div className="weather-app__container">
        <Header />
        <WeatherInfo weatherInfo={data}/> 
        <button
          onClick={() => {
            fetchData();
          }}
        >
          click
        </button>
      </div>
    </div>
  );
}

export default App;
