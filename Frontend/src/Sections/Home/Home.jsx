import React from 'react'
import LeftPart from './SubParts/LeftPart'
import RightPart from './SubParts/RightPart'

const Home = () => {
  return (
    <div className='min-h-screen w-full  bg-[#03112B]' id='home'>
        <div className='min-h-[calc(100vh-50px)] flex flex-col gap-20 justify-center items-center 
        md:flex-row md:w-auto md:flex md:justify-center md:items-center
        lg:min-h-screen lg:flex lg:justify-center lg:items-center lg:gap-10 lg:z-20'>
          <LeftPart />
          <RightPart />
        </div>
    </div>
  )
}

export default Home