import React from 'react'

const Selection = ({setAction}) => {
  return (
    <div className='w-fit flex-col flex gap-5 md:flex md:justify-center'>
        <div id='tab' className='h-10 w-60 bg-slate-800 text-slate-200 hover:bg-blue-600 hover:text-white rounded flex justify-center items-center text-2xl cursor-pointer lg:h-20 lg:w-80 md:h-25 md:w-50' onClick={()=> {setAction("shortintro")}}>Short Intro</div>
        <div id='tab' className='h-10 w-60 bg-slate-800 text-slate-200 hover:bg-blue-600 hover:text-white rounded flex justify-center items-center text-2xl cursor-pointer lg:h-20 lg:w-80 md:h-25 md:w-50' onClick={()=>{setAction("education")}}>Education</div>
        <div id='tab' className='h-10 w-60 bg-slate-800 text-slate-200 hover:bg-blue-600 hover:text-white rounded flex justify-center items-center text-2xl cursor-pointer lg:h-20 lg:w-80 md:h-25 md:w-50' onClick={()=>{setAction("goal")}}>Goal</div>
        {/* <div id='tab' className='h-10 w-60 bg-slate-800 text-slate-200 hover:bg-blue-600 hover:text-white rounded flex justify-center items-center text-2xl cursor-pointer lg:h-20 lg:w-80 md:h-25 md:w-50' onClick={()=>{setAction("cl")}}>Current Learning</div> */}
    </div>
  )
}

export default Selection