import { NextResponse } from "next/server";
 
export function GET(){
    // code hoba middel a node ar res.send() moto  next a  return NextResponse.json({}) dia end

    return NextResponse.json({ mess:'data come from backend ai route a',data})
}

// post requests req unsder all data (json formet a) 
export async function POST(req) {
     const data = await req.json();

    // Process the data as needed
    console.log(data);
     // Send a response back to the client ata must
    return NextResponse.json({
        mess: 'post mess',
        receivedData: data
    });
}

export function DELETE( req,{params}){
    // code hoba middel a node ar res.send() moto nextjs a  return NextResponse.json({}) dia end
console.log(params.userId);
    return NextResponse.json({
        mess:'delete mess'
    })
}
export function PUT(req){
    // code hoba middel a node ar res.send() moto  next a  return NextResponse.json({}) dia end

    return NextResponse.json({
        mess:'updata mess'
    })
}