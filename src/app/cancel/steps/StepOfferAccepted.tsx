'use client';

import React from "react";
import Image from "next/image";

type Props = {
  nextStep: () => void;
  isOpen: boolean;
  onClose: () => void;
};

export default function StepJobSuggestions({ nextStep, isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        fontFamily: "'Inter', 'Montserrat', Arial, Helvetica, sans-serif",
      }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-[24px] shadow-xl w-full overflow-hidden flex flex-col"
        style={{
          maxWidth: "900px",
          maxHeight: "90vh",
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-center px-8 py-6 border-b border-gray-200 relative">
          <span
            className="font-medium text-lg"
            style={{
              color: "#4b5563",
              fontFamily: "'Inter', 'Montserrat', Arial, Helvetica, sans-serif",
            }}
          >
            Subscription
          </span>
          <button
            className="absolute right-8 text-gray-400 hover:text-gray-600 text-2xl font-light"
            style={{ fontWeight: "300" }}
            onClick={onClose}
          >
            ×
          </button>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row w-full flex-1 p-4 md:p-10 gap-8">
          {/* Left Column */}
          <div className="w-full md:w-[55%] flex flex-col justify-between">
            <div>
              <h2
                className="font-bold leading-tight mb-2 text-2xl md:text-3xl"
                style={{
                  color: "#111827",
                  fontFamily: "'Inter', 'Montserrat', Arial, Helvetica, sans-serif",
                  fontWeight: "700",
                  lineHeight: "1.1",
                }}
              >
                Awesome — we&apos;ve pulled together<br />
                a few roles that seem like a great fit for you.
              </h2>
              <div className="mb-4 text-base text-gray-700 font-medium">
                Take a look and see what sparks your interest.
              </div>
              {/* JOB CARD */}
              <div className="rounded-xl border border-[#E5E7EB] bg-[#F9F9FB] px-5 py-6 mb-4 shadow-sm">
                {/* Job Header */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-[#EEF0FA] rounded-lg flex items-center justify-center w-10 h-10">
                    {/* Placeholder for company logo */}
                    <span className="text-[#7C5CFA] text-lg font-bold">T</span>
                  </div>
                  <div>
                    <div className="font-bold text-lg text-[#222]">Automation Controls Engineer</div>
                    <div className="text-xs text-gray-500">Randstad USA &bull; Memphis, Tennessee</div>
                  </div>
                </div>
                {/* Job Tags */}
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full text-xs bg-[#F3F4F6] text-[#111827] font-medium">Full Time</span>
                  <span className="px-3 py-1 rounded-full text-xs bg-[#F3F4F6] text-[#111827] font-medium">Associate</span>
                  <span className="px-3 py-1 rounded-full text-xs bg-[#F3F4F6] text-[#111827] font-medium">Bachelor&apos;s</span>
                  <span className="px-3 py-1 rounded-full text-xs bg-[#F3F4F6] text-[#111827] font-medium">On-Site</span>
                </div>
                {/* Salary and badges */}
                <div className="flex flex-wrap gap-2 mb-2 items-center">
                  <span className="text-[#56C26A] font-bold text-base bg-[#EAFAEF] px-2 py-1 rounded">NEW JOB</span>
                  <span className="font-bold text-base text-[#222]">$150,000/yr - $170,000/yr</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-[#F3F4F6] text-[#222]">Visas sponsored by company in the last year</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-[#D1FAE5] text-[#10B981] font-medium">Green Card</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-[#F3F4F6] text-[#222]">EAD</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-[#F3F4F6] text-[#222]">O-1/H1B TN</span>
                </div>
                {/* Description */}
                <div className="text-xs text-gray-500 mb-2">
                  The Electrical Automation Controls Engineer will design, implement, and maintain industrial automation systems, specializing in PLC programming using Siemens TIA Portal. The ideal candidate should have a bachelor&apos;s degree in Electrical engineering and at least 4 years of industrial automation experience. This role offers amazing growth and is ideal for someone seeking growth in a supportive company. Key benefits include comprehensive healthcare and retirement plans.
                </div>
                {/* Contact and actions */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2 justify-between">
                  <span className="text-xs text-gray-600">Company visa contact: <span className="underline">barbara.tuck@randstadusa.com</span></span>
                  <div className="flex gap-2">
                    <button
                      className="px-4 py-2 rounded-lg border border-gray-300 bg-white font-medium text-xs text-gray-600 hover:bg-gray-100"
                      style={{ fontFamily: "'Inter', 'Montserrat', Arial, Helvetica, sans-serif" }}
                    >
                      Save Job
                    </button>
                    <button
                      className="px-4 py-2 rounded-lg bg-[#7C5CFA] text-white font-semibold text-xs hover:bg-[#6F4AEF]"
                      style={{ fontFamily: "'Inter', 'Montserrat', Arial, Helvetica, sans-serif" }}
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* CTA Button */}
            <button
              onClick={nextStep}
              className="w-full py-4 rounded-2xl font-semibold text-lg bg-[#8952fc] text-white transition-colors"
              style={{
                fontFamily: "'Inter', 'Montserrat', Arial, Helvetica, sans-serif",
                fontWeight: "600",
                borderRadius: "16px",
                marginTop: "12px",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = "#7b40fc";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = "#8952fc";
              }}
            >
              Land your dream role
            </button>
          </div>
          {/* Right Column - Image */}
          <div className="w-full md:w-[45%] flex items-center justify-center mb-4 md:mb-0">
            <Image
              src="/empire-state-compressed.jpg"
              alt="Empire State Building"
              width={500}
              height={320}
              className="w-full h-auto object-cover shadow-lg rounded-[24px]"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}