import React from 'react'
import './Home.css'
import ProfileCard from './ProfileCard'
import LinkCard from './LinkCard'

const Home = () =>
  <div className='Home'>
    <div className='Wrapper'>
      <ProfileCard />
      <LinkCard />
    </div> 
  </div>

export default Home