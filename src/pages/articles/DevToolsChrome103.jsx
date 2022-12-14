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

import MejoresLibrosDesarrolladores from '../../assets/blog-assets/libros-desarrolladores/libros-desarrolladores.webp'
import HTML from '../../assets/blog-assets/html.webp'

const ArticleData = [
  {
    categoryimg: <HiCode />,
    category: 'Desarrollo Web',
    image: MejoresLibrosDesarrolladores,
    title: 'Mejores libros para desarrolladores',
    date:'Septiembre 06, 2022',
    url: 'MejoresLibrosDesarrolladores',
  },
  {
    categoryimg: <HiCode />,
    category: 'Desarrollo Web',
    image: HTML,
    title: 'Etiquetas HTML esenciales que debes conocer',
    date:'Julio 25, 2022',
    url: 'EtiquetasHtmlEsenciales',
  },
]

const DevToolsChrome103 = () => {
  return (
    <section className='article-section'>
      <div className="article-container">
        <NavLink to="/Blog" className='btn btn-back'><IoIosArrowBack /></NavLink>

        <h1>Novedades en DevTools (Chrome 103)</h1>
        <time dateTime='2022-07-24'>Julio 24, 2022</time>

        <br/><br/><br/>
        <br/><br/><br/>
        <h2>Capture eventos de doble clic y clic derecho en el panel Grabador</h2>
        <p>El panel <strong>Grabadora</strong> ahora puede capturar eventos de doble clic y clic derecho.</p>
        <img src={IMG1} alt=''/>
        <p>En este <a href="https://jec-fyi.translate.goog/demo/dbl-right-click?_x_tr_sl=auto&_x_tr_tl=es&_x_tr_hl=es">ejemplo</a>, inicie una <a href="https://developer-chrome-com.translate.goog/docs/devtools/recorder/?_x_tr_sl=auto&_x_tr_tl=es&_x_tr_hl=es#record">grabaci??n</a> e intente realizar los siguientes pasos:</p>
        <ul>
          <li>Haga doble clic en la tarjeta para ampliarla</li>
          <li>Haga clic derecho en la tarjeta y seleccione una acci??n del men?? contextual</li>
        </ul>
        <p>Para comprender c??mo Recorder captur?? estos eventos, expanda los pasos:</p>
        <ul>
          <li>El doble clic se captura como type: doubleClick.</li>
          <li>El evento de clic derecho se captura como type: clickpero con la buttonpropiedad establecida en secondary. El buttonvalor de un clic de rat??n normal es primary.</li>
        </ul>

        <br/><br/><br/>
        <h2>Nuevo modo de intervalo de tiempo e instant??nea en el panel Lighthouse</h2>
        <p>Ahora puede usar Lighthouse para medir el rendimiento de su sitio web m??s all?? de la carga de la p??gina.</p>
        <img src={IMG2} alt=''/>
        <p>El panel Lighthouse ahora admite 3 modos de medici??n de flujo de usuario:</p>
        <ul>
          <li><a href="https://translate.google.com/website?sl=auto&tl=es&hl=es&u=https://github.com/GoogleChrome/lighthouse/blob/master/docs/user-flows.md%23navigation">Los informes de navegaci??n</a> analizan la carga de una sola p??gina. La navegaci??n es el tipo de informe m??s com??n. Todos los informes de Lighthouse anteriores a la versi??n actual son informes de navegaci??n.</li>
          <li><a href="https://translate.google.com/website?sl=auto&tl=es&hl=es&u=https://github.com/GoogleChrome/lighthouse/blob/master/docs/user-flows.md%23timespan">Los informes de intervalos</a> de tiempo analizan un per??odo de tiempo arbitrario, que normalmente contiene interacciones del usuario.</li>
          <li><a href="https://translate.google.com/website?sl=auto&tl=es&hl=es&u=https://github.com/GoogleChrome/lighthouse/blob/master/docs/user-flows.md%23snapshot">Los informes de instant??neas</a> analizan la p??gina en un estado particular, generalmente despu??s de que el usuario haya interactuado con ella.</li>
        </ul>
        <p>Por ejemplo, midamos el rendimiento de agregar art??culos al carrito en esta <a href="https://translate.google.com/website?sl=auto&tl=es&hl=es&u=https://coffee-cart.netlify.app/">p??gina de demostraci??n.</a> Seleccione el modo <strong>Intervalo</strong> de tiempo y haga clic en <strong>Iniciar intervalo</strong> de tiempo. Despl??cese y agregue algunos art??culos al carrito. Una vez que haya terminado, haga clic en <strong>Finalizar intervalo</strong> de tiempo para generar un informe Lighthouse de las interacciones del usuario.</p>
        <img src={IMG3} alt=''/>
        <p>Consulte <a href="https://translate.google.com/website?sl=auto&tl=es&hl=es&u=https://github.com/GoogleChrome/lighthouse/blob/master/docs/user-flows.md">Flujos de usuario en Lighthouse</a> para conocer los casos de uso ??nicos, los beneficios y las limitaciones de cada modo.</p>

        <br/><br/><br/>
        <h2>Actualizaciones de Perspectivas de rendimiento</h2>
        <h3>Control de zoom mejorado en el panel Performance Insights</h3>
        <p>DevTools ahora se acercar?? seg??n el cursor del mouse en lugar de la posici??n del cursor de reproducci??n. Con el ??ltimo zoom basado en el cursor, puede mover el mouse a cualquier parte de la pista y <a href="https://developer-chrome-com.translate.goog/docs/devtools/performance-insights/?_x_tr_sl=auto&_x_tr_tl=es&_x_tr_hl=es#navigate">acercar</a> el ??rea deseada de inmediato.</p>
        <div className='video'>
        <video controls loop>
          <source src="https://storage.googleapis.com/web-dev-uploads/video/dPDCek3EhZgLQPGtEG3y0fTn4v82/U8d1PjOFZuGkyOXHQ5Z8.mp4" type="video/mp4"/>
        </video>
        </div>
        <p>Consulte <a href="https://developer-chrome-com.translate.goog/docs/devtools/performance-insights/?_x_tr_sl=auto&_x_tr_tl=es&_x_tr_hl=es">Perspectivas de rendimiento</a> para obtener informaci??n pr??ctica y mejorar el rendimiento de su sitio web con el panel.</p>
        
        <br/><br/><br/>
        <h3>Confirmar para eliminar una grabaci??n de interpretaci??n</h3>
        <p>DevTools ahora muestra un cuadro de di??logo de confirmaci??n antes <a href="https://developer-chrome-com.translate.goog/docs/devtools/performance-insights/?_x_tr_sl=auto&_x_tr_tl=es&_x_tr_hl=es#delete">de eliminar una grabaci??n de rendimiento</a></p>
        <img src={IMG4} alt=''/>

        <br/><br/><br/>
        <h2>Reordenar paneles en el panel Elementos</h2>
        <p>Ahora puede reordenar los paneles en el panel <strong>elementos</strong> seg??n sus preferencias.</p>
        <p>Por ejemplo, cuando abre DevTools en una pantalla estrecha, el panel <a href="https://developer-chrome-com.translate.goog/docs/devtools/accessibility/reference/?_x_tr_sl=auto&_x_tr_tl=es&_x_tr_hl=es#pane">Accesibilidad se oculta debajo del bot??n</a> <strong>mostrar m??s.</strong> Si depura problemas de accesibilidad con frecuencia, ahora puede arrastrar el panel al frente para facilitar el acceso.</p>

        <br/><br/><br/>
        <h2>Elegir un color fuera del navegador</h2>
        <p>DevTools ahora admite elegir un color fuera del navegador. Anteriormente, solo pod??a elegir un color dentro del navegador.</p>
        <p>En el panel <strong>Estilos</strong>, haga clic en cualquier vista previa de color para abrir un selector de color. Usa el cuentagotas para elegir el color de cualquier lugar.</p>
        <img src={IMG5} alt=''/>

        <br/><br/><br/>
        <h2>Vista previa de valores en l??nea mejorada durante la depuraci??n</h2>
        <p>El depurador ahora muestra correctamente la vista previa de los valores en l??nea.</p>
        <p>En este ejemplo, la doublefunci??n tiene un par??metro de entrada ay una variable x. Coloque un punto de interrupci??n en la returnl??nea y ejecute el c??digo. La vista previa en l??nea muestra valores ay xcorrectamente. Anteriormente, el depurador no mostraba el valor xen la vista previa en l??nea.</p>
        <img src={IMG6} alt=''/>

        <br/><br/><br/>
        <h2>Admite blobs grandes para autenticadores virtuales</h2>
        <p>La pesta??a <a href="https://developer-chrome-com.translate.goog/docs/devtools/webauthn/?_x_tr_sl=auto&_x_tr_tl=es&_x_tr_hl=es">WebAuthn</a> ahora tiene la nueva casilla de verificaci??n <strong>Admite blobs grandes</strong> para autenticadores virtuales.</p>
        <p>Esta casilla de verificaci??n est?? desactivada de forma predeterminada. Puede habilitarlo solo para los autenticadores con ctap2protocolo que admita claves residentes.</p>
        <img src={IMG7} alt=''/>

        <br/><br/><br/>
        <h2>Nuevos atajos de teclado en el panel Fuentes</h2>
        <p>Dos nuevos m??todos abreviados de teclado ahora est??n disponibles en el panel <strong>Fuentes:</strong></p>
        <ul>
          <li>Alternar la barra lateral de <strong>navegaci??n</strong> (izquierda) con Control / Command+ Shift+Y</li>
          <li>Alternar la barra lateral del <strong>depurador</strong> (derecha) con Control / Command+ Shift+H</li>
        </ul>
        <img src={IMG8} alt=''/>
        
        <br/><br/><br/>
        <h2>Mejoras en los mapas de origen</h2>
        <p>Anteriormente, los desarrolladores experimentaban fallas aleatorias durante:</p>
        <ul>
          <li>Ejemplo de depuraci??n con <a href="https://translate.google.com/website?sl=auto&tl=es&hl=es&u=https://codepen.io/">Codepen</a></li>
          <li>Identificaci??n de la ubicaci??n de origen de los problemas de rendimiento en un ejemplo de <a href="https://translate.google.com/website?sl=auto&tl=es&hl=es&u=https://codepen.io/">Codepen</a></li>
          <li>Falta la pesta??a <strong>Componente</strong> cuando <a href="https://translate.google.com/website?sl=auto&tl=es&hl=es&u=https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi">React DevTools</a> est?? habilitado</li>
        </ul>
        <p>Aqu?? hay algunas correcciones en los mapas de origen para mejorar la experiencia general de depuraci??n:</p>
        <ul>
          <li>Asignaci??n correcta entre ubicaci??n y desplazamiento para scripts en l??nea y ubicaci??n de origen</li>
          <li>Usar informaci??n alternativa para la ubicaci??n del texto del marco</li>
          <li>Resuelva correctamente las URL relativas con la URL del marco</li>
        </ul>
        
        <br/><br/><br/>
        <h2>Descargar los canales de vista previa</h2>
        <p>Considere usar Chrome <a href="https://translate.google.com/website?sl=auto&tl=es&hl=es&u=https://www.google.com/chrome/canary/">Canary</a>, <a href="https://translate.google.com/website?sl=auto&tl=es&hl=es&u=https://www.google.com/chrome/dev/">Dev</a> o <a href="https://translate.google.com/website?sl=auto&tl=es&hl=es&u=https://www.google.com/chrome/beta/">Beta</a> como su navegador de desarrollo predeterminado. ??Estos canales de vista previa le brindan acceso a las ??ltimas funciones de DevTools, prueban API de plataforma web de vanguardia y encuentran problemas en su sitio antes que sus usuarios!</p>
        
        <br/><br/><br/>
        <h2>Ponerse en contacto con el equipo de Chrome DevTools</h2>
        <p>Utilice las siguientes opciones para analizar las nuevas funciones y los cambios en la publicaci??n, o cualquier otra cosa relacionada con DevTools.</p>
        <ul>
          <li>Env??enos una sugerencia o comentario a trav??s de crbug.com .</li>
          <li>Reporte un problema de DevTools usando <strong>M??s opciones</strong> <strong>Ayuda</strong> <strong>Reportar un problema</strong> de DevTools en DevTools.</li>
          <li>Tuitee en <a href="https://translate.google.com/website?sl=auto&tl=es&hl=es&u=https://twitter.com/intent/tweet?text%3D@ChromeDevTools">@ChromeDevTools.</a></li>
          <li><a href="https://translate.google.com/website?sl=auto&tl=es&hl=es&u=https://goo.gle/devtools-youtube">Deje comentarios en nuestros videos de YouTube</a> de Novedades de DevTools .</li>
        </ul>
        
        <br/><br/><br/>
        <h2>Novedades en herramientas de desarrollo</h2>
        <p>Una lista de todo lo que se ha cubierto en la serie <a href="https://developer-chrome-com.translate.goog/tags/new-in-devtools/?_x_tr_sl=auto&_x_tr_tl=es&_x_tr_hl=es">What's New In DevTools.</a></p>
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

export default DevToolsChrome103