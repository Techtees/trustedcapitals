"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ArrowRight, User, Building } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const recentTransactions = [
  {
    id: "TXN001",
    sender: "John Doe",
    beneficiary: "Ezra Gibson",
    type: "Credit",
    amount: 250.0,
    description: "Transfer from savings",
    status: "Completed",
    date: "2024-01-15",
  },
  {
    id: "TXN002",
    sender: "Gibson Tech",
    beneficiary: "Ezra Gibson",
    type: "Credit",
    amount: 1500.0,
    description: "Salary deposit",
    status: "Completed",
    date: "2024-01-14",
  },
  {
    id: "TXN003",
    sender: "Ezra Gibson",
    beneficiary: "Jane Smith",
    type: "Debit",
    amount: -75.5,
    description: "Payment for services",
    status: "Completed",
    date: "2024-01-13",
  },
]

export default function CustomerDashboard() {
  const currentDate = new Date()
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
  const formattedTime =
    currentDate.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }) + " UTC"

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Header */}
      <div className="bg-[#26628a] text-white p-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="bg-white/20 p-2 rounded">
              <Building className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl font-semibold">Prime Holdings Inc.</h1>
              <p className="text-sm opacity-90">
                Available Balance: <span className="font-bold text-yellow-300">$500,000</span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="text-sm">Welcome Ezra Gibson</span>
            </div>
            <Button size="sm" className="bg-green-600 hover:bg-green-700">
              Make Transfer
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Column - User Info */}
          <div className="col-span-3 space-y-6">
            {/* User Profile */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-[#26628a] text-white">EG</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">Ezra Gibson</h3>
                    <p className="text-sm text-muted-foreground">5264093567</p>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>Date: {formattedDate}</p>
                  <p>Time: {formattedTime}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Center Column - Financial Overview */}
          <div className="col-span-6 space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-6">Financial Overview</h2>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {/* Total Balance */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-sm text-muted-foreground mb-2">Total Balance</h3>
                    <p className="text-3xl font-bold mb-3">$0.00</p>
                    <Button variant="link" className="p-0 h-auto text-[#26628a]">
                      View Statement <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>

                {/* Available Balance */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-sm text-muted-foreground mb-2">Available Balance</h3>
                    <p className="text-3xl font-bold mb-3 text-green-600">$500,000.00</p>
                    <Button variant="link" className="p-0 h-auto text-[#26628a]">
                      Transfer Fund <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Transactions Table */}
              <div>
                <h3 className="text-xl font-bold mb-4">Recent Transactions</h3>
                <Card>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>REFERENCE ID</TableHead>
                          <TableHead>SENDER/BENEFICIARY</TableHead>
                          <TableHead>TYPE</TableHead>
                          <TableHead>AMOUNT</TableHead>
                          <TableHead>DESCRIPTION</TableHead>
                          <TableHead>STATUS</TableHead>
                          <TableHead>DATE</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {recentTransactions.map((transaction) => (
                          <TableRow key={transaction.id}>
                            <TableCell className="font-medium">{transaction.id}</TableCell>
                            <TableCell>
                              <div className="text-sm">
                                <p className="font-medium">{transaction.sender}</p>
                                {transaction.beneficiary !== transaction.sender && (
                                  <p className="text-muted-foreground">→ {transaction.beneficiary}</p>
                                )}
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge variant={transaction.type === "Credit" ? "default" : "secondary"}>
                                {transaction.type}
                              </Badge>
                            </TableCell>
                            <TableCell className={transaction.type === "Credit" ? "text-green-600" : "text-red-600"}>
                              {transaction.type === "Credit" ? "+" : ""}${Math.abs(transaction.amount).toFixed(2)}
                            </TableCell>
                            <TableCell>{transaction.description}</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="text-green-600 border-green-600">
                                {transaction.status}
                              </Badge>
                            </TableCell>
                            <TableCell>{transaction.date}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Right Column - Account Details */}
          <div className="col-span-3">
            <Card>
              <CardHeader>
                <CardTitle>Account Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Account Name :</span>
                    <span className="font-medium">Ezra Gibson</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Business Name :</span>
                    <span className="font-medium">Gibson Tech</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Balance :</span>
                    <span className="font-medium text-green-600">$500,000.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Account Type :</span>
                    <span className="font-medium">Revolving Line of Credit</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">LLR Account Bal :</span>
                    <span className="font-medium">$0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Account Number :</span>
                    <span className="font-medium">52640****67</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Swift Code :</span>
                    <span className="font-medium">TSOB827282</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
