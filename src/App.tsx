import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import SearchBar from "./components/search/SearchBar";
import SearchHistory from "./components/search/SearchHistory";
import WeatherCard from "./components/weather/WeatherCard";

import EmptyState from "./components/common/EmptyState";
import Loading from "./components/common/Loading";
import ErrorMessage from "./components/common/ErrorMessage";

import { getWeatherByCity } from "./services/weatherApi";
import type { WeatherResponse } from "./types/weather";

function App() {
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [history, setHistory] = useState<string[]>(() => {
    const saved = localStorage.getItem("searchHistory");
    return saved ? JSON.parse(saved) : [];
  });

  const [lastSearchedCity, setLastSearchedCity] = useState("");

  const handleSearch = async (city: string) => {
    const normalizedCity = city.trim().toLowerCase();

    // Prevent duplicate consecutive searches
    if (normalizedCity === lastSearchedCity) {
      setError("You're already viewing this city's weather.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const data = await getWeatherByCity(city);

      setWeather(data);
      setLastSearchedCity(normalizedCity);

      const updatedHistory = [
        city,
        ...history.filter(
          (item) => item.toLowerCase() !== normalizedCity
        ),
      ].slice(0, 5);

      setHistory(updatedHistory);

      localStorage.setItem(
        "searchHistory",
        JSON.stringify(updatedHistory)
      );
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong.");
      }

      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 px-5">
      <Navbar />

      <SearchBar onSearch={handleSearch} />

      <SearchHistory
        history={history}
        onSelect={handleSearch}
      />

      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : weather ? (
        <WeatherCard weather={weather} />
      ) : (
        <EmptyState />
      )}
    </main>
  );
}

export default App;