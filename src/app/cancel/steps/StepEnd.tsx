"use client";
import React from "react";
import type { StepProps } from "../CancelFlow"; // import the shared props type

export default function StepEnd({
  form,
  setForm,
  nextStep,
  prevStep,
  isOpen = true,
  onClose,
}: StepProps) {
  if (!isOpen) return null;

  // You can use data from form if needed, e.g. end date
  const endDate = form?.endDate || "XX date";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.15)" }}
    >
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl flex flex-col p-0 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-2">
          <button
            className="text-gray-500 font-medium"
            onClick={() => prevStep?.()}
          >
            &larr; Back
          </button>
          <div className="flex-1 flex flex-col items-center">
            <span className="font-semibold text-gray-800 text-lg">
              Subscription Cancelled
            </span>
            <div className="flex items-center mt-1">
              {/* Progress bar - 3 steps, all green */}
              <div className="h-2 w-6 rounded bg-green-400 mx-0.5"></div>
              <div className="h-2 w-6 rounded bg-green-400 mx-0.5"></div>
              <div className="h-2 w-6 rounded bg-green-400 mx-0.5"></div>
              <span className="ml-2 text-green-600 font-medium text-sm">
                Completed
              </span>
            </div>
          </div>
          <button
            className="text-gray-400 text-2xl font-bold"
            aria-label="Close"
            onClick={() => onClose?.()}
          >
            &times;
          </button>
        </div>
        {/* Content */}
        <div className="flex flex-row items-stretch px-6 pt-4 pb-6">
          {/* Left */}
          <div className="flex-1 pr-6 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-3 text-gray-900">
              Sorry to see you go, mate.
            </h2>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Thanks for being with us, and you’re always welcome back.
            </h3>
            <p className="text-gray-600 text-base mb-2">
              Your subscription is set to end on <span className="font-semibold">{endDate}</span>.<br />
              You’ll still have full access until then. No further charges after that.
            </p>
            <p className="text-gray-500 text-sm mb-4">
              Changed your mind? You can reactivate anytime before your end date.
            </p>
            <button
              className="w-full py-3 rounded-xl font-bold text-lg bg-[#7C5CFA] text-white mt-2"
              style={{ borderRadius: "10px" }}
              onClick={() => window.location.href = "/jobs"}
            >
              Back to Jobs
            </button>
          </div>
          {/* Right */}
          <div className="w-[300px] flex-shrink-0 rounded-xl overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
              alt="NYC Skyline"
              className="w-full h-full object-cover"
              style={{ minHeight: "220px", maxHeight: "240px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}