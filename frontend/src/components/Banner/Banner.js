import React from 'react'
import {FaTemperatureHigh} from 'react-icons/fa'
import {TbWind} from 'react-icons/tb'
import {AiOutlineEye} from 'react-icons/ai'
import { WiHumidity } from "react-icons/wi"; 
import { TiLeaf } from "react-icons/ti";
import GaugeChart from 'react-gauge-chart'

function Banner() {
  return (
    <div className='px-8 py-8 sm:px-16'>
        {/* Location and updated time */}
        <div className='space-y-2'>
            <h1 className='text-3xl font-bold'> Sector 137, Noida</h1>
            <p className='text-2xl'>Updated as of 2:49 PM GMT+5:30</p>
        </div>
        {/* Temperature Details */}
        <div className='mt-8 md:mt-12 space-y-14'>
            {/* Temperature Gist */}
            <div>
                {/* Temperature */}
                <div className='flex space-x-32 md:space-x-14 items-center'>
                    <div className='flex space-x-5 items-center'>
                        <img className='w-[100px] md:w-[140px]' src="/images/cloudimage.png" alt='' />
                        <h1 className='text-4xl md:text-8xl md:font-semibold'>27℃</h1>
                    </div>
                    <div className='space-y-4'>
                        <h1 className='text-2xl md:text-4xl font-semibold'>Light Rain</h1>
                        <p className='text-xl md:text-2xl'>Tonight will be rainy. The low will be 26 ℃</p>
                    </div>
                </div>
                {/* Temperature Text */}
                <div></div>
            </div>
            {/* Temperature Actuals */}
            <div className='grid grid-rows-1  md:grid-cols-2 items-center md:gap-x-8 '>
                <div className='grid grid-cols-2 gap-y-8 gap-x-8 md:grid-cols-3 md:gap-y-8 md:border-r-4'>
                    <div className='grid grid-cols-2 items-center'>
                        <FaTemperatureHigh className="text-5xl"/>
                        <div className='md:-ml-20'>
                            <h1 className='text-2xl uppercase'>Feels like</h1>
                            <p className='text-xl'>30°</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 items-center'>
                        <TbWind className="text-5xl"/>
                        <div className='md:-ml-20'>
                            <h1 className='text-2xl uppercase'>Wind</h1>
                            <p className='text-xl'>9 km/h</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 items-center'>
                        <AiOutlineEye className="text-5xl"/>
                        <div className='md:-ml-20'>
                            <h1 className='text-2xl uppercase'>Visibility</h1>
                            <p className='text-xl'>2.5 km</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 items-center'>
                        <WiHumidity className="text-5xl"/>
                        <div className='md:-ml-20'>
                            <h1 className='text-2xl uppercase'>Humidity</h1>
                            <p className='text-xl'>84%</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 items-center'>
                        <FaTemperatureHigh className="text-5xl"/>
                        <div className='md:-ml-20'>
                            <h1 className='text-2xl uppercase'>Pressure</h1>
                            <p className='text-xl'>1006 mb</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 items-center'>
                        <TiLeaf className="text-5xl"/>
                        <div className='md:-ml-20'>
                            <h1 className='text-2xl uppercase'>Dew Point</h1>
                            <p className='text-xl'>24°</p>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 gap-y-8 gap-x-8 md:grid-cols-3 md:gap-y-8  mt-12 md:mt-0 items-center'>
                    <GaugeChart id="gauge-chart5"
                        nrOfLevels={420}
                        arcsLength={[0.2,0.2,0.2,0.2, 0.2, 0.2]}
                        colors={['#5BE12C','#317419','#F5CD19','#D56C2B', '#EA4228', '#9B2412']}
                        percent={0.48}
                        arcPadding={0.03}
                    />
                    <div className='space-y-4 md:text-center lg:text-left'>
                        <div className='space-y-2'>
                            <h1 className='text-3xl'>People Affected</h1>
                            <p className='text-2xl'>Sensitive Groups</p>
                        </div>
                        <div className='space-y-2'>
                            <h1 className='text-3xl'>Outdoor Activities</h1>
                            <p className='text-2xl'>Limit outdoors</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner