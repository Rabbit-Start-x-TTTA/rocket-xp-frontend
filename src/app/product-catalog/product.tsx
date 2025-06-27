export default function Product() {
  return (
    <li className="border border-gray-300 rounded-md overflow-hidden">
      <div className="w-[150px] h-[150px] bg-gray-200"></div>
      <div className="p-3">
        <h2 className="text-gray-900 mb-1">Product</h2>
        <p className="text-[#D63AA2] text-lg font-semibold">$99.00</p>
      </div>
    </li>
  );
}
