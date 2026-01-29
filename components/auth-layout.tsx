"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AuthLayout({ defaultView = "login" }) {
  const [view, setView] = useState(defaultView)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 grid md:grid-cols-2 bg-white h-[calc(100vh-4rem)]">
        {/* Left Column - Cover Image */}
        <div className="relative hidden md:flex bg-deepBlue">
          <div className="absolute inset-0 bg-gradient-to-br from-deepBlue to-vibrantCyan opacity-90 z-10"></div>
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: "url('/placeholder.svg?height=1080&width=1920')" }}
          ></div>
          <div className="relative z-20 flex items-center justify-center w-full h-full">
            <Link href="/" className="flex flex-col items-center justify-center">
              <div className="h-16 w-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-white to-white/80"></div>
              </div>
              <span className="text-3xl font-bold font-poppins text-white">VoiceAI</span>
            </Link>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="flex items-center justify-center p-8">
          <Card className="w-full max-w-md border-none shadow-none">
            <div className="space-y-6">
              {/* Form Header */}
              <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold font-poppins text-deepBlue">
                  {view === "login" ? "Welcome back" : "Create an account"}
                </h1>
                <p className="text-gray-500 font-roboto">
                  {view === "login"
                    ? "Enter your credentials to access your account"
                    : "Enter your information to get started"}
                </p>
              </div>

              {/* Login Form */}
              {view === "login" && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-roboto text-deepBlue">
                      Email
                    </Label>
                    <Input id="email" type="email" placeholder="name@example.com" className="border-softGray" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password" className="font-roboto text-deepBlue">
                        Password
                      </Label>
                      <Link href="/forgot-password" className="text-xs text-vibrantCyan hover:underline font-roboto">
                        Forgot password?
                      </Link>
                    </div>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="border-softGray"
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-deepBlue"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                  <Button className="w-full bg-deepBlue hover:bg-primary-hover text-white font-medium">Login</Button>
                </div>
              )}

              {/* Signup Form */}
              {view === "signup" && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-roboto text-deepBlue">
                      Full Name
                    </Label>
                    <Input id="name" placeholder="John Doe" className="border-softGray" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-roboto text-deepBlue">
                      Email
                    </Label>
                    <Input id="email" type="email" placeholder="name@example.com" className="border-softGray" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="font-roboto text-deepBlue">
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="border-softGray"
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-deepBlue"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password" className="font-roboto text-deepBlue">
                      Confirm Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="confirm-password"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="border-softGray"
                      />
                      <button
                        type="button"
                        onClick={toggleConfirmPasswordVisibility}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-deepBlue"
                        aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                      >
                        {showConfirmPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-roboto text-gray-600"
                    >
                      I agree to the{" "}
                      <Link href="/terms-of-service" className="text-vibrantCyan hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy-policy" className="text-vibrantCyan hover:underline">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>
                  <Button className="w-full bg-deepBlue hover:bg-primary-hover text-white font-medium">Sign Up</Button>
                </div>
              )}

              {/* Form Footer - Switch between login and signup */}
              <div className="text-center">
                <p className="text-sm text-gray-500 font-roboto">
                  {view === "login" ? "Don't have an account? " : "Already have an account? "}
                  <button
                    onClick={() => setView(view === "login" ? "signup" : "login")}
                    className="text-vibrantCyan hover:underline font-medium"
                  >
                    {view === "login" ? "Sign up" : "Log in"}
                  </button>
                </p>
              </div>

              {/* Social Login Options */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-softGray"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-gray-500 font-roboto">Or continue with</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="border-softGray font-roboto">
                  Google
                </Button>
                <Button variant="outline" className="border-softGray font-roboto">
                  Microsoft
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  )
}
