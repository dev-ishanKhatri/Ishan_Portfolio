import React from 'react'
import Skills from './Sections/Skills/Skills'
import Home from './Sections/Home/Home'
import AboutUs from './Sections/AboutUs/AboutUs'
import Project from './Sections/Projects/Project'
import ContactMe from './Sections/ContactUs/ContactMe'
import Navbaar from './Components/Navbaar/Navbaar'


const App = () => {
  return (
    <div className='scroll-smooth transition duration-500 delay-300 '>
      <Navbaar/>
      <Home />
      <AboutUs />
      <Skills />
      <Project />
      <ContactMe />
    </div>
  )
}

export default App