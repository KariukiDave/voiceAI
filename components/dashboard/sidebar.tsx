"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Phone,
  GitBranch,
  ListMusic,
  BookOpen,
  Link2,
  BarChart2,
  Key,
  CreditCard,
  HelpCircle,
  User,
  X,
  Search,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface SidebarProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function Sidebar({ open, onOpenChange }: SidebarProps) {
  const pathname = usePathname()
  const [searchQuery, setSearchQuery] = useState("")

  const menuItems = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      name: "Phone Numbers",
      href: "/dashboard/phone-numbers",
      icon: <Phone className="h-5 w-5" />,
    },
    {
      name: "Workflows",
      href: "/dashboard/workflows",
      icon: <GitBranch className="h-5 w-5" />,
    },
    {
      name: "Call Logs & Recordings",
      href: "/dashboard/call-logs",
      icon: <ListMusic className="h-5 w-5" />,
    },
    {
      name: "Training Resources",
      href: "/dashboard/training",
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      name: "Integrations",
      href: "/dashboard/integrations",
      icon: <Link2 className="h-5 w-5" />,
    },
    {
      name: "Analytics & Reports",
      href: "/dashboard/analytics",
      icon: <BarChart2 className="h-5 w-5" />,
    },
    {
      name: "API Keys",
      href: "/dashboard/api-keys",
      icon: <Key className="h-5 w-5" />,
    },
    {
      name: "Billing & Subscription",
      href: "/dashboard/billing",
      icon: <CreditCard className="h-5 w-5" />,
    },
    {
      name: "Support",
      href: "/dashboard/support",
      icon: <HelpCircle className="h-5 w-5" />,
    },
    {
      name: "Profile & Settings",
      href: "/dashboard/profile",
      icon: <User className="h-5 w-5" />,
    },
  ]

  return (
    <>
      {/* Mobile overlay */}
      {open && <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={() => onOpenChange(false)}></div>}

      {/* Sidebar - fixed position and full height */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-screen bg-white border-r border-gray-200 transition-all duration-300 ease-in-out",
          open ? "w-64" : "w-20",
          "transform",
          open ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo and close button */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <Link href="/dashboard" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-deepBlue to-vibrantCyan"></div>
              {open && <span className="text-xl font-bold font-poppins text-deepBlue">VoiceAI</span>}
            </Link>
            <button className="md:hidden text-gray-500 hover:text-gray-700" onClick={() => onOpenChange(false)}>
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Search */}
          {open && (
            <div className="p-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="pl-9 bg-gray-50"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          )}

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-1 px-2">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center px-3 py-2 rounded-lg transition-colors",
                      pathname === item.href ? "bg-vibrantCyan/10 text-vibrantCyan" : "text-gray-700 hover:bg-gray-100",
                      !open && "justify-center",
                      open && "space-x-3",
                    )}
                  >
                    {item.icon}
                    {open && <span>{item.name}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Upgrade Plan - only show when sidebar is expanded */}
          {open && (
            <div className="p-4 border-t border-gray-200">
              <div className="bg-gradient-to-r from-deepBlue/5 to-vibrantCyan/5 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-deepBlue">Pro Plan</h4>
                  <span className="px-2 py-1 text-xs bg-vibrantCyan/20 text-vibrantCyan rounded-full">Current</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">Upgrade to unlock advanced features</p>
                <Button size="sm" className="w-full bg-vibrantCyan hover:bg-secondary-hover" asChild>
                  <Link href="/dashboard/billing">Upgrade Plan</Link>
                </Button>
              </div>
            </div>
          )}

          {/* Toggle button */}
          <div className="hidden md:flex p-4 border-t border-gray-200 justify-center">
            <button
              onClick={() => onOpenChange(!open)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label={open ? "Collapse sidebar" : "Expand sidebar"}
            >
              {open ? (
                <ChevronLeft className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronRight className="h-5 w-5 text-gray-500" />
              )}
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}
