import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function WhyVoiceAIMegaMenu() {
  const integrations = [
    { name: "Salesforce", logo: "/placeholder.svg?height=40&width=120" },
    { name: "HubSpot", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Intercom", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Zendesk", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Freshdesk", logo: "/placeholder.svg?height=40&width=120" },
    { name: "MS Dynamics", logo: "/placeholder.svg?height=40&width=120" },
  ]

  return (
    <div className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
      <div className="w-screen max-w-5xl flex-auto overflow-hidden rounded-xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
        <div className="p-6">
          <div className="grid grid-cols-3 gap-8">
            {/* Column 1: What is VoiceAI */}
            <div className="col-span-1">
              <div className="font-semibold text-deepBlue uppercase tracking-wider text-xs mb-3 font-poppins">
                WHAT IS VOICEAI
              </div>
              <p className="text-gray-600 mb-4 font-roboto">
                AI Voice Agent designed to automate, scale, and humanize customer conversations.
              </p>
              <div className="rounded-lg overflow-hidden bg-offWhite h-40 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src="/placeholder.svg?height=160&width=320"
                    alt="VoiceAI in action"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Column 2: Why VoiceAI */}
            <div className="col-span-1">
              <div className="font-semibold text-deepBlue uppercase tracking-wider text-xs mb-3 font-poppins">
                WHY VOICEAI
              </div>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/product-overview"
                    className="block text-gray-600 hover:text-vibrantCyan transition-colors font-roboto"
                  >
                    Product Overview
                  </Link>
                </li>
                <li>
                  <Link
                    href="/key-benefits"
                    className="block text-gray-600 hover:text-vibrantCyan transition-colors font-roboto"
                  >
                    Key Benefits
                  </Link>
                </li>
                <li>
                  <Link
                    href="/customer-success-stories"
                    className="block text-gray-600 hover:text-vibrantCyan transition-colors font-roboto"
                  >
                    Customer Success Stories
                  </Link>
                </li>
              </ul>
              <div className="mt-6">
                <Link href="/request-demo">
                  <Button className="w-full bg-vibrantCyan hover:bg-secondary-hover text-white font-medium">
                    Book a Demo
                  </Button>
                </Link>
              </div>
            </div>

            {/* Column 3: Integrations */}
            <div className="col-span-1">
              <div className="font-semibold text-deepBlue uppercase tracking-wider text-xs mb-3 font-poppins">
                INTEGRATIONS
              </div>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {integrations.map((integration, index) => (
                  <div key={index} className="flex items-center justify-center p-2 bg-offWhite rounded-md">
                    <Image
                      src={integration.logo || "/placeholder.svg"}
                      alt={integration.name}
                      width={60}
                      height={30}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
              <Link
                href="/integrations"
                className="text-vibrantCyan hover:underline flex items-center font-medium font-roboto"
              >
                ➤ See all integrations
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Banner Section */}
        <div className="bg-offWhite px-8 py-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-deepBlue font-poppins">Accelerate Results with VoiceAI</h3>
            <p className="text-gray-600 text-sm font-roboto mx-4 flex-1">
              Improve customer service, reduce costs, and boost lead conversion with intelligent voice automation.
            </p>
            <Link href="/product-overview">
              <Button
                variant="outline"
                size="sm"
                className="border-deepBlue text-deepBlue hover:bg-vibrantCyan hover:border-vibrantCyan hover:text-white"
              >
                Learn more
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
