import Image from "next/image";

export default function ProductCatalogPage() {
  return (
    <>
      <main>
        <section>
          <input
            type="text"
            placeholder="Search products..."
            className="border p-2"
          />
          <button className="bg-blue-500 text-white p-2">Search</button>
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
