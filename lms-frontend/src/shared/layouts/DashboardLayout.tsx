import { useState } from "react"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"

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
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800">
            {activeItem}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout