import type { Metadata, Viewport } from 'next'
import { Exo_2, Orbitron, Rajdhani, Share_Tech_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo2",
  weight: ["300", "400", "500", "600", "700"],
})

const _orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "700", "800", "900"],
})

const _rajdhani = Rajdhani({
  subsets: ["latin"],
  variable: "--font-rajdhani",
  weight: ["400", "500", "600", "700"],
})

const _shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  variable: "--font-share-tech-mono",
  weight: "400",
})

export const metadata: Metadata = {
  title: 'Blackout Casino',
  description: 'Blackout Casino v4 - A melhor experiencia de casino online',
}

export const viewport: Viewport = {
  themeColor: '#07070D',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${_exo2.variable} ${_orbitron.variable} ${_rajdhani.variable} ${_shareTechMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
