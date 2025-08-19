'use client';

import React from "react";
import Image from "next/image";
import type { StepProps } from "../CancelFlow";

export default function StepJobQuestion({
  nextStep,
  onClose,
  form,
  setForm,
}: StepProps) {
  // Handler for answer
  function handleAnswer(answer: boolean) {
    nextStep(answer);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        fontFamily: "'Inter', 'Montserrat', Arial, Helvetica, sans-serif"
      }}
      // NO onClick={onClose} here!
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
        <div className="flex items-center w-full px-6 py-5 border-b border-gray-200">
          <span className="text-[1.25rem] font-bold text-gray-800">
            Subscription Cancellation
          </span>
          <button
            className="ml-auto text-gray-400 hover:text-gray-600"
            style={{
              fontSize: "2rem",
              fontWeight: "400",
              lineHeight: "1"
            }}
            aria-label="Close"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        {/* Main Content - responsive layout */}
        <div className="flex flex-col md:flex-row w-full flex-1 p-4 md:p-10 gap-8">
          {/* Image (mobile: on top, desktop: right) */}
          <div className="w-full md:w-2/5 flex items-center justify-center mb-4 md:mb-0">
            <Image
              src="/empire-state-compressed.jpg"
              alt="New York City skyline"
              width={400}
              height={220}
              className="w-full h-auto object-cover rounded-[18px] shadow-md"
              style={{
                borderRadius: "18px",
                maxHeight: "220px",
              }}
              priority
            />
          </div>
          {/* Content (mobile: below image, desktop: left) */}
          <div className="w-full md:w-3/5 flex flex-col justify-between">
            <div>
              <h1 className="font-bold text-2xl md:text-2xl leading-tight mb-2 text-gray-900">
                Hey mate,<br />
                Quick one before you go.
              </h1>
              <div className="font-bold italic text-xl md:text-xl mb-4 text-gray-900">
                <span>Have you found a job yet?</span>
              </div>
              <p className="text-gray-500 mb-6 text-base md:text-base">
                Whatever your answer, we just want to help you take the next step. With visa support, or by hearing how we can do better.
              </p>
            </div>
            {/* Divider */}
            <div className="w-full h-px bg-gray-200 mb-5" />
            {/* Buttons */}
            <div className="flex flex-col gap-3">
              <button
                onClick={() => handleAnswer(true)}
                className="w-full py-3 border border-gray-200 rounded-xl font-medium text-lg bg-white text-gray-800 transition-colors"
                style={{
                  borderRadius: "12px",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#bbb"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#e5e7eb"; }}
              >
                Yes, I’ve found a job
              </button>
              <button
                onClick={() => handleAnswer(false)}
                className="w-full py-3 border border-gray-200 rounded-xl font-medium text-lg bg-white text-gray-800 transition-colors"
                style={{
                  borderRadius: "12px",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#bbb"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#e5e7eb"; }}
              >
                Not yet – I’m still looking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}