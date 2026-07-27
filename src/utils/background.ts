export const getBackground = (weather: string): string => {
  switch (weather.toLowerCase()) {
    case "clear":
      return "bg-gradient-to-br from-sky-900 via-blue-900 to-slate-950";

    case "clouds":
      return "bg-gradient-to-br from-slate-800 via-slate-900 to-black";

    case "rain":
    case "drizzle":
      return "bg-gradient-to-br from-blue-900 via-slate-900 to-black";

    case "thunderstorm":
      return "bg-gradient-to-br from-violet-900 via-slate-950 to-black";

    case "snow":
      return "bg-gradient-to-br from-slate-700 via-slate-800 to-slate-950";

    case "mist":
    case "fog":
    case "haze":
      return "bg-gradient-to-br from-gray-700 via-slate-800 to-black";

    default:
      return "bg-slate-950";
  }
};