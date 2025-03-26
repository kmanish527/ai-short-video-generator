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
import { Textarea } from "@/components/ui/textarea"

function SelectTopic({onUserSelect}) {
    const options=['Custom Prompt','Random AI Story','Scary Story','Historical Facts','Bed Time Story','Motivational','Fun Facts']
    const [selectOption,setSelectOption]=useState();
  return (
    <div>
      <h2 className='font-bold text-xl text-indigo-500'>Content</h2>
      <p className='text-gray-500'>What is topic of your video ?</p>
      <Select onValueChange={(value)=>{
        setSelectOption(value)
        value!='Custom Prompt'&&onUserSelect('topic',value)
        
        }}>
  <SelectTrigger className="w-full mt-2 p-6 text-lg">
    <SelectValue placeholder="Content" />
  </SelectTrigger>
  <SelectContent>
    {options.map((item,index)=>(
 <SelectItem value={item}>{item}</SelectItem>
    ))}
  </SelectContent>
</Select>

    {selectOption=='Custom Prompt' &&
    <Textarea className ='mt-3' 
    onChange={(e)=>onUserSelect('topic',e.target.value)}
    placeholder='Write promt on which you want to generate video '/>
    }
    </div>
  )
}

export default SelectTopic
