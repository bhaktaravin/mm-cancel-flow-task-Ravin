'use client';

import React, { useState } from "react";
import type { StepProps } from "../../CancelFlow";

export default function StepTwoSurvey({ form, setForm, nextStep, prevStep, onClose }: StepProps) {
  const [platformHelpfulness, setPlatformHelpfulness] = useState<string>(form.platformHelpfulness ?? "");
  const [comments, setComments] = useState<string>(form.platformComments ?? "");

  const canContinue = platformHelpfulness !== "";

  function handleContinue() {
    setForm((f: typeof form) => ({
      ...f,
      platformHelpfulness,
      platformComments: comments,
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
          <span className="text-gray-500 text-base ml-3">Step 3 of 4</span>
          <button className="text-gray-400 hover:text-gray-600 text-2xl font-light ml-6"
            style={{ fontWeight: "300" }}
            onClick={onClose}>×</button>
        </div>
        {/* Main Content */}
        <div className="flex flex-col w-full flex-1 p-8 gap-6">
          <h2 className="font-bold text-2xl mb-3" style={{ color: "#111827" }}>
            How helpful was the platform for your job search?
          </h2>
          <div className="flex gap-3 mb-4">
            {["Very helpful", "Somewhat helpful", "Not helpful"].map(opt => (
              <button
                key={opt}
                className={`flex-1 py-2 rounded-lg border text-base font-semibold
                  ${platformHelpfulness === opt ? "bg-[#222] text-white border-[#222]" : "border-gray-200 bg-[#F8F8F8] text-gray-700"}
                `}
                onClick={() => setPlatformHelpfulness(opt)}
              >
                {opt}
              </button>
            ))}
          </div>
          <textarea
            className="border rounded-lg p-3 w-full text-base"
            rows={3}
            placeholder="Any comments or feedback?"
            value={comments}
            onChange={e => setComments(e.target.value)}
          />
          {/* Buttons */}
          <div className="flex flex-col gap-3 mt-6">
            <button
              className={`w-full py-3 rounded-xl font-semibold text-lg ${canContinue ? "bg-[#56C26A] text-white" : "bg-[#EAEAEA] text-gray-400"}`}
              style={{ fontWeight: "600", borderRadius: "10px" }}
              onClick={canContinue ? handleContinue : undefined}
              disabled={!canContinue}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}