
import { useEffect, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import {HiMenu} from 'react-icons/hi'
import axios from "axios"
// import { url } from "../services/config"
import { Post } from "../types"




export default function Header() {
  
  const location = useLocation()
  const [image, setImage] = useState('')
  const [toogle, setToogle] = useState(false)

  const id = location.pathname.split('/').pop()
  console.log(id);
  
  useEffect(() => {
    const getImage =async () => {
      if(id){
        const {data} = await axios<Post>('https://travellingnerd.onrender.com/blogs/' + id)
        setImage(data.image)  
      }
    }
    getImage()
    return () => {
      setImage('')
    }

  }, [id])

  console.log(image);
  
  toogle ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'

  return (
    <header style={{backgroundImage: toogle ? '':`URL(${image}) `}} className={`${image && !toogle? 'h-96 bg-cover bg-center' :'bg-zinc-900 flex justify-center items-center h-44 relative'} duration-200`}>
      <HiMenu onClick={() => setToogle(!toogle)} className='text-white absolute top-4 right-4 text-xl cursor-pointer [image-shadow:_1px_1px_1px_rgb(0_0_0_/_100%)] md:hidden' />
      <h1 className={`text-white text-xl font-thin [text-shadow:_1px_1px_1px_rgb(0_0_0_/_100%)] ${image && 'ml-3 mt-3'}`}>Travelling Nerd</h1>       
      <nav className={`text-sm text-white flex flex-col items-center gap-6 fixed top-44 transform ${toogle ? 'translate-x-0 overflow-y-hidden' : '-translate-x-full'} transition-transform z-10 bg-zinc-900 w-full h-screen md:hidden`}>
        <NavLink to='/' onClick={() => setToogle(!toogle)}>Home</NavLink>
        <NavLink to='/write' onClick={() => setToogle(!toogle)}>Write</NavLink>
      </nav>
      <nav className="hidden text-white md:h-auto md:w-fit md:flex md:flex-row md:gap-10 md:absolute md:right-10 md:top-4 md:text-sm">
        <NavLink to='/' className='[text-shadow:_1px_1px_1px_rgb(0_0_0_/_100%)]'>Home</NavLink>
        <NavLink to='/write' className='[text-shadow:_1px_1px_1px_rgb(0_0_0_/_100%)]'>Write</NavLink>
      </nav>
    </header>
  )
}
