import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'
import React from 'react'
import {motion} from 'motion/react'

export default function NoProductAvailable({selectedTab,className}:{
    selectedTab:string;
    className?:string;
}) {
  return (
    <div className={cn("flex flex-col items-center justify-center py-10 min-h-80 space-y-4 text-center bg-gray-100 rounded-lg w-full mt-10")} >
       <motion.div>
         <h2 className="">NoProductAvailable</h2>
       </motion.div>
       <motion.p>
        We&apos;re sorry,but there are no products matching on{""}
        <span className='text-base font-semibold text-darkColor'>
            {selectedTab}
        </span>
        criteria at the moment.
       </motion.p>
       <motion.div>
        <Loader2/> <span>
            We&apos;re restocking shortly
        </span>
       </motion.div>
       <motion.p>
        Please check back later or explore our product categories
       </motion.p>
        </div>
  )
}
