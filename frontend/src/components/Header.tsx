import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
// import { blog } from "../types"

export default function Header() {

  const{ id }= useParams()
  const [image, setImage ] = useState(null)
  useEffect(() => {
    const blog = async () => {
      const {data} = await axios(`http://localhost:3001/api/blogs/${id}`)
      setImage(data.image)
      
    }
    blog()
  }, [id])

  return (
    <header className={`${image ? `bg[url(${image})]` : 'bg-zinc-900 flex justify-center items-center h-44'}`}>
      <h1 className="text-white text-xl font-thin">Travelling Nerd</h1>
    </header>
  )
}
