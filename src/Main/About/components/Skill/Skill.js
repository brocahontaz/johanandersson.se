import React from 'react'
import './Skill.css'
import SkillBar from './SkillBar'

const Skill = ({name, percentage, color}) =>
  <div className='Skill'>
    {name} <SkillBar percentage={percentage} color={color} />
  </div>

export default Skill