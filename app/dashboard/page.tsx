import DashboardLayout from "@/components/dashboard/dashboard-layout"
import PageHeader from "@/components/dashboard/page-header"
import MetricCard from "@/components/dashboard/metric-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Clock, PhoneCall, CheckCircle, GitBranch, FileText, Plus } from "lucide-react"
import DashboardChartsWrapper from "@/components/dashboard/dashboard-charts-wrapper"

// Sample data for charts
const monthlyCallData = [
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

const callOutcomeData = [
  { name: "Resolved", value: 65 },
  { name: "Transferred", value: 25 },
  { name: "Failed", value: 10 },
]

const COLORS = ["#00BFFF", "#2A2E3B", "#FF6B6B"]

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <PageHeader title="Dashboard" subtitle="Welcome back! Here's an overview of your VoiceAI system.">
        <Button className="bg-vibrantCyan hover:bg-secondary-hover">
          <Plus className="mr-2 h-4 w-4" /> Create Workflow
        </Button>
      </PageHeader>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <MetricCard
          title="Active Numbers"
          value="12"
          icon={<Phone className="h-5 w-5 text-vibrantCyan" />}
          change={20}
          trend="up"
        />
        <MetricCard
          title="Total Calls"
          value="1,284"
          icon={<PhoneCall className="h-5 w-5 text-vibrantCyan" />}
          change={15}
          trend="up"
        />
        <MetricCard
          title="Calls This Month"
          value="328"
          icon={<FileText className="h-5 w-5 text-vibrantCyan" />}
          change={5}
          trend="down"
        />
        <MetricCard
          title="Avg Duration"
          value="3m 24s"
          icon={<Clock className="h-5 w-5 text-vibrantCyan" />}
          change={2}
          trend="up"
        />
      </div>

      {/* Charts - Using client component wrapper */}
      <DashboardChartsWrapper monthlyCallData={monthlyCallData} callOutcomeData={callOutcomeData} COLORS={COLORS} />

      {/* Workflow Success & Quick Links */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Workflow Success Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <GitBranch className="h-5 w-5 text-vibrantCyan mr-2" />
                  <span className="font-medium">Customer Support</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 font-medium">92%</span>
                  <div className="w-32 h-2 bg-gray-200 rounded-full ml-3">
                    <div className="h-2 bg-green-500 rounded-full" style={{ width: "92%" }}></div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <GitBranch className="h-5 w-5 text-vibrantCyan mr-2" />
                  <span className="font-medium">Appointment Booking</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 font-medium">88%</span>
                  <div className="w-32 h-2 bg-gray-200 rounded-full ml-3">
                    <div className="h-2 bg-green-500 rounded-full" style={{ width: "88%" }}></div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <GitBranch className="h-5 w-5 text-vibrantCyan mr-2" />
                  <span className="font-medium">Lead Qualification</span>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-600 font-medium">76%</span>
                  <div className="w-32 h-2 bg-gray-200 rounded-full ml-3">
                    <div className="h-2 bg-yellow-500 rounded-full" style={{ width: "76%" }}></div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <GitBranch className="h-5 w-5 text-vibrantCyan mr-2" />
                  <span className="font-medium">Order Status</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 font-medium">95%</span>
                  <div className="w-32 h-2 bg-gray-200 rounded-full ml-3">
                    <div className="h-2 bg-green-500 rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Links</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button className="w-full justify-start" variant="outline">
                <GitBranch className="mr-2 h-4 w-4" /> Create Workflow
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <FileText className="mr-2 h-4 w-4" /> View Call Logs
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Phone className="mr-2 h-4 w-4" /> Add Phone Number
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <CheckCircle className="mr-2 h-4 w-4" /> Training Resources
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
