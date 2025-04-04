import React from 'react'
import Nav from './components/Nav'
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import Home from './pages/Home'
import Blog from './pages/Blog.jsx'
import ArticlePage from "./ArticlePage.jsx";
import Projects from './pages/Projects'
import About from './pages/About.jsx'
import Footer from './components/Footer'

import ScrollToTopButton from "react-scroll-to-top";
import { IoIosArrowUp } from 'react-icons/io'

function App() {
  return (
    <div className='App'>
      <ScrollToTop/>
      <Nav />
      <ScrollToTopButton className='scrollToTopButton' smooth component={<IoIosArrowUp />} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path="/blog/:articleSlug" element={<ArticlePage />} />
        <Route path='/About' element={<About />} />
        <Route path='*' element={<Home />} />
        {/* <Route path='*' element={<404 />} /> */}
      </Routes>

      <hr />  
      <Footer />
    </div>
  )
}

export default App