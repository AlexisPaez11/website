import React from 'react'
import { NavLink } from "react-router-dom";
import Article from '../../components/article/Article'

import { IoIosArrowBack } from 'react-icons/io' // Back
import { HiCode } from 'react-icons/hi' // CategoryDev

import HTML from '../../assets/blog-assets/html.webp'
import MejoresLibrosDesarrolladores from '../../assets/blog-assets/libros-desarrolladores/libros-desarrolladores.webp'

import TailwindDocumentation from '../../assets/blog-assets/coleccion-recursos-tailwind/tailwind-documentation.webp'
import TailwindRefactorinUI from '../../assets/blog-assets/coleccion-recursos-tailwind/refactoringui.webp'
import TailwindHeroIcons from '../../assets/blog-assets/coleccion-recursos-tailwind/heroicons.webp'
import TailwindHeroPatterns from '../../assets/blog-assets/coleccion-recursos-tailwind/heropatterns.webp'

import TailwindCSSCheatSheet from '../../assets/blog-assets/coleccion-recursos-tailwind/tailwind-css-cheat-sheet.webp'
import TailwindIntellisense from '../../assets/blog-assets/coleccion-recursos-tailwind/tailwind-intellisense.webp'
import TailwindExplorer from '../../assets/blog-assets/coleccion-recursos-tailwind/tailwind-explorer.webp'
import TailwindPlay from '../../assets/blog-assets/coleccion-recursos-tailwind/tailwind-play.webp'
import Hypercolor from '../../assets/blog-assets/coleccion-recursos-tailwind/hypercolor.webp'

import TailwindUI from '../../assets/blog-assets/coleccion-recursos-tailwind/tailwindui.webp'
import TailwindComponents from '../../assets/blog-assets/coleccion-recursos-tailwind/tailwind-components.webp'
import HeadlessUI from '../../assets/blog-assets/coleccion-recursos-tailwind/headlessui.webp'
import MerakiUI from '../../assets/blog-assets/coleccion-recursos-tailwind/merakiui.webp'
import Kitwind from '../../assets/blog-assets/coleccion-recursos-tailwind/kitwind.webp'
import Kutty from '../../assets/blog-assets/coleccion-recursos-tailwind/kutty.webp'
import Wickedblocks from '../../assets/blog-assets/coleccion-recursos-tailwind/wickedblocks.webp'
import Tails from '../../assets/blog-assets/coleccion-recursos-tailwind/tails.webp'
import Treact from '../../assets/blog-assets/coleccion-recursos-tailwind/treact.webp'
import MambaUI from '../../assets/blog-assets/coleccion-recursos-tailwind/mambaui.webp'

import TailwindTemplate from '../../assets/blog-assets/coleccion-recursos-tailwind/tailwind-template.webp'
import Template1 from '../../assets/blog-assets/coleccion-recursos-tailwind/template1.webp'

const ArticleData = [
  {
    categoryimg: <HiCode />,
    category: 'Desarrollo Web',
    image: MejoresLibrosDesarrolladores,
    title: 'Mejores libros para desarrolladores',
    date:'Septiembre 06, 2022',
    url: 'MejoresLibrosDesarrolladores',
  },
  {
    categoryimg: <HiCode />,
    category: 'Desarrollo Web',
    image: HTML,
    title: 'Etiquetas HTML esenciales que debes conocer',
    date:'Julio 25, 2022',
    url: 'EtiquetasHtmlEsenciales',
  },
]

