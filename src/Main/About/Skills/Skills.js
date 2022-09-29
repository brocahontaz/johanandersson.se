import React from 'react'
import Section from 'Main/About/components/Section'
import Skill from 'Main/About/components/Skill'
import './Skills.css'

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
    percentage: '45%',
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
    name: 'Terraform',
    percentage: '71%',
    color: '#5A40DD'
  },
  {
    name: 'Ansible',
    percentage: '76%',
    color: '#000000'
  },
  {
    name: 'Linux',
    percentage: '70%',
    color: '#020204'
  },
  {
    name: 'Bash',
    percentage: '65%',
    color: '#A32C2A'
  },
  {
    name: 'AWS',
    percentage: '55%',
    color: '#EA5F06'
  },
  {
    name: 'Openstack',
    percentage: '53%',
    color: '#E61742'
  }
]

const Skills = () =>
  <Section header='Skills' headerSize='small'>
    <ul className='SkillsList'>
      {skills.map(skill => (
      <li key={skill.name}>
        <Skill name={skill.name} percentage={skill.percentage} color={skill.color} />
      </li>
      ))}
    </ul>
  </Section>

export default Skills