import DashboardLayout from "@/components/dashboard/dashboard-layout"
import PageHeader from "@/components/dashboard/page-header"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Plus, MoreHorizontal, Phone, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

// Sample data for phone numbers
const phoneNumbers = [
  {
    id: 1,
    number: "+1 (555) 123-4567",
    workflow: "Customer Support",
    status: "Active",
    location: "United States",
    added: "Jan 15, 2023",
  },
  {
    id: 2,
    number: "+1 (555) 987-6543",
    workflow: "Appointment Booking",
    status: "Active",
    location: "United States",
    added: "Feb 3, 2023",
  },
  {
    id: 3,
    number: "+44 20 1234 5678",
    workflow: "Lead Qualification",
    status: "Paused",
    location: "United Kingdom",
    added: "Mar 12, 2023",
  },
  {
    id: 4,
    number: "+254 712 345678",
    workflow: "Customer Support",
    status: "Active",
    location: "Kenya",
    added: "Apr 5, 2023",
  },
  {
    id: 5,
    number: "+1 (555) 234-5678",
    workflow: "Order Status",
    status: "Active",
    location: "United States",
    added: "May 20, 2023",
  },
]

export default function PhoneNumbersPage() {
  return (
    <DashboardLayout>
      <PageHeader title="Phone Numbers" subtitle="Manage your VoiceAI phone numbers">
        <Button className="bg-vibrantCyan hover:bg-secondary-hover">
          <Plus className="mr-2 h-4 w-4" /> Add Number
        </Button>
      </PageHeader>

      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input className="pl-9" placeholder="Search phone numbers..." />
            </div>
            <div className="flex gap-2">
              <Button variant="outline">All Numbers</Button>
              <Button variant="outline">Active</Button>
              <Button variant="outline">Paused</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Phone Number</TableHead>
              <TableHead>Assigned Workflow</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Added</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {phoneNumbers.map((number) => (
              <TableRow key={number.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-vibrantCyan mr-2" />
                    {number.number}
                  </div>
                </TableCell>
                <TableCell>{number.workflow}</TableCell>
                <TableCell>
                  <Badge
                    variant={number.status === "Active" ? "default" : "secondary"}
                    className={
                      number.status === "Active"
                        ? "bg-green-100 text-green-800 hover:bg-green-100"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                    }
                  >
                    {number.status}
                  </Badge>
                </TableCell>
                <TableCell>{number.location}</TableCell>
                <TableCell>{number.added}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Edit Number</DropdownMenuItem>
                      <DropdownMenuItem>Change Workflow</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">Remove Number</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </DashboardLayout>
  )
}
