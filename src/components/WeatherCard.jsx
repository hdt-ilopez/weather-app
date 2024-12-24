import { getCurrentFormattedDate } from '../utils/currentDate';

const WeatherTitle = ({ city }) => {
  return (
    <h6 className="text-xs text-white/80 font-inter">
      {city || 'Undefined'}, {getCurrentFormattedDate()}
    </h6>
  );
};

const WeatherCard = ({ locationWeather }) => {
  return (
    <>
      {locationWeather ? (
        <div className="bg-gradient-to-br from-gradientStart to-gradientEnd p-4 rounded-[16px] mb-2">
          <div className="flex justify-between items-center">
            <div>
              <WeatherTitle city={locationWeather?.name} />
              <h1 className="text-white font-semibold">
                {locationWeather?.main?.temp || 'NaN'}&deg;C
              </h1>
              <h4 className="text-white font-medium">
                Humidity {locationWeather?.main?.humidity || 'NaN'}%
              </h4>
            </div>
            <figure>
              <img
                src={`https://openweathermap.org/img/wn/${locationWeather?.weather[0]?.icon}@2x.png`}
                alt="Cloudy Icon"
                width={100}
              />
              <figcaption className="text-white text-xs text-center font-medium">
                {locationWeather?.weather[0]?.main}
              </figcaption>
            </figure>
          </div>
          <div className="h-[1px] bg-white/80 my-2" />
          <p className="text-white capitalize">
            {locationWeather?.weather[0]?.description || 'Nothing to show.'}
          </p>
        </div>
      ) : (
        'Loading...'
      )}
    </>
  );
};

export default WeatherCard;
