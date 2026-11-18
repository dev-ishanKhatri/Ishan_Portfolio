import React from 'react'

const TitleContent = () => {
  return (
    <div className='text-2xl ml-3 text-white flex flex-col gap-1 md:text-5xl lg:flex lg:gap-5'>
      <h3 className='text-xl lg:text-2xl'>Hi, I am:-</h3>
      <h1 className=" text-5xl bg-linear-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold md:text-6xl lg:text-8xl animate-toright">Ishan Khatri</h1>
      <h2 className=' w-80 border-l-2 border-white text-2xl md:text-3xl lg:text-3xl lg:pl-5'>A Web Developer</h2>
      <h3 className='text-xs md:text-2xl lg:text-2xl lg:w-200'>Building responsive and scalable web applications using MongoDB, Express.js, React.js, and Node.js, with a focus on clean UI, efficient APIs, and seamless frontend-backend integration.</h3>
    </div>
  )
}

export default TitleContent