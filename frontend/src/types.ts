export interface Blog {
  _id: string
  title: string
  image: string
  author: string
  description: string
  content: string
}

export interface BlogListResponse {
  data: Blog[]
}
