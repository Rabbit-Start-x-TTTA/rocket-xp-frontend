import Image from "next/image"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-[#fff] to-[#F8F4FF]">
      <div className="flex flex-col items-center justify-center flex-1 pt-24">
        <Image src="/logo.png" alt="Rocket XP Logo" width={120} height={120} priority className="mb-6" />
        <h1 className="text-4xl font-extrabold gradient-text mb-2 tracking-tight">ROCKET XP</h1>
        <div className="text-base font-semibold text-black mb-8 tracking-wide">RABBIT START CO., LTD.</div>
        <form className="w-full max-w-sm bg-white rounded-xl shadow-lg p-8 flex flex-col gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#524389] mb-1">Email</label>
            <input id="email" type="email" autoComplete="email" className="w-full px-4 py-2 border border-[#C6639D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D63AA2]" placeholder="you@email.com" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[#524389] mb-1">Password</label>
            <input id="password" type="password" autoComplete="current-password" className="w-full px-4 py-2 border border-[#C6639D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D63AA2]" placeholder="••••••••" />
          </div>
          <button type="submit" className="w-full py-3 rounded-lg font-bold bg-gradient-to-r from-[#524389] to-[#D63AA2] text-white text-lg shadow hover:from-[#D63AA2] hover:to-[#524389] transition-colors">Login</button>
        </form>
      </div>
      <div className="w-full flex justify-center pb-12">
        <span className="text-base text-[#524389]">Corporate identity guideline</span>
      </div>
    </div>
  )
} 