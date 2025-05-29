"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const allTransactions = [
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
  {
    id: "TXN004",
    sender: "Merchant Refund",
    beneficiary: "Ezra Gibson",
    type: "Credit",
    amount: 200.0,
    description: "Refund from merchant",
    status: "Completed",
    date: "2024-01-12",
  },
  {
    id: "TXN005",
    sender: "Ezra Gibson",
    beneficiary: "Mike Johnson",
    type: "Debit",
    amount: -120.0,
    description: "Utility payment",
    status: "Completed",
    date: "2024-01-11",
  },
  {
    id: "TXN006",
    sender: "Ezra Gibson",
    beneficiary: "Sarah Wilson",
    type: "Debit",
    amount: -300.0,
    description: "Rent payment",
    status: "Pending",
    date: "2024-01-10",
  },
  {
    id: "TXN007",
    sender: "Investment Return",
    beneficiary: "Ezra Gibson",
    type: "Credit",
    amount: 850.0,
    description: "Monthly investment return",
    status: "Completed",
    date: "2024-01-09",
  },
]

export default function TransactionsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")

  const filteredTransactions = allTransactions.filter((transaction) => {
    const matchesSearch =
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.beneficiary.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesFilter = filterType === "all" || transaction.type.toLowerCase() === filterType

    return matchesSearch && matchesFilter
  })

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Transaction History</h1>
        <Badge variant="outline" className="text-[#26628a]">
          Customer Portal
        </Badge>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardHeader>
          <CardTitle>Search Transactions</CardTitle>
          <CardDescription>
            Find specific transactions by reference, description, sender, or beneficiary
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search transactions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={filterType === "all" ? "default" : "outline"}
                onClick={() => setFilterType("all")}
                className={filterType === "all" ? "bg-[#26628a]" : ""}
              >
                All
              </Button>
              <Button
                variant={filterType === "credit" ? "default" : "outline"}
                onClick={() => setFilterType("credit")}
                className={filterType === "credit" ? "bg-green-600" : ""}
              >
                Credits
              </Button>
              <Button
                variant={filterType === "debit" ? "default" : "outline"}
                onClick={() => setFilterType("debit")}
                className={filterType === "debit" ? "bg-red-600" : ""}
              >
                Debits
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Transactions Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Transactions</CardTitle>
          <CardDescription>Complete history of your account activity</CardDescription>
        </CardHeader>
        <CardContent>
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
              {filteredTransactions.map((transaction) => (
                <TableRow key={transaction.id} className="hover:bg-muted/50">
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
                    <Badge
                      variant={transaction.type === "Credit" ? "default" : "secondary"}
                      className={
                        transaction.type === "Credit" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      }
                    >
                      {transaction.type}
                    </Badge>
                  </TableCell>
                  <TableCell
                    className={
                      transaction.type === "Credit" ? "text-green-600 font-semibold" : "text-red-600 font-semibold"
                    }
                  >
                    {transaction.type === "Credit" ? "+" : ""}${Math.abs(transaction.amount).toFixed(2)}
                  </TableCell>
                  <TableCell>{transaction.description}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        transaction.status === "Completed"
                          ? "text-green-600 border-green-600"
                          : "text-yellow-600 border-yellow-600"
                      }
                    >
                      {transaction.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{transaction.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {filteredTransactions.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">No transactions found matching your criteria.</div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
