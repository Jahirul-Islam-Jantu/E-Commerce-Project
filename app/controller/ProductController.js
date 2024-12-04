import {
    ProductBrandListService,
    ProductCategoryListService,
    ProductSliderListService
} from "../services/ProductServices.js";

export const ProductBrandList = async (req, res)=>{
    let result = await ProductBrandListService()
    return res.status(200).json({result: result})
}
export const ProductCategoryList = async (req, res)=>{
    let result = await ProductCategoryListService()
    return res.status(200).json({result: result})
}
export const ProductSliderList = async (req, res)=>{
    let result = await ProductSliderListService()
    return res.status(200).json({result: result})
}
export const ProductListByBrand = async (req, res)=>{

}
export const ProductListByCategory = async (req, res)=>{

}
export const ProductListBySimilier = async (req, res)=>{

}
export const ProductListByKeyword = async (req, res)=>{

}
export const ProductListByRemark = async (req, res)=>{

}
export const ProductListByReview = async (req, res)=>{

}
export const ProductDetails = async (req, res)=>{

}