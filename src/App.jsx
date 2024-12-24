import { Plus } from 'lucide-react';
import { useGetWeather } from './hooks/useGetWeather';
import { useEffect } from 'react';
import WeatherCard from './components/WeatherCard';

const App = () => {
  const { locationWeather, getWeatherByLocation } = useGetWeather();

  useEffect(() => {
    getWeatherByLocation(location);
  }, []);

  return (
    <div
      className="h-screen w-screen"
      style={{
        backgroundImage: `url("/images/daytime-sunnny.webp")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm  p-4">
        {' '}
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-2">
            <div>
              <h1 className="text-white font-bold">Good Morning 👋</h1>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="bg-babyPowder p-2 rounded-full ">
              <Plus />
            </button>
          </div>
        </div>
        <h2 className="font-semibold text-white mb-6">{"Today's"} Weather</h2>
        {locationWeather ? (
          <WeatherCard locationWeather={locationWeather} />
        ) : (
          <p className="text-white">
            No location provided, please allow location privledges or add a
            location manually
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
