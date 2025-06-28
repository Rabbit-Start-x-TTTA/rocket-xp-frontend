import Image from "next/image";

export default function Product({
  name = "Product Name",
  price = 0,
  img_path = "/book.jpg",
}: {
  name?: string;
  price?: number;
  img_path?: string;
}) {
  return (
    <li className="border border-gray-300 rounded-md overflow-hidden">
      <div className="relative min-w-[175px] h-[150px] bg-gray-200">
        <Image src={img_path} alt={name} fill />
      </div>
      <div className="p-3">
        <h2 className="text-gray-900 mb-1">{name}</h2>
        <p className="text-[#D63AA2] text-lg font-semibold">
          ${price?.toFixed(2)}
        </p>
      </div>
    </li>
  );
}
