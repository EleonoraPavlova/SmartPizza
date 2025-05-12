import './globals.css'

import { Atma } from 'next/font/google'
import { ReactNode } from 'react'

import { Header } from '@/shared/header'

const atma = Atma({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang='en' className={atma.className}>
      <body className='bg-primary/80 p-[30px]'>
        <Header />
        <main className='min-h-screen'>{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
