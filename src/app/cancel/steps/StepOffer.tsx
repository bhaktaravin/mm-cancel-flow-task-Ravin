'use client';

import React from "react";
import Image from "next/image";
import type { StepProps } from "../CancelFlow";

export default function StepOffer({
  nextStep,
  prevStep,
  onClose,
  form,
  setForm,
}: StepProps) {
  // No isOpen check!

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      tabIndex={-1}
      aria-modal="true"
      role="dialog"
      // REMOVE onClick={onClose} here!
    >
      <div 
        className="bg-white rounded-[24px] shadow-xl w-full overflow-hidden flex flex-col"
        style={{ maxWidth: '900px', maxHeight: '90vh' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Top Navigation */}
        <div className="flex items-center px-8 py-6 border-b border-gray-200 relative">
          <button
            className="text-gray-600 font-medium text-lg flex items-center mr-2"
            onClick={prevStep}
          >
            <span className="mr-2 text-xl">&#8592;</span> Back
          </button>
          <span className="font-medium text-lg flex-1 text-center text-gray-600">
            Subscription Cancellation
          </span>
          <div className="flex items-center gap-2 ml-auto">
            <div className="flex items-center gap-1">
              <span className="inline-block w-5 h-2 rounded-full bg-[#D9D9D9]" />
              <span className="inline-block w-5 h-2 rounded-full bg-[#D9D9D9]" />
              <span className="inline-block w-5 h-2 rounded-full bg-[#D9D9D9]" />
            </div>
            <span className="text-gray-500 text-base ml-3">Step 1 of 3</span>
          </div>
          <button
            className="absolute right-8 text-gray-400 hover:text-gray-600 text-2xl font-light"
            aria-label="Close"
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
              <h2 className="font-bold leading-tight mb-2 text-2xl md:text-3xl text-gray-900">
                We built this to help you land the job, this makes it a little easier.
              </h2>
              <p className="leading-relaxed text-lg md:text-xl mb-6 text-gray-600 font-medium">
                We&apos;ve been there and we&apos;re here to help you.
              </p>
              {/* Offer Box */}
              <div className="rounded-xl border border-[#C5B6F6] bg-[#F6F4FF] px-5 py-6 mb-4 text-center shadow-sm">
                <div className="font-bold text-lg md:text-xl mb-1 text-gray-900">
                  Here&apos;s 50% off until you find a job.
                </div>
                <div className="flex items-center justify-center gap-3 mb-3">
                  <span className="text-[#7C5CFA] text-2xl md:text-3xl font-bold">$12.50/month</span>
                  <span className="text-gray-400 line-through text-lg md:text-xl">$25/month</span>
                </div>
                <button
                  onClick={() => nextStep({ downsellAccepted: true })}
                  className="w-full py-3 rounded-xl font-bold text-lg bg-[#56C26A] text-white transition-colors mb-1"
                >
                  Get 50% off
                </button>
                <div className="text-xs mt-2 text-gray-500">
                  You won&apos;t be charged until your next billing date.
                </div>
              </div>
            </div>
            {/* No thanks button */}
            <button
              onClick={() => nextStep({ downsellAccepted: false })}
              className="w-full py-3 border border-gray-300 rounded-xl font-medium bg-white text-gray-900 text-base mt-2"
            >
              No thanks
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