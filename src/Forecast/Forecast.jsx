import "./Forecast.scss";
import { ForecastCard } from "../ForecastCard";

export const Forecast = ({ forecastData, usingCelcius }) => {
  return (
    <div className="forecast-container">
      <div className="title">6-Hour Forecast</div>
      <div className="cards">
        {forecastData.map((data) => (
          <ForecastCard
            key={data.datetimeEpoch}
            hourlyData={data}
            usingCelcius={usingCelcius}
          />
        ))}
      </div>
    </div>
  );
};
