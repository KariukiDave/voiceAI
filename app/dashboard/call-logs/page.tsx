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
import { MoreHorizontal, Search, Phone, ArrowDownLeft, ArrowUpRight, Play, Download, FileText, Tag } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample data for call logs
const callLogs = [
  {
    id: 1,
    date: "Jul 15, 2023 10:23 AM",
    number: "+1 (555) 123-4567",
    direction: "Inbound",
    duration: "3m 45s",
    workflow: "Customer Support",
    status: "Resolved",
    hasRecording: true,
    hasTranscript: true,
  },
  {
    id: 2,
    date: "Jul 14, 2023 2:15 PM",
    number: "+1 (555) 987-6543",
    direction: "Outbound",
    duration: "2m 12s",
    workflow: "Appointment Booking",
    status: "Completed",
    hasRecording: true,
    hasTranscript: true,
  },
  {
    id: 3,
    date: "Jul 14, 2023 11:05 AM",
    number: "+44 20 1234 5678",
    direction: "Inbound",
    duration: "5m 30s",
    workflow: "Lead Qualification",
    status: "Transferred",
    hasRecording: true,
    hasTranscript: true,
  },
  {
    id: 4,
    date: "Jul 13, 2023 4:45 PM",
    number: "+254 712 345678",
    direction: "Inbound",
    duration: "1m 50s",
    workflow: "Customer Support",
    status: "Resolved",
    hasRecording: true,
    hasTranscript: false,
  },
  {
    id: 5,
    date: "Jul 13, 2023 9:30 AM",
    number: "+1 (555) 234-5678",
    direction: "Inbound",
    duration: "4m 10s",
    workflow: "Order Status",
    status: "Failed",
    hasRecording: false,
    hasTranscript: false,
  },
]

export default function CallLogsPage() {
  return (
    <DashboardLayout>
      <PageHeader title="Call Logs & Recordings" subtitle="View and manage your call history">
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" /> Export Logs
        </Button>
      </PageHeader>

      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input className="pl-9" placeholder="Search calls..." />
            </div>
            <div>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Filter by number" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Numbers</SelectItem>
                  <SelectItem value="1">+1 (555) 123-4567</SelectItem>
                  <SelectItem value="2">+1 (555) 987-6543</SelectItem>
                  <SelectItem value="3">+44 20 1234 5678</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Filter by workflow" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Workflows</SelectItem>
                  <SelectItem value="1">Customer Support</SelectItem>
                  <SelectItem value="2">Appointment Booking</SelectItem>
                  <SelectItem value="3">Lead Qualification</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Filter by outcome" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Outcomes</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                  <SelectItem value="transferred">Transferred</SelectItem>
                  <SelectItem value="failed">Failed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date & Time</TableHead>
              <TableHead>Number</TableHead>
              <TableHead>Direction</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Workflow</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {callLogs.map((log) => (
              <TableRow key={log.id}>
                <TableCell>{log.date}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-gray-400 mr-2" />
                    {log.number}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    {log.direction === "Inbound" ? (
                      <ArrowDownLeft className="h-4 w-4 text-green-500 mr-1" />
                    ) : (
                      <ArrowUpRight className="h-4 w-4 text-blue-500 mr-1" />
                    )}
                    {log.direction}
                  </div>
                </TableCell>
                <TableCell>{log.duration}</TableCell>
                <TableCell>{log.workflow}</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={
                      log.status === "Resolved" || log.status === "Completed"
                        ? "bg-green-100 text-green-800 border-green-200"
                        : log.status === "Transferred"
                          ? "bg-blue-100 text-blue-800 border-blue-200"
                          : "bg-red-100 text-red-800 border-red-200"
                    }
                  >
                    {log.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end space-x-2">
                    {log.hasRecording && (
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Play className="h-4 w-4 text-vibrantCyan" />
                      </Button>
                    )}
                    {log.hasTranscript && (
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <FileText className="h-4 w-4 text-vibrantCyan" />
                      </Button>
                    )}
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
                        <DropdownMenuItem>
                          <Play className="h-4 w-4 mr-2" /> Play Recording
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Download className="h-4 w-4 mr-2" /> Download Recording
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <FileText className="h-4 w-4 mr-2" /> View Transcript
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Tag className="h-4 w-4 mr-2" /> Add Tags
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </DashboardLayout>
  )
}
