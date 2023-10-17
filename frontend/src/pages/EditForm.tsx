import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'
import axios from "axios";
import { Post } from "../types";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { url } from "../services/config";

export default function EditForm() {

  const {id} = useParams()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [author, setAuthor] = useState('')
  const [image, setImage] = useState<string | File >('')
  const [content, setContent] = useState('')
  
  
  useEffect(() => {
    const getBlog = async () => {
      const {data} = await axios<Post>(`${url}/${id}`)
      setTitle(data.title)
      setAuthor(data.author)
      setDescription(data.description)
      setContent(data.content)
    }

    getBlog()
  }, [id])

  
  const navigate = useNavigate()


  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    
    const formData = new FormData()
    formData.append('title', title)
    formData.append('description', description)
    formData.append('author', author)
    formData.append('image', image)
    formData.append('content', content)
    try {
      const {data} = await axios.put<Post>(url + id, formData)
      alert('Article edited')
      navigate(`/detail/${data._id}`)
    } catch (error) {
      console.error('Article not edited');
    }
    
  }

  
  const conditionalLabel = (label: string | false) => image instanceof File ? image.name : label


  console.log(image);
  
  return (
    content ? (<form className="p-3 min-h-[400px] flex flex-col justify-around gap-5 md:w-[780px] self-center" onSubmit={submit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="px-1 border border-zinc-400 rounded-md" />

      <textarea placeholder="Description" rows={4} value={description} onChange={(e) => setDescription(e.target.value)} className="px-1 border border-zinc-400 rounded-md"/>

      <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} className="px-1 border border-zinc-400 rounded-md"/>

      <input type="file" id="file" onChange={(e) => setImage(e.target.files ? e.target.files[0] : '')} className="hidden"/>

      <label htmlFor="file" className="p-1 bg-zinc-900 rounded-md text-white">{conditionalLabel('Image')}</label>

      <ReactQuill theme="snow" value={content} onChange={(value) => setContent(value)} />

      <button type="submit" className="bg-zinc-900 p-4 rounded-md text-white font-medium">Edit</button>
    </form>)
    : <img src="/Eclipse-1s-200px.svg" alt="" className="text-black w-20 m-auto"/>
  )
}
