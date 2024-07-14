
     'use client'

 
    import React, { useState } from 'react';
    import Image from 'next/image';
    import { httpAxios } from '@/db/httpHelper';
     //  import { toast } from 'react-toastify';
    // import 'react-toastify/dist/ReactToastify.css';
    
    function Addtask() {
     
      const [task, setTask] = useState({ name: "",  comment: "",  progress: "" });
    
      const handleSubmitTask = async (e) => {
     
        try {
          const result = await httpAxios.post("/api/fetchapi", task);
    
          // using axios directly data post (let data=await res.json();) not require
    console.log(result); // Access response data directly
    
          // toast.success("your task is add ",{position:'top-center'})
    
          setTask({...task, name:"",comment:"",progress:""})
          
           //** */  korla error hoba if below line
          // setTask({})
    
        } catch (error) {
          console.error("Error:", error);
          // toast.error('task not ass',{position:'top-center'})
        }
      };
    
      return (
        <>
          <div className='flex justify-center items-center flex-col w-[100vw]'>
            <Image className='py-4' src='/images.png' width={280} height={300} alt="" />
            <form   onSubmit={handleSubmitTask} action='/add-task' method='POST' className='flex flex-col p-2 shadow-xl w-[60vw]'>
              <h1>Test Detail</h1>
              <label htmlFor="name">Name</label>
              <input type="text" className='py-3 border-[1px] border-black' name="name" id="name" onChange={(e) => setTask({ ...task, name: e.target.value })} value={task.name} />
              <label htmlFor=" comment"> comment</label>
              <textarea className='border-[1px] border-black' id=" comment" cols={10} rows={3} name=" comment" onChange={(e) => setTask({ ...task,  comment: e.target.value })} value={task.comment}></textarea>
              <label htmlFor=" progress"> progress</label>
              <select className='py-3 border-[1px] border-black' name=" progress" id=" progress" onChange={(e) => setTask({ ...task,  progress: e.target.value })} value={task.progress}>
                <option value="">Options</option>
                <option value="pending">Pending</option>
                <option value="complete">Complete</option>
              </select>
              <div className='flex items-center justify-center text-center pt-2'>
                <button type='submit' className='rounded-lg px-2 py-[2px] border-[1px] border-black'>Add Task</button>
                <button type='submit' className='ml-5 rounded-md px-2 py-[2px] border-[1px] border-black'>Clear</button>
              </div>
            </form>
          </div>
        </>
      );
    }
    
     
export default Addtask
