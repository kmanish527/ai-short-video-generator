"use client"
import Image from 'next/image'
import React, { useState } from 'react'

function SelectStyle({onUserSelect}) {
  const [selectedOption, setSelectedOption] = useState()

  const styleOptions = [
    {
      name: 'Cartoon',
      image: '/Cartoon.png',
    },
    {
      name: 'Comic',
      image: '/Comic.png',
    },
    {
      name: 'Realistic',
      image: '/Realistic.png',
    },
    {
      name: 'GTA',
      image: '/Gta.png',
    },
    {
      name: 'WaterColor',
      image: '/Watercolor.png',
    },
  ]

  return (
    <div>
      <h2 className="font-bold text-xl text-indigo-500">Style</h2>
      <p className="text-gray-500">Select Your video Style</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-5 mt-4">
        {styleOptions.map((item, index) => (
          <div
            key={index}
            onClick={() =>{ 
                setSelectedOption(item.name)
                onUserSelect('style',item.name)
            }}
            className={`relative hover:scale-105 transition-all cursor-pointer rounded-xl overflow-hidden
              ${selectedOption === item.name ? 'border-4 border-indigo-500' : ''}
            `}
          >
            <Image
              src={item.image}
              width={100}
              height={100}
              className="h-48 object-cover w-full"
              alt={item.name}
            />
            <h2 className="absolute p-1 bg-black bottom-0 w-full text-center text-white rounded-b-lg">
              {item.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SelectStyle
