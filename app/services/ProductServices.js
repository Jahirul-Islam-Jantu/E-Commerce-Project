import BrandModel from "../model/BrandModel.js";
import CategoryModel from "../model/CategoryModel.js";
import ProductSliderModel from "../model/ProductSliderModel.js";

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
export const ProductListByBrandService = async () => {

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
