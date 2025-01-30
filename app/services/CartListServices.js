import CartModel from "../model/CartModel.js";
import mongoose from "mongoose";

const ObjID = mongoose.Types.ObjectId;

export const CartListService = async (req) => {
  try {
    let user_id = new ObjID(req.headers.user_id); // req.headers.user_id;
    let matchStage = { $match: { userID: user_id } };

    let JoinStageProduct = {
      $lookup: {
        from: "products",
        localField: "productID",
        foreignField: "_id",
        as: "product",
      },
    };
    let unwindProductStage = { $unwind: "$product" };

    let JoinStageBrand = {
      $lookup: {
        from: "brands",
        localField: "product.brandID",
        foreignField: "_id",
        as: "brand",
      },
    };
    let unwindBrandStage = { $unwind: "$brand" };

    let JoinStageCategory = {
      $lookup: {
        from: "categories",
        localField: "product.categoryID",
        foreignField: "_id",
        as: "category",
      },
    };
    let unwindCategoryStage = { $unwind: "$category" };

    let projectionStage = {
      $project: {
        _id: 0,
        userID: 0,
        createdAt: 0,
        updatedAt: 0,
        "product._id": 0,
        "product.categoryID": 0,
        "product.brandID": 0,
        "brand._id": 0,
        "category._id": 0,
      },
    };

    let data = await CartModel.aggregate([
      matchStage,
      JoinStageProduct,
      unwindProductStage,
      JoinStageBrand,
      unwindBrandStage,
      JoinStageCategory,
      unwindCategoryStage,
      projectionStage,
    ]);

    return { status: "success", data: data };
  } catch (err) {
    return {
      status: "failed",
      message: "Failed to get products from CartList",
      error: err,
    };
  }
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
