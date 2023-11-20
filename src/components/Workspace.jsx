import React from 'react'
import OdysseyG5 from '../assets/workspace-assets/odysseyG5.jpg'
import T35F from '../assets/workspace-assets/T35F.jpg'
import ElgatoWave3 from '../assets/workspace-assets/ElgatoWave3.jpg'
import WavePopFilter from '../assets/workspace-assets/WavePopFilter.jpg'
import WaveShockMount from '../assets/workspace-assets/WaveShockMount.jpg'
import WaveMicArmLP from '../assets/workspace-assets/WaveMicArmLP.jpg'
import LogitechGPro from '../assets/workspace-assets/LogitechGPro.jpg'
import LogitechG903 from '../assets/workspace-assets/LogitechG903.jpg'
import RedragonFlickXL from '../assets/workspace-assets/RedragonFlickXL.jpg'
import LogitechG435 from '../assets/workspace-assets/LogitechG435.jpg'
import Dualsense from '../assets/workspace-assets/Dualsense.jpg'
import XiaomiMISpeaker2 from '../assets/workspace-assets/XiaomiMISpeaker2.jpg'
import IOFI from '../assets/workspace-assets/IOFI.jpg'

const Workspace = () => {
  return (
    <section className='workspace-section'>
      {/* <div className='workspace-container'>
        <h3>Hardware</h3>
        <p><b>Procesador:</b> AMD Ryzen 5 5600G - 3.9Ghz</p>
        <p><b>Cooler:</b> Cooler Master MasterAir MA620P</p>
        <p><b>Placa Madre:</b> Gigabyte A520M DS3H</p>
        <p><b>Placa de video:</b> Gigabyte RTX 3080 Gaming OC 10G</p>
        <p><b>Memoria RAM:</b> Kingston FURY Beast ( 8GB x 2 ) - 3600Mhz</p>
        <p><b>Almacenamiento:</b> SSD Kingston 480GB / HDD Seagate 500GB</p>
        <p><b>Fuente:</b> EVGA SuperNOVA 850W GA Plus Gold</p>
        <p><b>Gabinete:</b> Cooler Master MasterBox MB520 ARGB</p>
      </div> */}

      <div className='workspace-container'>
        <h3>Monitores</h3>
        <div>
          <div className='product-container'>
            <img src={OdysseyG5} alt=''/>
            <div className='product-description'>
            <h4>Samsung Odyssey G5</h4>
            <p>27" Curvo, QHD, 165Hz, 1ms</p>
            </div>
          </div>
          <div className='product-container'>
            <img src={T35F} alt=''/>
            <div className='product-description'>
            <h4>Samsung T35F</h4>
            <p>24" Plano, FHD, 75Hz, 5ms</p>
            </div>
          </div>
          <div className='product-container'>
            <img src={IOFI} alt=''/>
            <div className='product-description'>
            <h4>Soporte Doble Monitor</h4>
            <p></p>
            </div>
          </div>
        </div>
      </div>

      <div className='workspace-container'>
        <h3>Micrófono</h3>
        <div>
          <div className='product-container'>
            <img src={ElgatoWave3} alt=''/>
            <div className='product-description'>
            <h4>Elgato Wave 3</h4>
            <p></p>
            </div>
          </div>
          <div className='product-container'>
            <img src={WavePopFilter} alt=''/>
            <div className='product-description'>
            <h4>Wave Pop Filter</h4>
            <p></p>
            </div>
          </div>
          <div className='product-container'>
            <img src={WaveShockMount} alt=''/>
            <div className='product-description'>
            <h4>Wave Shock Mount</h4>
            <p></p>
            </div>
          </div>
          <div className='product-container'>
            <img src={WaveMicArmLP} alt=''/>
            <div className='product-description'>
            <h4>Wave Mic Arm LP</h4>
            <p></p>
            </div>
          </div>
        </div>
      </div>

      <div className='workspace-container'>
        <h3>Periféricos</h3>
        <div>
          <div className='product-container'>
            <img src={LogitechGPro} alt=''/>
            <div className='product-description'>
            <h4>Logitech G PRO</h4>
            <p></p>
            </div>
          </div>
          <div className='product-container'>
            <img src={LogitechG903} alt=''/>
            <div className='product-description'>
            <h4>Logitech G 903</h4>
            <p></p>
            </div>
          </div>
          <div className='product-container'>
            <img src={RedragonFlickXL} alt=''/>
            <div className='product-description'>
            <h4>Redragon Flick XL</h4>
            <p>Lightspeed Wireless</p>
            </div>
          </div>
          <div className='product-container'>
            <img src={LogitechG435} alt=''/>
            <div className='product-description'>
            <h4>Logitech G435</h4>
            <p>Lightspeed Wireless</p>
            </div>
          </div>
          <div className='product-container'>
            <img src={Dualsense} alt=''/>
            <div className='product-description'>
            <h4>Dualsense</h4>
            <p></p>
            </div>
          </div>
          <div className='product-container'>
            <img src={XiaomiMISpeaker2} alt=''/>
            <div className='product-description'>
            <h4>Xiaomi MI Speaker 2</h4>
            <p></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Workspace