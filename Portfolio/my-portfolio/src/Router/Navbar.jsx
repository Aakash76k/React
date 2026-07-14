import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (

    <>
    
     <nav className="flex justify-between items-center px-8 py-4 bg-black max-w-6xl mx-auto ">
        <div className="text-2xl font-bold text-white ">Aakash</div>
        <ul className="flex gap-6 list-none text-white ">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/Project">Project</NavLink></li>
            <li><NavLink to="/Post">Post</NavLink></li>
            <li><NavLink to="/About">About</NavLink></li>
            <li><NavLink to="/Dark">Dark</NavLink></li>

            
            
        </ul>
      </nav>
    </>
    
     
    
  )
}

export default Navbar;
