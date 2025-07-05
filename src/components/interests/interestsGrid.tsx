"use client";

import { useState } from "react";
import InterestTag from "./interestTag";

export default function InterestsGrid({
  interests,
}: {
  interests: { id: number; name: string }[];
}) {
  const [selected, setSelected] = useState<string[]>([]);
  const maxSelected: number = 5;

  function toggleInterest(interest: string) {
    if (selected.includes(interest)) {
      setSelected(selected.filter((item) => item !== interest));
    } else if (selected.length < maxSelected) {
      setSelected([...selected, interest]);
    }
  }

  return (
    <div className="flex flex-wrap gap-2 justify-center items-center mb-6">
      {interests.map((interest) => (
        <InterestTag
          key={interest.id}
          interest={interest.name}
          isSelected={selected.includes(interest.name)}
          onClick={() => toggleInterest(interest.name)}
        />
      ))}
      <p className="text-sm text-gray-600 w-full text-center"></p>
    </div>
  );
}
