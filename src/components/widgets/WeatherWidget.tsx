'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { weatherService, type WeatherData } from '@/services/weatherService';

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string>('');

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setLoading(true);
        setError(null);

        const weatherData = await weatherService.getCurrentWeather();
        setWeather(weatherData);

        // Set last updated time
        const updateTime = new Date(weatherData.lastUpdated * 1000).toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        });
        setLastUpdated(updateTime);

      } catch (err) {
        console.error('Error fetching weather:', err);
        setError('Unable to load weather data');
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();

    // Refresh weather data every 10 minutes
    const interval = setInterval(fetchWeatherData, 10 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const getWeatherIcon = (iconCode: string, condition: string) => {
    // OpenWeatherMap icon codes to emoji mapping
    const iconMap: { [key: string]: string } = {
      '01d': '☀️', // clear sky day
      '01n': '🌙', // clear sky night
      '02d': '⛅', // few clouds day
      '02n': '☁️', // few clouds night
      '03d': '☁️', // scattered clouds
      '03n': '☁️',
      '04d': '☁️', // broken clouds
      '04n': '☁️',
      '09d': '🌧️', // shower rain
      '09n': '🌧️',
      '10d': '🌦️', // rain day
      '10n': '🌧️', // rain night
      '11d': '⛈️', // thunderstorm
      '11n': '⛈️',
      '13d': '❄️', // snow
      '13n': '❄️',
      '50d': '🌫️', // mist
      '50n': '🌫️'
    };

    const emoji = iconMap[iconCode] || (condition.includes('Cloud') ? '☁️' : '☀️');
    return <div className="h-8 w-8 text-4xl">{emoji}</div>;
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
        <div className="text-xs text-gray-500">{weather.location}</div>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          {getWeatherIcon(weather.icon, weather.condition)}
          <div>
            <div className="text-3xl font-bold text-gray-900">{weather.temperature}°C</div>
            <div className="text-sm text-gray-600 capitalize">{weather.description}</div>
            <div className="text-xs text-gray-500">Feels like {weather.feelsLike}°C</div>
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
            <div className="font-medium">{weather.windSpeed} km/h {weatherService.getWindDirection(weather.windDirection)}</div>
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
            <div className="font-medium">{weather.uvIndex} ({weatherService.getUVIndexDescription(weather.uvIndex)})</div>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <div className="text-lg">🌡️</div>
          <div>
            <div className="text-gray-500">Pressure</div>
            <div className="font-medium">{weather.pressure} hPa</div>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center text-xs text-gray-500">
          <div>
            🌅 {weatherService.formatTime(weather.sunrise)} | 🌇 {weatherService.formatTime(weather.sunset)}
          </div>
          <div>
            Updated: {lastUpdated}
          </div>
        </div>
        <div className="text-xs text-gray-500 text-center mt-2">
          {weather.temperature >= 20 && weather.temperature <= 28 && weather.condition !== 'Rain'
            ? 'Perfect beach weather! 🏖️'
            : weather.condition === 'Rain'
            ? 'Great day for indoor activities ☔'
            : weather.temperature < 20
            ? 'Cool weather - bring a jacket 🧥'
            : 'Hot day - stay hydrated! 💧'
          }
        </div>
      </div>
    </motion.div>
  );
}
