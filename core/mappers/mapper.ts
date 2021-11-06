export interface Mapper {
	toDomain(model: Object): Object
	toMongoDB?(model: Object): Object
	toMysqlDB?(model: Object): Object
}
