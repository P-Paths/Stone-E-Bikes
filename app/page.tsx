export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Stoney Bikes
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Premium E-Bikes & Accessories
        </p>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Demo Mode</h2>
          <p className="text-gray-600 mb-4">
            The site is running in demo mode with sample data.
          </p>
          <div className="space-y-2">
            <p className="text-sm text-gray-500">✅ Next.js App Router</p>
            <p className="text-sm text-gray-500">✅ Demo Products API</p>
            <p className="text-sm text-gray-500">✅ Ready for Supabase</p>
            <p className="text-sm text-gray-500">✅ Ready for Vercel</p>
          </div>
        </div>
      </div>
    </div>
  );
}
