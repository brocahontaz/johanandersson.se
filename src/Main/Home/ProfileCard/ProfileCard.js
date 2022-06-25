import React from 'react'
import './ProfileCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProfileCard = () =>
  <div className='ProfileCard'>
    
    <h2>Hi!</h2>
    <h3>I'm Johan.</h3>
    <h4><FontAwesomeIcon icon={['fas', 'laptop-code']} className='LinkCardIcon'/> Full-stack DevOps</h4>
    <p className='ProfileIntro'>
      Passionate about automation and scaling. Thrives very well in full stack, from server and infrastructure, backend, all the way to frontend.
    </p>
  </div>

export default ProfileCard