const ColeccionRecursosTailwind = () => {
  return (
    <section className='article-section'>
      <div className="article-container">
        <NavLink to="/Blog" className='btn btn-back'><IoIosArrowBack /></NavLink>

        <h1>Colección de recursos para Tailwind</h1>
        <time dateTime='2022-09-07'>Undefined</time>

        <br/><br/><br/>
        <br/><br/><br/>
        <p>Tailwind CSS funciona escaneando todos sus archivos HTML, componentes de JavaScript y cualquier otra plantilla en busca de nombres de clase, generando los estilos correspondientes y luego escribiéndolos en un archivo CSS estático.</p>
        <img src={TailwindDocumentation} alt=''/>
        <a href="https://tailwindcss.com/docs/installation" class="btn" target="_blank" rel="noreferrer">DOCUMENTACIÓN</a>

        <br/><br/><br/>
        <br/><br/><br/>
        <h2>Recursos:</h2>
        <h3>Tailwind Refactorin UI</h3>
        <p>Aprenda a diseñar interfaces de usuario usando tácticas específicas explicadas desde el punto de vista de un desarrollador.</p>
        <img src={TailwindRefactorinUI} alt=''/>
        <a href="https://www.refactoringui.com/" class="btn" target="_blank" rel="noreferrer">VISITAR SITIO</a>

        <hr />
        <br/><br/><br/>
        <h3>Tailwind Hero Icons</h3>
        <p>Íconos SVG hechos a mano por los creadores de Tailwind CSS.</p>
        <img src={TailwindHeroIcons} alt=''/>
        <a href="https://heroicons.com/" class="btn" target="_blank" rel="noreferrer">VISITAR SITIO</a>

        <hr />
        <br/><br/><br/>
        <h3>Tailwind Hero Patterns</h3>
        <p>Una colección de patrones de fondo SVG repetibles para que los use en sus proyectos web.</p>
        <img src={TailwindHeroPatterns} alt=''/>
        <a href="https://heropatterns.com/" class="btn" target="_blank" rel="noreferrer">VISITAR SITIO</a>

        <hr />
        <br/><br/><br/>
        <h3>Tailwind CSS Cheat Sheet</h3>
        <p>Encuentre rápidamente todos los nombres de clases y propiedades CSS con esta hoja de trucos interactiva. ¡La única CheatSheet de Tailwind que necesitarás!</p>
        <img src={TailwindCSSCheatSheet} alt=''/>
        <a href="https://tailwindcomponents.com/cheatsheet/" class="btn" target="_blank" rel="noreferrer">VISITAR SITIO</a>

        <hr />
        <br/><br/><br/>
        <h3>Tailwind CSS IntelliSense</h3>
        <p>Tailwind CSS IntelliSense mejora la experiencia de desarrollo de Tailwind al proporcionar a los usuarios de Visual Studio Code funciones avanzadas como autocompletar, resaltado de sintaxis y linting.</p>
        <img src={TailwindIntellisense} alt=''/>
        <a href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss" class="btn" target="_blank" rel="noreferrer">VISITAR SITIO</a>

        <hr />
        <br/><br/><br/>
        <h3>Tailwind CSS Explorer</h3>
        <p>Extensión VSCode para Tailwind CSS: explore las clases disponibles en la configuración de Tailwind de su proyecto.</p>
        <img src={TailwindExplorer} alt=''/>
        <a href="https://marketplace.visualstudio.com/items?itemName=PeterMekhaeil.vscode-tailwindcss-explorer" class="btn" target="_blank" rel="noreferrer">VISITAR SITIO</a>

        <hr />
        <br/><br/><br/>
        <h3>Tailwind Play</h3>
        <p>Un campo de juego en línea avanzado para Tailwind CSS que le permite usar todas las funciones de tiempo de compilación de Tailwind directamente en el navegador.</p>
        <img src={TailwindPlay} alt=''/>
        <a href="https://play.tailwindcss.com/" class="btn" target="_blank" rel="noreferrer">VISITAR SITIO</a>
        
        <hr />
        <br/><br/><br/>
        <h3>Hypercolor</h3>
        <p>Una colección de degradados que utilizan la gama completa de colores CSS de Tailwind. Copie y pegue fácilmente los nombres de clase, CSS o incluso guarde los degradados como una imagen.</p>
        <img src={Hypercolor} alt=''/>
        <a href="https://hypercolor.dev/" class="btn" target="_blank" rel="noreferrer">VISITAR SITIO</a>

        <br/><br/><br/>
        <br/><br/><br/>
        <h2>Componentes:</h2>
        <h3>Tailwind UI</h3>
        <p>Plantillas y componentes diseñados y elaborados por expertos, creados por los creadores de Tailwind CSS. El punto de partida perfecto para su próximo proyecto.</p>
        <img src={TailwindUI} alt=''/>
        <a href="https://tailwindui.com/" class="btn" target="_blank" rel="noreferrer">VISITAR SITIO</a>

        <hr />
        <br/><br/><br/>
        <h3>Tailwind Components</h3>
        <p>Repositorio gratuito de código abierto para la comunidad donde encontrarás plantillas y componentes de interfaz de usuario de Tailwind.</p>
        <img src={TailwindComponents} alt=''/>
        <a href="https://tailwindcomponents.com/" class="btn" target="_blank" rel="noreferrer">VISITAR SITIO</a>
        
        <hr />
        <br/><br/><br/>
        <h3>Headless UI</h3>
        <p>Componentes de interfaz de usuario completamente accesibles y sin estilo, diseñados para integrarse a la perfección con Tailwind CSS.</p>
        <img src={HeadlessUI} alt=''/>
        <a href="https://headlessui.com/" class="btn" target="_blank" rel="noreferrer">VISITAR SITIO</a>

        <hr />
        <br/><br/><br/>
        <h3>Meraki UI</h3>
        <p>Meraki UI son componentes Tailwind CSS que admiten lenguajes RTL y totalmente receptivos basados ​​en Flexbox y CSS Grid con un elegante modo oscuro.</p>
        <img src={MerakiUI} alt=''/>
        <a href="https://merakiui.com/" class="btn" target="_blank" rel="noreferrer">VISITAR SITIO</a>
        
        <hr />
        <br/><br/><br/>
        <h3>Kitwind</h3>
        <p>Un mercado de kits de interfaz de usuario multipropósito totalmente receptivos, creados con Tailwind CSS, para empresas emergentes y productos de cualquier tipo.</p>
        <img src={Kitwind} alt=''/>
        <a href="https://kitwind.io/" class="btn" target="_blank" rel="noreferrer">VISITAR SITIO</a>

        <hr />
        <br/><br/><br/>
        <h3>Kutty</h3>
        <p>Kutty es un complemento para crear aplicaciones web. Tiene un conjunto de componentes accesibles y reutilizables que se usan comúnmente en aplicaciones web.</p>
        <img src={Kutty} alt=''/>
        <a href="https://kutty.netlify.app/components/" class="btn" target="_blank" rel="noreferrer">VISITAR SITIO</a>

        <hr />
        <br/><br/><br/>
        <h3>Wickedblocks</h3>
        <p>Una colección gratuita de bloques y componentes Tailwind. Más de 120 componentes y bloques totalmente receptivos que puede copiar y pegar en sus proyectos de Tailwind.</p>
        <img src={Wickedblocks} alt=''/>
        <a href="https://wickedblocks.dev/" class="btn" target="_blank" rel="noreferrer">VISITAR SITIO</a>

        <hr />
        <br/><br/><br/>
        <h3>Tails</h3>
        <p>Tails es un creador de páginas, un creador de sitios y una biblioteca de diseño que te ayuda a crear sitios web. Agregue varias páginas a su proyecto, incluida la configuración de página individual. Enlace entre páginas para crear un sitio web estático completamente funcional.</p>
        <img src={Tails} alt=''/>
        <a href="https://devdojo.com/tails/app" class="btn" target="_blank" rel="noreferrer">VISITAR SITIO</a>

        <hr />
        <br/><br/><br/>
        <h3>Treact</h3>
        <p>Páginas de destino prefabricadas. Personalizar o crear su propia página de destino personalizada es realmente simple mediante el uso de nuestros componentes de interfaz de usuario.</p>
        <img src={Treact} alt=''/>
        <a href="https://treact.owaiskhan.me/" class="btn" target="_blank" rel="noreferrer">VISITAR SITIO</a>

        <hr />
        <br/><br/><br/>
        <h3>Mamba UI</h3>
        <p>Mamba UI es una colección gratuita y de código abierto de componentes de interfaz de usuario y plantillas basadas en Tailwind CSS.</p>
        <img src={MambaUI} alt=''/>
        <a href="https://mambaui.com/" class="btn" target="_blank" rel="noreferrer">VISITAR SITIO</a>

        <hr />
        <br/><br/><br/>
        <div className='video'>
          <iframe className='' width="1360" height="480" src="https://www.youtube.com/embed/h5HQVHTpeHs" title="Aprendiendo Tailwind CSS desde Cero. ¡Estila más rápido! ⚡" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className='video'>
          <iframe width="1360" height="480" src="https://www.youtube.com/embed/kKQdMd2v5CA" title="🆕 Tailwind 3.0 ¡Descubre todas las novedades!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className='video'>
          <iframe width="1360" height="480" src="https://www.youtube.com/embed/mSC6GwizOag" title="What's new in Tailwind CSS v3.0?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className='video'>
          <iframe width="1360" height="480" src="https://www.youtube.com/embed/_oO4Qi5aVZs" title="Build and Deploy a Fully Responsive Website with Modern UI/UX in React JS with Tailwind" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className='video'>
          <iframe width="1360" height="480" src="https://www.youtube.com/embed/Vp6GC3jKG20" title="Build & Deploy a Personal Portfolio with TailwindCSS - 2022 Edition" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <br/><br/><br/>
        <br/><br/><br/>
        <h2>Templates:</h2>
        <img src={TailwindTemplate} alt=''/>
        <a href="https://tailwindui.com/templates" class="btn" target="_blank" rel="noreferrer">VISITAR SITIO</a>

        <hr />
        <br/><br/><br/>
        <img src={Template1} alt=''/>
        <div className='cta'>
          <a href="https://github.com/michelegera/tailwindcss-open-template/" class="btn" target="_blank" rel="noreferrer">REPOSITORIO</a>
          <a href="https://open.michelegera.dev/#" class="btn" target="_blank" rel="noreferrer">VISITAR SITIO</a>
        </div>
      </div>
      <aside className='recommended-articles'>
        {
          ArticleData.map(({categoryimg, category, image, title, date, url}) => {
            return (
              <Article key={url} categoryimg={categoryimg} category={category} image={image} title={title} date={date} url={url} />
            )
          })
        }
      </aside>
    </section>
  )
}

export default ColeccionRecursosTailwind