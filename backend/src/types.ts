export interface blog {
  title: string
  image: string
  author: string
  description: string
  content: string
}

export type partialBlog = Partial<blog>