import React from 'react'
import { NavLink } from "react-router-dom";
import Article from '../../components/article/Article'

import { IoIosArrowBack } from 'react-icons/io' // Back
import { IoGitNetworkSharp } from 'react-icons/io5' // CategoryTech

import IMG1 from '../../assets/blog-assets/macbook-air-m2-review/img1.webp'
import IMG2 from '../../assets/blog-assets/macbook-air-m2-review/img2.webp'
import IMG3 from '../../assets/blog-assets/macbook-air-m2-review/img3.webp'
import IMG4 from '../../assets/blog-assets/macbook-air-m2-review/img4.webp'
import IMG5 from '../../assets/blog-assets/macbook-air-m2-review/img5.webp'

import MejoresRatonesGaming2022 from '../../assets/blog-assets/mejores-ratones-gaming-2022.webp'

const ArticleData = [
  {
    categoryimg: <IoGitNetworkSharp />,
    category: 'Tecnología',
    image: MejoresRatonesGaming2022,
    title: 'Los mejores ratones gaming 2022',
    date:'Agosto 18, 2022',
    url: 'MejoresRatonesGaming2022',
  },
]

const MacBookAirM2review = () => {
  return (
    <section className='article-section'>
      <div className="article-container">
        <NavLink to="/Blog" className='btn btn-back'><IoIosArrowBack /></NavLink>

        <h1>MacBook Air M2 review</h1>
        <time dateTime='2022-07-25'>Agosto 14, 2022</time>

        <br/><br/><br/>
        <br/><br/><br/>
        {/* <h2></h2> */}
        <p>En la conferencia de la WWDC 2022 nos presentaron novedades de iOS16, macOS Ventura watchOS 9 y ipadOS 16, pero el nuevo MacBook Air M2 fue el principal protagonista de este evento.</p>
        <p>Apple presento el MacBook Air con el nuevo chip M2 junto a un rediseño innovador que iguala a los MacBook Pro que se presentaron el pasado año.</p>
        
        <br/><br/><br/>
        <h2>Diseño delgado y sólido</h2>
        <ul>
          <li>Dimensiones: 304.1 x 21.5mm, 1.24kg</li>
          <li>Puertos 2x USB-C / Thunderbolt 3, entrada de auriculares de 3.5mm</li>
          <li>Colores: Starlight, Midnight, Silver, Space Grey</li>
          <p>El nuevo MacBook Air M2 es más parecido al MacBook Pro lanzado en 2021, el diseño que caracterizo al Air durante casi una década ya no es parte de este nuevo modelo.</p>
        </ul>
        <img src={IMG1} alt=''/>
          <p>En su lugar cuenta con un aspecto más plano y cuadrado. Sin embargo, para los que prefieren el diseño con forma de cuña, pueden optar por el modelo M1.</p>
          <p>Se eliminaron características para crear un dispositivo más fino y ligero, esta última característica es más notable en este modelo que en el MacBook Pro. Ya no cuenta con ranura para tarjetas SD, ni puertos HDMI.</p>

        <br/><br/><br/>
        <h2>Pantalla</h2>
        <ul>
          <li>13.6 pulgadas Liquid Retina, resolución 2650 x 1664, 224ppi</li>
          <li>500 nits de brillo</li>
          <li>Soporte de True Tone</li>
          <li>Color amplio P3</li>
        </ul>
        <p>Este modelo es un 20% más pequeño que su predecesor, pero eso no afecta el tamaño de su pantalla, ofrece una pantalla de 13.6 pulgadas (2650 x 1664) por la reducción de los biseles.</p>
        <img src={IMG2} alt=''/>
        <p>En la parte superior de la pantalla incorporaron el notch que alberga una nueva cámara de 1080p que ya era parte de los MacBook Pro.</p>
        <p>Este nuevo modelo también actualiza la pantalla de retina que se encuentra en el modelo M1 a una pantalla de retina líquida, otorgando un aumento del 25% de brillo hasta 500 nits.</p>
        
        <br/><br/><br/>
        <h2>Cámara y sonido avanzado</h2>
        <p>La MacBook Air viene con una nueva cámara FaceTime HD de 1080p que ofrece el doble de resolución y de rendimiento en condiciones de poca luz comparado con la generación anterior.</p>
        <p>Ya no vienen las rejillas de altavoces a ambos lados como el MacBook Air M1 y el MacBook Pro, en su lugar trae un sistema de sonido de cuatro bocinas, que fueron integradas junto con el micrófono entre el teclado y la pantalla para así mantener el diseño delgado del dispositivo. </p>
        <ul>
          <li>Compatibilidad con Spatial Audio desde los altavoces integrados</li>
          <li>Compatibilidad con Spatial Audio con seguimiento dinámico de la cabeza mediante los AirPods</li>
        </ul>
        <img src={IMG3} alt=''/>

        <br/><br/><br/>
        <h2>Mayor rendimiento del chip M2</h2>
        <p>El chip M2 da inicio a una nueva generación de los chips de Apple y lleva mucho más allá el rendimiento, la eficiencia energética y las capacidades revolucionarias del chip M1.</p>
        <ul>
          <li>Procesador Apple M2 con una CPU de 8 núcleos y una GPU de hasta 10 núcleos más poderosos</li>
          <li>100 GB/s de ancho de banda de memoria unificada y compatibilidad con hasta 24 GB de memoria unificada, podrán ejecutar flujos de trabajo aún más pesados y complejos</li>
          <li>Almacenamiento de 256 GB / 512 GB (hasta 1 TB, 2 TB)</li>
          <li>Incluso con una pantalla aún más amplia y mayor rendimiento, la MacBook Air M2 nos ofrece hasta 18 horas de reproducción de video, al igual que el modelo anterior</li>
        </ul>
        <img src={IMG4} alt=''/>
        <p>Solo el chip de Apple puede ofrecer esta combinación de rendimiento y capacidad en una notebook con un diseño tan delgado, ligero y sin ventilador.</p>

        <br/><br/><br/>
        <h2>Opciones de carga</h2>
        <p>Admite distintas opciones de carga, como el nuevo adaptador de corriente compacto de 35 W con dos puertos USB-C que permite cargar dos dispositivos al mismo tiempo. Por primera vez, la MacBook Air ofrece carga rápida, que permite cargar el 50% de la batería en tan solo 30 minutos con el adaptador de energía USB-C de 67 W opcional.</p>
        <img src={IMG5} alt=''/>

        <br/><br/><br/>
        <h2>Ficha técnica del MacBook Air M2 (2022)</h2>
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
              <td><p>Apple M2 (8 núcleos de CPU. 4 de alto rendimiento y 4 de alta eficiencia), 8 núcleos de GPU,  Neural Engine de 16 núcleos y 100 GB/s de ancho de banda de memoria</p></td>
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
                <p>1199 dolares - 1519 euros (256 GB)</p>
                <p>1499 dolares - 1869 euros (512 GB)</p>
              </td>
            </tr>
          </tbody>
        </table>
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

export default MacBookAirM2review