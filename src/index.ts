import User from './models/user-model'
import UserMapper from './mappers/user-mapper'

(() => {
	const user = new User(
		'Balu',
		'Bear',
		20,
		'balu.bear@mail.com',
		'masc'
	)
	const mapper = new UserMapper()

	console.log(user)
	console.log(mapper.toDomain(user))
	console.log(mapper.toMysqlDB(user))
	console.log(mapper.toMongoDB(user))
	console.log(typeof user)
})()
