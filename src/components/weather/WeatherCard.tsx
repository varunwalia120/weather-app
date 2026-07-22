import { motion } from "framer-motion";
import { WiDaySunny } from "react-icons/wi";
import WeatherDetails from "./WeatherDetails";
import type { WeatherResponse } from "../../types/weather";

type WeatherCardProps = {
  weather: WeatherResponse;
};

const WeatherCard = ({ weather }: WeatherCardProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mx-auto mt-10 w-full max-w-3xl rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl"
    >
      <div className="flex flex-col items-center">
        <WiDaySunny className="text-[120px] text-yellow-400" />

        <h2 className="mt-2 text-6xl font-bold text-white">
          {Math.round(weather.main.temp)}°
        </h2>

        <h3 className="mt-4 text-3xl font-semibold text-white">
          {weather.name},{" "}
          <span className="text-sky-400">{weather.sys.country}</span>
        </h3>

        <p className="mt-2 text-lg capitalize tracking-wide text-slate-300">
          {weather.weather[0].description}
        </p>
      </div>

      <WeatherDetails
        humidity={weather.main.humidity}
        wind={weather.wind.speed}
        pressure={weather.main.pressure}
      />
    </motion.section>
  );
};

export default WeatherCard;