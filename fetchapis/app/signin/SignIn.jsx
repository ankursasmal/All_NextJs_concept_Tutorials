'use client'
 

 // Importing necessary modules
import React, { useState } from 'react';
import { httpAxios } from '@/db/httpHelper'; // Assuming this import is correctly configured
 
// Creating the functional component
function SignIn() {
 
  // Initializing state for form data
  const [formData, setFormData] = useState({
     email: "",
    password: "",
   });
 
  // Handling form submission
  const handleLogin = async (e) => {
    e.preventDefault(); // Preventing default form submission behavior
console.log(e)
    // Checking if any field is empty
    if (  formData.email === "" || formData.password === ""  ) {
     console.log('Please fill all fields');
      return; // Exit early if any field is empty
    }

    try {
      // Making POST request to signup API
      const userData = await httpAxios.get("/api/fetchapi");
 console.log(userData)
      // Clearing form data after successful submission
       
    
 
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
      <form method='GET'  onSubmit={()=>handleLogin()} action='/signin' className='flex flex-col p-2 shadow-xl w-[60vw]'>
          
        <label htmlFor="email">Email</label>
        <input className='border-[1px] border-black' id="email" name="email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} value={formData.email} />
        
        <label htmlFor="password">Password</label>
        <input className='border-[1px] py-3 border-black' id="password" name="password" type="password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} value={formData.password} />
        
         
        <div className='flex items-center justify-center text-center pt-2'>
          <button type='submit' className='rounded-lg px-2 py-[2px] border-[1px] border-black'>Submit</button>
          
{ JSON.stringify(formData)}
 
        </div>
      </form>
    </div>
  );
}

// Exporting the component
 

 
export default SignIn
