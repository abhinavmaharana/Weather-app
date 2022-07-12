import React, { useContext } from 'react'
import WeatherContext from '../../context/weatherContext'
import {getQuery} from '../../Helper/QueryUtil'
import { useFetchHook } from "../../Hooks/FetchHook"
import Error from '../Error'

function TemperatureDetails({ location }) {
    const { city } = useContext(WeatherContext);
    const [isLoading, weather, error ] = useFetchHook(
        `/api/weather?${getQuery(city,location)}`,
        location
    );
    if (error) {
        return (
            <Error errorMessage="Unable to get weather data. Please try again after sometime" />
        );
    }
  return (
    <div className='space-y-2'>
        <h1 className='text-3xl font-bold'> {weather?.name}</h1>
        <p className='text-2xl'>Updated as of 2:49 PM GMT+5:30</p>
    </div>
  )
}

export default TemperatureDetails