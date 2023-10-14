import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { url } from "../services/config"
import { Blog } from "../types"

export default function Header() {

  const{ id }= useParams()
  const [image, setImage ] = useState('')
  useEffect(() => {
    const blog = async () => {
      if(id){
        const {data} = await axios<Blog>(`${url}/${id}`)
        setImage(data._id)
      }
    }
    blog()
  }, [id])

  return (
    <header className={`${image ? `bg[url(${image})]` : 'bg-zinc-900 flex justify-center items-center h-44'}`}>
      <h1 className="text-white text-xl font-thin">Travelling Nerd</h1>
    </header>
  )
}
