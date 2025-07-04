import { RiComputerFill } from "react-icons/ri";

export default function InterestTag({ interest }: { interest: string }) {
  return (
    <div className="flex items-center justify-center gap-2 w-fit px-2.5 py-0.5 text-xs font-medium text-black border-2 border-[var(--border)] rounded-[var(--radius-xl)]">
      <div>
        <RiComputerFill />
      </div>
      {interest}
    </div>
  );
}
