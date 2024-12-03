import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
    title:{type:String},
    shortDes:{type:String},
    price:{type:String},
    discount:{type:Boolean},
    discountPrice:{type:String},
    img:{type:String},
    star:{type:String},
    stock:{type:Boolean},
    remark:{type:String},
    categoryID:{type:mongoose.Schema.Types.ObjectId, required:true},
    brandID:{type:mongoose.Schema.Types.ObjectId, required:true}
}, {timeStamp:true, versionKey:false})
const ProductsModel = mongoose.model("products", ProductSchema)
export default ProductsModel
