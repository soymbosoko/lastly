'use client'
import React, { useState } from "react";
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();
  const [count, SetCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-black text-center space-y-5 relative">
      
      <button
        onClick={() => router.push('/')}
        className="absolute top-4 left-4 text-cyan-300 border border-cyan-400 px-4 py-2 rounded-lg shadow-md hover:bg-cyan-900 transition-all duration-300"
      >
        BACK
      </button>

      
      <button
        className="h-12 w-40 text-cyan-300 border-2 border-cyan-400 rounded-2xl font-semibold shadow-lg hover:bg-cyan-900 transition-all duration-300"
        onClick={() => SetCount(count + 1)}
      >
        Click
      </button>

    
      <p className="text-xl font-medium text-cyan-300 border border-cyan-400 px-4 py-2 rounded-lg shadow-md">
        Click count: {count}
      </p>
    </div>
  );
}
