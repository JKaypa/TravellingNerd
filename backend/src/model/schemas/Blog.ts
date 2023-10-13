import { getModelForClass, prop } from "@typegoose/typegoose";


class BlogClass {
  @prop({required: true, trim: true, unique: true})
  title!: string

  @prop({required: true, trim: true, unique: true})
  image!: string

  @prop({required: true, trim: true})
  author!: string

  @prop({required: true, trim: true, unique: true})
  description!: string

  @prop({required: true, trim: true, unique: true})
  content!: string
}

const BlogModel = getModelForClass(BlogClass)

export default BlogModel