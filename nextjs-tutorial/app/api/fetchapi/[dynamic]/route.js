import {connection} from '../../../../helper/db'
 import userInfo from '../../../../models/users'
import { NextResponse } from 'next/server';
async function fun(){
    await connection();
}

 fun()

//  delete req api/fetch/id akhana file base rout name node a/:userid akhana [dynamic] folder under oroute.js
 export async function DELETE(req,{params}){
    try{
        
let id=params.dynamic;
console.log(id);
let data=await userInfo.deleteOne({_id:id});
        console.log('data del ');
        return NextResponse.json({mess:'data del success',status:200})
    
    }
    catch(e){
        console.log('not del error');
        return NextResponse.json({mess:'data no del',status:404},e)
    }
 }


//  patch or put same as post rq
 export async function PUT(req,{params}){
    try{
        let {name,email,phone}= await req.json();

        let id=params.dynamic;
console.log(id);
        let data=await userInfo.findOne({_id:id});
        data.name=name;
        data.email=email;
        data.phone=phone;

        let updateuser=await data.save();
                console.log(updateuser);
                return NextResponse.json({mess:'data update success',status:200})
            
            }
            catch(e){
                console.log('not update error');
                return NextResponse.json({mess:'data no del',status:404},e)
            }
 }



// specific get req
export async function GET(req,{params}){
    try{
 
        let id=params.dynamic;
console.log(id);
        let data=await userInfo.findOne({_id:id});
        
        
                console.log(data);
                return NextResponse.json({mess:'data get success',status:200},data)
            
            }
            catch(e){
                console.log('not update error');
                return NextResponse.json({mess:'data not get',status:404},e)
            
        }
 }