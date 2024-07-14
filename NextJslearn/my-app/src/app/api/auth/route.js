import connection from "@/app/lib/db/connection";
import userModel from "@/app/lib/models/user";
import { NextResponse } from "next/server";
// import { cookies } from "next/headers";
import jwt from 'jsonwebtoken'

export async function GET(req){
try{
    const authtoken = req.cookies.get('jwt');
    // console.log(authtoken)
let verified=jwt.verify(authtoken.value,process.env.SECRTE_KEY);
// console.log(verified)
let user=await userModel.findOne({_id:verified._id});
console.log(user)
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
