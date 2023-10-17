import 'dotenv/config'

export const config = {
  
  port: process.env.PORT || 3001,
  mongoUrl: process.env.MONGO_URL,
  cloudName: process.env.CLOUD_NAME,
  apiKey: process.env.API_KEY,
  apiSecret: process.env.API_SECRET
  
}