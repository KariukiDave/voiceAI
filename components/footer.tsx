import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-softGray bg-white">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-deepBlue to-vibrantCyan"></div>
              <span className="text-xl font-bold font-poppins text-deepBlue">VoiceAI</span>
            </Link>
            <p className="text-gray-600 mb-4 max-w-xs font-roboto">
              Automate your calls with human-like AI voice agents. Offer 24/7 phone support and elevate customer
              experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-deepBlue transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-deepBlue transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-deepBlue transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-deepBlue transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-deepBlue mb-4 font-poppins">Product</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-gray-600 hover:text-vibrantCyan transition-colors font-roboto">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-600 hover:text-vibrantCyan transition-colors font-roboto">
                  Pricing
                </a>
              </li>
              <li>
                <Link
                  href="/customer-success-stories"
                  className="text-gray-600 hover:text-vibrantCyan transition-colors font-roboto"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-vibrantCyan transition-colors font-roboto">
                  Documentation
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-deepBlue mb-4 font-poppins">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/product-overview"
                  className="text-gray-600 hover:text-vibrantCyan transition-colors font-roboto"
                >
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-vibrantCyan transition-colors font-roboto">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-vibrantCyan transition-colors font-roboto">
                  Blog
                </a>
              </li>
              <li>
                <Link
                  href="/request-demo"
                  className="text-gray-600 hover:text-vibrantCyan transition-colors font-roboto"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-deepBlue mb-4 font-poppins">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-vibrantCyan transition-colors font-roboto">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-600 hover:text-vibrantCyan transition-colors font-roboto">
                  FAQ
                </a>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-600 hover:text-vibrantCyan transition-colors font-roboto"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-gray-600 hover:text-vibrantCyan transition-colors font-roboto"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-softGray">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            {/* Column 1: Copyright text */}
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-500 font-roboto">
                © {new Date().getFullYear()} VoiceAI. All rights reserved.
              </p>
            </div>

            {/* Column 2: Dashboard links */}
            <div className="text-center flex justify-center space-x-6">
              <Link
                href="/dashboard"
                className="text-sm text-vibrantCyan hover:text-deepBlue transition-colors font-roboto"
              >
                User Dashboard
              </Link>
              <Link
                href="/admin"
                className="text-sm text-vibrantCyan hover:text-deepBlue transition-colors font-roboto"
              >
                Admin Dashboard
              </Link>
            </div>

            {/* Column 3: Legal links */}
            <div className="text-center md:text-right flex md:justify-end justify-center space-x-6">
              <Link
                href="/privacy-policy"
                className="text-sm text-gray-500 hover:text-deepBlue transition-colors font-roboto"
              >
                Privacy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-sm text-gray-500 hover:text-deepBlue transition-colors font-roboto"
              >
                Terms
              </Link>
              <Link
                href="/cookie-policy"
                className="text-sm text-gray-500 hover:text-deepBlue transition-colors font-roboto"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
