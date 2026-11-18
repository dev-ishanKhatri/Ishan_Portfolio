import React from 'react'
import html from "../../../assets/html.png";
import css from "../../../assets/css.png";
import js from "../../../assets/js.png";
import react from "../../../assets/react.png";
import tailwind from "../../../assets/tailwind.png";

const Languages = () => {
    const skills = [
        {
            logo : html,
            nm : "HTML"
        },
        {
            logo : css,
            nm : "CSS"
        },
        {
            logo : js,
            nm : "JavaScript"
        },
        {
            logo : react,
            nm : "React.js"
        },
        {
            logo : tailwind,
            nm : "Tailwind"
        },
    ]
  return (
    // <div className='text-white flex justify-center items-center gap-10 flex-wrap md:flex lg:w-300 lg:flex lg:justify-around lg:flex-wrap'>
    //     {skills.map((skill,id) => (
    //         <div key={id} >
    //             <div className='h-20 w-20 border-2 border-cyan-500 shadow-lg shadow-blue-500/50 rounded md:h-30 md:w-30 md:m-5 lg:h-40 lg:w-40'>
    //                 <img src={skill.logo} alt=""/>
    //             </div>
    //             <h2 className='grid place-items-center mt-2 text-xl md:text-3xl'>{skill.nm}</h2>
    //         </div>
    //     ))}
    // </div>
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 lg:h-50 gap-8 place-items-center">
  {skills.map((skill, id) => (
    <div
      key={id}
      className="group gap-10 w-50 h-54 bg-zinc-900/70 backdrop-blur-md rounded-3xl border border-zinc-800
      hover:border-cyan-400 hover:-translate-y-3 transition-all duration-300
      shadow-lg hover:shadow-cyan-500/30 cursor-pointer"
    >
      <div className="flex flex-col items-center justify-center h-full">
        {/* Logo */}
        <div
          className="w-30 h-30 flex items-center justify-center rounded-2xl
          bg-linear-to-br from-cyan-500/20 to-blue-500/20
          group-hover:scale-110 transition duration-300"
        >
          <img
            src={skill.logo}
            alt={skill.nm}
            className="w-14 h-14 object-contain"
          />
        </div>

        {/* Skill Name */}
        <h2 className="mt-5 text-lg font-semibold text-white group-hover:text-cyan-400 transition">
          {skill.nm}
        </h2>
      </div>
    </div>
  ))}
</div>
  )
}

export default Languages