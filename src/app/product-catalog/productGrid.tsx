import Product from "./product";

const data: any[] = [
  {
    id: 1,
    name: "Product 1",
    price: 99.0,
    img_path: "/book.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    price: 89.0,
    img_path: "/book.jpg",
  },
  {
    id: 3,
    name: "Product 3",
    price: 79.0,
    img_path: "/book.jpg",
  },
  {
    id: 4,
    name: "Product 4",
    price: 69.0,
    img_path: "/book.jpg",
  },
];

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
