import Link from "next/link"
import { Headphones, Calendar, Package, Users, CreditCard, HelpCircle, Building, Clock } from "lucide-react"

const useCases = [
  {
    icon: <Headphones className="h-6 w-6 text-blue-600" />,
    title: "Customer Support Automation",
    description: "Handle routine inquiries automatically",
    href: "/use-cases#customer-support",
  },
  {
    icon: <Calendar className="h-6 w-6 text-blue-600" />,
    title: "Appointment Booking",
    description: "Book and manage appointments via voice",
    href: "/use-cases#appointment-booking",
  },
  {
    icon: <Package className="h-6 w-6 text-blue-600" />,
    title: "Order Tracking",
    description: "Let customers check order status via phone",
    href: "/use-cases#order-tracking",
  },
  {
    icon: <Users className="h-6 w-6 text-blue-600" />,
    title: "Lead Qualification",
    description: "Qualify sales leads through automated calls",
    href: "/use-cases#lead-qualification",
  },
  {
    icon: <CreditCard className="h-6 w-6 text-blue-600" />,
    title: "Billing & Payments Inquiries",
    description: "Answer billing-related questions",
    href: "/use-cases#billing-payments",
  },
  {
    icon: <HelpCircle className="h-6 w-6 text-blue-600" />,
    title: "Product FAQs",
    description: "Respond to common questions instantly",
    href: "/use-cases#product-faqs",
  },
  {
    icon: <Building className="h-6 w-6 text-blue-600" />,
    title: "Local Business Hotline",
    description: "Affordable AI agents for Kenyan SMEs",
    href: "/use-cases#local-business",
  },
  {
    icon: <Clock className="h-6 w-6 text-blue-600" />,
    title: "After-Hours Support",
    description: "24/7 coverage for support and sales",
    href: "/use-cases#after-hours",
  },
]

export default function UseCasesMegaMenu() {
  return (
    <div className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
      <div className="w-screen max-w-4xl flex-auto overflow-hidden rounded-xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
        <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <Link
              key={index}
              href={useCase.href}
              className="group relative flex gap-x-4 rounded-lg p-4 hover:bg-gray-50"
            >
              <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                {useCase.icon}
              </div>
              <div>
                <div className="font-semibold text-gray-900">{useCase.title}</div>
                <p className="mt-1 text-gray-600">{useCase.description}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="bg-gray-50 px-8 py-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold leading-6 text-gray-900">Explore all use cases</h3>
            <Link href="/use-cases" className="text-sm font-semibold text-blue-600 hover:text-blue-500">
              View all use cases
              <span aria-hidden="true"> →</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
