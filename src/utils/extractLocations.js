// Extract locations from the resolved address
// If the searched location is a city or street, it should come in a format
// "City, State, Country"
// If the searched location is a state, it should come in the format
// "State, Country"
// If the searched location is a country, it should come in the format
// "Country"
// In all cases, we want to return their searched location and the country it belongs in

export const extractLocations = (location) => {
  const locationSplit = location.split(",");
  return [locationSplit[0], locationSplit[locationSplit.length - 1]];
};
