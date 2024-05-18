import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'

import { cn } from '@/lib/utils'

export default function Auth() {
  return (
    <section id='auth-page' className='full-container'>
      <section className='container flex flex-col gap-2'>
        <h1 className='text-xl md:text-2xl'>
          This page should be Auth page with login, register, forgot password,
          etc...
        </h1>
        <Link
          href='/dashboard'
          className={cn(buttonVariants({ variant: 'default' }), 'w-fit')}
        >
          Go to Dashboard
        </Link>
      </section>
    </section>
  )
}
