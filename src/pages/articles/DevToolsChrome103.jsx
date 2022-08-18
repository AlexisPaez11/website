import React from 'react'
import { NavLink } from "react-router-dom";
import Article from '../../components/article/Article'

import { IoIosArrowBack } from 'react-icons/io' // Back
import { HiCode } from 'react-icons/hi' // CategoryDev

import IMG1 from '../../assets/blog-assets/chrome-103/img1.png'
import IMG2 from '../../assets/blog-assets/chrome-103/img2.png'
import IMG3 from '../../assets/blog-assets/chrome-103/img3.png'
import IMG4 from '../../assets/blog-assets/chrome-103/img4.png'
import IMG5 from '../../assets/blog-assets/chrome-103/img5.png'
import IMG6 from '../../assets/blog-assets/chrome-103/img6.png'
import IMG7 from '../../assets/blog-assets/chrome-103/img7.png'
import IMG8 from '../../assets/blog-assets/chrome-103/img8.png'

import HTML from '../../assets/blog-assets/html.webp'

const ArticleData = [
  {
    id: 2,
    categoryimg: <HiCode />,
    category: 'Desarrollo Web',
    image: HTML,
    title: 'Etiquetas HTML esenciales que debes conocer',
    datetime: '2022-07-25',
    time:'Julio 25, 2022',
    url: 'EtiquetasHtmlEsenciales',
  },
]

