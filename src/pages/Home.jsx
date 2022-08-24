import React from 'react'
import Header from '../components/Header'
import Projects from '../components/project/H-Project'
import Articles from '../components/article/H-Article'
import AboutMe from '../components/about/AboutMe'
import Contact from '../components/Contact'
// import Services from '../components/services/Services'


const Home = () => {
  return (
    <>
      <Header />
      <hr />
      <Projects />
      <hr />
      <Articles />
      <hr />
      <AboutMe />
      <hr />
      <Contact />
    </>
  )
}

export default Home