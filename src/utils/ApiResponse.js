class ApiResponse{
    constructor(statusCode , data, message = "Success"){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}
//ApiResponse is a class that is used to send a response to the client in a consistent format
//Status Code =>
//100-199 => Informational
//200-299 => Success
//300-399 => Redirection
//400-499 => Client Error
//500-599 => Server Error
export { ApiResponse }