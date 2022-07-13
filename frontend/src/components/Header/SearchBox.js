import React, { useContext, useRef } from 'react'
import {
  SearchIcon,
} from '@heroicons/react/outline';
import WeatherContext from '../../context/weatherContext'

function SearchBox({placeholder,location}) {
  const cityRef = useRef();
  const {setCity} = useContext(WeatherContext)
  const handleSubmit = e => {
    e.preventDefault();
    setCity(cityRef.current.value);
    cityRef.current.value = null;
  };
  console.log(cityRef)
  return (
    <form onSubmit={handleSubmit} className='flex items-center bg-white backdrop-filter w-80 ml-6 md:ml-0 backdrop-blur-xl bg-opacity-10 rounded-full py-2 shadow-sm'>
      <input
        className="flex-grow pl-5 bg-transparent outline-none text-sm text-white placeholder-gray-400"
        inputRef={cityRef}
        type="text"
        placeholder={placeholder || 'Search for location'}
        
      />
      <SearchIcon className="h-8 text-gray-500 rounded-full p-2 cursor-pointer mx-2" />
    </form>
  )
}

export default SearchBox