import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'

import { cn } from '@/lib/utils'

export default function HomePage() {
  return (
    <section id='home-page' className='full-container'>
      <section className='container flex flex-col gap-2'>
        <h1 className='text-xl md:text-2xl'>
          This page should be main Landing page with some cool things about
          project, pricing, etc...
        </h1>
        <Link
          href='/auth'
          className={cn(
            buttonVariants({ variant: 'default', size: 'lg' }),
            'w-fit'
          )}
        >
          Go to Login
        </Link>
      </section>
    </section>
  )
}
