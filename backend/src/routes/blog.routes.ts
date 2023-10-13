import { Router } from 'express'
import BlogController from '../controller/blog'

export const blogRoute = Router()

blogRoute.get('/', BlogController.getAllBlogs)
blogRoute.get('/:id', BlogController.getBlogById)
blogRoute.post('/', BlogController.createBlog)
blogRoute.put('/:id', BlogController.updateBlog)
