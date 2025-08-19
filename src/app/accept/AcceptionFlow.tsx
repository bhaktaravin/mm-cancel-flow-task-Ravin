'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";

type Props = {
  initialForm?: any;
  onDone?: (form: any) => void;
  onClose?: () => void;
  skipVisaStep?: boolean; // Pass this from CancelFlow if needed
  startStep?: number;     // Optional: allow parent to start at a specific step
};

export default function AcceptionFlow({
  initialForm = {},
  onDone,
  onClose,
  skipVisaStep = false,
  startStep = 0,
}: Props) {
  // Step management for the flow
  const [step, setStep] = useState<0 | 1 | 2>(startStep as 0 | 1 | 2);
  const [form, setForm] = useState<any>(initialForm);

  // Example: If you want to start on a different step when initialForm changes
  useEffect(() => {
    // If initialForm says to skip feedback, start on visa step
    if (initialForm.skipFeedback) setStep(skipVisaStep ? 2 : 1);
  }, [initialForm, skipVisaStep]);

  // Step 0: Did you find this job with MigrateMate?
  const [foundWithMM, setFoundWithMM] = useState(form.foundWithMM ?? "");
  // Step 0: How many roles did you apply for through MM?
  const [rolesApplied, setRolesApplied] = useState(form.rolesApplied ?? "");
  // Step 0: Companies emailed directly
  const [companiesEmailed, setCompaniesEmailed] = useState(form.companiesEmailed ?? "");
  // Step 0: Companies interviewed with
  const [companiesInterviewed, setCompaniesInterviewed] = useState(form.companiesInterviewed ?? "");

  // Step 1: Feedback
  const [helpedWith, setHelpedWith] = useState(form.helpedWith ?? "");

  // Step 2: Visa
  const [immigrationLawyer, setImmigrationLawyer] = useState(form.immigrationLawyer ?? "");

  // Step 0 validation
  const canContinueStep0 =
    foundWithMM !== "" &&
    rolesApplied !== "" &&
    companiesEmailed !== "" &&
    companiesInterviewed !== "";

  // Step 1 validation
  const minChars = 25;
  const canContinueStep1 = helpedWith.trim().length >= minChars;

  // Step 2 validation
  const canContinueStep2 = immigrationLawyer !== "";

  // Handlers
  const handleContinueStep0 = () => {
    setForm((prev: any) => ({
      ...prev,
      foundWithMM,
      rolesApplied,
      companiesEmailed,
      companiesInterviewed,
    }));
    // If skipping visa, go straight to done!
    if (skipVisaStep) {
      if (onDone) onDone({ ...form, foundWithMM, rolesApplied, companiesEmailed, companiesInterviewed });
    } else {
      setStep(1);
    }
  };

  const handleContinueStep1 = () => {
    setForm((prev: any) => ({
      ...prev,
      helpedWith,
    }));
    setStep(2);
  };

  const handleContinueStep2 = () => {
    const finalForm = {
      ...form,
      immigrationLawyer,
    };
    setForm(finalForm);
    if (onDone) onDone(finalForm);
  };

  // Step rendering
  if (step === 0) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 p-4" aria-modal="true" role="dialog">
        <div className="relative flex flex-row bg-white rounded-2xl p-10 min-w-[900px] max-w-[1200px] shadow-lg">
          <div className="flex-1 pr-10 flex flex-col justify-center">
            <button className="mb-4 text-gray-500 text-lg flex items-center" onClick={onClose}>
              &larr; Back
            </button>
            <div className="mb-2 font-bold text-gray-700 text-sm tracking-wide">
              Subscription Cancellation
            </div>
            <div className="mb-6 flex items-center gap-2">
              <div className="h-2 w-16 bg-green-400 rounded-full" />
              <div className="h-2 w-16 bg-gray-200 rounded-full" />
              <div className="h-2 w-16 bg-gray-200 rounded-full" />
              <span className="ml-2 text-sm text-gray-400">Step 1 of 3</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 mt-4 leading-tight">
              Congrats on the new role! <span aria-label="party" role="img">🎉</span>
            </h2>
            {/* MM job question */}
            <div className="mb-4 font-medium text-lg">
              Did you find this job with MigrateMate?*
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <button
                type="button"
                className={`py-3 rounded-lg border font-semibold text-base transition ${foundWithMM === "yes" ? "bg-[#F3F3FF] border-[#7C5CFA] text-[#222]" : "bg-white border-gray-300 text-[#222] hover:border-[#7C5CFA]"}`}
                onClick={() => setFoundWithMM("yes")}
              >
                Yes
              </button>
              <button
                type="button"
                className={`py-3 rounded-lg border font-semibold text-base transition ${foundWithMM === "no" ? "bg-[#F3F3FF] border-[#7C5CFA] text-[#222]" : "bg-white border-gray-300 text-[#222] hover:border-[#7C5CFA]"}`}
                onClick={() => setFoundWithMM("no")}
              >
                No
              </button>
            </div>
            {/* Roles applied */}
            <div className="mb-2 font-medium text-lg">
              How many roles did you <span className="underline">apply</span> for through Migrate Mate?*
            </div>
            <div className="grid grid-cols-4 gap-3 mb-6">
              {["0", "1–5", "6–20", "20+"].map(option => (
                <button
                  key={option}
                  type="button"
                  className={`py-2 rounded-lg border font-semibold text-base transition ${rolesApplied === option ? "bg-[#F3F3FF] border-[#7C5CFA] text-[#222]" : "bg-white border-gray-300 text-[#222] hover:border-[#7C5CFA]"}`}
                  onClick={() => setRolesApplied(option)}
                >
                  {option}
                </button>
              ))}
            </div>
            {/* Companies emailed */}
            <div className="mb-2 font-medium text-lg">
              How many companies did you <span className="underline">email</span> directly?*
            </div>
            <div className="grid grid-cols-4 gap-3 mb-6">
              {["0", "1–5", "6–20", "20+"].map(option => (
                <button
                  key={option}
                  type="button"
                  className={`py-2 rounded-lg border font-semibold text-base transition ${companiesEmailed === option ? "bg-[#F3F3FF] border-[#7C5CFA] text-[#222]" : "bg-white border-gray-300 text-[#222] hover:border-[#7C5CFA]"}`}
                  onClick={() => setCompaniesEmailed(option)}
                >
                  {option}
                </button>
              ))}
            </div>
            {/* Companies interviewed */}
            <div className="mb-2 font-medium text-lg">
              How many different companies did you <span className="underline">interview</span> with?*
            </div>
            <div className="grid grid-cols-4 gap-3 mb-8">
              {["0", "1–2", "3–5", "5+"].map(option => (
                <button
                  key={option}
                  type="button"
                  className={`py-2 rounded-lg border font-semibold text-base transition ${companiesInterviewed === option ? "bg-[#F3F3FF] border-[#7C5CFA] text-[#222]" : "bg-white border-gray-300 text-[#222] hover:border-[#7C5CFA]"}`}
                  onClick={() => setCompaniesInterviewed(option)}
                >
                  {option}
                </button>
              ))}
            </div>
            <button
              className={`w-full py-3 rounded-xl font-bold text-lg bg-[#56C26A] text-white transition ${canContinueStep0 ? "" : "opacity-50 cursor-not-allowed"}`}
              disabled={!canContinueStep0}
              onClick={canContinueStep0 ? handleContinueStep0 : undefined}
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

  if (step === 1) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#E6E4DF] bg-opacity-40 p-4" aria-modal="true" role="dialog">
        <div className="relative flex flex-row bg-white rounded-2xl p-10 min-w-[900px] max-w-[1200px] shadow-lg">
          <div className="flex-1 pr-10 flex flex-col justify-center">
            <button className="mb-4 text-gray-500 text-lg flex items-center" onClick={() => setStep(0)}>
              &larr; Back
            </button>
            <div className="font-bold text-gray-700 text-base tracking-wide mb-2">Subscription Cancellation</div>
            <div className="flex items-center gap-2 mb-8">
              <div className="h-2 w-16 bg-green-400 rounded-full" />
              <div className="h-2 w-16 bg-green-400 rounded-full" />
              <div className="h-2 w-16 bg-gray-200 rounded-full" />
              <span className="ml-2 text-base text-gray-400">Step 2 of 3</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 mt-4 leading-tight">
              What’s one thing you wish we<br/>could’ve helped you with?
            </h2>
            <p className="mb-4 text-gray-700 text-lg">
              We&apos;re always looking to improve, your thoughts can help us<br/>
              make Migrate Mate more useful for others.*
            </p>
            <div className="mb-2 relative">
              <textarea
                id="wishHelpedWith"
                className="w-full border border-gray-400 rounded-xl px-4 py-3 mb-2 text-lg resize-none"
                rows={5}
                placeholder=""
                value={helpedWith}
                onChange={e => setHelpedWith(e.target.value)}
              />
              <span className="absolute bottom-3 right-4 text-gray-500 text-sm">
                Min {minChars} characters ({helpedWith.length}/{minChars})
              </span>
            </div>
            <hr className="my-6 border-gray-200" />
            <button
              className={`w-full py-3 rounded-xl font-bold text-lg bg-[#D4D3D0] text-[#B7B7B7] transition ${canContinueStep1 ? "bg-[#56C26A] text-white hover:bg-[#4DB05F] cursor-pointer" : "opacity-100 cursor-not-allowed"}`}
              disabled={!canContinueStep1}
              onClick={canContinueStep1 ? handleContinueStep1 : undefined}
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

  // Step 2: Visa (can be skipped)
  if (step === 2 && !skipVisaStep) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#E6E4DF] bg-opacity-40 p-4" aria-modal="true" role="dialog">
        <div className="relative flex flex-row bg-white rounded-2xl p-10 min-w-[900px] max-w-[1200px] shadow-lg">
          <div className="flex-1 pr-10 flex flex-col justify-center">
            <button className="mb-4 text-gray-500 text-lg flex items-center" onClick={() => setStep(1)}>
              &larr; Back
            </button>
            <div className="font-bold text-gray-700 text-base tracking-wide mb-2">Subscription Cancellation</div>
            <div className="flex items-center gap-2 mb-8">
              <div className="h-2 w-16 bg-green-400 rounded-full" />
              <div className="h-2 w-16 bg-green-400 rounded-full" />
              <div className="h-2 w-16 bg-green-400 rounded-full" />
              <span className="ml-2 text-base text-gray-400">Step 3 of 3</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 mt-4 leading-tight">
              {foundWithMM === "yes"
                ? "We helped you land the job, now let’s help you secure your visa."
                : <>
                    You landed the job!<br />
                    <span className="italic">That’s what we live for.</span>
                  </>
              }
            </h2>
            {foundWithMM === "no" && (
              <div className="mb-4 text-gray-700 font-medium">
                Even if it wasn’t through Migrate Mate,<br />
                let us help get your visa sorted.
              </div>
            )}
            <div className="mb-6 font-medium text-lg">
              Is your company providing an immigration lawyer to help with your visa?
            </div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <button
                type="button"
                className={`py-3 rounded-full border font-semibold text-base transition ${immigrationLawyer === "yes" ? "bg-[#F3F3FF] border-[#7C5CFA] text-[#222]" : "bg-white border-gray-300 text-[#222] hover:border-[#7C5CFA]"}`}
                onClick={() => setImmigrationLawyer("yes")}
              >
                Yes
              </button>
              <button
                type="button"
                className={`py-3 rounded-full border font-semibold text-base transition ${immigrationLawyer === "no" ? "bg-[#F3F3FF] border-[#7C5CFA] text-[#222]" : "bg-white border-gray-300 text-[#222] hover:border-[#7C5CFA]"}`}
                onClick={() => setImmigrationLawyer("no")}
              >
                No
              </button>
            </div>
            <button
              className={`w-full py-3 rounded-xl font-bold text-lg bg-[#D4D3D0] text-[#B7B7B7] transition ${canContinueStep2 ? "bg-[#56C26A] text-white hover:bg-[#4DB05F] cursor-pointer" : "opacity-100 cursor-not-allowed"}`}
              disabled={!canContinueStep2}
              onClick={canContinueStep2 ? handleContinueStep2 : undefined}
            >
              Complete cancellation
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

  // If skipping visa step, just call onDone after feedback
  if ((step === 2 && skipVisaStep) || step > 2) {
    if (onDone) onDone(form);
    return null;
  }

  return null;
}