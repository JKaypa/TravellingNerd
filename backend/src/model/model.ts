import { blog, partialBlog } from '../types'
import BlogModel from './schemas/Blog'

export default class Blog {
  static async getAll() {
    return await BlogModel.find({}, 'title image description')
  }

  static async getById(id: string) {
    const blog = await BlogModel.findById(id)
    return blog ? blog : false
  }

  static async create(data: blog) {
    return await BlogModel.create(data)
  }

  static async update(id: string, data: partialBlog) {
    const updatedBlog = await BlogModel.findByIdAndUpdate(id, data, {returnDocument: "after"})
    return updatedBlog ? updatedBlog : false
  }
}
