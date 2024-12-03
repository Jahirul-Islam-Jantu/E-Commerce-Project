import mongoose from "mongoose";

const DataSchema = mongoose.Schema({
    store_ID:{type:String, required:true},
    store_pass:{type:String, required:true},
    currency:{type:String, required:true},
    successURL:{type:String, required:true},
    failURL:{type:String, required:true},
    cancelURL:{type:String, required:true},
    ipnURL:{type:String, required:true},
    initURL:{type:String, required:true},
}, {timeStamp:true, versionKey:false})

const PaymentSettingModel = mongoose.model('paymentSettings', DataSchema)
export default PaymentSettingModel