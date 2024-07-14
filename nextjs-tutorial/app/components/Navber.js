'use client'

import Link from "next/link"
// activ achana ki like react Navlink
import { usePathname } from 'next/navigation'
import { useRouter } from "next/navigation"
  
 function Navber() {
  const pathname = usePathname()
  // on event fire redirect another page
  const router = useRouter()

   return (

     <div>
      <nav className="flex items-center justify-around py-2 bg-blue-300">
<Link href='/' className={`link ${pathname === '/' ? 'active' : ''}`} > <a>Home</a></Link>
{/* clssNae jata ata REact Navlink same kaj */}
<Link href='/about' className={`link ${pathname === '/about' ? 'active' : ''}`} > <a>About</a></Link>
<Link href='/profile'> <a>profile</a></Link>
<Link href='/profile/user'> <a>user</a></Link>

      </nav>
       <h1 className="text-red-500 text-[10vw]">ankur</h1>

       {/*  on event fire redirect another page
*/}
       <button type="button" onClick={()=>router.push('/about')}>cilck render on about page</button>
     </div>
   )
 }
 
 export default Navber
 