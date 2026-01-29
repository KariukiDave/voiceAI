import DashboardLayout from "@/components/dashboard/dashboard-layout"
import PageHeader from "@/components/dashboard/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, Link2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import Image from "next/image"

// Sample data for integrations
const integrations = [
  {
    id: 1,
    name: "Salesforce",
    description: "Connect your CRM to sync customer data and call records.",
    logo: "/placeholder.svg?height=80&width=80",
    status: "Connected",
    category: "CRM",
  },
  {
    id: 2,
    name: "HubSpot",
    description: "Integrate with HubSpot to manage leads and customer interactions.",
    logo: "/placeholder.svg?height=80&width=80",
    status: "Not Connected",
    category: "CRM",
  },
  {
    id: 3,
    name: "Zendesk",
    description: "Create and update support tickets based on call interactions.",
    logo: "/placeholder.svg?height=80&width=80",
    status: "Connected",
    category: "Support",
  },
  {
    id: 4,
    name: "Slack",
    description: "Get notifications and alerts about important call events.",
    logo: "/placeholder.svg?height=80&width=80",
    status: "Not Connected",
    category: "Communication",
  },
  {
    id: 5,
    name: "Zapier",
    description: "Connect VoiceAI with thousands of other apps and services.",
    logo: "/placeholder.svg?height=80&width=80",
    status: "Connected",
    category: "Automation",
  },
  {
    id: 6,
    name: "Google Calendar",
    description: "Schedule appointments and meetings from voice calls.",
    logo: "/placeholder.svg?height=80&width=80",
    status: "Not Connected",
    category: "Productivity",
  },
]

// Group integrations by category
const groupedIntegrations = integrations.reduce((acc, integration) => {
  if (!acc[integration.category]) {
    acc[integration.category] = []
  }
  acc[integration.category].push(integration)
  return acc
}, {})

export default function IntegrationsPage() {
  return (
    <DashboardLayout>
      <PageHeader title="Integrations" subtitle="Connect VoiceAI with your favorite tools and services">
        <Button className="bg-vibrantCyan hover:bg-secondary-hover">
          <Plus className="mr-2 h-4 w-4" /> Add Integration
        </Button>
      </PageHeader>

      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input className="pl-9" placeholder="Search integrations..." />
          </div>
        </CardContent>
      </Card>

      {Object.entries(groupedIntegrations).map(([category, items]) => (
        <div key={category} className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-deepBlue">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((integration) => (
              <Card key={integration.id} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="h-12 w-12 relative">
                      <Image
                        src={integration.logo || "/placeholder.svg"}
                        alt={integration.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <Badge
                      variant="outline"
                      className={
                        integration.status === "Connected"
                          ? "bg-green-100 text-green-800 border-green-200"
                          : "bg-gray-100 text-gray-800 border-gray-200"
                      }
                    >
                      {integration.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{integration.name}</CardTitle>
                  <CardDescription>{integration.description}</CardDescription>
                </CardHeader>
                <CardFooter className="pt-2">
                  {integration.status === "Connected" ? (
                    <Button variant="outline" className="w-full">
                      Configure
                    </Button>
                  ) : (
                    <Button className="w-full bg-vibrantCyan hover:bg-secondary-hover">
                      <Link2 className="mr-2 h-4 w-4" /> Connect
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </DashboardLayout>
  )
}
