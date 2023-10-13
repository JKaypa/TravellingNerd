import fileUpload, { UploadedFile } from 'express-fileupload'
import { blog, partialBlog } from '../types'
import BlogModel from './schemas/Blog'
import { config } from '../config/config'

export default class Blog {
  static async getAll() {
    return await BlogModel.find({}, 'title image description')
  }

  static async getById(id: string) {
    const blog = await BlogModel.findById(id)
    return blog ? blog : false
  }

  static async create(data: blog, pic: fileUpload.FileArray | null | undefined) {
    if(pic && !(pic.image instanceof Array)){
      const image: UploadedFile = pic.image
      const path = './src/pictures/' + image.name
      image.mv(path) 
      data.image = config.picUrl + image.name
      return await BlogModel.create(data)
    }
    
  }

  static async update(id: string, data: partialBlog, pic: fileUpload.FileArray | null | undefined) {
    if(pic && !(pic.image instanceof Array)){
      const path = './src/pictures/' + pic.image.name
      pic.image.mv(path)
      data.image = config.picUrl + pic.image.name
    }
    const updatedBlog = await BlogModel.findByIdAndUpdate(id, data, {returnDocument: "after"})
    return updatedBlog ? updatedBlog : false
  }
}
