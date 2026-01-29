import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function TechCorpCaseStudyPage() {
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
                          alt="TechCorp Logo"
                          width={60}
                          height={60}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold font-poppins text-deepBlue">TechCorp Inc.</h3>
                        <p className="text-gray-600 font-roboto">Technology Industry</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-500 font-roboto">Industry</p>
                        <p className="font-medium font-roboto text-deepBlue">Technology</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-roboto">Company Size</p>
                        <p className="font-medium font-roboto text-deepBlue">1,000+ employees</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-roboto">Location</p>
                        <p className="font-medium font-roboto text-deepBlue">San Francisco, CA</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-roboto">Use Case</p>
                        <p className="font-medium font-roboto text-deepBlue">Customer Support Automation</p>
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
                  How TechCorp Reduced Support Costs by 50% While Improving CSAT
                </h1>
                <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg mb-8">
                  <Image
                    src="/placeholder.svg?height=800&width=1600"
                    alt="TechCorp Case Study"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-8 font-roboto text-gray-600">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold font-poppins text-deepBlue">The Challenge</h2>
                    <p>
                      TechCorp Inc., a leading software company with over 1,000 employees, was facing a significant
                      challenge: their customer support call volume was growing by 30% year over year, but they couldn't
                      justify the cost of expanding their support team at the same rate.
                    </p>
                    <p>
                      With a global customer base spanning multiple time zones, TechCorp was struggling to provide
                      consistent, high-quality support without dramatically increasing operational costs. Their existing
                      team of 50 support agents was overwhelmed, leading to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Average wait times of 15+ minutes during peak hours</li>
                      <li>Limited after-hours support coverage</li>
                      <li>Increasing customer dissatisfaction</li>
                      <li>Agent burnout and high turnover</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold font-poppins text-deepBlue">The Solution</h2>
                    <p>
                      After evaluating several options, TechCorp partnered with VoiceAI to implement an AI-powered voice
                      agent solution that could handle routine customer inquiries while seamlessly escalating complex
                      issues to human agents.
                    </p>
                    <p>The implementation process included:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Analyzing historical call data to identify common customer inquiries and patterns</li>
                      <li>Training the AI voice agents on TechCorp's products, policies, and procedures</li>
                      <li>Integrating with TechCorp's existing CRM and ticketing systems</li>
                      <li>Developing custom conversation flows for different types of support inquiries</li>
                      <li>Creating a seamless handoff process for complex issues requiring human intervention</li>
                    </ul>
                    <p>
                      The entire implementation was completed in just 6 weeks, with minimal disruption to TechCorp's
                      existing operations.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold font-poppins text-deepBlue">The Results</h2>
                    <p>
                      Within three months of implementing VoiceAI's solution, TechCorp experienced dramatic improvements
                      across all key metrics:
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 my-8">
                      <div className="bg-white p-6 rounded-xl shadow-sm border border-softGray">
                        <div className="text-4xl font-bold text-vibrantCyan mb-2">50%</div>
                        <p className="font-medium text-deepBlue">Reduction in Support Costs</p>
                        <p className="text-sm text-gray-600">Compared to projected costs with traditional staffing</p>
                      </div>
                      <div className="bg-white p-6 rounded-xl shadow-sm border border-softGray">
                        <div className="text-4xl font-bold text-vibrantCyan mb-2">35%</div>
                        <p className="font-medium text-deepBlue">Improvement in CSAT</p>
                        <p className="text-sm text-gray-600">Customer satisfaction scores increased significantly</p>
                      </div>
                      <div className="bg-white p-6 rounded-xl shadow-sm border border-softGray">
                        <div className="text-4xl font-bold text-vibrantCyan mb-2">24/7</div>
                        <p className="font-medium text-deepBlue">Support Coverage</p>
                        <p className="text-sm text-gray-600">Without additional staffing costs</p>
                      </div>
                    </div>

                    <p>Additional benefits included:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Average wait time reduced from 15+ minutes to under 10 seconds</li>
                      <li>80% of routine inquiries fully resolved by AI voice agents</li>
                      <li>Human agents now focused on complex, high-value interactions</li>
                      <li>Improved agent job satisfaction and reduced turnover</li>
                      <li>Consistent quality of service across all customer interactions</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold font-poppins text-deepBlue">Customer Testimonial</h2>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-softGray">
                      <p className="italic text-gray-600 mb-4">
                        "The AI voice agents have transformed our customer service operations. We've reduced wait times
                        by 80% while maintaining high satisfaction scores. Our customers often don't even realize
                        they're speaking with an AI, and our support team is now able to focus on complex issues that
                        truly require human expertise. The ROI has been remarkable – we've cut costs while actually
                        improving service quality."
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden">
                          <Image
                            src="/placeholder.svg?height=100&width=100"
                            alt="Sarah Johnson"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-semibold font-poppins text-deepBlue">Sarah Johnson</p>
                          <p className="text-sm text-gray-500 font-roboto">Customer Service Director, TechCorp Inc.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold font-poppins text-deepBlue">Implementation Process</h2>
                    <p>TechCorp's implementation of VoiceAI followed a structured approach:</p>

                    <div className="space-y-6 my-8">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-vibrantCyan/10 flex items-center justify-center text-vibrantCyan font-bold">
                          1
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 font-poppins text-deepBlue">Discovery & Planning</h3>
                          <p className="text-gray-600 font-roboto">
                            2 weeks of analyzing call data, identifying use cases, and creating an implementation
                            roadmap.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-vibrantCyan/10 flex items-center justify-center text-vibrantCyan font-bold">
                          2
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 font-poppins text-deepBlue">
                            AI Training & Integration
                          </h3>
                          <p className="text-gray-600 font-roboto">
                            3 weeks of training the AI on TechCorp's products and integrating with existing systems.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-vibrantCyan/10 flex items-center justify-center text-vibrantCyan font-bold">
                          3
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 font-poppins text-deepBlue">Testing & Refinement</h3>
                          <p className="text-gray-600 font-roboto">
                            1 week of testing with real scenarios and refining conversation flows.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-vibrantCyan/10 flex items-center justify-center text-vibrantCyan font-bold">
                          4
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 font-poppins text-deepBlue">Deployment & Monitoring</h3>
                          <p className="text-gray-600 font-roboto">
                            Gradual rollout with continuous monitoring and optimization.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold font-poppins text-deepBlue">Conclusion</h2>
                    <p>
                      TechCorp's implementation of VoiceAI demonstrates how AI voice agents can transform customer
                      support operations, reducing costs while simultaneously improving service quality and customer
                      satisfaction.
                    </p>
                    <p>
                      By automating routine inquiries and providing 24/7 support coverage, TechCorp has been able to
                      scale their customer service capabilities without proportionally increasing costs, creating a
                      sustainable model for future growth.
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

              <Link href="/case-studies/global-connect">
                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-softGray hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Global Connect"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center p-1">
                        <Image
                          src="/placeholder.svg?height=80&width=80"
                          alt="Global Connect Logo"
                          width={30}
                          height={30}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold font-poppins text-deepBlue">Global Connect</h3>
                        <p className="text-xs text-gray-600 font-roboto">Telecommunications</p>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-3 font-poppins text-deepBlue">
                      Transforming First-Call Resolution Rates with AI Voice Agents
                    </h3>
                    <p className="text-gray-600 mb-4 font-roboto text-sm">
                      How Global Connect increased first-call resolution from 65% to 89%.
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
