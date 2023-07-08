class ResponseMsg{
    constructor(){
        this.statusCode = statusCode;
        this.message = message;
    }
    toJson(){
        return (
            {
                "statusCode" : this.statusCode,
                "msg": this.message
            }
        )
    }
}

module.exports = ResponseMsg;
