import FilterSection from "../../components/product-catalog/filterSection";
import ProductGrid from "../../components/product-catalog/productGrid";
import SearchSection from "../../components/product-catalog/searchSection";

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
