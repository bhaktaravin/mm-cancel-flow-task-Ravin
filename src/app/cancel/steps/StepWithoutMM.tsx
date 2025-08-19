'use client';

import React, { useState } from "react";
import Image from "next/image";
import { FormType } from "../CancelFlow";

type Props = {
  form: FormType;
  setForm: React.Dispatch<React.SetStateAction<FormType>>;
  nextStep: (updatedForm?: FormType, branch?: "yes" | "no") => void;
  isOpen: boolean;
  onClose: () => void;
};

export default function StepWithoutMM({
  form,
  setForm,
  nextStep,
  isOpen,
  onClose,
}: Omit<Props, "prevStep">) {
  const [answer, setAnswer] = useState<null | boolean>(null);
  const [visaType, setVisaType] = useState<string>("");

  function handleSubmit() {
    if (answer === null || visaType.trim().length === 0) return;

    const updatedForm = {
      ...form,
      companyProvidesLawyer: answer,
      visaType,
    };
    setForm(updatedForm);
    nextStep(updatedForm, answer ? "yes" : "no");
  }

  const isSubmitDisabled = answer === null || visaType.trim().length === 0;

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-[24px] shadow-xl w-full overflow-hidden"
        style={{
          boxShadow:
            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          maxWidth: "900px",
          minHeight: "300px",
          maxHeight: "90vh",
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between p-4"
          style={{
            borderBottom: "2px dotted #e5e7eb",
          }}
        >
          <span
            className="text-[14px] font-medium"
            style={{
              color: "#4b5563",
              fontFamily: "Arial, Helvetica, sans-serif",
            }}
          >
            Subscription Cancellation
          </span>
          {/* Stepper */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 16, height: 8, background: "#34D399", borderRadius: 4, marginRight: 2 }} />
            <div style={{ width: 16, height: 8, background: "#34D399", borderRadius: 4, marginRight: 2 }} />
            <div style={{ width: 16, height: 8, background: "#34D399", borderRadius: 4, marginRight: 2 }} />
            <span style={{ fontSize: "14px", color: "#6B7280", marginLeft: 4 }}>
              Step 3 of 3
            </span>
          </div>
          <button
            className="text-gray-400 hover:text-gray-600 text-lg font-light"
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: "18px",
              fontWeight: "300",
              marginLeft: "8px",
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
            className="p-8"
            style={{
              width: "55%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h2
                className="font-semibold leading-tight mb-3"
                style={{
                  fontSize: "28px",
                  color: "#111827",
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontWeight: "600",
                  lineHeight: "1.2",
                  marginBottom: "8px",
                }}
              >
                You landed the job!
                <br />
                <span
                  style={{
                    fontStyle: "italic",
                    fontWeight: 500,
                  }}
                >
                  That&apos;s what we live for.
                </span>
              </h2>
              <p
                className="leading-relaxed mt-2"
                style={{
                  fontSize: "16px",
                  color: "#111827",
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontWeight: 500,
                  lineHeight: "1.5",
                }}
              >
                Even if it wasn&apos;t through Migrate Mate, let us help get your visa sorted.
              </p>
            </div>
            <div style={{ marginTop: "28px" }}>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#111827",
                  marginBottom: "8px",
                  fontFamily: "Arial, Helvetica, sans-serif",
                }}
              >
                Is your company providing an immigration lawyer to help with your visa?
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  marginTop: "10px",
                  marginBottom: "24px",
                }}
              >
                <label className="flex items-center cursor-pointer" style={{ fontSize: "16px", color: "#111827" }}>
                  <input
                    type="radio"
                    name="lawyer"
                    value="yes"
                    checked={answer === true}
                    onChange={() => setAnswer(true)}
                    style={{
                      accentColor: "#8952fc",
                      width: "20px",
                      height: "20px",
                      marginRight: "10px",
                    }}
                  />
                  Yes
                </label>
                <label className="flex items-center cursor-pointer" style={{ fontSize: "16px", color: "#111827" }}>
                  <input
                    type="radio"
                    name="lawyer"
                    value="no"
                    checked={answer === false}
                    onChange={() => setAnswer(false)}
                    style={{
                      accentColor: "#8952fc",
                      width: "20px",
                      height: "20px",
                      marginRight: "10px",
                    }}
                  />
                  No
                </label>
              </div>
              {/* Show visa field for both Yes and No */}
              {answer !== null && (
                <div style={{ marginTop: "8px" }}>
                  <div
                    style={{
                      fontSize: "15px",
                      marginBottom: "8px",
                      color: "#111827",
                    }}
                  >
                    {answer
                      ? "What visa will you be applying for?"
                      : (
                        <>
                          We can connect you with one of our trusted partners.
                          <br />
                          <span style={{ fontWeight: 600 }}>Which visa would you like to apply for?</span>
                        </>
                      )}
                  </div>
                  <input
                    type="text"
                    value={visaType}
                    onChange={e => setVisaType(e.target.value)}
                    placeholder="Enter visa type"
                    style={{
                      width: "100%",
                      padding: "10px",
                      fontSize: "15px",
                      borderRadius: "8px",
                      border: "1px solid #d1d5db",
                      marginBottom: "10px",
                    }}
                  />
                </div>
              )}
              <button
                onClick={handleSubmit}
                disabled={isSubmitDisabled}
                className="w-full py-3 border rounded-2xl font-medium transition-colors"
                style={{
                  borderColor: "#e5e7eb",
                  backgroundColor: isSubmitDisabled ? "#f3f4f6" : "#8952fc",
                  color: isSubmitDisabled ? "#6b7280" : "#ffffff",
                  fontSize: "15px",
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontWeight: "600",
                  borderRadius: "16px",
                  paddingTop: "12px",
                  paddingBottom: "12px",
                  marginTop: "4px",
                  cursor: isSubmitDisabled ? "not-allowed" : "pointer",
                  opacity: isSubmitDisabled ? 0.7 : 1,
                }}
              >
                Complete cancellation
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div
            style={{
              width: "45%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px",
            }}
          >
            <Image
              src="/empire-state-compressed.jpg"
              alt="Empire State Building"
              width={400}
              height={400}
              className="w-full h-full object-cover shadow-lg"
              style={{
                borderRadius: "12px",
              }}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}