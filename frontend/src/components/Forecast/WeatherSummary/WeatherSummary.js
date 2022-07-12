import React, { useContext } from "react";
import { useFetchHook } from '../../../Hooks/FetchHook'
import WeatherContext from '../../../context/weatherContext';
import { getQuery } from "../../../Helper/QueryUtil";
import { getTemperature } from '../../../Helper/TemperatureUtil'
import Error from '../../Error';

function WeatherSummary({location}) {
  const { city, isMetric } = useContext(WeatherContext);
  const [isLoading, forecast, error ] = useFetchHook(
    `/api/weather/onecall?${getQuery(city,location)}`,
    location
  );
  if (error) {
    return (
        <Error errorMessage="Unable to get weather data. Please try again after sometime" />
    );
  }
  console.log(forecast)

  return (
    <div className='flex gap-x-2 mt-8 overflow-scroll scrollbar-hide'>
      {forecast?.daily?.map((data) => (
      <div className='bg-white backdrop-filter backdrop-blur-xl bg-opacity-10 px-20 py-16 items-center text-center space-y-6' key={data?.dt}>
        <h1 className='text-3xl'>{new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(data?.dt)}</h1>
        <div>
          <img className='w-[120px] md:w-[160px]' src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}.png`} alt='' />
        </div>
        <p className='text-2xl'>{getTemperature(data?.temp.day, isMetric)}</p>
        <p className='text-2xl'>{data?.humidity}%</p>
      </div>
    ))}
</div>
  )
}

export default WeatherSummary