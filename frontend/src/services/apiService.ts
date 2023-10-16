import axios from "axios"
import { Post } from "../types"
import { url } from "./config"



export const writePost = async (post: FormData) => {  
  try {
    const {data} = await axios.post<Post>(url, post)
    alert('Your article was posted successfully')
    return data._id
  } catch (error) {
    alert('Something failed')
  }
}

export const getPosts = async () => {  
  try {
    const {data} = await axios<Post[]>(url)
    return data
  } catch (error) {
    alert('Something failed')
  }
}
