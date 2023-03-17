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
import MejoresLibrosDesarrolladores from './pages/articles/MejoresLibrosDesarrolladores'
import ColeccionRecursosTailwind from './pages/articles/ColeccionRecursosTailwind'
import FuncionesJavaScript from './pages/articles/FuncionesJavaScript'
import JavaScript from './pages/articles/MetodosArrayJavaScript.jsx'

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
        <Route path='/Blog/MejoresLibrosDesarrolladores' element={<MejoresLibrosDesarrolladores />} />
        <Route path='/Blog/ColeccionRecursosTailwind' element={<ColeccionRecursosTailwind />} />
        <Route path='/Blog/FuncionesJavaScript' element={<FuncionesJavaScript />} />
        <Route path='/Blog/MetodosArrayJavaScript' element={<JavaScript />} />
      </Routes>
      
      <Footer />
    </div>
  )
}

export default App