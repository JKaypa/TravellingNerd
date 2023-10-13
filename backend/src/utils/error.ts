import { Response } from "express";

export default function(statusCode: number, res: Response, message: string){
  res.status(statusCode).json({errorMessage: message});
}