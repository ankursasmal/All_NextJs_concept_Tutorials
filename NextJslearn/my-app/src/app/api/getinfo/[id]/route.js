import connection from "@/app/lib/db/connection";
import userModel from "@/app/lib/models/user";
import { NextResponse } from "next/server";
// import { cookies } from "next/headers";
// import jwt from 'jsonwebtoken'

export async function GET(req,{params}){
try{
    
    let Id=params.id;
    console.log("Id",Id)
let user=await userModel.findOne({_id:Id});
console.log("user",user)
 return NextResponse.json({
    mess:'auth data come',
    success:true,
user:user
})

}
catch(e){
    return NextResponse.json({
        mess:'e.message',
        success:false,
     })
}
}
