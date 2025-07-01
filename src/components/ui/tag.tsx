import colors from "@/styles/color";

export function Tag({ label }: { label: string }) {
  return (
    <div
      className="px-3 py-1 rounded-full text-sm border"
      style={{
        backgroundColor: colors.white,
        color: colors.black,
        borderColor: colors.black
      }}
    >
      {label}
    </div>
  )
}
