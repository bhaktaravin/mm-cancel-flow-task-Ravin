'use client';

import React, { useState } from "react";
import Image from "next/image";

type Props = {
  form: any;
  setForm: (fn: (prev: any) => any) => void;
  nextStep: () => void;
  prevStep: () => void;
  onClose?: () => void;
};

const ROLE_OPTIONS = ["0", "1–5", "6–20", "20+"];
const COMPANY_OPTIONS = ["0", "1–5", "6–20", "20+"];
const INTERVIEW_OPTIONS = ["0", "1–2", "3–5", "5+"];

export default function StepCongratsNewRoleModal({
  form,
  setForm,
  nextStep,
  prevStep,
  onClose,
}: Props) {
  const [foundWithMigrateMate, setFoundWithMigrateMate] = useState(form.foundWithMigrateMate ?? "");
  const [rolesApplied, setRolesApplied] = useState(form.rolesApplied ?? "");
  const [companiesEmailed, setCompaniesEmailed] = useState(form.companiesEmailed ?? "");
  const [companiesInterviewed, setCompaniesInterviewed] = useState(form.companiesInterviewed ?? "");

  // Only enable continue if all required fields are answered
  const canContinue = 
    foundWithMigrateMate !== "" &&
    rolesApplied !== "" &&
    companiesEmailed !== "" &&
    companiesInterviewed !== "";

  const handleContinue = () => {
    if (!canContinue) return;
    setForm(f => ({
      ...f,
      foundWithMigrateMate,
      rolesApplied,
      companiesEmailed,
      companiesInterviewed,
    }));
    nextStep();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 p-4" aria-modal="true" role="dialog">
      <div className="relative flex flex-row bg-white rounded-2xl p-10 min-w-[900px] max-w-[1100px]">
        {/* Left: Content */}
        <div className="flex-1 pr-10 flex flex-col justify-center">
          {/* Top navigation */}
          <button
            className="mb-4 text-gray-500 text-lg flex items-center"
            onClick={prevStep}
          >
            &larr; Back
          </button>
          <div className="mb-2 font-bold text-gray-700 text-sm tracking-wide">
            Subscription Cancellation
          </div>
          <div className="mb-6 flex items-center gap-2">
            {/* Progress bar */}
            <div className="h-2 w-16 bg-green-400 rounded-full" />
            <div className="h-2 w-16 bg-gray-200 rounded-full" />
            <div className="h-2 w-16 bg-gray-200 rounded-full" />
            <span className="ml-2 text-sm text-gray-400">Step 1 of 3</span>
          </div>
          <h2 className="text-3xl font-bold mb-4 mt-4 leading-tight">
            Congrats on the new role! <span aria-label="party" role="img">🎉</span>
          </h2>

          {/* Questions */}
          <div className="mb-4 font-medium text-lg">
            Did you find this job with MigrateMate?*
          </div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button
              type="button"
              className={`py-3 rounded-lg border font-semibold text-base transition ${foundWithMigrateMate === "yes" ? "bg-[#F3F3FF] border-[#7C5CFA] text-[#222]" : "bg-white border-gray-300 text-[#222] hover:border-[#7C5CFA]"}`}
              onClick={() => setFoundWithMigrateMate("yes")}
            >
              Yes
            </button>
            <button
              type="button"
              className={`py-3 rounded-lg border font-semibold text-base transition ${foundWithMigrateMate === "no" ? "bg-[#F3F3FF] border-[#7C5CFA] text-[#222]" : "bg-white border-gray-300 text-[#222] hover:border-[#7C5CFA]"}`}
              onClick={() => setFoundWithMigrateMate("no")}
            >
              No
            </button>
          </div>

          {/* 2: How many roles did you apply for through Migrate Mate? */}
          <div className="mb-2 font-medium text-lg">
            How many roles did you <span className="underline">apply</span> for through Migrate Mate?*
          </div>
          <div className="grid grid-cols-4 gap-3 mb-6">
            {ROLE_OPTIONS.map(option => (
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

          {/* 3: How many companies did you email directly? */}
          <div className="mb-2 font-medium text-lg">
            How many companies did you <span className="underline">email</span> directly?*
          </div>
          <div className="grid grid-cols-4 gap-3 mb-6">
            {COMPANY_OPTIONS.map(option => (
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

          {/* 4: How many different companies did you interview with? */}
          <div className="mb-2 font-medium text-lg">
            How many different companies did you <span className="underline">interview</span> with?*
          </div>
          <div className="grid grid-cols-4 gap-3 mb-8">
            {INTERVIEW_OPTIONS.map(option => (
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
            className={`w-full py-3 rounded-xl font-bold text-lg bg-[#56C26A] text-white transition ${canContinue ? "" : "opacity-50 cursor-not-allowed"}`}
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
            width={440}
            height={320}
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