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
        let UnwindBrandStage = {$unwind:"$brands"}
        let UnwindCategoryStage = {$unwind:"$categories"}
        let ProjectionStage = {$project:{'brands._id':false, 'categories._id':0, 'brandID':false, 'categoryID':false, 'updatedAt':0 }}

        let data = await ProductsModel.aggregate([
            MatchStage, JoinWithBrandStage, JoinWithCategoryStage, UnwindBrandStage, UnwindCategoryStage, ProjectionStage
        ])
        return ({status: "success", data: data})
    }catch(error){
        return ({status:"error",error:error})
    }
}
export const ProductListByCategoryService = async (req) => {
    try{
        let CategoryID = new ObjectID(req.params.CategoryID)
        let MatchStage = {$match:{categoryID:CategoryID}}
        let JoinWithBrandStage= {$lookup:{from:"brands", localField:"brandID", foreignField:"_id", as:"brands"}}
        let JoinWithCategoryStage = {$lookup:{from:"categories", localField:"categoryID", foreignField:"_id", as:"categories"}}
        let UnwindBrandStage = {$unwind:"$brands"}
        let UnwindCategoryStage = {$unwind:"$categories"}
        let ProjectionStage = {$project:{'brands._id':false, 'categories._id':0, 'brandID':false, 'categoryID':false, 'updatedAt':0 }}

        let data = await ProductsModel.aggregate([
            MatchStage, JoinWithBrandStage, JoinWithCategoryStage, UnwindBrandStage, UnwindCategoryStage, ProjectionStage
        ])
        return ({status: "success", data: data})
    }catch(error){
        return ({status:"error",error:error})
    }
}
export const ProductListBySimilierService = async () => {

}
export const ProductListByKeywordService = async () => {

}
export const ProductListByRemarkService = async (req) => {
    try{
        let Remark = req.params.Remark
        let MatchStage = {$match:{remark:Remark}}
        let JoinWithBrandStage= {$lookup:{from:"brands", localField:"brandID", foreignField:"_id", as:"brands"}}
        let JoinWithCategoryStage = {$lookup:{from:"categories", localField:"categoryID", foreignField:"_id", as:"categories"}}
        let UnwindBrandStage = {$unwind:"$brands"}
        let UnwindCategoryStage = {$unwind:"$categories"}
        let ProjectionStage = {$project:{'brands._id':false, 'categories._id':0, 'brandID':false, 'categoryID':false, 'updatedAt':0 }}

        let data = await ProductsModel.aggregate([
            MatchStage, JoinWithBrandStage, JoinWithCategoryStage, UnwindBrandStage, UnwindCategoryStage, ProjectionStage
        ])
        return ({status: "success", data: data})
    }catch(error){
        return ({status:"error",error:error})
    }
}
export const ProductListByReviewService = async () => {

}
export const ProductDetailsService = async () => {

}
