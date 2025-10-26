import Header from "@/components/header"
import Footer from "@/components/footer"
import { Headphones, Calendar, Package, Users, CreditCard, HelpCircle, Building, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const useCases = [
  {
    id: "customer-support",
    icon: <Headphones className="h-10 w-10 text-blue-600" />,
    title: "Customer Support Automation",
    description:
      "Automate routine customer inquiries and support requests with AI voice agents that understand context and provide accurate responses, freeing up your human agents for complex issues.",
  },
  {
    id: "appointment-booking",
    icon: <Calendar className="h-10 w-10 text-blue-600" />,
    title: "Appointment Booking",
    description:
      "Enable customers to book, reschedule, or cancel appointments through natural voice conversations. Our AI agents integrate with your calendar systems to manage scheduling efficiently.",
  },
  {
    id: "order-tracking",
    icon: <Package className="h-10 w-10 text-blue-600" />,
    title: "Order Tracking",
    description:
      "Allow customers to check their order status via phone without human intervention. AI voice agents can access your order management system to provide real-time updates.",
  },
  {
    id: "lead-qualification",
    icon: <Users className="h-10 w-10 text-blue-600" />,
    title: "Lead Qualification",
    description:
      "Qualify sales leads through automated calls that ask relevant questions and gather key information. Our AI agents can score leads and route qualified prospects to your sales team.",
  },
  {
    id: "billing-payments",
    icon: <CreditCard className="h-10 w-10 text-blue-600" />,
    title: "Billing & Payments Inquiries",
    description:
      "Handle billing questions, payment status inquiries, and basic account management tasks through conversational AI that securely accesses customer account information.",
  },
  {
    id: "product-faqs",
    icon: <HelpCircle className="h-10 w-10 text-blue-600" />,
    title: "Product FAQs",
    description:
      "Respond to common product questions instantly with AI voice agents that understand your product catalog and can provide detailed information about features, compatibility, and usage.",
  },
  {
    id: "local-business",
    icon: <Building className="h-10 w-10 text-blue-600" />,
    title: "Local Business Hotline",
    description:
      "Affordable AI voice solutions tailored for Kenyan SMEs, enabling small businesses to provide professional phone support without the overhead of a full customer service team.",
  },
  {
    id: "after-hours",
    icon: <Clock className="h-10 w-10 text-blue-600" />,
    title: "After-Hours Support",
    description:
      "Provide 24/7 coverage for support and sales inquiries even when your office is closed. AI agents handle calls during off-hours and ensure no opportunity or customer need is missed.",
  },
]

export default function UseCasesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Explore AI Voice Agent Use Cases
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                Discover how businesses across industries are leveraging our AI voice agents to automate conversations,
                improve customer experience, and drive operational efficiency. From customer support to sales
                qualification, our technology adapts to your specific needs.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {useCases.map((useCase) => (
                <Card key={useCase.id} id={useCase.id} className="overflow-hidden transition-all hover:shadow-md">
                  <CardHeader className="pb-3">
                    <div className="p-2 w-fit rounded-lg bg-blue-50 mb-3">{useCase.icon}</div>
                    <CardTitle className="text-xl">{useCase.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-gray-600">{useCase.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-800">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to implement AI voice agents for your business?</h2>
              <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
                Our team can help you identify the best use cases for your specific industry and business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Schedule a Consultation
                </Button>
                <Button size="lg" variant="outline">
                  View Pricing Plans
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
