import User from '../models/user-model';
import { Mapper } from './mapper'

export default class UserMapper implements Mapper {
	public toDomain(model: User) {
		return model
	}

	public toMongoDB(model: User) {
		return {
			full_name: model.getFullName(),
			age: model.age,
			email: model.email,
			gender: model.gender
		}
	}

	 public toMysqlDB(model: User) {
		return {
			first_name: model.firstName,
			last_name: model.lastName,
			age: model.age,
			email: model.email,
			gender: model.gender
		}
	}

	public toVisualizer(model: User) {
		return {
			fullName: model.getFullName(),
			email: model.email
		}
	}
}
