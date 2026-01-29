import PageHeader from "@/components/dashboard/page-header"
import DashboardLayout from "@/components/dashboard/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Calendar } from "lucide-react"
import AnalyticsChartsWrapper from "@/components/dashboard/analytics-charts-wrapper"

// Sample data for charts
const callVolumeData = [
  { name: "Jan", calls: 400 },
  { name: "Feb", calls: 300 },
  { name: "Mar", calls: 600 },
  { name: "Apr", calls: 800 },
  { name: "May", calls: 700 },
  { name: "Jun", calls: 900 },
  { name: "Jul", calls: 1100 },
  { name: "Aug", calls: 1300 },
  { name: "Sep", calls: 1200 },
  { name: "Oct", calls: 1400 },
  { name: "Nov", calls: 1500 },
  { name: "Dec", calls: 1700 },
]

const callDurationData = [
  { name: "Jan", avgDuration: 2.4 },
  { name: "Feb", avgDuration: 2.8 },
  { name: "Mar", avgDuration: 3.2 },
  { name: "Apr", avgDuration: 3.6 },
  { name: "May", avgDuration: 3.2 },
  { name: "Jun", avgDuration: 2.8 },
  { name: "Jul", avgDuration: 3.0 },
  { name: "Aug", avgDuration: 3.4 },
  { name: "Sep", avgDuration: 3.8 },
  { name: "Oct", avgDuration: 4.0 },
  { name: "Nov", avgDuration: 3.6 },
  { name: "Dec", avgDuration: 3.2 },
]

const callOutcomeData = [
  { name: "Resolved", value: 65 },
  { name: "Transferred", value: 25 },
  { name: "Failed", value: 10 },
]

const callsByWorkflowData = [
  { name: "Customer Support", value: 45 },
  { name: "Appointment Booking", value: 25 },
  { name: "Lead Qualification", value: 15 },
  { name: "Order Status", value: 15 },
]

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <PageHeader title="Analytics & Reports" subtitle="Detailed insights into your VoiceAI system performance.">
        <div className="flex space-x-2">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" /> Date Range
          </Button>
          <Button className="bg-vibrantCyan hover:bg-secondary-hover">
            <Download className="mr-2 h-4 w-4" /> Export Data
          </Button>
        </div>
      </PageHeader>

      {/* Analytics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Call Volume</CardTitle>
          </CardHeader>
          <CardContent className="h-80">{/* Call Volume Chart will be rendered by the client component */}</CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Average Call Duration</CardTitle>
          </CardHeader>
          <CardContent className="h-80">
            {/* Call Duration Chart will be rendered by the client component */}
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Call Outcomes</CardTitle>
          </CardHeader>
          <CardContent className="h-80">
            {/* Call Outcomes Chart will be rendered by the client component */}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Calls by Workflow</CardTitle>
          </CardHeader>
          <CardContent className="h-80">
            {/* Calls by Workflow Chart will be rendered by the client component */}
          </CardContent>
        </Card>
      </div>

      {/* Client component for charts */}
      <AnalyticsChartsWrapper
        callVolumeData={callVolumeData}
        callDurationData={callDurationData}
        callOutcomeData={callOutcomeData}
        callsByWorkflowData={callsByWorkflowData}
      />
    </DashboardLayout>
  )
}
