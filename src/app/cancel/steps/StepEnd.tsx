import React from "react";


export default function StepEnd() {
  return (
    <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-0 md:p-0 flex flex-col md:flex-row items-stretch overflow-hidden">
      <div className="flex-1 flex flex-col justify-between p-6">
        {/* Header & Progress */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-xs font-medium">
            <span className="bg-[#f7f7a1] text-gray-900 px-2 py-0.5 rounded">Subscription <span className="font-bold">Cancelled</span></span>
            <span className="text-green-600">●●● Completed</span>
          </div>
          <button className="text-gray-400 hover:text-gray-600 text-lg">×</button>
        </div>
        {/* Main Content */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2 text-gray-900">
            Your <span className="bg-yellow-200 px-1 rounded">cancellation</span>&rsquo;s all sorted, mate, no more charges.
          </h2>
          <p className="text-gray-700 mt-2">
            We&rsquo;re sorry to see you go!
          </p>
        </div>
        {/* Button */}
        <button
          className="w-full py-3 bg-[#8952fc] text-white rounded-lg font-semibold text-lg shadow hover:bg-[#7b40fc] transition-colors"
        >
          Return to Home
        </button>
      </div>
      <div className="flex-shrink-0 flex items-center justify-center bg-gray-50 p-6 md:p-0">
        <img
          src="/empire-state-compressed.jpg"
          alt="Empire State Building"
          width={320}
          height={180}
          className="rounded-xl object-cover shadow"
        />
      </div>
    </div>
  );
}
