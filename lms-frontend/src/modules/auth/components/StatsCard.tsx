//import React from 'react'

function StatsCard() {
  return (
    <div className="grid grid-cols-3 gap-6 p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">

  {/* Stat 1 */}
  <div className="text-center transition-transform duration-300 hover:scale-105">
    <div className="text-3xl font-bold mb-1">2,847</div>
    <div className="text-sm text-blue-100">Students</div>
  </div>

  {/* Stat 2 */}
  <div className="text-center transition-transform duration-300 hover:scale-105">
    <div className="text-3xl font-bold mb-1">156</div>
    <div className="text-sm text-blue-100">Teachers</div>
  </div>

  {/* Stat 3 */}
  <div className="text-center transition-transform duration-300 hover:scale-105">
    <div className="text-3xl font-bold mb-1">48</div>
    <div className="text-sm text-blue-100">Courses</div>
  </div>

</div>
  )
}

export default StatsCard
