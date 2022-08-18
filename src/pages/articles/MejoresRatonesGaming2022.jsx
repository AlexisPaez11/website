import React from 'react'
import { NavLink } from "react-router-dom";
import Article from '../../components/article/Article'

import { IoIosArrowBack } from 'react-icons/io' // Back
import { HiCode } from 'react-icons/hi' // CategoryDev

import SteelseriesAerox5 from '../../assets/blog-assets/ratones-gaming/steelseries-aerox5.webp'
import LogitechG903 from '../../assets/blog-assets/ratones-gaming/logitech-g903.webp'
import LogitechG502 from '../../assets/blog-assets/ratones-gaming/logitech-g502.webp'
import LogitechGPROXSuperlight from '../../assets/blog-assets/ratones-gaming/logitech-g-pro-x-superlight.webp'
import LogitechG305 from '../../assets/blog-assets/ratones-gaming/logitech-g305.webp'
import RazerViperUltimate from '../../assets/blog-assets/ratones-gaming/razer-viper-ultimate.webp'
import RazerBasiliskUltimate from '../../assets/blog-assets/ratones-gaming/razer-basilisk-ultimate.webp'
import RazerOrochiV2 from '../../assets/blog-assets/ratones-gaming/razer-orochi-v2.webp'
import CorsairM65PRO from '../../assets/blog-assets/ratones-gaming/corsair-m65-pro.webp'

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
const MejoresRatonesGaming2022 = () => {
  return (
    <section className='article-section'>
      <div className="article-container">
        <NavLink to="/Blog" className='btn'><IoIosArrowBack /></NavLink>

        <h1>Los mejores ratones gaming 2022</h1>
        <time dateTime='2022-07-25'>Agosto 16, 2022</time>

        <br/><br/><br/>
        <br/><br/><br/>
        <h3>Steelseries Aerox 5</h3>
        <ul>
          <li>Colores: Negro</li>
          <li>18.000 DPI, aceleración de 40G, 400IPS</li>
          <li>9 botones programables</li>
          <li>Bateria de hasta 80 horas de duración</li>
          <li>Largo: 128.8 mm - Ancho: 62.8 mm - Alto: 26.7 mm</li>
          <li>74g de peso</li>
        </ul>
        <img src={SteelseriesAerox5} alt='Steelseries Aerox 5'/>
        
        <br/><br/><br/>
        <h3>Razer Viper Ultimate</h3>
        <ul>
          <li>Colores: Negro, Mercury, Quartz, Cyberpunk</li>
          <li>20.000 DPI, aceleración de 50G, 650 IPS</li>
          <li>8 botones programables</li>
          <li>Bateria de hasta 70 horas de duración</li>
          <li>Largo: 127.0 mm - Ancho: 66.0 mm - Alto: 38.0 mm</li>
          <li>74g de peso</li>
          <li>Compatibilidad con base de carga</li>
        </ul>
        <img src={RazerViperUltimate} alt='Razer Viper Ultimate'/>


        <br/><br/><br/>
        <h3>Razer Basilisk Ultimate</h3>
        <ul>
          <li>Colores: Negro</li>
          <li>20.000 DPI, aceleración de 50G, 650IPS</li>
          <li>11 botones programables</li>
          <li>Bateria de hasta 100 horas de duración</li>
          <li>Largo: 130.0 mm - Ancho: 75.0 mm - Alto: 42.0 mm</li>
          <li>107g de peso</li>
          <li>Compatibilidad con base de carga</li>
        </ul>
        <img src={RazerBasiliskUltimate} alt='Razer Basilisk Ultimate'/>


        <br/><br/><br/>
        <h3>Razer Orochi V2</h3>
        <ul>
          <li>Colores: Negro, Blanco</li>
          <li>18.000 DPI, aceleración de 40G, 450IPS</li>
          <li>6 botones programables</li>
          <li>Bateria de hasta 425 horas de duración</li>
          <li>Largo: 108.0 mm - Ancho: 62.6 mm - Alto: 38.5 mm</li>
          <li>60g de peso</li>
        </ul>
        <img src={RazerOrochiV2} alt='Razer Orochi V2'/>


        <br/><br/><br/>
        <h3>Logitech G903</h3>
        <ul>
          <li>Colores: Negro</li>
          <li>25.600 DPI, aceleración de 40G, 400IPS</li>
          <li>11 botones programables</li>
          <li>Largo: 130.3 mm - Ancho: 66.5 mm - Alto: 40.4 mm</li>
          <li>110-120g de peso</li>
          <li>Compatibilidad con Powerplay</li>
        </ul>
        <img src={LogitechG903} alt='Logitech G903'/>


        <br/><br/><br/>
        <h3>Logitech G502</h3>
        <ul>
          <li>Colores: Negro, KDA</li>
          <li>25.600 DPI, aceleración de 40G, 400IPS</li>
          <li>11 botones programables</li>
          <li>Bateria de hasta 48 horas de duración</li>
          <li>Largo: 132.0 mm - Ancho: 75.0 mm - Alto: 40.0 mm</li>
          <li>114-130g de peso</li>
          <li>Compatibilidad con Powerplay</li>
        </ul>
        <img src={LogitechG502} alt='Logitech G502'/>


        <br/><br/><br/>
        <h3>Logitech G PRO X Superlight</h3>
        <ul>
          <li>Colores: Negro, Blanco, Rosa</li>
          <li>25.600 DPI, aceleración de 40G, 400IPS</li>
          <li>5 botones programables</li>
          <li>Bateria de hasta 70 horas de duración</li>
          <li>Largo: 125.0 mm - Ancho: 63.5 mm - Alto: 40.0 mm</li>
          <li>63g de peso</li>
          <li>Compatibilidad con Powerplay</li>
        </ul>
        <img src={LogitechGPROXSuperlight} alt='Logitech G PRO X Superlight'/>


        <br/><br/><br/>
        <h3>Logitech G305</h3>
        <ul>
          <li>Colores: Negro, Lila, Azul, KDA, Mint</li>
          <li>12.000 DPI, aceleración de 40G, 400IPS</li>
          <li>6 botones programables</li>
          <li>Bateria de hasta 250 horas de duración</li>
          <li>Largo: 116.6 mm - Ancho: 62.15 mm - Alto: 38.2 mm</li>
          <li>99g de peso</li>
        </ul>
        <img src={LogitechG305} alt='Logitech G305'/>


        <br/><br/><br/>
        <h3>Corsair M65 PRO</h3>
        <ul>
          <li>Colores: Negro, Blanco</li>
          <li>12.000 DPI, aceleración de 50G, 650IPS</li>
          <li>8 botones programables</li>
          <li>Conectividad por cable</li>
          <li>Largo: 118.0 mm - Ancho: 72.0 mm - Alto: 39.0 mm</li>
          <li>115-135g de peso</li>
        </ul>
        <img src={CorsairM65PRO} alt='Corsair M65 PRO'/>
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

export default MejoresRatonesGaming2022