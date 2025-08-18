

    'use client';

import React from "react";
import Image from "next/image";

type Props = {
  nextStep: (data?: boolean) => void;
  prevStep: () => void;
};

export default function StepOffer({ nextStep, prevStep }: Props) {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="flex flex-col sm:flex-row bg-white rounded-[32px] shadow-[0_0_40px_rgba(0,0,0,0.03)] w-[460px] sm:w-[800px] overflow-hidden">
        {/* Content Section */}
        <div className="sm:w-[400px] p-6">
          {/* Header */}
          <div className="flex items-center gap-2 mb-10">
            <div className="bg-[#FFFEC2] px-3 py-1 rounded text-sm">
              Subscription Cancellation
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#00A67E] text-[15px]">●●●</span>
              <span className="text-[#00A67E] text-[15px]">Step 3 of 3</span>
            </div>
            <button className="ml-auto text-[#98989A] text-2xl leading-none hover:text-gray-600">×</button>
          </div>

          {/* Content */}
          <div className="space-y-4 mb-12">
            <h1 className="text-[40px] font-bold text-[#1D1D1F] leading-[1.1]">
              Before you go...
            </h1>
            <div className="text-[18px] text-[#1D1D1F] space-y-1">
              <p>Stay and save!</p>
              <p>Get <span className="font-medium">$10 off</span> your monthly plan.</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-3">
            <button
              onClick={() => nextStep(true)}
              className="w-full py-4 bg-[#8952FC] text-white rounded-xl font-medium text-[16px] hover:bg-[#7b40fc] transition-colors"
            >
              Accept Offer
            </button>
            <button
              onClick={() => nextStep(false)}
              className="w-full py-4 text-[#1D1D1F] hover:bg-gray-50 transition-colors text-[16px]"
            >
              Decline Offer
            </button>
            <button
              onClick={prevStep}
              className="w-full py-2 text-[#98989A] hover:text-gray-600 text-[14px]"
            >
              Back
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full sm:w-[400px] h-[200px] sm:h-auto relative">
          <Image
            src="/empire-state-compressed.jpg"
            alt="Empire State Building"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}

