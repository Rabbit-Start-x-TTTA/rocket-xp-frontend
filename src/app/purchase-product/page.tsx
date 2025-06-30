export default function PurchaseProductPage() {
  return (
    <main className="min-h-screen p-4 text-black">
      <p className="pb-6">BACK</p>
      <h1 className="font-bold text-2xl">สินค้าในตะกร้า</h1>

      <ul className="mt-10 mb-20 space-y-2">
        <li className="flex justify-between">
          <p>item 1</p>
          <p>99$</p>
        </li>
        <li className="flex justify-between">
          <p>item 2</p>
          <p>99$</p>
        </li>
        <li className="flex justify-between ">
          <p>item 3</p>
          <p>99$</p>
        </li>
      </ul>
      <div className="flex justify-between">
        <p>Discount</p>
        <p className="bg-purple-500 text-black p-2">TICKET</p>
      </div>
      <div className="flex justify-between font-bold text-xl mt-4">
        <p>Total</p>
        <p>297$</p>
      </div>
      <button className="w-full bg-purple-500 text-black p-2 mt-4 hover:bg-purple-100 transition-colors">
        ชำระเงิน
      </button>
    </main>
  );
}
