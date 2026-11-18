import React from 'react'
import ishan from '../../../assets/1.png';
import html from "../../../assets/html.png";
import react from "../../../assets/react.png";
import css from "../../../assets/css.png";
import tailwind from "../../../assets/tailwind.png";
const RightPart = () => {
  return (
    <div className='h-fit w-fit relative flex justify-center items-center md:w-xs lg:w-1/2 md:h-150 md:m-0 md:justify-center'>


      <div className="h-75 w-75 relative flex justify-center items-center shadow-xl overflow-hidden bg-transparent transition-transform duration-300 animate-scale-in 
       md:flex md:justify-center md:items-center md:h-80 md:w-80
       lg:h-180 lg:w-180 lg:relative">

        <img src={html} alt="" className='top-5 left-0 h-12 z-13 absolute lg:h-40 lg:top-5 lg:left-0 animate-top-left' />
        <img src={react} alt="" className='top-5 right-0 h-15 absolute lg:top-10 lg:right-0 lg:h-40 animate-top-right' />
        <img src={css} alt="" className='bottom-10 left-0 h-10 absolute lg:bottom-10 lg:left-0 lg:h-40 animate-bottom-left' />
        <img src={tailwind} alt="" className='bottom-0 right-6 z-12 h-15 absolute lg:bottom-0 lg:right-10 lg:h-40 animate-bottom-right' />

        <div className='absolute rounded-full h-75 w-75 bg-linear-to-b bg-cyan-400 z-10 
        md:h-90 md:w-35
        lg:h-160 lg:w-160'>
          <div className='absolute h-74 left-0.5 top-0.5 w-74 bg-[#03112B] rounded-full z-12 lg:h-159 lg:w-159 lg:left-0.5 lg:top-0.5'>
          </div>
        </div>

        <img src={ishan} alt="img" className='h-65 w-65 rounded-full md:h-75 md:w-75 lg:h-135 lg:w-135  z-10 animate-scale' />
      </div>
    </div>
  )
}

export default RightPart