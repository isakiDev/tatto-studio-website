'use client'

import { useState } from "react"
import { BurgerMenuIcon } from "../icons/BurgerMenuIcon"
import { CloseBurgerIcon } from "../icons/CloseBurgerIcon"

export const BurgerMenu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)


  const handleClickOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu)
  }

  return (
    <div onClick={handleClickOpenMenu} className="block sm:hidden">
      {
        isOpenMenu
          ? <CloseBurgerIcon />
          : <BurgerMenuIcon />
      }
    </div>
  )
}
