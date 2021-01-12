import React from 'react'
import './LinkCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LinkCard = () =>
  <div className='LinkCard'>
    <div className='PerspectiveLine'>
      <p className='PerspectiveText'>
      </p>
      <p className='PerspectiveText'>
        <a href='https://github.com/brocahontaz'>
          <FontAwesomeIcon icon={['fab', 'github']} className='LinkCardIcon'/> Github
        </a>
      </p>
    </div>
    <div className='PerspectiveLine'>
      <p className='PerspectiveText'>
        <a href='https://github.com/brocahontaz'>
          <FontAwesomeIcon icon={['fab', 'github']} className='LinkCardIcon'/> Github
        </a>
      </p>
      <p className='PerspectiveText'>
        <a href='https://www.linkedin.com/in/johan-andersson-03ab40161/'>
          <FontAwesomeIcon icon={['fab', 'linkedin']} className='LinkCardIcon'/> LinkedIn
        </a>
      </p>
    </div>
    <div className='PerspectiveLine'>
      <p className='PerspectiveText'>
        <a href='https://www.linkedin.com/in/johan-andersson-03ab40161/'>
          <FontAwesomeIcon icon={['fab', 'linkedin']} className='LinkCardIcon'/> LinkedIn
        </a>
      </p>
      <p className='PerspectiveText'>
        <a href='https://twitter.com/brocahontaz'>
          <FontAwesomeIcon icon={['fab', 'twitter']} className='LinkCardIcon'/> Twitter
        </a>
      </p>
    </div>
    <div className='PerspectiveLine'>
      <p className='PerspectiveText'>
        <a href='https://twitter.com/brocahontaz'>
          <FontAwesomeIcon icon={['fab', 'twitter']} className='LinkCardIcon'/> Twitter
        </a>
      </p>
      <p className='PerspectiveText'>
        <a href='mailto:contact@johanandersson.se'>
          <FontAwesomeIcon icon={['fas', 'envelope']} className='LinkCardIcon'/> Email
        </a>
      </p>
    </div>
    <div className='PerspectiveLine'>
      <p className='PerspectiveText'>
        <a href='mailto:contact@johanandersson.se'>
          <FontAwesomeIcon icon={['fas', 'envelope']} className='LinkCardIcon'/> Email
        </a>
      </p>
    </div>
  </div>

export default LinkCard