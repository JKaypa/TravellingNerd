import { Router } from "express";
import BlogController from "../controller/blog";
import validator from "../middlewares/validator";
import { controller } from "../controller";

export const blogRoute = Router();

blogRoute.get("/", controller.getAllBlogs);
blogRoute.get("/:id", controller.getBlogById);
blogRoute.post("/", controller.createBlog);
blogRoute.put("/:id", controller.updateBlog);
