import {  NextResponse } from "next/server"

 
export  function GET(req) {
  let users=[
    {
        name:'ankur',
        roll:2,
        reg:23

  },
  {
    name:'ankur',
    roll:2,
    reg:23

},{
    name:'shanku',
    roll:2,
    reg:23

},{
    name:'sasmal',
    roll:2,
    reg:23

},
] 
// NextResponse work as res.json(users) in node
return NextResponse.json({users})
  
}
export  async function POST(req){
  
  // return NextResponse.json({req.body});
 }

 export  async function PUT(req){
    // middle a code api/users route a delete work 
// all code under this function node js a moto nextja a end ar jano return NextResponse.json({})

return NextResponse.json({
  mess:"update success",
  status:201
})
   }

   export  async function DELETE(){
// middle a code api/users route a delete work 
// all code under this function node js a moto nextja a end ar jano return NextResponse.json({})

      return NextResponse.json({
        mess:"delete",
        status:201
      })
     }
    
