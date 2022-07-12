import React, { useContext } from 'react'
import {FaTemperatureHigh} from 'react-icons/fa'
import {TbWind} from 'react-icons/tb'
import {AiOutlineEye} from 'react-icons/ai'
import { WiHumidity } from "react-icons/wi"; 
import { TiLeaf } from "react-icons/ti";

import WeatherContext from '../../context/weatherContext';
import { getQuery } from "../../Helper/QueryUtil"
import { useFetchHook } from "../../Hooks/FetchHook"
import { getTemperature } from '../../Helper/TemperatureUtil'
import Error from '../Error';
import TemperatureDetails from './TemperatureDetails';
import WeatherDetails from './WeatherDetails';
import AirPollution from './AirPollution';

function Banner({ location }) {
    const { city, isMetric } = useContext(WeatherContext);
    const [isLoading, weather, error ] = useFetchHook(
        `/api/weather/onecall?${getQuery(city,location)}`,
        location
    );
    if (error) {
        return (
            <Error errorMessage="Unable to get weather data. Please try again after sometime" />
        );
    }
    const weatherFeel = weather?.current.feels_like
    console.log(weather)
  return (
    <div className='px-8 py-8 sm:px-16'>
        {/* Location and updated time */}
        <TemperatureDetails location={location}/>
        {/* Temperature Details */}
        <div className='mt-8 md:mt-12 space-y-14'>
            {/* Temperature Gist */}
            <div>
                {/* Temperature */}
                <WeatherDetails location={location} />
            </div>
            {/* Temperature Actuals */}
            <div className='grid grid-rows-1  md:grid-cols-2 items-center md:gap-x-8 '>
                <div className='grid grid-cols-2 gap-y-8 gap-x-8 md:grid-cols-3 md:gap-y-8 md:border-r-4'>
                    <div className='grid grid-cols-2 items-center'>
                        <FaTemperatureHigh className="text-5xl"/>
                        <div className='md:-ml-20'>
                            <h1 className='text-2xl uppercase'>Feels like</h1>
                            <p className='text-xl'>{getTemperature(weatherFeel, isMetric)}</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 items-center'>
                        <TbWind className="text-5xl"/>
                        <div className='md:-ml-20'>
                            <h1 className='text-2xl uppercase'>Wind</h1>
                            <p className='text-xl'>{weather?.current.wind_speed} km/h</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 items-center'>
                        <AiOutlineEye className="text-5xl"/>
                        <div className='md:-ml-20'>
                            <h1 className='text-2xl uppercase'>Visibility</h1>
                            <p className='text-xl'>{weather?.current.visibility} km</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 items-center'>
                        <WiHumidity className="text-5xl"/>
                        <div className='md:-ml-20'>
                            <h1 className='text-2xl uppercase'>Humidity</h1>
                            <p className='text-xl'>{weather?.current.humidity}%</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 items-center'>
                        <FaTemperatureHigh className="text-5xl"/>
                        <div className='md:-ml-20'>
                            <h1 className='text-2xl uppercase'>Pressure</h1>
                            <p className='text-xl'>{weather?.current.pressure} mb</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 items-center'>
                        <TiLeaf className="text-5xl"/>
                        <div className='md:-ml-20'>
                            <h1 className='text-2xl uppercase'>Dew Point</h1>
                            <p className='text-xl'>{weather?.current.dew_point}°</p>
                        </div>
                    </div>
                </div>
                <AirPollution location={location}/>
            </div>
        </div>
    </div>
  )
}

export default Banner