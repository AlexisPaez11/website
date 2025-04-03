// import { HiCode } from 'react-icons/hi'
// import { IoGitNetworkSharp } from 'react-icons/io5'
// import { SiJavascript } from 'react-icons/si'

import DevToolsChrome from '../../assets/blog-assets/devtools.webp'
import HTML from '../../assets/blog-assets/html.webp'
import FuncionesJS from '../../assets/blog-assets/funciones-js.webp'
import MetodosJS from '../../assets/blog-assets/ejemplos-metodos-js.webp'
import MejoresLibrosDesarrolladores from '../../assets/blog-assets/libros-desarrolladores/libros-desarrolladores.webp'
import ColeccionRecursosTailwind from '../../assets/blog-assets/coleccion-recursos-tailwind/resource-tailwind.webp'

import MejoresRatonesGaming2022 from '../../assets/blog-assets/mejores-ratones-gaming-2022.webp'

import MacBookAirM2review from '../../assets/blog-assets/macbook-air-m2-review/img2.webp'
import iOS184 from '../../assets/blog-assets/iOS184/iOS184.webp'

const ArticleData = [
    {
    field: 'Desarrollo',
    category: ["JavaScript"],
    image: MetodosJS,
    title: 'Métodos de un array en JavaScript',
    date:'Noviembre 21, 2022',
    url: 'MetodosArrayJavaScript',
    },
    {
    field: 'Desarrollo',
    category: ["JavaScript"],
    image: FuncionesJS,
    title: '4 Formas de escribir una función en JavaScript',
    date:'Noviembre 20, 2022',
    url: 'FuncionesJavaScript',
    },
    {
    field: 'Desarrollo',
    category: ["Tailwind"],
    image: ColeccionRecursosTailwind,
    title: 'Colección de recursos para Tailwind',
    date:'Septiembre 07, 2022',
    url: 'ColeccionRecursosTailwind',
    },
    {
    field: 'Desarrollo',
    category: ["Herramientas"],
    image: MejoresLibrosDesarrolladores,
    title: 'Mejores libros para desarrolladores',
    date:'Septiembre 06, 2022',
    url: 'MejoresLibrosDesarrolladores',
    },
    {
        field: 'Desarrollo',
        category: ["HTML"],
        image: HTML,
        title: 'Etiquetas HTML esenciales que debes conocer',
        date:'Julio 25, 2022',
        url: 'EtiquetasHtmlEsenciales',
    },
    {
    field: 'Desarrollo',
    category: ["Herramientas"],
    image: DevToolsChrome,
    title: 'Novedades en DevTools (Chrome 103)',
    date:'Julio 24, 2022',
    url: 'DevToolsChrome103',
    },
    
// TECNOLOGIA
    {
    field: 'Tecnología',
    category: ['Perifericos'],
    image: MejoresRatonesGaming2022,
    title: 'Mejores Ratones Gaming 2022',
    date:'Agosto 18, 2022',
    url: 'MejoresRatonesGaming2022',
    },

// APPLE
    {
    field: 'Apple',
    category: ['iOS'],
    image: iOS184,
    title: 'Novedades de iOS 18.4',
    date:'Abril 2, 2025',
    url: 'NovedadesiOS184',
    // isMarkdown: true,
    },
    {
    field: 'Apple',
    category: ['MacBook'],
    image: MacBookAirM2review,
    title: 'MacBook Air M2 review',
    date:'Agosto 14, 2022',
    url: 'MacBookAirM2review',
    },
]

export default ArticleData