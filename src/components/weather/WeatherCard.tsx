import { motion } from "framer-motion";
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
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto mt-6 w-full max-w-7xl rounded-[32px] border border-white/10 bg-white/10 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
    >
      <div className="grid gap-8 lg:grid-cols-[420px_1fr]">
        {/* Left Weather Summary */}
        <div className="flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-8">
          <motion.img
            src={iconUrl}
            alt={weather.weather[0].description}
            className="h-44 w-44 drop-shadow-2xl"
            animate={{
              rotate:
                weatherType === "clear"
                  ? [0, 6, -6, 0]
                  : 0,
              y:
                weatherType === "clouds"
                  ? [0, -6, 0]
                  : weatherType === "rain"
                  ? [0, 5, 0]
                  : weatherType === "snow"
                  ? [0, -8, 0]
                  : 0,
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <h1 className="mt-4 text-8xl font-black text-white">
            {Math.round(weather.main.temp)}°
          </h1>

          <p className="mt-2 text-xl text-slate-300">
            Feels like {Math.round(weather.main.feels_like)}°
          </p>

          <h2 className="mt-8 text-4xl font-bold text-white">
            {weather.name}
          </h2>

          <p className="text-xl font-semibold text-sky-400">
            {weather.sys.country}
          </p>

          <p className="mt-2 text-slate-400">
            {today}
          </p>

          <div className="mt-6 rounded-full bg-sky-500/15 px-6 py-3">
            <span className="font-medium capitalize text-sky-300">
              {weather.weather[0].description}
            </span>
          </div>
        </div>

        {/* Right Details */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
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