import React from 'react'
import Article from '../../components/article/Article'
import Back from '../../components/article/Back'
import BR from '../../components/article/Br'
import BR2 from '../../components/article/BrCode'

// Lenguaje Icon
import { SiHtml5, SiCss3 } from 'react-icons/si'

// Article Image
// import XX  from '../../assets/blog-assets/'
// import XX  from '../../assets/blog-assets/'

// Recommended Article
const ArticleData = [

]

const EtiquetasHtmlEsenciales = () => {
  return (
    <section className='article-section'>
      <div className="article-container">
        <Back/>

<h1>Etiquetas HTML esenciales que debes conocer</h1>
<time dateTime='2022-07-25'>Julio 25, 2022</time>

<BR/><BR/>
<h2>¿Qué es HTML?</h2>
<p><strong>HTML</strong> es un lenguaje de marcado que define la estructura del contenido de un sitio web. Consiste en una serie de elementos que son utilizados para encerrar diferentes partes del contenido con el objetivo de que se vean o se comporten de una cierta manera. Generalmente se utilizan otras tecnologías como (CSS) para la apariencia de un sitio web o (JavaScript) para funcionalidad/comportamiento.</p>

<BR/>
<h2>¿Qué son las etiquetas HTML?</h2>
<p>Cuando escribes código en HTML, estás escribiendo <strong>etiquetas HTML.</strong></p>
<p>Todas las etiquetas HTML están hechas con un número de partes específicas, incluyendo:</p>
<ul>
  <li>El carácter 'menor que': <strong>{'<'}</strong></li>
  <li>Una palabra o carácter que determina qué etiqueta se está escribiendo</li>
  <li>Cualquier número de atributos HTML que se quiera usar: <strong>nombre='valor'</strong></li>
  <li>El carácter 'mayor que': <strong>{'>'}</strong></li>
</ul>
<pre><div className='lenguaje'><SiHtml5 /></div><code>
{
`<h1 class='title'>Lorem ipsum</h1>`
}
</code></pre>

<br/><br/><br/>
<h2>¿Cuáles son las etiquetas HTML básicas?</h2>
<h4>{`<head>`}</h4>
<p>La etiqueta {`<head>`} es fundamental en la estructura del documento <strong>HTML.</strong> Es una sección informativa que el navegador no le muestra al usuario.</p>
<p>Los elementos que podemos encontrar en esta sección incluyen el {`<title>`}, las etiquetas meta {`<meta>`} que describen el documento y referencias a scripts, estilos como {`<style>`}, {`<script>`}, {`<link>`}.</p>

<BR/><hr/><BR/>
<h4>{`<body>`}</h4>
<p>La etiqueta {`<body>`} hace referencia al cuerpo del contenido de un documento HTML. Es una etiqueta esencial, ya que indica donde empieza el contenido visible para el usuario.</p>

<BR/><hr/><BR/>
<h4>{`<div>`}</h4>
<p>La etiqueta {`<div>`} nos permite definir un bloque o división de contenido y se utiliza para componer elementos (párrafos, encabezados, listas, tablas, divisiones, etc).</p>

<BR/><hr/><BR/>
<h4>{`<H1> </H1> ... <H6> </H6>`}</h4>
<p>Los encabezados HTML son etiquetas que se utilizan para definir títulos y subtítulos para estructurar el contenido, la etiqueta {`<h1>`} es el más relevante y la etiqueta {`<h6>`} la menos relevante, de esta manera ayudamos al navegador a entender la importancia de nuestro contenido.</p>

<BR/><hr/><BR/>
<h4>{`<p>`}</h4>
<p>La etiqueta {`<p>`} nos sirve para agrupar texto dentro de un párrafo. El propósito es poder hacer el contenido más fácil de leer y organizado.</p>

<BR/><hr/><BR/>
<h4>{`<a>`}</h4>
<p>La etiqueta {`<a>`} nos permite realizar enlaces hacia documentos externos, como otros sitios web, direcciones de correo o cualquier otra URL a través del atributo <strong>href</strong> donde indicaremos el enlace al que queremos conectar y con el atributo <strong>target</strong> podemos indicar que el enlace se abra en una nueva ventana. También nos permite enlazarnos hacia alguna parte específica del mismo documento.</p>
<pre><div className='lenguaje'><SiHtml5 /></div><code>
{
`<a href='https://www.google.com/' target='_blank'>Enlace a Google</a>`
}
</code></pre>

<BR/><hr/><BR/>
<h4>{`<ol> <ul> <li>`}</h4>
<p>Las etiqueta {`<ol> y <ul>`} sirven para crear listas, {`<ol>`} para listas ordenadas y {`<ul>`} para listas desordenas. Dentro de las listas, los elementos se identifican con la etiqueta {`<li>`}.</p>
<pre>
<div className='lenguaje'><SiHtml5 /></div><code>
{
`<ul>
<li>Primer elemento</li>   
<li>Segundo elemento</li>          
<ul>`
}
</code></pre>

<BR/><hr/><BR/>
<h4>{`<strong>`}</h4>
<p>La etiqueta {`<strong>`} se utiliza para definir dentro del documento, texto que es considerado importante. Esto produce en el navegador el efecto de aplicar negrita para dar énfasis.</p>

<BR/><hr/><BR/>
<h4>{`<br>`}</h4>
<p>La etiqueta {`<br>`} nos permite realizar un salto de línea. Nos sirve para hacer el texto más leíble.</p>
<p>Al igual que otros elementos, esta etiqueta no tiene contenido y por lo tanto, no utiliza etiqueta de cierre, por lo que se le coloca la barra al final de la misma {`<br/>`}.</p>

<BR/><hr/><BR/>
<h4>{`<img>`}</h4>
<p>La etiqueta {`<img>`} nos permite mostrar imágenes dentro del contenido. Indicaremos mediante el atributo <strong>src</strong> la ruta de la imagen. Siendo un elemento vacío, no necesita de una etiqueta de cierre.</p>
<pre><div className='lenguaje'><SiHtml5 /></div><code>
{
`<img src=''>`
}
</code></pre>

<BR/><hr/><BR/>
<h4>{`<span>`}</h4>
<p>La etiqueta {`<span>`} nos permite personalizar el estilo de la parte del texto encerrado.</p>
<pre>
<div className='lenguaje'><SiHtml5 /></div><code>
{`<p>Lorem <span>ipsum</span></p>`}
</code></pre>
<pre><div className='lenguaje'><SiCss3 /></div><code>
{
`span {
color: red;
}`
}
</code></pre>

<BR2/><hr /><BR/>
<p><a href="https://developer.mozilla.org/es/docs/Web/HTML/Element" target='_blank' rel='noreferrer'>Aprende más en este artículo</a></p>
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

export default EtiquetasHtmlEsenciales