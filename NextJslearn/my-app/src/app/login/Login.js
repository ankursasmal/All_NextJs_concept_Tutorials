 'use client'
 import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
 
function Login() {
let route=useRouter()

let [formData,setFormData]=useState({email:"",pass:""})

let handleSignup=async(e)=>{
    try{
        console.log(formData)
e.preventDefault();
if(formData.email=="" || formData.pass=="" ){
throw new Error('fill the form')
}
      let res= await  fetch('http://localhost:3000/api/login',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(formData)
    });
    let data=await res.json();
 
 //  *********************
      // in fetch api a res.json() must because the fetch API doesn't automatically parse the response body for you.
      // ******res.json() not req nt work in nextjs

// ********************************

      // recive backebd responce then forword work
      if (data.success) {
        window.alert('Sign in successful');

        setFormData({ email: "", pass: "" });
        route.push('/')
      } 
   
     }
    catch(e){
        window.alert('not login user')
        console.log(e)
    }

}
  return (
    <div className='flex items-center justify-center flex-col pt-19'>
    <h1>Sign Up</h1>
    <form   onSubmit={handleSignup}  className='flex flex-col p-2 shadow-xl w-[60vw]'>
       <label htmlFor="email">Email</label>
      <input className='border-[1px] border-black' id="email" name="email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} value={formData.email} />
      
      <label htmlFor="password">Password</label>
      <input className='border-[1px] py-3 border-black' id="password" name="pass" type="password" onChange={(e) => setFormData({ ...formData, pass: e.target.value })} value={formData.pass} />
      
        <div className='flex items-center justify-center text-center pt-2'>
        <button type='submit' className='rounded-lg px-2 py-[2px] border-[1px] border-black'>Submit</button>
        <button  className='rounded-lg px-2 py-[2px] border-[1px] border-black' onClick={(e)=>{e.preventDefault();setFormData({...formData,
      name: "",
      email: "",
      pass: "",
      cpass: ""
    });

        }}>reset</button>

      </div>
    </form>
  </div>
  )
}

 
export default Login
