import userModel from "@/app/lib/models/user";
import connection from "@/app/lib/db/connection";
import bcrypt from 'bcryptjs'
import { NextResponse } from "next/server";

export async function POST(req){
    try{
        console.log('al')
        let payload=await req.json();
        let Exist=await userModel.findOne({email:payload.email})
        if(Exist){
            throw new Error('email already present')
        }
        let user=new userModel(payload);
        let pass=await bcrypt.hash(payload.pass,10);
        let cpass=await bcrypt.hash(payload.cpass,10)
        user.pass=pass;
        user.cpass=cpass;
        let result=await user.save();
        return NextResponse.json({
            mess:'data store db',
            status:200,
            data:result,
            success:true
        })

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
