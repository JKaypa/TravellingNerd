import { Router } from "express"
import { blogRoute } from "./blog.routes"

export const router = Router()

router.use('/blogs', blogRoute)