import { motion } from "framer-motion";
import {
  FiMapPin,
  FiCalendar,
  FiThermometer,
} from "react-icons/fi";
import WeatherDetails from "./WeatherDetails";
import type { WeatherResponse } from "../../types/weather";

type WeatherCardProps = {
  weather: WeatherResponse;
};

const WeatherCard = ({ weather }: WeatherCardProps) => {
  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`;

  const weatherType = weather.weather[0].main.toLowerCase();

  const today = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-8 w-full rounded-[36px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl backdrop-blur-2xl"
    >
      <div className="grid gap-12 lg:grid-cols-[380px_1fr]">

        {/* LEFT PANEL */}

        <div className="flex flex-col items-center justify-center">

          <motion.img
            src={iconUrl}
            alt={weather.weather[0].description}
            className="h-52 w-52 drop-shadow-[0_20px_35px_rgba(0,0,0,0.4)]"
            animate={{
              rotate:
                weatherType === "clear"
                  ? [0, 8, -8, 0]
                  : 0,
              y:
                weatherType === "clouds"
                  ? [0, -8, 0]
                  : weatherType === "rain"
                  ? [0, 5, 0]
                  : weatherType === "snow"
                  ? [0, -10, 0]
                  : 0,
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <h1 className="mt-3 text-9xl font-black tracking-tight text-white">
            {Math.round(weather.main.temp)}°
          </h1>

          <div className="mt-2 flex items-center gap-2 text-slate-300">
            <FiThermometer />
            <span>
              Feels Like {Math.round(weather.main.feels_like)}°
            </span>
          </div>

          <h2 className="mt-8 text-5xl font-bold text-white">
            {weather.name}
          </h2>

          <div className="mt-2 flex items-center gap-2 text-sky-400">
            <FiMapPin />
            {weather.sys.country}
          </div>

          <div className="mt-2 flex items-center gap-2 text-slate-400">
            <FiCalendar />
            {today}
          </div>

          <div className="mt-6 rounded-full bg-sky-500/15 px-6 py-3">
            <span className="text-lg font-medium capitalize text-sky-300">
              {weather.weather[0].description}
            </span>
          </div>
        </div>

        {/* RIGHT PANEL */}

        <div className="flex flex-col justify-center">

          <div className="mb-6">
            <h3 className="text-3xl font-bold text-white">
              Weather Details
            </h3>

            <p className="mt-1 text-slate-400">
              Live atmospheric conditions
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

        </div>

      </div>
    </motion.section>
  );
};

export default WeatherCard;