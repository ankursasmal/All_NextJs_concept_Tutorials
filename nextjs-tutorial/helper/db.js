import mongoose from "mongoose";

export async function connection(){
    try{
let {connect}=await mongoose.connect('mongodb://localhost:27017/NextjsUser' || "");

console.log('db connect')
    }
catch(e){
    console.log('db not connect',e);
}

}
 