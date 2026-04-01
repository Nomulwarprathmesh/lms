import {
  LayoutDashboard,
  User2,
  GraduationCap,
  UserCircle,
  BookOpen,
  ClipboardList,
  FileText,
  Megaphone,
  Building2,
  Settings,
} from "lucide-react"

type NavbarProps = {
  activeItem: string
}

const navbarConfig: any = {
  Dashboard: {
    title: "Dashboard",
    subtitle: "Overview of system",
    bg: "bg-gradient-to-r from-blue-600 to-blue-700",
    icon: LayoutDashboard,
  },
  Users: {
    title: "Users",
    subtitle: "Manage users",
    bg: "bg-gradient-to-r from-purple-600 to-purple-700",
    icon: User2,
  },
  Student: {
    title: "Students",
    subtitle: "Manage students",
    bg: "bg-gradient-to-r from-emerald-600 to-emerald-700",
    icon: GraduationCap,
  },
  Teacher: {
    title: "Teachers",
    subtitle: "Manage teachers",
    bg: "bg-gradient-to-r from-orange-600 to-orange-700",
    icon: UserCircle,
  },
  Courses: {
    title: "Courses",
    subtitle: "Manage courses",
    bg: "bg-gradient-to-r from-cyan-600 to-cyan-700",
    icon: BookOpen,
  },
  Attendance: {
    title: "Attendance",
    subtitle: "Track attendance",
    bg: "bg-gradient-to-r from-indigo-600 to-indigo-700",
    icon: ClipboardList,
  },
  Reports: {
    title: "Reports",
    subtitle: "View reports",
    bg: "bg-gradient-to-r from-rose-600 to-rose-700",
    icon: FileText,
  },
  Announcements: {
    title: "Announcements",
    subtitle: "Send announcements",
    bg: "bg-gradient-to-r from-pink-600 to-pink-700",
    icon: Megaphone,
  },
  Organization: {
    title: "Organization",
    subtitle: "Manage org",
    bg: "bg-gradient-to-r from-teal-600 to-teal-700",
    icon: Building2,
  },
  Settings: {
    title: "Settings",
    subtitle: "System settings",
    bg: "bg-gradient-to-r from-slate-600 to-slate-700",
    icon: Settings,
  },
}

function Navbar({ activeItem }: NavbarProps) {
  const config = navbarConfig[activeItem]
  const Icon = config.icon

  return (
    <header>
      {/* TOP COLORED SECTION */}
      <div className={`${config.bg} p-6 text-white`}>
        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-white/20 p-3">
            <Icon className="h-6 w-6" />
          </div>

          <div>
            <h1 className="text-xl font-bold">{config.title}</h1>
            <p className="text-sm text-white/80">{config.subtitle}</p>
          </div>
        </div>
      </div>

      {/* BOTTOM WHITE BAR */}
      <div className="flex h-14 items-center justify-between border-b border-gray-200 bg-white px-6">
        <span className="text-sm text-gray-600">
          Admin / {config.title}
        </span>

        <div className="flex items-center gap-4">
          <span>🔔</span>
          <span>👤 Admin</span>
        </div>
      </div>
    </header>
  )
}

export default Navbar

//import { title } from "process"
// 

// import { LayoutDashboard, User2 } from "lucide-react"
// //import { title } from "process"

// type NavbarProps = {
//   activeItem: string
// }

// const navbarConfig: any = {
//   Dashboard: {
//     title: "Dashboard",
//     subtitle: "Overview of system",
//     bg: "bg-gradient-to-r from-blue-600 to-blue-700",
//     icon: LayoutDashboard,
//   },
//   Users : {
//     title: "Users",
//     Subtitle : "Overview of system",
//     bg: "bg-gradient-to-r from-cyan-600 to-cyan-700",
//     icon : User2,
//   } 
// }

// function Navbar({ activeItem }: NavbarProps) {
//   const config = navbarConfig[activeItem]
//   const Icon = config.icon

//   return (
//     <header>
//       {/* TOP COLORED SECTION */}
//       <div className={`${config.bg} p-6 text-white`}>
//         <div className="flex items-center gap-4">
//           <div className="rounded-xl bg-white/20 p-3">
//             <Icon className="h-6 w-6" />
//           </div>

//           <div>
//             <h1 className="text-xl font-bold">{config.title}</h1>
//             <p className="text-sm text-white/80">{config.subtitle}</p>
//           </div>
//         </div>
//       </div>

//       {/* BOTTOM WHITE BAR */}
//       <div className="flex h-14 items-center justify-between border-b border-gray-200 bg-white px-6">
//         <span className="text-sm text-gray-600">
//           Admin / {config.title}
//         </span>

//         <div className="flex items-center gap-4">
//           <span>🔔</span>
//           <span>👤 Admin</span>
//         </div>
//       </div>
//     </header>
//   )
// }

// export default Navbar