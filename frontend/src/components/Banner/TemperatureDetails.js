import React, { useContext, useEffect, useState } from 'react'
import WeatherContext from '../../context/weatherContext'
import {getQuery} from '../../Helper/QueryUtil'
import { useFetchHook } from "../../Hooks/FetchHook"
import Error from '../Error'

function TemperatureDetails({ location }) {
    const { city } = useContext(WeatherContext);
    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

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
        <p className='text-2xl'>Current Date & Time {date.toLocaleDateString()} {date.toLocaleTimeString()}</p>
    </div>
  )
}

export default TemperatureDetails