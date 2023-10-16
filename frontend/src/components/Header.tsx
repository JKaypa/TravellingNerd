
import { useState } from "react"
import { NavLink } from "react-router-dom"
import {HiMenu} from 'react-icons/hi'


export default function Header() {

  
  const [toogle, setToogle] = useState(false)

  
  toogle ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'

  return (
    <header className={`${'bg-zinc-900 flex justify-center items-center h-44 relative'}`}>
      <HiMenu onClick={() => setToogle(!toogle)} className='text-white absolute top-4 right-4 text-xl cursor-pointer md:hidden' />
      <h1 className="text-white text-xl font-thin">Travelling Nerd</h1>       
      <nav className={`text-sm text-white flex flex-col items-center gap-6 fixed top-44 transform ${toogle ? 'translate-x-0 overflow-y-hidden' : '-translate-x-full'} transition-transform z-10 bg-zinc-900 w-full h-screen`}>
        <NavLink to='/' onClick={() => setToogle(!toogle)}>Home</NavLink>
        <NavLink to='/write' onClick={() => setToogle(!toogle)}>Write</NavLink>
      </nav>
      <nav className="hidden text-white md:h-auto md:w-fit md:flex md:flex-row md:gap-10 md:absolute md:right-10 md:top-4 md:text-sm">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/write'>Write</NavLink>
      </nav>
    </header>
  )
}
