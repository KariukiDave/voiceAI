import type React from "react"
import { cn } from "@/lib/utils"
import { ArrowDown, ArrowUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface MetricCardProps {
  title: string
  value: string | number
  icon: React.ReactNode
  change?: number
  trend?: "up" | "down" | "neutral"
  className?: string
}

export default function MetricCard({ title, value, icon, change, trend, className }: MetricCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <h3 className="text-2xl font-bold mt-1 text-deepBlue">{value}</h3>
          </div>
          <div className="p-2 rounded-lg bg-gray-50">{icon}</div>
        </div>
        {typeof change !== "undefined" && trend && (
          <div className="mt-4 flex items-center">
            <div
              className={cn(
                "flex items-center text-sm font-medium",
                trend === "up" ? "text-green-600" : trend === "down" ? "text-red-600" : "text-gray-500",
              )}
            >
              {trend === "up" ? (
                <ArrowUp className="mr-1 h-4 w-4" />
              ) : trend === "down" ? (
                <ArrowDown className="mr-1 h-4 w-4" />
              ) : null}
              {change}%
            </div>
            <span className="text-gray-500 text-sm ml-1">vs last month</span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
