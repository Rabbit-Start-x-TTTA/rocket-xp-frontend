"use client";

import Image from "next/image";
import { useState } from "react";
import InterestCategoryTabs from "./InterestCategoryTabs";
import InterestTagList from "./InterestTagList";

export default function InterestPicker() {
  const [activeTab, setActiveTab] = useState("TECHNOLOGY");

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-[#fff] to-[#F8F4FF]">
      <div className="flex flex-col items-center justify-center flex-1 pt-24">
        <Image
          src="/logo.png"
          alt="Rocket XP Logo"
          width={120}
          height={120}
          priority
          className="mb-6"
        />

        {/* Card */}
        <div className="w-full max-w-xl p-[2px] rounded-xl bg-gradient-to-r from-[#524389] to-[#D63AA2] shadow-xl">
          <div className="rounded-xl bg-white overflow-hidden">
            {/* Header & Tab */}
            <div className="bg-[#F8C8DC] px-6 pt-4 pb-0">
              <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#524389] to-[#D63AA2] text-center mb-2">
                Pick your interests
              </h2>
              <InterestCategoryTabs
                activeTab={activeTab}
                onChange={setActiveTab}
              />
            </div>

            {/* Tag */}
            <div className="bg-white px-8 py-8 flex flex-col gap-6">
              <InterestTagList category={activeTab} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mb-4">
        <button
          type="button"
          className="px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-[#524389] to-[#D63AA2] text-white shadow hover:from-[#D63AA2] hover:to-[#524389] transition-colors"
        >
          Next
        </button>
      </div>
      <div className="w-full flex justify-center pb-12">
        <span className="text-base text-[#524389]">
          Corporate identity guideline
        </span>
      </div>
    </div>
  );
}
