'use client';

import React, { useState } from "react";
import type { StepProps } from "../../CancelFlow";

export default function StepThreeSurvey({ form, setForm, nextStep, prevStep, onClose }: StepProps) {
  const [otherFeedback, setOtherFeedback] = useState<string>(form.otherFeedback ?? "");

  function handleContinue() {
    setForm((f: typeof form) => ({
      ...f,
      otherFeedback,
    }));
    nextStep();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
      <div
        className="bg-white rounded-[24px] shadow-xl w-full overflow-hidden flex flex-col"
        style={{ maxWidth: "600px", maxHeight: "90vh" }}
        onClick={e => e.stopPropagation()}
      >
        {/* Top Nav */}
        <div className="flex items-center px-8 py-6 border-b border-gray-200">
          <button
            className="text-gray-600 font-medium text-lg flex items-center mr-4"
            onClick={prevStep}
          >
            <span className="mr-2 text-xl">&#8592;</span> Back
          </button>
          <span className="font-medium text-lg flex-1 text-center" style={{ color: "#4b5563" }}>
            Subscription Cancellation
          </span>
          <span className="text-gray-500 text-base ml-3">Step 4 of 4</span>
          <button className="text-gray-400 hover:text-gray-600 text-2xl font-light ml-6"
            style={{ fontWeight: "300" }}
            onClick={onClose}>×</button>
        </div>
        {/* Main Content */}
        <div className="flex flex-col w-full flex-1 p-8 gap-6">
          <h2 className="font-bold text-2xl mb-3" style={{ color: "#111827" }}>
            Anything else you&apos;d like to share?
          </h2>
          <textarea
            className="border rounded-lg p-3 w-full text-base"
            rows={4}
            placeholder="Other feedback (optional)"
            value={otherFeedback}
            onChange={e => setOtherFeedback(e.target.value)}
          />
          {/* Buttons */}
          <div className="flex flex-col gap-3 mt-6">
            <button
              className={`w-full py-3 rounded-xl font-semibold text-lg bg-[#56C26A] text-white`}
              style={{ fontWeight: "600", borderRadius: "10px" }}
              onClick={handleContinue}
            >
              Submit Survey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}