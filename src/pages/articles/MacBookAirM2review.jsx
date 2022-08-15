import React from 'react'
import { NavLink } from "react-router-dom";
import Article from '../../components/article/Article'
import { IoIosArrowBack } from 'react-icons/io' // Back
import { HiCode } from 'react-icons/hi' // CategoryDev

import DevToolsChrome from '../../assets/blog-assets/devtools.webp'

const ArticleData = [
  {
    id: 1,
    categoryimg: <HiCode />,
    category: 'Desarrollo Web',
    image: DevToolsChrome,
    title: 'Novedades en DevTools (Chrome 103)',
    datetime: '2022-07-24',
    time:'Julio 24, 2022',
    url: 'DevToolsChrome103',
  },
]

const MacBookAirM2review = () => {
  return (
    <section className='article-section'>
      <div className="article-container">
        <NavLink to="/Blog" className='btn'><IoIosArrowBack /></NavLink>

        <h1>MacBook Air M2 review</h1>
        <time dateTime='2022-07-25'>Agosto 14, 2022</time>

        <br/><br/><br/>
        <br/><br/><br/>
        {/* <h2></h2> */}
        <p>En la conferencia de la WWDC 2022 nos presentaron novedades de iOS16, macOS Ventura watchOS 9 y ipadOS 16, pero el nuevo MacBook Air M2 fue el principal protagonista de este evento.</p>
        <ul>
          <li>MacBook Air M1 (2020): $999</li>
          <li>MacBook Air M2 (2022): $1.199</li>
        </ul>
        
        <br/><br/><br/>
        <table>
          <thead>
            <tr>
              <th className='align-left'><p></p></th>
              <th><p><strong>CARACTERISTICAS</strong></p></th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th className='align-left'><p><strong>PANTALLA</strong></p></th>
              <td><p>LCD IPS Liquid Retina de 13,6 pulgadas (2560 x 1664 puntos), 500 nits y tecnología de reproducción del color True Tone</p></td>
            </tr>
            <tr>
              <th className='align-left'><p><strong>PROCESADOR</strong></p></th>
              <td><p>Apple M2 (8 nucleos de CPU. 4 de alto rendimiento y 4 de alta eficiencia), 8 núcleos de GPU,  Neural Engine de 16 núcleos y 100 GB/s de ancho de banda de memoria</p></td>
            </tr>
            <tr>
              <th className='align-left'><p><strong>MEMORIA RAM</strong></p></th>
              <td><p>8 GB de memoria unificada (configurable con hasta 24 GB)</p></td>
            </tr>
            <tr>
              <th className='align-left'><p><strong>ALMACENAMIENTO</strong></p></th>
              <td><p>SSD de 256 GB (configurable con SSD de hasta 2 TB)</p></td>
            </tr>
            <tr>
              <th className='align-left'><p><strong>SONIDO</strong></p></th>
              <td>
                <p>Cuatro altavoces</p>
                <p>Compatibilidad con audio espacial al reproducir música o vídeo con Dolby Atmos en los altavoces </p>
                <p>Audio espacial con seguimiento dinámico de la cabeza al usar los AirPods (3.ª generación), AirPods Pro y AirPods Max</p>
                <p>Conjunto de tres micrófonos con tecnología beamforming direccional</p>
              </td>
            </tr>
            <tr>
              <th className='align-left'><p><strong>CÁMARA</strong></p></th>
              <td><p>FaceTime HD 1080p</p></td>
            </tr>
            <tr>
              <th className='align-left'><p><strong>CONECTIVIDAD</strong></p></th>
              <td><p>1 x MagSafe 3, 2 x Thunderbolt/USB 4 y 1 x jack de 3,5 mm</p></td>
            </tr>
            <tr>
              <th className='align-left'><p><strong>CONECTIVIDAD INALÁMBRICA</strong></p></th>
              <td>
                <p>Wi-Fi 6</p>
                <p>Bluetooth 5.0</p></td>
            </tr>
            <tr>
              <th className='align-left'><p><strong>SISTEMA OPERATIVO</strong></p></th>
              <td><p>macOS Monterey</p></td>
            </tr>
            <tr>
              <th className='align-left'><p><strong>BATERÍA</strong></p></th>
              <td>
                <p>Batería de polímeros de litio de 52,6 vatios hora</p>
                <p>Adaptador de corriente USB‑C de 30 W (incluido con el M2 con GPU de 8 núcleos)</p>
                <p>Adaptador de corriente con dos puertos USB‑C de 35 W (incluido con el M2  con GPU de 10 núcleos y 512 GB de capacidad, opcional con el M2 con GPU  de 8 núcleos)</p>
              </td>
            </tr>
            <tr>
              <th className='align-left'><p><strong>AUTONOMÍA</strong></p></th>
              <td>
                <p>Hasta 18 horas de reproducción de vídeo en la app Apple TV</p>
                <p>Hasta 15 horas de navegación web inalámbrica</p>
              </td>
            </tr>
            <tr>
              <th className='align-left'><p><strong>COLORES</strong></p></th>
              <td><p>Plata, blanco estrella, gris espacial y medianoche</p></td>
            </tr>
            <tr>
              <th className='align-left'><p><strong>DIMENSIONES</strong></p></th>
              <td><p>304,1 x 215 x 11,3 mm</p></td>
            </tr>
            <tr>
              <th className='align-left'><p><strong>PESO</strong></p></th>
              <td><p>1,24 kg</p></td>
            </tr>
            <tr>
              <th className='align-left'><p><strong>PRECIO</strong></p></th>
              <td>
                <p>1519 euros (256 GB)</p>
                <p>1869 euros (512 GB)</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <aside className='recommended-articles'>
        {
          ArticleData.map(({id, categoryimg, category, image, title, datetime, time, url}) => {
            return (
              <Article id={id} categoryimg={categoryimg} category={category} image={image} title={title} datetime={datetime} time={time} url={url} />
            )
          })
        }
      </aside>
    </section>
  )
}

export default MacBookAirM2review