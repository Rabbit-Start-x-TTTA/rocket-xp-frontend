import Image from "next/image";
import Link from "next/link";

export default function Product({
  name = "Product Name",
  price = 0,
  img_path = "/book.jpg",
  id = 1, // Add id prop for routing
  slug, // Optional: use slug instead of id
}: {
  name?: string;
  price?: number;
  img_path?: string;
  id?: number;
  slug?: string;
}) {
  return (
    <li className="border border-gray-300 rounded-md overflow-hidden transition-all duration-300 hover:border-[#D63AA2] hover:shadow-lg hover:-translate-y-1 cursor-pointer">
      <Link href={`/productDetail/${slug || id}`}>
        <div className="relative min-w-[175px] h-[150px] bg-gray-200">
          <Image src={img_path} alt={name} fill className="object-cover" />
        </div>
        <div className="p-3">
          <h2 className="text-gray-900 mb-1 ">{name}</h2>
          <p className="text-[#D63AA2] text-lg font-semibold">
            ${price?.toFixed(2)}
          </p>
        </div>
      </Link>
    </li>
  );
}
