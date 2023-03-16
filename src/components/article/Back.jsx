import React from 'react'
import { NavLink } from "react-router-dom";
import { IoIosArrowBack } from 'react-icons/io' // Back

const Back = () => {
  return (
    <NavLink to="/Blog" className='btn btn-back'><IoIosArrowBack /></NavLink>
  )
}

export default Back