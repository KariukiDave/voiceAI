import { Phone, MessageSquare, BarChart3 } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: <Phone className="h-10 w-10 text-vibrantCyan" />,
      title: "Customer Calls",
      description: "Your customer dials your business number and is greeted by our AI voice agent.",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-vibrantCyan" />,
      title: "AI Agent Answers",
      description: "Our AI understands the query using natural language processing and responds naturally.",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-vibrantCyan" />,
      title: "Resolution & Insights",
      description: "The AI resolves the query or routes to a human agent, while providing valuable analytics.",
    },
  ]

  return (
    <section id="how-it-works" className="py-16 bg-offWhite relative">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl font-poppins text-deepBlue">How It Works</h2>
          <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed font-roboto">
            Our AI voice agents handle customer calls with human-like conversations, providing seamless support.
          </p>
        </div>

        {/* Desktop wavy line (hidden on mobile) */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 z-0 px-16 lg:px-24">
          <svg
            className="w-full"
            height="50"
            viewBox="0 0 1200 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0,25 C50,10 100,40 150,25 C200,10 250,40 300,25 C350,10 400,40 450,25 C500,10 550,40 600,25 C650,10 700,40 750,25 C800,10 850,40 900,25 C950,10 1000,40 1050,25 C1100,10 1150,40 1200,25"
              stroke="#00BFFF"
              strokeWidth="2"
              strokeDasharray="8 8"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="grid gap-8 md:grid-cols-3 relative z-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4 p-6 bg-white rounded-xl shadow-sm relative border border-softGray"
            >
              <div className="p-3 bg-deepBlue/5 rounded-full">{step.icon}</div>
              <h3 className="text-xl font-bold font-poppins text-deepBlue">{step.title}</h3>
              <p className="text-gray-600 font-roboto">{step.description}</p>
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-vibrantCyan/10 text-vibrantCyan font-bold">
                {index + 1}
              </div>

              {/* Mobile vertical wavy line (only between cards and only on mobile) */}
              {index < steps.length - 1 && (
                <div className="md:hidden absolute -bottom-12 left-1/2 transform -translate-x-1/2 z-0">
                  <svg width="50" height="80" viewBox="0 0 50 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M25,0 C10,15 40,30 25,45 C10,60 40,75 25,80"
                      stroke="#00BFFF"
                      strokeWidth="2"
                      strokeDasharray="6 6"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
