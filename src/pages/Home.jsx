import React from 'react'
import Header from '../components/Header'
import AboutMe from '../components/about/AboutMe'
import Contact from '../components/Contact'
// import Services from '../components/services/Services'


const Home = () => {
  return (
    <div className='home'>
      <Header />
      <hr />
      <AboutMe />
      <hr />
      <Contact />
    </div>
  )
}

export default Home