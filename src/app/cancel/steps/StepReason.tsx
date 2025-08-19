'use client';

import React, { useState } from "react";

const REASONS = [
  "Too expensive",
  "Platform not helpful",
  "Not enough relevant jobs",
  "Decided not to move",
  "Other",
];

type Props = {
  onClose: () => void;
  prevStep: () => void;
  nextStep: (reason: string, action: "offer" | "cancel") => void;
};

export default function StepReason({
  onClose,
  prevStep,
  nextStep,
}: Props) {
  const [selected, setSelected] = useState<string>("");

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 p-4"
      aria-modal="true"
      role="dialog"
    >
      <div
        className="bg-white rounded-2xl shadow-xl w-full max-w-md mx-auto px-8 py-10 flex flex-col items-center relative"
        style={{ minWidth: 340 }}
        onClick={e => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold mb-8 text-gray-900 text-center">
          What's the main reason for cancelling?
        </h2>
        <div className="flex flex-col gap-4 w-full mb-8">
          {REASONS.map(reason => (
            <button
              key={reason}
              className={`py-4 px-6 rounded-xl border text-base font-semibold transition
                ${selected === reason
                  ? "bg-[#F3F3FF] border-[#7C5CFA] text-[#222]"
                  : "bg-white border-gray-300 text-[#222] hover:border-[#7C5CFA]"}
              `}
              onClick={() => setSelected(reason)}
              type="button"
            >
              {reason}
            </button>
          ))}
        </div>
        <button
          className="w-full py-3 rounded-xl font-bold text-lg bg-[#56C26A] text-white mb-3 transition"
          disabled={!selected}
          style={{
            opacity: selected ? 1 : 0.55,
            cursor: selected ? "pointer" : "not-allowed",
          }}
          onClick={() => nextStep(selected, "offer")}
        >
          Get 50% off | $12.50 <span className="ml-2 text-gray-200 line-through text-base">$25</span>
        </button>
        <button
          className="w-full py-3 rounded-xl font-bold text-lg bg-[#EAEAEA] text-gray-400"
          disabled={!selected}
          style={{
            opacity: selected ? 1 : 0.55,
            cursor: selected ? "pointer" : "not-allowed",
          }}
          onClick={() => nextStep(selected, "cancel")}
        >
          Complete cancellation
        </button>
        <button
          className="mt-6 text-[#7C5CFA] underline font-medium"
          onClick={prevStep}
          type="button"
        >
          &larr; Back
        </button>
        <button
          className="absolute top-5 right-7 text-gray-400 hover:text-gray-600 text-2xl font-light"
          aria-label="Close"
          onClick={onClose}
          type="button"
        >
          ×
        </button>
      </div>
    </div>
  );
}