import React from 'react'
import './SkillBar.css'

const SkillBar = ({percentage, color}) =>
  <div className='SkillBar' >
    <div className='ColoredBar' style={{width: percentage, background: color}}>

    </div>
  </div>

export default SkillBar