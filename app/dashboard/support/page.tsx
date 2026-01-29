import DashboardLayout from "@/components/dashboard/dashboard-layout"
import PageHeader from "@/components/dashboard/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MessageSquare, Search, HelpCircle, FileText, ExternalLink, Plus } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

// Sample data for support tickets
const supportTickets = [
  {
    id: "TKT-1234",
    subject: "API Integration Issue",
    status: "Open",
    priority: "High",
    created: "Jul 15, 2023",
    lastUpdated: "Jul 15, 2023",
  },
  {
    id: "TKT-1233",
    subject: "Billing Question",
    status: "In Progress",
    priority: "Medium",
    created: "Jul 10, 2023",
    lastUpdated: "Jul 14, 2023",
  },
  {
    id: "TKT-1232",
    subject: "Feature Request",
    status: "Waiting for Customer",
    priority: "Low",
    created: "Jul 5, 2023",
    lastUpdated: "Jul 12, 2023",
  },
  {
    id: "TKT-1231",
    subject: "Voice Quality Issue",
    status: "Resolved",
    priority: "High",
    created: "Jun 28, 2023",
    lastUpdated: "Jul 3, 2023",
  },
]

// Sample data for knowledge base articles
const knowledgeBaseArticles = [
  {
    id: 1,
    title: "Getting Started with VoiceAI",
    category: "Onboarding",
    views: 1245,
  },
  {
    id: 2,
    title: "Setting Up Your First Workflow",
    category: "Workflows",
    views: 987,
  },
  {
    id: 3,
    title: "API Integration Guide",
    category: "Development",
    views: 1532,
  },
  {
    id: 4,
    title: "Troubleshooting Common Issues",
    category: "Support",
    views: 2341,
  },
  {
    id: 5,
    title: "Voice Customization Options",
    category: "Features",
    views: 876,
  },
]

export default function SupportPage() {
  return (
    <DashboardLayout>
      <PageHeader title="Support" subtitle="Get help with VoiceAI">
        <Button className="bg-vibrantCyan hover:bg-secondary-hover">
          <Plus className="mr-2 h-4 w-4" /> New Ticket
        </Button>
      </PageHeader>

      <Tabs defaultValue="tickets" className="mb-6">
        <TabsList>
          <TabsTrigger value="tickets">My Tickets</TabsTrigger>
          <TabsTrigger value="new">New Ticket</TabsTrigger>
          <TabsTrigger value="knowledge">Knowledge Base</TabsTrigger>
        </TabsList>

        <TabsContent value="tickets">
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input className="pl-9" placeholder="Search tickets..." />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline">All Tickets</Button>
                  <Button variant="outline">Open</Button>
                  <Button variant="outline">Resolved</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Ticket ID</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Last Updated</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {supportTickets.map((ticket) => (
                  <TableRow key={ticket.id}>
                    <TableCell className="font-medium">{ticket.id}</TableCell>
                    <TableCell>{ticket.subject}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={
                          ticket.status === "Open"
                            ? "bg-blue-100 text-blue-800 border-blue-200"
                            : ticket.status === "In Progress"
                              ? "bg-yellow-100 text-yellow-800 border-yellow-200"
                              : ticket.status === "Waiting for Customer"
                                ? "bg-purple-100 text-purple-800 border-purple-200"
                                : "bg-green-100 text-green-800 border-green-200"
                        }
                      >
                        {ticket.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={
                          ticket.priority === "High"
                            ? "bg-red-100 text-red-800 border-red-200"
                            : ticket.priority === "Medium"
                              ? "bg-yellow-100 text-yellow-800 border-yellow-200"
                              : "bg-green-100 text-green-800 border-green-200"
                        }
                      >
                        {ticket.priority}
                      </Badge>
                    </TableCell>
                    <TableCell>{ticket.created}</TableCell>
                    <TableCell>{ticket.lastUpdated}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="new">
          <Card>
            <CardHeader>
              <CardTitle>Submit a New Support Ticket</CardTitle>
              <CardDescription>Our support team will respond within 24 hours</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Brief description of your issue" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="category" className="text-sm font-medium">
                      Category
                    </label>
                    <select
                      id="category"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                    >
                      <option value="">Select a category</option>
                      <option value="billing">Billing</option>
                      <option value="technical">Technical Issue</option>
                      <option value="account">Account</option>
                      <option value="feature">Feature Request</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="priority" className="text-sm font-medium">
                      Priority
                    </label>
                    <select
                      id="priority"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                    >
                      <option value="">Select priority</option>
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="description" className="text-sm font-medium">
                    Description
                  </label>
                  <Textarea
                    id="description"
                    placeholder="Please provide as much detail as possible"
                    className="min-h-[150px]"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="attachments" className="text-sm font-medium">
                    Attachments (optional)
                  </label>
                  <Input id="attachments" type="file" multiple />
                  <p className="text-xs text-gray-500">
                    You can upload up to 5 files (max 5MB each). Supported formats: JPG, PNG, PDF, TXT.
                  </p>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-end space-x-2">
              <Button variant="outline">Cancel</Button>
              <Button className="bg-vibrantCyan hover:bg-secondary-hover">Submit Ticket</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="knowledge">
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input className="pl-9" placeholder="Search knowledge base..." />
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {knowledgeBaseArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="p-2 rounded-lg bg-gray-100">
                      <FileText className="h-5 w-5 text-vibrantCyan" />
                    </div>
                    <Badge variant="outline" className="bg-gray-100 text-gray-800 border-gray-200">
                      {article.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{article.title}</CardTitle>
                  <CardDescription>{article.views} views</CardDescription>
                </CardHeader>
                <CardFooter className="pt-2">
                  <Button variant="ghost" className="w-full">
                    <ExternalLink className="mr-2 h-4 w-4" /> Read Article
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-vibrantCyan/10">
                <HelpCircle className="h-6 w-6 text-vibrantCyan" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Can't find what you're looking for?</h3>
                <p className="text-gray-600 mb-4">
                  Our support team is here to help. Contact us directly or join our community forum.
                </p>
                <div className="flex space-x-3">
                  <Button className="bg-vibrantCyan hover:bg-secondary-hover">
                    <MessageSquare className="mr-2 h-4 w-4" /> Live Chat
                  </Button>
                  <Button variant="outline">Community Forum</Button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  )
}
