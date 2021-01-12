import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'

import './Main.css'

const Main = () =>
  <div className='Main'>
    <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
  </div>

export default Main