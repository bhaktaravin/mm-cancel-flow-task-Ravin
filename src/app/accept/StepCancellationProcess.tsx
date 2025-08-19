import React from "react";
import Image from "next/image";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function StepCancellationProcessed({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        fontFamily: 'Arial, Helvetica, sans-serif'
      }}
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-[24px] shadow-xl w-full overflow-hidden"
        style={{ 
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          maxWidth: '900px',
          minHeight: '220px',
          maxHeight: '90vh'
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div 
          className="flex items-center justify-between p-4"
          style={{ borderBottom: '2px dotted #e5e7eb' }}
        >
          <span 
            className="text-[14px] font-medium"
            style={{ color: '#4b5563' }}
          >
            Subscription Cancelled
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 16, height: 8, background: "#34D399", borderRadius: 4, marginRight: 2 }} />
            <div style={{ width: 16, height: 8, background: "#34D399", borderRadius: 4, marginRight: 2 }} />
            <div style={{ width: 16, height: 8, background: "#34D399", borderRadius: 4, marginRight: 2 }} />
            <span style={{ fontSize: "14px", color: "#6B7280", marginLeft: 4 }}>
              Completed
            </span>
          </div>
          <button 
            className="text-gray-400 hover:text-gray-600 text-lg font-light"
            style={{ fontSize: '18px', fontWeight: '300' }}
            onClick={onClose}
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="flex h-full">
          {/* Left Column */}
          <div 
            className="p-8"
            style={{ width: '55%', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}
          >
            <h2
              style={{
                fontSize: "26px",
                color: "#111827",
                fontFamily: "Arial, Helvetica, sans-serif",
                fontWeight: "600",
                marginBottom: "12px",
                lineHeight: "1.2",
              }}
            >
              All done, your cancellation&apos;s been processed.
            </h2>
            <div
              style={{
                fontSize: "16px",
                color: "#6B7280",
                marginBottom: "20px",
                lineHeight: "1.5",
                fontFamily: "Arial, Helvetica, sans-serif"
              }}
            >
              We&apos;re stoked to hear you&apos;ve landed a job and sorted your visa.<br />
              Big congrats from the team. <span role="img" aria-label="celebrate">🙌</span>
            </div>
            <button
              onClick={onClose}
              className="w-full py-3 border rounded-2xl font-medium transition-colors"
              style={{ 
                borderColor: '#8952fc',
                backgroundColor: '#8952fc',
                color: '#ffffff',
                fontSize: '16px',
                fontWeight: '600',
                borderRadius: '16px',
                marginTop: "12px"
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#7b40fc'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#8952fc'}
            >
              Finish
            </button>
          </div>

          {/* Right Column - Image */}
          <div 
            style={{ width: '45%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px' }}
          >
            <Image
              src="/empire-state-compressed.jpg"
              alt="Empire State Building"
              width={400}
              height={400}
              className="w-full h-full object-cover shadow-lg"
              style={{ borderRadius: '12px' }}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}