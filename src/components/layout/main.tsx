'use client'

import { usePathname } from 'next/navigation'
import { PropsWithChildren } from 'react'

import { cn } from '@/lib/utils'

const Main: React.FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname()
  return (
    <main
      className={cn('w-full pt-20', {
        'min-h-[calc(100vh-80px)]':
          !pathname.includes('auth') && !pathname.includes('dashboard')
      })}
    >
      {children}
    </main>
  )
}

export default Main
