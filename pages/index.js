import { useRouter } from 'next/router';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-pink-100 to-blue-100">
      <div className="space-x-6">
        <button
          className="px-6 py-3 rounded-2xl bg-red-400 text-white font-semibold shadow-lg hover:bg-red-500 transition-all duration-300"
          onClick={() => router.push("/color_changing")}
        >
          Hicheel 1
        </button>
        <button
          className="px-6 py-3 rounded-2xl bg-blue-400 text-white font-semibold shadow-lg hover:bg-blue-500 transition-all duration-300"
          onClick={() => router.push("/name")}
        >
          Hicheel 2
        </button>
        <button
          className="px-6 py-3 rounded-2xl bg-green-400 text-white font-semibold shadow-lg hover:bg-blue-500 transition-all duration-300"
          onClick={() => router.push("/click_counter")}
        >
          Hicheel 3
        </button>
        <button
          className="px-6 py-3 rounded-2xl bg-yellow-400 text-white font-semibold shadow-lg hover:bg-blue-500 transition-all duration-300"
          onClick={() => router.push("/biy_daalt")}
        >
          Hicheel 4
        </button>
      </div>
    </div>
  );
}
