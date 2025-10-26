"use client"

import { useEffect, useState } from "react"
import { Headphones, Clock, Globe, DollarSign } from "lucide-react"

// Simple counter component that doesn't rely on external libraries
function CountUp({ end, duration = 2000 }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTimestamp = null
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }

    const animationId = window.requestAnimationFrame(step)
    return () => window.cancelAnimationFrame(animationId)
  }, [end, duration])

  return <>{count}</>
}

export default function MetricsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl font-poppins text-deepBlue">
            Proven Results. Real Impact.
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto font-roboto">
            Our AI Voice Agents deliver measurable improvements to businesses worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <MetricCard
            icon={<Headphones className="h-8 w-8 text-vibrantCyan" />}
            value={80}
            label="%"
            title="Full Self-Service Rate"
            description="Most customer queries are resolved without human intervention."
          />

          <MetricCard
            icon={<Clock className="h-8 w-8 text-vibrantCyan" />}
            value={40}
            label="%"
            title="Reduction in Average Handling Time"
            description="Speed up customer interactions and reduce wait time."
          />

          <MetricCard
            icon={<Globe className="h-8 w-8 text-vibrantCyan" />}
            value={24}
            label="/7"
            title="Always-On Support"
            description="Voice agents that never sleep—available day and night."
          />

          <MetricCard
            icon={<DollarSign className="h-8 w-8 text-vibrantCyan" />}
            value={50}
            label="%"
            title="Reduction in Call Center Costs"
            description="Cut operational costs while scaling up support."
          />
        </div>
      </div>
    </section>
  )
}

function MetricCard({ icon, value, label, title, description }) {
  return (
    <div className="bg-offWhite rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 animate-fadeIn border border-softGray">
      <div className="flex flex-col items-center text-center">
        <div className="p-3 bg-deepBlue/5 rounded-full mb-4">{icon}</div>
        <div className="flex items-baseline justify-center">
          <span className="text-4xl font-bold text-deepBlue font-poppins">
            <CountUp end={value} />
          </span>
          <span className="text-2xl font-bold text-deepBlue ml-1 font-poppins">{label}</span>
        </div>
        <h3 className="text-lg font-semibold mt-2 mb-2 font-poppins text-deepBlue">{title}</h3>
        <p className="text-gray-600 font-roboto">{description}</p>
      </div>
    </div>
  )
}
