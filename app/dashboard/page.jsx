import DashboardHeader from "@/components/DashboardHeader"
import DashboardContent from "@/components/DashboardContent"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardHeader />
      <DashboardContent />
    </div>
  )
}

