import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Quote, ArrowRight, Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CustomerSuccessStoriesPage() {
  const caseStudies = [
    {
      company: "TechCorp Inc.",
      industry: "Technology",
      logo: "/placeholder.svg?height=80&width=200",
      title: "How TechCorp Reduced Support Costs by 50% While Improving CSAT",
      summary: "TechCorp implemented VoiceAI to handle their growing support call volume without adding headcount.",
      results: [
        "50% reduction in support costs",
        "35% improvement in customer satisfaction scores",
        "24/7 support coverage without additional staffing",
      ],
      image: "/placeholder.svg?height=400&width=600",
      link: "/case-studies/techcorp",
    },
    {
      company: "Nairobi Digital Solutions",
      industry: "E-commerce",
      logo: "/placeholder.svg?height=80&width=200",
      title: "Scaling Customer Support for a Fast-Growing Kenyan E-commerce Platform",
      summary:
        "Nairobi Digital Solutions needed a way to provide 24/7 customer support as they expanded across Africa.",
      results: [
        "Expanded to 5 new countries without hiring additional support staff",
        "Handled 300% increase in call volume during peak seasons",
        "Added support for 4 regional languages",
      ],
      image: "/placeholder.svg?height=400&width=600",
      link: "/case-studies/nairobi-digital",
    },
    {
      company: "Global Connect",
      industry: "Telecommunications",
      logo: "/placeholder.svg?height=80&width=200",
      title: "Transforming First-Call Resolution Rates with AI Voice Agents",
      summary:
        "Global Connect struggled with low first-call resolution rates and long wait times for customer support.",
      results: [
        "Increased first-call resolution from 65% to 89%",
        "Reduced average wait time from 8 minutes to under 10 seconds",
        "Improved agent satisfaction by eliminating routine calls",
      ],
      image: "/placeholder.svg?height=400&width=600",
      link: "/case-studies/global-connect",
    },
  ]

  const testimonials = [
    {
      quote:
        "The AI voice agents have transformed our customer service. We've reduced wait times by 80% while maintaining high satisfaction scores. Our customers often don't even realize they're speaking with an AI.",
      author: "Sarah Johnson",
      position: "Customer Service Director",
      company: "TechCorp Inc.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "As a small business in Kenya, we couldn't afford 24/7 support staff. VoiceAI has allowed us to provide round-the-clock service at a fraction of the cost. The ROI was evident within the first two months.",
      author: "David Mwangi",
      position: "CEO",
      company: "Nairobi Digital Solutions",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "Our customers can't tell the difference between the AI and human agents. The natural conversation flow is impressive and has significantly improved our first-call resolution rates. It's been a game-changer for our support team.",
      author: "Michael Chen",
      position: "Operations Manager",
      company: "Global Connect",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "Implementing VoiceAI was surprisingly easy. The team helped us customize the voice agents to match our brand personality, and the integration with our existing systems was seamless. We were up and running in weeks, not months.",
      author: "Jennifer Lopez",
      position: "CTO",
      company: "Retail Solutions Inc.",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-offWhite">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter font-poppins text-deepBlue mb-6">
                Customer Success Stories
              </h1>
              <p className="text-xl text-gray-600 font-roboto mb-8">
                Discover how businesses across industries are transforming their customer service operations with
                VoiceAI.
              </p>
              <Link href="/request-demo">
                <Button size="lg" className="bg-vibrantCyan hover:bg-secondary-hover text-white font-medium">
                  Join Their Success
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Case Study */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
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
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl font-poppins text-deepBlue">
                  How TechCorp Reduced Support Costs by 50% While Improving CSAT
                </h2>
                <p className="text-xl text-gray-600 font-roboto">
                  TechCorp was facing a challenge: their customer support call volume was growing by 30% year over year,
                  but they couldn't justify the cost of expanding their support team at the same rate.
                </p>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold font-poppins text-deepBlue">Results:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-vibrantCyan flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 font-roboto">50% reduction in support costs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-vibrantCyan flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 font-roboto">35% improvement in customer satisfaction scores</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-vibrantCyan flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 font-roboto">
                        24/7 support coverage without additional staffing
                      </span>
                    </li>
                  </ul>
                </div>
                <Link href="/case-studies/techcorp">
                  <Button className="bg-deepBlue hover:bg-primary-hover text-white font-medium">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="TechCorp Case Study"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* More Case Studies */}
        <section className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl font-poppins text-deepBlue mb-12 text-center">
              More Success Stories
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {caseStudies.map((caseStudy, index) => (
                <Card key={index} className="overflow-hidden border-softGray h-full flex flex-col">
                  <div className="relative h-48">
                    <Image
                      src={caseStudy.image || "/placeholder.svg"}
                      alt={caseStudy.company}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center p-1">
                        <Image
                          src={caseStudy.logo || "/placeholder.svg"}
                          alt={`${caseStudy.company} Logo`}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold font-poppins text-deepBlue">{caseStudy.company}</h3>
                        <p className="text-sm text-gray-600 font-roboto">{caseStudy.industry}</p>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 font-poppins text-deepBlue">{caseStudy.title}</h3>
                    <p className="text-gray-600 mb-4 font-roboto">{caseStudy.summary}</p>
                    <div className="mt-auto">
                      <Link href={caseStudy.link}>
                        <Button variant="outline" className="w-full border-deepBlue text-deepBlue hover:bg-deepBlue/5">
                          Read Case Study
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl font-poppins text-deepBlue mb-12 text-center">
              What Our Customers Say
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="overflow-hidden border-softGray">
                  <CardContent className="p-6 flex flex-col space-y-4">
                    <Quote className="h-8 w-8 text-vibrantCyan/30" />
                    <p className="text-gray-600 italic font-roboto">{testimonial.quote}</p>
                    <div className="flex items-center gap-4 pt-4 border-t border-softGray">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold font-poppins text-deepBlue">{testimonial.author}</p>
                        <p className="text-sm text-gray-500 font-roboto">
                          {testimonial.position}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="bg-gradient-to-r from-deepBlue to-deepBlue/90 rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tighter text-white md:text-4xl font-poppins mb-4">
                  Ready to Write Your Success Story?
                </h2>
                <p className="text-white/90 md:text-xl/relaxed font-roboto mb-8">
                  Join the growing list of businesses transforming their customer service with VoiceAI.
                </p>
                <Link href="/request-demo">
                  <Button
                    size="lg"
                    className="bg-white text-deepBlue hover:bg-vibrantCyan hover:text-white font-medium"
                  >
                    Schedule Your Demo
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
