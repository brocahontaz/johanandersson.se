import React from 'react'
import './NavBar.css'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavBar = ({open}) =>
  <div className={open ? 'NavBar open' : 'NavBar'}>
    <ul>
      <li>
        <NavLink to='/' className='MenuLink'><FontAwesomeIcon icon='home' /> Home</NavLink>
      </li>
      <li>
        <NavLink to='/about' className='MenuLink'><FontAwesomeIcon icon='address-card' /> About</NavLink>
      </li>
      <li>
        <NavLink to='/projects' className='MenuLink'><FontAwesomeIcon icon='project-diagram' /> Projects</NavLink>
      </li>
    </ul>
  </div>

const mapStateToProps = (state) => {
  return {
    open: state.menu.open
  }
}
export default connect(
  mapStateToProps,
  null
)(NavBar)