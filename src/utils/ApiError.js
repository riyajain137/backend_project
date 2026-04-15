//creating own error type instead of default JS erros
class ApiError extends Error {
    constructor(
        statusCode,//HTTP error (400, 404, 500 etc)
        message = "Something went wrong", //main error message
        errors = [], //detailed error
        stack = "" //error trave
    ){
    super(message) //this calls parent error constructor so js understands this is an error
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors
    }
}
export { ApiError }