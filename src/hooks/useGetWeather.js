import { useState } from 'react';
import { getUserLocation } from '../utils/getUserLocation';

export const useGetWeather = () => {
  const [loading, setLoading] = useState(false);
  const [locationWeather, setLocationWeather] = useState(null);

  const getWeatherByLocation = async () => {
    setLoading(true); // Start loading state
    try {
      const location = await new Promise((resolve, reject) => {
        getUserLocation((loc) => {
          if (loc) resolve(loc);
          else reject(new Error('Failed to get user location.'));
        });
      });

      if (location) {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${
            location.latitude
          }&lon=${location.longitude}&units=imperial&lang=en&appid=${
            import.meta.env.VITE_OPEN_WEATHER_API
          }`
        );
        const data = await response.json();

        if (data && data.weather) {
          setLocationWeather(data);
        } else {
          throw new Error('Incomplete weather data received.');
        }
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, locationWeather, getWeatherByLocation };
};
