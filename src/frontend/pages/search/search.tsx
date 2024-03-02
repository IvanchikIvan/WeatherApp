import React, { useState } from 'react';
import './search.css';
import { useQuery } from 'react-query';

const fetchWeather = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/weather-info');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const jsonData = await response.json();
    return jsonData
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
};

const SearchBar: React.FC = () => {

  const { isLoading, error, data } = useQuery('weather', fetchWeather);

  return (
    <form className="search-form">
      <input
        className="search-input"
        type="text"
        placeholder="Search..."
      />
      <button className="search-button" type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
