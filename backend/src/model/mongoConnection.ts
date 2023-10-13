import { connect } from 'mongoose'
import 'dotenv/config'
const mongo = process.env.MONGO_URL as string

export default async function mongoConnection() {
  try {
    const db = await connect(mongo)
    console.log(`Success connection to ${db.connection.name} database` )
  } catch (error) {
    console.error('***connection failed****')
  }
}

mongoConnection()
