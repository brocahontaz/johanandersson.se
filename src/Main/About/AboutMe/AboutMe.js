import React from 'react'
import './AboutMe.css'

import Section from 'Main/About/components/Section'

const AboutMe = () =>
  <Section header='About' headerSize='large'>
    <p className='AboutParagraph'>  
      Passionate about automation and scaling.  
    </p>  
    <p className='AboutParagraph'>  
      Studied Software Development and Operations, bachelor's degree as a software developer with an extra focus on the DevOps mindset- both development and operations of software. 
    </p>  
    <p className='AboutParagraph'>  
      Thrives very well in full stack, from server and infrastructure, backend, all the way to frontend.  
      Thesis project completed in the spring of 2020 dealt with migration of infrastructure to, and implementation of, a full-scale Kubernetes cluster in collaboration with Sensative AB.  
    </p>  
  </Section>

export default AboutMe