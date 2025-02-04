import { Header } from "@/components/sections/Header"
import { About } from "@/components/sections/About";
import { Gallery } from "@/components/sections/Gallery";
import { Questions } from "@/components/sections/Questions";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Header />
      <About />
      <Gallery />
      <Questions />

      <Contact />

      {/* feedback */}
      {/* questions */}
      {/* contact */}
    </div>
  );
}