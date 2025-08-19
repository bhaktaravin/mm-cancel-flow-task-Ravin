import React, { useState } from "react";
import Image from "next/image";

type Props = {
  prevStep: () => void;
  isOpen: boolean;
  onClose: () => void;
};

export default function StepVisaLawyerHelp({ prevStep, isOpen, onClose }: Props) {
  const [visaType, setVisaType] = useState("");
  const [lawyerHelp, setLawyerHelp] = useState(true);

  if (!isOpen) return null;

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
        onClick={(e) => e.stopPropagation()}
      >

        {/* Top Navigation */}
        <div className="flex items-center px-8 py-6 border-b border-gray-200">
          <button
            className="text-gray-600 font-medium text-lg flex items-center mr-4"
            onClick={prevStep}
            style={{ fontFamily: "'Inter', 'Montserrat', Arial, Helvetica, sans-serif" }}
          >
            <span className="mr-2 text-xl">&#8592;</span> Back
          </button>
          <span className="font-medium text-lg flex-1 text-center"
            style={{ color: "#4b5563", fontFamily: "'Inter', 'Montserrat', Arial, Helvetica, sans-serif"}}
          >
            Subscription Cancellation
          </span>
          {/* Stepper */}
          <div className="flex items-center gap-2 ml-auto">
            <div className="flex items-center gap-1">
              <span className="inline-block w-5 h-2 rounded-full bg-[#A3E3C7]" />
              <span className="inline-block w-5 h-2 rounded-full bg-[#A3E3C7]" />
              <span className="inline-block w-5 h-2 rounded-full bg-[#D9D9D9]" />
            </div>
            <span className="text-gray-500 text-base ml-3">Step 3 of 3</span>
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
          {/* Left Column */}
          <div className="w-full md:w-[55%] flex flex-col">
            <div>
              <h2
                className="font-bold leading-tight mb-3 text-2xl md:text-4xl"
                style={{
                  color: "#111827",
                  fontFamily: "'Inter', 'Montserrat', Arial, Helvetica, sans-serif",
                  fontWeight: "700",
                  lineHeight: "1.1",
                }}
              >
                We helped you land the job, now let&apos;s <br className="hidden md:inline" />
                help you secure your visa.
              </h2>
              <p
                className="leading-relaxed text-base md:text-xl mb-4"
                style={{
                  color: "#6b7280",
                  fontFamily: "'Inter', 'Montserrat', Arial, Helvetica, sans-serif",
                  lineHeight: "1.5",
                }}
              >
                Is your company providing an immigration lawyer to help with your visa?
              </p>
              {/* Radio Option */}
              <div className="flex items-center my-3">
                <input
                  type="radio"
                  checked={lawyerHelp}
                  onChange={() => setLawyerHelp(true)}
                  className="mr-3 accent-[#222]"
                  id="lawyerHelpYes"
                />
                <label htmlFor="lawyerHelpYes" className="font-medium text-gray-800 text-lg">
                  Yes
                </label>
              </div>
              {/* Visa Type Input */}
              <div className="mt-1 mb-6">
                <label htmlFor="visaType" className="block text-base font-medium text-gray-700 mb-2">
                  What visa will you be applying for?*
                </label>
                <input
                  type="text"
                  id="visaType"
                  placeholder="Enter visa type..."
                  value={visaType}
                  onChange={e => setVisaType(e.target.value)}
                  className="w-full border border-gray-400 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-gray-700"
                  style={{ fontFamily: "'Inter', 'Montserrat', Arial, Helvetica, sans-serif" }}
                />
              </div>
            </div>
            <button
              className="w-full py-4 rounded-2xl font-semibold text-lg bg-[#EAEAEA] text-gray-400"
              style={{
                fontFamily: "'Inter', 'Montserrat', Arial, Helvetica, sans-serif",
                fontWeight: "600",
                borderRadius: "16px",
                marginTop: "12px",
                cursor: "not-allowed",
              }}
              disabled
            >
              Complete cancellation
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