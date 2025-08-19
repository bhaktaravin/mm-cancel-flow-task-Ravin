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

export default function StepVisaModal({
  form,
  setForm,
  nextStep,
  prevStep,
  onClose,
}: Props) {
  // Bind to parent state
  const lawyer = form.immigrationLawyer ?? null; // true/false
  const visaType = form.visaType ?? "";

  // Ready to submit only if lawyer is yes and visaType is entered
  const canContinue = lawyer === true && visaType.trim().length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#E6E4DF] bg-opacity-40 p-4" aria-modal="true" role="dialog">
      <div className="relative flex flex-row bg-white rounded-2xl p-10 min-w-[900px] max-w-[1200px] shadow-lg">
        {/* Left Content */}
        <div className="flex-1 pr-10 flex flex-col justify-center">
          {/* Top nav and progress */}
          <div className="flex items-center mb-2">
            <button className="mr-4 text-gray-500 text-lg flex items-center" onClick={prevStep}>
              &larr; Back
            </button>
            <div className="font-bold text-gray-700 text-base tracking-wide flex-1">Subscription Cancellation</div>
            <div className="flex items-center gap-2 ml-4">
              <div className="h-2 w-16 bg-green-400 rounded-full" />
              <div className="h-2 w-16 bg-green-400 rounded-full" />
              <div className="h-2 w-16 bg-green-400 rounded-full" />
              <span className="ml-2 text-base text-gray-400">Step 3 of 3</span>
            </div>
          </div>
          {/* Question */}
          <h2 className="text-4xl font-bold mb-4 mt-4 leading-tight">
            We helped you land the job, now<br/>let’s help you secure your visa.
          </h2>
          {/* Lawyer question */}
          <div className="mb-6">
            <div className="font-semibold text-lg mb-2">
              Is your company providing an immigration lawyer to help with your visa?
            </div>
            <label className="flex items-center mb-2 cursor-pointer">
              <input
                type="radio"
                name="lawyer"
                checked={lawyer === true}
                onChange={() => setForm(f => ({ ...f, immigrationLawyer: true }))}
                className="mr-3"
              />
              <span className="text-lg">Yes</span>
            </label>
            <label className="flex items-center mb-2 cursor-pointer">
              <input
                type="radio"
                name="lawyer"
                checked={lawyer === false}
                onChange={() => setForm(f => ({ ...f, immigrationLawyer: false, visaType: "" }))}
                className="mr-3"
              />
              <span className="text-lg">No</span>
            </label>
          </div>
          {/* Visa type input, only if 'Yes' is selected */}
          {lawyer === true && (
            <div className="mb-6">
              <div className="mb-2 text-lg font-medium">What visa will you be applying for?*</div>
              <input
                type="text"
                placeholder="Enter visa type..."
                className="w-full border border-gray-400 rounded-xl px-4 py-3 text-lg"
                value={visaType}
                onChange={e => setForm(f => ({ ...f, visaType: e.target.value }))}
              />
            </div>
          )}
          <button
            className={`w-full py-3 rounded-xl font-bold text-lg bg-[#D4D3D0] text-[#B7B7B7] transition
              ${canContinue ? "bg-[#56C26A] text-white hover:bg-[#4DB05F] cursor-pointer" : "opacity-100 cursor-not-allowed"}`}
            disabled={!canContinue}
            onClick={canContinue ? nextStep : undefined}
          >
            Complete cancellation
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