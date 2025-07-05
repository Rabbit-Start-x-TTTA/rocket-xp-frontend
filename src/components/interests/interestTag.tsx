import { RiComputerFill } from "react-icons/ri";

export default function InterestTag({
  interest,
  isSelected,
  onClick,
}: {
  interest: string;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-center gap-1.5 w-fit px-3.5 py-1 text-xs font-medium rounded-[var(--radius-xl)] border-2 cursor-pointer transition
        ${isSelected ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <RiComputerFill />
      {interest}
    </div>
  );
}
