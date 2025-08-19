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
          height: '300px',
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
          {/* Left Column - Text and Buttons */}
          <div 
            className="p-6"
            style={{ 
              width: '55%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div className="space-y-4">
              {/* Main Content */}
              <div>
                <h2 
                  className="font-semibold leading-tight mb-3"
                  style={{ 
                    fontSize: '24px',
                    color: '#111827',
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    fontWeight: '600',
                    lineHeight: '1.1'
                  }}
                >
                  Your{" "}
                  <span 
                    style={{ 
                      backgroundColor: '#fef3c7',
                      padding: '2px 4px',
                      borderRadius: '4px'
                    }}
                  >
                    cancellation
                  </span>{" "}
                  &rsquo;s all sorted, mate, no more charges.
                </h2>
                <div className="flex items-center gap-3 mt-3">
                  <Image
                    src="/mihailo-profile.jpeg"
                    alt="Mihailo Bexic"
                    width={40}
                    height={40}
                    className="rounded-full object-cover border border-gray-200"
                  />
                  <div>
                    <div 
                      style={{ 
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#111827',
                        fontFamily: 'Arial, Helvetica, sans-serif'
                      }}
                    >
                      Mihailo Bexic
                    </div>
                    <div 
                      style={{ 
                        fontSize: '12px',
                        color: '#6b7280',
                        fontFamily: 'Arial, Helvetica, sans-serif'
                      }}
                    >
                      mihailo@migratemate.co
                    </div>
                  </div>
                </div>
                <p 
                  className="leading-relaxed mt-3"
                  style={{ 
                    fontSize: '12px',
                    color: '#6b7280',
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    lineHeight: '1.5'
                  }}
                >
                  I'll be reaching out soon to help with the visa side of things.<br />
                  We've got your back, whether it's questions, paperwork, or just figuring out your options.<br />
                  Keep an eye on your inbox, I'll be in touch shortly.
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="pt-4">
              <button
                onClick={nextStep}
                className="w-full py-3 border rounded-2xl font-medium transition-colors"
                style={{ 
                  borderColor: '#8952fc',
                  backgroundColor: '#8952fc',
                  color: '#ffffff',
                  fontSize: '14px',
                  fontFamily: 'Arial, Helvetica, sans-serif',
                  fontWeight: '500',
                  borderRadius: '16px',
                  paddingTop: '12px',
                  paddingBottom: '12px'
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
