import { motion } from "framer-motion";
import {
  WiDaySunny,
  WiCloud,
  WiRain,
  WiSnow,
  WiThunderstorm,
  WiFog,
} from "react-icons/wi";

interface ForecastCardProps {
  day: string;
  weather: string;
  description: string;
  min: number;
  max: number;
}

const getWeatherIcon = (weather: string) => {
  switch (weather.toLowerCase()) {
    case "clear":
      return (
        <WiDaySunny className="text-6xl text-yellow-300 drop-shadow-lg" />
      );

    case "clouds":
      return (
        <WiCloud className="text-6xl text-gray-200" />
      );

    case "rain":
    case "drizzle":
      return (
        <WiRain className="text-6xl text-sky-300" />
      );

    case "snow":
      return (
        <WiSnow className="text-6xl text-white" />
      );

    case "thunderstorm":
      return (
        <WiThunderstorm className="text-6xl text-yellow-400" />
      );

    default:
      return (
        <WiFog className="text-6xl text-slate-300" />
      );
  }
};

export default function ForecastCard({
  day,
  weather,
  description,
  min,
  max,
}: ForecastCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.04,
      }}
      transition={{
        duration: 0.25,
      }}
      className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-xl"
    >
      <h3 className="text-center text-lg font-semibold text-white">
        {day}
      </h3>

      <div className="my-4 flex justify-center">
        {getWeatherIcon(weather)}
      </div>

      <p className="text-center text-sm capitalize text-slate-300">
        {description}
      </p>

      <div className="mt-5 flex justify-between text-white">
        <span className="font-semibold">
          {Math.round(max)}°
        </span>

        <span className="text-slate-400">
          {Math.round(min)}°
        </span>
      </div>
    </motion.div>
  );
}