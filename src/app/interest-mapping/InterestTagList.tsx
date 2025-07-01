"use client";

import { useState } from "react";
import { Tag } from "@/components/ui/tag";

const interestsByTab: Record<string, string[]> = {
  TECHNOLOGY: [
    "Virtual Reality",
    "Video Games",
    "Computers",
    "Applications",
    "Programming",
  ],
  CREATIVITY: ["Design", "Drawing", "Painting"],
  SOCIAL: ["Volunteering", "Mentorship"],
  ACTIVITIES: ["Sports", "Cooking"],
};

export default function InterestTagList({ category }: { category: string }) {
  const interests = interestsByTab[category] || [];
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };
  return (
    <div className="flex flex-wrap gap-2">
      {interests.map((interest) => (
        <Tag
          key={interest}
          label={interest}
          selected={selectedTags.includes(interest)}
          onClick={() => toggleTag(interest)}
        />
      ))}
    </div>
  );
}
