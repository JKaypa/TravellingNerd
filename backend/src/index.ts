import { app } from './app'
import mongoConnection from './model/mongoConnection'

const port = process.env.PORT || 3001

;(async function () {
  try {
    await mongoConnection()
    app.listen(port, () => console.log(`Database sync and server listening on port ${port}!`))
  } catch (error) {
    console.error('*****Connection failed!*****')
  }
})()
