"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function RequestDemoPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    industry: "",
    employees: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would send this data to your backend
    console.log("Form submitted:", formData)
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 grid md:grid-cols-2">
        {/* Left Column - Content */}
        <div className="bg-deepBlue text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-deepBlue to-vibrantCyan opacity-90 z-10"></div>
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: "url('/placeholder.svg?height=1080&width=1920')" }}
          ></div>
          <div className="relative z-20 flex flex-col justify-center p-8 md:p-12 lg:p-16 h-full">
            <Link href="/" className="flex items-center space-x-2 mb-12">
              <div className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-white to-white/80"></div>
              </div>
              <span className="text-2xl font-bold font-poppins text-white">VoiceAI</span>
            </Link>

            <h1 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">Experience the Future of Voice AI</h1>
            <p className="text-lg text-white/80 mb-8 font-roboto">
              Schedule a personalized demo to see how our AI voice agents can transform your customer interactions and
              streamline your business operations.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-white/10 rounded-full p-2 mt-1">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg font-poppins">Personalized Demonstration</h3>
                  <p className="text-white/80 font-roboto">
                    See how our AI voice agents handle real-world scenarios specific to your industry.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white/10 rounded-full p-2 mt-1">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg font-poppins">ROI Analysis</h3>
                  <p className="text-white/80 font-roboto">
                    Get a detailed breakdown of potential cost savings and efficiency improvements.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white/10 rounded-full p-2 mt-1">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg font-poppins">Implementation Roadmap</h3>
                  <p className="text-white/80 font-roboto">
                    Learn how quickly you can deploy our solution and start seeing results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="bg-white p-8 md:p-12 flex items-center justify-center">
          <div className="w-full max-w-md">
            {submitted ? (
              <Card className="border-softGray">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 bg-green-100 rounded-full">
                      <CheckCircle className="h-12 w-12 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold font-poppins text-deepBlue">Thank You!</h2>
                    <p className="text-gray-600 font-roboto">
                      Your demo request has been submitted successfully. One of our representatives will contact you
                      shortly to schedule your personalized demo.
                    </p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 bg-deepBlue hover:bg-primary-hover text-white font-medium"
                    >
                      Submit Another Request
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold font-poppins text-deepBlue">Request Your Demo</h2>
                  <p className="text-gray-600 font-roboto">
                    Fill out the form below and our team will get in touch within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-roboto text-deepBlue">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        required
                        className="border-softGray"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-roboto text-deepBlue">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="border-softGray"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="font-roboto text-deepBlue">
                        Company Name *
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Your Company"
                        required
                        className="border-softGray"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-roboto text-deepBlue">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="+1 (555) 123-4567"
                        className="border-softGray"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="industry" className="font-roboto text-deepBlue">
                        Industry *
                      </Label>
                      <Select
                        required
                        onValueChange={(value) => handleSelectChange("industry", value)}
                        value={formData.industry}
                      >
                        <SelectTrigger id="industry" className="border-softGray">
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="finance">Finance & Banking</SelectItem>
                          <SelectItem value="retail">Retail & E-commerce</SelectItem>
                          <SelectItem value="technology">Technology</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="hospitality">Hospitality & Travel</SelectItem>
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="employees" className="font-roboto text-deepBlue">
                        Company Size *
                      </Label>
                      <Select
                        required
                        onValueChange={(value) => handleSelectChange("employees", value)}
                        value={formData.employees}
                      >
                        <SelectTrigger id="employees" className="border-softGray">
                          <SelectValue placeholder="Number of employees" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 employees</SelectItem>
                          <SelectItem value="11-50">11-50 employees</SelectItem>
                          <SelectItem value="51-200">51-200 employees</SelectItem>
                          <SelectItem value="201-500">201-500 employees</SelectItem>
                          <SelectItem value="501-1000">501-1000 employees</SelectItem>
                          <SelectItem value="1000+">1000+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="font-roboto text-deepBlue">
                        What are your main challenges or requirements?
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your specific needs or challenges..."
                        className="min-h-[120px] border-softGray"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <Button type="submit" className="w-full bg-deepBlue hover:bg-primary-hover text-white font-medium">
                    Request Your Demo
                  </Button>
                  <p className="text-xs text-gray-500 text-center font-roboto">
                    By submitting this form, you agree to our{" "}
                    <a href="#" className="text-vibrantCyan hover:underline">
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-vibrantCyan hover:underline">
                      Terms of Service
                    </a>
                    .
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
