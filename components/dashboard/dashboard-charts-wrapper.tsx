"use client"

import dynamic from "next/dynamic"

// Import the charts component with dynamic import and ssr: false
const DashboardCharts = dynamic(() => import("@/components/dashboard/dashboard-charts"), {
  ssr: false,
})

// Define the props interface
interface DashboardChartsWrapperProps {
  monthlyCallData: Array<{ name: string; calls: number }>
  callOutcomeData: Array<{ name: string; value: number }>
  COLORS: string[]
}

// Create a client component wrapper that handles the dynamic import
export default function DashboardChartsWrapper(props: DashboardChartsWrapperProps) {
  return <DashboardCharts {...props} />
}
