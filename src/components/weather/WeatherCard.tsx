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
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.01 }}
      className="mx-auto mt-10 w-full max-w-5xl overflow-hidden rounded-[32px] border border-white/10 bg-white/10 p-12 shadow-[0_25px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
    >
      <div className="flex flex-col items-center border-b border-white/10 pb-10">
        <motion.img
          src={iconUrl}
          alt={weather.weather[0].description}
          className="h-52 w-52 drop-shadow-2xl"
          animate={{
            rotate: weatherType === "clear" ? [0, 5, -5, 0] : 0,
            scale: weatherType === "snow" ? [1, 1.05, 1] : 1,
            y:
              weatherType === "clouds"
                ? [0, -6, 0]
                : weatherType === "rain"
                ? [0, 5, 0]
                : weatherType === "drizzle"
                ? [0, 5, 0]
                : weatherType === "clear"
                ? [0, -5, 0]
                : 0,
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <h1 className="mt-2 text-8xl font-extrabold tracking-tight text-white">
          {Math.round(weather.main.temp)}°
        </h1>

        <h2 className="mt-3 text-5xl font-bold tracking-tight text-white">
          {weather.name}
        </h2>

        <p className="mt-1 text-xl font-semibold text-sky-400">
          {weather.sys.country}
        </p>

        <p className="mt-3 text-slate-400">
          {today}
        </p>

        <p className="mt-6 rounded-full bg-sky-500/15 px-6 py-2 text-lg font-medium capitalize text-sky-300">
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