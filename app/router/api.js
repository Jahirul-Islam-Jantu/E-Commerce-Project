import express from "express";
import * as ProductController from "../controller/ProductController.js";
import * as UserController from "../controller/userController.js";
import { authMiddleware } from "./../middleware/AuthMiddleware.js";
import * as WishController from "../controller/WishListController.js";
import * as CartController from "../controller/CartListController.js";
import * as InvoiceController from "../controller/InvoiceController.js";

const router = express.Router();

// Product routes
router.get("/ProductBrandList", ProductController.ProductBrandList);
router.get("/ProductCategoryList", ProductController.ProductCategoryList);
router.get("/ProductSliderList", ProductController.ProductSliderList);
router.get(
  "/ProductListByBrand/:BrandID",
  ProductController.ProductListByBrand
);
router.get(
  "/ProductListByCategory/:CategoryID",
  ProductController.ProductListByCategory
);
router.get(
  "/ProductListBySimilier/:CategoryID",
  ProductController.ProductListBySimilier
);
router.get("/ProductDetails/:ProductID", ProductController.ProductDetails);
router.get(
  "/ProductListByKeyword/:Keyword",
  ProductController.ProductListByKeyword
);
router.get(
  "/ProductListByRemark/:Remark",
  ProductController.ProductListByRemark
);
router.get(
  "/ProductListByReview/:ProductID",
  ProductController.ProductListByReview
);

// User routes
router.get("/userOTP/:email", UserController.LoginUser);
router.get("/VerifyLoginUser/:email/:otp", UserController.VerifyLoginUser);
router.get("/LogOutUser", authMiddleware, UserController.LogOutUser);
router.post("/CreateUser", authMiddleware, UserController.CreateUser);
router.post("/UpdateUser", authMiddleware, UserController.UpdateUser);
router.get("/ReadUser", authMiddleware, UserController.ReadUser);

// wish list routes
router.get("/WishList", authMiddleware, WishController.readWishlist);
router.post("/addToWishList", authMiddleware, WishController.addToWishList);
router.delete(
  "/removeFromWishList",
  authMiddleware,
  WishController.removeFromWishList
);

// cart List routes

router.get("/CartList", authMiddleware, CartController.CartListController);
router.post(
  "/addToCart",
  authMiddleware,
  CartController.SaveCartListController
);
router.put(
  "/updateCart/:cartID",
  authMiddleware,
  CartController.UpdateCartListController
);
router.post(
  "/deleteCart",
  authMiddleware,
  CartController.DeleteCartListController
);

// Invoice routes
router.get(
  "/CreateInvoice",
  authMiddleware,
  InvoiceController.CreateInvoiceController
);

router.get(
  "/InvoiceList",
  authMiddleware,
  InvoiceController.InvoiceListController
);
router.get(
  "/InvoiceProductList/:invoice_id",
  authMiddleware,
  InvoiceController.InvoiceProductListController
);

router.post(
  "/PaymentSuccess/:trxID",
  InvoiceController.PaymentSuccessController
);
router.post("/PaymentCancel/:trxID", InvoiceController.PaymentCancelController);
router.post("/PaymentFail/:trxID", InvoiceController.PaymentFailController);
router.post("/PaymentIPN/:trxID", InvoiceController.PaymentIPNController);

export default router;
