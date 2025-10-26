import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CtaSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="rounded-2xl bg-gradient-to-r from-deepBlue to-deepBlue/90 p-8 md:p-12 shadow-lg">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter text-white md:text-4xl font-poppins">
                Ready to Transform Your Customer Service?
              </h2>
              <p className="text-white/90 md:text-xl/relaxed font-roboto">
                Join hundreds of businesses already using our AI voice agents to provide exceptional customer
                experiences.
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row lg:justify-end">
              <Button size="lg" className="bg-white text-deepBlue hover:bg-white/90 font-medium">
                Schedule a Demo
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 font-medium">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
