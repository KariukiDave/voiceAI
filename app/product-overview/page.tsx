import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Phone, MessageSquare, BarChart3, Zap, Shield, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProductOverviewPage() {
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
                  Intelligent Voice AI for Modern Businesses
                </h1>
                <p className="text-xl text-gray-600 font-roboto">
                  VoiceAI transforms how businesses handle calls with AI-powered voice agents that sound human,
                  understand context, and deliver exceptional customer experiences.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/request-demo">
                    <Button size="lg" className="bg-vibrantCyan hover:bg-secondary-hover text-white font-medium">
                      Book a Demo
                    </Button>
                  </Link>
                  <Link href="/key-benefits">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-deepBlue text-deepBlue hover:bg-deepBlue/5 font-medium"
                    >
                      Explore Benefits
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="VoiceAI Platform"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl font-poppins text-deepBlue">
                Comprehensive Voice AI Platform
              </h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto font-roboto">
                Our platform combines advanced AI technologies to deliver a complete solution for voice automation.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-softGray">
                <CardContent className="p-6">
                  <Phone className="h-12 w-12 text-vibrantCyan mb-4" />
                  <h3 className="text-xl font-bold mb-2 font-poppins text-deepBlue">Natural Voice Interaction</h3>
                  <p className="text-gray-600 font-roboto">
                    Our AI agents use natural-sounding voices with human-like intonation and pauses, making
                    conversations feel authentic and engaging.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-softGray">
                <CardContent className="p-6">
                  <MessageSquare className="h-12 w-12 text-vibrantCyan mb-4" />
                  <h3 className="text-xl font-bold mb-2 font-poppins text-deepBlue">Contextual Understanding</h3>
                  <p className="text-gray-600 font-roboto">
                    Advanced natural language processing allows our AI to understand context, remember conversation
                    history, and respond appropriately.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-softGray">
                <CardContent className="p-6">
                  <BarChart3 className="h-12 w-12 text-vibrantCyan mb-4" />
                  <h3 className="text-xl font-bold mb-2 font-poppins text-deepBlue">Comprehensive Analytics</h3>
                  <p className="text-gray-600 font-roboto">
                    Gain insights from every call with detailed analytics on call volumes, resolution rates, customer
                    sentiment, and common inquiries.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-softGray">
                <CardContent className="p-6">
                  <Zap className="h-12 w-12 text-vibrantCyan mb-4" />
                  <h3 className="text-xl font-bold mb-2 font-poppins text-deepBlue">Seamless Integration</h3>
                  <p className="text-gray-600 font-roboto">
                    Easily connect VoiceAI with your existing CRM, helpdesk, and telephony systems through our extensive
                    API and pre-built integrations.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-softGray">
                <CardContent className="p-6">
                  <Shield className="h-12 w-12 text-vibrantCyan mb-4" />
                  <h3 className="text-xl font-bold mb-2 font-poppins text-deepBlue">Enterprise-Grade Security</h3>
                  <p className="text-gray-600 font-roboto">
                    Your data is protected with end-to-end encryption, secure cloud storage, and compliance with
                    international regulations.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-softGray">
                <CardContent className="p-6">
                  <Globe className="h-12 w-12 text-vibrantCyan mb-4" />
                  <h3 className="text-xl font-bold mb-2 font-poppins text-deepBlue">Multilingual Support</h3>
                  <p className="text-gray-600 font-roboto">
                    Communicate with customers in multiple languages to serve global audiences without the need for
                    additional staff.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl font-poppins text-deepBlue">
                How VoiceAI Works
              </h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto font-roboto">
                Our platform seamlessly handles customer interactions from start to finish.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-vibrantCyan/10 flex items-center justify-center text-vibrantCyan font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 font-poppins text-deepBlue">Call Reception</h3>
                    <p className="text-gray-600 font-roboto">
                      When a customer calls your business number, our AI voice agent answers promptly and
                      professionally.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-vibrantCyan/10 flex items-center justify-center text-vibrantCyan font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 font-poppins text-deepBlue">Intent Recognition</h3>
                    <p className="text-gray-600 font-roboto">
                      The AI identifies the customer's intent through natural language processing and determines the
                      best course of action.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-vibrantCyan/10 flex items-center justify-center text-vibrantCyan font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 font-poppins text-deepBlue">Personalized Response</h3>
                    <p className="text-gray-600 font-roboto">
                      Using customer data and conversation context, the AI provides personalized responses that address
                      the specific needs.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-vibrantCyan/10 flex items-center justify-center text-vibrantCyan font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 font-poppins text-deepBlue">Resolution or Handoff</h3>
                    <p className="text-gray-600 font-roboto">
                      The AI resolves straightforward inquiries or seamlessly transfers complex issues to human agents
                      with full context.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=1000&width=800"
                  alt="VoiceAI in action"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="bg-gradient-to-r from-deepBlue to-deepBlue/90 rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="grid gap-6 lg:grid-cols-2 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter text-white md:text-4xl font-poppins">
                    Ready to Transform Your Customer Service?
                  </h2>
                  <p className="text-white/90 md:text-xl/relaxed font-roboto">
                    Join hundreds of businesses already using our AI voice agents to provide exceptional customer
                    experiences.
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
