import React from 'react'
import Article from '../../../components/article/Article'
import Back from '../../../components/article/Back'
import BR from '../../../components/article/Br'
// import BR2 from '../../components/article/BrCode'

import TailwindDocumentation from '../../../assets/blog-assets/coleccion-recursos-tailwind/tailwind-documentation.webp'
import TailwindRefactorinUI from '../../../assets/blog-assets/coleccion-recursos-tailwind/refactoringui.webp'
import TailwindHeroIcons from '../../../assets/blog-assets/coleccion-recursos-tailwind/heroicons.webp'
import TailwindHeroPatterns from '../../../assets/blog-assets/coleccion-recursos-tailwind/heropatterns.webp'
import TailwindCSSCheatSheet from '../../../assets/blog-assets/coleccion-recursos-tailwind/tailwind-css-cheat-sheet.webp'
import TailwindIntellisense from '../../../assets/blog-assets/coleccion-recursos-tailwind/tailwind-intellisense.webp'
import TailwindExplorer from '../../../assets/blog-assets/coleccion-recursos-tailwind/tailwind-explorer.webp'
import TailwindPlay from '../../../assets/blog-assets/coleccion-recursos-tailwind/tailwind-play.webp'
import Hypercolor from '../../../assets/blog-assets/coleccion-recursos-tailwind/hypercolor.webp'
import TailwindUI from '../../../assets/blog-assets/coleccion-recursos-tailwind/tailwindui.webp'
import TailwindComponents from '../../../assets/blog-assets/coleccion-recursos-tailwind/tailwind-components.webp'
import HeadlessUI from '../../../assets/blog-assets/coleccion-recursos-tailwind/headlessui.webp'
import MerakiUI from '../../../assets/blog-assets/coleccion-recursos-tailwind/merakiui.webp'
import Kitwind from '../../../assets/blog-assets/coleccion-recursos-tailwind/kitwind.webp'
import Kutty from '../../../assets/blog-assets/coleccion-recursos-tailwind/kutty.webp'
import Wickedblocks from '../../../assets/blog-assets/coleccion-recursos-tailwind/wickedblocks.webp'
import Tails from '../../../assets/blog-assets/coleccion-recursos-tailwind/tails.webp'
import Treact from '../../../assets/blog-assets/coleccion-recursos-tailwind/treact.webp'
import MambaUI from '../../../assets/blog-assets/coleccion-recursos-tailwind/mambaui.webp'
import TailwindTemplate from '../../../assets/blog-assets/coleccion-recursos-tailwind/tailwind-template.webp'
import Template1 from '../../../assets/blog-assets/coleccion-recursos-tailwind/template1.webp'

// Article Image
// import XX  from '../../assets/blog-assets/'
// import XX  from '../../assets/blog-assets/'

// Recommended Article
const ArticleData = [

]

