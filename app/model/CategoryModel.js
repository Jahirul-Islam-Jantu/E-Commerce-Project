import mongoose from "mongoose";

const CategorySchema = mongoose.Schema({
    categoryName:{type:String, unique:true},
    categoryImg:{type:String, unique:true}
}, {timeStamp:true, versionKey:false})

const CategoryModel = mongoose.model('categories', CategorySchema)
export default CategoryModel