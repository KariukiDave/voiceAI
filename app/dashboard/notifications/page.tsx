import DashboardLayout from "@/components/dashboard/dashboard-layout"
import PageHeader from "@/components/dashboard/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

export default function NotificationsPage() {
  // Sample notification data
  const notifications = [
    {
      id: 1,
      title: "New call recorded",
      description: "A new call has been recorded and is ready for review.",
      time: "5 minutes ago",
      type: "call",
      read: false,
    },
    {
      id: 2,
      title: "Workflow updated",
      description: "Your 'Customer Support' workflow has been updated successfully.",
      time: "1 hour ago",
      type: "workflow",
      read: false,
    },
    {
      id: 3,
      title: "Training complete",
      description: "Your AI voice agent has completed the training session.",
      time: "Yesterday",
      type: "training",
      read: false,
    },
    {
      id: 4,
      title: "Billing update",
      description: "Your monthly invoice is ready. Your card will be charged in 3 days.",
      time: "2 days ago",
      type: "billing",
      read: true,
    },
    {
      id: 5,
      title: "New feature available",
      description: "Check out our new sentiment analysis feature for your voice agents.",
      time: "1 week ago",
      type: "system",
      read: true,
    },
  ]

  return (
    <DashboardLayout>
      <PageHeader
        title="Notifications"
        subtitle="View and manage your notifications"
        actions={
          <div className="flex space-x-2">
            <Button variant="outline">Mark all as read</Button>
            <Button className="bg-vibrantCyan hover:bg-secondary-hover">Settings</Button>
          </div>
        }
      />

      <Tabs defaultValue="all" className="mb-6">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="unread">Unread</TabsTrigger>
          <TabsTrigger value="calls">Calls</TabsTrigger>
          <TabsTrigger value="workflows">Workflows</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>All Notifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 border rounded-lg ${notification.read ? "bg-white" : "bg-blue-50 border-blue-100"}`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900">{notification.title}</h3>
                        <p className="text-gray-600 mt-1">{notification.description}</p>
                      </div>
                      <span className="text-xs text-gray-500">{notification.time}</span>
                    </div>
                    <div className="flex justify-between items-center mt-3">
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          notification.type === "call"
                            ? "bg-green-100 text-green-800"
                            : notification.type === "workflow"
                              ? "bg-purple-100 text-purple-800"
                              : notification.type === "training"
                                ? "bg-yellow-100 text-yellow-800"
                                : notification.type === "billing"
                                  ? "bg-red-100 text-red-800"
                                  : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {notification.type.charAt(0).toUpperCase() + notification.type.slice(1)}
                      </span>
                      <div className="flex space-x-2">
                        {!notification.read && (
                          <Button variant="ghost" size="sm">
                            Mark as read
                          </Button>
                        )}
                        <Button variant="outline" size="sm">
                          View details
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="unread">
          <Card>
            <CardHeader>
              <CardTitle>Unread Notifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notifications
                  .filter((notification) => !notification.read)
                  .map((notification) => (
                    <div key={notification.id} className="p-4 border rounded-lg bg-blue-50 border-blue-100">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-gray-900">{notification.title}</h3>
                          <p className="text-gray-600 mt-1">{notification.description}</p>
                        </div>
                        <span className="text-xs text-gray-500">{notification.time}</span>
                      </div>
                      <div className="flex justify-between items-center mt-3">
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${
                            notification.type === "call"
                              ? "bg-green-100 text-green-800"
                              : notification.type === "workflow"
                                ? "bg-purple-100 text-purple-800"
                                : notification.type === "training"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : notification.type === "billing"
                                    ? "bg-red-100 text-red-800"
                                    : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {notification.type.charAt(0).toUpperCase() + notification.type.slice(1)}
                        </span>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            Mark as read
                          </Button>
                          <Button variant="outline" size="sm">
                            View details
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Other tabs would follow the same pattern */}
        <TabsContent value="calls">
          <Card>
            <CardHeader>
              <CardTitle>Call Notifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notifications
                  .filter((notification) => notification.type === "call")
                  .map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-4 border rounded-lg ${
                        notification.read ? "bg-white" : "bg-blue-50 border-blue-100"
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-gray-900">{notification.title}</h3>
                          <p className="text-gray-600 mt-1">{notification.description}</p>
                        </div>
                        <span className="text-xs text-gray-500">{notification.time}</span>
                      </div>
                      <div className="flex justify-between items-center mt-3">
                        <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Call</span>
                        <div className="flex space-x-2">
                          {!notification.read && (
                            <Button variant="ghost" size="sm">
                              Mark as read
                            </Button>
                          )}
                          <Button variant="outline" size="sm">
                            View details
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  )
}
