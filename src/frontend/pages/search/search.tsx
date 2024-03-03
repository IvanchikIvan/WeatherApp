import React, { useState } from "react";
import "./search.css";
import { useQuery } from "react-query";

const SearchBar: React.FC = () => {
  const fetchWeather = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/weather-info?location=${Location}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  const [Location, setLocation] = useState<string>("");
  const { isLoading, error, data, refetch } = useQuery("weather", fetchWeather);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    refetch();
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="search-input"
        type="text"
        placeholder="Search..."
        value={Location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
