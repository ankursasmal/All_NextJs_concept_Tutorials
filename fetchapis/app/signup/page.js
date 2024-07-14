  

'use client'
// Importing necessary modules
// import bcrypt from "bcrypt";
import React, { useState } from 'react';
import { httpAxios } from '@/db/httpHelper'; // Assuming this import is correctly configured
 
// Creating the functional component
function page() {
 
  // Initializing state for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",  
    password: "",
    cpassword: "",
  });

   // Handling form submission
  const handleSignup = async (e) => {
    e.preventDefault(); // Preventing default form submission behavior

        try {
// Checking if any field is empty
    if (formData.name === "" || formData.email === "" || formData.password === "" || formData.cpassword === "") {
     console.log('Please fill all fields');
       // Exit early if any field is empty
    }

    // bcript use

console.log(formData);
      // Making POST request to signup API
      const userData = await httpAxios.post("/api/fetchapi", formData);
      console.log(formData);

      // Clearing form data after successful submission
      setFormData({...formData,
        name: "",
        email: "",
        password: "",
        cpassword: ""
      });
    
 
      // Redirecting or performing any other actions after successful signup
      // redirect('/'); // Assuming redirect function is correctly configured
    } catch (error) {
      console.log('Failed to register user');
      console.error(error);
    }
  };

  // Rendering the component
  return (
    <div className='flex items-center justify-center flex-col pt-19'>
      <h1>Sign Up</h1>
      <form method='POST'  onSubmit={handleSignup} action='/signup' className='flex flex-col p-2 shadow-xl w-[60vw]'>
        <label htmlFor="name">Name</label>
        <input type="text" className='py-3 border-[1px] border-black' name="name" id="name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} value={formData.name} />
        
        <label htmlFor="email">Email</label>
        <input className='border-[1px] border-black' id="email" name="email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} value={formData.email} />
        
        <label htmlFor="password">Password</label>
        <input className='border-[1px] py-3 border-black' id="password" name="password" type="password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} value={formData.password} />
        
        <label htmlFor="cpassword">Confirm Password</label>
        <input className='border-[1px] py-3 border-black' id="cpassword" name="cpassword" type="password" onChange={(e) => setFormData({ ...formData, cpassword: e.target.value })} value={formData.cpassword} />
        
        <div className='flex items-center justify-center text-center pt-2'>
          <button type='submit' className='rounded-lg px-2 py-[2px] border-[1px] border-black'>Submit</button>
          <button  className='rounded-lg px-2 py-[2px] border-[1px] border-black' onClick={(e)=>{e.preventDefault();setFormData({...formData,
        name: "",
        email: "",
        password: "",
        cpassword: ""
      });

          }}>reset</button>

        </div>
      </form>
    </div>
  );
}

  

export default page
