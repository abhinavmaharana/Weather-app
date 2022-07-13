import React, { useState } from 'react'
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import { Switch, Route, Redirect } from "react-router-dom";
import Forecast from './components/Forecast/Forecast';
import WeatherContext from './context/weatherContext'

import { useLocation } from './Hooks/LocationHook'
import Error from './components/Error';

function App() {
  const location = useLocation();
  const [isMetric, setIsMetric] = useState(false);
  const [city, setCity] = useState();

  if (!location) {
    return <Error errorMessage="Please enable location and try again" />
  }
  return (
    <>
      {location && (
        <WeatherContext.Provider value={{ isMetric, setIsMetric, city, setCity }}>
          {/* Header */}
          <Header location={location}/>
          {/* Banner */}
          <Banner location={location} />
          {/* 10 Day Forecast */}
          <Forecast location={location} />
        </WeatherContext.Provider>
      )}
    </>
  );
}

export default App;
