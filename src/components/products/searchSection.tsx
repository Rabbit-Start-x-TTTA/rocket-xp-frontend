import { Search } from "lucide-react";

export default function SearchSection() {
  return (
    <section className="w-full mx-4 mb-4 flex">
      <input
        type="text"
        placeholder="Search products..."
        className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[var(--primary-alt)] focus:border-transparent"
      />
      <button className="bg-[var(--primary)] hover:bg-[var(--primary-alt)] text-white px-6 py-2 rounded-r-lg flex items-center gap-2">
        <Search size={16} />
        Search
      </button>
    </section>
  );
}
