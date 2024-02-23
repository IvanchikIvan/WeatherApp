import React, { useEffect, useState } from "react";
import "./App.css";
import "./reset.css";
import WeatherInfo from "./pages/main/weatherInfo";
import Header from "./pages/header/header";

function App() {
  const [data, setData] = useState(null);

    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/weather-info');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const responseData = await response.json();
        setData(responseData);
        console.log(data)
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

  
  return (
    <div className="weather-app">
      <div className="weather-app__container">
        <Header />
        <WeatherInfo />
        <button onClick={() => {fetchData()}}>click</button>
      </div>
    </div>
  );
}

export default App;
