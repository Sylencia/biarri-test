export const getTemperatureFormatted = (cTemp, usingCelcius) =>
  usingCelcius ? `${cTemp}°C` : `${convertCToF(cTemp)}°F`;

const convertCToF = (cTemp) => (32 + cTemp * 1.8).toFixed(1);
