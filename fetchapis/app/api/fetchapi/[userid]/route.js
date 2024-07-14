import connections from '@/db/connection'
import workModel from '@/model/task'
import { NextResponse } from 'next/server';

async function fun(){
    await connections();
}
fun()

// patch request
export async function PUT(req,{params}){
    try{
        let {name,email,work,progress,comment,password,cpassword}= await req.json();

        let id=params.dynamic;
console.log(id);
        let data=await workModel.findOne({_id:id});
        data.name=name;
        data.email=email;
        data.work=work;
        data.progress=progress;
        data.comment=comment,
       data.password=password,
        data.cpassword=cpassword

        let updateuser=await data.save();
                console.log(updateuser);
                return NextResponse.json({mess:'data update success',status:200})
            
            }
            catch(e){
                console.log('not update error');
                return NextResponse.json({mess:'data no del',status:404},e)
            }
 }

// delete req
export async function DELETE(req,{params}){
    try{
let work=params.userid;

//   delete
 let userdata= await workModel.deleteOne({work:work})
 console.log(userdata)
// 4.res.send like
return NextResponse.json({mess:'data del succ',status:201},userdata)

    }
    catch(e){
        console.log('dtat not update')
        return NextResponse.json({mess:'data not del',status:401})

    }
}

// delete req
// export async function GET(req,{params}){
//     try{
// let work=params.userid;

// //   get specific work
//  let userdata= await workModel.findOne({work:work})
//  console.log(userdata)
// // 4.res.send like
// return NextResponse.json({mess:'data get succ',status:201})

//     }
//     catch(e){
//         console.log('dtat not update')
//         return NextResponse.json({mess:'data not get',status:401})

//     }
// }


// delete req
export async function GET(req,{params}){
    try{
let id=params.userid;

//   get specific work
 let userdata= await workModel.findOne({_id:id})
 console.log(userdata.work)
// 4.res.send like
return NextResponse.json({mess:'data get succ',status:201})

    }
    catch(e){
        console.log('dtat not update')
        return NextResponse.json({mess:'data not get',status:401})

    }
}