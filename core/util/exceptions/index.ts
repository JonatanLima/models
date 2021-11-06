class DataAccessException extends Error {
    constructor (message: string) {
        super(message)
        this.name = 'DataAccessException'
    }
}

class RepositoryException extends Error {
    constructor (message: string) {
        super(message)
        this.name = 'RepositoryException'
    }
}

export {
    DataAccessException,
    RepositoryException
}
