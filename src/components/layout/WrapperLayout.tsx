import { ReactNode } from "react"

export const WrapperLayout = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="max-w-[1000px] mx-auto">
      {children}
    </div>
  )
}
