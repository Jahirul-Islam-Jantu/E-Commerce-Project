import mongoose from "mongoose";

const DataSchema = mongoose.Schema({
    name:{type:String, required:true},
    des:{type:String, required:true},
    img:{type:String, required:true}
}, {timeStamp:true, versionKey:false})
const FeaturesModel = mongoose.model('features', DataSchema)
export default FeaturesModel