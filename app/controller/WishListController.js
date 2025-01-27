import {
  getWishlist,
  saveToWishlistService,
  removeFromWishlistService,
} from "../services/WishListServices.js";

export const readWishlist = async (req, res) => {
  let result = await getWishlist(req);
  return res.status(200).json({ result: result });
};

export const addToWishList = async (req, res) => {
  let result = await saveToWishlistService(req);
  return res.status(200).json({ result: result });
};

export const removeFromWishList = async (req, res) => {
  let result = await removeFromWishlistService(req);
  return res.status(200).json({ result: result });
};
