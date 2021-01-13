import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'

import './Main.css'

const Main = () =>
  <div className='Main'>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
      </Switch>
  </div>

export default Main