import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import AppContextProvider from '@/context/app-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ecom Inventory | Dynamite',
  description: 'NextJS App created by Kevin Shirley',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppContextProvider>
          {children}
        </AppContextProvider>
      </body>
    </html>
  )
}
