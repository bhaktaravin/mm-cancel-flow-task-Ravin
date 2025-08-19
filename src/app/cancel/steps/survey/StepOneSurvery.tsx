'use client';

import React, { useState } from "react";
import Image from "next/image";
import type { StepProps } from "../../CancelFlow";

const optionsApply = ["0", "1-5", "6-20", "20+"];
const optionsEmail = ["0", "1-5", "6-20", "20+"];
const optionsInterview = ["0", "1-2", "3-5", "5+"];

export default function StepOneSurvey({
  form,
  setForm,
  prevStep,
  nextStep,
  isOpen,
  onClose,
}: StepProps) {
  if (!isOpen) return null;

  const [apply, setApply] = useState<string>(form.surveyApply ?? "");
  const [email, setEmail] = useState<string>(form.surveyEmail ?? "");
  const [interview, setInterview] = useState<string>(form.surveyInterview ?? "");

  const canContinue = apply && email && interview;

  function handleContinue() {
    setForm((f: typeof form) => ({
      ...f,
      surveyApply: apply,
      surveyEmail: email,
      surveyInterview: interview,
    }));
    nextStep();
  }

  // Placeholder for green button action
  function openOfferModal() {
    // TODO: Implement modal logic here
    alert("Offer modal should open here!");
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        fontFamily: "'Inter', 'Montserrat', Arial, Helvetica, sans-serif",
      }}
    >
      <div
        className="bg-white rounded-[24px] shadow-xl w-full overflow-hidden flex flex-col"
        style={{
          maxWidth: "900px",
          maxHeight: "90vh",
        }}
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
          <span className="font-medium text-lg flex-1 text-center"
            style={{ color: "#4b5563" }}
          >
            Subscription Cancellation
          </span>
          <div className="flex items-center gap-2 ml-auto">
            <div className="flex items-center gap-1">
              <span className="inline-block w-5 h-2 rounded-full bg-[#A3E3C7]" />
              <span className="inline-block w-5 h-2 rounded-full bg-[#A3E3C7]" />
              <span className="inline-block w-5 h-2 rounded-full bg-[#D9D9D9]" />
            </div>
            <span className="text-gray-500 text-base ml-3">Step 2 of 3</span>
          </div>
          <button
            className="text-gray-400 hover:text-gray-600 text-2xl font-light ml-6"
            style={{ fontWeight: '300' }}
            onClick={onClose}
          >
            ×
          </button>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row w-full flex-1 p-4 md:p-10 gap-8">
          {/* Left */}
          <div className="w-full md:w-[55%]">
            <h2
              className="font-bold leading-tight mb-5 text-2xl md:text-3xl"
              style={{
                color: "#111827",
                fontWeight: "700",
                lineHeight: "1.1",
              }}
            >
              Help us understand how you were using Migrate Mate.
            </h2>
            {/* Survey Questions */}
            <div className="mb-6">
              <div className="mb-4">
                <div className="font-medium text-base mb-2 text-gray-700">
                  How many roles did you <span className="underline">apply</span> for through Migrate Mate?
                </div>
                <div className="flex gap-3">
                  {optionsApply.map(opt => (
                    <button
                      key={opt}
                      className={`flex-1 py-2 rounded-lg border text-base font-semibold
                        ${apply === opt ? "bg-[#222] text-white border-[#222]" : "border-gray-200 bg-[#F8F8F8] text-gray-700"}
                      `}
                      onClick={() => setApply(opt)}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <div className="font-medium text-base mb-2 text-gray-700">
                  How many companies did you <span className="underline">email</span> directly?
                </div>
                <div className="flex gap-3">
                  {optionsEmail.map(opt => (
                    <button
                      key={opt}
                      className={`flex-1 py-2 rounded-lg border text-base font-semibold
                        ${email === opt ? "bg-[#222] text-white border-[#222]" : "border-gray-200 bg-[#F8F8F8] text-gray-700"}
                      `}
                      onClick={() => setEmail(opt)}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <div className="font-medium text-base mb-2 text-gray-700">
                  How many different companies did you <span className="underline">interview</span> with?
                </div>
                <div className="flex gap-3">
                  {optionsInterview.map(opt => (
                    <button
                      key={opt}
                      className={`flex-1 py-2 rounded-lg border text-base font-semibold
                        ${interview === opt ? "bg-[#222] text-white border-[#222]" : "border-gray-200 bg-[#F8F8F8] text-gray-700"}
                      `}
                      onClick={() => setInterview(opt)}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            {/* Buttons */}
            <div className="flex flex-col gap-3">
              <button
                className="w-full py-3 rounded-xl font-semibold text-lg bg-[#56C26A] text-white transition-colors"
                style={{ fontWeight: "600", borderRadius: "10px" }}
                onClick={openOfferModal}
                // NOTE: do NOT call handleContinue here!
              >
                Get 50% off | $12.50 <span className="line-through text-gray-200 ml-2" style={{ fontWeight: "400" }}>$25</span>
              </button>
              <button
                className={`w-full py-3 rounded-xl font-semibold text-lg ${canContinue ? "bg-[#222] text-white" : "bg-[#EAEAEA] text-gray-400"}`}
                style={{ fontWeight: "600", borderRadius: "10px" }}
                onClick={canContinue ? handleContinue : undefined}
                disabled={!canContinue}
              >
                Continue
              </button>
            </div>
          </div>
          {/* Right - Image */}
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