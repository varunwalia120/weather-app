# 🌦️ Weatherly

<div align="center">

A modern, responsive weather forecasting application built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.

Real-time weather • 5-Day Forecast • Current Location • Beautiful Animations

[Live Demo](https://weatherly-app-self.vercel.app)

</div>

---

## 📌 Overview

Weatherly is a modern weather application that provides real-time weather information and a 5-day forecast for any city worldwide.

The application uses the **OpenWeather API** to fetch live weather data while providing a clean, responsive, and animated user interface. It supports searching by city name, detecting the user's current location, viewing detailed atmospheric conditions, and dynamically changing the application's background based on weather conditions.

Designed with performance, usability, and clean architecture in mind, Weatherly demonstrates modern frontend development practices using React and TypeScript.

---

## ✨ Features

- 🌍 Search weather by city name
- 📍 Detect current location using Geolocation API
- 🌤 Live weather information
- 📅 5-Day weather forecast
- 🌅 Sunrise & Sunset timings
- 🌡 Temperature, Feels Like
- 💨 Wind Speed
- 💧 Humidity
- 👁 Visibility
- 📈 Atmospheric Pressure
- 🎨 Dynamic animated background based on weather
- 🌙 Beautiful Dark UI
- ⚡ Fast performance with Vite
- 📱 Fully Responsive Design
- 💾 Search History using Local Storage
- ❌ Error Handling
- ⏳ Skeleton Loading Animation

---

# 🛠️ Tech Stack

| Category | Technologies |
|----------|--------------|
| Frontend | React 19, TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | React Icons |
| HTTP Client | Axios |
| Weather API | OpenWeather API |
| State Management | React Hooks |
| Storage | Local Storage |
| Deployment | Vercel |

---

# 🏗️ Project Architecture

```
Weatherly
│
├── User
│
├── Search City / Detect Location
│
├── Weather Service (Axios)
│
├── OpenWeather API
│
├── Weather Response
│
├── React State Management
│
├── UI Components
│      │
│      ├── Navbar
│      ├── Search Bar
│      ├── Weather Card
│      ├── Weather Details
│      ├── Forecast
│      ├── Search History
│      ├── Unit Toggle
│      └── Animated Background
│
└── Render Beautiful Dashboard
```

---

# 📂 Project Structure

```
weather-app/
│
├── public/
│   ├── weatherly.svg
│   └── favicon.ico
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── background/
│   │   ├── common/
│   │   ├── forecast/
│   │   ├── layout/
│   │   ├── search/
│   │   └── weather/
│   │
│   ├── services/
│   │   └── weatherApi.ts
│   │
│   ├── types/
│   │
│   ├── constants/
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── .env
├── package.json
├── vite.config.ts
└── README.md
```

---

# ⚙️ Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- Axios
- Framer Motion
- React Icons
- OpenWeather API
- Vercel

# 🚀 Getting Started

Follow these steps to set up the project locally.

---

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/varunwalia120/weather-app.git
```

Navigate into the project directory.

```bash
cd weather-app
```

---

## 2️⃣ Install Dependencies

Using npm:

```bash
npm install
```

---

## 3️⃣ Configure Environment Variables

Create a `.env` file in the root directory.

```env
VITE_WEATHER_API_KEY=YOUR_OPENWEATHER_API_KEY
```

> **Note**
>
> Obtain a free API key from:
>
> https://openweathermap.org/api

---

## 4️⃣ Run the Development Server

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

---

## 5️⃣ Build for Production

```bash
npm run build
```

---

## 6️⃣ Preview the Production Build

```bash
npm run preview
```

---

# 🌐 Deployment

This project is deployed on **Vercel**.

Deployment process:

1. Push the repository to GitHub.
2. Import the repository into Vercel.
3. Add the following Environment Variable.

```env
VITE_WEATHER_API_KEY=YOUR_OPENWEATHER_API_KEY
```

4. Redeploy the application.

---

# 📦 Available Scripts

| Command | Description |
|----------|-------------|
| `npm install` | Install dependencies |
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

# 🔐 Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_WEATHER_API_KEY` | OpenWeather API Key |

> ⚠️ Never commit your `.env` file to GitHub.