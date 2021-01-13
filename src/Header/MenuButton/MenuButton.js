import React from 'react'
import './MenuButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux'

const MenuButton = ({ click, open }) =>
  <button className={open ? 'MenuButton open' : 'MenuButton'} onClick={() => { click() }}><FontAwesomeIcon icon={open ? 'times' : 'bars'} /></button>

const mapStateToProps = (state) => {
  return {
    open: state.menu.open
  }
}
export default connect(
  mapStateToProps,
  null
)(MenuButton)