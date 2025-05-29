"use client"

import type React from "react"

import { SidebarProvider } from "@/components/ui/sidebar"
import { CustomerSidebar } from "@/components/customer-sidebar"

export default function CustomerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <CustomerSidebar />
      <main className="flex-1 overflow-auto">{children}</main>
    </SidebarProvider>
  )
}
