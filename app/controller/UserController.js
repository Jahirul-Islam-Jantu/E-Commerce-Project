import e from "express";
import {
  CreateUserService,
  LogInUserService,
  ReadUserService,
  UpdateUserService,
  VerifyUserService,
} from "../services/UsersServices.js";

export const LoginUser = async (req, res) => {
  let result = await LogInUserService(req);
  return res.status(200).json({ result });
};
export const VerifyLoginUser = async (req, res) => {
  let result = await VerifyUserService(req);
  if (result.status === "success") {
    // cookies set
    const cookieOptions = {
      expires: new Date(Date.now() + 3600000 * 24),
      httpOnly: false,
    };
    res.cookie("token", result.token, cookieOptions);
  } else {
    return res.status(200).json({ result });
  }
  return res.status(200).json({ result });
};
export const LogOutUser = async (req, res) => {
  const cookieOptions = {
    expires: new Date(Date.now() - 3600000 * 24),
    httpOnly: false,
  };
  res.cookie("token", "", cookieOptions);
  return res.status(200).json({ status: "success" });
};
export const CreateUser = async (req, res) => {
  let result = await CreateUserService(req);
  return res.status(200).json({ result });
};
export const UpdateUser = async (req, res) => {
  let result = await UpdateUserService(req);
  return res.status(200).json({ result });
};
export const ReadUser = async (req, res) => {
  let result = await ReadUserService(req);
  return res.status(200).json({ result });
};
