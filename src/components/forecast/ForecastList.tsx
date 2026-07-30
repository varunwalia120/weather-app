import { motion } from "framer-motion";
import ForecastCard from "./ForecastCard";
import type { ForecastResponse } from "../../types/forecast";

interface ForecastListProps {
  forecast: ForecastResponse | null;
}

export default function ForecastList({
  forecast,
}: ForecastListProps) {
  if (!forecast) return null;

  const dailyForecasts = forecast.list.filter((item) =>
    item.dt_txt.includes("12:00:00"),
  );

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-8 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-2xl"
    >
      <h2 className="mb-8 text-3xl font-bold text-white">
        5-Day Forecast
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {dailyForecasts.slice(0, 5).map((item) => (
          <ForecastCard
            key={item.dt}
            day={new Date(item.dt_txt).toLocaleDateString(
              "en-US",
              {
                weekday: "short",
              },
            )}
            weather={item.weather[0].main}
            description={item.weather[0].description}
            min={item.main.temp_min}
            max={item.main.temp_max}
          />
        ))}
      </div>
    </motion.section>
  );
}