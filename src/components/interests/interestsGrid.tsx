import InterestTag from "./interestTag";

export default function InterestsGrid({
  interests,
}: {
  interests: { id: number; name: string }[];
}) {
  return (
    <div className="flex flex-wrap gap-2 justify-center items-center">
      {interests.map((interest) => (
        <InterestTag key={interest.id} interest={interest.name} />
      ))}
    </div>
  );
}
