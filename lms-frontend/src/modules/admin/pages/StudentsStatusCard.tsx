import { GraduationCap, Users, BookOpen, TrendingUp } from "lucide-react"

function StudentsStatusCard() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 p-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-blue-600" />
                    </div>
                    <span className="text-sm font-medium text-green-600">+12%</span>
                </div>
                <p className="text-sm text-gray-600 mb-1">Total Students</p>
                <h3 className="text-3xl font-semibold text-gray-900">1,420</h3>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translte-y-0.5 trasition-all duration-200 cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center ">
                        <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <span className="text-sm text-green-500 font-medium">+56%</span>
                </div>
                <p className="text-sm text-gray-600 mb-1">
                    Total Teachers
                </p>
                <h3 className="text-3xl font-semibold text-gray-900">500</h3>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:translte-y-0.5 trasition-all duration-200 cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                    <div className="bg-blue-100  rounded-xl flex items-center justify-center w-12 h-12">
                        <BookOpen className="w-6 h-6 text-blue-600"/>
                    </div>
                    <span className="text-green-500 text-sm font-medium">+74%</span>
                </div>
                 <p className="text-sm text-gray-600 mb-1">Total Courses</p>
                <h3 className="text-3xl font-semibold text-gray-900">600</h3>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:translter-y-0.5 trasition-all duration-200 cursor-pointer">
                <div className="flex items-cetner justify-between mb-4">
                    <div className="bg-blue-100 rounded-xl flex items-center justify-center w-12 h-12">
                        <TrendingUp className="text-blue-600 w-6 h-6"/>
                    </div>
                    <span className="text-green-500 text-sm font-medium">+100%</span>
                </div>
                <p className="text-sm text-gray-600 mb-1">Total Attendance</p>
                <h3 className="text-3xl font-semibold text-gray-900">300</h3>
            </div>
        </div>
    )
}

export default StudentsStatusCard