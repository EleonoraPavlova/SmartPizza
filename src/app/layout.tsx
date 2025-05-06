import './globals.css'

import type { Metadata } from 'next'
import { Atma } from 'next/font/google'
import { ReactNode } from 'react'

const atma = Atma({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Pizza',
  description: 'Enjoy the best pizza recipes. A wide range of toppings and dough for every taste',
}

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang='en' className={atma.className}>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
