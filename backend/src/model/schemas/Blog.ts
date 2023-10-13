import { getModelForClass, prop } from "@typegoose/typegoose";


class BlogClass {
  @prop({required: true})
  title!: string

  @prop({required: true})
  image!: string

  @prop({required: true})

  @prop({required: true})
  description!: string

  @prop({required: true})
  content!: string
}

const Blog = getModelForClass(BlogClass)

export default Blog