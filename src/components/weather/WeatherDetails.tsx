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
  const formatTime = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const items = [
    {
      icon: <FaTemperatureHigh className="text-3xl text-orange-400" />,
      title: "Feels Like",
      value: `${Math.round(feelsLike)}°C`,
    },
    {
      icon: <FaTint className="text-3xl text-sky-400" />,
      title: "Humidity",
      value: `${humidity}%`,
    },
    {
      icon: <FaWind className="text-3xl text-green-400" />,
      title: "Wind",
      value: `${wind} m/s`,
    },
    {
      icon: <WiBarometer className="text-5xl text-yellow-400" />,
      title: "Pressure",
      value: `${pressure} hPa`,
    },
    {
      icon: <FaEye className="text-3xl text-purple-400" />,
      title: "Visibility",
      value: `${visibility / 1000} km`,
    },
    {
      icon: <WiSunrise className="text-5xl text-amber-400" />,
      title: "Sunrise",
      value: formatTime(sunrise),
    },
    {
      icon: <WiSunset className="text-5xl text-orange-500" />,
      title: "Sunset",
      value: formatTime(sunset),
    },
  ];

  return (
    <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
      {items.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.08,
            duration: 0.4,
          }}
          whileHover={{
            y: -8,
            scale: 1.04,
          }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all"
        >
          <div className="mb-4 flex justify-center">
            {item.icon}
          </div>

          <h4 className="text-center text-sm font-medium uppercase tracking-[0.15em] text-slate-400">
            {item.title}
          </h4>

          <p className="mt-3 text-center text-3xl font-bold text-white">
            {item.value}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default WeatherDetails;