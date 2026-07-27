import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import SearchBar from "./components/search/SearchBar";
import SearchHistory from "./components/search/SearchHistory";
import WeatherCard from "./components/weather/WeatherCard";

import EmptyState from "./components/common/EmptyState";
import Loading from "./components/common/Loading";
import ErrorMessage from "./components/common/ErrorMessage";

import type { WeatherResponse } from "./types/weather";
import UnitToggle from "./components/common/UnitToggle";

import LocationButton from "./components/search/LocationButton";
import {
  getWeatherByCity,
  getWeatherByCoordinates,
} from "./services/weatherApi";

function App() {
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [currentCity, setCurrentCity] = useState("");

  const [history, setHistory] = useState<string[]>(() => {
    const saved = localStorage.getItem("searchHistory");
    return saved ? JSON.parse(saved) : [];
  });

  const [lastSearchedCity, setLastSearchedCity] = useState("");

  const handleSearch = async (city: string) => {
    const normalizedCity = city.trim().toLowerCase();

    // Prevent duplicate consecutive searches
    if (normalizedCity === lastSearchedCity) {
      return;
    }

    try {
      setLoading(true);
      setError("");

      const data = await getWeatherByCity(city, unit);

      setWeather(data);

      setLastSearchedCity(normalizedCity);

      const updatedHistory = [
        city,
        ...history.filter((item) => item.toLowerCase() !== normalizedCity),
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

  const handleCurrentLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    setLoading(true);
    setError("");

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const data = await getWeatherByCoordinates(
            position.coords.latitude,
            position.coords.longitude,
            unit,
          );

          setWeather(data);
        } catch (err) {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError("Unable to fetch weather.");
          }
        } finally {
          setLoading(false);
        }
      },
      () => {
        setLoading(false);
        setError("Location permission denied.");
      },
    );
  };

  const toggleUnit = () => {
    setUnit((prev) => (prev === "metric" ? "imperial" : "metric"));
  };

  return (
    <main className="min-h-screen bg-slate-950 px-6 pb-16">
      <div className="mx-auto max-w-6xl">
        <Navbar />

      <div className="mx-auto mt-6 w-full max-w-2xl">
        <SearchBar onSearch={handleSearch} />

        <div className="mt-4 flex justify-center">
          <LocationButton onLocationClick={handleCurrentLocation} />
        </div>

        <div className="mt-4 flex justify-center">
          <UnitToggle unit={unit} onToggle={toggleUnit} />
        </div>

        <SearchHistory history={history} onSelect={handleSearch} />
      </div>

      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : weather ? (
        <WeatherCard weather={weather} />
      ) : (
        <EmptyState />
      )}
      </div>
    </main>
  );
}

export default App;
