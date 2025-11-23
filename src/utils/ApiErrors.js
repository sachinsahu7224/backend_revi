class apiErrors extends Error {
    constructor(message = "something went wrong",
        statck="",
         statusCode = 500, errors = []) {
        super(message);
        this.statusCode = statusCode;
        this.data= null
        this.message = message;
        this.sucess = false;
        this.errors = errors;
        if(statck){
            this.stack= statck;

        }else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { apiErrors }