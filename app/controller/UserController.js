import {
    CreateUserService,
    LogInUserService,
    LogOutUserService, ReadUserService,
    UpdateUserService,
    VerifyUserService
} from "../services/UsersServices.js";

export const LoginUser = async (req, res) => {
    let result = await LogInUserService(req)
    return res.status(200).json({result})
}
export const VerifyLoginUser = async (req, res) => {
    let result = await VerifyUserService(req)
    return res.status(200).json({result})
}
export const LogOutUser = async (req, res) => {
    let result = await LogOutUserService(req)
    return res.status(200).json({result})
}
export const CreateUser = async (req, res) => {
    let result = await CreateUserService(req)
    return res.status(200).json({result})
}
export const UpdateUser = async (req, res) => {
    let result = await UpdateUserService(req)
    return res.status(200).json({result})
}
export const ReadUser = async (req, res) => {
    let result = await ReadUserService(req)
    return res.status(200).json({result})
}





