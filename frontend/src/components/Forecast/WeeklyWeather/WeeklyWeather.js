import React, { useContext } from "react";
import { useFetchHook } from '../../../Hooks/FetchHook'
import WeatherContext from '../../../context/weatherContext';
import { getQuery } from "../../../Helper/QueryUtil";
import { getTemperature } from '../../../Helper/TemperatureUtil'
import Error from '../../Error';

function WeeklyWeather({location}) {
  const { city, isMetric } = useContext(WeatherContext);
  const [isLoading, forecast, error ] = useFetchHook(
    `/api/weather/forecast?${getQuery(city,location)}`,
    location
  );
  if (error) {
    return (
        <Error errorMessage="Unable to get weather data. Please try again after sometime" />
    );
  }
  return (
    <div className='flex gap-x-8 mt-8 overflow-scroll scrollbar-hide'>
      {/* {forecast && ( */}
        <>
          {forecast?.list
            .filter((data, index) => index % 8 === 0)
            .map((data) => (
              <div className='bg-white backdrop-filter backdrop-blur-xl bg-opacity-10 px-20 py-28 rounded-lg items-center text-center space-y-6' key={data.dt}>
                <h1 className='text-3xl'>{new Date(data?.dt_txt).toString().slice(0,10)}</h1>
                <div>
                  <img className='w-[100px] md:w-[140px]' src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}.png`} alt='' />
                </div>
                <p className="text-2xl">{data?.weather[0].description}</p>
                <p className='text-3xl font-bold'>Max: {getTemperature(data?.main?.temp_max, isMetric)}</p>
                <p className='text-2xl'>Min: {getTemperature(data?.main?.temp_min, isMetric)}</p>
              </div>
            ))
          }
        </>
      {/* )} */}
    </div>
  )
}

export default WeeklyWeather