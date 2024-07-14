 import mongoose  from "mongoose";

let userSchema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    }, pass:{
        type:String
    }, cpass:{
        type:String
    }, 
    phone:{
        type:Number
    },
})

let userModel=mongoose.models.userModel || mongoose.model('userModel',userSchema);
export default userModel
