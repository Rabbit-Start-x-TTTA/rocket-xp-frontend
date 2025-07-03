import { Edit, Trash2, Plus, Filter } from "lucide-react";
import Link from "next/link";

export default function ProductManagementPage() {
  const products = [
    {
      id: 1,
      image: "",
      name: "Wireless Headphones",
      date: "2025-01-15",
      type: "Electronics",
      category: "Audio",
      price: 199.99,
      discount: 15,
      amountAccessKey: "WH001",
      ship: "Free",
      status: "Show",
    },
    {
      id: 2,
      image: "",
      name: "Smart Watch",
      date: "2025-01-20",
      type: "Electronics",
      category: "Wearable",
      price: 299.99,
      discount: 20,
      amountAccessKey: "SW002",
      ship: "Standard",
      status: "Show",
    },
    {
      id: 3,
      image: "",
      name: "Coffee Maker",
      date: "2025-01-25",
      type: "Appliance",
      category: "Kitchen",
      price: 149.99,
      discount: 10,
      amountAccessKey: "CM003",
      ship: "Express",
      status: "Hide",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Side Navbar */}
      <nav className="bg-purple-500 flex justify-center items-center w-64 text-white text-2xl font-semibold">
        Side Navbar
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Product List
          </h1>

          {/* Search Bar */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-6">
            <Link href="/product-management/create">
              <button className="bg-purple-400 hover:bg-purple-500 text-white px-6 py-2 rounded-md font-medium transition-colors flex items-center gap-2">
                <Plus size={16} />
                ADD
              </button>
            </Link>
            <button className="bg-purple-400 hover:bg-purple-500 text-white px-6 py-2 rounded-md font-medium transition-colors">
              EXPORT
            </button>
            <div className="flex gap-2 ml-auto">
              <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option value="All">All Status</option>
                <option value="Show">Show</option>
                <option value="Hide">Hide</option>
              </select>
              <button className="bg-purple-400 hover:bg-purple-500 text-white px-6 py-2 rounded-md font-medium transition-colors flex items-center gap-2">
                <Filter size={16} />
                FILTER
              </button>
            </div>
          </div>
        </div>

        {/* Products Table */}
        <div className="bg-purple-200 rounded-lg overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-purple-300">
                <tr>
                  <th className="table-header">Image</th>
                  <th className="table-header">Name</th>
                  <th className="table-header">Date</th>
                  <th className="table-header">Type</th>
                  <th className="table-header">Category</th>
                  <th className="table-header">Price</th>
                  <th className="table-header">Discount</th>
                  <th className="table-header">Amount/Access Key</th>
                  <th className="table-header">Ship</th>
                  <th className="table-header">Status</th>
                  <th className="table-header">Option</th>
                </tr>
              </thead>
              <tbody className="bg-purple-200">
                {products.map((product) => (
                  <tr
                    key={product.id}
                    className="border-b border-purple-300 hover:bg-purple-150"
                  >
                    <td className="px-4 py-3">
                      <div className="w-10 h-10 bg-gray-300 rounded-md flex items-center justify-center">
                        <span className="text-xs text-gray-600">IMG</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {product.name}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {product.date}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {product.type}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {product.category}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      ${product.price}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {product.discount}%
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {product.amountAccessKey}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {product.ship}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          product.status === "Show"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {product.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-xs font-medium transition-colors flex items-center gap-1">
                          <Edit size={12} />
                          EDIT
                        </button>
                        <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs font-medium transition-colors flex items-center gap-1">
                          <Trash2 size={12} />
                          DELETE
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Product Count */}
        <div className="mt-4 text-sm text-gray-600">
          Showing 3 of 3 products
        </div>
      </main>
    </div>
  );
}
