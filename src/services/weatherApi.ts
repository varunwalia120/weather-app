import axios from "axios";
import type { WeatherResponse } from "../types/weather";

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const getWeatherByCity = async (
  city: string,
  unit: "metric" | "imperial" = "metric"
): Promise<WeatherResponse> => {
  try {
    const response = await axios.get<WeatherResponse>(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: unit,
      },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        throw new Error("City not found.");
      }

      if (error.response?.status === 401) {
        throw new Error("Invalid API key.");
      }

      throw new Error("Failed to fetch weather data.");
    }

    throw new Error("Something went wrong.");
  }
};

// 👇 Add this below getWeatherByCity
export const getWeatherByCoordinates = async (
  lat: number,
  lon: number,
  unit: "metric" | "imperial" = "metric"
): Promise<WeatherResponse> => {
  try {
    const response = await axios.get<WeatherResponse>(BASE_URL, {
      params: {
        lat,
        lon,
        appid: API_KEY,
        units: unit,
      },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error("Unable to fetch weather for your location.");
    }

    throw new Error("Something went wrong.");
  }
};