const DevToolsChrome103 = () => {
  return (
    <section className='article-section'>
      <div className="article-container">
        <NavLink to="/Blog" className='btn'><IoIosArrowBack /></NavLink>

        <h1>Novedades en DevTools (Chrome 103)</h1>
        <time dateTime='2022-07-24'>Julio 24, 2022</time>

        <br/><br/><br/>
        <br/><br/><br/>
        <h2>Capture eventos de doble clic y clic derecho en el panel Grabador</h2>
        <p>El panel <strong>Grabadora</strong> ahora puede capturar eventos de doble clic y clic derecho.</p>
        <img src={IMG1} alt=''/>
        <p>En este <a href="https://jec-fyi.translate.goog/demo/dbl-right-click?_x_tr_sl=auto&_x_tr_tl=es&_x_tr_hl=es">ejemplo</a>, inicie una <a href="https://developer-chrome-com.translate.goog/docs/devtools/recorder/?_x_tr_sl=auto&_x_tr_tl=es&_x_tr_hl=es#record">grabación</a> e intente realizar los siguientes pasos:</p>
        <ul>
          <li>Haga doble clic en la tarjeta para ampliarla</li>
          <li>Haga clic derecho en la tarjeta y seleccione una acción del menú contextual</li>
        </ul>
        <p>Para comprender cómo Recorder capturó estos eventos, expanda los pasos:</p>
        <ul>
          <li>El doble clic se captura como type: doubleClick.</li>
          <li>El evento de clic derecho se captura como type: clickpero con la buttonpropiedad establecida en secondary. El buttonvalor de un clic de ratón normal es primary.</li>
        </ul>

        <br/><br/><br/>
        <h2>Nuevo modo de intervalo de tiempo e instantánea en el panel Lighthouse</h2>
        <p>Ahora puede usar Lighthouse para medir el rendimiento de su sitio web más allá de la carga de la página.</p>
        <img src={IMG2} alt=''/>
        <p>El panel Lighthouse ahora admite 3 modos de medición de flujo de usuario:</p>
        <ul>
          <li><a href="https://translate.google.com/website?sl=auto&tl=es&hl=es&u=https://github.com/GoogleChrome/lighthouse/blob/master/docs/user-flows.md%23navigation">Los informes de navegación</a> analizan la carga de una sola página. La navegación es el tipo de informe más común. Todos los informes de Lighthouse anteriores a la versión actual son informes de navegación.</li>
          <li><a href="https://translate.google.com/website?sl=auto&tl=es&hl=es&u=https://github.com/GoogleChrome/lighthouse/blob/master/docs/user-flows.md%23timespan">Los informes de intervalos</a> de tiempo analizan un período de tiempo arbitrario, que normalmente contiene interacciones del usuario.</li>
          <li><a href="https://translate.google.com/website?sl=auto&tl=es&hl=es&u=https://github.com/GoogleChrome/lighthouse/blob/master/docs/user-flows.md%23snapshot">Los informes de instantáneas</a> analizan la página en un estado particular, generalmente después de que el usuario haya interactuado con ella.</li>
        </ul>
        <p>Por ejemplo, midamos el rendimiento de agregar artículos al carrito en esta <a href="https://translate.google.com/website?sl=auto&tl=es&hl=es&u=https://coffee-cart.netlify.app/">página de demostración.</a> Seleccione el modo <strong>Intervalo</strong> de tiempo y haga clic en <strong>Iniciar intervalo</strong> de tiempo. Desplácese y agregue algunos artículos al carrito. Una vez que haya terminado, haga clic en <strong>Finalizar intervalo</strong> de tiempo para generar un informe Lighthouse de las interacciones del usuario.</p>
        <img src={IMG3} alt=''/>
        <p>Consulte <a href="https://translate.google.com/website?sl=auto&tl=es&hl=es&u=https://github.com/GoogleChrome/lighthouse/blob/master/docs/user-flows.md">Flujos de usuario en Lighthouse</a> para conocer los casos de uso únicos, los beneficios y las limitaciones de cada modo.</p>

        <br/><br/><br/>
        <h2>Actualizaciones de Perspectivas de rendimiento</h2>
        <h3>Control de zoom mejorado en el panel Performance Insights</h3>
        <p>DevTools ahora se acercará según el cursor del mouse en lugar de la posición del cursor de reproducción. Con el último zoom basado en el cursor, puede mover el mouse a cualquier parte de la pista y <a href="https://developer-chrome-com.translate.goog/docs/devtools/performance-insights/?_x_tr_sl=auto&_x_tr_tl=es&_x_tr_hl=es#navigate">acercar</a> el área deseada de inmediato.</p>
        <div className='video'>
        <video controls loop>
          <source src="https://storage.googleapis.com/web-dev-uploads/video/dPDCek3EhZgLQPGtEG3y0fTn4v82/U8d1PjOFZuGkyOXHQ5Z8.mp4" type="video/mp4"/>
        </video>
        </div>
        <p>Consulte <a href="https://developer-chrome-com.translate.goog/docs/devtools/performance-insights/?_x_tr_sl=auto&_x_tr_tl=es&_x_tr_hl=es">Perspectivas de rendimiento</a> para obtener información práctica y mejorar el rendimiento de su sitio web con el panel.</p>
        
        <br/><br/><br/>
        <h3>Confirmar para eliminar una grabación de interpretación</h3>
        <p>DevTools ahora muestra un cuadro de diálogo de confirmación antes <a href="https://developer-chrome-com.translate.goog/docs/devtools/performance-insights/?_x_tr_sl=auto&_x_tr_tl=es&_x_tr_hl=es#delete">de eliminar una grabación de rendimiento</a></p>
        <img src={IMG4} alt=''/>

        <br/><br/><br/>
        <h2>Reordenar paneles en el panel Elementos</h2>
        <p>Ahora puede reordenar los paneles en el panel <strong>elementos</strong> según sus preferencias.</p>
        <p>Por ejemplo, cuando abre DevTools en una pantalla estrecha, el panel <a href="https://developer-chrome-com.translate.goog/docs/devtools/accessibility/reference/?_x_tr_sl=auto&_x_tr_tl=es&_x_tr_hl=es#pane">Accesibilidad se oculta debajo del botón</a> <strong>mostrar más.</strong> Si depura problemas de accesibilidad con frecuencia, ahora puede arrastrar el panel al frente para facilitar el acceso.</p>

        <br/><br/><br/>
        <h2>Elegir un color fuera del navegador</h2>
        <p>DevTools ahora admite elegir un color fuera del navegador. Anteriormente, solo podía elegir un color dentro del navegador.</p>
        <p>En el panel <strong>Estilos</strong>, haga clic en cualquier vista previa de color para abrir un selector de color. Usa el cuentagotas para elegir el color de cualquier lugar.</p>
        <img src={IMG5} alt=''/>

        <br/><br/><br/>
        <h2>Vista previa de valores en línea mejorada durante la depuración</h2>
        <p>El depurador ahora muestra correctamente la vista previa de los valores en línea.</p>
        <p>En este ejemplo, la doublefunción tiene un parámetro de entrada ay una variable x. Coloque un punto de interrupción en la returnlínea y ejecute el código. La vista previa en línea muestra valores ay xcorrectamente. Anteriormente, el depurador no mostraba el valor xen la vista previa en línea.</p>
        <img src={IMG6} alt=''/>

        <br/><br/><br/>
        <h2>Admite blobs grandes para autenticadores virtuales</h2>
        <p>La pestaña <a href="https://developer-chrome-com.translate.goog/docs/devtools/webauthn/?_x_tr_sl=auto&_x_tr_tl=es&_x_tr_hl=es">WebAuthn</a> ahora tiene la nueva casilla de verificación <strong>Admite blobs grandes</strong> para autenticadores virtuales.</p>
        <p>Esta casilla de verificación está desactivada de forma predeterminada. Puede habilitarlo solo para los autenticadores con ctap2protocolo que admita claves residentes.</p>
        <img src={IMG7} alt=''/>

        <br/><br/><br/>
        <h2>Nuevos atajos de teclado en el panel Fuentes</h2>
        <p>Dos nuevos métodos abreviados de teclado ahora están disponibles en el panel <strong>Fuentes:</strong></p>
        <ul>
          <li>Alternar la barra lateral de <strong>navegación</strong> (izquierda) con Control / Command+ Shift+Y</li>
          <li>Alternar la barra lateral del <strong>depurador</strong> (derecha) con Control / Command+ Shift+H</li>
        </ul>
        <img src={IMG8} alt=''/>
        
        <br/><br/><br/>
        <h2>Mejoras en los mapas de origen</h2>
        <p>Anteriormente, los desarrolladores experimentaban fallas aleatorias durante:</p>
        <ul>
          <li>Ejemplo de depuración con <a href="https://translate.google.com/website?sl=auto&tl=es&hl=es&u=https://codepen.io/">Codepen</a></li>
          <li>Identificación de la ubicación de origen de los problemas de rendimiento en un ejemplo de <a href="https://translate.google.com/website?sl=auto&tl=es&hl=es&u=https://codepen.io/">Codepen</a></li>
          <li>Falta la pestaña <strong>Componente</strong> cuando <a href="https://translate.google.com/website?sl=auto&tl=es&hl=es&u=https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi">React DevTools</a> está habilitado</li>
        </ul>
        <p>Aquí hay algunas correcciones en los mapas de origen para mejorar la experiencia general de depuración:</p>
        <ul>
          <li>Asignación correcta entre ubicación y desplazamiento para scripts en línea y ubicación de origen</li>
          <li>Usar información alternativa para la ubicación del texto del marco</li>
          <li>Resuelva correctamente las URL relativas con la URL del marco</li>
        </ul>
        
        <br/><br/><br/>
        <h2>Descargar los canales de vista previa</h2>
        <p>Considere usar Chrome <a href="https://translate.google.com/website?sl=auto&tl=es&hl=es&u=https://www.google.com/chrome/canary/">Canary</a>, <a href="https://translate.google.com/website?sl=auto&tl=es&hl=es&u=https://www.google.com/chrome/dev/">Dev</a> o <a href="https://translate.google.com/website?sl=auto&tl=es&hl=es&u=https://www.google.com/chrome/beta/">Beta</a> como su navegador de desarrollo predeterminado. ¡Estos canales de vista previa le brindan acceso a las últimas funciones de DevTools, prueban API de plataforma web de vanguardia y encuentran problemas en su sitio antes que sus usuarios!</p>
        
        <br/><br/><br/>
        <h2>Ponerse en contacto con el equipo de Chrome DevTools</h2>
        <p>Utilice las siguientes opciones para analizar las nuevas funciones y los cambios en la publicación, o cualquier otra cosa relacionada con DevTools.</p>
        <ul>
          <li>Envíenos una sugerencia o comentario a través de crbug.com .</li>
          <li>Reporte un problema de DevTools usando <strong>Más opciones</strong> <strong>Ayuda</strong> <strong>Reportar un problema</strong> de DevTools en DevTools.</li>
          <li>Tuitee en <a href="https://translate.google.com/website?sl=auto&tl=es&hl=es&u=https://twitter.com/intent/tweet?text%3D@ChromeDevTools">@ChromeDevTools.</a></li>
          <li><a href="https://translate.google.com/website?sl=auto&tl=es&hl=es&u=https://goo.gle/devtools-youtube">Deje comentarios en nuestros videos de YouTube</a> de Novedades de DevTools .</li>
        </ul>
        
        <br/><br/><br/>
        <h2>Novedades en herramientas de desarrollo</h2>
        <p>Una lista de todo lo que se ha cubierto en la serie <a href="https://developer-chrome-com.translate.goog/tags/new-in-devtools/?_x_tr_sl=auto&_x_tr_tl=es&_x_tr_hl=es">What's New In DevTools.</a></p>
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

export default DevToolsChrome103