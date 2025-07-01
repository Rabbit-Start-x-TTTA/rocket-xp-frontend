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
              Edit
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-medium transition-colors">
              DELETE
            </button>
          </div>
        </div>

        <div className="max-w-4xl">
          <div className="space-y-6">
            {/* Event Name */}
            <div>
              <div className="block text-sm font-medium text-gray-700 mb-2">
                Event Name
              </div>
              <div className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700">
                Hello World
              </div>
            </div>

            {/* Description */}
            <div>
              <div className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </div>
              <div className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700 min-h-[80px]">
                Lorem bla bla bla dasdsdasdsda
              </div>
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <div className="block text-sm font-medium text-gray-700 mb-2">
                  Date
                </div>
                <div className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700">
                  10/06/2568
                </div>
              </div>
              <div>
                <div className="block text-sm font-medium text-gray-700 mb-2">
                  Time
                </div>
                <div className="flex gap-2 items-center">
                  <div className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700">
                    08:00
                  </div>
                  <span className="text-gray-500">-</span>
                  <div className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700">
                    16:00
                  </div>
                </div>
              </div>
            </div>

            {/* Event Format */}
            <div>
              <div className="block text-sm font-medium text-gray-700 mb-2">
                Event Format
              </div>
              <div className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700">
                Onsite
              </div>
            </div>

            {/* Location */}
            <div>
              <div className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </div>
              <div className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700">
                At Home
              </div>
            </div>

            {/* Event Image */}
            <div>
              <div className="block text-sm font-medium text-gray-700 mb-2">
                Event Image
              </div>
              <div className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700">
                image/event-img.jpg
              </div>
            </div>

            {/* Max Participant with View Button */}
            <div>
              <div className="block text-sm font-medium text-gray-700 mb-2">
                Max Participant
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-32 px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700">
                  138
                </div>
                <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md font-medium transition-colors">
                  VIEW PARTICIPANT
                </button>
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

            {/* QR Code Section */}
            <div>
              <div className="block text-sm font-medium text-gray-700 mb-4">
                QR Code
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Check In QR */}
                <div className="text-center">
                  <div className="mb-2 text-sm font-medium text-gray-600">
                    Check In
                  </div>
                  <div className="bg-white p-4 rounded-lg border-2 border-gray-300 inline-block">
                    <div className="w-32 h-32 bg-black relative">
                      {/* QR Code Pattern Simulation */}
                      <div className="absolute inset-0 grid grid-cols-8 gap-px p-1">
                        {[...Array(64)].map((_, i) => (
                          <div
                            key={i}
                            className={`${
                              Math.random() > 0.5 ? "bg-white" : "bg-black"
                            } w-full h-full`}
                          />
                        ))}
                      </div>
                      {/* Corner squares */}
                      <div className="absolute top-1 left-1 w-6 h-6 border-2 border-white bg-black">
                        <div className="absolute top-1 left-1 w-2 h-2 bg-white"></div>
                      </div>
                      <div className="absolute top-1 right-1 w-6 h-6 border-2 border-white bg-black">
                        <div className="absolute top-1 left-1 w-2 h-2 bg-white"></div>
                      </div>
                      <div className="absolute bottom-1 left-1 w-6 h-6 border-2 border-white bg-black">
                        <div className="absolute top-1 left-1 w-2 h-2 bg-white"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Check Out QR */}
                <div className="text-center">
                  <div className="mb-2 text-sm font-medium text-gray-600">
                    Check Out
                  </div>
                  <div className="bg-white p-4 rounded-lg border-2 border-gray-300 inline-block">
                    <div className="w-32 h-32 bg-black relative">
                      {/* QR Code Pattern Simulation */}
                      <div className="absolute inset-0 grid grid-cols-8 gap-px p-1">
                        {[...Array(64)].map((_, i) => (
                          <div
                            key={`qr2-${i}`}
                            className={`${
                              Math.random() > 0.4 ? "bg-white" : "bg-black"
                            } w-full h-full`}
                          />
                        ))}
                      </div>
                      {/* Corner squares */}
                      <div className="absolute top-1 left-1 w-6 h-6 border-2 border-white bg-black">
                        <div className="absolute top-1 left-1 w-2 h-2 bg-white"></div>
                      </div>
                      <div className="absolute top-1 right-1 w-6 h-6 border-2 border-white bg-black">
                        <div className="absolute top-1 left-1 w-2 h-2 bg-white"></div>
                      </div>
                      <div className="absolute bottom-1 left-1 w-6 h-6 border-2 border-white bg-black">
                        <div className="absolute top-1 left-1 w-2 h-2 bg-white"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
