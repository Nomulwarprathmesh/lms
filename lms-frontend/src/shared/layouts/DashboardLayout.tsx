import { useState } from "react"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import StudentsStatusCard from "../../modules/admin/pages/StudentsStatusCard"
function DashboardLayout() {
  const [activeItem, setActiveItem] = useState("Dashboard")

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />

      {/* Right Section */}
      <div className="flex-1">
        {/* Navbar */}
        <Navbar activeItem={activeItem} />

        {/* Page Content */}
        {activeItem === "Dashboard" && (
          <div className="mt-6">
            <StudentsStatusCard />
          </div>
        )}
      </div>
    </div>
  )
}

export default DashboardLayout