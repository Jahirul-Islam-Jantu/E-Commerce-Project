import jwt from "jsonwebtoken";
import { JWT_EXPIRATION_DURATION, JWT_SECRET } from "../config/config.js";

export const EncodeToken = (email, user_id) => {
  let KEY = JWT_SECRET;
  let EXPIRE = JWT_EXPIRATION_DURATION;
  let PAYLOAD = { email: email, user_id: user_id };
  return jwt.sign(PAYLOAD, KEY, { expiresIn: EXPIRE });
};

export const DecodeToken = (token) => {
  try {
    let KEY = JWT_SECRET;
    return jwt.verify(token, KEY);
  } catch (e) {
    return null;
  }
};
