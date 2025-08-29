import React, { FC }  from 'react'
import Logo from './Logo';
import {motion} from 'motion/react'
import { X } from 'lucide-react';


interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}
const SideBar:FC<SidebarProps>=({isOpen,onClose}) =>{
  return (
    <div 
    className={`fixed inset-y-0 left-0 z-50 bg-darkColor/50 shadow-xl hoverEffect w-full 
    ${isOpen?"translate-x-0":"-translate-x-full"}`}>
        <motion.div className='min-w-72 max-w-96 bg-darkColor text-white/90 h-full p-10 border-r border-r-white flex flex-col gap-6'>
            <div className="flex items-center justify-between">
              <Logo className='text-white '>
                <button className='hover:text-red-500 hoverEffect' onClick={onClose}>
                    <X/>
                </button>
              </Logo>
            </div>
        </motion.div>
    </div>
  )
}

export default SideBar