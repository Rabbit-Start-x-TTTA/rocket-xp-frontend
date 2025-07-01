import colors from "@/styles/color";

interface TagProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

export function Tag({ label, selected, onClick }: TagProps) {
  return (
    <div
      onClick={onClick}
      className="px-3 py-1 rounded-full text-sm border cursor-pointer select-none transition-colors"
      style={{
        backgroundColor: colors.white,
        color: selected ? colors.primary.purple : colors.grey,
        borderColor: selected ? colors.primary.purple : colors.grey,
        fontWeight: selected ? "bold" : "normal",
      }}
    >
      {label}
    </div>
  );
}
