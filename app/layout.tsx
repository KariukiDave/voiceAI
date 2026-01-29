import "./globals.css"
import { Poppins, Roboto } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollToTop from "@/components/scroll-to-top"

// Load Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

// Load Roboto font
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
})

export const metadata = {
  title: "VoiceAI - AI-Powered Voice Agents",
  description: "Automate your calls with human-like AI voice agents",
    generator: 'v0.app'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${roboto.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
