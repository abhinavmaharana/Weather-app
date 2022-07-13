import React, { useContext } from 'react'
import WeatherContext from '../../context/weatherContext'
import {getQuery} from '../../Helper/QueryUtil'
import { useFetchHook } from "../../Hooks/FetchHook"
import GaugeChart from 'react-gauge-chart'
import Error from '../Error'

function AirPollution({location}) {
    const { city } = useContext(WeatherContext);
    const [isLoading, weather, error ] = useFetchHook(
        `/api/weather/airpollution?${getQuery(city,location)}`,
        location
    );
    if (error) {
        return (
            <Error errorMessage="Unable to get weather data. Please try again after sometime" />
        );
    }
    const airPolution = (weather?.list[0].components.no2)/100
  return (
    <div className='grid grid-cols-1 gap-y-8 gap-x-8 md:grid-cols-3 md:gap-y-8  mt-12 md:mt-0 items-center'>
        <GaugeChart id="gauge-chart5"
            nrOfLevels={420}
            arcsLength={[0.2,0.2,0.2,0.2, 0.2, 0.2]}
            colors={['#5BE12C','#317419','#F5CD19','#D56C2B', '#EA4228', '#9B2412']}
            percent={airPolution}
            arcPadding={0.03}
        />
        <div className='space-y-4 md:text-center lg:text-left'>
            <div className='space-y-2'>
                <h1 className='text-3xl lg:text-2xl font-bold'>People Affected</h1>
                <p className='text-2xl lg:text-2xl'>Sensitive Groups</p>
            </div>
            <div className='space-y-2'>
                <h1 className='text-3xl lg:text-2xl font-bold'>Outdoor Activities</h1>
                 <p className='text-2xl'>Limit outdoors</p>
            </div>
        </div>
    </div>
  )
}

export default AirPollution