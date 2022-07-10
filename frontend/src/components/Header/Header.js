import React, { useState } from 'react'
import {
    DotsVerticalIcon,
    SearchIcon,
    HomeIcon,

  } from '@heroicons/react/outline';

function Header({ placeholder }) {
    const [searchInput, setSearchInput] = useState('');
    return (
        <header className='top-0 z-50  bg-white backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-lg py-3 px-3 md:px-10 '>
            <div className='max-w-8xl mx-auto px-8 sm:px-16 grid grid-cols-2 items-center'>
                {/* Search bar and Location */}
                <div className=''>
                    <div className="md:grid md:grid-cols-2 md:items-center md:border-r-2">
                        {/* Search bar */}
                        <div className='flex items-center bg-white backdrop-filter w-96 ml-6 md:ml-0 backdrop-blur-xl bg-opacity-10 rounded-full py-2 shadow-sm'>
                            <input
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                                className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
                                type="text"
                                placeholder={placeholder || 'Search for location'}
                            />
                            <SearchIcon className="h-8 text-gray-500 rounded-full p-2 cursor-pointer mx-2" />
                        </div>
                        {/* Location */}
                        <div className='hidden md:inline-flex items-center justify-evenly'>
                            <h1 className='flex items-center'><HomeIcon className="h-8 text-white p-2 cursor-pointer mx-2" /> Sector 137, Noida</h1>
                            <p>27 ℃</p>
                            <DotsVerticalIcon className="h-8 text-white p-2 cursor-pointer mx-2" />
                        </div>
                    </div>
                </div>
                {/* Celcius toggle */}
                <div className="hidden md:inline-flex items-center justify-end space-x-1 text-white">
                    <div className=' flex'>
                        <div className='bg-white backdrop-filter backdrop-blur-xl bg-opacity-5 px-5 py-3 rounded-l-lg'>
                            <h1>℉</h1>
                        </div>   
                        <div className='bg-white backdrop-filter backdrop-blur-xl bg-opacity-10 px-5 py-3 rounded-r-lg'>
                            <h1>℃</h1>
                        </div>
                    </div> 
                </div>
            </div>
        </header>
    )
}

export default Header