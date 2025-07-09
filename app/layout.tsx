import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import "./browser-compat.css"
import { Toaster } from "sonner"


export const metadata = {
    title: 'James Saiban – Full-Stack Engineer',
    description: 'Full-stack portfolio showcasing projects, skills, and experience using Next.js, TypeScript, and more.',
    openGraph: {
        title: 'James Saiban – Full-Stack Engineer',
        description: 'Explore my work, projects, and contact info.',
        url: 'https://saibanjamesr.dev',
        siteName: 'James Saiban Portfolio',
        images: [
            {
                url: 'https://saibanjamesr.dev/placeholder.svg',
                width: 1200,
                height: 630,
                alt: 'James Saiban Portfolio Preview',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'James Saiban – Full-Stack Engineer',
        description: 'Check out my full-stack portfolio and get in touch.',
        images: ['https://saibanjamesr.dev/placeholder.svg'],
    },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster position="top-right" theme="dark" />
      </body>
    </html>
  )
}
