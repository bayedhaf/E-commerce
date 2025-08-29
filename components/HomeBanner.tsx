import React from 'react'
import Title from './Title'



export default function HomeBanner() {
  return (
    <div className='flex flex-col items-center justify-center gap-5'>
        <Title className='text-3xl md:text-4xl uppercase font-bold text-center'>
            Best CLothing Collection
        </Title>
        <p className="text-sm text-center text-lightColor/80 font-medium max-w-[480px]">Find everything you need 
            to look and feel your best ,and shop the latest
             men&apos;s fashion and lifestyle products</p>
    </div>
  )
}