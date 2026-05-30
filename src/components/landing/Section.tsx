import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { SectionProps } from "@/types"

export default function Section({ id, title, subtitle, content, isActive, showButton, buttonText, onButtonClick, showButton2, buttonText2, buttonUrl2, showButton3, buttonText3, buttonUrl3, showButton4, buttonText4, buttonUrl4 }: SectionProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(buttonText2 || '')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      {subtitle && (
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {subtitle}
        </motion.div>
      )}
      <motion.h2
        className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-bold leading-[1.1] tracking-tight max-w-4xl text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      {content && (
        <motion.p
          className="text-lg md:text-xl lg:text-2xl max-w-2xl mt-6 text-neutral-400"
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {content}
        </motion.p>
      )}
      {(showButton || showButton2 || showButton3 || showButton4) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 md:mt-16 flex flex-wrap gap-4"
        >
          {showButton && (
            <Button
              variant="outline"
              size="lg"
              className="text-[#FF4D00] bg-transparent border-[#FF4D00] hover:bg-[#FF4D00] hover:text-black transition-colors"
              onClick={onButtonClick}
            >
              {buttonText}
            </Button>
          )}
          {showButton2 && (
            <Button
              variant="outline"
              size="lg"
              className="text-white bg-transparent border-white hover:bg-white hover:text-black transition-colors"
              onClick={handleCopy}
            >
              {copied ? '✅ Скопировано!' : buttonText2}
            </Button>
          )}
          {showButton3 && (
            <Button
              variant="outline"
              size="lg"
              className="text-red-500 bg-transparent border-red-500 hover:bg-red-500 hover:text-white transition-colors"
              onClick={() => buttonUrl3 && window.open(buttonUrl3, '_blank')}
            >
              {buttonText3}
            </Button>
          )}
          {showButton4 && (
            <Button
              variant="outline"
              size="lg"
              className="text-blue-400 bg-transparent border-blue-400 hover:bg-blue-400 hover:text-white transition-colors"
              onClick={() => buttonUrl4 && window.open(buttonUrl4, '_blank')}
            >
              {buttonText4}
            </Button>
          )}
        </motion.div>
      )}
    </section>
  )
}