import type { ReactNode } from "react"

export interface Section {
  id: string
  title: string
  subtitle?: ReactNode
  content?: string
  showButton?: boolean
  buttonText?: string
  showButton2?: boolean
  buttonText2?: string
  buttonUrl2?: string
  showButton3?: boolean
  buttonText3?: string
  buttonUrl3?: string
  showButton4?: boolean
  buttonText4?: string
  buttonUrl4?: string
}

export interface SectionProps extends Section {
  isActive: boolean
  onButtonClick?: () => void
}