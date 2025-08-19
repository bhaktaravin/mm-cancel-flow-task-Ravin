import React from "react";
import Image from "next/image";

export default function StepFinal() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="flex flex-col sm:flex-row max-w-[800px] bg-white rounded-[20px] shadow-[0_6px_20px_rgba(0,0,0,0.12)] overflow-hidden w-full">
        
        {/* Image Section */}
        <div className="w-full sm:w-1/2 relative h-[200px] sm:h-auto">
          <Image
            src="/empire-state-compressed.jpg"
            alt="Empire State Building"
            fill
            className="object-cover rounded-t-[20px] sm:rounded-none sm:rounded-r-[20px]"
            priority
          />
        </div>

        {/* Text Section */}
        <div className="w-full sm:w-1/2 p-8 flex flex-col justify-between">
          {/* Header & Progress */}
          <div className="flex items-center gap-3 mb-8">
            <span className="text-gray-500 text-sm font-medium">
              Subscription Cancelled
            </span>
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <span className="w-5 h-2 bg-[#00A67E] rounded-full"></span>
                <span className="w-5 h-2 bg-[#00A67E] rounded-full"></span>
                <span className="w-5 h-2 bg-[#00A67E] rounded-full"></span>
              </div>
              <span className="text-[#00A67E] text-sm font-medium">
                Completed
              </span>
            </div>
            <button className="ml-auto text-gray-400 hover:text-gray-600 text-lg">
              ×
            </button>
          </div>

          {/* Main Content */}
          <div className="space-y-4 mb-8">
            <h1 className="text-[28px] sm:text-[32px] font-semibold text-gray-900 leading-snug">
              All done, your cancellation&apos;s been processed.
            </h1>
            <p className="text-[16px] text-gray-500 leading-relaxed">
              We&apos;re stoked to hear you&apos;ve landed a job and sorted your visa.
              <br />
              Big congrats from the team. 🙌
            </p>
          </div>

          {/* Button */}
          <button className="w-full py-3.5 bg-[#8952FC] text-white rounded-xl sm:rounded-2xl font-medium text-[16px] hover:bg-[#7b40fc] transition-colors">
            Finish
          </button>
        </div>
      </div>
    </div>
  );
}