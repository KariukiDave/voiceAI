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
    <section className="py-16 bg-gradient-to-b from-white to-offWhite">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl font-poppins text-deepBlue">
            What Our Customers Say
          </h2>
          <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed font-roboto">
            Businesses around the world trust our AI voice agents to handle their customer calls.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden border-softGray">
              <CardContent className="p-6 flex flex-col space-y-4">
                <Quote className="h-8 w-8 text-vibrantCyan/30" />
                <p className="text-gray-600 italic font-roboto">{testimonial.quote}</p>
                <div className="pt-4 border-t border-softGray">
                  <p className="font-semibold font-poppins text-deepBlue">{testimonial.author}</p>
                  <p className="text-sm text-gray-500 font-roboto">
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
