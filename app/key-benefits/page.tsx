import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Clock, DollarSign, HeartPulse, BarChart3, Users, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Check } from "lucide-react"

export default function KeyBenefitsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-offWhite">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter font-poppins text-deepBlue mb-6">
                Key Benefits of VoiceAI
              </h1>
              <p className="text-xl text-gray-600 font-roboto mb-8">
                Discover how our AI voice agents can transform your business operations, improve customer satisfaction,
                and drive growth.
              </p>
              <Link href="/request-demo">
                <Button size="lg" className="bg-vibrantCyan hover:bg-secondary-hover text-white font-medium">
                  Book a Demo
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2">
              {/* Benefit 1 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-vibrantCyan/10 p-4 rounded-lg">
                  <Clock className="h-12 w-12 text-vibrantCyan" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 font-poppins text-deepBlue">24/7 Availability</h2>
                  <p className="text-gray-600 mb-4 font-roboto">
                    Never miss a customer call again. Our AI voice agents are available around the clock, ensuring your
                    business is always accessible to customers regardless of time zones or holidays.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-vibrantCyan flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 font-roboto">Eliminate after-hours missed opportunities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-vibrantCyan flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 font-roboto">Support global customers across time zones</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-vibrantCyan flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 font-roboto">
                        Maintain service during peak periods and holidays
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-vibrantCyan/10 p-4 rounded-lg">
                  <DollarSign className="h-12 w-12 text-vibrantCyan" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 font-poppins text-deepBlue">Cost Reduction</h2>
                  <p className="text-gray-600 mb-4 font-roboto">
                    Significantly reduce operational costs associated with traditional call centers while maintaining or
                    improving service quality.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-vibrantCyan flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 font-roboto">Reduce staffing costs by up to 60%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-vibrantCyan flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 font-roboto">Eliminate training and turnover expenses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-vibrantCyan flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 font-roboto">Scale up or down without additional costs</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-vibrantCyan/10 p-4 rounded-lg">
                  <HeartPulse className="h-12 w-12 text-vibrantCyan" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 font-poppins text-deepBlue">Improved Customer Experience</h2>
                  <p className="text-gray-600 mb-4 font-roboto">
                    Deliver consistent, high-quality customer interactions that enhance satisfaction and build loyalty.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-vibrantCyan flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 font-roboto">Zero wait times for customer calls</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-vibrantCyan flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 font-roboto">
                        Consistent service quality across all interactions
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-vibrantCyan flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 font-roboto">
                        Personalized conversations based on customer history
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Benefit 4 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-vibrantCyan/10 p-4 rounded-lg">
                  <BarChart3 className="h-12 w-12 text-vibrantCyan" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 font-poppins text-deepBlue">Data-Driven Insights</h2>
                  <p className="text-gray-600 mb-4 font-roboto">
                    Gain valuable insights from every customer interaction to improve your products, services, and
                    operations.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-vibrantCyan flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 font-roboto">Identify common customer pain points</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-vibrantCyan flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 font-roboto">
                        Track customer sentiment and satisfaction trends
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-vibrantCyan flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 font-roboto">
                        Make data-backed decisions to improve operations
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Benefit 5 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-vibrantCyan/10 p-4 rounded-lg">
                  <Users className="h-12 w-12 text-vibrantCyan" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 font-poppins text-deepBlue">Human Agent Optimization</h2>
                  <p className="text-gray-600 mb-4 font-roboto">
                    Free your human agents from routine inquiries so they can focus on complex issues that require human
                    empathy and problem-solving.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-vibrantCyan flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 font-roboto">Automate up to 80% of routine inquiries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-vibrantCyan flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 font-roboto">Improve job satisfaction for human agents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-vibrantCyan flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 font-roboto">
                        Provide better service for complex customer needs
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Benefit 6 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-vibrantCyan/10 p-4 rounded-lg">
                  <Zap className="h-12 w-12 text-vibrantCyan" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 font-poppins text-deepBlue">Scalability</h2>
                  <p className="text-gray-600 mb-4 font-roboto">
                    Easily scale your customer service operations up or down based on demand without the traditional
                    challenges of hiring and training.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-vibrantCyan flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 font-roboto">
                        Handle sudden spikes in call volume effortlessly
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-vibrantCyan flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 font-roboto">Expand to new markets without staffing concerns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-vibrantCyan flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 font-roboto">
                        Maintain consistent service quality at any scale
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Section */}
        <section className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl font-poppins text-deepBlue">
                  Measurable Return on Investment
                </h2>
                <p className="text-xl text-gray-600 font-roboto">
                  Our customers typically see significant ROI within the first 3-6 months of implementing VoiceAI.
                </p>
                <div className="space-y-4">
                  <div className="bg-offWhite p-4 rounded-lg">
                    <h3 className="text-lg font-bold mb-2 font-poppins text-deepBlue">40-60% Cost Reduction</h3>
                    <p className="text-gray-600 font-roboto">
                      Compared to traditional call center operations, with elimination of hiring, training, and turnover
                      costs.
                    </p>
                  </div>
                  <div className="bg-offWhite p-4 rounded-lg">
                    <h3 className="text-lg font-bold mb-2 font-poppins text-deepBlue">
                      35% Increase in Customer Satisfaction
                    </h3>
                    <p className="text-gray-600 font-roboto">
                      Due to zero wait times, 24/7 availability, and consistent service quality.
                    </p>
                  </div>
                  <div className="bg-offWhite p-4 rounded-lg">
                    <h3 className="text-lg font-bold mb-2 font-poppins text-deepBlue">
                      25% Higher First-Call Resolution
                    </h3>
                    <p className="text-gray-600 font-roboto">
                      AI agents are equipped with comprehensive knowledge and can access information instantly.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image src="/placeholder.svg?height=800&width=1200" alt="ROI Chart" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="bg-gradient-to-r from-deepBlue to-deepBlue/90 rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tighter text-white md:text-4xl font-poppins mb-4">
                  Ready to Experience the Benefits?
                </h2>
                <p className="text-white/90 md:text-xl/relaxed font-roboto mb-8">
                  Schedule a personalized demo to see how VoiceAI can transform your customer service operations.
                </p>
                <Link href="/product-overview">
                  <Button
                    size="lg"
                    className="bg-white text-deepBlue hover:bg-vibrantCyan hover:text-white font-medium"
                  >
                    Book Your Demo Today
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
