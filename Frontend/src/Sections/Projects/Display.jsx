import React from "react";
import pro from "../Projects/Content_Array.js";
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

          <div className="p-6 space-y-5">

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

              <a href="https://github.com/dev-ishanKhatri/Assignment_Management_System.git"  className="flex-1 justify-center items-center flex border cursor-pointer border-zinc-700 bg-blue-600 hover:border-white text-white py-2 rounded-xl transition font-medium">
                <button>
                  GitHub
                </button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Display;