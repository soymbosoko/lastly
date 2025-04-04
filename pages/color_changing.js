import { useState } from "react";

export default function Home() {
  const [color, setColor] = useState("");

  return (
    <div
      className={`flex flex-col items-center justify-center w-full h-screen transition-colors duration-500 ${
        color ? `bg-${color}-800` : "bg-white"
      }`}
    >
      <div className="space-y-4 w-[200px]">
        <button
          className="w-full py-3 rounded-xl bg-red-600 text-white font-semibold shadow-md hover:bg-red-700 transition-all duration-300"
          onClick={() => setColor("red")}
        >
          Улаан
        </button>
        <button
          className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition-all duration-300"
          onClick={() => setColor("blue")}
        >
          Цэнхэр
        </button>
        <button
          className="w-full py-3 rounded-xl bg-green-600 text-white font-semibold shadow-md hover:bg-green-700 transition-all duration-300"
          onClick={() => setColor("green")}
        >
          Ногоон
        </button>
        <button
          className="w-full py-3 rounded-xl bg-gray-400 text-white font-semibold shadow-md hover:bg-gray-500 transition-all duration-300"
          onClick={() => setColor("")}
        >
          Clear
        </button>
      </div>
    </div>
  );
}
