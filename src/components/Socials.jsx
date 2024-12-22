import React from 'react'
// import { BsYoutube } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaYoutube } from "react-icons/fa";
import { BsGithub } from 'react-icons/bs'
import { FaBehance } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

const Socials = () => {
  return (
    <ul className='socials'>
      <li className='social-item'>
          <a className='social-link' href='https://twitter.com/Alexis_Paez_' target='_blank' rel='noreferrer' aria-label='Enlace a mi perfil de LinkedinIn'><FaLinkedinIn /></a>
        </li>

        <li className='social-item'>
          <a className='social-link' href='https://github.com/AlexisPaez11' target='_blank' rel='noreferrer' aria-label='Enlace a mi perfil de Github'><BsGithub /></a>
        </li>

        <li className='social-item'>
          <a className='social-link' href='https://twitter.com/Alexis_Paez_' target='_blank' rel='noreferrer' aria-label='Enlace a mi perfil de Dribbble'><FaDribbble /></a>
        </li>

        <li className='social-item'>
          <a className='social-link' href='https://twitter.com/Alexis_Paez_' target='_blank' rel='noreferrer' aria-label='Enlace a mi perfil de Behance'><FaBehance /></a>
        </li>

        <li className='social-item'>
          <a className='social-link' href='https://www.linkedin.com/in/alexis-paez-48867b1a4/' target='_blank' rel='noreferrer' aria-label='Enlace a mi perfil de Youtube'><FaYoutube /></a>
        </li>
        
    </ul>
  )
}

export default Socials