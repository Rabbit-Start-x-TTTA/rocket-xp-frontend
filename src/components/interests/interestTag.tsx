import { RiComputerFill } from "react-icons/ri";

export default function InterestTag({ interest }: { interest: string }) {
  return (
    <div className="flex items-center justify-center gap-1.5 w-fit px-3.5 py-1 text-xs font-medium text-black border-2 border-[var(--border)] rounded-[var(--radius-xl)]">
      <div>
        <RiComputerFill />
      </div>
      {interest}
    </div>
  );
}
