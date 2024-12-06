import BrandModel from "../model/BrandModel.js";
import CategoryModel from "../model/CategoryModel.js";
import ProductSliderModel from "../model/ProductSliderModel.js";
import mongoose from "mongoose";
import ProductsModel from "../model/ProductsModel.js";



const ObjectID = mongoose.Types.ObjectId;

export const ProductBrandListService = async () => {
    try{
        let data = await BrandModel.find()
        return ({status:"Success", data:data})
    }catch(error){
        return ({status:"error",error:error})
    }
}
export const ProductCategoryListService = async () => {
    try{
        let data = await CategoryModel.find()
        return ({status:"Success", data:data})
    }catch(error){
        return ({status:"error",error:error})
    }
}
export const ProductSliderListService = async () => {
    try{
        let data = await ProductSliderModel.find()
        return ({status:"Success", data:data})
    }catch(error){
        return ({status:"error",error:error})
    }
}
export const ProductListByBrandService = async (req) => {
    try{
        let BrandID = new ObjectID(req.params.BrandID)
        let MatchStage = {$match:{brandID:BrandID}}
        let JoinWithBrandStage= {$lookup:{from:"brands", localField:"brandID", foreignField:"_id", as:"brands"}}
        let JoinWithCategoryStage = {$lookup:{from:"categories", localField:"categoryID", foreignField:"_id", as:"categories"}}

        let data = await ProductsModel.aggregate([
            MatchStage, JoinWithBrandStage, JoinWithCategoryStage
        ])
    }catch(error){
        return ({status:"error",error:error})
    }
}
export const ProductListByCategoryService = async () => {

}
export const ProductListBySimilierService = async () => {

}
export const ProductListByKeywordService = async () => {

}
export const ProductListByRemarkService = async () => {

}
export const ProductListByReviewService = async () => {

}
export const ProductDetailsService = async () => {

}
