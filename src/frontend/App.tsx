// App.tsx

import React, { useEffect, useState } from "react";
import "./App.css";
import "./reset.css";
import WeatherInfo from "./pages/main/weatherInfo";
import Header from "./pages/header/header";
import { WeatherData } from "./types/types";

const App: React.FC = () => {
  
  return (
    <div className="weather-app">
      <div className="weather-app__container">
        <Header />
        <WeatherInfo/> 
      </div>
    </div>
  );
}

export default App;
