import Image from "next/image"
import { WrapperLayout } from "../layout/WrapperLayout"

export const Gallery = () => {
  return (
    <WrapperLayout>
      <div className="flex flex-col justify-center items-center py-8">
        <h2 className="text-xl">Galeria</h2>
        <Image
          width={130}
          height={130}
          className="translate-y-2 invert"
          src="/assets/underline-icon.png"
          alt="underline-icon"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10">
        <div className="grid gap-4">
          <div>
            <Image width={200} height={200} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="" />
          </div>
          <div>
            <Image width={200} height={200} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="" />
          </div>
          <div>
            <Image width={200} height={200} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image width={200} height={200} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
          </div>
          <div>
            <Image width={200} height={200} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="" />
          </div>
          <div>
            <Image width={200} height={200} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image width={200} height={200} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="" />
          </div>
          <div>
            <Image width={200} height={200} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="" />
          </div>
          <div>
            <Image width={200} height={200} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image width={200} height={200} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="" />
          </div>
          <div>
            <Image width={200} height={200} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="" />
          </div>
          <div>
            <Image width={200} height={200} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="" />
          </div>
        </div>
      </div>
    </WrapperLayout>
  )
}
