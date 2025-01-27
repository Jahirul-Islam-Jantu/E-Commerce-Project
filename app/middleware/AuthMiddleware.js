import {DecodeToken} from "../utilities/TokenHelper.js";


export const authMiddleware = (req, res, next) => {
    let token = req.headers['token']
    if (!token) {
        token = req.cookies['token']
    }
    let decodeToken = DecodeToken(token)
    if (decodeToken === null || undefined){
        return res.status(401).json({status:"error",error:"No token provided"})
    }else{
        let email = decodeToken["email"]
        let user_id = decodeToken["user_id"]
        req.headers.email = email
        req.headers.user_id = user_id
        next()
    }

}