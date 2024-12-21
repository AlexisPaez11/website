import React from 'react'



const Workspace = () => {
  return (
    <section className='workspace-section'>
      <div className='workspace-container'>
        <h3>Equipo</h3>
        <ul>
            <li>Placa de Video: Nvidia Geforce RTX 3080 10GB Gigabyte Gaming</li>
            <li>Procesador: AMD Ryzen 7 5800X3D 4.5GHz</li>
            <li>Watercooling: NZXT KRAKEN Z73 360mm LCD</li>
            <li>Placa Madre: ASUS TUF X570</li>
            <li>Memoria Ram: Kingston FURY Beast 32gb 3600MHz</li>
            <li>Fuente: EVGA 850W SuperNOVA GA Plus Gold</li>
            <li>10x IDCooling TF12025</li>
            <li>Gabinete Lian Li Dynamic O11 XL</li>
        </ul>
      </div>
      <div className='workspace-container'>
        <h3>Almacenamiento</h3>
        <ul>
            <li>Disco SSD: Western Digital Black SN850X 2TB</li>
            <li>Disco SSD: Western Digital Black SN770 2TB</li>
            <li>Pendrive: Kingston 64GB</li>
        </ul>
      </div>
      <div className='workspace-container'>
        <h3>Perifericos</h3>
        <ul>
            <li>Teclado: Logitech G PRO</li>
            <li>Mouse: Logitech G903</li>
            <li>MousePad: Redragon Flick XL</li>
        </ul>
      </div>
      <div className='workspace-container'>
        <h3>Monitores / TV</h3>
        <ul>
          <li>Samsung Odyssey G5 27" Curvo, QHD, 165Hz, 1ms</li>
          <li>Samsung T35F 24" Plano, FHD, 75Hz, 5ms</li>
          <li>Televisor: LG Smart 50" 4K</li>
        </ul>
      </div>
      <div className='workspace-container'>
        <h3>Sonido</h3>
        <ul>
          <li>Auriculares: Logitech G435</li>
          <li>Parlantes: Logitech G560</li>
          <li>Parlantes: Razer Nommo Chroma RGB</li>
          <li>Parlantes: Xiaomi MI Speaker 2</li>
        </ul>
      </div>
      <div className='workspace-container'>
        <h3>Audio</h3>
        <ul>
          <li>Micrófono: Elgato Wave 3</li>
          <li>Filtro Pop: Wave Pop Filter</li>
          <li>Montura de Choque: Wave Shock Mount</li>
          <li>Brazo Articulado: Wave Mic Arm LP</li>
        </ul>
      </div>
      <div className='workspace-container'>
        <h3>Iluminacion</h3>
        <ul>
          <li>Kit: Bridge Hue / Dimmer Switch Hue</li>
          <li>Focos de luces LED: x4 Philips Hue</li>
          <li>Tira de luces LED: Philips Hue Lightstrip</li>
          <li>Barra de luz: BenQ ScreenBar Halo</li>
        </ul>
      </div>
      <div className='workspace-container'>
        <h3>Otros</h3>
        <ul>
          <li>IPhone 15 Pro Max 256GB</li>
          <li>Joysticks: Dualsense Negro Medianoche / Rojo Cósmico</li>
          <li>Aspiradora: Xiaomi MI Vacuum</li>
          <li>Silla: Corsair T3 Rush</li>
        </ul>
      </div>
    </section>
  )
}









// import Gigabyte3080 from '../assets/workspace-assets/Gigabyte3080.png'
// import Ryzen5800x3d from '../assets/workspace-assets/5800x3d.png'
// import NZXTKrakenZ73 from '../assets/workspace-assets/NZXTKrakenZ73.png'
// import X570TUF from '../assets/workspace-assets/X570TUF.png'
// import SN850X from '../assets/workspace-assets/SN850X.png'
// import SN770 from '../assets/workspace-assets/SN770.png'
// import KingstonFuryBeast from '../assets/workspace-assets/KingstonFuryBeast.png'
// import EVGA850W from '../assets/workspace-assets/EVGA850w.png'
// import LianLiDynamicO11XL from '../assets/workspace-assets/LianLiDynamicO11XL.png'
// import IDCoolingTF12025 from '../assets/workspace-assets/IDCoolingTF12025.png'

// import OdysseyG5 from '../assets/workspace-assets/OdysseyG5.png'
// import T35F from '../assets/workspace-assets/T35F.png'
// import BrazoHidraulico from '../assets/workspace-assets/BrazoHidraulico.png'

