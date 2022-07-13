export const getTemperature = (temperature, isMetric) => {
    return isMetric
     ? Math.round(converToCelcius(temperature)) + "°C"
     : Math.round(temperature) + "°F"
};

const converToCelcius = temperatureInf => (temperatureInf - 32) * (5 / 9);