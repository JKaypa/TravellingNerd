import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'
import {useState} from 'react'
import axios from "axios";
import { Blog } from "../types";
import { useNavigate } from "react-router-dom";

export default function PostForm() {

  const [title, setTitle] = useState('')
  const [summary, setSummary] = useState('')
  const [author, setAuthor] = useState('')
  const [image, setImage] = useState<string | File>('')
  const [content, setContent] = useState('')

  const navigate = useNavigate()


  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('title', title)
    formData.append('summary', summary)
    formData.append('author', author)
    formData.append('image', image)
    try {
      const {data, status} = await axios.post<Blog>('http://localhost:3001/api/blogs')
      status === 200 ? alert('Your article was posted successfully') : alert('Something failed')
      navigate(`/${data._id}`)
    } catch (error) {
      alert('Something failed')
    }
  }


  console.log(image);
  
  return (
    <form className="p-3 min-h-[400px] flex flex-col justify-around gap-5" onSubmit={submit}>
      <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} className="px-1 border border-zinc-400 rounded-md" />
      <textarea placeholder="Summary" rows={4} value={summary} onChange={e => setSummary(e.target.value)} className="px-1 border border-zinc-400 rounded-md"/>
      <input type="text" placeholder="Author" value={author} onChange={e => setAuthor(e.target.value)} className="px-1 border border-zinc-400 rounded-md"/>
      <input type="file" id="file" onChange={e => setImage(e.target.files instanceof FileList ? e.target.files[0] : '')} className="hidden"/>
      <label htmlFor="file" className="p-1 bg-zinc-900 rounded-md text-white">{`${image instanceof File ? image.name : 'Image'}`}</label>
      <ReactQuill theme="snow" value={content} onChange={value => setContent(value)} />
      <button type="submit" className="bg-zinc-900 p-4 rounded-md text-white font-medium">Post</button>
    </form>
  )
}
