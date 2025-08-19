import React from "react";
import Image from "next/image";

type Props = {
  nextStep: (data?: boolean) => void;
  prevStep: () => void;
  isOpen: boolean;
  onClose: () => void;
};

export default function StepWithoutMM({ nextStep, prevStep, isOpen, onClose }: Props) {
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
            Subscription Cancellation
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
                  You landed the job!<br />
                  <span 
                    style={{ 
                      fontStyle: 'italic'
                    }}
                  >
                    That&apos;s what we live for.
                  </span>
                </h2>
                <p 
                  className="leading-relaxed mt-3"
                  style={{ 
                    fontSize: '14px',
                    color: '#6b7280',
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    lineHeight: '1.5'
                  }}
                >
                  Even if it wasn&apos;t through Migrate Mate, let us help get your visa sorted.
                </p>
                <p 
                  className="leading-relaxed mt-3"
                  style={{ 
                    fontSize: '14px',
                    color: '#6b7280',
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    lineHeight: '1.5'
                  }}
                >
                  Is your company providing an immigration lawyer to help with your visa?
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="space-y-3 pt-4">
              <button
                onClick={() => nextStep(true)}
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
                Yes
              </button>
              <button
                onClick={() => nextStep(false)}
                className="w-full py-3 border rounded-2xl font-medium transition-colors"
                style={{ 
                  borderColor: '#e5e7eb',
                  color: '#111827',
                  fontSize: '14px',
                  fontFamily: 'Arial, Helvetica, sans-serif',
                  fontWeight: '500',
                  borderRadius: '16px',
                  paddingTop: '12px',
                  paddingBottom: '12px',
                  backgroundColor: '#ffffff'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#d1d5db';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e5e7eb';
                }}
              >
                No
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
