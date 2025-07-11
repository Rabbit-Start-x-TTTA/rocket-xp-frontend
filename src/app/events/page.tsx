import { Edit, Trash2, QrCode } from "lucide-react";
import Link from "next/link";
import events from "./data";

export default function EventManagementPage() {
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
            Event Management
          </h1>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-6">
            <button className="bg-purple-400 hover:bg-purple-500 text-white px-6 py-2 rounded-md font-medium transition-colors">
              <Link href="/event-management/create">ADD</Link>
            </button>
            <button className="bg-purple-400 hover:bg-purple-500 text-white px-6 py-2 rounded-md font-medium transition-colors">
              EXPORT
            </button>
            <button className="bg-purple-400 hover:bg-purple-500 text-white px-6 py-2 rounded-md font-medium transition-colors ml-auto">
              FILTER
            </button>
          </div>
        </div>

        {/* Events Table */}
        <div className="bg-purple-200 rounded-lg overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-purple-300">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Image
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Name
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Date
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Time
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Format
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Participants count
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    XP
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    QR Code
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Option
                  </th>
                </tr>
              </thead>
              <tbody className="bg-purple-200">
                {events.map((event) => (
                  <tr
                    key={event.id}
                    className="border-b border-purple-300 hover:bg-purple-150"
                  >
                    <td className="px-4 py-3">
                      <div className="w-10 h-10 bg-gray-300 rounded-md flex items-center justify-center">
                        <span className="text-xs text-gray-600">IMG</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {event.name}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {event.date}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {event.time}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {event.format}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {event.participants}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {event.xp}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          event.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {event.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded text-xs font-medium transition-colors flex items-center gap-1">
                        <QrCode size={12} />
                        QR Code
                      </button>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-xs font-medium transition-colors flex items-center gap-1">
                          <Edit size={12} />
                          Edit
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
      </main>
    </div>
  );
}
