import React from 'react'
import Upper from './Upper'
import Lower from './Lower'

const Skills = () => {
  return (
    <div className='min-h-screen w-full bg-[#03112B] flex justify-center items-center lg:pl-5 lg:pr-5' id='skill'>
      <div className='h-160 border-2 flex p-4 m-5 flex-col gap-15 border-red-600 md:p-10 md:gap-10 md:h-150 md:w-200 lg:w-full lg:flex'>
        <Upper />
        <Lower />
      </div>
    </div>
  )
}

export default Skills