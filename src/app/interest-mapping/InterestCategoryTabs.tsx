"use client";
import colors from "@/styles/color";

const tabs = ["TECHNOLOGY", "CREATIVITY", "SOCIAL", "ACTIVITIES"];

export default function InterestCategoryTabs({
  activeTab,
  onChange,
}: {
  activeTab: string;
  onChange: (tab: string) => void;
}) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {tabs.map((tab) => {
        const isActive = activeTab === tab;

        return (
          <button
            key={tab}
            onClick={() => onChange(tab)}
            className={`text-sm font-medium  px-3 py-1 transition-all duration-200 border-b-2`}
            style={{
              color: isActive ? colors.primary.pink : colors.lightgrey,
              borderColor: isActive ? colors.primary.pink : "transparent",
            }}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}
