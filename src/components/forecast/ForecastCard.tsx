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
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <WiDaySunny className="text-7xl text-yellow-300 drop-shadow-[0_0_20px_rgba(253,224,71,0.8)]" />
        </motion.div>
      );

    case "clouds":
      return (
        <motion.div
          animate={{
            x: [-6, 6, -6],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <WiCloud className="text-7xl text-slate-200" />
        </motion.div>
      );

    case "rain":
    case "drizzle":
      return (
        <motion.div
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
          }}
        >
          <WiRain className="text-7xl text-sky-300" />
        </motion.div>
      );

    case "snow":
      return (
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <WiSnow className="text-7xl text-white" />
        </motion.div>
      );

    case "thunderstorm":
      return (
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [1, 0.75, 1],
          }}
          transition={{
            duration: 0.9,
            repeat: Infinity,
          }}
        >
          <WiThunderstorm className="text-7xl text-yellow-400" />
        </motion.div>
      );

    default:
      return (
        <motion.div
          animate={{
            x: [-5, 5, -5],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        >
          <WiFog className="text-7xl text-slate-300" />
        </motion.div>
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
        y: -10,
        scale: 1.05,
      }}
      transition={{
        duration: 0.25,
      }}
      className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-sky-400/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.2)]"
    >
      <h3 className="text-center text-xl font-semibold text-white">
        {day}
      </h3>

      <div className="my-6 flex justify-center">
        {getWeatherIcon(weather)}
      </div>

      <p className="text-center text-sm capitalize tracking-wide text-slate-300">
        {description}
      </p>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-2xl font-bold text-white">
          {Math.round(max)}°
        </span>

        <span className="text-lg font-medium text-slate-400">
          {Math.round(min)}°
        </span>
      </div>
    </motion.div>
  );
}