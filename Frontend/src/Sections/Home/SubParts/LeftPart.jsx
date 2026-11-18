import React from 'react'
import TitleContent from './TitleContent'
import ButtonContenet from './ButtonContenet'

const LeftPart = () => {
  return (
    <div className='w-full flex flex-col gap-5
    md:w-xs md:text-left
    lg:w-1/2 lg:m-10 lg:text-left lg:flex lg:flex-col lg:gap-20'>
      <TitleContent />
      <ButtonContenet />
    </div>
  )
}

export default LeftPart