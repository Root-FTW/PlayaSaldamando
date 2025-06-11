// OpenWeatherMap API Service
interface OpenWeatherResponse {
  main: {
    temp: number;
    humidity: number;
    pressure: number;
    feels_like: number;
  };
  weather: Array<{
    main: string;
    description: string;
    icon: string;
  }>;
  wind: {
    speed: number;
    deg: number;
  };
  visibility: number;
  sys: {
    sunrise: number;
    sunset: number;
  };
  name: string;
  dt: number;
}

interface UVIndexResponse {
  value: number;
}

export interface WeatherData {
  temperature: number;
  condition: string;
  description: string;
  humidity: number;
  windSpeed: number;
  windDirection: number;
  visibility: number;
  pressure: number;
  feelsLike: number;
  uvIndex: number;
  icon: string;
  sunrise: number;
  sunset: number;
  lastUpdated: number;
  location: string;
}

class WeatherService {
  private readonly apiKey: string;
  private readonly baseUrl = 'https://api.openweathermap.org/data/2.5';
  private readonly latitude: number;
  private readonly longitude: number;

  constructor() {
    this.apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY || '';
    this.latitude = parseFloat(process.env.NEXT_PUBLIC_LATITUDE || '31.8444');
    this.longitude = parseFloat(process.env.NEXT_PUBLIC_LONGITUDE || '-116.6062');

    if (!this.apiKey) {
      console.warn('OpenWeatherMap API key not found. Weather data will be simulated.');
    }
  }

  async getCurrentWeather(): Promise<WeatherData> {
    if (!this.apiKey) {
      return this.getSimulatedWeather();
    }

    try {
      // Get current weather
      const weatherUrl = `${this.baseUrl}/weather?lat=${this.latitude}&lon=${this.longitude}&appid=${this.apiKey}&units=metric`;
      const weatherResponse = await fetch(weatherUrl);
      
      if (!weatherResponse.ok) {
        throw new Error(`Weather API error: ${weatherResponse.status}`);
      }

      const weatherData: OpenWeatherResponse = await weatherResponse.json();

      // Get UV Index (requires separate call)
      let uvIndex = 0;
      try {
        const uvUrl = `${this.baseUrl}/uvi?lat=${this.latitude}&lon=${this.longitude}&appid=${this.apiKey}`;
        const uvResponse = await fetch(uvUrl);
        if (uvResponse.ok) {
          const uvData: UVIndexResponse = await uvResponse.json();
          uvIndex = uvData.value;
        }
      } catch (error) {
        console.warn('UV Index data unavailable:', error);
      }

      return {
        temperature: Math.round(weatherData.main.temp),
        condition: weatherData.weather[0].main,
        description: weatherData.weather[0].description,
        humidity: weatherData.main.humidity,
        windSpeed: Math.round(weatherData.wind.speed * 3.6), // Convert m/s to km/h
        windDirection: weatherData.wind.deg,
        visibility: Math.round(weatherData.visibility / 1000), // Convert m to km
        pressure: weatherData.main.pressure,
        feelsLike: Math.round(weatherData.main.feels_like),
        uvIndex: Math.round(uvIndex * 10) / 10, // Round to 1 decimal
        icon: weatherData.weather[0].icon,
        sunrise: weatherData.sys.sunrise,
        sunset: weatherData.sys.sunset,
        lastUpdated: weatherData.dt,
        location: `${weatherData.name}, Baja California`
      };

    } catch (error) {
      console.error('Error fetching weather data:', error);
      return this.getSimulatedWeather();
    }
  }

  private getSimulatedWeather(): WeatherData {
    // Fallback simulated data for Ensenada area
    const conditions = ['Clear', 'Partly Cloudy', 'Sunny', 'Breezy'];
    const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];
    
    return {
      temperature: Math.floor(Math.random() * 10) + 18, // 18-28°C
      condition: randomCondition,
      description: randomCondition.toLowerCase(),
      humidity: Math.floor(Math.random() * 30) + 60, // 60-90%
      windSpeed: Math.floor(Math.random() * 15) + 5, // 5-20 km/h
      windDirection: Math.floor(Math.random() * 360),
      visibility: Math.floor(Math.random() * 5) + 10, // 10-15 km
      pressure: Math.floor(Math.random() * 20) + 1010, // 1010-1030 hPa
      feelsLike: Math.floor(Math.random() * 10) + 18,
      uvIndex: Math.floor(Math.random() * 8) + 2, // 2-10
      icon: randomCondition.includes('Cloud') ? '02d' : '01d',
      sunrise: Date.now() / 1000 - 3600, // 1 hour ago
      sunset: Date.now() / 1000 + 7200, // 2 hours from now
      lastUpdated: Date.now() / 1000,
      location: 'Ensenada, Baja California (Simulated)'
    };
  }

  getUVIndexDescription(uvIndex: number): string {
    if (uvIndex <= 2) return 'Low';
    if (uvIndex <= 5) return 'Moderate';
    if (uvIndex <= 7) return 'High';
    if (uvIndex <= 10) return 'Very High';
    return 'Extreme';
  }

  getWindDirection(degrees: number): string {
    const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
    const index = Math.round(degrees / 22.5) % 16;
    return directions[index];
  }

  formatTime(timestamp: number): string {
    return new Date(timestamp * 1000).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  }

  isDataFresh(timestamp: number, maxAgeMinutes: number = 10): boolean {
    const now = Date.now() / 1000;
    const ageMinutes = (now - timestamp) / 60;
    return ageMinutes <= maxAgeMinutes;
  }
}

export const weatherService = new WeatherService();
