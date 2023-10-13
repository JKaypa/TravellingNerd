import { NextFunction, Request, Response } from 'express'
import errorHandler from '../utils/error'

function validator(req: Request, res: Response, next: NextFunction) {
  const { title, image, author, description, content } = req.body
  if (title && image && author && description && content) next()
  else errorHandler(res, 400, "Missing data")
}
