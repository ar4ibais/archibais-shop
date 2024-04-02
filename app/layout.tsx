import type { Metadata } from 'next'
import './globalStyles/normalize.css'
import './globalStyles/globals.css'
import '@/app/globalStyles/header.css'
import '@/app/globalStyles/menu.css'
import Layout from '@/components/layouts/Layout'

export const metadata: Metadata = {
  title: 'Archibais',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
