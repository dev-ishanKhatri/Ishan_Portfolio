import React from 'react'

const Upper = () => {
  return (
    // <div className='text-amber-300 grid place-content-center gap-5 md:gap-10'>
    //   <h1 className='text-5xl md:grid md:place-items-center md:text-5xl
    //   md:gap-5
    //   lg:text-7xl'>Skills</h1>
    //   <h4 className='text-2xl'>Here Are The Lenguages Which I Knows</h4>
    // </div>
    <div className="flex flex-col items-center text-center mb-10">
  <p className="text-cyan-400 uppercase tracking-[6px] text-sm font-semibold">
    My Expertise
  </p>

  <h1 className="mt-3 text-5xl md:text-6xl lg:text-7xl font-extrabold text-white">
    Skills
  </h1>

  <div className="w-24 h-1 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full mt-5"></div>

  <p className="mt-6 max-w-2xl text-zinc-400 text-lg md:text-xl leading-8">
    Here are the programming languages, frameworks, and technologies Which I Know.
  </p>
</div>
  )
}

export default Upper