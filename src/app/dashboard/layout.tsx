import Link from 'next/link'

import { layoutLinks } from './layout-links'

export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <section className='full-container'>
      <section className='w-full flex flex-row'>
        <aside className='flex flex-col gap-2 w-60 p-4 border border-border bg-slate-400 min-h-[400px]'>
          {layoutLinks.map(({ path, name, icon }) => (
            <Link key={path} href={path} className='flex flex-row gap-2'>
              {icon}
              <span>{name}</span>
            </Link>
          ))}
        </aside>
        <section className='flex flex-col gap-2 w-full p-4'>{children}</section>
      </section>
    </section>
  )
}
