import React, { useContext } from 'react'
import WeatherContext from '../../context/weatherContext'
import {getQuery} from '../../Helper/QueryUtil'
import { useFetchHook } from "../../Hooks/FetchHook"
import { getTemperature } from '../../Helper/TemperatureUtil'
import Error from '../Error'

function WeatherDetails({ location }) {
    const { city, isMetric } = useContext(WeatherContext);
    const [isLoading, weather, error ] = useFetchHook(
        `/api/weather?${getQuery(city,location)}`,
        location
    );
    if (error) {
        return (
            <Error errorMessage="Unable to get weather data. Please try again after sometime" />
        );
    }
    const weatherTemp =  weather?.main.temp
    const icon = `https://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`
  return (
    <div className='flex space-x-32 md:space-x-14 items-center'>
        <div className='flex space-x-5 items-center'>
            <img className='w-[100px] md:w-[140px]' src={icon} alt='' />
            <h1 className='text-4xl md:text-8xl md:font-semibold'>{getTemperature(weatherTemp, isMetric)}</h1>
        </div>
        <div className='space-y-4'>
            <h1 className='text-2xl md:text-4xl font-semibold uppercase'>{weather?.weather[0].description}</h1>
            <p className='text-xl md:text-2xl'>The weather is {weather?.weather[0].main} today.</p>
        </div>
    </div>
  )
}

export default WeatherDetails