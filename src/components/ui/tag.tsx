// components/ui/tag.tsx
import colors from "@/styles/color";

interface TagProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

export function Tag({ label, selected, onClick }: TagProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1 rounded-full text-sm border font-medium transition-all duration-200`}
      style={{
        backgroundColor: selected ? colors.primary.pink : colors.white,
        color: selected ? colors.white : colors.black,
        borderColor: selected ? colors.primary.pink : colors.lightgrey,
      }}
    >
      {label}
    </button>
  );
}
