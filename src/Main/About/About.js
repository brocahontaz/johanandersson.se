import React from 'react'
import './About.css'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Experience from './Experience'
import Education from './Education'


const About = () =>
  <div className='About'>
    <div className='Wrapper'>
      <AboutMe />
      <Skills />
      <Experience />
      <Education />
    </div>
  </div>

export default About