import React from 'react'
import SavedLocation from './SavedLocation/SavedLocation'
import Summary from './Summary/Summary'
import WeeklyWeather from './WeeklyWeather/WeeklyWeather'

function Forecast() {
  return (
    <div className='px-8 py-8 sm:px-16'>
        <h1 className='uppercase text-2xl'> 10 Day Forecast</h1>
        {/* Weekly Weather */}
        <WeeklyWeather />
        <Summary />
        <h1 className='uppercase text-2xl mt-8'>Saved Locations</h1>
        <SavedLocation />
    </div>
  )
}

export default Forecast