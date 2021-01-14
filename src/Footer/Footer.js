import React from 'react'
import './Footer.css'

import FooterItem from './components/FooterItem'

const FooterItems = [
  {
    name: 'Malmö',
    icon: 'map-marker-alt',
    iconType: 'fas'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/johan-andersson-03ab40161/',
    icon: 'linkedin',
    iconType: 'fab'
  },
  {
    name: 'Github',
    url: 'https://github.com/brocahontaz',
    icon: 'github',
    iconType: 'fab'
  },
  {
    name: 'contact@johanandersson.se',
    url: 'mailto:contact@johanandersson.se',
    icon: 'envelope',
    iconType: 'fas'
  },
  {
    name: 'Johan Andersson, 2021',
    icon: 'copyright',
    iconType: 'fas'
  }
]

const Footer = () =>
  <div className='Footer'>
    <div className='Wrapper'>
      <ul>
        {FooterItems.map(item =>(
          <FooterItem name={item.name} url={item.url} icon={item.icon} iconType={item.iconType} key={item.name}/>
        ))}
      </ul>
    </div>
  </div>

export default Footer