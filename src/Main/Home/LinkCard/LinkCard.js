import React from 'react'
import './LinkCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LinkCard = () =>
  <div className='LinkCard'>
    <div className='PerspectiveLine'>
      <p className='PerspectiveText'>
      </p>
      <p className='PerspectiveText'>
      <FontAwesomeIcon icon={['fab', 'github']}/> Github
      </p>
    </div>
    <div className='PerspectiveLine'>
      <p className='PerspectiveText'>
        <FontAwesomeIcon icon={['fab', 'github']}/> Github
      </p>
      <p className='PerspectiveText'>
        <FontAwesomeIcon icon={['fab', 'linkedin']}/> LinkedIn
      </p>
    </div>
    <div className='PerspectiveLine'>
      <p className='PerspectiveText'>
        <FontAwesomeIcon icon={['fab', 'linkedin']}/> LinkedIn
      </p>
      <p className='PerspectiveText'>
        <FontAwesomeIcon icon={['fab', 'twitter']}/> Twitter
      </p>
    </div>
    <div className='PerspectiveLine'>
      <p className='PerspectiveText'>
        <FontAwesomeIcon icon={['fab', 'twitter']}/> Twitter
      </p>
      <p className='PerspectiveText'>
        <FontAwesomeIcon icon={['fas', 'envelope']}/> Email
      </p>
    </div>
    <div className='PerspectiveLine'>
      <p className='PerspectiveText'>
        <FontAwesomeIcon icon={['fas', 'envelope']}/> Email
      </p>
    </div>
  </div>

export default LinkCard