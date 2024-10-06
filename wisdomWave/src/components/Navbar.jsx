import React from 'react'
import { useState } from 'react'

import { close, logo, menu} from  '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt='wisdomWave' className="w-[193px] h-[50px]" />

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav,index) => (
          <li
            key = {nav.id}
            className = {`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length -1 ? 'mr-0' : 'mr-10'} text-white`}
          >
            <a href = {`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img 
          className='W-[20px] h-[20px] object-contain'
          alt='menu' 
          src={toggle ? close : menu}
          onClick={() => setToggle((prev) => !prev)} />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>

        <ul className='list-none flex-col justify-end items-center flex-1'>
        {navLinks.map((nav,index) => (
          <li
            key = {nav.id}
            className = {`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length -1 ? 'mr-0' : 'mb-4'} text-white`}
          >
            <a href = {`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
        </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
