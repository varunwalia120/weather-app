import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import SearchBar from "./components/search/SearchBar";
import SearchHistory from "./components/search/SearchHistory";
import WeatherCard from "./components/weather/WeatherCard";

import EmptyState from "./components/common/EmptyState";
import SkeletonCard from "./components/common/SkeletonCard";
import ErrorMessage from "./components/common/ErrorMessage";

import type { WeatherResponse } from "./types/weather";
import type { ForecastResponse } from "./types/forecast";

import UnitToggle from "./components/common/UnitToggle";
import ForecastList from "./components/forecast/ForecastList";
import LocationButton from "./components/search/LocationButton";

import {
  getWeatherByCity,
  getWeatherByCoordinates,
  getForecastByCity,
  getForecastByCoordinates,
} from "./services/weatherApi";

function App() {
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [forecast, setForecast] =
    useState<ForecastResponse | null>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");

  const [history, setHistory] = useState<string[]>(() => {
    const saved = localStorage.getItem("searchHistory");
    return saved ? JSON.parse(saved) : [];
  });

  const [lastSearchedCity, setLastSearchedCity] = useState("");

  const handleSearch = async (city: string) => {
    const normalizedCity = city.trim().toLowerCase();

    if (normalizedCity === lastSearchedCity) return;

    try {
      setLoading(true);
      setError("");

      const [weatherData, forecastData] = await Promise.all([
        getWeatherByCity(city, unit),
        getForecastByCity(city, unit),
      ]);

      setWeather(weatherData);
      setForecast(forecastData);

      setLastSearchedCity(normalizedCity);

      const updatedHistory = [
        city,
        ...history.filter(
          (item) => item.toLowerCase() !== normalizedCity,
        ),
      ].slice(0, 5);

      setHistory(updatedHistory);

      localStorage.setItem(
        "searchHistory",
        JSON.stringify(updatedHistory),
      );
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong.");
      }

      setWeather(null);
      setForecast(null);
    } finally {
      setLoading(false);
    }
  };

  const handleCurrentLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported.");
      return;
    }

    setLoading(true);
    setError("");

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const [weatherData, forecastData] = await Promise.all([
            getWeatherByCoordinates(
              position.coords.latitude,
              position.coords.longitude,
              unit,
            ),
            getForecastByCoordinates(
              position.coords.latitude,
              position.coords.longitude,
              unit,
            ),
          ]);

          setWeather(weatherData);
          setForecast(forecastData);
        } catch (err) {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError("Unable to fetch weather.");
          }

          setWeather(null);
          setForecast(null);
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
    setUnit((prev) =>
      prev === "metric" ? "imperial" : "metric",
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950">
      <div className="w-full px-10 py-4 xl:px-16 2xl:px-24">
        <Navbar
          sunrise={weather?.sys.sunrise}
          sunset={weather?.sys.sunset}
          weatherType={weather?.weather[0].main}
        />

        {/* Search Dashboard */}

        <section className="mt-3 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-2xl">
          <SearchBar onSearch={handleSearch} />

          <div className="mt-6 flex flex-wrap items-center justify-between gap-5">
            <LocationButton
              onLocationClick={handleCurrentLocation}
            />

            <UnitToggle
              unit={unit}
              onToggle={toggleUnit}
            />
          </div>

          <SearchHistory
            history={history}
            onSelect={handleSearch}
          />
        </section>

        {/* Weather Dashboard */}

        <section className="mt-5">
          {loading ? (
            <SkeletonCard />
          ) : error ? (
            <ErrorMessage message={error} />
          ) : weather ? (
            <>
              <WeatherCard weather={weather} />
              <ForecastList forecast={forecast} />

              {/* Forecast component will be added here */}
              {/* <ForecastList forecast={forecast} unit={unit} /> */}
            </>
          ) : (
            <EmptyState />
          )}
        </section>
      </div>
    </main>
  );
}

export default App;