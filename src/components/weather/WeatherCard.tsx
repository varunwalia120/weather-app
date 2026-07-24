import { motion } from "framer-motion";
import WeatherDetails from "./WeatherDetails";
import type { WeatherResponse } from "../../types/weather";

type WeatherCardProps = {
  weather: WeatherResponse;
};

const WeatherCard = ({ weather }: WeatherCardProps) => {
  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`;

  return (
    <motion.section
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mx-auto mt-10 w-full max-w-3xl rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl"
    >
      <div className="flex flex-col items-center">
        <img
          src={iconUrl}
          alt={weather.weather[0].description}
          className="h-36 w-36"
        />

        <h2 className="text-7xl font-bold text-white">
          {Math.round(weather.main.temp)}°
        </h2>

        <h3 className="mt-4 text-3xl font-semibold text-white">
          {weather.name},{" "}
          <span className="text-sky-400">{weather.sys.country}</span>
        </h3>

        <p className="mt-2 text-lg capitalize text-slate-300">
          {weather.weather[0].description}
        </p>
      </div>

      <WeatherDetails
        humidity={weather.main.humidity}
        wind={weather.wind.speed}
        pressure={weather.main.pressure}
        feelsLike={weather.main.feels_like}
        visibility={weather.visibility}
        sunrise={weather.sys.sunrise}
        sunset={weather.sys.sunset}
      />
    </motion.section>
  );
};

export default WeatherCard;
