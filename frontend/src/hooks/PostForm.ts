import {useState} from 'react'

export const usePostForm = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [author, setAuthor] = useState('')
  const [image, setImage] = useState<string | File>('')
  const [content, setContent] = useState('')
    
  const setTitl = (event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)
  const setDesc = (event: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(event.target.value)
  const setAuth = (event: React.ChangeEvent<HTMLInputElement>) => setAuthor(event.target.value)
  const setImg = (event: React.ChangeEvent<HTMLInputElement>) => setImage(event.target.files instanceof FileList ? event.target.files[0] : '')
  const setCntnt = (event: string) => setContent(event)
  
  return {title, setTitl, description, setDesc, author, setAuth, image, setImg, content, setCntnt}
}