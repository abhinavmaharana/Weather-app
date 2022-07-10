import React from 'react'
import HourlyWeather from '../HourlyWeather/HourlyWeather'

function Summary() {
  return (
    <div className='mt-6'>
        <div className='flex space-x-5 items-center'>
            <div className='bg-white backdrop-filter backdrop-blur-xl bg-opacity-10 px-8 py-5 rounded-lg uppercase text-xl'>
                <h1>Daily Summary</h1>
            </div>
            <div className='bg-white backdrop-filter backdrop-blur-xl bg-opacity-10 px-8 py-5 rounded-lg uppercase text-xl font-bold'>
                <h1>Hourly</h1>
            </div>
            <div className='bg-white backdrop-filter backdrop-blur-xl bg-opacity-10 px-8 py-5 rounded-lg uppercase text-xl'>
                <h1>Details</h1>
            </div>
        </div>
        <div className='mt-6'>
            <HourlyWeather />
        </div>
    </div>
  )
}

export default Summary