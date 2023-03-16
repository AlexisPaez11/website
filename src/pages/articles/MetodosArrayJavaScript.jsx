import React from 'react'
import Article from '../../components/article/Article'
import ReactMarkdown from 'react-markdown'
import Back from '../../components/article/Back'

// Lenguaje Icon
import { SiJavascript } from 'react-icons/si'

// Article Image
// import XX from '../../assets/blog-assets/'
// import XX  from '../../assets/blog-assets/'

// Recommended Article
const ArticleData = [

]

const MetodosArrayJavaScript = () => {
  return (
  <section className='article-section'>
    <div className="article-container">
      <Back/>
<ReactMarkdown>
  # Métodos de un array en JavaScript
</ReactMarkdown>
<ReactMarkdown>
  Noviembre 21, 2022
</ReactMarkdown>

<br /><br /><br />
<ReactMarkdown>
JavaScript nos proporciona una serie de funciones predefinidas para el manejo de arrays.
</ReactMarkdown>

<br /><br /><br />
<ReactMarkdown>
## ¿Qué son los Arrays?
</ReactMarkdown>
<ReactMarkdown>
Es un conjunto de datos ordenados por posiciones y todos asociados en una sola variable. Los datos pueden ser de cualquier tipo de dato como, por ejemplo, una cadena de texto, un número o un objeto. Se podrá acceder a estos datos de manera independiente o agrupándolos.
</ReactMarkdown>
<ReactMarkdown>
Estos son algunos de los métodos más conocidos:
</ReactMarkdown>

<br /><br /><br />
<ReactMarkdown>
### .map()
</ReactMarkdown>
<ReactMarkdown>
Permite recorrer el array y modificar los elementos presentes en él, retornando un nuevo array con la misma longitud que él original.
</ReactMarkdown>
<pre>
<div className='lenguaje'><SiJavascript /></div>
<code>
{`const array = [3, 4, 5, 6, 7]

// Los elementos son mayores que 5
const greaterThanFive = array.every(element => element > 5)
console.log(greaterThanFive) // false
`}
</code>
</pre>

<br /><br /><br />
<ReactMarkdown>
### .filter()
</ReactMarkdown>
<ReactMarkdown>
Recorre el array y retorna un nuevo array con aquellos elementos que pasen una determinada condición.
</ReactMarkdown>
<pre>
<div className='lenguaje'><SiJavascript /></div>
<code>
{`const array = [1, 2, 3, 4, 5, 6, 7]
const resultArray = array.filter(element => element === 3 || element === 7)

console.log(resultArray) // [3, 7]
`}
</code>
</pre>

<br /><br /><br />
<ReactMarkdown>
### .find()
</ReactMarkdown>
<ReactMarkdown>
Recorre el array y retorna la primera coincidencia del elemento que se busca.
</ReactMarkdown>
<pre>
<div className='lenguaje'><SiJavascript /></div>
<code>
{`const array = [1, 2, 3, 4, 5, 6, 7]
const resultArray = array.find(element => element > 3)

console.log(resultArray) // 4
`}
</code>
</pre>

<br /><br /><br />
<ReactMarkdown>
### .sort()
</ReactMarkdown>
<ReactMarkdown>
Ordena los elementos del array y retorna el arreglo ordenado.
</ReactMarkdown>
<pre>
<div className='lenguaje'><SiJavascript /></div>
<code>
{`const array = [3, 2, 4, 6, 7, 1, 5]

// Ordenado en forma ascendente
const ascArray = array.sort((a, b) => a > b ? -1 : 1)
console.log(ascArray) // [1, 2, 3, 4, 5, 6, 7]

// Ordenado en forma descendente
const descArray = array.sort((a, b) => a > b ? 1 : -1)
console.log(descArray) // [7, 6, 5, 4, 3, 2, 1]
`}
</code>
</pre>

<br /><br /><br />
<ReactMarkdown>
### .some()
</ReactMarkdown>
<ReactMarkdown>
Itera el array y retorna un booleano si como mínimo uno de los elementos presentes en el array pasa una condición determinada. Recibe un callback que se encargara de preguntar aquello que queremos dentro del array.
</ReactMarkdown>
<pre>
<div className='lenguaje'><SiJavascript /></div>
<code>
{`const array = [3, 4, 5, 6, 7]

// Los elementos son mayores que 5
const greaterThanFive = array.some(element => element > 5)
console.log(greaterThanFive) // true

// Los elementos son menores que 2
const lessThanTwo = array.some(element => element < 2)
console.log(lessThanTwo) // false
`}
</code>
</pre>

<br /><br /><br />
<ReactMarkdown>
### .every()
</ReactMarkdown>
<ReactMarkdown>
Es similar al some(), ya que itera el array y retorna un booleano. Pero esta vez, para que dicho booleano sea true todos los elementos del array deberán pasar la condición dada.
</ReactMarkdown>
<pre>
<div className='lenguaje'><SiJavascript /></div>
<code>
{`const array = [3, 4, 5, 6, 7]

// Los elementos son mayores que 5
const greaterThanFive = array.every(element => element > 5)
console.log(greaterThanFive) // false
`}
</code>
</pre>

<br /><br /><br />
<ReactMarkdown>
### .concat()
</ReactMarkdown>
<ReactMarkdown>
Se utiliza para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.
</ReactMarkdown>
<pre>
<div className='lenguaje'><SiJavascript /></div>
<code>
{`const array1 = ['1', '2', '3']
const array2 = ['4', '5', '6']

const resultArray = array1.concat(array2)
console.log(resultArray) // ['1', '2', '3', '4', '5', '6']
`}
</code>
</pre>

<br /><br /><br />
<ReactMarkdown>
### .includes()
</ReactMarkdown>
<ReactMarkdown>
Determina si un array incluye un determinado elemento y retorna un booleano según corresponda.
</ReactMarkdown>
<pre>
<div className='lenguaje'><SiJavascript /></div>
<code>
{`const array = [1, 2, 3, 4, 5, 6, 7]

console.log(array.includes(2)) // true
console.log(array.includes(8)) // false
`}
</code>
</pre>

<br /><br /><br />
<ReactMarkdown>
### .indexOf()
</ReactMarkdown>
<ReactMarkdown>
Retorna el primer índice en el que se puede encontrar un elemento dado en el array, o retorna -1 si el elemento no está presente.
</ReactMarkdown>
<pre>
<div className='lenguaje'><SiJavascript /></div>
<code>
{`const array = ['martina', 'alexis', 'gonzalo']
const resultArray = array.indexOf('alexis')

console.log(resultArray) // 1
`}
</code>
</pre>

<br /><br /><br />
<ReactMarkdown>
### fill()
</ReactMarkdown>
<ReactMarkdown>
Cambia todos los elementos de un array por un valor estático, desde el índice de inicio hasta él índice final. Retorna el array modificado.
</ReactMarkdown>
<pre>
<div className='lenguaje'><SiJavascript /></div>
<code>
{`const array = [1, 2, 3, 4, 5, 6, 7]

//llenar con 0 desde la posicion 3
console.log(array.fill(0, 3)) // [1, 2, 3, 0, 0, 0, 0]

// llenar con 0 desde la posicion 3 hasta la 6
console.log(array.fill(10, 4, 6)) // [1, 2, 3, 0, 10, 10, 0]
`}
</code>
</pre>

<br /><br /><br />
<ReactMarkdown>
### push()
</ReactMarkdown>
<ReactMarkdown>
Añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
</ReactMarkdown>
<pre>
<div className='lenguaje'><SiJavascript /></div>
<code>
{`const array = ['banana', 'naranja']

console.log(array.push('manzana')) // 3
console.log(array) // ['banana', 'naranja', 'manzana']
`}
</code>
</pre>

<br /><br /><br />
<ReactMarkdown>
### pop()
</ReactMarkdown>
<ReactMarkdown>
Elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.
</ReactMarkdown>
<pre>
<div className='lenguaje'><SiJavascript /></div>
<code>
{`const array = ['banana', 'naranja', 'manzana']
array.pop()

console.log(array) // ['banana', 'naranja']
`}
</code>
</pre>

<br /><br /><br />
<ReactMarkdown>
### shift()
</ReactMarkdown>
<ReactMarkdown>
Elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.
</ReactMarkdown>
<pre>
<div className='lenguaje'><SiJavascript /></div>
<code>
{`const array = ['banana', 'naranja', 'manzana']
array.shift()

console.log(array) // ['naranja', 'manzana']
`}
</code>
</pre>

<br /><br /><br />
<ReactMarkdown>
### unshift()
</ReactMarkdown>
<ReactMarkdown>
Agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.
</ReactMarkdown>
<pre>
<div className='lenguaje'><SiJavascript /></div>
<code>
{`const array = ['naranja', 'manzana']

console.log(array.unshift('banana')) // 3
console.log(array) // ['banana', 'naranja', 'manzana']
`}
</code>
</pre>

<br /><br /><br />
<ReactMarkdown>
### slice()
</ReactMarkdown>
<ReactMarkdown>
Devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.
</ReactMarkdown>
<pre>
<div className='lenguaje'><SiJavascript /></div>
<code>
{`const array = [1, 2, 3, 4, 5, 6, 7]
const resultArray = array.slice(2, 4)

console.log(resultArray) // [3, 4]
`}
</code>
</pre>

<br /><br /><br />
<ReactMarkdown>
### reverse()
</ReactMarkdown>
<ReactMarkdown>
Invierte el orden de los elementos de un array. El primer elemento pasa a ser el último y el último pasa a ser el primero.
</ReactMarkdown>
<pre>
<div className='lenguaje'><SiJavascript /></div>
<code>
{`const array = [1, 2, 3, 4, 5, 6, 7]
console.log(array.reverse()) // [7, 6, 5, 4, 3, 2, 1]
`}
</code>
</pre>

<br /><br /><br />
<ReactMarkdown>
### splice()
</ReactMarkdown>
<ReactMarkdown>
Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
</ReactMarkdown>
<pre>
<div className='lenguaje'><SiJavascript /></div>
<code>
{`const array = ['banana', 'naranja', 'manzana']
array.splice(1, 0, 'frutilla')
console.log(array) // ['banana', 'frutilla', 'naranja', 'manzana']
`}
</code>
</pre>
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