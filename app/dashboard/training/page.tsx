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
import { MoreHorizontal, Search, FileText, Upload, FolderPlus, File, FileArchive, Link2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample data for training resources
const trainingResources = [
  {
    id: 1,
    name: "Customer Support Guidelines",
    type: "PDF",
    status: "Processed",
    lastUpdated: "Jul 10, 2023",
    size: "2.4 MB",
    folder: "Guidelines",
  },
  {
    id: 2,
    name: "Product Catalog 2023",
    type: "PDF",
    status: "Processed",
    lastUpdated: "Jun 25, 2023",
    size: "5.1 MB",
    folder: "Products",
  },
  {
    id: 3,
    name: "Troubleshooting Steps",
    type: "DOC",
    status: "Processing",
    lastUpdated: "Jul 15, 2023",
    size: "1.8 MB",
    folder: "Technical",
  },
  {
    id: 4,
    name: "Pricing Information",
    type: "TXT",
    status: "Processed",
    lastUpdated: "Jul 5, 2023",
    size: "0.5 MB",
    folder: "Sales",
  },
  {
    id: 5,
    name: "Company Knowledge Base",
    type: "URL",
    status: "Error",
    lastUpdated: "Jul 12, 2023",
    size: "N/A",
    folder: "External",
  },
]

export default function TrainingResourcesPage() {
  return (
    <DashboardLayout>
      <PageHeader title="Training Resources" subtitle="Upload and manage training materials for your AI voice agents">
        <div className="flex space-x-2">
          <Button className="bg-vibrantCyan hover:bg-secondary-hover">
            <Upload className="mr-2 h-4 w-4" /> Upload Files
          </Button>
          <Button variant="outline">
            <Link2 className="mr-2 h-4 w-4" /> Add URL
          </Button>
        </div>
      </PageHeader>

      <Tabs defaultValue="all" className="mb-6">
        <TabsList>
          <TabsTrigger value="all">All Resources</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="urls">URLs</TabsTrigger>
          <TabsTrigger value="processed">Processed</TabsTrigger>
          <TabsTrigger value="errors">Errors</TabsTrigger>
        </TabsList>
      </Tabs>

      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input className="pl-9" placeholder="Search resources..." />
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <FolderPlus className="mr-2 h-4 w-4" /> New Folder
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Updated</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Folder</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {trainingResources.map((resource) => (
              <TableRow key={resource.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center">
                    {resource.type === "PDF" ? (
                      <FileText className="h-4 w-4 text-red-500 mr-2" />
                    ) : resource.type === "DOC" ? (
                      <File className="h-4 w-4 text-blue-500 mr-2" />
                    ) : resource.type === "TXT" ? (
                      <File className="h-4 w-4 text-gray-500 mr-2" />
                    ) : resource.type === "URL" ? (
                      <Link2 className="h-4 w-4 text-green-500 mr-2" />
                    ) : (
                      <FileArchive className="h-4 w-4 text-yellow-500 mr-2" />
                    )}
                    {resource.name}
                  </div>
                </TableCell>
                <TableCell>{resource.type}</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={
                      resource.status === "Processed"
                        ? "bg-green-100 text-green-800 border-green-200"
                        : resource.status === "Processing"
                          ? "bg-blue-100 text-blue-800 border-blue-200"
                          : "bg-red-100 text-red-800 border-red-200"
                    }
                  >
                    {resource.status}
                  </Badge>
                </TableCell>
                <TableCell>{resource.lastUpdated}</TableCell>
                <TableCell>{resource.size}</TableCell>
                <TableCell>{resource.folder}</TableCell>
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
                      <DropdownMenuItem>Download</DropdownMenuItem>
                      <DropdownMenuItem>Move to Folder</DropdownMenuItem>
                      <DropdownMenuItem>Reprocess</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
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
