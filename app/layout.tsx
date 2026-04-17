import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import "./browser-compat.css"
import { Toaster } from "sonner"


export const metadata: Metadata = {
  title: "James Saiban – Full-Stack Engineer",
  description:
    "Self-taught full-stack engineer based in Michigan specialising in Next.js, TypeScript, React, and Supabase. View my projects, experience, and get in touch.",
  keywords: [
    "James Saiban",
    "full-stack engineer",
    "web developer",
    "Next.js",
    "TypeScript",
    "React",
    "Supabase",
    "Michigan",
    "portfolio",
  ],
  metadataBase: new URL("https://saibanjamesr.dev"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "James Saiban – Full-Stack Engineer",
    description:
      "Self-taught full-stack engineer specialising in Next.js, TypeScript, and React. Explore my projects including iTeachAll and WebConcoction.",
    url: "https://saibanjamesr.dev",
    siteName: "James Saiban",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "James Saiban – Full-Stack Engineer",
    description:
      "Self-taught full-stack engineer specialising in Next.js, TypeScript, and React. Explore my projects including iTeachAll and WebConcoction.",
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
