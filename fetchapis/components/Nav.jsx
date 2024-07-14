'use client'
import React from 'react'
import Link from 'next/link'
 function Nav() {
  return (
    <div> 
    
    <div className='flex items-center justify-between bg-blue-400 py-2'>
   <Link href='/'> <a>Home</a></Link> 
   <div>
      <Link href='/add-task' >  <a   className='px-4'>Add-task</a></Link> 
    <Link href='/show-task'  >  <a >show-task</a></Link> 

    </div>
    <div> 
    <Link href='/signup'><a className='pr-4'>signUp</a> </Link>
    <Link href='/signin'><a className='pr-4'>signIn</a> </Link>

 
</div>
</div>
   </div>
  )
}

export default Nav
