import { Rock_Salt } from "next/font/google"
import Image from "next/image"

import { Button } from "./Button"

const rockSalt = Rock_Salt({
  weight: '400'
})

export const Hero = () => {
  return (
    <div className="relative">
      <Image
        alt="Hero"
        src={'https://images.unsplash.com/photo-1552627019-947c3789ffb5?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
        width={1000}
        height={1000}
        className="min-h-screen sm:h-80 object-cover custom_degrade"
      />

      <div className="absolute w-full left-0 right-0 top-52 flex items-center justify-center">
        <div className="space-y-8 text-center">
          <h1 className={`text-3xl ${rockSalt.className}`}>TATTO STUDIO</h1>
          <Button />
        </div>
      </div>
    </div>
  )
}
