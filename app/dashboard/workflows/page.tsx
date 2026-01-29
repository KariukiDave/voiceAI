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
import { Plus, MoreHorizontal, GitBranch, Search, Phone } from "lucide-react"
import { Input } from "@/components/ui/input"

// Sample data for workflows
const workflows = [
  {
    id: 1,
    name: "Customer Support",
    status: "Active",
    numbers: ["+1 (555) 123-4567", "+254 712 345678"],
    created: "Jan 10, 2023",
    lastUpdated: "Jun 15, 2023",
  },
  {
    id: 2,
    name: "Appointment Booking",
    status: "Active",
    numbers: ["+1 (555) 987-6543"],
    created: "Feb 1, 2023",
    lastUpdated: "May 20, 2023",
  },
  {
    id: 3,
    name: "Lead Qualification",
    status: "Draft",
    numbers: [],
    created: "Mar 5, 2023",
    lastUpdated: "Mar 5, 2023",
  },
  {
    id: 4,
    name: "Order Status",
    status: "Active",
    numbers: ["+1 (555) 234-5678"],
    created: "Apr 12, 2023",
    lastUpdated: "Jul 3, 2023",
  },
  {
    id: 5,
    name: "Product Information",
    status: "Testing",
    numbers: [],
    created: "May 8, 2023",
    lastUpdated: "Jul 10, 2023",
  },
]

export default function WorkflowsPage() {
  return (
    <DashboardLayout>
      <PageHeader title="Workflows" subtitle="Create and manage your VoiceAI conversation workflows">
        <Button className="bg-vibrantCyan hover:bg-secondary-hover">
          <Plus className="mr-2 h-4 w-4" /> Create Workflow
        </Button>
      </PageHeader>

      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input className="pl-9" placeholder="Search workflows..." />
            </div>
            <div className="flex gap-2">
              <Button variant="outline">All</Button>
              <Button variant="outline">Active</Button>
              <Button variant="outline">Draft</Button>
              <Button variant="outline">Testing</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Workflow Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Assigned Numbers</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Last Updated</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {workflows.map((workflow) => (
              <TableRow key={workflow.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center">
                    <GitBranch className="h-4 w-4 text-vibrantCyan mr-2" />
                    {workflow.name}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={
                      workflow.status === "Active"
                        ? "bg-green-100 text-green-800 border-green-200"
                        : workflow.status === "Draft"
                          ? "bg-gray-100 text-gray-800 border-gray-200"
                          : "bg-yellow-100 text-yellow-800 border-yellow-200"
                    }
                  >
                    {workflow.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  {workflow.numbers.length > 0 ? (
                    <div className="flex flex-col space-y-1">
                      {workflow.numbers.map((number, index) => (
                        <div key={index} className="flex items-center">
                          <Phone className="h-3 w-3 text-gray-400 mr-1" />
                          <span className="text-sm">{number}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <span className="text-gray-500 text-sm">No numbers assigned</span>
                  )}
                </TableCell>
                <TableCell>{workflow.created}</TableCell>
                <TableCell>{workflow.lastUpdated}</TableCell>
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
                      <DropdownMenuItem>Edit Workflow</DropdownMenuItem>
                      <DropdownMenuItem>Clone Workflow</DropdownMenuItem>
                      <DropdownMenuItem>Assign Number</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">Delete Workflow</DropdownMenuItem>
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
