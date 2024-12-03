import mongoose from "mongoose";

const BrandSchema = mongoose.Schema({
    brandName: {type: String, unique:true},
    brandImg: {type:String, unique:true}
},{timeStamp:true, versionKey:false})

const BrandModel = mongoose.model("brands", BrandSchema)
export default BrandModel