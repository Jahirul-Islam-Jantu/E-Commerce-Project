import mongoose from "mongoose";

const BrandSchema = mongoose.Schema({
    brandName: {type: String, unique:true, required:true},
    brandImg: {type:String, required:true}
},{timeStamp:true, versionKey:false})

const BrandModel = mongoose.model("brands", BrandSchema)
export default BrandModel