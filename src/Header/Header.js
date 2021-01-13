import React from 'react'
import './Header.css'

import Logo from 'components/Logo'
import MenuButton from './MenuButton'
import NavBar from './NavBar'

import { toggleMenu } from 'redux/actions/actions'
import { connect } from 'react-redux'

const Header = ({toggleMenu, open}) =>
  <div className='Header'>
    <Logo />
    <MenuButton click={toggleMenu}/>
    <NavBar />
  </div>

const mapStateToProps = (state) => {
  return {
    open: state.menu.open
  }
}

const mapDispatchToProps = { toggleMenu }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)