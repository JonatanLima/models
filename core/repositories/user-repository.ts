import { RepositoryException } from '../util/exceptions'
import UserMapper from '../mappers/user-mapper'
import { MongoDataAccess } from '../data-access/index'
import User, {UserModel} from "../models/user-model";

export default class UserRepository {
    constructor (
        private readonly dataAccess: MongoDataAccess,
    ) {}

    async create ({ firstName, lastName, email, age, gender }: UserModel) {
        try {
            const user = new User(
                firstName,
                lastName,
                age,
                email,
                gender
            )
            const userMapper = new UserMapper()
            return this.dataAccess.userCreate(userMapper.toMongoDB(user))
        } catch (err) {
            throw new RepositoryException('Repository failed')
        }
    }

    async list (options: {}) {
       try {
            return this.dataAccess.userList(options)
       } catch (err) {
           throw new RepositoryException('Repository failed')
       }
    }
}
