import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "The AI voice agents have transformed our customer service. We've reduced wait times by 80% while maintaining high satisfaction scores.",
      author: "Sarah Johnson",
      position: "Customer Service Director",
      company: "TechCorp Inc.",
    },
    {
      quote:
        "As a small business in Kenya, we couldn't afford 24/7 support staff. This solution has allowed us to provide round-the-clock service at a fraction of the cost.",
      author: "David Mwangi",
      position: "CEO",
      company: "Nairobi Digital Solutions",
    },
    {
      quote:
        "Our customers can't tell the difference between the AI and human agents. The natural conversation flow is impressive and has significantly improved our first-call resolution rates.",
      author: "Michael Chen",
      position: "Operations Manager",
      company: "Global Connect",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Our Customers Say</h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
            Businesses around the world trust our AI voice agents to handle their customer calls.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6 flex flex-col space-y-4">
                <Quote className="h-8 w-8 text-blue-100" />
                <p className="text-gray-700 italic">{testimonial.quote}</p>
                <div className="pt-4 border-t border-gray-100">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
