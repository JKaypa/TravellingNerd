import { catchError } from "../utils/catchError"
import BlogController from "./blog"

export const controller = {
  getAllBlogs: catchError(BlogController.getAllBlogs),
  getBlogById: catchError(BlogController.getBlogById),
  createBlog: catchError(BlogController.createBlog),
  updateBlog: catchError(BlogController.updateBlog)
}




