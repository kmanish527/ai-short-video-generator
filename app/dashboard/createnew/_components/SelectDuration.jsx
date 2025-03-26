"use client"
import React from 'react'
import {useState} from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

function SelectDuration({onUserSelect}) {
     const [selectedOption, setSelectedOption] = useState()
     
  return (
      <div>
            <h2 className='font-bold text-xl text-indigo-500'>Duration</h2>
            <p className='text-gray-500'>Select duration of your topic </p>
            <Select onValueChange={(value)=>{
                    setSelectedOption(value)
                    onUserSelect('duration',value)
                    
                    }}>
        <SelectTrigger className="w-full mt-2 p-6 text-lg">
          <SelectValue placeholder="Select Duration" />
        </SelectTrigger>
        <SelectContent>
          
       <SelectItem value="30 Seconds">30</SelectItem>
       <SelectItem value="60 Seconds">60</SelectItem>
          
        </SelectContent>
      </Select>
    </div>
  )
}

export default SelectDuration
