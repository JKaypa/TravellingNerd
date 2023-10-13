import { connect } from 'mongoose'
import 'dotenv/config'
import { config } from '../config/config'


export default async function mongoConnection() {
  try {
    const db = await connect(config.mongoUrl as string)
    console.log(`Success connection to ${db.connection.name} database` )
  } catch (error) {
    console.error('***connection failed****')
  }
}
