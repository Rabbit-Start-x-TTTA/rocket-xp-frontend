import InterestTag from "./interestTag";

export default function InterestsGrid({
  interests,
}: {
  interests: { id: number; name: string }[];
}) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {interests.map((interest) => (
        <InterestTag key={interest.id} interest={interest.name} />
      ))}
    </div>
  );
}
