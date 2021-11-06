export type UserModel = {
	firstName: string,
	lastName: string,
	age: number,
	email: string,
	gender: string
}

export default class User {
	constructor(
		readonly firstName: string,
		readonly lastName: string,
		readonly age: number,
		readonly email: string,
		readonly gender: string
	) {}

	public getFullName(): string {
		return `${this.firstName} ${this.lastName}`
	}
}
