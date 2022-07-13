export const getQuery = (city, location) => {
    return city
       ? `q=${city}`
       : `lat=${location.latitude}&lon=${location.longitude}`;
}
