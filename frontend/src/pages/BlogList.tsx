import { useEffect, useState } from 'react'
import { getPosts } from '../services/apiService'
import { Blog } from '../types'

export default function BlogList() {
  const [blogList, setBlogList] = useState<Blog[]>([])

  useEffect(() => {
    const get = async () => {
      const blogs = (await getPosts()) as Blog[]
      setBlogList(blogs)
    }
    get()
  }, [])

  console.log(blogList)

  return (
    <>
      {blogList.map((blog) => {
        return (
          <main className='flex flex-col items-center p-4'>
            <section key={blog._id} className='flex flex-col gap-7 min-w-min max-w-md'>
              <div>
                <img src={blog.image} className='w-90 '/>
              </div>
              <div>
                <div>
                  <h2 className='text-sm text-zinc-900 font-bold'>{blog.title}</h2>
                  <p className='text-xs text-zinc-900'>{blog.description}</p>
                </div>
                <span className='bg-zinc-200 text-xs underline p-1'>Read more</span>
              </div>
            </section>
          </main>
        )
      })}
    </>
  )
}
