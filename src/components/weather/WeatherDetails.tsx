import {
  FaTint,
  FaWind,
  FaTemperatureHigh,
  FaEye,
} from "react-icons/fa";
import { WiBarometer, WiSunrise, WiSunset } from "react-icons/wi";
import { motion } from "framer-motion";

type WeatherDetailsProps = {
  humidity: number;
  wind: number;
  pressure: number;
  feelsLike: number;
  visibility: number;
  sunrise: number;
  sunset: number;
};

const WeatherDetails = ({
  humidity,
  wind,
  pressure,
  feelsLike,
  visibility,
  sunrise,
  sunset,
}: WeatherDetailsProps) => {
  const formatTime = (timestamp: number) =>
    new Date(timestamp * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

  const items = [
    {
      title: "Feels Like",
      value: `${Math.round(feelsLike)}°C`,
      icon: <FaTemperatureHigh className="text-orange-400 text-3xl" />,
    },
    {
      title: "Humidity",
      value: `${humidity}%`,
      icon: <FaTint className="text-sky-400 text-3xl" />,
    },
    {
      title: "Wind Speed",
      value: `${wind} m/s`,
      icon: <FaWind className="text-green-400 text-3xl" />,
    },
    {
      title: "Pressure",
      value: `${pressure} hPa`,
      icon: <WiBarometer className="text-yellow-400 text-5xl" />,
    },
    {
      title: "Visibility",
      value: `${visibility / 1000} km`,
      icon: <FaEye className="text-purple-400 text-3xl" />,
    },
    {
      title: "Sunrise",
      value: formatTime(sunrise),
      icon: <WiSunrise className="text-amber-400 text-5xl" />,
    },
    {
      title: "Sunset",
      value: formatTime(sunset),
      icon: <WiSunset className="text-orange-500 text-5xl" />,
    },
  ];

  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.05,
            duration: 0.4,
          }}
          whileHover={{
            y: -6,
            scale: 1.03,
          }}
          className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:border-sky-400/30 hover:shadow-xl hover:shadow-sky-500/10"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900/60 transition-all duration-300 group-hover:bg-sky-500/10">
            {item.icon}
          </div>

          <div className="flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              {item.title}
            </span>

            <span className="mt-2 text-2xl font-bold text-white">
              {item.value}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default WeatherDetails;