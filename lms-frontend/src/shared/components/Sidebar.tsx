// import React, { useState } from "react"
// import BrandLogo from "./BrandLogo"
// import {
//   LayoutDashboard,
//   User2,
//   UserCircle,
//   GraduationCap,
//   BookOpen,
//   ClipboardList,
//   FileText,
//   Megaphone,
//   Building2,
//   Settings,
// } from "lucide-react"

// function Sidebar() {
//   const [activeItem, setActiveItem] = useState("Dashboard")

//   return (
//     <aside className="flex min-h-screen w-72 flex-col border-r border-gray-200 bg-white">
//       <div className="flex h-16 items-center border-b border-gray-200 px-4">
//         <BrandLogo
//           size="sm"
//           textColor="text-black"
//           animated={false}
//           iconBg="bg-blue-700/10"
//         />
//       </div>

//       <nav className="flex-1 space-y-2 p-3">
//         <div
//           onClick={() => setActiveItem("Dashboard")}
//           className={`flex items-center gap-3 rounded px-4 py-3 cursor-pointer transition-colors ${
//             activeItem === "Dashboard"
//               ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600"
//               : "text-gray-700 hover:bg-gray-200"
//           }`}
//         >
//           <LayoutDashboard className="h-5 w-5" />
//           <span className="font-medium">Dashboard</span>
//         </div>

//         <div
//           onClick={() => setActiveItem("Users")}
//           className={`flex items-center gap-3 rounded px-4 py-3 cursor-pointer transition-colors ${
//             activeItem === "Users"
//               ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600"
//               : "text-gray-700 hover:bg-gray-200"
//           }`}
//         >
//           <User2 className="h-5 w-5" />
//           <span className="font-medium">Users</span>
//         </div>

//         <div
//           onClick={() => setActiveItem("Student")}
//           className={`flex items-center gap-3 rounded px-4 py-3 cursor-pointer transition-colors ${
//             activeItem === "Student"
//               ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600"
//               : "text-gray-700 hover:bg-gray-200"
//           }`}
//         >
//           <GraduationCap className="h-5 w-5" />
//           <span className="font-medium">Student</span>
//         </div>

//         <div
//           onClick={() => setActiveItem("Teacher")}
//           className={`flex items-center gap-3 rounded px-4 py-3 cursor-pointer transition-colors ${
//             activeItem === "Teacher"
//               ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600"
//               : "text-gray-700 hover:bg-gray-200"
//           }`}
//         >
//           <UserCircle className="h-5 w-5" />
//           <span className="font-medium">Teacher</span>
//         </div>

//         <div
//           onClick={() => setActiveItem("Courses")}
//           className={`flex items-center gap-3 rounded px-4 py-3 cursor-pointer transition-colors ${
//             activeItem === "Courses"
//               ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600"
//               : "text-gray-700 hover:bg-gray-200"
//           }`}
//         >
//           <BookOpen className="h-5 w-5" />
//           <span className="font-medium">Courses</span>
//         </div>

//         <div
//           onClick={() => setActiveItem("Attendance")}
//           className={`flex items-center gap-3 rounded px-4 py-3 cursor-pointer transition-colors ${
//             activeItem === "Attendance"
//               ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600"
//               : "text-gray-700 hover:bg-gray-200"
//           }`}
//         >
//           <ClipboardList className="h-5 w-5" />
//           <span className="font-medium">Attendance</span>
//         </div>

//         <div
//           onClick={() => setActiveItem("Reports")}
//           className={`flex items-center gap-3 rounded px-4 py-3 cursor-pointer transition-colors ${
//             activeItem === "Reports"
//               ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600"
//               : "text-gray-700 hover:bg-gray-200"
//           }`}
//         >
//           <FileText className="h-5 w-5" />
//           <span className="font-medium">Reports</span>
//         </div>

//         <div
//           onClick={() => setActiveItem("Announcements")}
//           className={`flex items-center gap-3 rounded px-4 py-3 cursor-pointer transition-colors ${
//             activeItem === "Announcements"
//               ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600"
//               : "text-gray-700 hover:bg-gray-200"
//           }`}
//         >
//           <Megaphone className="h-5 w-5" />
//           <span className="font-medium">Announcements</span>
//         </div>

