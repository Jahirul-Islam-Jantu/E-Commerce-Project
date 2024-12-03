import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    email:{type:String, required:true, unique: true, lowerCase:true},
    otp:{type:String, required:true}
}, {timeStamp:true, versionKey:false})

const UsersModel = mongoose.model('users', UserSchema)
export default UsersModel