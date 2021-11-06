import config from '../../config'
import mongoose from 'mongoose'

mongoose.Promise = global.Promise

const user = config.mongo.MONGO_USER
const password = config.mongo.MONGO_PASSWORD
const host = config.mongo.MONGO_HOST
const port = config.mongo.MONGO_PORT

const mongoURL = `mongodb://${user}:${password}@${host}:${port}`

mongoose
    .connect(
        mongoURL,
        {
        },
        (e) => new Error('[MongoDB]: Connect error')
    )

mongoose
    .connection
    .on('error', (error) => console.error('[MongoDB]: Connection error', error))
    .once('open', () => console.log('[MongoDB]: Connection has been made'))
    .on('disconnected', () => console.log('[MongoDB]: Connection disconnected'))

process.on('SIGINT', () => {
    mongoose
        .connection
        .close(() => {
            console.log('[MongoDB]: Mongoose default connection is disconnected due to application termination')
            process.exit(0)
        })
})

export default mongoose
