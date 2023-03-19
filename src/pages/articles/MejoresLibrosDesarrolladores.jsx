import React from 'react'
import Article from '../../components/article/Article'
import Back from '../../components/article/Back'
import BR from '../../components/article/Br'
// import BR2 from '../../components/article/BrCode'

import AprendiendoGIT from '../../assets/blog-assets/libros-desarrolladores/aprendiendo-git.webp'
import ThePragmaticProgrammer from '../../assets/blog-assets/libros-desarrolladores/the-pragmatic-programmer.webp'
import CleanCode from '../../assets/blog-assets/libros-desarrolladores/clean-code.webp'
import TheCleanCoder from '../../assets/blog-assets/libros-desarrolladores/the-clean-coder.webp'
import HtmlCssJavaScript from '../../assets/blog-assets/libros-desarrolladores/el-gran-libro-html5-css-javascript.webp'
import IntroductionAlgorithms from '../../assets/blog-assets/libros-desarrolladores/introduction-algoritmhs.webp'

// Article Image
// import XX  from '../../assets/blog-assets/'
// import XX  from '../../assets/blog-assets/'

// Recommended Article
const ArticleData = [

]

const MejoresLibrosDesarrolladores = () => {
  return (
    <section className='article-section'>
      <div className="article-container">
        <Back/>

<h1>Mejores libros para desarrolladores</h1>
<time dateTime='2022-09-06'>Septiembre 06, 2022</time>

<BR/><BR/>
<div className='book'>
  <img src={AprendiendoGIT} alt='Imagen del libro Aprendiendo GIT'/>
</div>
<h3>Aprendiendo GIT <span>· Miguel Ángel Durán</span></h3>
<p>Según la encuesta de Stack Overflow de 2018, casi el 90% de los desarrolladores usaban Git para manejar su código fuente.</p>
<p>Este libro te explica los orígenes de Git y por qué ahora lo usa todo el mundo. ¿De dónde nació? ¿Quién lo creó? Además, te explica todos sus fundamentos para que entiendas qué es lo que esconden todos los comando que utilizas en tu día a día.</p>
<p>Aprenderas a instalar y configurar Git, cómo puedes trabajar en Git de forma local y remota y qué diferencias existe entre ambos. También aprenderas algunas buenas prácticas, cómo usar los alias, los hooks, trucos imprescindibles y muchas cosas más.</p>

<BR/><hr /><BR/>
<div className='book'>
  <img src={ThePragmaticProgrammer} alt='Imagen del libro The Pragmatic Programmer'/>
</div>
<h3>The Pragmatic Programmer <span>· Andrew Hunt y David Thomas</span></h3>
<p>Este es uno de los dos o tres libros de programación más recomendados para cualquier aspirante a desarrollador.</p>
<p>La última edición publicada en 2019 es un manual y guía de programación para desarrolladores modernos. Los autores explican cómo llevar a cabo un proceso de desarrollo de software práctico y efectivo. No solo brindan consejos sobre la escritura de código flexible y limpio, sino también recomendaciones para el desarrollo de una carrera profesional en el mundo del software. Esta es una lista con algunos de los aportes de este libro de programación para empezar a programar desde hoy:</p>
<ul>
  <li>Testear el código constantemente.</li>
  <li>Determinar cuáles son los requerimientos reales para el código a escribir.</li>
  <li>Escribir código dinámico en la medida de lo posible.</li>
  <li>Usar herramientas de automatización para hacer el código más efectivo.</li>
  <li>Experimentar a partir de suposiciones y excepciones sobre el código propuesto.</li>
</ul>

<BR/><hr /><BR/>
<div className='book'>
  <img src={IntroductionAlgorithms} alt='Imagen del libro Introduction to Algorithms'/>
</div>
<h3>Introduction to Algorithms <span>· Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest y Clifford Stein.</span></h3>
<p>Este libro se centra en la esencia del desarrollo de software: la creación de algoritmos.</p>
<p>Se trata de un manual de estudio con información completa y rigurosa sobre diseño y análisis de algoritmos y estructuras de datos avanzadas. Además incluye multitud de ejercicios para comprobar los conocimientos adquiridos. En Github puedes encontrar un repositorio de soluciones.</p>

<BR/><hr /><BR/>
<div className='book'>
  <img src={CleanCode} alt='Imagen del libro Clean Code'/>
</div>
<h3>Clean Code <span>· Robert C. Martin</span></h3>
<p>Este es un libro que explica las técnicas y metodologías ágiles para escribir un buen código eficiente y mantenible. De esta forma aumentará la productividad, disminuirá la deuda técnica y conseguiremos productos de software con mayor calidad. Incluye ejemplos y ejercicios para poner en práctica los consejos y patrones que se explican. Es uno de estos libros que se deberían leer periódicamente para refrescar todos los conceptos.</p>

<BR/><hr /><BR/>
<div className='book'>
  <img src={TheCleanCoder} alt='Imagen del libro The Clean Coder'/>
</div>
<h3>The Clean Coder <span>· Robert C. Martin</span></h3>
<p>Este libro se enfoca en el negocio de la programación y en las habilidades blandas necesarias para tener éxito en la industria. Con este libro aprenderás buenas practicas de desarrollo, presupuestar proyectos, calcular el tiempo necesario para completarlos y administrar plazos de entrega.</p>
<p>Siguiendo la linea del libro anterior de la lista, el tío Bob utiliza su experiencia para enseñar los valores que todos los desarrolladores de software deberían tener, sumado a las reglas y los códigos de conducta a seguir. También explica las mejores formas de administrar tu tiempo, de gestionar clientes y de evitar el agotamiento. Este libro es perfecto para los que quieren avanzar en sus carreras y convertirse en programadores de excelencia.</p>

<BR/><hr /><BR/>
<div className='book'>
  <img src={HtmlCssJavaScript} alt='Imagen del libro The Clean Coder'/>
</div>
<h3>El gran libro de HTML5, CSS3 y JavaScript <span>· Juan Diego Gauchat</span></h3>
<p>JavaScript, HTML y CSS son, con gran diferencia sobre el resto, los tres lenguajes de programación más usados por desarrolladores en todo el mundo. Es por eso que, si estás iniciando tu camino en el mundo del desarrollo web, este libro de programación para principiantes te enseñará los principios básicos para construir sitios web.</p>
<p>Fue escrito por Juan Diego Gauchat y tiene una tercera edición publicada en 2017. Lo más resaltante de este libro de programación es que empieza por explicar la terminología básica como URLs, hipervínculos y dominios. Luego pasa a detallar la teoría y práctica de los tres lenguajes. Al final, se detiene en temas de programación avanzados, como la relación con el diseño web y las API.</p>
<BR/>

    </div>
    <aside className='recommended-articles'>
      {
        ArticleData.map(({image, title, date, url}) => {
          return (
            <Article key={url} image={image} title={title} date={date} url={url} />
          )
        })
      }
    </aside>
  </section>
  )
}

export default MejoresLibrosDesarrolladores