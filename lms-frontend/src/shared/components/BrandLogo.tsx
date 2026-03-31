import { GraduationCapIcon } from "lucide-react"
import { motion } from "framer-motion"

type BrandLogoProps = {
  textColor?: string
  iconBg?: string
  textSize?: string
  animated?: boolean
}

function BrandLogo({
  textColor = "text-white",
  iconBg = "bg-white/20",
  textSize = "text-3xl",
  animated = true,
}: BrandLogoProps) {
  const IconWrapper = animated ? motion.div : "div"

  return (
    <div className="flex items-center gap-4">
      {/* Icon */}
      <IconWrapper
        className={`flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 ${iconBg} backdrop-blur-md`}
        {...(animated && {
          animate: { rotate: [0, 5, -5, 0] },
          transition: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        })}
      >
        <GraduationCapIcon className={`h-9 w-9 ${textColor}`} />
      </IconWrapper>

      {/* Text */}
      <h1 className={`${textSize} font-bold ${textColor}`}>
        EduAdmin LMS
      </h1>
    </div>
  )
}

export default BrandLogo