import Image from "next/image";

import FilterSection from "./filterSection";
import SearchSection from "./searchSection";

export default function ProductCatalogPage() {
  return (
    <>
      <main className="w-full flex flex-col items-center justify-center p-4">
        <SearchSection />
        <FilterSection />
        <section>
          <h2>คำค้นหา</h2>
          <ul>
            <li>
              <Image src="/book.jpg" alt="Product 1" width={100} height={100} />
              <div>
                <p>Product 1</p>
                <p>999 บาท</p>
              </div>
            </li>
          </ul>
        </section>
        <section></section>
      </main>
    </>
  );
}
