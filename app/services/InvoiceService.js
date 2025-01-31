import mongoose from "mongoose";
import CartModel from "../model/CartModel.js";
const ObjectID = mongoose.Types.ObjectID;

export const CreateInvoiceService = async (req) => {
  //   try {
  let user_id = new ObjectID(req.headers.user_id);
  console.log(user_id, "Hello World");
  let cus_email = req.headers.user.email;
  // console.log(cus_email);
  // step:1 , calculate total payable and vat
  let matchStage = { $match: { userID: user_id } };
  // console.log(matchStage);
  let JoinStageProduct = {
    $lookup: {
      from: "products",
      localField: "productID",
      foreignField: "_id",
      as: "product",
    },
  };
  let unwindStage = { $unwind: "$product" };

  let cartProduct = await CartModel.aggregate([
    matchStage,
    JoinStageProduct,
    unwindStage,
  ]);
  // console.log(cartProduct);
  return { status: "success", data: cartProduct };
  //   } catch (err) {
  //     return { status: "failed", error: err };
  //   }
};
export const PaymentFailService = async (req) => {};
export const PaymentCancelService = async (req) => {};
export const PaymentIPNService = async (req) => {};
export const PaymentSuccessService = async (req) => {};
export const InvoiceListService = async (req) => {};
export const InvoiceProductListService = async (req) => {};
