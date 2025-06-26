import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-[#fff] to-[#F8F4FF]">
      <div className="flex flex-col items-center justify-center flex-1 pt-24">
        <Image src="/logo.png" alt="Rocket XP Logo" width={180} height={180} priority className="mb-6" />
        <h1 className="text-6xl font-extrabold gradient-text mb-2 tracking-tight">ROCKET XP</h1>
        <div className="text-lg font-semibold text-black mb-12 tracking-wide">RABBIT START CO., LTD.</div>
      </div>
      <div className="w-full flex justify-center pb-12">
        <span className="text-xl text-[#524389]">Corporate identity guideline</span>
      </div>
    </div>
  )
}
