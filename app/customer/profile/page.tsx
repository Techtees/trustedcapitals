"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, CreditCard, Phone, Mail, MapPin, Building } from "lucide-react"

const userProfile = {
  personalInfo: {
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main Street, City, State 12345",
    dateJoined: "January 15, 2023",
  },
  bankingDetails: {
    accountNumber: "****-****-****-1234",
    bankName: "TrustedCap Bank",
    accountName: "John Smith",
    accountType: "Checking Account",
    routingNumber: "****5678",
  },
}

export default function ProfilePage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Profile</h1>
        <Badge variant="outline" className="text-[#26628a]">
          Customer Portal
        </Badge>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Personal Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Personal Information
            </CardTitle>
            <CardDescription>Your personal details (read-only)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Full Name</label>
              <p className="text-sm font-medium">{userProfile.personalInfo.name}</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground flex items-center gap-1">
                <Mail className="h-3 w-3" />
                Email Address
              </label>
              <p className="text-sm font-medium">{userProfile.personalInfo.email}</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground flex items-center gap-1">
                <Phone className="h-3 w-3" />
                Phone Number
              </label>
              <p className="text-sm font-medium">{userProfile.personalInfo.phone}</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                Address
              </label>
              <p className="text-sm font-medium">{userProfile.personalInfo.address}</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Member Since</label>
              <p className="text-sm font-medium">{userProfile.personalInfo.dateJoined}</p>
            </div>
          </CardContent>
        </Card>

        {/* Banking Details */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Banking Details
            </CardTitle>
            <CardDescription>Your account information (read-only)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Account Number</label>
              <p className="text-sm font-medium font-mono">{userProfile.bankingDetails.accountNumber}</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground flex items-center gap-1">
                <Building className="h-3 w-3" />
                Bank Name
              </label>
              <p className="text-sm font-medium">{userProfile.bankingDetails.bankName}</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Account Name</label>
              <p className="text-sm font-medium">{userProfile.bankingDetails.accountName}</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Account Type</label>
              <p className="text-sm font-medium">{userProfile.bankingDetails.accountType}</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Routing Number</label>
              <p className="text-sm font-medium font-mono">{userProfile.bankingDetails.routingNumber}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Security Notice */}
      <Card className="border-amber-200 bg-amber-50">
        <CardHeader>
          <CardTitle className="text-amber-800">Security Notice</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-amber-700">
            🔒 For security reasons, personal information and banking details cannot be modified through this portal.
            Please contact customer support if you need to update any information.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
