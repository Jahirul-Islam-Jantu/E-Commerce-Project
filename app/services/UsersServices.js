import { EmailSend } from "../utilities/EmailHelper.js";
import UsersModel from "../model/UsersModel.js";
import { EncodeToken } from "./../utilities/TokenHelper.js";
import ProfileModel from "../model/ProfileModel.js";

export const LogInUserService = async (req) => {
  try {
    let email = req.params.email;
    let code = Math.floor(100000 + Math.random() * 900000);
    let EmailText = `Your Verification Code is= ${code}`;
    let EmailSubject = "Email Verification";

    await EmailSend(email, EmailSubject, EmailText);
    await UsersModel.updateOne(
      { email: email },
      { $set: { otp: code } },
      { upsert: true }
    );
    return { status: "success", message: "6 Digit OTP send" };
  } catch (err) {
    console.error("Email verification failed:", err);
    return { status: "failed", message: "Failed to verify email" };
  }
};
export const VerifyUserService = async (req) => {
  try {
    let email = req.params.email;
    let otp = req.params.otp;

    let total = await UsersModel.find({
      email: email,
      otp: otp,
    }).countDocuments();
    if (total === 1) {
      let user_id = await UsersModel.find({ email: email, otp: otp }).select(
        "_id"
      );
      let token = EncodeToken(email, user_id[0]["_id"].toString());
      await UsersModel.updateOne({ email: email }, { $set: { otp: "0" } });
      return { status: "success", message: "Valid OTP", token: token };
    } else {
      return { status: "failed", message: "Invalid OTP" };
    }
  } catch (err) {
    return { status: "failed", message: "Failed to verify email" };
  }
};

export const SaveProfileUserService = async (req) => {
  try {
    let user_id = req.headers.user_id;
    let reqBody = req.body;
    reqBody.userID = user_id;

    await ProfileModel.updateOne(
      { userID: user_id },
      { $set: reqBody },
      { upsert: true }
    );
    return {
      status: "success",
      message: "User Saved successfully",
    };
  } catch (err) {
    return { status: "failed", message: "Failed to create user", error: err };
  }
};
export const ReadUserService = async (req) => {
  try {
    let user_id = req.headers.user_id;
    let userProfile = await ProfileModel.findOne({ userID: user_id });
    return {
      status: "success",
      message: "User Found",
      userProfile: userProfile,
    };
  } catch (err) {
    return { status: "failed", message: "Failed to read user", error: err };
  }
};
