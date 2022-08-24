import { HiCode } from 'react-icons/hi'
import { IoGitNetworkSharp } from 'react-icons/io5'
import DevToolsChrome from '../../assets/blog-assets/devtools.webp'
import HTML from '../../assets/blog-assets/html.webp'
import MacBookAirM2 from '../../assets/blog-assets/macbook-air-m2.webp'
import MejoresRatonesGaming2022 from '../../assets/blog-assets/mejores-ratones-gaming-2022.webp'
// import CSS from '../../assets/blog-assets/css.webp'
// import JavaScript from '../../assets/blog-assets/javascript.webp'
// import React from '../../assets/blog-assets/react.webp'

const ArticleData = [
    {
    categoryimg: <HiCode />,
    category: 'Desarrollo Web',
    image: DevToolsChrome,
    title: 'Novedades en DevTools (Chrome 103)',
    datetime: '2022-07-24',
    time:'Julio 24, 2022',
    url: 'DevToolsChrome103',
    },
    {
    categoryimg: <HiCode />,
    category: 'Desarrollo Web',
    image: HTML,
    title: 'Etiquetas HTML esenciales que debes conocer',
    datetime: '2022-07-25',
    time:'Julio 25, 2022',
    url: 'EtiquetasHtmlEsenciales',
    },
    {
    categoryimg: <IoGitNetworkSharp />,
    category: 'Tecnología',
    image: MacBookAirM2,
    title: 'MacBook Air M2 review',
    datetime: '2022-08-14',
    time:'Agosto 14, 2022',
    url: 'MacBookAirM2review',
    },
    {
    categoryimg: <IoGitNetworkSharp />,
    category: 'Tecnología',
    image: MejoresRatonesGaming2022,
    title: 'Los mejores ratones gaming 2022',
    datetime: '2022-08-18',
    time:'Agosto 18, 2022',
    url: 'MejoresRatonesGaming2022',
    },
]

export default ArticleData