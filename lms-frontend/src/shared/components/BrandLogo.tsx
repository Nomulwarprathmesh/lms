import { GraduationCapIcon } from "lucide-react"
import { motion } from "framer-motion"

type BrandLogoProps = {
  textColor?: string
  iconBg?: string
  textSize?: string
  animated?: boolean
  size?: "sm" | "md" | "lg"
}

function BrandLogo({
  textColor = "text-white",
  iconBg = "bg-white/20",
  textSize,
  animated = true,
  size = "lg",
}: BrandLogoProps) {
  const IconWrapper = animated ? motion.div : "div"

  const sizeStyles = {
    sm: {
      wrapper: "gap-2",
      box: "h-10 w-10 rounded-xl",
      icon: "h-5 w-5",
      text: "text-lg",
    },
    md: {
      wrapper: "gap-3",
      box: "h-12 w-12 rounded-xl",
      icon: "h-6 w-6",
      text: "text-xl",
    },
    lg: {
      wrapper: "gap-4",
      box: "h-16 w-16 rounded-2xl",
      icon: "h-9 w-9",
      text: "text-3xl",
    },
  }

  const currentSize = sizeStyles[size]

  return (
    <div className={`flex items-center ${currentSize.wrapper}`}>
      <IconWrapper
        className={`flex ${currentSize.box} items-center justify-center border border-white/20 ${iconBg} backdrop-blur-md`}
        {...(animated && {
          animate: { rotate: [0, 5, -5, 0] },
          transition: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        })}
      >
        <GraduationCapIcon className={`${currentSize.icon} ${textColor}`} />
      </IconWrapper>

      <h1 className={`${textSize || currentSize.text} font-bold ${textColor}`}>
        EduAdmin LMS
      </h1>
    </div>
  )
}

export default BrandLogo