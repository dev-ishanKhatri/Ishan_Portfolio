import React from 'react'
import { useState } from 'react'

const Navbaar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="z-15 top-0 sticky lg:h-15 text-3xl text-white">
      <div className=" bg-blue-950 w-full lg:bg-blue-950 border-b-2 lg:fixed lg:flex lg:justify-end  lg:w-full lg:z-10">
        <div className='flex justify-between p-3 lg:hidden '>
          <h1>My Portfolio</h1>
          <button className='lg:hidden text-2xl' onClick={() => {setMenuOpen(!menuOpen)}}> {menuOpen? "X":"="} </button>
        </div>
      <div className=' sticky hidden lg:flex lg:justify-around lg:items-center  lg:h-15 lg:w-1/2'>
        <a href="#home" onClick={setMenuOpen}>Home</a>
        <a href="#about" onClick={setMenuOpen}>About US</a>
        <a href="#skill" onClick={setMenuOpen}>Skills</a>
        <a href="#project" onClick={setMenuOpen}>Project</a>
        <a href="#ContantMe" onClick={setMenuOpen}>Contact Us</a>
      </div>

      {menuOpen && (
        <ul className='lg:hidden flex flex-col gap-4 z-4'>
          <li> <a href="#Home">Home</a> </li>
          <li> <a href="#about">About</a> </li>
          <li> <a href="#skill">Skills</a> </li>
          <li> <a href="#project">Projects</a> </li>
          <li> <a href="#ContantMe">Contact Us</a> </li>
        </ul>
      )}
      </div>
    </div>
  )
}

export default Navbaar