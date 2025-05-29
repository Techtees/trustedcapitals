"use client"

import { Home, History, CreditCard, User, LogOut, Building, Plane, DollarSign } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"

const accountItems = [
  {
    title: "Home",
    url: "/customer/dashboard",
    icon: Home,
  },
  {
    title: "Account History",
    url: "/customer/transactions",
    icon: History,
  },
]

const fundTransferItems = [
  {
    title: "Local Transfer",
    url: "/customer/local-transfer",
    icon: Building,
  },
  {
    title: "International Transfer",
    url: "/customer/international-transfer",
    icon: Plane,
  },
]

const loanItems = [
  {
    title: "Loan",
    url: "/customer/loan",
    icon: DollarSign,
  },
]

const userItems = [
  {
    title: "Banking Info",
    url: "/customer/banking-info",
    icon: CreditCard,
  },
  {
    title: "Profile",
    url: "/customer/profile",
    icon: User,
  },
]

export function CustomerSidebar() {
  const pathname = usePathname()

  const handleLogout = () => {
    // Redirect to login page
    window.location.href = "/"
  }

  return (
    <Sidebar className="border-r border-gray-200">
      <SidebarHeader className="border-b border-gray-200 p-4">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="TrustedCap Logo" width={40} height={20} className="object-contain" />
          <div>
            <h2 className="text-lg font-semibold text-[#26628a]">TrustedCap</h2>
            <p className="text-xs text-muted-foreground">Customer Portal</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>ACCOUNT</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {accountItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.url}>
                    <Link href={item.url} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>FUND TRANSFER</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {fundTransferItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.url}>
                    <Link href={item.url} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>LOAN</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {loanItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.url}>
                    <Link href={item.url} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>USER</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {userItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.url}>
                    <Link href={item.url} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-gray-200 p-4">
        <Button variant="outline" onClick={handleLogout} className="w-full justify-start gap-2">
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </SidebarFooter>
    </Sidebar>
  )
}
