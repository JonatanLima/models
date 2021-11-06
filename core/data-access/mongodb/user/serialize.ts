import { UserMongoDBData } from '../../../db/mongodb/models/user'

const _serializeSingle = (user: UserMongoDBData) => {
    return {
        id: user._id,
        full_name: user.full_name,
        email: user.email,
        age: user.age,
        gender: user.gender
    }
}

const serializer = (data: any) => {
    if (!data) {
        return null
    }
    if (Array.isArray(data)) {
        return data.map(_serializeSingle)
    }
    return _serializeSingle(data)
}

export default serializer
