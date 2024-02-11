'use client'
import { GlobalProvider } from '@/app/_context/store'
import { Providers } from '@/app/_utils/themeMode'
import Footer from '@/components/organism/footer'
import Header from '@/components/organism/header'
import { Plus_Jakarta_Sans, Work_Sans } from 'next/font/google'
import React from 'react'
import './globals.css'

const Jakarta_Sans = Plus_Jakarta_Sans({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta-sans',
})

const work_Sans = Work_Sans({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${Jakarta_Sans.variable} ${work_Sans.variable} font-sans`}
    >
      <body>
        <Providers>
          <GlobalProvider>
            <Header />
            {children}
            <Footer />
          </GlobalProvider>
        </Providers>
      </body>
    </html>
  )
}
