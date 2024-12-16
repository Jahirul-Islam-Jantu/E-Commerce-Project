import {
    ProductBrandListService,
    ProductCategoryListService, ProductDetailsService,
    ProductListByBrandService,
    ProductListByCategoryService, ProductListByKeywordService,
    ProductListByRemarkService, ProductListByReviewService,
    ProductListBySimilierService,
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
    let result = await ProductListByBrandService(req)
    return res.status(200).json({result:result})
}
export const ProductListByCategory = async (req, res)=>{
    let result = await ProductListByCategoryService(req)
    return res.status(200).json({result:result})
}
export const ProductListBySimilier = async (req, res)=>{
    let result = await ProductListBySimilierService(req)
    return res.status(200).json({result: result})
}
export const ProductDetails = async (req, res)=>{
    let result = await ProductDetailsService(req)
    return res.status(200).json({result: result})
}
export const ProductListByKeyword = async (req, res)=>{
    let result = await ProductListByKeywordService(req)
    return res.status(200).json({result: result})
}
export const ProductListByRemark = async (req, res)=>{
    let result = await ProductListByRemarkService(req)
    return res.status(200).json({result:result})
}
export const ProductListByReview = async (req, res)=>{
    let result = await ProductListByReviewService(req)
    return res.status(200).json({result:result})
}
