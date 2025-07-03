"use client";

import Image from "next/image";
import { useState } from "react";
import InterestCategoryTabs from "./InterestCategoryTabs";
import InterestTagList from "./InterestTagList";
import colors from "@/styles/color";

export default function InterestPicker() {
  const [activeTab, setActiveTab] = useState("TECHNOLOGY");

  return (
    <div
      className="min-h-screen flex flex-col justify-between"
      style={{
        background: `linear-gradient(to bottom right, ${colors.white}, ${colors.lightpurple})`,
      }}
    >
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
        <div
          className="w-full max-w-xl p-[2px] rounded-xl shadow-xl"
          style={{
            background: `linear-gradient(to right, ${colors.primary.purple}, ${colors.primary.pink})`,
          }}
        >
          {" "}
          <div className="rounded-xl bg-white overflow-hidden">
            {/* Header & Tab */}
            <div
              className="px-6 pt-4 pb-0"
              style={{ backgroundColor: colors.lightpurple }}
            >
              {" "}
              <h2
                className="text-2xl font-extrabold text-transparent bg-clip-text text-center mb-2"
                style={{
                  backgroundImage: `linear-gradient(to right, ${colors.primary.purple}, ${colors.primary.pink})`,
                }}
              >
                {" "}
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
          className="px-8 py-3 rounded-full font-semibold text-white shadow transition-colors"
          style={{
            backgroundImage: `linear-gradient(to right, ${colors.primary.purple}, ${colors.primary.pink})`,
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundImage = `linear-gradient(to right, ${colors.primary.pink}, ${colors.primary.purple})`;
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundImage = `linear-gradient(to right, ${colors.primary.purple}, ${colors.primary.pink})`;
          }}
        >
          Next
        </button>
      </div>
      <div className="w-full flex justify-center pb-12">
        <span className="text-base" style={{ color: colors.primary.purple }}>
          Corporate identity guideline
        </span>
      </div>
    </div>
  );
}
