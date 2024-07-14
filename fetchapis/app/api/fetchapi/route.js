import connections from '@/db/connection'
import workModel from '@/model/task'
import { NextResponse } from 'next/server';

async function fun(){
    await connections();
}
fun()

export async function POST(req){
    try{
// 1.data take
let {name,email,work,progress,comment,password,cpassword}= await req.json();
console.log(name);

// 2.data stroe
let data= new workModel({
    name:name,
    email:email,
    work:work,
   
   progress:progress,
    comment:comment ,
    password:password,
    cpassword:cpassword,
})

// 3. save
let result=await data.save();

// 4.res.send like
return NextResponse.json({mess:'data save succ',status:201},result)

    }
    catch(e){
        console.log('dtat not store')
        return NextResponse.json({mess:'data not save',status:401})

    }
}

// data gat using id
export async function GET(req){
    try{
        let data=await workModel.find();

console.log('dtat fetch successfully',data)
        return NextResponse.json({mess:'data display',status:200},data)

    }
    catch(e){
 console.log('dtat not fetch')
        return NextResponse.json({mess:'data come',status:401})

    }
}