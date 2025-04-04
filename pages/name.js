import { useState } from "react";
import { useRouter } from "next/router";

export default function Lab3() {
  const [name, setName] = useState("");
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white px-4">
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-md space-y-4">
        <label className="block text-lg font-semibold">
          Нэр оруулах:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Нэрээ бичнэ үү !"
            className="mt-2 w-full px-4 py-2 rounded-lg border border-cyan-400 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
          />
        </label>
        <p className="text-xl text-cyan-300 font-medium">
          Сайн уу, {name === "" ? "сурагч" : name}!
        </p>
        <button
          onClick={() => router.back()}
          className="mt-4 w-full bg-cyan-600 hover:bg-cyan-500 text-white py-2 px-4 rounded-lg transition duration-300"
        >
          Буцах
        </button>
      </div>
    </div>
  );
}
