import FilterSection from "./filterSection";
import ProductGrid from "./productGrid";
import SearchSection from "./searchSection";

export default function ProductCatalogPage() {
  return (
    <>
      <main className="w-full max-w-7xl flex flex-col items-center justify-center p-4 mx-auto">
        <SearchSection />
        <FilterSection />
        <ProductGrid />
      </main>
    </>
  );
}
