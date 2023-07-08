const ResponseMsg = require("../class/message");

const privateMiddleware = (req, res, next) => {
    const session = req.session;
    if(session){
        next();
    }else{
        const message = new ResponseMsg(401, "인증 권한이 필요합니다");
        res.json(message);
    }
}