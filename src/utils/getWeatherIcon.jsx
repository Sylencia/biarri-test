import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSnowflake,
  faCloudRain,
  faSmog,
  faWind,
  faCloud,
  faCloudSun,
  faCloudMoon,
  faSun,
  faMoon,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";

export const getWeatherIcon = (weatherType, className) => {
  switch (weatherType) {
    case "snow":
      return <FontAwesomeIcon icon={faSnowflake} className={className} />;
    case "rain":
      return <FontAwesomeIcon icon={faCloudRain} className={className} />;
    case "fog":
      return <FontAwesomeIcon icon={faSmog} className={className} />;
    case "wind":
      return <FontAwesomeIcon icon={faWind} className={className} />;
    case "cloudy":
      return <FontAwesomeIcon icon={faCloud} className={className} />;
    case "partly-cloudy-day":
      return <FontAwesomeIcon icon={faCloudSun} className={className} />;
    case "partly-cloudy-night":
      return <FontAwesomeIcon icon={faCloudMoon} className={className} />;
    case "clear-day":
      return <FontAwesomeIcon icon={faSun} className={className} />;
    case "clear-night":
      return <FontAwesomeIcon icon={faMoon} className={className} />;
    default:
      return <FontAwesomeIcon icon={faQuestion} className={className} />;
  }
};
