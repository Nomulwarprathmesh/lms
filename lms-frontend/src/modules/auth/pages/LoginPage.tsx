import {
    GraduationCapIcon,
    User2Icon,
    BookOpenIcon,
    MedalIcon,
    CheckIcon
} from "lucide-react";
import { motion } from "framer-motion";
import StatsCard from "../components/StatsCard";

function AnimatedLogo() {
    return (
        <motion.div
            className="flex items-center gap-4"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 10,
            }}
        >
            {/* Icon */}
            <motion.div
                className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/15 backdrop-blur-md"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <GraduationCapIcon className="h-9 w-9 text-white" />
            </motion.div>

            {/* Text */}
            <h1
                className="text-[32px] font-semibold text-white"
                style={{ fontFamily: "Poppins, sans-serif" }}
            >
                EduAdmin LMS
            </h1>
        </motion.div>
    );
}

function LoginPage() {
    return (
        <div className="min-h-screen bg-neutral-100">
            <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">

                {/* Left Section */}
                <div className="relative flex h-full items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800 p-12 overflow-hidden">

                    {/* Content Wrapper */}
                    <div className="relative z-10 max-w-lg text-white">

                        {/* 🔹 Logo */}
                        <div className="flex items-center gap-4 mb-12">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center">
                                <GraduationCapIcon size={36} className="text-white" />
                            </div>
                            <h1 className="text-4xl font-bold">EduAdmin LMS</h1>
                        </div>

                        {/* 🔹 Heading */}
                        <h2 className="text-5xl font-bold mb-6 leading-tight">
                            Welcome Back to Your Learning Hub
                        </h2>

                        {/* 🔹 Paragraph */}
                        <p className="text-xl text-blue-100 mb-12 leading-relaxed">
                            Manage students, teachers, courses, and track attendance all in one place.
                            Your complete education administration solution.
                        </p>

                        {/* 🔹 Feature */}
                        <div className="space-y-4">

                            <div className="flex items-center gap-4 cursor-pointer transition-all duration-300 hover:translate-x-2">
                                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-300 hover:bg-white/30">
                                    <User2Icon />
                                </div>
                                <span className="text-lg">Easy Student Management</span>
                            </div>

                            <div className="flex items-center gap-4 cursor-pointer transition-all duration-300 hover:translate-x-2">
                                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-300 hover:bg-white/30">
                                    <BookOpenIcon />
                                </div>
                                <span className="text-lg">Real-time Attendance Tracking</span>
                            </div>

                            <div className="flex items-center gap-4 cursor-pointer transition-all duration-300 hover:translate-x-2">
                                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-300 hover:bg-white/30">
                                    <MedalIcon />
                                </div>
                                <span className="text-lg">Comprehensive Reporting</span>
                            </div>

                            <div className="flex items-center gap-4 cursor-pointer transition-all duration-300 hover:translate-x-2">
                                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-300 hover:bg-white/30">
                                    <CheckIcon />
                                </div>
                                <span className="text-lg">Secure & Reliable</span>
                            </div>

                        </div>
                        <div className=" space-y-4 mt-12" >
                            <StatsCard />
                        </div>
                    </div>

                </div>

                {/* Right Section */}
                <div className="flex items-center justify-center">
                    <div className="w-80 h-80 bg-white rounded-2xl shadow-md"></div>
                </div>

            </div>
        </div>
    );
}

export default LoginPage;