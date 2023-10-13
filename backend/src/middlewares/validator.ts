import { NextFunction, Request, Response } from 'express'
import errorHandler from '../utils/error'

export default function validator(req: Request, res: Response, next: NextFunction) {
  
  const { title, author, description, content } = req.body
  if (title && req.files && author && description && content) 
    next()
  else return errorHandler(res, 400, "Missing data")
}
