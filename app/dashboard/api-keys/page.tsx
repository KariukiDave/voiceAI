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
import { MoreHorizontal, Plus, Key, Copy, RefreshCw, AlertTriangle } from "lucide-react"

// Sample data for API keys
const apiKeys = [
  {
    id: 1,
    name: "Production API Key",
    key: "vapi_prod_xxxxxxxxxxxxxxxxxxxx",
    created: "Jan 15, 2023",
    lastUsed: "Jul 15, 2023 (Today)",
    status: "Active",
    usageThisMonth: "12,450 calls",
  },
  {
    id: 2,
    name: "Development API Key",
    key: "vapi_dev_xxxxxxxxxxxxxxxxxxxx",
    created: "Feb 3, 2023",
    lastUsed: "Jul 14, 2023 (Yesterday)",
    status: "Active",
    usageThisMonth: "5,230 calls",
  },
  {
    id: 3,
    name: "Testing API Key",
    key: "vapi_test_xxxxxxxxxxxxxxxxxxxx",
    created: "Mar 12, 2023",
    lastUsed: "Jul 10, 2023",
    status: "Active",
    usageThisMonth: "1,845 calls",
  },
  {
    id: 4,
    name: "Legacy API Key",
    key: "vapi_legacy_xxxxxxxxxxxxxxxxxx",
    created: "Dec 5, 2022",
    lastUsed: "Jun 20, 2023",
    status: "Inactive",
    usageThisMonth: "0 calls",
  },
]

export default function ApiKeysPage() {
  return (
    <DashboardLayout>
      <PageHeader title="API Keys" subtitle="Manage your VoiceAI API keys for integration with other systems">
        <Button className="bg-vibrantCyan hover:bg-secondary-hover">
          <Plus className="mr-2 h-4 w-4" /> Generate API Key
        </Button>
      </PageHeader>

      <Card className="mb-6 border-yellow-200 bg-yellow-50">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-medium text-yellow-800 mb-1">API Key Security</h3>
              <p className="text-yellow-700 text-sm">
                Keep your API keys secure. Do not share them in publicly accessible areas such as GitHub, client-side
                code, or forums. If you believe an API key has been compromised, regenerate it immediately.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>API Key</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Last Used</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Usage This Month</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {apiKeys.map((apiKey) => (
              <TableRow key={apiKey.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center">
                    <Key className="h-4 w-4 text-vibrantCyan mr-2" />
                    {apiKey.name}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">{apiKey.key}</code>
                    <Button variant="ghost" size="icon" className="h-8 w-8 ml-2">
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
                <TableCell>{apiKey.created}</TableCell>
                <TableCell>{apiKey.lastUsed}</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={
                      apiKey.status === "Active"
                        ? "bg-green-100 text-green-800 border-green-200"
                        : "bg-gray-100 text-gray-800 border-gray-200"
                    }
                  >
                    {apiKey.status}
                  </Badge>
                </TableCell>
                <TableCell>{apiKey.usageThisMonth}</TableCell>
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
                      <DropdownMenuItem>
                        <Copy className="h-4 w-4 mr-2" /> Copy API Key
                      </DropdownMenuItem>
                      <DropdownMenuItem>Edit Name</DropdownMenuItem>
                      <DropdownMenuItem>View Usage Details</DropdownMenuItem>
                      <DropdownMenuItem>
                        <RefreshCw className="h-4 w-4 mr-2" /> Regenerate Key
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">Revoke Key</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-medium mb-4">API Documentation</h3>
        <Card>
          <CardContent className="p-6">
            <p className="mb-4">
              Integrate VoiceAI into your applications using our RESTful API. Check out our comprehensive documentation
              to get started.
            </p>
            <Button variant="outline">View API Documentation</Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
