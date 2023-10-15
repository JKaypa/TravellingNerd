import fileUpload, { UploadedFile } from 'express-fileupload'
import { blog, partialBlog } from '../types'
import BlogModel from './schemas/Blog'
import { config } from '../config/config'
import { cloudinaryUpload } from '../config/cloudinaryConfig'

export default class Blog {
  static async getAll() {
    return await BlogModel.find({}, 'title image description')
  }

  static async getById(id: string) {
    const blog = await BlogModel.findById(id)
    return blog ? blog : false
  }

  static async create(data: blog, file: fileUpload.FileArray | null | undefined) {
    
      const pic = file?.image as UploadedFile
      const picUrl = await cloudinaryUpload(pic.tempFilePath)
      data.image = picUrl.secure_url
      const newModel = await BlogModel.create(data)
      return newModel
    
  }

  static async update(
    id: string,
    data: partialBlog,
    pic: fileUpload.FileArray | null | undefined
  ) {
    if (pic && !(pic.image instanceof Array)) {
      const path = './src/pictures/' + pic.image.name
      pic.image.mv(path)
      data.image = config.picUrl + pic.image.name
    }
    const updatedBlog = await BlogModel.findByIdAndUpdate(id, data, {
      returnDocument: 'after',
    })
    return updatedBlog ? updatedBlog : false
  }
}
