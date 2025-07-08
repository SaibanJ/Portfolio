import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import "./browser-compat.css"
import { Toaster } from "sonner"

export const metadata: Metadata = {
  title: "Portfolio",
  description: "A modern portolio",
}

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
