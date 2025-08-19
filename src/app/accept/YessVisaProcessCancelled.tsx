'use client';

import React from "react";
import Image from "next/image";

type Props = {
  onFinish: () => void;
  onClose?: () => void;
};

export default function StepCancellationSortedModal({
  onFinish,
  onClose,
}: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#E6E4DF] bg-opacity-40 p-4" aria-modal="true" role="dialog">
      <div className="relative flex flex-row bg-white rounded-2xl p-10 min-w-[900px] max-w-[1200px] shadow-lg">
        {/* Left: Content */}
        <div className="flex-1 pr-10 flex flex-col justify-center">
          {/* Top navigation and progress */}
          <div className="flex items-center mb-2">
            <div className="font-bold text-gray-700 text-base tracking-wide flex-1">
              Subscription Cancelled
            </div>
            <div className="flex items-center gap-2 ml-4">
              <div className="h-2 w-16 bg-green-400 rounded-full" />
              <div className="h-2 w-16 bg-green-400 rounded-full" />
              <div className="h-2 w-16 bg-green-400 rounded-full" />
              <span className="ml-2 text-base text-green-500 font-bold">Completed</span>
            </div>
          </div>
          {/* Message */}
          <h2 className="text-4xl font-bold mb-4 mt-4 leading-tight">
            Your cancellation’s all sorted, mate,<br />no more charges.
          </h2>
          {/* Card with Mihailo */}
          <div className="bg-[#F7F6F4] rounded-xl p-6 mb-8 flex items-start gap-4 shadow">
            <Image
              src="/mihailo-profile.jpeg"
              alt="Mihailo Bozic"
              width={56}
              height={56}
              className="rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="font-semibold text-lg">Mihailo Bozic</div>
              <div className="text-gray-500 text-base mb-2">mihailo@migratemate.co</div>
              <div className="font-semibold mb-2">
                I’ll be reaching out soon to help with the visa side of things.
              </div>
              <div className="text-gray-700 mb-1">
                We’ve got your back, whether it’s questions, paperwork, or just figuring out your options.
              </div>
              <div className="text-gray-700">
                Keep an eye on your inbox, I’ll be in touch <a href="#" className="text-[#8662E6] underline">shortly</a>.
              </div>
            </div>
          </div>
          <button
            className="w-full py-3 rounded-xl font-bold text-lg bg-[#8662E6] text-white hover:bg-[#7b57d8] transition"
            onClick={onFinish}
          >
            Finish
          </button>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex items-center justify-center">
          <Image
            src="/empire-state-compressed.jpg"
            alt="Main"
            width={500}
            height={350}
            className="rounded-2xl object-cover"
          />
        </div>
        {/* Close button */}
        {onClose && (
          <button
            className="absolute top-6 right-6 text-2xl text-gray-400 hover:text-gray-700"
            onClick={onClose}
            aria-label="Close"
            type="button"
          >
            &times;
          </button>
        )}
      </div>
    </div>
  );
}