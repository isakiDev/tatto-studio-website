import Image from "next/image"
import { WrapperLayout } from "../layout/WrapperLayout"

export const About = () => {
  return (
    <WrapperLayout>
      <div className="flex flex-col justify-center items-center py-8">
        <h2 className="font-semibold text-xl">Conoce un poco sobre mi</h2>
        <Image
          width={130}
          height={130}
          className="translate-y-2 invert"
          src="/assets/underline-icon.png"
          alt="underline-icon"
        />
      </div>

      <div className="flex flex-col gap-8">
        <p className="text-slate-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni earum tempora in fugit iusto eos doloremque ducimus tempore excepturi quia corrupti, unde id impedit! Porro error rerum alias nobis obcaecati!</p>

        <div className="pt-8 ml-8">
          <Image
            src={'https://images.pexels.com/photos/1304469/pexels-photo-1304469.jpeg'}
            width={100}
            height={100}
            alt="Personal Image"
            className="object-cover size-48 absolute -rotate-[0.4rad] rounded-sm"
          />

          <Image
            src={'https://www.tattoorockers.cl/wp-content/uploads/2024/08/IMG_4560-1109x2048.jpg'}
            width={100}
            height={100}
            alt="Personal Image"
            className="object-cover size-48 relative -right-28 rounded-sm"
          />
        </div>
      </div>
    </WrapperLayout>
  )
}