const ColeccionRecursosTailwind = () => {
  return (
    <section className='article-section'>
      <div className="article-container">
        <Back/>
        
<h1>Colección de recursos para Tailwind</h1>
<time dateTime='2022-09-07'>Septiembre 07, 2022</time>

<BR/><BR/>
<p>Tailwind CSS funciona escaneando todos sus archivos HTML, componentes de JavaScript y cualquier otra plantilla en busca de nombres de clase, generando los estilos correspondientes y luego escribiéndolos en un archivo CSS estático.</p>
<a href="https://tailwindcss.com/docs/installation" target="_blank" rel="noreferrer">
<img src={TailwindDocumentation} alt=''/></a>

<hr/><BR/>
<h2>Recursos:</h2>
<h3>Tailwind Refactorin UI</h3>
<p>Aprenda a diseñar interfaces de usuario usando tácticas específicas explicadas desde el punto de vista de un desarrollador.</p>
<a href="https://www.refactoringui.com/" target="_blank" rel="noreferrer">
<img src={TailwindRefactorinUI} alt=''/></a>

<hr/><BR/>
<h3>Tailwind Hero Icons</h3>
<p>Íconos SVG hechos a mano por los creadores de Tailwind CSS.</p>
<a href="https://heroicons.com/" target="_blank" rel="noreferrer">
<img src={TailwindHeroIcons} alt=''/></a>

<hr/><BR/>
<h3>Tailwind Hero Patterns</h3>
<p>Una colección de patrones de fondo SVG repetibles para que los use en sus proyectos web.</p>
<a href="https://heropatterns.com/" target="_blank" rel="noreferrer">
<img src={TailwindHeroPatterns} alt=''/></a>

<hr/><BR/>
<h3>Tailwind CSS Cheat Sheet</h3>
<p>Encuentre rápidamente todos los nombres de clases y propiedades CSS con esta hoja de trucos interactiva. ¡La única CheatSheet de Tailwind que necesitarás!</p>
<a href="https://tailwindcomponents.com/cheatsheet/" target="_blank" rel="noreferrer">
<img src={TailwindCSSCheatSheet} alt=''/></a>

<hr/><BR/>
<h3>Tailwind CSS IntelliSense</h3>
<p>Tailwind CSS IntelliSense mejora la experiencia de desarrollo de Tailwind al proporcionar a los usuarios de Visual Studio Code funciones avanzadas como autocompletar, resaltado de sintaxis y linting.</p>
<a href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss" target="_blank" rel="noreferrer">
<img src={TailwindIntellisense} alt=''/></a>

<hr/><BR/>
<h3>Tailwind CSS Explorer</h3>
<p>Extensión VSCode para Tailwind CSS: explore las clases disponibles en la configuración de Tailwind de su proyecto.</p>
<a href="https://marketplace.visualstudio.com/items?itemName=PeterMekhaeil.vscode-tailwindcss-explorer" target="_blank" rel="noreferrer">
<img src={TailwindExplorer} alt=''/></a>

<hr/><BR/>
<h3>Tailwind Play</h3>
<p>Un campo de juego en línea avanzado para Tailwind CSS que le permite usar todas las funciones de tiempo de compilación de Tailwind directamente en el navegador.</p>
<a href="https://play.tailwindcss.com/" target="_blank" rel="noreferrer">
<img src={TailwindPlay} alt=''/></a>
        
<hr/><BR/>
<h3>Hypercolor</h3>
<p>Una colección de degradados que utilizan la gama completa de colores CSS de Tailwind. Copie y pegue fácilmente los nombres de clase, CSS o incluso guarde los degradados como una imagen.</p>
<a href="https://hypercolor.dev/" target="_blank" rel="noreferrer">
<img src={Hypercolor} alt=''/></a>

<hr/><BR/>
<h2>Componentes:</h2>
<h3>Tailwind UI</h3>
<p>Plantillas y componentes diseñados y elaborados por expertos, creados por los creadores de Tailwind CSS. El punto de partida perfecto para su próximo proyecto.</p>
<a href="https://tailwindui.com/" target="_blank" rel="noreferrer">
<img src={TailwindUI} alt=''/></a>

<hr/><BR/>
<h3>Tailwind Components</h3>
<p>Repositorio gratuito de código abierto para la comunidad donde encontrarás plantillas y componentes de interfaz de usuario de Tailwind.</p>
<a href="https://tailwindcomponents.com/" target="_blank" rel="noreferrer">
<img src={TailwindComponents} alt=''/></a>

<hr/><BR/>
<h3>Headless UI</h3>
<p>Componentes de interfaz de usuario completamente accesibles y sin estilo, diseñados para integrarse a la perfección con Tailwind CSS.</p>
<a href="https://headlessui.com/" target="_blank" rel="noreferrer">
<img src={HeadlessUI} alt=''/></a>

<hr/><BR/>
<h3>Meraki UI</h3>
<p>Meraki UI son componentes Tailwind CSS que admiten lenguajes RTL y totalmente receptivos basados ​​en Flexbox y CSS Grid con un elegante modo oscuro.</p>
<a href="https://merakiui.com/" target="_blank" rel="noreferrer">
<img src={MerakiUI} alt=''/></a>

<hr/><BR/>
<h3>Kitwind</h3>
<p>Un mercado de kits de interfaz de usuario multipropósito totalmente receptivos, creados con Tailwind CSS, para empresas emergentes y productos de cualquier tipo.</p>
<a href="https://kitwind.io/" target="_blank" rel="noreferrer">
<img src={Kitwind} alt=''/></a>

<hr/><BR/>
<h3>Kutty</h3>
<p>Kutty es un complemento para crear aplicaciones web. Tiene un conjunto de componentes accesibles y reutilizables que se usan comúnmente en aplicaciones web.</p>
<a href="https://kutty.netlify.app/components/" target="_blank" rel="noreferrer">
<img src={Kutty} alt=''/></a>

<hr/><BR/>
<h3>Wickedblocks</h3>
<p>Una colección gratuita de bloques y componentes Tailwind. Más de 120 componentes y bloques totalmente receptivos que puede copiar y pegar en sus proyectos de Tailwind.</p>
<a href="https://wickedblocks.dev/" target="_blank" rel="noreferrer">
<img src={Wickedblocks} alt=''/></a>

<hr/><BR/>
<h3>Tails</h3>
<p>Tails es un creador de páginas, un creador de sitios y una biblioteca de diseño que te ayuda a crear sitios web. Agregue varias páginas a su proyecto, incluida la configuración de página individual. Enlace entre páginas para crear un sitio web estático completamente funcional.</p>
<a href="https://devdojo.com/tails/app" target="_blank" rel="noreferrer">
<img src={Tails} alt=''/></a>

<hr/><BR/>
<h3>Treact</h3>
<p>Páginas de destino prefabricadas. Personalizar o crear su propia página de destino personalizada es realmente simple mediante el uso de nuestros componentes de interfaz de usuario.</p>
<a href="https://treact.owaiskhan.me/" target="_blank" rel="noreferrer">
<img src={Treact} alt=''/></a>

<hr/><BR/>
<h3>Mamba UI</h3>
<p>Mamba UI es una colección gratuita y de código abierto de componentes de interfaz de usuario y plantillas basadas en Tailwind CSS.</p>
<a href="https://mambaui.com/" target="_blank" rel="noreferrer">
<img src={MambaUI} alt=''/></a>

<hr/><BR/>
<h2>Templates:</h2>
<a href="https://tailwindui.com/templates" target="_blank" rel="noreferrer">
<img src={TailwindTemplate} alt=''/></a>

<a href="https://open.michelegera.dev/#" target="_blank" rel="noreferrer">
<img src={Template1} alt=''/></a>
<BR/>

      </div>
      {/* <aside className='recommended-articles'>
        {
          ArticleData.map(({image, title, date, url}) => {
            return (
              <Article key={url} image={image} title={title} date={date} url={url} />
            )
          })
        }
      </aside> */}
    </section>
  )
}

export default ColeccionRecursosTailwind