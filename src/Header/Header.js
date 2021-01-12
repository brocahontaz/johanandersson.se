import React from 'react'
import './Header.css'

import Logo from 'components/Logo'
import MenuButton from './MenuButton'

const Header = () =>
  <div className='Header'>
    <Logo />
    <MenuButton />
  </div>

export default Header