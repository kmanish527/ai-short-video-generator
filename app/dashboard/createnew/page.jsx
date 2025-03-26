"use client"
import React, { useState } from 'react'
import SelectTopic from './_components/SelectTopic'
import SelectStyle from './_components/SelectStyle'
import SelectDuration from './_components/SelectDuration'
import { Button } from '@/components/ui/button'
import axios from "axios";
import CustomLoading from './_components/CustomLoading'


function CreateNew() {
  const [formData, setFormData] = useState({})
  const [loading,setLoading] = useState(false)
  const [videoScript,setVideoScript]=useState()
  
  const onHandleInputChange = (fieldName, fieldValue) => {
    console.log(fieldName, fieldValue)

    setFormData(prev => ({
      ...prev,
      [fieldName]: fieldValue
    }))
  }

  //Get Video Script 
  const GetVideoScript = async()=>{
    setLoading(true)
    const prompt ='Write a script to generate '+formData.duration+' video on topic: Interesting '+formData.topic+' story along with Al image prompt in '+formData.style+' format for each scene and give me result in JSON format with imagePrompt and ContentText as field'
    console.log(prompt)
    const result=await axios.post('/api/get-video-script',{
        prompt:prompt
    }).then(resp=>{
        console.log(resp.data.result)
        setVideoScript(resp.data.result)
    })
    setLoading(false)
  }

  return (
    <div className='md:px-20 min-h-screen py-10'>
      <h2 className='font-bold text-4xl text-center'>Create New</h2>
      <div className='mt-10 shadow-md p-10 bg-white rounded-xl'>
        <SelectTopic onUserSelect={onHandleInputChange} />
        <SelectStyle onUserSelect={onHandleInputChange} />
        <SelectDuration onUserSelect={onHandleInputChange} />
        <Button className="mt-10 w-full bg-indigo-500 hover:bg-indigo-600" onClick={GetVideoScript}>
          Create Short Video
        </Button>
      </div>
      <CustomLoading loading={loading}/>
    </div>
   
  )
}

export default CreateNew
