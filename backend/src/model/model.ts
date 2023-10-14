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

  static async create(data: blog, pic: UploadedFile) {
    const path = './src/pictures/' + pic.name
    try {
      await pic.mv(path)
    } catch (error) {
      console.error('image.mv error', error)
    }
    data.image = config.picUrl + pic.name
    console.log(data)
    try {
      const newModel = await BlogModel.create(data)
      return newModel
    } catch (error) {
      console.error('create error', error)
    }
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
