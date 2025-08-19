import React, { useState } from "react";
import Image from "next/image";
import { FormType } from "../CancelFlow";

type Props = {
  form: FormType,
  setForm: React.Dispatch<React.SetStateAction<FormType>>;
  prevStep: () => void;
  isOpen: boolean;
  onClose: () => void;
  nextStep: (data: {
    foundWithMigrateMate: "yes" | "no";
    rolesApplied: string;
    companiesEmailed: string;
    companiesInterviewed: string;
  }) => void;
};

export default function StepWithMM({ prevStep, isOpen, onClose, nextStep }: Props) {
  const [foundWithMigrateMate, setFoundWithMigrateMate] = useState<"yes" | "no" | "">("");
  const [rolesApplied, setRolesApplied] = useState("");
  const [companiesEmailed, setCompaniesEmailed] = useState("");
  const [companiesInterviewed, setCompaniesInterviewed] = useState("");

  // Enable continue button only if all required fields are filled
  const canContinue =
    foundWithMigrateMate &&
    rolesApplied &&
    companiesEmailed &&
    companiesInterviewed;

  if (!isOpen) return null;

  const handleContinue = () => {
    if (!canContinue) return;
    nextStep({ foundWithMigrateMate, rolesApplied, companiesEmailed, companiesInterviewed });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        fontFamily: "'Inter', 'Montserrat', Arial, Helvetica, sans-serif",
      }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-[24px] shadow-xl w-full overflow-hidden flex flex-col"
        style={{
          maxWidth: "1100px",
          maxHeight: "90vh",
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Top Navigation */}
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
          <div className="w-full md:w-[55%] flex flex-col">
            <h2 className="font-bold leading-tight mb-3 text-2xl md:text-4xl">
              Congrats on the new role! 🎉
            </h2>
            {/* Did you find this job with MigrateMate? */}
            <div className="mb-4">
              <div className="font-medium mb-2">Did you find this job with MigrateMate?*</div>
              <div className="flex gap-4">
                <button
                  type="button"
                  className={`px-4 py-2 rounded-xl border ${foundWithMigrateMate === "yes" ? "bg-[#56C26A] text-white" : "bg-gray-100 text-gray-700"}`}
                  onClick={() => setFoundWithMigrateMate("yes")}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className={`px-4 py-2 rounded-xl border ${foundWithMigrateMate === "no" ? "bg-[#56C26A] text-white" : "bg-gray-100 text-gray-700"}`}
                  onClick={() => setFoundWithMigrateMate("no")}
                >
                  No
                </button>
              </div>
            </div>
            {/* How many roles did you apply for? */}
            <div className="mb-4">
              <div className="font-medium mb-2">How many roles did you apply for through Migrate Mate?*</div>
              <div className="flex gap-2 flex-wrap">
                {["0", "1-5", "6-20", "20+"].map(val => (
                  <button
                    key={val}
                    type="button"
                    className={`px-4 py-2 rounded-xl border ${rolesApplied === val ? "bg-[#56C26A] text-white" : "bg-gray-100 text-gray-700"}`}
                    onClick={() => setRolesApplied(val)}
                  >
                    {val}
                  </button>
                ))}
              </div>
            </div>
            {/* How many companies did you email directly? */}
            <div className="mb-4">
              <div className="font-medium mb-2">How many companies did you email directly?*</div>
              <div className="flex gap-2 flex-wrap">
                {["0", "1-5", "6-20", "20+"].map(val => (
                  <button
                    key={val}
                    type="button"
                    className={`px-4 py-2 rounded-xl border ${companiesEmailed === val ? "bg-[#56C26A] text-white" : "bg-gray-100 text-gray-700"}`}
                    onClick={() => setCompaniesEmailed(val)}
                  >
                    {val}
                  </button>
                ))}
              </div>
            </div>
            {/* How many companies did you interview with? */}
            <div className="mb-4">
              <div className="font-medium mb-2">How many different companies did you interview with?*</div>
              <div className="flex gap-2 flex-wrap">
                {["0", "1-2", "3-5", "5+"].map(val => (
                  <button
                    key={val}
                    type="button"
                    className={`px-4 py-2 rounded-xl border ${companiesInterviewed === val ? "bg-[#56C26A] text-white" : "bg-gray-100 text-gray-700"}`}
                    onClick={() => setCompaniesInterviewed(val)}
                  >
                    {val}
                  </button>
                ))}
              </div>
            </div>
            <button
              className={`w-full py-4 rounded-2xl font-semibold text-lg transition ${
                canContinue
                  ? "bg-[#56C26A] text-white hover:bg-[#4DB05F] cursor-pointer"
                  : "bg-[#EAEAEA] text-gray-400 cursor-not-allowed"
              }`}
              disabled={!canContinue}
              onClick={handleContinue}
              style={{
                fontFamily: "'Inter', 'Montserrat', Arial, Helvetica, sans-serif",
                fontWeight: "600",
                borderRadius: "16px",
                marginTop: "12px",
              }}
            >
              Continue
            </button>
          </div>
          {/* Right Column - Image */}
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