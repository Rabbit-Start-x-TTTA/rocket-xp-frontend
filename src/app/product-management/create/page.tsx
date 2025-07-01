export default function CreateProductPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Side Navbar */}
      <nav className="bg-purple-500 flex justify-center items-center w-64 text-white text-2xl font-semibold">
        Side Navbar
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Create Product
        </h1>

        <div className="max-w-2xl">
          <div className="space-y-6">
            {/* Product Name */}
            <div>
              <div className="block text-sm font-medium text-gray-700 mb-2">
                Product Name
              </div>
              <input
                type="text"
                defaultValue="How to swim"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Description */}
            <div>
              <div className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </div>
              <textarea
                defaultValue="Lorem bla bla bla dadadadadsda"
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
              />
            </div>

            {/* Type and Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="block text-sm font-medium text-gray-700 mb-2">
                  Type
                </div>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white">
                  <option>Digital</option>
                  <option>Physical</option>
                </select>
              </div>
              <div>
                <div className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </div>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white">
                  <option>ebook</option>
                  <option>Course</option>
                  <option>Software</option>
                </select>
              </div>
            </div>

            {/* Price and Amount */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="block text-sm font-medium text-gray-700 mb-2">
                  Price
                </div>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white">
                  <option>10</option>
                  <option>20</option>
                  <option>50</option>
                  <option>100</option>
                </select>
              </div>
              <div>
                <div className="block text-sm font-medium text-gray-700 mb-2">
                  Amount
                </div>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Access Key */}
            <div>
              <div className="block text-sm font-medium text-gray-700 mb-2">
                Access Key
              </div>
              <input
                type="text"
                defaultValue="how-to-swim-..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Product Image */}
            <div>
              <div className="block text-sm font-medium text-gray-700 mb-2">
                Product Image
              </div>
              <input
                type="text"
                defaultValue="image/event-img.jpg"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* All Discounts */}
            <div>
              <div className="block text-sm font-medium text-gray-700 mb-2">
                All Discounts
              </div>
              <input
                type="text"
                defaultValue="FREE, FREE100, SIGMA25, CHAD"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* XP Reward */}
            <div>
              <div className="block text-sm font-medium text-gray-700 mb-2">
                XP Reward
              </div>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white">
                <option>10</option>
                <option>20</option>
                <option>30</option>
                <option>50</option>
                <option>100</option>
              </select>
            </div>

            {/* Status */}
            <div>
              <div className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </div>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white">
                <option>Hide</option>
                <option>Active</option>
                <option>Draft</option>
              </select>
            </div>

            {/* ADD Button */}
            <div className="pt-4">
              <button
                type="button"
                className="bg-purple-400 hover:bg-purple-500 text-white px-8 py-2 rounded-md font-medium transition-colors"
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
