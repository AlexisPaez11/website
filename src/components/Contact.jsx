import React, { useState } from 'react'
import Socials from './Socials'

const Contact = () => {
  const[name, setName] = useState('')
  const[email, setEmail] = useState('')
  const[message, setMessage] = useState('')
  
  return (
    <section id='contact' className='contact-section'>
        <div className='contact-container'>
          <h3>CONTACTO</h3>
          <p>Estoy interesado en oportunidades freelance y la posibilidad de unirme a un equipo de desarrolladores. Sin embargo, si tienes otra petición o pregunta, no dudes en utilizar el formulario.</p>
          <Socials />
        </div>
          
        <form id="form" className='form' action="https://formspree.io/f/mknyekbv" method="POST">
          <div className="name">
            <label htmlFor='name'>Nombre</label>
            <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Tu nombre" required aria-labelledby="name"/>
          </div>

          <div className='email'>
            <label htmlFor='email'>Email</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="persona@ejemplo.com" required aria-labelledby="email"/>
          </div>

          <div className="message">
            <label htmlFor='massage'>Mensaje</label>
            <textarea id="massage" name="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Deja tu mensaje.." required aria-labelledby="mesagge"></textarea>
          </div>

          <button className='submit btn btn-primary' type="submit" aria-labelledby="submit">Enviar</button>
        </form>
    </section>
  )
}

export default Contact