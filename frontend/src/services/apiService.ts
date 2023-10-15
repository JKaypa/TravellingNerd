import axios from "axios"
import { Blog } from "../types"
import { url } from "./config"



export const writePost = async (post: FormData) => {  
  try {
    const {data} = await axios.post<Blog>(url, post)
    alert('Your article was posted successfully')
    return data._id
  } catch (error) {
    alert('Something failed')
  }
}

export const getPosts = async () => {  
  try {
    const {data} = await axios<Blog[]>(url)
    return data
  } catch (error) {
    alert('Something failed')
  }
}
