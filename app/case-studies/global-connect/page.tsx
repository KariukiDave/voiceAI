import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function GlobalConnectCaseStudyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-offWhite">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/4">
                <div className="sticky top-24">
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-softGray">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center p-2">
                        <Image
                          src="/placeholder.svg?height=80&width=80"
                          alt="Global Connect Logo"
                          width={60}
                          height={60}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold font-poppins text-deepBlue">Global Connect</h3>
                        <p className="text-gray-600 font-roboto">Telecommunications</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-500 font-roboto">Industry</p>
                        <p className="font-medium font-roboto text-deepBlue">Telecommunications</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-roboto">Company Size</p>
                        <p className="font-medium font-roboto text-deepBlue">5,000+ employees</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-roboto">Location</p>
                        <p className="font-medium font-roboto text-deepBlue">Global Operations</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-roboto">Use Case</p>
                        <p className="font-medium font-roboto text-deepBlue">First-Call Resolution Improvement</p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Link href="/request-demo">
                        <Button className="w-full bg-vibrantCyan hover:bg-secondary-hover text-white font-medium">
                          Get Similar Results
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-3/4">
                <Link
                  href="/customer-success-stories"
                  className="inline-flex items-center text-vibrantCyan hover:text-vibrantCyan/80 mb-6 font-roboto"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Success Stories
                </Link>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tighter font-poppins text-deepBlue mb-6">
                  Transforming First-Call Resolution Rates with AI Voice Agents
                </h1>
                <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg mb-8">
                  <Image
                    src="/placeholder.svg?height=800&width=1600"
                    alt="Global Connect Case Study"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-8 font-roboto text-gray-600">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold font-poppins text-deepBlue">The Challenge</h2>
                    <p>
                      Global Connect, a major telecommunications provider with operations in 15 countries, was facing
                      significant challenges with their customer support operations. Despite having a large team of
                      support agents, they struggled with:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Low first-call resolution rates (65%), leading to customer frustration and repeat calls</li>
                      <li>Long average wait times of 8+ minutes during peak hours</li>
                      <li>Inconsistent quality of service across different regions and time zones</li>
                      <li>High agent turnover due to repetitive nature of many support calls</li>
                      <li>Escalating operational costs as they expanded into new markets</li>
                    </ul>
                    <p>
                      The company's leadership recognized that their traditional approach to customer support was not
                      scaling effectively with their business growth and was negatively impacting both customer
                      satisfaction and their bottom line.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold font-poppins text-deepBlue">The Solution</h2>
                    <p>
                      After evaluating several options, Global Connect partnered with VoiceAI to implement a
                      comprehensive AI voice agent solution designed to address their specific challenges.
                    </p>
                    <p>The implementation included:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        Deploying AI voice agents trained on Global Connect's extensive knowledge base of product
                        information, troubleshooting procedures, and customer policies
                      </li>
                      <li>
                        Creating specialized conversation flows for common telecommunications issues (billing inquiries,
                        service outages, technical troubleshooting)
                      </li>
                      <li>
                        Integrating with their CRM, billing, and network monitoring systems to provide real-time
                        information to both AI agents and customers
                      </li>
                      <li>
                        Implementing a sophisticated triage system that could identify complex issues requiring human
                        expertise and seamlessly transfer calls with full context
                      </li>
                      <li>
                        Developing a continuous learning system that improved the AI's capabilities based on successful
                        resolution patterns
                      </li>
                    </ul>
                    <p>
                      A key focus of the implementation was ensuring the AI voice agents could handle the technical
                      nature of telecommunications support, including walking customers through troubleshooting steps
                      for their devices and services.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold font-poppins text-deepBlue">The Results</h2>
                    <p>
                      Within four months of full deployment, Global Connect saw dramatic improvements across all key
                      performance indicators:
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 my-8">
                      <div className="bg-white p-6 rounded-xl shadow-sm border border-softGray">
                        <div className="text-4xl font-bold text-vibrantCyan mb-2">89%</div>
                        <p className="font-medium text-deepBlue">First-Call Resolution</p>
                        <p className="text-sm text-gray-600">Up from 65% pre-implementation</p>
                      </div>
                      <div className="bg-white p-6 rounded-xl shadow-sm border border-softGray">
                        <div className="text-4xl font-bold text-vibrantCyan mb-2">&lt;10s</div>
                        <p className="font-medium text-deepBlue">Average Wait Time</p>
                        <p className="text-sm text-gray-600">Down from 8+ minutes</p>
                      </div>
                      <div className="bg-white p-6 rounded-xl shadow-sm border border-softGray">
                        <div className="text-4xl font-bold text-vibrantCyan mb-2">42%</div>
                        <p className="font-medium text-deepBlue">Reduction in Call Volume</p>
                        <p className="text-sm text-gray-600">Due to higher first-call resolution</p>
                      </div>
                    </div>

                    <p>Additional benefits included:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        75% of all customer inquiries fully resolved by AI voice agents without human intervention
                      </li>
                      <li>30% increase in customer satisfaction scores</li>
                      <li>45% reduction in cost per customer interaction</li>
                      <li>
                        Improved agent satisfaction as they focused on more complex and rewarding customer interactions
                      </li>
                      <li>Consistent quality of service across all regions and time zones</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold font-poppins text-deepBlue">Customer Testimonial</h2>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-softGray">
                      <p className="italic text-gray-600 mb-4">
                        "Our customers can't tell the difference between the AI and human agents. The natural
                        conversation flow is impressive and has significantly improved our first-call resolution rates.
                        What's been most surprising is how the AI has actually improved our human agents' performance by
                        handling the routine calls and allowing them to focus on complex issues. It's been a
                        game-changer for our support team and our customers."
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden">
                          <Image
                            src="/placeholder.svg?height=100&width=100"
                            alt="Michael Chen"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-semibold font-poppins text-deepBlue">Michael Chen</p>
                          <p className="text-sm text-gray-500 font-roboto">Operations Manager, Global Connect</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold font-poppins text-deepBlue">Key Success Factors</h2>
                    <div className="space-y-6 my-8">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-vibrantCyan/10 flex items-center justify-center text-vibrantCyan font-bold">
                          1
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 font-poppins text-deepBlue">Technical Expertise</h3>
                          <p className="text-gray-600 font-roboto">
                            The AI was trained on detailed technical knowledge, enabling it to guide customers through
                            complex troubleshooting.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-vibrantCyan/10 flex items-center justify-center text-vibrantCyan font-bold">
                          2
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 font-poppins text-deepBlue">System Integration</h3>
                          <p className="text-gray-600 font-roboto">
                            Deep integration with CRM, billing, and network systems provided real-time information to
                            the AI.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-vibrantCyan/10 flex items-center justify-center text-vibrantCyan font-bold">
                          3
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 font-poppins text-deepBlue">Intelligent Triage</h3>
                          <p className="text-gray-600 font-roboto">
                            Sophisticated issue identification ensured complex problems were routed to the right human
                            experts.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-vibrantCyan/10 flex items-center justify-center text-vibrantCyan font-bold">
                          4
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 font-poppins text-deepBlue">Continuous Learning</h3>
                          <p className="text-gray-600 font-roboto">
                            The AI system improved over time by learning from successful resolution patterns.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold font-poppins text-deepBlue">Conclusion</h2>
                    <p>
                      Global Connect's implementation of VoiceAI demonstrates how AI voice agents can transform customer
                      support operations in technically complex industries like telecommunications.
                    </p>
                    <p>
                      By dramatically improving first-call resolution rates and reducing wait times, the company has not
                      only enhanced customer satisfaction but also created a more efficient and cost-effective support
                      operation.
                    </p>
                    <p>
                      The success of this implementation has led Global Connect to expand the use of AI voice agents to
                      other areas of their business, including sales and proactive customer outreach.
                    </p>
                  </div>

                  <div className="mt-12 pt-8 border-t border-softGray">
                    <h2 className="text-2xl font-bold font-poppins text-deepBlue mb-6">
                      Ready to achieve similar results?
                    </h2>
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
            </div>
          </div>
        </section>

        {/* Related Case Studies */}
        <section className="py-20 bg-offWhite">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold font-poppins text-deepBlue mb-8">Related Success Stories</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Link href="/case-studies/techcorp">
                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-softGray hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="TechCorp Inc."
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center p-1">
                        <Image
                          src="/placeholder.svg?height=80&width=80"
                          alt="TechCorp Logo"
                          width={30}
                          height={30}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold font-poppins text-deepBlue">TechCorp Inc.</h3>
                        <p className="text-xs text-gray-600 font-roboto">Technology</p>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-3 font-poppins text-deepBlue">
                      How TechCorp Reduced Support Costs by 50% While Improving CSAT
                    </h3>
                    <p className="text-gray-600 mb-4 font-roboto text-sm">
                      TechCorp implemented VoiceAI to handle their growing support call volume without adding headcount.
                    </p>
                  </div>
                </div>
              </Link>

              <Link href="/case-studies/nairobi-digital">
                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-softGray hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Nairobi Digital Solutions"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center p-1">
                        <Image
                          src="/placeholder.svg?height=80&width=80"
                          alt="Nairobi Digital Logo"
                          width={30}
                          height={30}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold font-poppins text-deepBlue">Nairobi Digital Solutions</h3>
                        <p className="text-xs text-gray-600 font-roboto">E-commerce</p>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-3 font-poppins text-deepBlue">
                      Scaling Customer Support for a Fast-Growing Kenyan E-commerce Platform
                    </h3>
                    <p className="text-gray-600 mb-4 font-roboto text-sm">
                      How Nairobi Digital Solutions expanded across Africa with 24/7 multilingual support.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
