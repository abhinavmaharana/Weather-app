import React from 'react'
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Forecast from './components/Forecast/Forecast';

function App() {
  return (
    <div className="">
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />
      {/* 10 Day Forecast */}
      <Forecast />
    </div>
  );
}

export default App;
