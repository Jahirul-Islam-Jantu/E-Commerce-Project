import {
  CartListService,
  DeleteCartListService,
  SaveCartListService,
  UpdateCartListService,
} from "../services/CartListServices.js";

export const CartListController = async (req, res) => {
  let result = await CartListService(req);
  return res.status(200).json({ result: result });
};
export const SaveCartListController = async (req, res) => {
  let result = await SaveCartListService(req);
  return res.status(200).json({ result: result });
};
export const UpdateCartListController = async (req, res) => {
  let result = await UpdateCartListService(req);
  return res.status(200).json({ result: result });
};
export const DeleteCartListController = async (req, res) => {
  let result = await DeleteCartListService(req);
  return res.status(200).json({ result: result });
};
