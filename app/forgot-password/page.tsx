import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center p-8 bg-offWhite">
        <Card className="w-full max-w-md border-softGray">
          <div className="p-6 space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-2xl font-bold font-poppins text-deepBlue">Reset Your Password</h1>
              <p className="text-gray-500 font-roboto">
                Enter your email address and we'll send you a link to reset your password.
              </p>
            </div>

            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="font-roboto text-deepBlue">
                  Email
                </Label>
                <Input id="email" type="email" placeholder="name@example.com" className="border-softGray" />
              </div>
              <Button className="w-full bg-vibrantCyan hover:bg-secondary-hover text-white font-medium">
                Send Reset Link
              </Button>
            </form>

            <div className="text-center">
              <p className="text-sm text-gray-500 font-roboto">
                Remember your password?{" "}
                <Link href="/login" className="text-vibrantCyan hover:underline font-medium">
                  Back to login
                </Link>
              </p>
            </div>
          </div>
        </Card>
      </div>
      <Footer />
    </div>
  )
}
