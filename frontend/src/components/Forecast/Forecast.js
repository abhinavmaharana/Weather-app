import React from 'react'
// import SavedLocation from './SavedLocation/SavedLocation'
import WeeklyWeather from './WeeklyWeather/WeeklyWeather'
import HourlyWeather from './HourlyWeather/HourlyWeather'
import WeatherSummary from './WeatherSummary/WeatherSummary'

function Forecast({ location }) {
  return (
    <div className='px-8 py-8 sm:px-16'>
        <h1 className='uppercase text-3xl font-bold'> 10 Day Forecast</h1>
        {/* Weekly Weather */}
        <WeeklyWeather location={location} />
        <h1 className='uppercase text-3xl mt-12 font-bold'>Daily Forecast</h1>
        <div className='mt-8'>
            <WeatherSummary location={location} />
        </div>
        <h1 className='uppercase text-3xl mt-12 font-bold'>Hourly Forecast</h1>
        <div className='mt-8'>
            <HourlyWeather location={location} />
        </div>
        {/* <h1 className='uppercase text-3xl mt-12 font-bold'>Saved Locations</h1>
        <SavedLocation /> */}
    </div>
  )
}

export default Forecast