"use client"

import dynamic from "next/dynamic"

// Import the charts component with dynamic import and ssr: false
const AnalyticsCharts = dynamic(() => import("@/components/dashboard/chart-components"), {
  ssr: false,
})

// Define the props interface
interface AnalyticsChartsWrapperProps {
  callVolumeData: any[]
  callDurationData: any[]
  callOutcomeData: any[]
  callsByWorkflowData: any[]
}

// Create a client component wrapper that handles the dynamic import
export default function AnalyticsChartsWrapper(props: AnalyticsChartsWrapperProps) {
  return <AnalyticsCharts {...props} />
}
