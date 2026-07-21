import { FaTint, FaWind } from "react-icons/fa";
import { WiBarometer } from "react-icons/wi";

type WeatherDetailsProps = {
  humidity: number;
  wind: number;
  pressure: number;
};

const WeatherDetails = ({
  humidity,
  wind,
  pressure,
}: WeatherDetailsProps) => {
  const items = [
    {
      icon: <FaTint className="text-sky-400 text-2xl" />,
      title: "Humidity",
      value: `${humidity}%`,
    },
    {
      icon: <FaWind className="text-sky-400 text-2xl" />,
      title: "Wind",
      value: `${wind} km/h`,
    },
    {
      icon: <WiBarometer className="text-sky-400 text-3xl" />,
      title: "Pressure",
      value: `${pressure} hPa`,
    },
  ];

  return (
    <div className="mt-10 grid gap-5 md:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
        >
          <div className="mb-3 flex justify-center">{item.icon}</div>

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