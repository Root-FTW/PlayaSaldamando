'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface WeatherData {
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  visibility: number;
  icon: string;
}

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate weather data for Ensenada, Baja California
    // In a real app, you'd fetch from a weather API like OpenWeatherMap
    const simulateWeatherData = () => {
      const conditions = ['Sunny', 'Partly Cloudy', 'Clear', 'Breezy'];
      const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];

      const mockWeather: WeatherData = {
        temperature: Math.floor(Math.random() * 10) + 18, // 18-28°C typical for the area
        condition: randomCondition,
        humidity: Math.floor(Math.random() * 30) + 60, // 60-90%
        windSpeed: Math.floor(Math.random() * 15) + 5, // 5-20 km/h
        visibility: Math.floor(Math.random() * 5) + 10, // 10-15 km
        icon: randomCondition.includes('Cloud') ? 'cloudy' : 'sunny'
      };

      setTimeout(() => {
        setWeather(mockWeather);
        setLoading(false);
      }, 1000);
    };

    simulateWeatherData();
  }, []);

  const getWeatherIcon = (condition: string) => {
    if (condition.includes('Cloud')) {
      return <div className="h-8 w-8 text-4xl">☁️</div>;
    }
    return <div className="h-8 w-8 text-4xl">☀️</div>;
  };

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-8 bg-gray-200 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>
      </div>
    );
  }

  if (error || !weather) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Weather</h3>
        <p className="text-red-600">Unable to load weather data</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-blue-50 to-ocean-50 rounded-xl shadow-lg p-6 border border-gray-100"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Current Weather</h3>
        <div className="text-xs text-gray-500">Ensenada, BC</div>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          {getWeatherIcon(weather.condition)}
          <div>
            <div className="text-3xl font-bold text-gray-900">{weather.temperature}°C</div>
            <div className="text-sm text-gray-600">{weather.condition}</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
          <div>
            <div className="text-gray-500">Humidity</div>
            <div className="font-medium">{weather.humidity}%</div>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <div className="text-lg">💨</div>
          <div>
            <div className="text-gray-500">Wind</div>
            <div className="font-medium">{weather.windSpeed} km/h</div>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <div className="text-lg">👁️</div>
          <div>
            <div className="text-gray-500">Visibility</div>
            <div className="font-medium">{weather.visibility} km</div>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <div className="text-lg">🌞</div>
          <div>
            <div className="text-gray-500">UV Index</div>
            <div className="font-medium">Moderate</div>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="text-xs text-gray-500 text-center">
          Perfect beach weather! 🏖️
        </div>
      </div>
    </motion.div>
  );
}
