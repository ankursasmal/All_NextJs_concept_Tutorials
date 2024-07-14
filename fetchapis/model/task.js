import mongoose from "mongoose";
// import bcrypt from "bcrypt";

 let workSchema= new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
     },

    password:{
        type:String
    },
    cpassword:{
        type:String
    },
    work:{
        type:String
    },
    progress:{
        type:String
    },
    comment:{
        type:String
    }
})

// workSchema.pre('save',async function(next){
//     // only pass word a change or create
// if(this.isModified('password')){
// this.password= await bcript.hash(this.password,10);
// this.cpassword= await bcript.hash(this.cpassword,10);

// }next();
// })
 
let workModel = mongoose.models.workDetail ||  mongoose.model('securitypass',workSchema);
//  to aviod redefine ihe model 
// because in next js db alway not connect only req come then db connect
export default workModel;
