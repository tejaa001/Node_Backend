class ApiError extends Error {
    constructor(
        statusCode,
        message = "Someting Went Wrong",
        errors = [],
        stack =""

    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = this.errors
    }
}

export default ApiError