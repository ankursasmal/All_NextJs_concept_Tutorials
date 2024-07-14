'use client'
import React, { useEffect, useState } from 'react'

function Contact() {
    let [d,setd]=useState();
    let [data,setdata]=useState();
    useEffect(()=>{
        setdata(JSON.parse(localStorage.getItem('user')))
    },[])
    // console.log(data)
let userdata=data;
     let fetcdata=async()=>{

 try{
            console.log(userdata._id) ;
             let res=await fetch(`http://localhost:3000/api/getinfo/${userdata._id}`,{
                method:'GET',
                credentials:'include'
            })
            let data=await res.json();
            console.log(data);
            if(data.success){
                setd(data.user);
                console.log(data.user)
 
             }

            }
        catch(e){
            console.log('not data come')
        }
    }
    console.log("ankur",d)
    
    return (
    <div>
      <a>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias magni aliquid laboriosam neque reiciendis illo et quos, cupiditate, dignissimos cum quam eum natus cumque quidem facilis hic minus libero excepturi.</a>
    <button className='mt-4 p-5 bg-red-600 ' onClick={fetcdata}>anmwwow</button>
    </div>
  )
}

export default Contact
