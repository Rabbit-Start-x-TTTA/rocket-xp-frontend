import { StepBack } from "lucide-react";

export default function PurchaseProductPage() {
  return (
    <main className="min-h-screen p-4 text-black max-w-2xs mx-auto">
      <p className="pb-6 flex text-[var(--primary-alt)]">
        <StepBack />
      </p>
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
      <div className="flex justify-between items-center">
        <p>Discount</p>
        <p className="bg-[var(--primary-alt)] text-black p-2 rounded-xl">
          TICKET
        </p>
      </div>
      <div className="flex justify-between font-bold text-xl mt-4">
        <p>Total</p>
        <p>297$</p>
      </div>
      <button className="w-full bg-[var(--primary-alt)] text-black p-2 mt-4 hover:bg-[var(--secondary)] transition-colors rounded-xl">
        ชำระเงิน
      </button>
    </main>
  );
}
