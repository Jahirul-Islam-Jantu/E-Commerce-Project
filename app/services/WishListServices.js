import WishModel from "../model/WishModel.js";

export const getWishlist = async (req) => {};

export const saveToWishlistService = async (req) => {
  try {
    let user_id = req.headers.user_id;
    let reqBody = req.body;
    reqBody.userID = user_id;
    await WishModel.updateOne(reqBody, { $set: reqBody }, { upsert: true });
    return { status: "success", message: "Product added to wishlist" };
  } catch (err) {
    return {
      status: "failed",
      message: "Failed to add product to wishlist",
      error: err,
    };
  }
};

export const removeFromWishlistService = async (req) => {
  try {
    let user_id = req.headers.user_id;
    let reqBody = req.body;
    reqBody.userID = user_id;
    await WishModel.deleteOne(reqBody);
    return { status: "success", message: "Product removed from wishlist" };
  } catch (err) {
    return {
      status: "failed",
      message: "Failed to remove product from wishlist",
      error: err,
    };
  }
};
