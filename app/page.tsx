// pages/index.js
export default function LandingPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-4 text-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">Posturous</h1>
      <p className="text-lg md:text-xl max-w-xl mb-8">
        Your AI-powered personal trainer — get real-time feedback on your form using Computer Vision, Pose Estimation, and Machine Learning.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a href="#" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-2xl shadow-md transition-all">
          Coming Soon
        </a>
        <a href="#" className="border border-white hover:bg-white hover:text-black font-semibold py-3 px-6 rounded-2xl transition-all">
          Learn More
        </a>
      </div>
      <div className="mt-16 text-sm text-gray-400">&copy; {new Date().getFullYear()} Posturous. All rights reserved.</div>
    </main>
  );
}
