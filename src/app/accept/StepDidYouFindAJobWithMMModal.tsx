'use client';

import React, { useState } from "react";
import Image from "next/image";

type Props = {
  form: any;
  setForm: (fn: (prev: any) => any) => void;
  nextStep: (result: "withMM" | "withoutMM") => void;
  prevStep: () => void;
  onClose?: () => void;
};

export default function StepDidYouFindJobWithMMModal({
  form,
  setForm,
  nextStep,
  prevStep,
  onClose,
}: Props) {
  const [answer, setAnswer] = useState(form.foundWithMM ?? "");

  const handleContinue = () => {
    if (!answer) return;
    setForm(f => ({ ...f, foundWithMM: answer }));
    nextStep(answer === "yes" ? "withMM" : "withoutMM");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#E6E4DF] bg-opacity-40 p-4" aria-modal="true" role="dialog">
      <div className="relative flex flex-row bg-white rounded-2xl p-10 min-w-[900px] max-w-[1200px] shadow-lg">
        <div className="flex-1 pr-10 flex flex-col justify-center">
          <button className="mb-4 text-gray-500 text-lg flex items-center" onClick={prevStep}>
            &larr; Back
          </button>
          <div className="mb-2 font-bold text-gray-700 text-sm">
            Subscription Cancellation
          </div>
          <div className="mb-6 flex items-center gap-2">
            <div className="h-2 w-16 bg-green-400 rounded-full" />
            <div className="h-2 w-16 bg-gray-200 rounded-full" />
            <div className="h-2 w-16 bg-gray-200 rounded-full" />
            <span className="ml-2 text-sm text-gray-400">Step 1 of 3</span>
          </div>
          <h2 className="text-3xl font-bold mb-4 mt-4 leading-tight">
            Did you find a job using MigrateMate?
          </h2>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button
              type="button"
              className={`py-3 rounded-lg border font-semibold text-base transition ${
                answer === "yes" ? "bg-[#F3F3FF] border-[#7C5CFA] text-[#222]" : "bg-white border-gray-300 text-[#222] hover:border-[#7C5CFA]"
              }`}
              onClick={() => setAnswer("yes")}
            >
              Yes
            </button>
            <button
              type="button"
              className={`py-3 rounded-lg border font-semibold text-base transition ${
                answer === "no" ? "bg-[#F3F3FF] border-[#7C5CFA] text-[#222]" : "bg-white border-gray-300 text-[#222] hover:border-[#7C5CFA]"
              }`}
              onClick={() => setAnswer("no")}
            >
              No
            </button>
          </div>
          <button
            className={`w-full py-3 rounded-xl font-bold text-lg bg-[#56C26A] text-white transition ${answer ? "" : "opacity-50 cursor-not-allowed"}`}
            disabled={!answer}
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <Image
            src="/empire-state-compressed.jpg"
            alt="Main"
            width={500}
            height={350}
            className="rounded-2xl object-cover"
          />
        </div>
        {onClose && (
          <button
            className="absolute top-6 right-6 text-2xl text-gray-400 hover:text-gray-700"
            onClick={onClose}
            aria-label="Close"
            type="button"
          >
            &times;
          </button>
        )}
      </div>
    </div>
  );
}