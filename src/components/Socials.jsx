import React from 'react'
// import { BsYoutube } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'

const Socials = () => {
  return (
    <ul className='socials'>
        {/* <li className='social-item'>
          <a className='social-link' href='' target='_blank' rel='noreferrer' aria-label='Enlace a mi canal de youtube'><BsYoutube /></a>
        </li> */}

        <li className='social-item'>
          <a className='social-link' href='https://twitter.com/Alexis_Paez_' target='_blank' rel='noreferrer' aria-label='Enlace a mi perfil de twitter'><BsTwitter /></a>
        </li>
        
        <li className='social-item'>
          <a className='social-link' href='https://www.linkedin.com/in/alexis-paez-48867b1a4/' target='_blank' rel='noreferrer' aria-label='Enlace a mi perfil de linkedin'><FaLinkedinIn /></a>
        </li>
        
        <li className='social-item'>
          <a className='social-link' href='https://github.com/AlexisPaez11' target='_blank' rel='noreferrer' aria-label='Enlace a mi perfil de github'><BsGithub /></a>
        </li>
    </ul>
  )
}

export default Socials