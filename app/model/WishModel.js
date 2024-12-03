import mongoose from "mongoose";

const WishSchema = mongoose.Schema({
    productID:{type:mongoose.Schema.Types.ObjectId, required:true},
    userID:{type:mongoose.Schema.Types.ObjectId, required:true}
}, {timeStamp:true, versionKey:false})

const WishModel = mongoose.model('wishes', WishSchema)
export default WishModel