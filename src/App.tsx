import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import SearchBar from "./components/search/SearchBar";
import WeatherCard from "./components/weather/WeatherCard";
import { getWeatherByCity } from "./services/weatherApi";
import type { WeatherResponse } from "./types/weather";

function App() {
  const [weather, setWeather] = useState<WeatherResponse | null>(null);

const handleSearch = async (city: string) => {
  try {
    console.log("Searching:", city);

    const data = await getWeatherByCity(city);

    console.log(data);

    setWeather(data);
  } catch (error) {
    console.error(error);
  }
};

  return (
    <main className="min-h-screen bg-slate-950 px-5">
      <Navbar />

      <SearchBar onSearch={handleSearch} />

      {weather && <WeatherCard weather={weather} />}
    </main>
  );
}

export default App;