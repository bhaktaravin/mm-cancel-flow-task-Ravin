'use client';

import React from 'react';
import Image from 'next/image';

type Props = {
  form?: {
    gotJob?: boolean;
  };
  nextStep?: () => void;
};

const StepEnd: React.FC<Props> = ({ form = {}, nextStep = () => {} }) => {
  return (
    <div className="w-full max-w-[460px] md:max-w-[800px] mx-auto">
      <div className="bg-white rounded-xl md:rounded-3xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Content Section */}
          <div className="flex-1 p-6 md:p-8">
            {/* Header & Progress */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[#1D1D1F] text-sm md:text-[15px]">Subscription Cancelled</span>
                <div className="flex items-center gap-1">
                  <span className="text-[#00A67E] text-base md:text-xl leading-none">●●●</span>
                  <span className="text-[#00A67E] text-sm md:text-[15px]">Completed</span>
                </div>
              </div>
              <button className="text-[#98989A] hover:text-gray-600 text-xl md:text-2xl">×</button>
            </div>

            {/* Content */}
            <div className="space-y-4 mb-6 md:mb-8">
              <h1 className="text-[22px] md:text-[40px] font-bold text-[#1D1D1F] leading-tight">
                All done, your cancellation&rsquo;s been processed.
              </h1>
              <p className="text-sm md:text-[18px] text-[#1D1D1F]">
                {form.gotJob 
                  ? "We're stoked to hear you've landed a job and sorted your visa. Big congrats from the team 🙌"
                  : "We're sorry to see you go! Wishing you the best of luck with your job search ✨"}
              </p>
            </div>

            {/* Button */}
            <button
              onClick={nextStep}
              className="w-full md:w-64 py-2.5 md:py-4 bg-[#8952FC] text-white rounded-lg md:rounded-xl font-medium text-sm md:text-[16px] hover:bg-[#7b40fc] transition-colors"
            >
              Finish
            </button>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-[400px] h-[180px] md:h-auto relative bg-[#F5F5F7] md:bg-transparent">
            <Image
              src={form.gotJob ? "/empire-state-compressed.jpg" : "/window.svg"}
              alt={form.gotJob ? "Empire State Building" : "Window illustration"}
              fill
              className="object-contain md:object-cover p-2 md:p-0"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepEnd;
