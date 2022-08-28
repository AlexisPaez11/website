import React from 'react'
import Header from '../components/Header'
import Projects from '../components/project/H-Project'
import Articles from '../components/article/H-Article'
import AboutMe from '../components/about/AboutMe'
import Contact from '../components/Contact'
// import Services from '../components/services/Services'


const Home = () => {
  return (
    <div className='home'>
      <Header />
      <hr />
      <Projects />
      <hr />
      <Articles />
      <hr />
      <AboutMe />
      <hr />
      <Contact />
    </div>
  )
}

export default Home