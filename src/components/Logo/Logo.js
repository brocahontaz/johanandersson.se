import React from 'react'

import './Logo.css'

import ProfilePicture from 'assets/profile1.png'
import ProfilePictureHover from 'assets/profile2.png'
import ProfilePictureClick from 'assets/profile3.png'

const Logo = () =>
  <div className='Logo'>
    <img src={ProfilePicture} alt='Avatar' className='Avatar' 
    onMouseEnter={e => e.target.src=ProfilePictureHover} 
    onMouseLeave={e => e.target.src=ProfilePicture}
    onClick={e => e.target.src=ProfilePictureClick}/>
  </div>

export default Logo