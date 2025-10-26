"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses",
      monthlyPrice: 99,
      features: [
        "Up to 500 minutes per month",
        "Basic call analytics",
        "Business hours availability",
        "Email support",
        "Single language support",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Professional",
      description: "Ideal for growing companies",
      monthlyPrice: 299,
      features: [
        "Up to 2,000 minutes per month",
        "Advanced call analytics",
        "24/7 availability",
        "Priority support",
        "3 language options",
        "Custom voice personality",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      monthlyPrice: null, // Custom pricing
      features: [
        "Unlimited minutes",
        "Enterprise analytics dashboard",
        "24/7 availability",
        "Dedicated account manager",
        "Unlimited language options",
        "Custom integration",
        "SLA guarantees",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  // Calculate annual prices (10% discount)
  const getDiscountedMonthlyPrice = (price) => {
    if (price === null) return null
    return (price * 0.9).toFixed(2)
  }

  const getAnnualPrice = (price) => {
    if (price === null) return null
    return (price * 0.9 * 12).toFixed(2)
  }

  const getAnnualSavings = (price) => {
    if (price === null) return null
    return (price * 0.1 * 12).toFixed(2)
  }

  const formatPrice = (price) => {
    if (price === null) return "Custom"
    return `${price}`
  }

  return (
    <section id="pricing" className="py-16 bg-offWhite">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-8">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl font-poppins text-deepBlue">
            Simple, Transparent Pricing
          </h2>
          <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed font-roboto">
            Choose the plan that works best for your business needs, with no hidden fees.
          </p>
        </div>

        <div className="flex justify-center items-center space-x-3 mb-12">
          <Label htmlFor="billing-toggle" className="text-sm font-medium text-deepBlue">
            Monthly
          </Label>
          <Switch id="billing-toggle" checked={isAnnual} onCheckedChange={setIsAnnual} />
          <div className="flex items-center">
            <Label htmlFor="billing-toggle" className="text-sm font-medium text-deepBlue">
              Annual
            </Label>
            <span className="ml-2 text-xs font-medium bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
              Save 10%
            </span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-softGray ${plan.popular ? "border-vibrantCyan shadow-lg" : ""}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <div className="bg-vibrantCyan text-white text-xs font-bold px-3 py-1 rounded-full">Most Popular</div>
                </div>
              )}
              <CardHeader>
                <CardTitle className="font-poppins text-deepBlue">{plan.name}</CardTitle>
                <CardDescription className="font-roboto">{plan.description}</CardDescription>
                <div className="mt-4">
                  {plan.monthlyPrice === null ? (
                    <span className="text-3xl font-bold font-poppins text-deepBlue">Custom</span>
                  ) : (
                    <>
                      <span className="text-3xl font-bold font-poppins text-deepBlue">
                        $
                        {isAnnual
                          ? formatPrice(getDiscountedMonthlyPrice(plan.monthlyPrice))
                          : formatPrice(plan.monthlyPrice)}
                      </span>
                      <span className="text-gray-600 ml-1 font-roboto">per month</span>

                      {isAnnual && plan.monthlyPrice !== null && (
                        <div className="mt-1 flex flex-col">
                          <span className="text-sm text-gray-600 font-roboto">
                            ${formatPrice(getAnnualPrice(plan.monthlyPrice))} billed annually
                          </span>
                          <span className="text-xs text-green-600 font-medium font-roboto">
                            Save ${formatPrice(getAnnualSavings(plan.monthlyPrice))} per year
                          </span>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-4 w-4 text-vibrantCyan mr-2" />
                      <span className="text-gray-600 font-roboto">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full font-medium ${plan.popular ? "bg-vibrantCyan hover:bg-secondary-hover" : "bg-deepBlue hover:bg-primary-hover"}`}
                  variant={plan.popular ? "secondary" : "default"}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600 font-roboto">
            Need a custom solution?{" "}
            <a href="#" className="text-vibrantCyan font-medium hover:underline">
              Contact our sales team
            </a>{" "}
            for a tailored package.
          </p>
        </div>
      </div>
    </section>
  )
}
