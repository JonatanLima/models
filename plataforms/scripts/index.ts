import UserComposite from "../../core/composite/user-composite";

const user = {
	firstName: 'Balu',
	lastName: 'Bear',
	age: 26,
	email: 'balu.bear@mail.com',
	gender: 'masc'
}

;(async () => {
	const userCreate = await UserComposite.create(user)

	console.log('userCreate', userCreate)

	const userList = await UserComposite.list({})

	console.log('userList', userList)
})()
