import React from 'react'

const Workspace = () => {
  return (
    <section className='workspace-section'>
      <div className='workspace-container'>
        <h3>Hardware</h3>
        <p><b>Procesador:</b> AMD Ryzen 5 5600G - 3.9Ghz</p>
        <p><b>Cooler:</b> Cooler Master MasterAir MA620P</p>
        <p><b>Placa Madre:</b> Gigabyte A520M DS3H</p>
        <p><b>Placa de video:</b> Gigabyte RTX 3080 Gaming OC 10G</p>
        <p><b>Memoria RAM:</b> Kingston FURY Beast ( 8GB x 2 ) - 3600Mhz</p>
        <p><b>Almacenamiento:</b> SSD Kingston 480GB / HDD Seagate 500GB</p>
        <p><b>Fuente:</b> EVGA SuperNOVA 850W GA Plus Gold</p>
        <p><b>Gabinete:</b> Cooler Master MasterBox MB520 ARGB</p>
      </div>
          
      <div className='workspace-container'>
        <h3>Periféricos</h3>
          <p><b>Monitor:</b> Samsung Odyssey G5 27p Curvo, WQHD 2K, 165Hz, 1ms</p>
          <p><b>Teclado:</b> Logitech G PRO</p>
          <p><b>Mouse:</b> Logitech G903 Lightspeed Wireless</p>
          <p><b>Mousepad:</b> Redragon Flick XL</p>
          <p><b>Auriculares:</b> Logitech G435 Lightspeed Wireless</p>
          <p><b>Webcam:</b> Logitech C925e 1080p/30fps</p>
      </div>
    </section>
  )
}

export default Workspace