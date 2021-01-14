import React from 'react'
import './Section.css'

const getHeader = (text, size) => {
  if (size === 'large') {
    return (
      <h2>{text}</h2>
    )
  } else {
    return (
      <h3>{text}</h3>
    )
  }
}

const Section = ({header, headerSize, children}) =>
  <div className='Section'>
    {getHeader(header,headerSize)}
    {children}
  </div>

export default Section