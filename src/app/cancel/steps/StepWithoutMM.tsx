import React from "react";
import Image from "next/image";


export default function StepWithoutMM({ nextStep, prevStep }: { nextStep: (data?: boolean) => void; prevStep: () => void }) {
  return (
    <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-0 md:p-0 flex flex-col md:flex-row items-stretch overflow-hidden">
      <div className="flex-1 flex flex-col justify-between p-6">
        {/* Header & Progress */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-xs font-medium">
            <span className="bg-[#f7f7a1] text-gray-900 px-2 py-0.5 rounded">Subscription <span className="font-bold">Cancellation</span></span>
            <span className="text-green-600">●○○ Step 1 of 3</span>
          </div>
          <button className="text-gray-400 hover:text-gray-600 text-lg">×</button>
        </div>
        {/* Main Content */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2 text-gray-900">
            You landed the job!<br />
            <span className="italic">That&apos;s what we live for.</span>
          </h2>
          <p className="text-gray-700 mt-2">
            Even if it wasn&apos;t through Migrate Mate, let us help get your visa sorted.
          </p>
          <p className="text-gray-700 mt-2">
            Is your company providing an immigration lawyer to help with your visa?
          </p>
        </div>
        {/* Buttons */}
        <div className="space-y-3">
          <button
            onClick={() => nextStep(true)}
            className="w-full py-3 bg-[#8952fc] text-white rounded-lg font-semibold text-lg shadow hover:bg-[#7b40fc] transition-colors"
          >
            Yes
          </button>
          <button
            onClick={() => nextStep(false)}
            className="w-full py-3 bg-gray-100 text-gray-900 rounded-lg font-semibold text-lg hover:bg-gray-200 transition-colors"
          >
            No
          </button>
          <button
            onClick={prevStep}
            className="w-full text-sm text-gray-500 hover:text-gray-700 underline py-2"
          >
            Back
          </button>
        </div>
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
