"use client";

import { RiComputerFill } from "react-icons/ri";
import { useState } from "react";

export default function InterestTag({ interest }: { interest: string }) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div
      onClick={() => setIsSelected(!isSelected)}
      className={`flex items-center justify-center gap-1.5 w-fit px-3.5 py-1 text-xs font-medium rounded-[var(--radius-xl)] border-2 cursor-pointer transition
        ${isSelected ? "bg-black text-white " : null}`}
    >
      <div>
        <RiComputerFill />
      </div>
      {interest}
    </div>
  );
}
