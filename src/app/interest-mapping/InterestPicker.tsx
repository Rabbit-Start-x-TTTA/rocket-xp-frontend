"use client"

import { useState } from "react"
import InterestCategoryTabs from "./InterestCategoryTabs"
import InterestTagList from "./InterestTagList"

export default function InterestPicker() {
  const [activeTab, setActiveTab] = useState("TECHNOLOGY")

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold">Pick your interests</h1>
      <InterestCategoryTabs activeTab={activeTab} onChange={setActiveTab} />
      <InterestTagList category={activeTab} />
    </div>
  )
}
