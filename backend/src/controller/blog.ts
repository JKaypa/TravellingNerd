import { Request, Response } from "express";
import Blog from "../model/model";



class BlogController {
  static async getAllBlogs(req: Request, res: Response){
    try {
      const blogs = await Blog.getAll()
      res
    } catch (error) {
      error
    }

  }
}