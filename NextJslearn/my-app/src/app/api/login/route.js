import userModel from "@/app/lib/models/user";
import connection from "@/app/lib/db/connection";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
  export async function POST(req){
    try{
        let payload=await req.json();
          let data=await userModel.findOne({email:payload.email})
        // console.log(data)
        if(!data){
            throw new Error('email not present')
        }
        let tokon= jwt.sign({
            _id:data._id
        },process.env.SECRTE_KEY ,{ expiresIn: '8828832' })

// console.log(tokon)
cookies().set('jwt',tokon,{expiresIn:'232373272',secure:true,httpOnly:true})         
let isMatch=await bcrypt.compare(payload.pass,data.pass)  
// console.log(isMatch)
   if(isMatch){
return NextResponse.json({
            mess:'data store db',
            status:200,
            data: data,
            success:true
        })
    }
     
     

    }
    catch(e){
console.log('datenot store in db');
return NextResponse.json({
    mess:'data  not store db',
    status:401,
    error:true
,success:false
})
    }
}
