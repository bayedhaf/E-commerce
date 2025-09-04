import React from 'react'
import Title from './Title'
import { cn } from '@/lib/utils';
interface HomeBannerProps {
  className?: string;
}


export default function HomeBanner({ className }: HomeBannerProps) {
  return (
    <div className={cn('flex flex-col items-center justify-center gap-5 ',className)}>
        <Title className='text-3xl md:text-4xl uppercase font-bold text-center'>
            Best CLothing Collection
        </Title>
        <p className="text-sm text-center text-lightColor/80 font-medium max-w-[480px]">Find everything you need 
            to look and feel your best ,and shop the latest
             men&apos;s fashion and lifestyle products</p>
    </div>
  )
}