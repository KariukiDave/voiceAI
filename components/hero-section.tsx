import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-offWhite">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-vibrantCyan/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-deepBlue/10 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl font-poppins text-deepBlue">
                Automate Your Calls with Human-Like AI Voice Agents
              </h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-roboto">
                Offer 24/7 phone support, reduce costs, and elevate customer experience with our AI-powered voice
                solution.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-deepBlue hover:bg-primary-hover text-white font-medium">
                Get a Demo
              </Button>
              <Button size="lg" variant="outline" className="gap-1 border-deepBlue text-deepBlue hover:bg-deepBlue/5">
                <Play size={16} className="text-vibrantCyan" />
                Watch It in Action
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-softGray"></div>
                ))}
              </div>
              <div className="font-roboto">Trusted by 1000+ businesses worldwide</div>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] aspect-square">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-4/5 h-4/5 bg-gradient-to-br from-deepBlue to-vibrantCyan rounded-2xl shadow-xl overflow-hidden">
                  {/* Sound wave animation */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex items-end h-16 space-x-1">
                      {[3, 5, 7, 4, 6, 8, 5, 3, 5, 7, 4].map((height, i) => (
                        <div
                          key={i}
                          className="w-1.5 bg-white/70 rounded-full animate-pulse"
                          style={{
                            height: `${height * 4}px`,
                            animationDelay: `${i * 0.1}s`,
                            animationDuration: "1s",
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                    <div className="h-1 w-16 bg-white/30 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
