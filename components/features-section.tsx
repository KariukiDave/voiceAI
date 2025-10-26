import { Globe, Clock, Shield, MessageSquare, BarChart3, Headphones } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Availability",
      description: "Provide round-the-clock support without staffing concerns or overtime costs.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Multilingual Support",
      description: "Communicate with customers in multiple languages to serve global audiences.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Conversations",
      description: "Enterprise-grade security ensures all customer data remains protected.",
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Natural Conversations",
      description: "Advanced NLP enables human-like interactions that feel natural and engaging.",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Detailed Analytics",
      description: "Gain insights from every call to improve your business operations.",
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Seamless Handoff",
      description: "AI agents can transfer complex issues to human agents when necessary.",
    },
  ]

  return (
    <section id="features" className="py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Powerful Features</h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
            Our AI voice agents come packed with features designed to enhance customer experience and streamline your
            operations.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col space-y-3 p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-2 bg-blue-50 rounded-lg w-fit text-blue-600">{feature.icon}</div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
