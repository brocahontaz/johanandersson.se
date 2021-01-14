import React from 'react'
import './About.css'
import AboutMe from './AboutMe'
import Skills from './Skills'



const About = () =>
  <div className='About'>
    <div className='Wrapper'>
      <AboutMe />
      <Skills />
      <div className='Section'>
        <h3>Experience</h3>
      </div>
      <div className='Section'>
        <h3>Education</h3>
        <div className='SubSection'>
          
        </div>
      </div>
    </div>
  </div>

export default About