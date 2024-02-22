import React from "react";
import "./App.css";
import "./reset.css";
import WeatherInfo from "./pages/main/weatherInfo";
import Header from "./pages/header/header";

function App() {
  return (
    <div className="weather-app">
      <div className="weather-app__container">
        <Header />
        <WeatherInfo />
      </div>
    </div>
  );
}

export default App;
