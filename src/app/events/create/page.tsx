export default function CreateEventPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Side Navbar */}
      <nav className="bg-purple-500 flex justify-center items-center w-64 text-white text-2xl font-semibold">
        Side Navbar
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Create Event</h1>

        <div className="max-w-2xl">
          <div className="space-y-6">
            {/* Event Name */}
            <div>
              <div className="block text-sm font-medium text-gray-700 mb-2">
                Event Name
              </div>
              <input
                type="text"
                defaultValue="Hello World"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Description */}
            <div>
              <div className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </div>
              <textarea
                defaultValue="Lorem bla bla bla dasdsdasdsda"
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
              />
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <div className="block text-sm font-medium text-gray-700 mb-2">
                  Date
                </div>
                <input
                  type="text"
                  defaultValue="10/06/2568"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <div className="block text-sm font-medium text-gray-700 mb-2">
                  Time
                </div>
                <div className="flex gap-2">
                  <select className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white">
                    <option>08:00</option>
                    <option>09:00</option>
                    <option>10:00</option>
                    <option>11:00</option>
                  </select>
                  <span className="flex items-center text-gray-500">-</span>
                  <select className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white">
                    <option>16:00</option>
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Event Format */}
            <div>
              <div className="block text-sm font-medium text-gray-700 mb-2">
                Event Format
              </div>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white">
                <option>Online</option>
                <option>Offline</option>
                <option>Hybrid</option>
              </select>
            </div>

            {/* Location */}
            <div>
              <div className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </div>
              <input
                type="text"
                defaultValue="At Home"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Event Image */}
            <div>
              <div className="block text-sm font-medium text-gray-700 mb-2">
                Event Image
              </div>
              <input
                type="text"
                defaultValue="image/event-img.jpg"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Max Participant */}
            <div>
              <div className="block text-sm font-medium text-gray-700 mb-2">
                Max Participant
              </div>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white">
                <option>138</option>
                <option>50</option>
                <option>100</option>
                <option>200</option>
                <option>500</option>
              </select>
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
                <option>Draft</option>
                <option>Active</option>
                <option>Upcoming</option>
                <option>Completed</option>
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
