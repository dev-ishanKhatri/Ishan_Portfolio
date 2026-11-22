import React, { useState } from 'react'
import LeftSide from './Subparts/LeftSide/LeftSide'
import RightSide from './Subparts/RightSide/RightSide'

const AboutUs = () => {
  const [action, setAction] = useState("shortintro");
  return (
    <div className='min-h-screen p-5 bg-[#03112B] flex justify-center items-center md:min-h-screen  md:flex md:justify-center md:items-center
      lg:min-h-screen lg:flex lg:justify-center lg:items-center' id='about'>
      <div className="rounded-2xl border-2 md:flex border-blue-900 md:h-full md:w-full lg:flex lg:w-full">
      <LeftSide setAction={setAction}/>
      <RightSide action={action}/>
      </div>
    </div>
  )
}

export default AboutUs