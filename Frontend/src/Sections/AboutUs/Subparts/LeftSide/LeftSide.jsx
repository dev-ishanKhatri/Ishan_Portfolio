import React from 'react'
import AboutContent from './AboutContent'
import Selection from './Selection'


const LeftSide = ({setAction}) => {
  return (
    <div className='h-1/3 flex justify-center items-center flex-col gap-5 m-2 md:w-1/3 md:h-150 md:gap-10 '>
      <AboutContent />
      <Selection setAction={setAction}/>
    </div>
  )
}

export default LeftSide