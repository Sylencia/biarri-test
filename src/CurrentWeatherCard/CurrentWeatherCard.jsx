import { extractLocations } from "../utils/extractLocations";
import { getWeatherIcon } from "../utils/getWeatherIcon";
import { getTemperatureFormatted } from "../utils/temperature";
import "./CurrentWeatherCard.scss";

export const CurrentWeatherCard = ({
  location,
  currentWeather,
  usingCelcius,
}) => {
  const temp = getTemperatureFormatted(currentWeather.temp, usingCelcius);
  const feelsTemp = getTemperatureFormatted(
    currentWeather.feelslike,
    usingCelcius
  );
  const [searchedLocation, country] = extractLocations(location);

  return (
    <div className="weather-card">
      <div className="weather-location">
        <div className="searchedLocation">{searchedLocation}</div>
        <div className="country">{country}</div>
      </div>
      <div className="weather-icon">
        {getWeatherIcon(currentWeather.icon, "fa-5x")}
      </div>
      <div className="weather-temp">
        <div className="actual-temp">{temp}</div>
        <div className="feels-temp">Feels like {feelsTemp}</div>
      </div>
    </div>
  );
};
