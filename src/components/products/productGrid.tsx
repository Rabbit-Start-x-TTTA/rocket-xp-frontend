import Product from "./product";
import data from "../../app/products/dummyData";

export default function ProductGrid() {
  return (
    <section>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </ul>
    </section>
  );
}
