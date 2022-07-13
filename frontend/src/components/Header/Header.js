import React, { useContext, useRef, useState } from 'react'
import {
    DotsVerticalIcon,
    HomeIcon,
} from '@heroicons/react/outline';
import WeatherContext from '../../context/weatherContext'
import { getQuery } from "../../Helper/QueryUtil"
import { useFetchHook } from "../../Hooks/FetchHook"
import { getTemperature } from '../../Helper/TemperatureUtil'
import Error from '../Error';
import SearchBox from './SearchBox';

function Header({ placeholder, location }) {
    const cityRef = useRef();
    const { city, isMetric, setCity, setIsMetric } = useContext(WeatherContext);
    const [isLoading, weather, error ] = useFetchHook(
        `/api/weather?${getQuery(city,location)}`,
        location
    );
        const handleChange = (e) => {
            e.preventDefault();
            setCity(cityRef?.current.value);
            cityRef.current.value = null;

            console.log(cityRef.current.value)
        }

    if (error) {
        return (
            <Error errorMessage="Unable to get weather data. Please try again after sometime" />
        );
    }

    const weatherTemp =  weather?.main.temp

    // console.log(weatherTemp);

    return (
        <header className='top-0 z-50  bg-white backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-lg py-3 px-3 md:px-10 '>
            <div className='max-w-8xl mx-auto px-8 sm:px-16 grid grid-cols-2 items-center'>
                {/* Search bar and Location */}
                <div className=''>
                    <div className="md:grid md:grid-cols-2 md:items-center md:border-r-2">
                        {/* Search bar */}
                        <SearchBox location={location}/>
                        {/* Location */}
                        <div className='hidden md:inline-flex items-center justify-evenly'>
                            <h1 className='flex items-center'><HomeIcon className="h-8 text-white p-2 cursor-pointer mx-2" /> {weather?.name}</h1>
                            <p>{getTemperature(weatherTemp, isMetric)}</p>
                            <DotsVerticalIcon className="h-8 text-white p-2 cursor-pointer mx-2" />
                        </div>
                    </div>
                </div>
                {/* Celcius toggle */}
                <div className="hidden md:inline-flex items-center justify-end space-x-1 text-white">
                        <button onClick={() => setIsMetric(!isMetric)} className='bg-white backdrop-filter backdrop-blur-xl bg-opacity-5 px-5 py-3 rounded-lg'>
                            {isMetric ? `Fahrenheit` : `Celsius`}
                        </button>                    
                </div>
            </div>
        </header>
    )
}

export default Header