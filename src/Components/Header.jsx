import React from 'react'
import Logo from "../assets/logo.jpg"

const Header = () => {
  return (
    <header className='py-3 w-full absolute top-0 bg-black bg-opacity-70'>
        <nav className="container flex justify-between items-center">
            <a href="" className="text-5xl uppercase flex items-center gap-5">
                <img src={Logo} className='w-[3rem] object-cover rounded-full' alt="" />
                mongul
            </a>
            <a href="" className="capitalize hover:text-purple-500">buy now</a>
        </nav>
    </header>
  )
}

export default Header