import {EmailSend} from "../utilities/EmailHelper.js";
import UsersModel from "../model/UsersModel.js";

export const LogInUserService = async (req) => {
    try{
        let email = req.params.email;
        let code = Math.floor(100000 + Math.random() * 900000);
        let EmailSubject = "Email Verification"
        let EmailText = "Your Verification Email is "+ code;

        await EmailSend(email, EmailSubject, EmailText)
        await UsersModel.updateOne({email: email}, {$set: {otp: code}}, {upsert: true})
        return { status: "success", message:"6 Digit OTP send"}
    }catch(err){
        return { status: "failed", message:"Failed to verify email" }
    }
}
export const VerifyUserService = async (req) => {

}
export const LogOutUserService = async (req) => {}
export const CreateUserService = async (req) => {}
export const UpdateUserService = async (req) => {}
export const ReadUserService = async (req) => {}