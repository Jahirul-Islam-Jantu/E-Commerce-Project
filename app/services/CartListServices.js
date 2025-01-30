import CartModel from "../model/CartModel.js";
import mongoose from "mongoose";

const ObjectID = mongoose.Types.ObjectId;

export const CartListService = async (req) => {
  try {
  } catch (err) {}
};

export const SaveCartListService = async (req) => {
  try {
    let user_id = req.headers.user_id;
    let reqBody = req.body;
    reqBody.userID = user_id;
    await CartModel.create(reqBody);
    return {
      status: "success",
      message: "Product added to CartList",
    };
  } catch (err) {
    return {
      status: "failed",
      message: "Failed to add product to CartList",
      error: err,
    };
  }
};

export const DeleteCartListService = async (req) => {
  try {
    let user_id = req.headers.user_id;
    let reqBody = req.body;
    reqBody.userID = user_id;
    let result = await CartModel.deleteOne(reqBody);
    return {
      status: "success",
      count: result,
      message: "Product removed from CartList",
    };
  } catch (err) {
    return {
      status: "failed",
      message: "Failed to Delete product from CartList ",
      error: err,
    };
  }
};

export const UpdateCartListService = async (req) => {
  try {
  } catch (err) {
    return {
      status: "failed",
      message: "Failed to update product to CartList",
      error: err,
    };
  }
};
