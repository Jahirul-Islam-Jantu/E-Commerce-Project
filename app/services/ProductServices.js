import BrandModel from "../model/BrandModel.js";
import CategoryModel from "../model/CategoryModel.js";
import ProductSliderModel from "../model/ProductSliderModel.js";
import mongoose from "mongoose";
import ProductsModel from "../model/ProductsModel.js";
import ReviewModel from "../model/ReviewModel.js";



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
export const ProductListBySimilierService = async (req) => {
    try{
        let CategoryID = new ObjectID(req.params.CategoryID)
        let MatchStage = {$match:{categoryID:CategoryID}}
        let limitStage = {$limit:20}
        let JoinWithBrandStage= {$lookup:{from:"brands", localField:"brandID", foreignField:"_id", as:"brands"}}
        let JoinWithCategoryStage = {$lookup:{from:"categories", localField:"categoryID", foreignField:"_id", as:"categories"}}
        let UnwindBrandStage = {$unwind:"$brands"}
        let UnwindCategoryStage = {$unwind:"$categories"}
        let ProjectionStage = {$project:{'brands._id':false, 'categories._id':0, 'brandID':false, 'categoryID':false, 'updatedAt':0 }}

        let data = await ProductsModel.aggregate([
            MatchStage,limitStage, JoinWithBrandStage, JoinWithCategoryStage, UnwindBrandStage, UnwindCategoryStage, ProjectionStage
        ])
        return ({status: "success", data: data})
    }catch(error){
        return ({status:"error",error:error})
    }
}
export const ProductDetailsService = async (req) => {
    try{
        let ProductID = new ObjectID(req.params.ProductID)
        let MatchStage = {$match:{_id:ProductID}}
        let JoinWithBrandStage= {$lookup:{from:"brands", localField:"brandID", foreignField:"_id", as:"brands"}}
        let JoinWithCategoryStage = {$lookup:{from:"categories", localField:"categoryID", foreignField:"_id", as:"categories"}}
        let JoinWithDetailsStage = {$lookup:{from:"productdetails", localField:"_id", foreignField:"productID", as:"productdetails"}}

        let UnwindBrandStage = {$unwind:"$brands"}
        let UnwindCategoryStage = {$unwind:"$categories"}
        let ProjectionStage = {$project:{'brands._id':false, 'categories._id':0, 'brandID':false, 'categoryID':false, 'updatedAt':0 }}

        let data = await ProductsModel.aggregate([
            MatchStage, JoinWithBrandStage, JoinWithDetailsStage, JoinWithCategoryStage, UnwindBrandStage, UnwindCategoryStage, ProjectionStage
        ])
        return ({status: "success", data: data})
    }catch(error){
        return ({status:"error",error:error})
    }
}
export const ProductListByKeywordService = async (req) => {
    try{
        let reqKey = req.params.Keyword
        let SearchRegex =({"$regex":reqKey, "$options":"i"})
        let SearchParams = [{title:SearchRegex}, {shortDes:SearchRegex}]
        let SearchStage = {$or:SearchParams}

        let MatchStage = {$match:SearchStage}

        let JoinWithBrandStage= {$lookup:{from:"brands", localField:"brandID", foreignField:"_id", as:"brands"}}
        let JoinWithCategoryStage = {$lookup:{from:"categories", localField:"categoryID", foreignField:"_id", as:"categories"}}
        let JoinWithDetailsStage = {$lookup:{from:"productdetails", localField:"_id", foreignField:"productID", as:"productdetails"}}

        let UnwindBrandStage = {$unwind:"$brands"}
        let UnwindCategoryStage = {$unwind:"$categories"}
        let ProjectionStage = {$project:{'brands._id':false, 'categories._id':0, 'brandID':false, 'categoryID':false, 'updatedAt':0 }}

        let data = await ProductsModel.aggregate([
            MatchStage, JoinWithBrandStage, JoinWithDetailsStage, JoinWithCategoryStage, UnwindBrandStage, UnwindCategoryStage, ProjectionStage
        ])
        return ({status: "success", data: data})
    }catch(error){
        return ({status:"error",error:error})
    }
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
export const ProductListByReviewService = async (req) => {
    try{
        let ProductID = new ObjectID(req.params.ProductID)
        let MatchStage = {$match:{productID:ProductID}}

        let JoinWithProfileStage = {$lookup:{from:"profiles", localField:"userID", foreignField:"userID", as:"profiles"}}
        let UnwindProfile = {$unwind:"$profiles"}
        let ProjectionStage = {$project:{"des":true, "rating": true, 'profiles.cus_name': true}}




        let data = await ReviewModel.aggregate([
            MatchStage, JoinWithProfileStage, UnwindProfile, ProjectionStage
        ])

        return ({status: "success", data: data})
    }catch (error){
        return ({status:"error",error:error})
    }
}

