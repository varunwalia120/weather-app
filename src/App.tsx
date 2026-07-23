import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import SearchBar from "./components/search/SearchBar";
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

  const handleSearch = async (city: string) => {
    try {
      setLoading(true);
      setError("");

      const data = await getWeatherByCity(city);

      setWeather(data);
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