export default function InterestTag({ interest }: { interest: string }) {
  return (
    <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
      {interest}
    </span>
  );
}
