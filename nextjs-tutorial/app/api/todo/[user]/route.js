// now this is on /api/todo/[user] a code or request

import { NextResponse } from "next/server";
// mongoodb connect
connection();

//  *********  nodejs a 
// App.get('route name',(req,res)=>{
//     res.send();
// })

// ******** but akhana argument a 'route not require folder base rounitmg by defaul routing hoa jacha
// only teke  export function GET(req){} no res require


export async function POST(req){

// all thing req. kora anta parbo
 let body=req.body;
console.log(body);
console.log(req.nextUrl.pathname)
console.log(req.method)
console.log(req.cookies)
console.log(req.headers)
console.log(req.nextUrl.searchParams)

// 
let data=await req.json();
console.log(data);

// return ar jagai variable a store
const response = NextResponse.json({
    mess: 'post mess',
    receivedData: data
});

// Set custom headers
response.headers.set('Content-Type', 'application/json');
response.headers.set('X-Custom-Header', 'CustomHeaderValue');

// Return the response
return response;

}


// export function GET(req){
//     let body=req.body;
// console.log(body);
//     return NextResponse.json({mess:'data save'})
//     }