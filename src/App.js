import { useState } from "react";
import "./App.scss";
import { DegreesSwitch } from "./DegreesSwitch";
import { Search } from "./Search";
import { CurrentWeatherCard } from "./CurrentWeatherCard/CurrentWeatherCard";
import { Forecast } from "./Forecast";
import { ErrorScreen } from "./ErrorScreen";

function App() {
  const [data, setData] = useState(null);
  const [isInvalidLocation, setIsInvalidLocation] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [usingCelcius, setUsingCelcius] = useState(true);

  const makeWeatherRequest = async (location) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next24hours?unitGroup=metric&include=hours%2Ccurrent&key=${process.env.REACT_APP_WEATHER_API_KEY}&contentType=json`
      );

      const data = await response.json();
      const forecast = [...data.days[0].hours, ...data.days[1].hours];
      const currentTime = Math.floor(Date.now() / 1000);
      const sixHours = 60 * 60 * 6;
      const next6hours = forecast.filter(
        (d) =>
          d.datetimeEpoch > currentTime &&
          d.datetimeEpoch <= currentTime + sixHours
      );

      const formattedData = {
        location: data.resolvedAddress,
        currentConditions: data.currentConditions,
        forecast: next6hours,
      };

      setData(formattedData);
      setIsInvalidLocation(false);
      setIsLoading(false);
    } catch (error) {
      // Error assumed to be bad location for this exercise
      setData(null);
      setIsInvalidLocation(true);
      setIsLoading(false);
    }
  };

  const switchDegreesType = () => {
    setUsingCelcius(!usingCelcius);
  };

  return (
    <div className="app">
      <header className="header">
        <Search handleSearch={makeWeatherRequest} isLoading={isLoading} />
        <DegreesSwitch
          handleSwitch={switchDegreesType}
          usingCelcius={usingCelcius}
        />
      </header>
      {isInvalidLocation ? <ErrorScreen /> : null}
      {data ? (
        <div className="info-section">
          <CurrentWeatherCard
            location={data.location}
            currentWeather={data.currentConditions}
            usingCelcius={usingCelcius}
          />
          <Forecast forecastData={data.forecast} usingCelcius={usingCelcius} />
        </div>
      ) : null}
    </div>
  );
}

export default App;
