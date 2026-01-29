import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function NairobiDigitalCaseStudyPage() {
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
                          alt="Nairobi Digital Logo"
                          width={60}
                          height={60}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold font-poppins text-deepBlue">Nairobi Digital Solutions</h3>
                        <p className="text-gray-600 font-roboto">E-commerce</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-500 font-roboto">Industry</p>
                        <p className="font-medium font-roboto text-deepBlue">E-commerce</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-roboto">Company Size</p>
                        <p className="font-medium font-roboto text-deepBlue">250 employees</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-roboto">Location</p>
                        <p className="font-medium font-roboto text-deepBlue">Nairobi, Kenya</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-roboto">Use Case</p>
                        <p className="font-medium font-roboto text-deepBlue">Multilingual Support & Expansion</p>
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
                  Scaling Customer Support for a Fast-Growing Kenyan E-commerce Platform
                </h1>
                <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg mb-8">
                  <Image
                    src="/placeholder.svg?height=800&width=1600"
                    alt="Nairobi Digital Case Study"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-8 font-roboto text-gray-600">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold font-poppins text-deepBlue">The Challenge</h2>
                    <p>
                      Nairobi Digital Solutions, a rapidly growing e-commerce platform in Kenya, was experiencing
                      tremendous growth, expanding into neighboring countries in East Africa. With this expansion came
                      significant challenges in providing consistent, high-quality customer support across multiple
                      languages and time zones.
                    </p>
                    <p>
                      As a company founded on the principle of making online shopping accessible to all Africans,
                      Nairobi Digital faced several critical challenges:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Need to support customers in multiple languages (English, Swahili, Amharic, and French)</li>
                      <li>Difficulty hiring and training multilingual support staff in each new market</li>
                      <li>Seasonal spikes in call volume during sales events that overwhelmed their team</li>
                      <li>
                        Limited budget for expanding their customer service department at the same rate as their
                        business growth
                      </li>
                      <li>24/7 support requirements that were difficult to staff traditionally</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold font-poppins text-deepBlue">The Solution</h2>
                    <p>
                      After researching various options, Nairobi Digital partnered with VoiceAI to implement a scalable,
                      multilingual customer support solution that could grow with their business without proportionally
                      increasing costs.
                    </p>
                    <p>The implementation included:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Deploying AI voice agents trained in all four required languages</li>
                      <li>
                        Creating custom conversation flows for common e-commerce scenarios (order tracking, returns,
                        product information)
                      </li>
                      <li>Integrating with their existing order management and inventory systems</li>
                      <li>
                        Implementing intelligent routing to human agents when necessary, with full context transfer
                      </li>
                      <li>Developing a scalable system that could handle seasonal traffic spikes</li>
                    </ul>
                    <p>
                      The VoiceAI team worked closely with Nairobi Digital to ensure the voice agents reflected the
                      company's brand personality and understood local cultural nuances in each market.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold font-poppins text-deepBlue">The Results</h2>
                    <p>Within six months of implementing VoiceAI, Nairobi Digital achieved remarkable results:</p>

                    <div className="grid md:grid-cols-3 gap-6 my-8">
                      <div className="bg-white p-6 rounded-xl shadow-sm border border-softGray">
                        <div className="text-4xl font-bold text-vibrantCyan mb-2">5</div>
                        <p className="font-medium text-deepBlue">New Countries</p>
                        <p className="text-sm text-gray-600">Expanded without additional support staff</p>
                      </div>
                      <div className="bg-white p-6 rounded-xl shadow-sm border border-softGray">
                        <div className="text-4xl font-bold text-vibrantCyan mb-2">300%</div>
                        <p className="font-medium text-deepBlue">Call Volume Increase</p>
                        <p className="text-sm text-gray-600">Handled during seasonal peaks</p>
                      </div>
                      <div className="bg-white p-6 rounded-xl shadow-sm border border-softGray">
                        <div className="text-4xl font-bold text-vibrantCyan mb-2">4</div>
                        <p className="font-medium text-deepBlue">Languages Supported</p>
                        <p className="text-sm text-gray-600">With native-level fluency</p>
                      </div>
                    </div>

                    <p>Additional benefits included:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>70% of customer inquiries fully resolved by AI voice agents</li>
                      <li>Average response time reduced from 12 minutes to under 30 seconds</li>
                      <li>40% reduction in cost per customer interaction</li>
                      <li>Consistent brand experience across all markets</li>
                      <li>Ability to launch in new markets in weeks rather than months</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold font-poppins text-deepBlue">Customer Testimonial</h2>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-softGray">
                      <p className="italic text-gray-600 mb-4">
                        "As a small business in Kenya with big ambitions, we couldn't afford to hire large support teams
                        in each new market we entered. VoiceAI has allowed us to provide round-the-clock service in
                        multiple languages at a fraction of the cost. The ROI was evident within the first two months,
                        and the quality of service has helped us build trust with customers across East Africa. It's
                        been a game-changer for our expansion strategy."
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden">
                          <Image
                            src="/placeholder.svg?height=100&width=100"
                            alt="David Mwangi"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-semibold font-poppins text-deepBlue">David Mwangi</p>
                          <p className="text-sm text-gray-500 font-roboto">CEO, Nairobi Digital Solutions</p>
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
                          <h3 className="text-xl font-bold mb-2 font-poppins text-deepBlue">
                            Multilingual Capabilities
                          </h3>
                          <p className="text-gray-600 font-roboto">
                            The ability to provide support in multiple languages without hiring specialized staff for
                            each language.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-vibrantCyan/10 flex items-center justify-center text-vibrantCyan font-bold">
                          2
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 font-poppins text-deepBlue">Scalability</h3>
                          <p className="text-gray-600 font-roboto">
                            The system easily scaled to handle 300% increases in volume during seasonal sales events.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-vibrantCyan/10 flex items-center justify-center text-vibrantCyan font-bold">
                          3
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 font-poppins text-deepBlue">Cultural Adaptation</h3>
                          <p className="text-gray-600 font-roboto">
                            AI voice agents were trained to understand local expressions, slang, and cultural
                            references.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-vibrantCyan/10 flex items-center justify-center text-vibrantCyan font-bold">
                          4
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 font-poppins text-deepBlue">System Integration</h3>
                          <p className="text-gray-600 font-roboto">
                            Seamless connection with existing e-commerce systems for real-time order information.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold font-poppins text-deepBlue">Conclusion</h2>
                    <p>
                      Nairobi Digital's success with VoiceAI demonstrates how AI voice agents can be a powerful enabler
                      for businesses looking to expand into new markets without the traditional overhead costs of
                      building local support teams.
                    </p>
                    <p>
                      By providing consistent, high-quality support in multiple languages 24/7, Nairobi Digital has been
                      able to build trust with customers across East Africa and establish itself as a leading e-commerce
                      platform in the region.
                    </p>
                    <p>
                      The scalability of the solution has also allowed the company to handle seasonal peaks in demand
                      without service degradation, creating a sustainable model for continued expansion across the
                      African continent.
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
