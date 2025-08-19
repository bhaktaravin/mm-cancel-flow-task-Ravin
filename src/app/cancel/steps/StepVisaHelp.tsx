import React from "react";
import Image from "next/image";

type Props = {
  nextStep: (data?: boolean) => void;
  isOpen: boolean;
  onClose: () => void;
};

export default function StepVisaHelp({ nextStep, isOpen, onClose }: Omit<Props, "prevStep">) {
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
          boxShadow:
            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          maxWidth: "900px",
          maxHeight: "90vh",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-5 border-b border-dotted border-gray-200"
        >
          <span
            className="text-base font-medium"
            style={{
              color: "#4b5563",
              fontFamily: "'Inter', 'Montserrat', Arial, Helvetica, sans-serif",
            }}
          >
            Subscription Cancellation
          </span>
          <button
            className="text-gray-400 hover:text-gray-600 text-2xl font-light"
            style={{
              fontFamily: "'Inter', 'Montserrat', Arial, Helvetica, sans-serif",
              fontWeight: "300",
            }}
            onClick={onClose}
          >
            ×
          </button>
        </div>

        {/* Responsive Content */}
        <div className="flex flex-col md:flex-row w-full flex-1 p-4 md:p-10 gap-8">
          {/* Left Column - Text and Buttons */}
          <div className="w-full md:w-[55%] flex flex-col justify-between">
            <div>
              <h2
                className="font-semibold leading-tight mb-3 text-2xl md:text-3xl"
                style={{
                  color: "#111827",
                  fontFamily: "'Inter', 'Montserrat', Arial, Helvetica, sans-serif",
                  fontWeight: "700",
                  lineHeight: "1.1",
                }}
              >
                Did we help you with visa services?
              </h2>
              <p
                className="leading-relaxed text-base md:text-lg mb-7"
                style={{
                  color: "#6b7280",
                  fontFamily: "'Inter', 'Montserrat', Arial, Helvetica, sans-serif",
                  lineHeight: "1.5",
                }}
              >
                Let us know if our team assisted you with any visa-related matters.
              </p>
            </div>
            {/* Buttons */}
            <div className="flex flex-col gap-3 pt-2 pb-2">
              <button
                onClick={() => nextStep(true)}
                className="w-full py-4 rounded-2xl font-semibold transition-colors bg-[#8952fc] text-white text-lg md:text-xl"
                style={{
                  fontFamily: "'Inter', 'Montserrat', Arial, Helvetica, sans-serif",
                  fontWeight: "600",
                  borderRadius: "20px",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.01)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#7b40fc";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#8952fc";
                }}
              >
                Yes
              </button>
              <button
                onClick={() => nextStep(false)}
                className="w-full py-4 border border-gray-300 rounded-2xl font-semibold transition-colors text-lg md:text-xl bg-white text-[#111827]"
                style={{
                  fontFamily: "'Inter', 'Montserrat', Arial, Helvetica, sans-serif",
                  fontWeight: "600",
                  borderRadius: "20px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#d1d5db";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#e5e7eb";
                }}
              >
                No
              </button>
            </div>
          </div>
          {/* Right Column - Image */}
          <div className="w-full md:w-[45%] flex items-center justify-center mb-4 md:mb-0">
            <Image
              src="/empire-state-compressed.jpg"
              alt="Empire State Building"
              width={400}
              height={300}
              className="w-full h-auto object-cover shadow-lg rounded-[20px]"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}