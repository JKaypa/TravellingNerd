import { getModelForClass, prop } from "@typegoose/typegoose";


class BlogClass {
  @prop({required: true})
  title!: string

  @prop({required: true})
  image!: string

  @prop({required: true})
  author!: string

  @prop({required: true})
  description!: string

  @prop({required: true})
  content!: string
}

const BlogModel = getModelForClass(BlogClass)

export default BlogModel