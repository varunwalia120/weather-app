import { motion } from "framer-motion";
import WeatherDetails from "./WeatherDetails";
import type { WeatherResponse } from "../../types/weather";

type WeatherCardProps = {
  weather: WeatherResponse;
};

const WeatherCard = ({ weather }: WeatherCardProps) => {
  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`;

  const weatherType = weather.weather[0].main.toLowerCase();

  const animationVariants = {
    clear: {
      y: [0, -6, 0],
      scale: [1, 1.02, 1],
    },
    clouds: {
      y: [0, -4, 0],
    },
    rain: {
      y: [0, 4, 0],
    },
    drizzle: {
      y: [0, 4, 0],
    },
    snow: {
      y: [0, -8, 0],
    },
    thunderstorm: {
      scale: [1, 1.01, 1],
    },
  };

  return (
    <motion.section
  initial={{ opacity: 0, y: 35 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  whileHover={{ scale: 1.01 }}
  className="mx-auto mt-12 w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl"
>
      <div className="flex flex-col items-center border-b border-white/10 pb-8">
        <motion.img
          src={iconUrl}
          alt={weather.weather[0].description}
          className="h-40 w-40"
          animate={{
            rotate: weatherType === "clear" ? [0, 5, -5, 0] : 0,
            scale: weatherType === "snow" ? [1, 1.05, 1] : 1,
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <h1 className="text-8xl font-black tracking-tight text-white">
          {Math.round(weather.main.temp)}°
        </h1>

        <h2 className="mt-2 text-4xl font-bold text-white">
          {weather.name}
        </h2>

        <p className="text-lg font-medium text-sky-400">
          {weather.sys.country}
        </p>

        <p className="mt-4 rounded-full bg-sky-500/10 px-5 py-2 capitalize text-sky-300">
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