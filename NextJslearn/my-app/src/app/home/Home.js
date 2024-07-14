'use client'
import React, { useEffect, useState } from 'react'

function home() {
    let [data,setData]=useState({});
    let fetcdata=async()=>{
        try{
            let res=await fetch('http://localhost:3000/api/auth',{
                method:'GET',
                credentials:'include'
            })
            let data=await res.json();
            console.log(data);
            if(data.success){
                setData(data.user);
                console.log(data.user)
                localStorage.setItem('user',JSON.stringify(data.user))

             }

        }
        catch(e){
            console.log('not data come')
        }
    }
useEffect(()=>{
    fetcdata();
 
},[])
console.log(data)

  return (
    <div className='flex items-center w-[50vw] h-[100vw]'>
    <a>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum molestias similique officia laborum magnam beatae expedita illum voluptas libero veniam rerum quo, vel exercitationem veritatis temporibus, et eaque sed quisquam?</a>  
    </div>
  )
}

export default home
