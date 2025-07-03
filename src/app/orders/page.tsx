import dummyOrders from "./dummyData";

export default function OrderListPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Side Navbar */}
      <nav className="bg-purple-500 flex justify-center items-center w-64 text-white text-2xl font-semibold">
        Side Navbar
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Order List</h1>

        <div className="max-w-7xl">
          {/* Export and Filter Buttons */}
          <div className="flex justify-between items-center mb-6">
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-md font-medium transition-colors">
              EXPORT
            </button>
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-md font-medium transition-colors">
              FILTER
            </button>
          </div>

          {/* Table */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-purple-100">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    User
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Product Deal
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Type
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Category
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Price
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Used Discount
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Amount/Access Key
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Ship
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Option
                  </th>
                </tr>
              </thead>
              <tbody>
                {dummyOrders.map((order) => (
                  <tr
                    key={order.id}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {order.user}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {order.product}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {order.type}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {order.category}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {order.price}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {order.discount}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {order.amount}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {order.ship}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          order.status === "done"
                            ? "bg-green-500 text-white"
                            : "bg-yellow-500 text-white"
                        }`}
                      >
                        {order.status.toUpperCase()}
                      </span>
                    </td>
                    <td className="px-4 py-3 space-x-2">
                      <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                        Edit
                      </button>
                      <button className="text-red-600 hover:text-red-800 font-medium text-sm">
                        Delete
                      </button>
                      <button className="text-purple-600 hover:text-purple-800 font-medium text-sm">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
