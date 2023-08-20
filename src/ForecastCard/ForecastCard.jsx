import { convertTimeFormat } from "../utils/convertTimeFormat";
import { getWeatherIcon } from "../utils/getWeatherIcon";
import { getTemperatureFormatted } from "../utils/temperature";
import "./ForecastCard.scss";

export const ForecastCard = ({ hourlyData, usingCelcius }) => {
  const time = convertTimeFormat(hourlyData.datetime);
  const temp = getTemperatureFormatted(hourlyData.temp, usingCelcius);

  return (
    <div className="forecast-card">
      <div className="time">{time}</div>
      <div className="temp">{temp}</div>
      <div className="icon">{getWeatherIcon(hourlyData.icon, "fa-2x")}</div>
    </div>
  );
};
