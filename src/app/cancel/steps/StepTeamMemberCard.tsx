import React from "react";
import Image from "next/image";

type Props = {
  nextStep: () => void;
  isOpen: boolean;
  onClose: () => void;
};

export default function StepTeamMemberCard({ nextStep, isOpen, onClose }: Props) {
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
          minHeight: '300px',
          maxHeight: '90vh'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div 
          className="flex items-center justify-between p-4"
          style={{ 
            borderBottom: '2px dotted #e5e7eb'
          }}
        >
          <span 
            className="text-[14px] font-medium"
            style={{ 
              color: '#4b5563',
              fontFamily: 'Arial, Helvetica, sans-serif'
            }}
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
            style={{ 
              fontFamily: 'Arial, Helvetica, sans-serif',
              fontSize: '18px',
              fontWeight: '300'
            }}
            onClick={onClose}
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="flex h-full">
          {/* Left Column - Text and Card */}
          <div 
            className="p-8"
            style={{ 
              width: '55%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '100%',
            }}
          >
            <div>
              <h2 
                className="font-semibold leading-tight mb-3"
                style={{ 
                  fontSize: '28px',
                  color: '#111827',
                  fontFamily: 'Arial, Helvetica, sans-serif',
                  fontWeight: '600',
                  lineHeight: '1.2',
                  marginBottom: '18px'
                }}
              >
                Your cancellation&apos;s all sorted, mate,<br />
                no more charges.
              </h2>
              <div
                style={{
                  background: "#F3F4F6",
                  borderRadius: "16px",
                  padding: "20px 18px",
                  marginBottom: "32px",
                  marginTop: "8px",
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                }}
              >
                <Image
                  src="/mihailo-profile.jpeg"
                  alt="Mihailo Bozic"
                  width={40}
                  height={40}
                  className="rounded-full object-cover border border-gray-200"
                  style={{
                    marginRight: "8px"
                  }}
                />
                <div>
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: "15px",
                      color: "#111827",
                    }}
                  >
                    Mihailo Bozic
                  </span>
                  <br />
                  <span
                    style={{
                      fontSize: "13px",
                      color: "#6B7280",
                    }}
                  >
                    mihailo@migratemate.co
                  </span>
                  <br />
                  <span
                    style={{
                      fontSize: "14px",
                      color: "#111827",
                    }}
                  >
                    I&apos;ll be reaching out soon to help with the visa side of things.<br />
                    We&apos;ve got your back, whether it&apos;s questions, paperwork, or just figuring out your options.<br />
                    Keep an eye on your inbox, I&apos;ll be in touch <a href="#" style={{ color: "#8952fc", textDecoration: "underline" }}>shortly</a>.
                  </span>
                </div>
              </div>
              <button
                onClick={nextStep}
                className="w-full py-3 border rounded-2xl font-medium transition-colors"
                style={{ 
                  borderColor: '#8952fc',
                  backgroundColor: '#8952fc',
                  color: '#ffffff',
                  fontSize: '16px',
                  fontFamily: 'Arial, Helvetica, sans-serif',
                  fontWeight: '600',
                  borderRadius: '16px',
                  paddingTop: '12px',
                  paddingBottom: '12px',
                  marginTop: '12px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#7b40fc';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#8952fc';
                }}
              >
                Finish
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div 
            style={{ 
              width: '45%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px'
            }}
          >
            <Image
              src="/empire-state-compressed.jpg"
              alt="Empire State Building"
              width={400}
              height={400}
              className="w-full h-full object-cover shadow-lg"
              style={{ 
                borderRadius: '12px'
              }}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}