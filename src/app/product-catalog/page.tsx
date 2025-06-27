import Image from "next/image";

export default function ProductCatalogPage() {
  return (
    <>
      <main className="width-full flex flex-col items-center justify-center p-4">
        <section className="w-full mx-4 mb-4 flex">
          <input
            type="text"
            placeholder="Search products..."
            className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#C6639D] focus:border-transparent"
          />
          <button className="bg-[#524389] hover:bg-[#C6639D] text-white px-6 py-2 rounded-r-lg flex items-center">
            Search
          </button>
        </section>
        <section>
          <div>
            <label htmlFor="filter">Filter</label>
            <select id="filter">
              <option value="e-book">E-book</option>
              <option value="course">คอร์สเรียน</option>
            </select>
          </div>
          <div>
            <label htmlFor="sort">Sort by</label>
            <select id="sort">
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </section>
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
