import React from 'react'
import './NavBar.css'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

const NavBar = ({open}) =>
  <div className={open ? 'NavBar open' : 'NavBar'}>
    <ul>
      <li>
        <NavLink to='/' className='MenuLink'>Home</NavLink>
      </li>
      <li>
        <NavLink exact to='/about' className='MenuLink'>About</NavLink>
      </li>
      <li>
        <NavLink exact to='/projects' className='MenuLink'>Projects</NavLink>
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