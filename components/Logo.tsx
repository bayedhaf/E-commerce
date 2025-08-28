import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'

interface Props{
  children:React.ReactNode;
  className?:string}

export default function Logo({children, className}:Props) {
  return (
    <Link href={"/"}>
    <h2 className={cn('text-2xl text-darkColor font-black tracking-wider uppercase  ',className)}>
      {children}
    </h2>
    </Link>
  )
}