// import RazerNommoChroma from '../assets/workspace-assets/RazerNommoChroma.png'
// import LogitechG560 from '../assets/workspace-assets/LogitechG560.png'
// import LogitechG435 from '../assets/workspace-assets/LogitechG435.png'
// import XiaomiMISpeaker2 from '../assets/workspace-assets/XiaomiMISpeaker2.png'

// import ElgatoWave3 from '../assets/workspace-assets/ElgatoWave3.png'
// import WavePopFilter from '../assets/workspace-assets/WavePopFilter.png'
// import WaveShockMount from '../assets/workspace-assets/WaveShockMount.png'
// import WaveMicArmLP from '../assets/workspace-assets/WaveMicArmLP.png'

// import LogitechGPro from '../assets/workspace-assets/LogitechGPro.png'
// import LogitechG903 from '../assets/workspace-assets/LogitechG903.png'
// import RedragonFlickXL from '../assets/workspace-assets/RedragonFlickXL.png'
// import DualsenseMidnight from '../assets/workspace-assets/DualnsenseMidnight.png'
// import DualsenseCosmicRed from '../assets/workspace-assets/DualsenseCosmicRed.png'

// import Iphone15ProMax from '../assets/workspace-assets/Iphone15ProMax.png'
// import T3Rush from '../assets/workspace-assets/T3Rush.png'
// import LG50 from '../assets/workspace-assets/LG50.png'
// import PhilipsHue from '../assets/workspace-assets/PhilipsHue.png'


