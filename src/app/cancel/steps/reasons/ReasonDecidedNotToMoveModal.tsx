'use client';

import React, { useState } from "react";
import Image from "next/image";
import type { StepProps } from "../../CancelFlow";

export default function ReasonDecidedNotToMoveModal({
  form,
  setForm,
  nextStep,
  prevStep,
  onClose,
}: StepProps) {
  const [feedback, setFeedback] = useState(form.decidedNotToMoveFeedback ?? "");

  const handleContinue = () => {
    setForm(f => ({ ...f, decidedNotToMoveFeedback: feedback }));
    nextStep();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 p-4" aria-modal="true" role="dialog">
      <div className="relative flex flex-row rounded-2xl bg-white p-10 min-w-[800px] max-w-[900px]">
        <div className="flex-1 pr-10 flex flex-col justify-center">
          <button className="mb-4 text-gray-500 text-lg flex items-center" onClick={prevStep}>
            &larr; Back
          </button>
          <div className="mb-2 font-bold text-gray-700 text-sm tracking-wide">
            Subscription Cancellation
          </div>
          <div className="mb-2 flex items-center gap-2">
            <div className="h-2 w-16 bg-green-400 rounded-full" />
            <div className="h-2 w-16 bg-green-400 rounded-full" />
            <div className="h-2 w-16 bg-green-300 rounded-full" />
            <span className="ml-2 text-sm text-gray-400">Step 3 of 3</span>
          </div>
          <h2 className="text-3xl font-bold mb-2 mt-4 leading-tight">
            What&apos;s the main reason for cancelling?
          </h2>
          <p className="mb-6 text-gray-600">
            Please take a minute to let us know why:
          </p>
          <div className="flex items-center mb-4">
            <span className="mr-2 w-4 h-4 rounded-full border-2 border-gray-400 flex items-center justify-center">
              <span className="block w-2 h-2 bg-gray-800 rounded-full" />
            </span>
            <span className="font-medium text-lg">Decided not to move</span>
          </div>
          <label htmlFor="feedback" className="text-gray-700 font-medium mb-2 block">
            Please share your feedback*
          </label>
          <textarea
            id="feedback"
            className="w-full border border-gray-400 rounded-lg px-4 py-3 mb-6 text-lg"
            placeholder="Your feedback"
            value={feedback}
            onChange={e => setFeedback(e.target.value)}
          />
          <div className="flex flex-col gap-4">
            <button
              className="bg-green-500 text-white py-4 rounded-lg text-lg font-semibold flex justify-center items-center hover:bg-green-600 transition-colors"
              onClick={handleContinue}
            >
              Continue
            </button>
            <button className="bg-gray-200 text-gray-500 py-4 rounded-lg text-lg font-semibold" disabled>
              Complete cancellation
            </button>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <Image
            src="/empire-state-compressed.jpg"
            alt="Main"
            width={400}
            height={320}
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