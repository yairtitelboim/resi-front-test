'use client'

import { usePathname } from 'next/navigation'
import { PropsWithChildren } from 'react'

import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import Main from '@/components/layout/main'
import { ThemeProvider } from '@/components/theme/theme-provider'

const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname()
  //here need to be providers as well
  return (
    <>
      <ThemeProvider
        attribute='class'
        defaultTheme='light'
        disableTransitionOnChange
      >
        <Header isAuth={pathname !== '/' ? true : false} />
        <Main>{children}</Main>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default AppLayout
