import React from 'react'
import Nav from './components/Nav'
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Projects from './pages/Projects'
import About from './pages/About'
import Footer from './components/Footer'

import ScrollToTopButton from "react-scroll-to-top";
import { IoIosArrowUp } from 'react-icons/io'

import DevToolsChrome103 from './pages/articles/DevToolsChrome103'
import EtiquetasHtmlEsenciales from './pages/articles/EtiquetasHtmlEsenciales'
import MacBookAirM2review from './pages/articles/MacBookAirM2review'
import MejoresRatonesGaming2022 from './pages/articles/MejoresRatonesGaming2022'
import MejoresLibrosDesarrolladores from './pages/articles/MejoresLibrosDesarrolladores'
import TailwindCSSCheatSheet from './pages/articles/TailwindCSSCheatSheet'

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
        <Route path='/About' element={<About />} />
        <Route path='*' element={<Home />} />
        {/* <Route path='*' element={<404 />} /> */}
        {/* <Route path='/Blog/:url' element={<ArticlePage />} /> */}

        <Route path='/Blog/DevToolsChrome103' element={<DevToolsChrome103 />} />
        <Route path='/Blog/EtiquetasHtmlEsenciales' element={<EtiquetasHtmlEsenciales />} />
        <Route path='/Blog/MacBookAirM2review' element={<MacBookAirM2review />} />
        <Route path='/Blog/MejoresRatonesGaming2022' element={<MejoresRatonesGaming2022 />} />
        <Route path='/Blog/MejoresLibrosDesarrolladores' element={<MejoresLibrosDesarrolladores />} />
        <Route path='/Blog/TailwindCSSCheatSheet' element={<TailwindCSSCheatSheet />} />
      </Routes>
      
      <Footer />
    </div>
  )
}

export default App