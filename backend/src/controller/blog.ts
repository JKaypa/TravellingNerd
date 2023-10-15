import { Request, Response } from 'express'
import Blog from '../model/model'
import errorHandler from '../utils/error'

export default class BlogController {
  static async getAllBlogs(_req: Request, res: Response) {
    res.json(await Blog.getAll())
  }

  static async getBlogById(req: Request, res: Response) {
    const { id } = req.params
    const blog = await Blog.getById(id)
    blog ? res.json(blog) : errorHandler(res, 404, 'Blog not found!')
  }

  static async createBlog(req: Request, res: Response) {
    const newBlog = await Blog.create(req.body, req.files)
    res.status(201).json(newBlog)
  }

  static async updateBlog(req: Request, res: Response) {
    const { id } = req.params
    const updatedBlog = await Blog.update(id, req.body, req.files)
    updatedBlog
      ? res.json(updatedBlog)
      : errorHandler(res, 404, 'Blog not found!')
  }
}
