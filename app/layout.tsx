import { Inter } from "next/font/google"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import "./globals.css"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Job Application Dashboard",
  description: "Browse and apply for jobs",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen">
          <SidebarProvider>
            <main>
              <SidebarTrigger />
              {children}
            </main>
          </SidebarProvider>
        </div>

      </body>
    </html>
  )
}

