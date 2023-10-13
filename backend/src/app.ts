import express from 'express'
import fileupload from 'express-fileupload'
import cors from 'cors'
import { router } from './routes/index.routes'
import path from 'path'

export const app = express()

app.use(fileupload())
app.use('/pictures', express.static(path.join(__dirname, '/pictures')))
app.use(express.json())
app.use(cors())
app.use('/api', router)
