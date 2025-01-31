import mongoose from "mongoose";

const CartSchema = mongoose.Schema(
  {
    productID: { type: mongoose.Schema.Types.ObjectId, required: true },
    userID: { type: mongoose.Schema.Types.ObjectId, required: true },
    color: { type: String, required: true },
    qty: { type: String, required: true },
    size: { type: String, required: true },
  },
  { timeStamps: true, versionKey: false }
);

const CartModel = mongoose.model("carts", CartSchema);
export default CartModel;
