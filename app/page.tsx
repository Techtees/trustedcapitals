"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function LoginPage() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  })

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    // Simple role detection based on username/email
    // In a real app, this would be handled by your backend
    const isAdmin =
      credentials.username.toLowerCase().includes("admin") ||
      credentials.username.toLowerCase() === "admin" ||
      credentials.username.toLowerCase().includes("administrator")

    if (isAdmin) {
      // Redirect to admin dashboard
      window.location.href = "/admin/dashboard"
    } else {
      // Redirect to customer dashboard
      window.location.href = "/customer/dashboard"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#26628a] via-[#265372] to-[#3eacc6] flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm shadow-2xl">
        <CardHeader className="text-center pb-4">
          <div className="flex justify-center mb-4">
            <Image src="/logo.png" alt="TrustedCap Logo" width={120} height={60} className="object-contain" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Login</h1>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username or email"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                required
              />
            </div>
            <div className="text-right">
              <a href="#" className="text-sm text-[#3eacc6] hover:underline">
                Forgot Password?
              </a>
            </div>
            <Button type="submit" className="w-full bg-[#26628a] hover:bg-[#265372]">
              Login
            </Button>
          </form>

          <div className="mt-6 p-3 bg-blue-50 rounded-lg">
            <p className="text-xs text-blue-700 text-center">
              <strong>Demo Access:</strong>
              <br />
              Customer: Use any username
              <br />
              Admin: Use "admin" in username
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
