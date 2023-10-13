import { Response } from "express";

export default function errorHandler (statusCode: number = 500, res: Response, message: string = 'Somethig has failed!'){
  res.status(statusCode).json({errorMessage: message});
}