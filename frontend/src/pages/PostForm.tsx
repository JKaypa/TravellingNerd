import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'
import { usePostForm } from "../hooks/PostForm";
import { useNavigate } from "react-router-dom";
import { writePost } from "../services/apiService";

export default function PostForm() {

  const form = usePostForm()
  const navigate = useNavigate()
  

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    
    const formData = new FormData()
    formData.append('title', form.title)
    formData.append('description', form.description)
    formData.append('author', form.author)
    formData.append('image', form.image)
    formData.append('content', form.content)
    try {
      const id = await writePost(formData)
      id && navigate(`/detail/${id}`)
    } catch (error) {
      console.error('Article not created');
    }
    
  }

  const conditionalLabel = (label: string) => form.image instanceof File ? form.image.name : label


  
  return (
    <form className="p-3 min-h-[400px] flex flex-col justify-around gap-5 md:w-[780px] self-center" onSubmit={submit}>
      <input type="text" placeholder="Title" value={form.title} onChange={form.setTitl} className="px-1 border border-zinc-400 rounded-md" />

      <textarea placeholder="Description" rows={4} value={form.description} onChange={form.setDesc} className="px-1 border border-zinc-400 rounded-md"/>

      <input type="text" placeholder="Author" value={form.author} onChange={form.setAuth} className="px-1 border border-zinc-400 rounded-md"/>

      <input type="file" id="file" onChange={form.setImg} className="hidden"/>

      <label htmlFor="file" className="p-1 bg-zinc-900 rounded-md text-white">{conditionalLabel('Image')}</label>

      <ReactQuill theme="snow" value={form.content} onChange={form.setCntnt} />

      <button type="submit" className="bg-zinc-900 p-4 rounded-md text-white font-medium hover:bg-zinc-700 active:bg-zinc-950">Post</button>
    </form>
  )
}
