import React from "react";
import Image from "next/image";

export default function StepTeamMemberCard() {
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
          <div className="flex items-center gap-4 mt-4">
            <Image
              src="/mihailo-profile.jpeg"
              alt="Mihailo Bexic"
              width={56}
              height={56}
              className="rounded-full object-cover border border-gray-200"
            />
            <div>
              <div className="font-semibold text-gray-900">Mihailo Bexic</div>
              <div className="text-xs text-gray-500">mihailo@migratemate.co</div>
            </div>
          </div>
          <p className="text-gray-700 mt-4 text-sm">
            I’ll be reaching out soon to help with the visa side of things.<br />
            We’ve got your back, whether it’s questions, paperwork, or just figuring out your options.<br />
            Keep an eye on your inbox, I’ll be in touch shortly.
          </p>
        </div>
        {/* Button */}
        <button
          className="w-full py-3 bg-[#8952fc] text-white rounded-lg font-semibold text-lg shadow hover:bg-[#7b40fc] transition-colors"
        >
          Finish
        </button>
      </div>
      <div className="flex-shrink-0 flex items-center justify-center bg-gray-50 p-6 md:p-0">
        <Image
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
