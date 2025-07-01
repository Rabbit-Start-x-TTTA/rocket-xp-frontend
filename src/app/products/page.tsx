import FilterSection from "../../components/products/filterSection";
import ProductGrid from "../../components/products/productGrid";
import SearchSection from "../../components/products/searchSection";

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
