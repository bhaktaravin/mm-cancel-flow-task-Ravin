'use client';

import React from "react";
import Image from "next/image";

type Props = {
  form: any;
  setForm: (fn: (prev: any) => any) => void;
  nextStep: () => void;
  prevStep: () => void;
  onClose?: () => void;
};

export default function StepWishHelpedWithModal({
  form,
  setForm,
  nextStep,
  prevStep,
  onClose,
}: Props) {
  const minChars = 25;
  const feedback = form.wishHelpedWith ?? "";
  const feedbackLength = feedback.length;
  const canContinue = feedback.trim().length >= minChars;

  const handleContinue = () => {
    if (!canContinue) return;
    nextStep();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#E6E4DF] bg-opacity-40 p-4" aria-modal="true" role="dialog">
      <div className="relative flex flex-row bg-white rounded-2xl p-10 min-w-[900px] max-w-[1200px] shadow-lg">
        {/* Left: Content */}
        <div className="flex-1 pr-10 flex flex-col justify-center">
          {/* Top navigation and progress */}
          <div className="flex items-center mb-2">
            <button className="mr-4 text-gray-500 text-lg flex items-center" onClick={prevStep}>
              &larr; Back
            </button>
            <div className="font-bold text-gray-700 text-base tracking-wide flex-1">Subscription Cancellation</div>
            <div className="flex items-center gap-2 ml-4">
              <div className="h-2 w-16 bg-green-400 rounded-full" />
              <div className="h-2 w-16 bg-green-400 rounded-full" />
              <div className="h-2 w-16 bg-gray-200 rounded-full" />
              <span className="ml-2 text-base text-gray-400">Step 2 of 3</span>
            </div>
          </div>
          {/* Question */}
          <h2 className="text-4xl font-bold mb-4 mt-4 leading-tight">
            What’s one thing you wish we<br/>could’ve helped you with?
          </h2>
          <p className="mb-4 text-gray-700 text-lg">
            We&apos;re always looking to improve, your thoughts can help us<br />
            make Migrate Mate more useful for others.*
          </p>
          {/* Textarea and character counter */}
          <div className="mb-2 relative">
            <textarea
              id="wishHelpedWith"
              className="w-full border border-gray-400 rounded-xl px-4 py-3 mb-2 text-lg resize-none"
              rows={5}
              placeholder=""
              value={feedback}
              onChange={e => setForm(f => ({ ...f, wishHelpedWith: e.target.value }))}
            />
            <span className="absolute bottom-3 right-4 text-gray-500 text-sm">
              Min {minChars} characters ({feedbackLength}/{minChars})
            </span>
          </div>
          <hr className="my-6 border-gray-200" />
          <button
            className={`w-full py-3 rounded-xl font-bold text-lg bg-[#D4D3D0] text-[#B7B7B7] transition ${canContinue ? "bg-[#56C26A] text-white hover:bg-[#4DB05F] cursor-pointer" : "opacity-100 cursor-not-allowed"}`}
            disabled={!canContinue}
            onClick={canContinue ? handleContinue : undefined}
          >
            Continue
          </button>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex items-center justify-center">
          <Image
            src="/empire-state-compressed.jpg"
            alt="Main"
            width={500}
            height={350}
            className="rounded-2xl object-cover"
          />
        </div>
        {/* Close button */}
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