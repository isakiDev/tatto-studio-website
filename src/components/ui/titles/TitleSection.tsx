import Image from "next/image"

export const TitleSection = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col justify-center items-center py-8">
      <h2 className="text-xl">{title}</h2>
      <Image
        width={130}
        height={130}
        className="translate-y-2 invert"
        src="/assets/underline-icon.png"
        alt="underline-icon"
      />
    </div>
  )
}
