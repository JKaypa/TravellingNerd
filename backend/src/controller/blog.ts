import { Request, Response } from 'express'
import Blog from '../model/model'
import errorHandler from '../utils/error'

export default class BlogController {
  static async getAllBlogs(_req: Request, res: Response) {
    try {
      res.json(await Blog.getAll())
    } catch (error) {
      errorHandler(res)
    }
  }

  static async getBlogById(req: Request, res: Response) {
    try {
      const { id } = req.params
      const blog = await Blog.getById(id)
      blog 
        ? res.json(blog) 
        : errorHandler(res, 404, 'Blog not found!')
    } catch (error) {
      errorHandler(res)
    }
  }

  static async createBlog(req: Request, res: Response) {
    try {
      const newBlog = Blog.create(req.body)
      res.status(201).json(newBlog)
    } catch (error) {
      errorHandler(res)
    }
  }

  static async updateBlog(req: Request, res: Response) {
    try {
      const { id } = req.params
      const updatedBlog = Blog.update(id, req.body)
      updatedBlog
        ? res.json(updatedBlog)
        : errorHandler(res, 404, 'Blog not found!')
    } catch (error) {
      errorHandler(res)
    }
  }
}
