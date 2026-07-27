export const getBackground = (weather: string): string => {
  switch (weather.toLowerCase()) {
    case "clear":
      return "bg-gradient-to-br from-yellow-400 via-orange-400 to-sky-600";

    case "clouds":
      return "bg-gradient-to-br from-slate-500 via-slate-700 to-slate-900";

    case "rain":
    case "drizzle":
      return "bg-gradient-to-br from-blue-700 via-slate-800 to-slate-950";

    case "thunderstorm":
      return "bg-gradient-to-br from-violet-700 via-slate-900 to-black";

    case "snow":
      return "bg-gradient-to-br from-slate-100 via-slate-300 to-slate-500";

    case "mist":
    case "fog":
    case "haze":
      return "bg-gradient-to-br from-gray-400 via-gray-600 to-slate-900";

    default:
      return "bg-slate-950";
  }
};
