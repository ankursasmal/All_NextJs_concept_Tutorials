import mongoose from "mongoose"; 

let userInfoSchema=new mongoose.Schema({
    name:{
        type:String,
      },
    email:{
        type:String,
        required:true,
     },
    phone:{
        type:Number,
      }
    
});
 

 const userInfo = mongoose.models.User || mongoose.model('User', userInfoSchema);
export default userInfo;
 