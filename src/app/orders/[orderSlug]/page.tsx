export default function ViewOrderPage({
  params,
}: {
  params: { orderSlug: string };
}) {
  const orderSlug = params.orderSlug;

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Side Navbar */}
      <nav className="bg-purple-500 flex justify-center items-center w-64 text-white text-2xl font-semibold">
        Side Navbar
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Page Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <div className="text-sm text-gray-500 mb-1">BACK</div>
            <h1 className="text-3xl font-bold text-gray-800">
              Order #{orderSlug}
            </h1>
          </div>
          <div className="flex gap-2">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md font-medium transition-colors">
              EDIT
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-medium transition-colors">
              DELETE
            </button>
          </div>
        </div>

        <div className="max-w-4xl">
          <div className="space-y-6">
            {/* Order ID */}
            <div>
              <div className="block text-sm font-medium text-gray-700 mb-2">
                Order ID
              </div>
              <div className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700">
                {orderSlug}
              </div>
            </div>

            {/* User */}
            <div>
              <div className="block text-sm font-medium text-gray-700 mb-2">
                User
              </div>
              <div className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700">
                Alice
              </div>
            </div>

            {/* Product Deal and Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="block text-sm font-medium text-gray-700 mb-2">
                  Product Deal
                </div>
                <div className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700">
                  AxiU
                </div>
              </div>
              <div>
                <div className="block text-sm font-medium text-gray-700 mb-2">
                  Type
                </div>
                <div className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700">
                  swap
                </div>
              </div>
            </div>

            {/* Category and Price */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </div>
                <div className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700">
                  -
                </div>
              </div>
              <div>
                <div className="block text-sm font-medium text-gray-700 mb-2">
                  Price
                </div>
                <div className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700">
                  -
                </div>
              </div>
            </div>

            {/* Used Discount */}
            <div>
              <div className="block text-sm font-medium text-gray-700 mb-2">
                Used Discount
              </div>
              <div className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700">
                -
              </div>
            </div>

            {/* Amount/Access Key */}
            <div>
              <div className="block text-sm font-medium text-gray-700 mb-2">
                Amount/Access Key
              </div>
              <div className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700">
                -
              </div>
            </div>

            {/* Ship */}
            <div>
              <div className="block text-sm font-medium text-gray-700 mb-2">
                Ship
              </div>
              <div className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700">
                -
              </div>
            </div>

            {/* Status */}
            <div>
              <div className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </div>
              <div className="flex gap-2">
                <span className="bg-green-500 text-white px-3 py-1 rounded text-sm font-medium">
                  DONE
                </span>
                <span className="bg-yellow-500 text-white px-3 py-1 rounded text-sm font-medium">
                  SH
                </span>
                <span className="bg-red-500 text-white px-3 py-1 rounded text-sm font-medium">
                  CANCEL
                </span>
              </div>
            </div>

            {/* Order Date */}
            <div>
              <div className="block text-sm font-medium text-gray-700 mb-2">
                Order Date
              </div>
              <div className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700">
                2024-07-01 14:30:00
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <div className="block text-sm font-medium text-gray-700 mb-2">
                Payment Method
              </div>
              <div className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700">
                Credit Card
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
