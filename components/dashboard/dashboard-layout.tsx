"use client"

import type React from "react"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Sidebar from "@/components/dashboard/sidebar"
import TopBar from "@/components/dashboard/top-bar"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar - now fixed position */}
      <Sidebar open={sidebarOpen} onOpenChange={setSidebarOpen} />

      {/* Main Content - with fixed width regardless of sidebar state */}
      <div className="flex-1 flex flex-col ml-20">
        <TopBar onMenuButtonClick={() => setSidebarOpen(true)} />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  )
}
