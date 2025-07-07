import Image from "next/image";
import { FaRocket, FaMusic, FaPaintBrush, FaBook } from "react-icons/fa";

export default function ProfilePage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-[#fff] to-[#F8F4FF] font-prompt">
      <div className="flex flex-col items-center justify-center flex-1 pt-8 pb-4 px-2">
        {/* Profile Header */}
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 flex flex-col items-center mb-6">
          <div className="flex flex-col items-center w-full mb-4">
            <Image src="/logo.png" alt="Profile Logo" width={80} height={80} className="rounded-full border-4 border-[#D63AA2] bg-white shadow" />
            <div className="text-2xl font-bold text-[#524389] mt-3">Jane Doe</div>
            <div className="text-base text-[#C6639D]">@janedoe</div>
            <div className="flex gap-2 mt-2">
              <span className="bg-[#FFB519] text-[#382E5E] text-xs font-semibold px-3 py-1 rounded-full shadow">1,250 XP</span>
              <span className="bg-gradient-to-r from-[#524389] to-[#D63AA2] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">Level 7</span>
            </div>
            <button className="mt-3 text-[#524389] hover:text-[#D63AA2] text-base flex items-center gap-1 px-3 py-1 rounded-lg border border-[#C6639D] bg-[#F8F4FF] transition-colors">
              <span role="img" aria-label="edit">✏️</span> Edit
            </button>
          </div>
          {/* Interests as badges */}
          <div className="w-full flex flex-wrap gap-2 justify-center mt-2 mb-1">
            <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#524389] text-white text-sm font-medium shadow font-prompt"><FaRocket className="text-[#FFB519]" /> Startup</span>
            <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#4891C6] text-white text-sm font-medium shadow font-prompt"><FaMusic /> Music</span>
            <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#D63AA2] text-white text-sm font-medium shadow font-prompt"><FaPaintBrush /> Art</span>
            <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#C6639D] text-white text-sm font-medium shadow font-prompt"><FaBook /> Reading</span>
          </div>
        </div>
        {/* History Section */}
        <div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="text-lg font-semibold text-[#524389] mb-2">History of gaining</div>
            <div className="bg-white rounded-xl shadow p-4 text-sm">
              <div className="font-bold text-black mb-2">12 มิถุนายน 2568</div>
              <div className="text-[#524389] mb-1">ได้รับคะแนน <span className="text-[#FFB519] font-bold">+70</span> <span className="float-right text-xs text-[#C6639D]">21:01</span></div>
              <div className="text-[#524389] mb-1">ได้รับคะแนน <span className="text-[#FFB519] font-bold">+50</span> <span className="float-right text-xs text-[#C6639D]">20:45</span></div>
              <div className="font-bold text-black mt-4 mb-2">11 มิถุนายน 2568</div>
              <div className="text-[#524389] mb-1">ได้รับคะแนน <span className="text-[#FFB519] font-bold">+30</span> <span className="float-right text-xs text-[#C6639D]">19:30</span></div>
            </div>
          </div>
          <div>
            <div className="text-lg font-semibold text-[#524389] mb-2">History of using</div>
            <div className="bg-white rounded-xl shadow p-4 text-sm flex flex-col items-end">
              <div className="font-bold text-[#382E5E] mb-1">แลกของรางวัล <span className="text-[#D63AA2]">-100</span> <span className="text-xs text-[#C6639D]">22:00</span></div>
              <div className="font-bold text-[#382E5E] mb-1">แลกของรางวัล <span className="text-[#D63AA2]">-70</span> <span className="text-xs text-[#C6639D]">21:10</span></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center pb-6">
        <span className="text-base text-[#524389]">Corporate identity guideline</span>
      </div>
    </div>
  );
} 