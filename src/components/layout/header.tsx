'use client'

import { Menu } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import ThemeSwither from '../theme/theme-switcher'
import { Button } from '../ui/button'

interface Props {
  isAuth: boolean
}

const Header: React.FC<Props> = ({ isAuth = false }) => {
  let router = useRouter()

  return (
    <header className='bg-background fixed w-full h-20 full-container shadow-md z-50'>
      <div className='container flex flex-row justify-between gap-4'>
        <Link href='/'>Main Logo</Link>
        <div className='flex gap-2 xl:gap-4 items-center'>
          <ThemeSwither />
          {isAuth ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant='ghost'>
                  <Menu size={32} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='w-56'>
                <DropdownMenuLabel>Menu Title</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => router.push('/')}>
                  HomePage
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push('/dashboard')}>
                  Dashboard
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className='p-0'
                  onClick={() => alert('logout')}
                >
                  <Button variant={'destructive'} className='w-full'>
                    LogOut
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href='/auth'>
              <Button variant={'default'} size={'lg'} className='w-fit'>
                LogIn
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
