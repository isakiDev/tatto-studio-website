import { ReactNode } from "react"

export const WrapperLayout = ({ children }: { children?: ReactNode }) => {
  return (
    <section className="max-w-[900px] mx-auto px-4 sm:px-0 text-center w-full">
      {children}
    </section>
  )
}
