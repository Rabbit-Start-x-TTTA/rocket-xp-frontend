import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🚀 Rocket XP Frontend
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A modern Next.js application with TypeScript, Tailwind CSS, Auth.js, and shadcn/ui
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-2xl mb-2">⚡</div>
              <h3 className="font-semibold text-gray-900 mb-2">Next.js 15</h3>
              <p className="text-sm text-gray-600">Latest App Router with Turbopack</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-2xl mb-2">🔒</div>
              <h3 className="font-semibold text-gray-900 mb-2">Auth.js</h3>
              <p className="text-sm text-gray-600">Secure authentication with OAuth</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-2xl mb-2">🎨</div>
              <h3 className="font-semibold text-gray-900 mb-2">shadcn/ui</h3>
              <p className="text-sm text-gray-600">Beautiful, accessible components</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-2xl mb-2">💙</div>
              <h3 className="font-semibold text-gray-900 mb-2">TypeScript</h3>
              <p className="text-sm text-gray-600">Full type safety throughout</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/auth/signin"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                🔐 Try Authentication
              </Link>
              
              <a 
                href="https://github.com/your-username/rocket-xp-frontend"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-900 transition-colors"
              >
                📖 View Documentation
              </a>
            </div>
            
            <p className="text-sm text-gray-500 mt-8">
              Check out the <code className="bg-gray-100 px-2 py-1 rounded">SETUP.md</code> file for detailed configuration instructions
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
