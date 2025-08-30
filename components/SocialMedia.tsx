import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import Link from 'next/link';
import { Facebook, Github, Instagram, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';
interface  Props{
  className?:string;
  tooltipClassName?:string;
  iconClassName?:string;
}
export default function SocialMedia({className,tooltipClassName,iconClassName}:Props) {
  const socialIcon=[
    {
      title:"FaceBook",
      icon:<Facebook/>,
      href:"/facebook"

    },
     {
      title:"Github",
      icon:<Github/>,
      href:"/github"

    },
     {
      title:"Linkedln",
      icon:<Linkedin/>,
      href:"/Linkedin"

    },
     {
      title:"Instagram",
      icon:<Instagram/>,
      href:"/Instagram"

    },
  ]
  return (
    <TooltipProvider>
        <div className={cn('flex items-center gap-3.5',className)}>
         {  socialIcon.map((items)=>(
          <Tooltip key={items?.href}>
            <TooltipTrigger asChild>
              <Link 
              target="_blank"
              rel='noopener noreferrer'
              className={cn("p-2 border rounded-full hover:text-white hover:border-white hoverEffect",iconClassName)}
              href={items.href}>
               {items?.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent className={cn('text-darkColor bg-white font-bold ',tooltipClassName)}>
             {items?.title}
            </TooltipContent>
          </Tooltip>
         ))
         
         }
        </div>
    </TooltipProvider>
  )
}