//         <div
//           onClick={() => setActiveItem("Organization")}
//           className={`flex items-center gap-3 rounded px-4 py-3 cursor-pointer transition-colors ${
//             activeItem === "Organization"
//               ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600"
//               : "text-gray-700 hover:bg-gray-200"
//           }`}
//         >
//           <Building2 className="h-5 w-5" />
//           <span className="font-medium">Organization</span>
//         </div>

//         <div
//           onClick={() => setActiveItem("Settings")}
//           className={`flex items-center gap-3 rounded px-4 py-3 cursor-pointer transition-colors ${
//             activeItem === "Settings"
//               ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600"
//               : "text-gray-700 hover:bg-gray-200"
//           }`}
//         >
//           <Settings className="h-5 w-5" />
//           <span className="font-medium">Settings</span>
//         </div>
//       </nav>
//     </aside>
//   )
// }

// export default Sidebar


// import  { useState } from "react"
// import BrandLogo from "./BrandLogo"
// import {
//   LayoutDashboard,
//   User2,
//   UserCircle,
//   GraduationCap,
//   BookOpen,
//   ClipboardList,
//   FileText,
//   Megaphone,
//   Building2,
//   Settings,
// } from "lucide-react"

// const menuItems = [
//   { name: "Dashboard", icon: LayoutDashboard },
//   { name: "Users", icon: User2 },
//   { name: "Student", icon: GraduationCap },
//   { name: "Teacher", icon: UserCircle },
//   { name: "Courses", icon: BookOpen },
//   { name: "Attendance", icon: ClipboardList },
//   { name: "Reports", icon: FileText },
//   { name: "Announcements", icon: Megaphone },
//   { name: "Organization", icon: Building2 },
//   { name: "Settings", icon: Settings },
// ]

// function Sidebar() {
//   const [activeItem, setActiveItem] = useState("Dashboard")

//   return (
//     <aside className="flex min-h-screen w-72 flex-col border-r border-gray-200 bg-white">
//       <div className="flex h-16 items-center border-b border-gray-200 px-4">
//         <BrandLogo
//           size="sm"
//           textColor="text-black"
//           animated={false}
//           iconBg="bg-blue-700/10"
//         />
//       </div>

//       <nav className="flex-1 space-y-2 p-3">
//         {menuItems.map((item) => {
//           const Icon = item.icon
//           const isActive = activeItem === item.name

//           return (
//             <div
//               key={item.name}
//               onClick={() => setActiveItem(item.name)}
//               className={`flex items-center gap-3 rounded px-4 py-3 cursor-pointer transition-colors ${
//                 isActive
//                   ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600"
//                   : "text-gray-700 hover:bg-gray-200"
//               }`}
//             >
//               <Icon className="h-5 w-5" />
//               <span className="font-medium">{item.name}</span>
//             </div>
//           )
//         })}
//       </nav>
//     </aside>
//   )
// }

// export default Sidebar

import BrandLogo from "./BrandLogo"
import {
  LayoutDashboard,
  User2,
  UserCircle,
  GraduationCap,
  BookOpen,
  ClipboardList,
  FileText,
  Megaphone,
  Building2,
  Settings,
} from "lucide-react"

type SidebarProps = {
  activeItem: string
  setActiveItem: (item: string) => void
}

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Users", icon: User2 },
  { name: "Student", icon: GraduationCap },
  { name: "Teacher", icon: UserCircle },
  { name: "Courses", icon: BookOpen },
  { name: "Attendance", icon: ClipboardList },
  { name: "Reports", icon: FileText },
  { name: "Announcements", icon: Megaphone },
  { name: "Organization", icon: Building2 },
  { name: "Settings", icon: Settings },
]

function Sidebar({ activeItem, setActiveItem }: SidebarProps) {
  return (
    <aside className="flex min-h-screen w-72 flex-col border-r border-gray-200 bg-white">
      <div className="flex h-16 items-center border-b border-gray-200 px-4">
        <BrandLogo
          size="sm"
          textColor="text-black"
          animated={false}
          iconBg="bg-blue-700/10"
        />
      </div>

      <nav className="flex-1 space-y-2 p-3">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = activeItem === item.name

          return (
            <div
              key={item.name}
              onClick={() => setActiveItem(item.name)}
              className={`cursor-pointer rounded-xl px-4 py-3 transition-colors ${
                isActive
                  ? "border-r-4 border-blue-600 bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className="h-5 w-5" />
                <span className="font-medium">{item.name}</span>
              </div>
            </div>
          )
        })}
      </nav>
    </aside>
  )
}

export default Sidebar