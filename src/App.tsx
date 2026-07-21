import Navbar from "./components/layout/Navbar";
import SearchBar from "./components/search/SearchBar";
import WeatherCard from "./components/weather/WeatherCard";

function App() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      <SearchBar />
      <WeatherCard /> 
      <SearchBar />
    </main>
  );
}

export default App;