import React from "react";
import Image from "next/image";

type Props = {
  nextStep: () => void;
  isOpen: boolean;
  onClose: () => void;
};

export default function StepOfferDeclined({ nextStep, isOpen, onClose }: Props) {
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
          maxWidth: "900px",
          maxHeight: "90vh",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-center px-8 py-6 border-b border-gray-200 relative">
          <span
            className="font-medium text-lg"
            style={{
              color: "#4b5563",
              fontFamily: "'Inter', 'Montserrat', Arial, Helvetica, sans-serif",
            }}
          >
            Subscription
          </span>
          <button
            className="absolute right-8 text-gray-400 hover:text-gray-600 text-2xl font-light"
            style={{ fontWeight: "300" }}
            onClick={onClose}
          >
            ×
          </button>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row w-full flex-1 p-4 md:p-10 gap-8">
          {/* Left Column */}
          <div className="w-full md:w-[55%] flex flex-col justify-between">
            <div>
              <h2
                className="font-bold leading-tight mb-3 text-2xl md:text-3xl"
                style={{
                  color: "#111827",
                  fontFamily: "'Inter', 'Montserrat', Arial, Helvetica, sans-serif",
                  fontWeight: "700",
                  lineHeight: "1.1",
                }}
              >
                Great choice, mate!
              </h2>
              <div className="mb-3 text-2xl md:text-2xl font-semibold" style={{ color: "#222" }}>
                You&apos;re still on the path to your dream role.{" "}
                <span style={{ color: "#8952fc" }}>Let&apos;s make it happen together!</span>
              </div>
              <div className="mb-2 text-base text-gray-700 font-medium">
                You&apos;ve got XX days left on your current plan.<br />
                Starting from XX date, your monthly payment will be <span className="font-bold">$12.50</span>.
              </div>
              <div className="mb-6 text-xs text-gray-500 italic">
                You can cancel anytime before then.
              </div>
            </div>
            <button
              onClick={nextStep}
              className="w-full py-4 rounded-2xl font-semibold text-lg bg-[#8952fc] text-white transition-colors"
              style={{
                fontFamily: "'Inter', 'Montserrat', Arial, Helvetica, sans-serif",
                fontWeight: "600",
                borderRadius: "16px",
                marginTop: "12px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#7b40fc";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#8952fc";
              }}
            >
              Land your dream role
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