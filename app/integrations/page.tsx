import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function IntegrationsPage() {
  const integrationCategories = [
    {
      name: "CRM Systems",
      integrations: [
        { name: "Salesforce", logo: "/placeholder.svg?height=80&width=200" },
        { name: "HubSpot", logo: "/placeholder.svg?height=80&width=200" },
        { name: "Zoho CRM", logo: "/placeholder.svg?height=80&width=200" },
        { name: "Microsoft Dynamics", logo: "/placeholder.svg?height=80&width=200" },
        { name: "Pipedrive", logo: "/placeholder.svg?height=80&width=200" },
      ],
    },
    {
      name: "Helpdesk & Support",
      integrations: [
        { name: "Zendesk", logo: "/placeholder.svg?height=80&width=200" },
        { name: "Freshdesk", logo: "/placeholder.svg?height=80&width=200" },
        { name: "Intercom", logo: "/placeholder.svg?height=80&width=200" },
        { name: "Help Scout", logo: "/placeholder.svg?height=80&width=200" },
        { name: "ServiceNow", logo: "/placeholder.svg?height=80&width=200" },
      ],
    },
    {
      name: "Communication Platforms",
      integrations: [
        { name: "Twilio", logo: "/placeholder.svg?height=80&width=200" },
        { name: "RingCentral", logo: "/placeholder.svg?height=80&width=200" },
        { name: "Vonage", logo: "/placeholder.svg?height=80&width=200" },
        { name: "8x8", logo: "/placeholder.svg?height=80&width=200" },
        { name: "Five9", logo: "/placeholder.svg?height=80&width=200" },
      ],
    },
    {
      name: "E-commerce Platforms",
      integrations: [
        { name: "Shopify", logo: "/placeholder.svg?height=80&width=200" },
        { name: "WooCommerce", logo: "/placeholder.svg?height=80&width=200" },
        { name: "Magento", logo: "/placeholder.svg?height=80&width=200" },
        { name: "BigCommerce", logo: "/placeholder.svg?height=80&width=200" },
      ],
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-offWhite">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter font-poppins text-deepBlue">
                  Seamless Integrations for Your Business
                </h1>
                <p className="text-xl text-gray-600 font-roboto">
                  VoiceAI connects with your existing tools and platforms to create a unified customer service
                  ecosystem.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/request-demo">
                    <Button size="lg" className="bg-vibrantCyan hover:bg-secondary-hover text-white font-medium">
                      Book a Demo
                    </Button>
                  </Link>
                  <Link href="/product-overview">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-deepBlue text-deepBlue hover:bg-deepBlue/5 font-medium"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="VoiceAI Integrations"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Integration Categories */}
        {integrationCategories.map((category, categoryIndex) => (
          <section key={categoryIndex} className={`py-16 ${categoryIndex % 2 === 0 ? "bg-white" : "bg-offWhite"}`}>
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl font-poppins text-deepBlue mb-12">
                {category.name}
              </h2>
              <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5">
                {category.integrations.map((integration, index) => (
                  <Card key={index} className="border-softGray hover:shadow-md transition-shadow">
                    <CardContent className="p-6 flex flex-col items-center justify-center">
                      <div className="h-20 flex items-center justify-center mb-4">
                        <Image
                          src={integration.logo || "/placeholder.svg"}
                          alt={integration.name}
                          width={160}
                          height={80}
                          className="object-contain"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-center font-poppins text-deepBlue">
                        {integration.name}
                      </h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Integration Benefits */}
        <section className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl font-poppins text-deepBlue">
                Benefits of Our Integrations
              </h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto font-roboto">
                Our integrations are designed to enhance your existing workflows, not disrupt them.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-softGray">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 font-poppins text-deepBlue">Unified Customer Data</h3>
                  <p className="text-gray-600 mb-4 font-roboto">
                    VoiceAI pulls customer information from your CRM to personalize conversations and pushes interaction
                    data back to keep records up to date.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-vibrantCyan flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 font-roboto">360-degree customer view</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-vibrantCyan flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 font-roboto">Automatic record updates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-vibrantCyan flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 font-roboto">Consistent data across platforms</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-softGray">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 font-poppins text-deepBlue">Seamless Workflow Integration</h3>
                  <p className="text-gray-600 mb-4 font-roboto">
                    VoiceAI fits into your existing workflows, allowing for smooth handoffs between AI and human agents
                    when necessary.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-vibrantCyan flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 font-roboto">No disruption to existing processes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-vibrantCyan flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 font-roboto">Contextual handoffs to human agents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-vibrantCyan flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 font-roboto">Automated ticket creation and routing</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-softGray">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 font-poppins text-deepBlue">Enhanced Analytics</h3>
                  <p className="text-gray-600 mb-4 font-roboto">
                    Combine VoiceAI analytics with your existing reporting tools for comprehensive insights into
                    customer interactions.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-vibrantCyan flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 font-roboto">Unified reporting dashboards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-vibrantCyan flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 font-roboto">Cross-platform performance metrics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-vibrantCyan flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 font-roboto">Data-driven optimization opportunities</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Integration Process */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl font-poppins text-deepBlue">
                  Simple Integration Process
                </h2>
                <p className="text-xl text-gray-600 font-roboto">
                  Getting started with VoiceAI integrations is straightforward and our team is here to help every step
                  of the way.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-vibrantCyan/10 flex items-center justify-center text-vibrantCyan font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 font-poppins text-deepBlue">Initial Assessment</h3>
                      <p className="text-gray-600 font-roboto">
                        We analyze your current systems and identify the optimal integration points.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-vibrantCyan/10 flex items-center justify-center text-vibrantCyan font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 font-poppins text-deepBlue">Configuration</h3>
                      <p className="text-gray-600 font-roboto">
                        Our team configures the integrations to match your specific business requirements.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-vibrantCyan/10 flex items-center justify-center text-vibrantCyan font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 font-poppins text-deepBlue">Testing</h3>
                      <p className="text-gray-600 font-roboto">
                        We thoroughly test all integrations to ensure seamless data flow and functionality.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-vibrantCyan/10 flex items-center justify-center text-vibrantCyan font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 font-poppins text-deepBlue">Deployment & Support</h3>
                      <p className="text-gray-600 font-roboto">
                        We deploy the integrations and provide ongoing support to ensure optimal performance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Integration Process"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="bg-gradient-to-r from-deepBlue to-deepBlue/90 rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="grid gap-6 lg:grid-cols-2 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter text-white md:text-4xl font-poppins">
                    Ready to Connect VoiceAI to Your Systems?
                  </h2>
                  <p className="text-white/90 md:text-xl/relaxed font-roboto">
                    Our integration experts will help you set up VoiceAI to work seamlessly with your existing tools.
                  </p>
                </div>
                <div className="flex flex-col gap-3 min-[400px]:flex-row lg:justify-end">
                  <Link href="/request-demo">
                    <Button
                      size="lg"
                      className="bg-white text-deepBlue hover:bg-vibrantCyan hover:text-white font-medium"
                    >
                      Schedule a Demo
                    </Button>
                  </Link>
                  <Link href="/product-overview">
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-transparent text-vibrantCyan border-vibrantCyan hover:bg-vibrantCyan hover:text-white font-medium"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
