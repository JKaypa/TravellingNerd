import { useEffect, useState } from 'react'
import { getPosts } from '../services/apiService'
import Blog from '../components/Blog'
import { Post } from '../types'


export default function BlogList() {
  const [postList, setPostList] = useState<Post[]>([])

  useEffect(() => {
    const get = async () => {
      const posts = await getPosts()
      posts && setPostList(posts)
    }
    get()
  }, [])

  console.log(postList)

  return (
    <main className="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-5 items-center bg-slate-400 p-10">
      {postList.map((post) => {
        return (
         <Blog key={post._id} id={post._id} image={post.image} title={post.title} desc={post.description}/>
        )
      })}
    </main>
    
  )
}
