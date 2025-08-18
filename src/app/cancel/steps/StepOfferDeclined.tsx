import React from "react";
import Image from "next/image";

export default function StepOfferDeclined({ nextStep, form }: { nextStep: () => void, form: { gotJob?: boolean | null } }) {
  return (
    <div className="max-w-[1200px] mx-auto bg-white rounded-2xl shadow-lg flex flex-col md:flex-row items-stretch overflow-hidden">
      <div className="flex-1 flex flex-col justify-between p-6 md:p-12 relative">
        {/* Header & Progress */}
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div className="flex items-center gap-3 text-xs md:text-sm font-medium">
            <span className="bg-[#f7f7a1] text-gray-900 px-3 py-1 rounded-md">
              Subscription <span className="font-bold">Cancelled</span>
            </span>
            <span className="text-green-600">●●● Completed</span>
          </div>
          <button className="text-gray-400 hover:text-gray-600 text-xl md:text-2xl">×</button>
        </div>
        {/* Main Content */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-900 leading-tight">
            All done, your <span className="bg-yellow-200 px-2 py-1 rounded-md">cancellation</span>&rsquo;s been processed.
          </h2>
          <p className="text-gray-700 text-base md:text-xl mt-4">
            {form.gotJob 
              ? "We're stoked to hear you've landed a job and sorted your visa. Big congrats from the team 🙌"
              : "We're sorry to see you go! Wishing you the best of luck with your job search 🌟"}
          </p>
          <div className="flex items-center gap-4 mt-8 relative z-10">
            <div className="w-12 h-12 md:w-16 md:h-16 relative">
              <Image 
                src="/mihailo-profile.jpeg" 
                alt="Profile picture" 
                fill
                sizes="(max-width: 768px) 48px, 64px"
                className="rounded-full object-cover"
                priority
              />
            </div>
            <div>
              <p className="font-medium text-gray-900 text-base md:text-lg">Mihailo</p>
              <p className="text-sm md:text-base text-gray-500">Product Lead</p>
            </div>
          </div>
        </div>
        {/* Button */}
        <button
          onClick={nextStep}
          className="w-full py-4 md:py-5 bg-[#8952fc] text-white rounded-xl font-semibold text-lg md:text-xl shadow-lg hover:bg-[#7b40fc] transition-colors"
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