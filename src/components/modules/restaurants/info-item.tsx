import { PropsWithChildren } from "react"

interface Props extends PropsWithChildren {
  icon?: React.ReactNode
  ariaLabel?: string
}

const InfoItem = ({ icon, ariaLabel, children }: Props) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        {icon}
        <span className="sr-only">{ariaLabel}</span>
      </div>
      {children}
    </div>
  )
}

export default InfoItem
