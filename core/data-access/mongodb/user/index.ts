import User from '../../../db/mongodb/models/user'
import serializer from './serialize'
import { UserMongoDB } from '../../../mappers/user-mapper'
const { DataAccessException } = require('../../../util/exceptions')

export default class MongoDataAccess {
     async userList (options = {}) {
        try {
            const users = await User.find(options)
            return serializer(users)
        } catch (err) {
            throw new DataAccessException('Failed to lis users')
        }
    }

    async userCreate (user: UserMongoDB) {
        try {
            const userResult = await User.create(user)
            return serializer(userResult)
        } catch (err) {
            throw new DataAccessException('Failed to create user')
        }
    }

    async userUpdate (id: string, user: UserMongoDB) {
        try {
            const options = {new: true}
            return User.findByIdAndUpdate(id, user, options)
        } catch (err) {
            throw new DataAccessException('Failed to update user')
        }
    }

    async userDelete (id: string) {
        try {
            return User.findByIdAndDelete(id)
        } catch (err) {
            throw new DataAccessException('Failed do delete user')
        }
    }
}
