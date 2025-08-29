'use client'
import { AlignLeft } from 'lucide-react'
import React, { useState } from 'react'
import SideBar from './SideBar'



export default function MobileMenu() {
  const [isSidebarOpen, setIsSidebarOpen]=useState(false)
  return (
   <>
    <button onClick={()=>setIsSidebarOpen(!isSidebarOpen)}>
        <AlignLeft className='hover:text-darkColor hoverEffect md:hidden'/>  
    </button>
    <div className=" md:hidden">
      <SideBar isOpen={isSidebarOpen} onClose={()=>setIsSidebarOpen(false)}/>
    </div>
   
   </>
  )
}