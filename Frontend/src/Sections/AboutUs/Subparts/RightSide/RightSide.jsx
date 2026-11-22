import React, { useState } from 'react'

const RightSide = ({ action }) => {

  const qualification = [
    {
      id: 1,
      class: "10th",
      school: "New Educaiton High School",
      py: 2020,
      per: 60.83
    },
    {
      id: 2,
      class: "12th",
      school: "N.K. High School",
      py: 2022,
      per: 74.57
    },
    {
      id: 3,
      class: "BCA",
      school: "AMCOST",
      py: 2025,
      per: 78.9
    }
  ];
  return (

    <div className='p-4 h-80 rounded bg-blue-950 flex flex-col m-2 overflow-x-auto text-white md:w-2/3 md:h-150 md:p-10 '>
      {
        action === "shortintro" &&
        <div className='flex flex-col gap-3 p-2'>
          <div>
            <h1 className='text-2xl font-bold lg:text-3xl'>{action}</h1>
          </div>
          <div>
            <p className='leading-6 lg:text-xl lg:leading-10'>Hello Every One, My Name Is Ishan Khatri and I am from Petlad, Where I was completed my 10th and 12th from commerce background, Then I choose BCA in Sardar Patel University as my next step and in the last sem of my batchlor's degree I created a final year project called Online Car Rental System, Then I complete my Batchlor's degree with Overall 78.9 CGPA, I am Pursuing MCA in Sardar Vallabhbhai Institute of Technology in Gujarat Technical University which is located at Vasad.</p>
          </div>
        </div>

      }

      {
        action === "education" &&
        <div className='p-3'>
          <h1 className='text-3xl font-bold mb-6'>Education</h1>
          {qualification.map((qual) => (
            <div key={qual.id} className=''> <br />
              <div className='border-blue-600 border-2 p-5 rounded-lg  hover:bg-blue-800 transition'>
                <div>
                  <h1 className='text-slate-300 text-xl font-semibold'>{qual.class}</h1>
                  <h2 className='text-blue-200'>{qual.school}</h2>
                </div>
                <div className='text-right'>
                  <h2 className='text-blue-400'>{qual.py}</h2>
                  <h2 className='text-emerald-400 font-bold'>{qual.per}</h2>
                </div>
                <br />
              </div>
            </div>
          ))}

        </div>
      }
      {
        action === "goal" &&
        <div className='flex flex-col gap-3 lg:p-3'>
          <div>
            <h1 className='text-2xl font-bold lg:text-3xl'>
              Carrer Goal
            </h1>
          </div>
          <div className='lg:text-xl lg:leading-10'>

            I am a dedicated student of MCA, who is passionate about learning new technologies and building useful software applications. My goal is to begin my career as a Software Developer and specially MERN STACK Developer in an organization where I can apply my technical knowledge, improve my programming and problem-solving skills, and gain practical industry experience. I enjoy working on web development projects, learning modern technologies, and continuously improving my abilities through practice and real-world challenges. <br /> <br />

            I am always eager to learn from professionals, work collaboratively in a team, and contribute to the success of the organization by developing efficient, reliable, and user-friendly software solutions. My aim is to grow both personally and professionally while staying updated with the latest advancements in technology. I believe that dedication and continuous learning will help me become a skilled software engineer and make a meaningful contribution to the organization I work for.
          </div>
        </div>
      }
    </div>
  );
}

export default RightSide