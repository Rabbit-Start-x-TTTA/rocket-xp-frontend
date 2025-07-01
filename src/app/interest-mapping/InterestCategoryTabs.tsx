"use client"
import React from "react"
import colors from "@/styles/color"

const tabs = ["TECHNOLOGY", "CREATIVITY", "SOCIAL", "ACTIVITIES"]

export default function InterestCategoryTabs({
  activeTab,
  onChange,
}: {
  activeTab: string
  onChange: (tab: string) => void
}) {
  return (
    <div className="flex gap-4 my-4">
      {tabs.map((tab) => (
        <div
          key={tab}
          onClick={() => onChange(tab)}
          style={{
            cursor: "pointer",
            fontWeight: activeTab === tab ? "bold" : "normal",
            color: activeTab === tab ? colors.primary.pink : colors.secondary.pink,
            borderBottom:
              activeTab === tab ? `2px solid ${colors.primary.pink}` : "none",
          }}
        >
          {tab}
        </div>
      ))}
    </div>
  )
}
