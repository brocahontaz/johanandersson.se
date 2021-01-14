import React from 'react'

import './ExpItem.css'

const ExpItem = ({title, icon, location, city, duration, description, lists}) => 
  <div className='ExpItem'>
    <div className='Header'>
      <img src={icon} alt='' />
      <div className='Desc'>
        <h4>
          {title}
        </h4>
        <span className='LocationDuration'>{location}, {city} • {duration}</span>
      </div>
    </div>
    {description && description.map(paragraph => (
      <p>{paragraph}</p>
    ))}
    {lists && lists.map(list =>(
      <div className='ExpListItem'>
        <h5>{list.name}</h5>
        <ul className='ExpList'>
        {list.items.map(item => (
          <li> {item}</li>
        ))}
        </ul>
      </div>
    ))}
  </div>

export default ExpItem