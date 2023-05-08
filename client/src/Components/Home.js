import React from 'react'
import BreadCrump from './BreadCrump'
import Cards from './Cards'
import Carosuel from './Carosuel'
import Industries from './Industries'
import NavHit from './NavHit'
import Skills from './Skills'
import SlickCarousels from './SlickCarousels'
import Testimonals from './Testimonals'
import UnderSlider from './UnderSlider'

const Home = () => {
  return (
    <div>
   
      <Carosuel/>
      <Cards/>
      <SlickCarousels/>
      <BreadCrump/>
      <Skills/>
      <Industries/>
      <Testimonals/>
      <UnderSlider/>

    </div>
  )
}

export default Home
