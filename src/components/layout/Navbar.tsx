import { LogoIcon } from "../icons/LogoIcon"
import { BurgerMenu } from "../ui/BurgerMenu"

export const Navbar = () => {

  return (
    <nav className="sticky top-0 h-16 backdrop-filter backdrop-blur-md z-10">
      <div className="flex justify-between items-center h-full px-4">
        <LogoIcon />
        <BurgerMenu />

        <div className="hidden sm:block">
          <ul className="flex gap-2">
            <li> Acerca</li>
            <li>Reserva</li>
          </ul >
        </div>
      </div>
    </nav >
  )
}
