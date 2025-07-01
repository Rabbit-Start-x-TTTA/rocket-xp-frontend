import data from "../dummyData";
import Image from "next/image";

export default async function ProductDetailPage({
  params,
}: {
  params: { productSlug: string };
}) {
  const product_data = data.find((p) => p.id.toString() === params.productSlug);

  if (!product_data) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product_data.name}</h1>
      <p>Price: ${product_data.price}</p>
      <Image
        src={product_data.img_path}
        alt={product_data.name}
        width={150}
        height={150}
      />
    </div>
  );
}
