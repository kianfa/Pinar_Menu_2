import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Vazirmatn } from 'next/font/google'
import './globals.css'

const vazirmatn = Vazirmatn({
  variable: '--font-vazirmatn',
  subsets: ['arabic', 'latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'پینار فست‌فود | طعم بی‌نظیر، تجربه ماندگار',
  description:
    'منوی دیجیتال پینار فست‌فود؛ پیتزا، مرغ سوخاری، ساندویچ، پیش‌غذا، نوشیدنی و سس‌های مخصوص با کیفیت و طعمی فراموش‌نشدنی.',
  generator: 'v0.app',
  icons: {
    icon: '/images/pinar-logo.png',
    apple: '/images/pinar-logo.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#b91019',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa" dir="rtl" className={`light ${vazirmatn.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
