"use client";

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

  return (
    <div className="flex flex-wrap gap-2">
      {interests.map((interest) => (
        <Tag key={interest} label={interest} />
      ))}
    </div>
  );
}
