// import React from 'react'
// import pro from "../Projects/Content_Array.js";

// const Display = () => {
//   return (
//     <div className='h-160 overflow-x-auto'>
//       {pro.map((project, id) => (
//         <div key={id} className=' text-white'>

//           <div className=' flex flex-col '>

//             <h2 className='text-white font-bold'>{project.title}</h2>

//             <div className=' h-40 mt-2 border-2 border-amber-100 overflow-x-auto flex'>
//               {project.images.map((img, index) => (
//                 <img key={index}
//                   src={img}
//                   className='h-40  border-2 border-amber-100'
//                 />
//               ))}

//             </div>

//             <h2 className='mt-5  font-bold'>Tools & Technologies</h2>
//             <div className='flex text-xs flex-wrap gap-10'>
//               {project.T_T.map((tools, index) => (
//                 <div key={index} className=''>
//                   {tools}
//                 </div>
//               ))}
//             </div>
//             <br />
//             {/* 
//             <h2 className='mt-5  font-bold'>Features</h2>
//             <ul className='mt-2 h-40 text-xs overflow-x-auto'>
//               {project.features.map((feature, index) => (
//                 <li key={index} className='flex flex-wrap '>
//                   {feature}
//                 </li>
//               ))}
//             </ul>  */}
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Display

import React from "react";
import pro from "../Projects/Content_Array.js";

// const Display = () => {
//   return (
//     <div className="h-160 overflow-x-auto space-y-5
//     md:h-full md:flex md:gap-5 md:mx-0 md:flex-wrap lg:flex lg:gap-5">
//       {pro.map((project, id) => (
//         <div
//           key={id}
//           className="bg-zinc-900 rounded-2xl border border-zinc-700 shadow-lg md:h-90"
//         >
//           {/* Header */}
//           <div className="p-2 border-b border-zinc-700">
//             <h2 className="text-xl font-bold text-white">
//               {project.title}
//             </h2>
//           </div>

//           {/* Images */}
//           <div className="flex overflow-x-auto gap-3 p-3 scrollbar-hide">
//             {project.images.map((img, index) => (
//               <img
//                 key={index}
//                 src={img}
//                 alt=""
//                 className="w-40 h-30 object-cover rounded-xl border border-zinc-700 shrink-0 hover:scale-105 duration-300 md:h-25 md:w-35 lg:h-30 lg:w-50"
//               />
//             ))}
//           </div>

//           {/* Bottom Section */}
//           <div className="flex flex-col md:grid-cols-2 gap-8 p-2 md:flex-col">

//             {/* Tools */}
//             <div>
//               <h3 className="text-xl font-semibold text-white mb-4">
//                 Tools & Technologies
//               </h3>

//               <div className="flex flex-wrap gap-3">
//                 {project.T_T.map((tool, index) => (
//                   <span
//                     key={index}
//                     className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500 text-blue-300 text-sm"
//                   >
//                     {tool}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* Features */}
//             <div>
//               <div className="flex text-sm gap-5">
//               <div className=" bg-blue-950 w-fit text-white px-4 py-2 rounded-2xl cursor-pointer"> View Project </div>
//               <div className=" bg-blue-950 w-fit text-white px-4 py-2 rounded-2xl cursor-pointer">Github</div>
//               </div>
//             </div>

//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Display;
const Display = () => {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {pro.map((project, id) => (
        <div
          key={id}
          className="group bg-zinc-900/80 backdrop-blur rounded-3xl border border-zinc-800 overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500"
        >
          {/* Image */}
          <div className="relative overflow-hidden h-52">
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent"></div>

            <h2 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
              {project.title}
            </h2>
          </div>

          {/* Body */}
          <div className="p-6 space-y-5">
            {/* Technologies */}

            <div>
              <h3 className="text-white font-semibold mb-3">
                Technologies
              </h3>

              <div className="flex flex-wrap gap-2">
                {project.T_T.map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/40 text-blue-300 text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Gallery */}

            <div>
              <h3 className="text-white font-semibold mb-3">
                Screenshots
              </h3>

              <div className="flex gap-3 overflow-x-auto scrollbar-hide">
                {project.images.slice(1).map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt=""
                    className="w-24 h-16 rounded-lg object-cover border border-zinc-700 shrink-0 hover:scale-105 transition"
                  />
                ))}
              </div>
            </div>

            {/* Buttons */}

            <div className="flex gap-3 pt-3">
              <button className="flex-1  bg-gray-200 cursor-not-allowed  text-gray-600 py-2 rounded-xl transition font-medium">
                Live Demo
              </button>

              <button className="flex-1 border cursor-pointer border-zinc-700 bg-blue-600 hover:border-white text-white py-2 rounded-xl transition font-medium">
                GitHub
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Display;