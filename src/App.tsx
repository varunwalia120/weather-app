import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import SearchBar from "./components/search/SearchBar";
import WeatherCard from "./components/weather/WeatherCard";

import EmptyState from "./components/common/EmptyState";
import Loading from "./components/common/Loading";
import ErrorMessage from "./components/common/ErrorMessage";

import { getWeatherByCity } from "./services/weatherApi";
import type { WeatherResponse } from "./types/weather";

import SearchHistory from "./components/search/SearchHistory";

function App() {
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (city: string) => {
    try {
      setLoading(true);
      setError("");

      const data = await getWeatherByCity(city);

      setWeather(data);
      const updatedHistory = [
        city,
        ...history.filter((item) => item.toLowerCase() !== city.toLowerCase()),
      ].slice(0, 5);

      setHistory(updatedHistory);

      localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
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
  const [history, setHistory] = useState<string[]>(() => {
    const saved = localStorage.getItem("searchHistory");
    return saved ? JSON.parse(saved) : [];
  });

  return (
    <main className="min-h-screen bg-slate-950 px-5">
      <Navbar />

      <SearchBar onSearch={handleSearch} />
      <SearchBar onSearch={handleSearch} />

      <SearchHistory history={history} onSelect={handleSearch} />

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
