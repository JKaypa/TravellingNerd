import { Response } from "express";

export default function errorHandler (res: Response, statusCode: number = 500, message: string = 'Somethig has failed!'){
  res.status(statusCode).json({errorMessage: message});
}