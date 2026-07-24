import {
  FaTint,
  FaWind,
  FaTemperatureHigh,
  FaEye,
} from "react-icons/fa";
import { WiBarometer } from "react-icons/wi";

type WeatherDetailsProps = {
  humidity: number;
  wind: number;
  pressure: number;
  feelsLike: number;
  visibility: number;
};

const WeatherDetails = ({
  humidity,
  wind,
  pressure,
  feelsLike,
  visibility,
}: WeatherDetailsProps) => {
  const items = [
    {
      icon: <FaTemperatureHigh className="text-2xl text-orange-400" />,
      title: "Feels Like",
      value: `${Math.round(feelsLike)}°C`,
    },
    {
      icon: <FaTint className="text-2xl text-sky-400" />,
      title: "Humidity",
      value: `${humidity}%`,
    },
    {
      icon: <FaWind className="text-2xl text-green-400" />,
      title: "Wind",
      value: `${wind} m/s`,
    },
    {
      icon: <WiBarometer className="text-3xl text-yellow-400" />,
      title: "Pressure",
      value: `${pressure} hPa`,
    },
    {
      icon: <FaEye className="text-2xl text-purple-400" />,
      title: "Visibility",
      value: `${visibility / 1000} km`,
    },
  ];

  return (
    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
        >
          <div className="mb-3 flex justify-center">
            {item.icon}
          </div>

          <h4 className="text-sm uppercase tracking-wider text-slate-400">
            {item.title}
          </h4>

          <p className="mt-2 text-xl font-semibold text-white">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default WeatherDetails;