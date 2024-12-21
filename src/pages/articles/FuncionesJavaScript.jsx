import React from 'react'
import Article from '../../components/article/Article'
import Back from '../../components/article/Back'
import BR from '../../components/article/Br'
import BR2 from '../../components/article/BrCode'

// Lenguaje Icon
import { SiJavascript } from 'react-icons/si'

// Article Image
import MetodosJS from '../../assets/blog-assets/ejemplos-metodos-js.webp'
// import XX  from '../../assets/blog-assets/'

// Recommended Article
const ArticleData = [
{
  category: 'JavaScript',
  image: MetodosJS,
  title: 'Métodos de un array en JavaScript',
  date:'Noviembre 21, 2022',
  url: 'MetodosArrayJavaScript',
},
]

const FuncionesJavaScript = () => {
  return (
  <section className='article-section'>
    <div className="article-container">
      <Back/>

<h1>4 Formas de escribir una función en JavaScript</h1>
<time dateTime='2022-11-20'>Noviembre 20, 2022</time>

<BR/><BR/>
<p>En programación, cuando nuestro código se va haciendo cada vez más grande, necesitaremos buscar una forma de organizarlo y prepararnos para reutilizarlo y no repetir innecesariamente las mismas tareas. Para eso, un recurso muy útil son las funciones.</p>

<BR/>
<h2>¿Qué es una función?</h2>
<p>Las funciones nos permiten agrupar líneas de código como tarea con una nombre, para que, posteriormente, podamos hacer referencia a ese nombre para realizar todo lo que se agrupe en dicha tarea.</p>

<BR/>
<h3>Función declarada</h3>
<p>Es la forma más popular de escribir una función y a la que estaremos más acostumbrados, ya que son iguales a las que usamos en otros lenguajes de programación.</p>
<pre><div className='lenguaje'><SiJavascript /></div><code>
{
`function sumar (n1, n2) {
	return n1 + n2;
}`
}
</code></pre>

<BR/>
<h3>Función expresada</h3>
<p>Esta forma consiste  en guardar funciones dentro de variables para posteriormente ejecutar la variable que la contiene.</p>
<pre>
<div className='lenguaje'><SiJavascript /></div><code>
{
`const sumar = function (n1, n2) {
	return n1 + n2;
}`
}
</code></pre>
        
<BR/>
<h3>Arrow function</h3>
<p>Son una alternativa más simple que las funciones tradicionales. Además de tener diferentes comportamientos en diferentes situaciones. La sintaxis varía dependiendo de lo que haga la función o los datos que obtiene.</p>
<h4>Sintaxis:</h4>
<p>Se elimina la palabra <span className='marked'>function</span> y se le agrega una flecha <span className='marked'>{'=>'}</span> entre el argumento y el corchete.</p>
<pre><div className='lenguaje'><SiJavascript /></div><code>
<span className='comment'>{'//'} Functión tradicional</span>
{`
function (a) {
	return a + 2;
}`
}
<BR2/>
<span className='comment'>{'//'} Arrow function</span>
{`
(a) => {
	return a + 2;
}
`}
</code></pre>
        
<BR/>
<h3>Arrow function <span>Expresión</span></h3>
<pre><div className='lenguaje'><SiJavascript /></div><code>
{
`const sumar = (n1, n2) => {
	return n1 + n2;
}`
}
</code></pre>
        
<BR/>
<h3>Arrow function <span>Retorno implícito</span></h3>
<pre><div className='lenguaje'><SiJavascript /></div><code>
{
`const sumar = (n1, n2) => n1 + n2;`
}
</code></pre>
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
export default FuncionesJavaScript