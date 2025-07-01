import { Filter, ArrowUpDown } from "lucide-react";

export default function FilterSection() {
  return (
    <section className="w-full mx-4 mb-6 flex justify-between items-start gap-4">
      <div className="flex flex-col space-y-2">
        <label
          htmlFor="filter"
          className="flex items-center gap-2 text-sm font-medium"
        >
          <Filter size={16} />
          Filter
        </label>
        <select
          id="filter"
          className="border rounded-lg px-4 py-2 bg-white focus:outline-none transition-all duration-200"
        >
          <option value="all">All Products</option>
          <option value="e-book">E-book</option>
          <option value="course">คอร์สเรียน</option>
        </select>
      </div>

      <div className="flex flex-col space-y-2">
        <label
          htmlFor="sort"
          className="flex items-center gap-2 text-sm font-medium"
          style={{ color: "#524389" }}
        >
          <ArrowUpDown size={16} />
          Sort by
        </label>
        <select
          id="sort"
          className="border rounded-lg px-4 py-2 bg-white focus:outline-none transition-all duration-200"
        >
          <option value="newest">Newest First</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="popular">Most Popular</option>
        </select>
      </div>
    </section>
  );
}
