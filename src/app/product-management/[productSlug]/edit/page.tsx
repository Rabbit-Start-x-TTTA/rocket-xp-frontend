export default function ViewProductPage({
  params,
}: {
  params: { productSlug: string };
}) {
  const productSlug = params.productSlug;

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
            <h1 className="text-3xl font-bold text-gray-800">{productSlug}</h1>
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
            {/* Product Name */}
            <div>
              <div className="block text-sm font-medium text-gray-700 mb-2">
                Product Name
              </div>
              <div className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700">
                How to swim
              </div>
            </div>

            {/* Description */}
            <div>
              <div className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </div>
              <div className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700 min-h-[80px]">
                Lorem bla bla bla dadadadadsda
              </div>
            </div>

            {/* Type and Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="block text-sm font-medium text-gray-700 mb-2">
                  Type
                </div>
                <div className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700">
                  Digital
                </div>
              </div>
              <div>
                <div className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </div>
                <div className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700">
                  ebook
                </div>
              </div>
            </div>

            {/* Price and Amount */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="block text-sm font-medium text-gray-700 mb-2">
                  Price
                </div>
                <div className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700">
                  10
                </div>
              </div>
              <div>
                <div className="block text-sm font-medium text-gray-700 mb-2">
                  Amount
                </div>
                <div className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700"></div>
              </div>
            </div>

            {/* Access Key */}
            <div>
              <div className="block text-sm font-medium text-gray-700 mb-2">
                Access Key
              </div>
              <div className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700">
                how-to-swim-...
              </div>
            </div>

            {/* Product Image */}
            <div>
              <div className="block text-sm font-medium text-gray-700 mb-2">
                Product Image
              </div>
              <div className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700">
                image/event-img.jpg
              </div>
            </div>

            {/* All Discounts */}
            <div>
              <div className="block text-sm font-medium text-gray-700 mb-2">
                All Discounts
              </div>
              <div className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700">
                FREE, FREE100, SIGMA25, CHAD
              </div>
            </div>

            {/* XP Reward */}
            <div>
              <div className="block text-sm font-medium text-gray-700 mb-2">
                XP Reward
              </div>
              <div className="w-32 px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700">
                10
              </div>
            </div>

            {/* Status */}
            <div>
              <div className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </div>
              <div className="w-32 px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700">
                Hide
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
