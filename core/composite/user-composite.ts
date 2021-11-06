import UserRepository from '../repositories/user-repository'
import { MongoDataAccess } from '../data-access'
import { UserModel } from '../models/user-model'

export default class UserComposite {
    static async create (user: UserModel) {
        return new UserRepository(
            new MongoDataAccess
        )
            .create(user)
    }

    static async list (options: {}) {
        return new UserRepository(
            new MongoDataAccess()
        )
            .list(options)
    }
}
