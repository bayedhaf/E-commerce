import { productTypes } from '@/constants';
import { Repeat } from 'lucide-react';

import React from 'react'

interface Props{
    selectedTab:string;   
    onTabSelect:(tab:string)=>void;
}
export default function HomeTabbar({selectedTab,onTabSelect}:Props) {
  return (
    <div className='flex items-center gap-1.5 text-s font-semibold '>
        <div className=" flex items-center gap-1.5">

            {
                productTypes.map((item)=>(
                    <button key={item?.title} className={`border border-darkColor px-4 py-1.5 md:px-2 rounded-full hover:bg-darkColor hover:text-white hoverEffect`}>
                        {item?.title}
                    </button>
                ))
            }
        </div>
        <button className="border border-darkColor  p-2  rounded-full hover:bg-darkColor hover:text-white hoverEffect">
            <Repeat className='w-5 h-5'/></button>
    </div>
  )
}
