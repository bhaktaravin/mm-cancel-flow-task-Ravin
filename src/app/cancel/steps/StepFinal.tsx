import React from "react";

export default function StepFinal() {
  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-2xl font-bold mb-4 text-[#8952fc]">Cancellation Complete</h2>
      <p className="mb-6 text-gray-700">
        Your request has been processed. We’re sorry to see you go!
      </p>
      <img
        src="/profile-image.png"
        alt="Profile"
        className="w-24 h-24 mb-4 rounded-full object-cover"
      />
      <a
        href="/"
        className="px-6 py-3 bg-gray-100 text-[#8952fc] rounded-lg font-medium hover:bg-gray-200 transition-colors"
      >
        Return to Home
      </a>
    </div>
  );
}