// const Workspace = () => {
//   return (
//     <section className='workspace-section'>
//       <div className='workspace-container'>
//         <h3>Hardware</h3>
//         <div>
//           <div className='product-container'>
//             <img src={Gigabyte3080} alt=''/>
//             <div className='product-description'>
//             <h4>RTX 3080 Gigabyte Gaming OC 10gb</h4>
//             <p></p>
//             </div>
//           </div>
//           <div className='product-container'>
//             <img src={Ryzen5800x3d} alt=''/>
//             <div className='product-description'>
//             <h4>AMD Ryzen 7 5800X3D</h4>
//             <p></p>
//             </div>
//           </div>
//           <div className='product-container'>
//             <img src={NZXTKrakenZ73} alt=''/>
//             <div className='product-description'>
//             <h4>Watercooling NZXT Kraken Z73</h4>
//             <p></p>
//             </div>
//           </div>
//           <div className='product-container'>
//             <img src={X570TUF} alt=''/>
//             <div className='product-description'>
//             <h4>Gigabyte X570 TUF Gaming</h4>
//             <p></p>
//             </div>
//           </div>
//           <div className='product-container'>
//             <img src={SN850X} alt=''/>
//             <div className='product-description'>
//             <h4>Western Digital Black SN850X</h4>
//             <p></p>
//             </div>
//           </div>
//           <div className='product-container'>
//             <img src={SN770} alt=''/>
//             <div className='product-description'>
//             <h4>Western Digital Black SN770</h4>
//             <p></p>
//             </div>
//           </div>
//           <div className='product-container'>
//             <img src={KingstonFuryBeast} alt=''/>
//             <div className='product-description'>
//             <h4>Kingston Fury Beast 32gb 3600Mhz</h4>
//             <p></p>
//             </div>
//           </div>
//           <div className='product-container'>
//             <img src={EVGA850W} alt=''/>
//             <div className='product-description'>
//             <h4>Fuente EVGA 850W </h4>
//             <p></p>
//             </div>
//           </div>
//           <div className='product-container'>
//             <img src={LianLiDynamicO11XL} alt=''/>
//             <div className='product-description'>
//             <h4>Lian Li Dynamic O11 XL</h4>
//             <p></p>
//             </div>
//           </div>
//           <div className='product-container'>
//             <img src={IDCoolingTF12025} alt=''/>
//             <div className='product-description'>
//             <h4>x10 ID-Cooling TF12025</h4>
//             <p></p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className='workspace-container'>
//         <h3>Monitores</h3>
//         <div>
//           <div className='product-container'>
//             <img src={OdysseyG5} alt=''/>
//             <div className='product-description'>
//             <h4>Samsung Odyssey G5</h4>
//             <p>27" Curvo, QHD, 165Hz, 1ms</p>
//             </div>
//           </div>
//           <div className='product-container'>
//             <img src={T35F} alt=''/>
//             <div className='product-description'>
//             <h4>Samsung T35F</h4>
//             <p>24" Plano, FHD, 75Hz, 5ms</p>
//             </div>
//           </div>
//           <div className='product-container'>
//             <img src={BrazoHidraulico} alt=''/>
//             <div className='product-description'>
//             <h4>Soporte Doble Monitor</h4>
//             <p></p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className='workspace-container'>
//         <h3>Audio</h3>
//         <div>
//           <div className='product-container'>
//             <img src={RazerNommoChroma} alt=''/>
//             <div className='product-description'>
//             <h4>Razer Nommo Chroma</h4>
//             <p></p>
//             </div>
//           </div>
//           <div className='product-container'>
//             <img src={LogitechG560} alt=''/>
//             <div className='product-description'>
//             <h4>Logitech G560</h4>
//             <p></p>
//             </div>
//           </div>
//           <div className='product-container'>
//             <img src={LogitechG435} alt=''/>
//             <div className='product-description'>
//             <h4>Logitech G435</h4>
//             <p>Lightspeed Wireless</p>
//             </div>
//           </div>
//           <div className='product-container'>
//             <img src={XiaomiMISpeaker2} alt=''/>
//             <div className='product-description'>
//             <h4>Xiaomi MI Speaker 2</h4>
//             <p></p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className='workspace-container'>
//         <h3>Micrófono</h3>
//         <div>
//           <div className='product-container'>
//             <img src={ElgatoWave3} alt=''/>
//             <div className='product-description'>
//             <h4>Elgato Wave 3</h4>
//             <p></p>
//             </div>
//           </div>
//           <div className='product-container'>
//             <img src={WavePopFilter} alt=''/>
//             <div className='product-description'>
//             <h4>Wave Pop Filter</h4>
//             <p></p>
//             </div>
//           </div>
//           <div className='product-container'>
//             <img src={WaveShockMount} alt=''/>
//             <div className='product-description'>
//             <h4>Wave Shock Mount</h4>
//             <p></p>
//             </div>
//           </div>
//           <div className='product-container'>
//             <img src={WaveMicArmLP} alt=''/>
//             <div className='product-description'>
//             <h4>Wave Mic Arm LP</h4>
//             <p></p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className='workspace-container'>
//         <h3>Periféricos</h3>
//         <div>
//           <div className='product-container'>
//             <img src={LogitechGPro} alt=''/>
//             <div className='product-description'>
//             <h4>Logitech G PRO</h4>
//             <p></p>
//             </div>
//           </div>
//           <div className='product-container'>
//             <img src={LogitechG903} alt=''/>
//             <div className='product-description'>
//             <h4>Logitech G903</h4>
//             <p></p>
//             </div>
//           </div>
//           <div className='product-container'>
//             <img src={RedragonFlickXL} alt=''/>
//             <div className='product-description'>
//             <h4>Redragon Flick XL</h4>
//             <p>Lightspeed Wireless</p>
//             </div>
//           </div>
//           <div className='product-container'>
//             <img src={DualsenseMidnight} alt=''/>
//             <div className='product-description'>
//             <h4>Dualsense Midnight</h4>
//             <p></p>
//             </div>
//           </div>
//           <div className='product-container'>
//             <img src={DualsenseCosmicRed} alt=''/>
//             <div className='product-description'>
//             <h4>DualsenseCosmicRed</h4>
//             <p></p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className='workspace-container'>
//         <h3>Otros</h3>
//         <div>
//           <div className='product-container'>
//             <img src={Iphone15ProMax} alt=''/>
//             <div className='product-description'>
//             <h4>Iphone 15 Pro Max</h4>
//             <p></p>
//             </div>
//           </div>
//           <div className='product-container'>
//             <img src={T3Rush} alt=''/>
//             <div className='product-description'>
//             <h4>Corsair T3 Rush</h4>
//             <p></p>
//             </div>
//           </div>
//           <div className='product-container'>
//             <img src={LG50} alt=''/>
//             <div className='product-description'>
//             <h4>SmartTv 50" 4K</h4>
//             <p></p>
//             </div>
//           </div>
//           <div className='product-container'>
//             <img src={PhilipsHue} alt=''/>
//             <div className='product-description'>
//             <h4>Philips Hue</h4>
//             <p></p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

export default Workspace