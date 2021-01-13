import React from 'react'
import './FooterItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const FooterItem = ({name, url, icon, iconType}) =>
  <li className='FooterItem'>
    {name && <a href={url} className={url ? 'ActiveLink' : 'NonActiveLink'}>{icon &&<FontAwesomeIcon icon={[iconType, icon]} className='FooterIcon'/>} <span className={url ? 'FooterLinkText' : 'FooterItemText'}>{name}</span></a>}
    {url ? '' : <span className='tooltiptext'>{name}</span>}
  </li>

export default FooterItem