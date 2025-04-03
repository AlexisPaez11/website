import React from 'react'
import Nav from './components/Nav'
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import Home from './pages/Home'
import BlogDeveloper from './pages/Blog.jsx'
import Projects from './pages/Projects'
import About from './pages/About.jsx'
import Footer from './components/Footer'

import ScrollToTopButton from "react-scroll-to-top";
import { IoIosArrowUp } from 'react-icons/io'

import DevToolsChrome103 from './pages/articles/Developer/DevToolsChrome103.jsx'
import EtiquetasHtmlEsenciales from './pages/articles/Developer/EtiquetasHtmlEsenciales'
import MejoresLibrosDesarrolladores from './pages/articles/Developer/MejoresLibrosDesarrolladores'
import ColeccionRecursosTailwind from './pages/articles/Developer/ColeccionRecursosTailwind'
import FuncionesJavaScript from './pages/articles/Developer/FuncionesJavaScript'
import JavaScript from './pages/articles/Developer/MetodosArrayJavaScript.jsx'

import MejoresRatonesGaming2022 from './pages/articles/Tech/MejoresRatonesGaming2022.jsx'

import MacbookAirM2review from './pages/articles/Apple/MacBookAirM2Review.jsx'

function App() {
  return (
    <div className='App'>
      <ScrollToTop/>
      <Nav />
      <ScrollToTopButton className='scrollToTopButton' smooth component={<IoIosArrowUp />} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/Blog' element={<BlogDeveloper />} />
        <Route path='/About' element={<About />} />
        <Route path='*' element={<Home />} />
        {/* <Route path='*' element={<404 />} /> */}
        {/* <Route path='/Blog/:url' element={<ArticlePage />} /> */}

        <Route path='/Blog/DevToolsChrome103' element={<DevToolsChrome103 />} />
        <Route path='/Blog/EtiquetasHtmlEsenciales' element={<EtiquetasHtmlEsenciales />} />
        <Route path='/Blog/MejoresLibrosDesarrolladores' element={<MejoresLibrosDesarrolladores />} />
        <Route path='/Blog/ColeccionRecursosTailwind' element={<ColeccionRecursosTailwind />} />
        <Route path='/Blog/FuncionesJavaScript' element={<FuncionesJavaScript />} />
        <Route path='/Blog/MetodosArrayJavaScript' element={<JavaScript />} />

        <Route path='/Blog/MejoresRatonesGaming2022' element={<MejoresRatonesGaming2022 />} />

        <Route path='/Blog/MacBookAirM2review' element={<MacbookAirM2review />} />
      </Routes>

      {/* <hr />   */}
      {/* <Footer /> */}
    </div>
  )
}

export default App