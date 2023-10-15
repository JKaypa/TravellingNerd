import {v2 as cloudinary} from 'cloudinary'
import { config } from './config';


cloudinary.config({ 
  cloud_name: config.cloudName, 
  api_key: config.apiKey, 
  api_secret: config.apiSecret 
});

export const cloudinaryUpload = async (pic: string) => {
  return await cloudinary.uploader.upload(pic, {folder: 'Travelling Nerd'})
}