import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { cn } from '@/lib/utils'

import './globals.css'
import { QueryProvider } from '@/components/query-provider'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'antialiased min-h-screen')}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  )
}
