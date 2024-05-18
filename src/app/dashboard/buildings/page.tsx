import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'

export default function BuildingsPage() {
  return (
    <div className='flex flex-col gap-2'>
      <h1>Buildings page</h1>
      <Link
        href='/dashboard/buildings/create'
        className={buttonVariants({ variant: 'outline' })}
      >
        Create new building
      </Link>
      <ul className='flex flex-col gap-2'>
        <li className='flex gap-2 items-center'>
          <h2>Building #1</h2>
          <Link
            href='/dashboard/buildings/1'
            className={buttonVariants({ variant: 'default' })}
          >
            Open
          </Link>
        </li>
        <li className='flex gap-2 items-center'>
          <h2>Building #2</h2>
          <Link
            href='/dashboard/buildings/2'
            className={buttonVariants({ variant: 'default' })}
          >
            Open
          </Link>
        </li>
        <li className='flex gap-2 items-center'>
          <h2>Building #2</h2>
          <Link
            href='/dashboard/buildings/2'
            className={buttonVariants({ variant: 'default' })}
          >
            Open
          </Link>
        </li>
      </ul>
    </div>
  )
}
