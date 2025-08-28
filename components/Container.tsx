import { cn } from '@/lib/utils';
import React from 'react'

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: Props) {
  return (
    <div className={cn("container mx-auto px-4  max-w-screen-xl ",className)}>
      {children}
    </div>
  )
}