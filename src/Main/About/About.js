import React from 'react'
import './About.css'
import Skill from './components/Skill'

const skills = [
  {
    name: 'Java',
    percentage: '60%',
    color: '#E51F24'
  },
  {
    name: 'JavaScript',
    percentage: '85%',
    color: '#F5D33C'
  },
  {
    name: 'Node.js',
    percentage: '81%',
    color: '#87BF00'
  },
  {
    name: 'Express.js',
    percentage: '79%',
    color: '#030304'
  },
  {
    name: 'React',
    percentage: '78%',
    color: '#5ED3F3'
  },
  {
    name: 'HTML',
    percentage: '75%',
    color: '#DD4B25'
  },
  {
    name: 'CSS',
    percentage: '80%',
    color: '#2A6DB2'
  },
  {
    name: 'PHP',
    percentage: '50%',
    color: '#4D588E'
  },
  {
    name: 'Docker',
    percentage: '90%',
    color: '#3C97E4'
  },
  {
    name: 'Kubernetes',
    percentage: '92%',
    color: '#306ADF'
  },
  {
    name: 'Helm',
    percentage: '88%',
    color: '#0F1585'
  },
  {
    name: 'Linux',
    percentage: '70%',
    color: '#020204'
  },
  {
    name: 'Openstack',
    percentage: '73%',
    color: '#E61742'
  }
]

const About = () =>
  <div className='About'>
    <div className='Wrapper'>
      <div className='Section'>
        <h2>About</h2>
        <p className='AboutParagraph'>
          Passionate about automation and scaling.
        </p>
        <p className='AboutParagraph'>
          Studying Software Development and Operations, bachelor's degree as a software developer with an extra focus on the DevOps mindset- both development and operations of software.
        </p>
        <p className='AboutParagraph'>
          Thrives very well in full stack, from server and infrastructure, backend, all the way to frontend. 
          Thesis project completed in the spring of 2020 dealt with migration of infrastructure to, and implementation of, a full-scale Kubernetes cluster in collaboration with Sensative AB. 
        </p>
      </div>
      <div className='Section'>
        <h3>Skills</h3>
        <ul>
          {skills.map(skill => (
            <li>
            <Skill name={skill.name} percentage={skill.percentage} color={skill.color} />
            </li>
          ))}
        </ul>
      </div>
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