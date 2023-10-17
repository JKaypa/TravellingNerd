import { Link, useParams } from "react-router-dom"
import {useEffect, useState} from 'react'
import axios from "axios"
import { Post } from "../types"
import { url } from "../services/config"
import {AiFillEdit} from 'react-icons/ai'


export default function BlogDetail() {
  const {id} = useParams()
  const [post, setPost] = useState<Post>()
  

  useEffect(() => {
    const getPost = async() => {
      if (id){
        const {data} = await axios<Post>(url+id)
        setPost(data)
      }
    }
    getPost()
    
  }, [id])

  
  return (

    post ? (<article className="p-4 md:w-3/4 m-auto flex flex-col gap-4">
    <span className="">By {post?.author}</span>
    <h1 className="text-xl text-zinc-900 font-bold md:text-3xl">{post?.title}</h1>
    <h2 className="text-sm font-semibold md:text-lg">{post?.description}</h2>
    <p dangerouslySetInnerHTML={{__html: post? post.content : ''}} className="text-xs md:text-base"/>
    <Link to={`/edit/${post?._id}`} className="bg-zinc-500 p-3 text-white flex items-center justify-center gap-2">Edit<AiFillEdit/></Link>
    </article>)
    : <img src="/Eclipse-1s-200px.svg" alt="" className="text-black w-20 m-auto"/>
  )
}
