import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Grá <3',
  description: 'A special birthday celebration',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white overflow-hidden">
        {children}
      </body>
    </html>
  )
}