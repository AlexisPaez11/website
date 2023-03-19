import React from 'react'
// import { NavLink } from "react-router-dom";
import Article from '../../components/article/Article'
import Back from '../../components/article/Back'
import BR from '../../components/article/Br'
import BR2 from '../../components/article/BrCode'

// Lenguaje Icon
import { SiJavascript } from 'react-icons/si'

// Article Image
import FuncionesJS from '../../assets/blog-assets/funciones-js.webp'
// import XX  from '../../assets/blog-assets/'

// Recommended Article
const ArticleData = [
{
  category: 'JavaScript',
  image: FuncionesJS,
  title: '4 Formas de escribir una función en JavaScript',
  date:'Noviembre 20, 2022',
  url: 'FuncionesJavaScript',
},
]

const MetodosArrayJavaScript = () => {
  return (
  <section className='article-section'>
    <div className="article-container">
      <Back/>
      
<h1>Métodos de un array en JavaScript</h1>
<time dateTime='2022-11-21'>Noviembre 21, 2022</time>

<BR/><BR/>
<p>JavaScript nos proporciona una serie de funciones predefinidas para el manejo de arrays.</p>

<BR/>
<h2>¿Qué son los Arrays?</h2>
<p>Es un conjunto de datos ordenados por posiciones y todos asociados en una sola variable. Los datos pueden ser de cualquier tipo de dato como, por ejemplo, una cadena de texto, un número o un objeto. Se podrá acceder a estos datos de manera independiente o agrupándolos.</p>
<p>Estos son algunos de los métodos más conocidos:</p>

<BR/>
<h3>.map()</h3>
<p>Permite recorrer el array y modificar los elementos presentes en él, retornando un nuevo array con la misma longitud que él original.</p>
<pre><div className='lenguaje'><SiJavascript /></div><code>
{
`const array = [1, 2, 3, 4, 5, 6, 7]
const resultArray = array.map(element => element + 10)`
}
<BR2/>
<span className='comment'>console.log(resultArray) // [11, 12, 13, 14, 15, 16, 17]</span>
</code></pre>

<BR/>
<h3>.filter()</h3>
<p>Recorre el array y retorna un nuevo array con aquellos elementos que pasen una determinada condición.</p>
<pre><div className='lenguaje'><SiJavascript /></div><code>
{
`const array = [1, 2, 3, 4, 5, 6, 7]
const resultArray = array.filter(element => element === 3 || element === 7)`
}
<BR2/>
<span className='comment'>console.log(resultArray) // [3, 7]</span>
</code></pre>

<BR/>
<h3>.find()</h3>
<p>Recorre el array y retorna la primera coincidencia del elemento que se busca.</p>
<pre><div className='lenguaje'><SiJavascript /></div><code>
{
`const array = [1, 2, 3, 4, 5, 6, 7]
const resultArray = array.find(element => element > 3)`
}
<BR2/>
<span className='comment'>console.log(resultArray) // 4</span>
</code></pre>

<BR/>
<h3>.sort()</h3>
<p>Ordena los elementos del array y retorna el arreglo ordenado.</p>
<pre><div className='lenguaje'><SiJavascript /></div><code>
{
`const array = [3, 2, 4, 6, 7, 1, 5]`
}
<BR2/>
<span className='comment'>{'//'} Ordenado en forma ascendente</span>
{`
const ascArray = array.sort((a, b) => a > b ? -1 : 1)
`}
<span className='comment'>console.log(ascArray) // [1, 2, 3, 4, 5, 6, 7]</span>
<BR2/>
<span className='comment'>{'//'} Ordenado en forma descendente</span>
{`
const descArray = array.sort((a, b) => a > b ? 1 : -1)
`}
<span className='comment'>console.log(descArray) // [7, 6, 5, 4, 3, 2, 1]</span>
</code></pre>

<BR/>
<h3>.some()</h3>
<p>Itera el array y retorna un booleano si como mínimo uno de los elementos presentes en el array pasa una condición determinada. Recibe un callback que se encargara de preguntar aquello que queremos dentro del array.</p>
<pre><div className='lenguaje'><SiJavascript /></div><code>
{
`const array = [3, 4, 5, 6, 7]`
}
<BR2/>
<span className='comment'>{'//'} Los elementos son mayores que 5</span>
{`
const greaterThanFive = array.some(element => element > 5)
`}
<span className='comment'>console.log(greaterThanFive) // true</span>
<BR2/>
<span className='comment'>{'//'} Los elementos son menores que 2</span>
{`
const lessThanTwo = array.some(element => element < 2)
`}
<span className='comment'>console.log(lessThanTwo) // false</span>
</code></pre>

<BR/>
<h3>.every()</h3>
<p>Es similar al some(), ya que itera el array y retorna un booleano. Pero esta vez, para que dicho booleano sea true todos los elementos del array deberán pasar la condición dada.</p>
<pre><div className='lenguaje'><SiJavascript /></div><code>
{
`const array = [3, 4, 5, 6, 7]`
}
<BR2/>
<span className='comment'>{'//'} Los elementos son mayores que 5</span>
{`
const greaterThanFive = array.every(element => element > 5)
`}
<span className='comment'>console.log(greaterThanFive) // false</span>
</code></pre>

<BR/>
<h3>.concat()</h3>
<p>Se utiliza para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.</p>
<pre><div className='lenguaje'><SiJavascript /></div><code>
{
`const array1 = ['1', '2', '3']
const array2 = ['4', '5', '6']

const resultArray = array1.concat(array2)`
}
<BR2/>
<span className='comment'>console.log(resultArray) // ['1', '2', '3', '4', '5', '6']</span>
</code></pre>

<BR/>
<h3>.includes()</h3>
<p>Determina si un array incluye un determinado elemento y retorna un booleano según corresponda.</p>
<pre><div className='lenguaje'><SiJavascript /></div><code>
{
`const array = [1, 2, 3, 4, 5, 6, 7]`
}
<BR2/>
<span className='comment'>console.log(array.includes(2)) // true</span>
<br/>
<span className='comment'>console.log(array.includes(8)) // false</span>



</code></pre>

<BR/>
<h3>.indexOf()</h3>
<p>Retorna el primer índice en el que se puede encontrar un elemento dado en el array, o retorna -1 si el elemento no está presente.</p>
<pre><div className='lenguaje'><SiJavascript /></div><code>
{
`const array = ['martina', 'alexis', 'gonzalo']
const resultArray = array.indexOf('alexis')`
}
<BR2/>
<span className='comment'>console.log(resultArray) // 1</span>
</code></pre>

<BR/>
<h3>fill()</h3>
<p>Cambia todos los elementos de un array por un valor estático, desde el índice de inicio hasta él índice final. Retorna el array modificado.</p>
<pre><div className='lenguaje'><SiJavascript /></div><code>
{
`const array = [1, 2, 3, 4, 5, 6, 7]`
}
<BR2/>
<span className='comment'>{'//'} llenar con 0 desde la posicion 3</span>
<br/>
<span className='comment'>console.log(array.fill(0, 3)) // [1, 2, 3, 0, 0, 0, 0]</span>
<BR2/>
<span className='comment'>{'//'} llenar con 0 desde la posicion 3 hasta la 6</span>
<br/>
<span className='comment'>console.log(array.fill(10, 4, 6)) // [1, 2, 3, 0, 10, 10, 0]</span>
</code></pre>

<BR/>
<h3>push()</h3>
<p>Añade uno o más elementos al final de un array y devuelve la nueva longitud del array.</p>
<pre><div className='lenguaje'><SiJavascript /></div><code>
{
`const array = ['banana', 'naranja']`
}
<BR2/>
<span className='comment'>console.log(array.push('manzana')) // 3</span>
<br/>
<span className='comment'>console.log(array) // ['banana', 'naranja', 'manzana']</span>
</code></pre>

<BR/>
<h3>pop()</h3>
<p>Elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.</p>
<pre><div className='lenguaje'><SiJavascript /></div><code>
{
`const array = ['banana', 'naranja', 'manzana']
array.pop()`
}
<BR2/>
<span className='comment'>console.log(array) // ['banana', 'naranja']</span>
</code></pre>

<BR/>
<h3>shift()</h3>
<p>Elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.</p>
<pre><div className='lenguaje'><SiJavascript /></div><code>
{
`const array = ['banana', 'naranja', 'manzana']
array.shift()`
}
<BR2/>
<span className='comment'>console.log(array) // ['naranja', 'manzana']</span>
</code></pre>

<BR/>
<h3>unshift()</h3>
<p>Agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.</p>
<pre><div className='lenguaje'><SiJavascript /></div><code>
{
`const array = ['naranja', 'manzana']`
}
<BR2/>
<span className='comment'>console.log(array.unshift('banana')) // 3</span>
<br/>
<span className='comment'>console.log(array) // ['banana', 'naranja', 'manzana']</span>
</code></pre>

<BR/>
<h3>slice()</h3>
<p>Devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.</p>
<pre><div className='lenguaje'><SiJavascript /></div><code>
{
`const array = [1, 2, 3, 4, 5, 6, 7]
const resultArray = array.slice(2, 4)`
}
<BR2/>
<span className='comment'>console.log(resultArray) // [3, 4]</span>
</code></pre>

<BR/>
<h3>reverse()</h3>
<p>Invierte el orden de los elementos de un array. El primer elemento pasa a ser el último y el último pasa a ser el primero.</p>
<pre><div className='lenguaje'><SiJavascript /></div><code>
{
`const array = [1, 2, 3, 4, 5, 6, 7]`
}
<BR2/>
<span className='comment'>console.log(array.reverse()) // [7, 6, 5, 4, 3, 2, 1]</span>
</code></pre>

<BR/>
<h3>splice()</h3>
<p>Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.</p>
<pre><div className='lenguaje'><SiJavascript /></div><code>
{
`const array = ['banana', 'naranja', 'manzana']
array.splice(1, 0, 'frutilla')`
}
<BR2/>
<span className='comment'>console.log(array) // ['banana', 'frutilla', 'naranja', 'manzana']</span>
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

export default MetodosArrayJavaScript