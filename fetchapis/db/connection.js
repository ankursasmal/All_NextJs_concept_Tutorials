import mongoose from "mongoose";

async function connections(){
    try{
        let conncct=await mongoose.connect('mongodb://localhost:27017/workDetail' || "");
    
        console.log("db connect")

    }
    catch(e){
console.log('db not connect ',e)
    }
}

export default connections;