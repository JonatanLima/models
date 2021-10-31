type UserMongoDB = {
	full_name: string,
	age: number,
	email: string,
	gender: string
}

type UserMySqlDB = {
	first_name: string,
	last_name: string,
	age: number,
	email: string,
	gender: string
}

export default class User {
	constructor(
		private readonly firstName: string,
		private readonly lastName: string,
		private readonly age: number,
		private readonly email: string,
		private readonly gender: string
	) {}

	private getFullName(): string {
		return `${this.firstName} ${this.lastName}`
	}

	public toMongoDB(): UserMongoDB {
		return {
			full_name: this.getFullName(),
			age: this.age,
			email: this.email,
			gender: this.gender
		}
	}

	public toMySqlDB(): UserMySqlDB {
		return {
			first_name: this.firstName,
			last_name: this.lastName,
			age: this.age,
			email: this.email,
			gender: this.gender
		}
	}
}
