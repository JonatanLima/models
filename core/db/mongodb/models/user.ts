import mongoose from '../connection'

export type UserMongoDBData = {
    _id: string,
    full_name: string,
    age: number,
    email: string
    gender: string
}

const Schema = mongoose.Schema
const UserSchema = new Schema({
    full_name: {
        type: String,
        required: true
    },
    age: Number,
    email: {
        type: String,
        required: true
    },
    gender: String
})

const NoteModel = mongoose.model('user', UserSchema)

export default NoteModel
